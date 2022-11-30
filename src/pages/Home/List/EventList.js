import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { Controls } from './Controls/Controls';
import { Header } from './Header/Header';
import { Row } from './Row/Row';
import { convertDate } from 'libs/date';

import { useVirtualizer } from '@tanstack/react-virtual'
import { Group } from './Group/Group';

export const EventList = ({events, settings, getEvents, className}) => {

  console.log(events)

  const [filterCompleted, setFilterCompleted] = useState(true);

  const extraProps = settings.extraProperties;
  let filtered_events = events.filter((event) => 
    !(filterCompleted && JSON.parse(event.extendedProperties?.private[event.recurringEventId ? event.recurringEventId : "single"] || "{}")?.completed === 'true')
  );
  let events_grouped = groupBy(filtered_events, event => convertDate(event.convertedEnd).clumped_date)

  let events_headered = addHeader(filtered_events, event => convertDate(event.convertedEnd).clumped_date)
  console.log(events_headered)

  const toggleFilterCompleted = () => {
    setFilterCompleted(!filterCompleted);
  }

  const parentRef = useRef(null)
  const activeStickyIndexRef = useRef(0)

  const virtualizer = useVirtualizer({
    count: events_grouped.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 45,
  })

  return (
    <div className={'w-full flex flex-1 flex-col overflow-y-hidden ' + className}>
      <div className="sticky top-0 z-50">
        <Controls toggleFilterCompleted={toggleFilterCompleted}/>
      </div>
      <div className='w-full flex-1' ref={parentRef}>
        <Scrollbars className='w-full flex-1'>
          <div
            style={{
              height: virtualizer.getTotalSize(),
              width: '100%',
              position: 'relative',
            }}
          >
            {virtualizer.getVirtualItems().map((virtualRow) => (
              <div
                key={virtualRow.key}
                data-index={virtualRow.index}
                ref={virtualizer.measureElement}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <div className="sticky top-0 z-40">
                  <Header data={events_grouped[virtualRow.index][0]} extraProps={extraProps}/>
                </div>
                <Group
                  getEvents={getEvents}
                  extraProps={extraProps}
                  data={events_grouped[virtualRow.index][1]} 
                />
            </div>
            ))}
          </div>
        </Scrollbars>
      </div>
      {/* <div className="sticky top-0 z-50">
        <Controls toggleFilterCompleted={toggleFilterCompleted}/>
      </div>
      <Scrollbars className='w-full flex-1'>
        {events_grouped.map(([key, value]) => {
          return (
            <div key={key}>
              <div className="sticky top-0 z-40">
                <Header data={key} extraProps={extraProps}/>
              </div>
              <div>
                {value.map((row) => 
                    <Row
                      key={row.id}
                      data={row} 
                      extraProps={extraProps} 
                      getEvents={getEvents}
                    />
                )}
              </div>
            </div>
          )
        })}
      </Scrollbars> */}
    </div>
  );
}

function groupBy(list, keyGetter) {
  let output = [];
  list.forEach((item) => {
    let key = keyGetter(item);
    if (output.length > 0 && output[output.length-1][0] === key) {
      output[output.length-1][1].push(item)
    } else {
      output.push([key, [item]])
    }
  });
  return output;
}

function addHeader(list, keyGetter) {
  let output = [];
  let lastHeaderIndex = 0;
  list.forEach((item) => {
    let key = keyGetter(item);
    if (output.length > 0 && output[lastHeaderIndex]?.header === key) {
      output.push(item)
    } else {
      output.push({
        header: key
      })
      lastHeaderIndex = output.length - 1
      output.push(item)
    }
  });
  return output;
}