import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { Controls } from './Controls/Controls';
import { Header } from './Header/Header';
import { Row } from './Row/Row';

export const List = ({events, settings, getEvents}) => {

  const [filterCompleted, setFilterCompleted] = useState(false);

  const extraProps = settings.extraProperties;
  let filtered_events = events.filter((event) => 
    !(filterCompleted && event.extendedProperties?.private['completed'] === 'true')
  );
  let events_grouped = groupBy(filtered_events, event => event.formatedEnd.clumped_date)

  const toggleFilterCompleted = () => {
    setFilterCompleted(!filterCompleted);
  }

  return (
    <div className='w-full flex flex-col overflow-y-hidden'>
      <div className="sticky top-0 z-50">
        <Controls toggleFilterCompleted={toggleFilterCompleted} extraProps={extraProps}/>
      </div>
      <div className='w-full overflow-y-scroll'>
        {events_grouped.map(([key, value]) => {
          return (
            <div key={key}>
              <div className="sticky top-0 z-50">
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
      </div>
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