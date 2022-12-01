import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { Controls } from './Controls/Controls';
import { Header } from './Header/Header';
import { Row } from './Row/Row';
import { convertDate } from 'libs/date';

import { defaultRangeExtractor, useVirtualizer } from '@tanstack/react-virtual'

export const EventList = ({events, settings, getEvents, className}) => {

  const [filterCompleted, setFilterCompleted] = useState(true);

  const extraProps = settings.extraProperties;
  let filtered_events = events.filter((event) => 
    !(filterCompleted && JSON.parse(event.extendedProperties?.private[event.recurringEventId ? event.recurringEventId : "single"] || "{}")?.completed === 'true')
  );

  let events_headered = addHeader(filtered_events, event => convertDate(event.convertedEnd).clumped_date)

  const toggleFilterCompleted = () => {
    setFilterCompleted(!filterCompleted);
  }

  const parentRef = useRef(null)

  const activeStickyIndexRef = useRef(0)

  const stickyIndexes = useMemo(
    () => events_headered.filter((event) => event.header).map((event) => event.lastHeaderIndex).slice(1),
    [],
  )

  const virtualizer = useVirtualizer({
    estimateSize: () => 48,
    count: events_headered.length,
    overscan: 5,
    debug: true,
    getScrollElement: () => parentRef.current,
    rangeExtractor: useCallback(
      (range) => {
        
        activeStickyIndexRef.current = [...stickyIndexes]
          .reverse()
          .find((index) => range.startIndex >= index)

        const next = new Set([
          activeStickyIndexRef.current,
          ...defaultRangeExtractor(range),
        ])

        return [...next].sort((a, b) => a - b)
      },
      [stickyIndexes],
    ),
  })

  return (
    <div className={'w-full flex flex-1 flex-col overflow-y-hidden ' + className}>
      <div className="sticky top-0 z-50">
        <Controls toggleFilterCompleted={toggleFilterCompleted}/>
      </div>
      {/* <Scrollbars className='w-full flex-1'> */}
        <div className='w-full flex-1 overflow-y-scroll' ref={parentRef}>
          <div
            style={{
              height: virtualizer.getTotalSize(),
              width: '100%',
              position: 'relative',
            }}
          >
            {virtualizer.getVirtualItems().map((virtualRow) => (
              events_headered[virtualRow.index].header ?
                <div                   
                  key={virtualRow.key}
                  data-index={virtualRow.index}
                  ref={virtualizer.measureElement}
                  className={virtualRow.index === activeStickyIndexRef.current ? "sticky top-0 left-0 w-full z-40 bg-white" : ""}
                  style={virtualRow.index !== activeStickyIndexRef.current ? {
                    position: 'absolute',
                    transform: `translateY(${virtualRow.start}px)`,
                    top: 0,
                    left: 0,
                    width: '100%',
                    background: "white"
                  } : {}}
                >
                  <Header data={events_headered[virtualRow.index].header} extraProps={extraProps}/>
                </div>
              :
                <div                   
                  key={virtualRow.key}
                  data-index={virtualRow.index}
                  ref={virtualizer.measureElement}
                  style={{
                    position: 'absolute',
                    transform: `translateY(${virtualRow.start}px)`,
                    top: 0,
                    left: 0,
                    width: '100%',
                  }}
                >
                  <Row
                    data={events_headered[virtualRow.index]} 
                    extraProps={extraProps} 
                    getEvents={getEvents}
                  />
                </div>
            ))}
          </div>
        </div>
      {/* </Scrollbars> */}
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

function addHeader(list, keyGetter) {
  let output = [];
  let lastHeaderIndex = 0;
  list.forEach((item) => {
    let key = keyGetter(item);
    if (output.length > 0 && output[lastHeaderIndex]?.header === key) {
      output.push(item)
    } else {
      output.push({
        header: key,
        lastHeaderIndex: lastHeaderIndex
      })
      lastHeaderIndex = output.length - 1
      output.push(item)
    }
  });
  return output;
}