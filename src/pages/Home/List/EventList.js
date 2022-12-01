import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { Controls } from './Controls/Controls';
import { Header } from './Header/Header';
import { Row } from './Row/Row';
import { convertDate } from 'libs/date';

import { ViewportList } from 'react-viewport-list';

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

  const ref = useRef(null);
  const listRef = useRef(null);

  return (
    <div className={'w-full flex flex-1 flex-col overflow-y-hidden ' + className}>
      <div className="sticky top-0 z-50">
        <Controls toggleFilterCompleted={toggleFilterCompleted}/>
      </div>
      {/* <Scrollbars className='w-full flex-1'> */}
        <div className='w-full flex-1 overflow-y-scroll' ref={ref}>
          <ViewportList
            ref={listRef}
            viewportRef={ref}
            items={events_headered}
          >
            {(item) => (
              item.header ? 
                <div 
                  key={item.id} 
                  className="sticky top-0 left-0 w-full z-40 bg-white"
                >
                  <Header data={item.header} extraProps={extraProps}/>
                </div>
              :
                <div 
                  key={item.id} 
                >
                  <Row
                    data={item} 
                    extraProps={extraProps} 
                    getEvents={getEvents}
                  />
               </div>
            )}
          </ViewportList>
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