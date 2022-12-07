import React, { useEffect } from 'react';
import { Completed } from './Completed/Completed';
import { Date } from './Date/Date';
import { Dropdown } from './Dropdown/Dropdown';
import { Text } from './Text/Text';
import { Url } from './Url/Url';
import { SettingsButton } from './Settings/SettingsButton';

export const Row = ({data, extraProps, getEvents, viewportRef, setScrollable}) => {
  useEffect(()=>{},[data])
  return (
    <div className="grid group/row">
      <div className='z-1 group-hover/row:border pointer-events-none' style={{gridArea: '1/1'}}/>
      <div className="flex flex-row h-12 mr-4" style={{gridArea: '1/1'}}>
        <div className="flex w-10 justify-center items-center">
          <Completed
            data={data} 
            getEvents={getEvents} 
          />
        </div>
        <div
          style={{
            flex: extraProps.length
          }}
          className="flex items-center"
        >
          <Text
            data={data}
            getEvents={getEvents}
          />
        </div>
        {extraProps.map((prop, index) => 
          <div
            key={prop.name}
            className="flex-1"
          >
          {
            (prop.type === "url") ?
              <Url
                data={data} 
                prop={prop}
                getEvents={getEvents}
                key={prop.name}
                changeDefault={false}
              />
            : (prop.type === "dropdown") ?
              <Dropdown
                data={data} 
                prop={prop} 
                getEvents={getEvents} 
                key={prop.name}
                changeDefault={false}
              />
            : 
              JSON.parse(data.extendedProperties?.private[data.recurringEventId ? data.recurringEventId : "single"] || "{}")?.[prop.name.toLowerCase()]
          }
          </div>
        )}
        <div
          className="flex-[1.5] flex items-center"
        >
          <Date
            data={data} 
            getEvents={getEvents}
            setScrollable={setScrollable}
          />
        </div>
        <div
          className="flex w-16 justify-center items-center invisible group-hover/row:visible"
        >
          <SettingsButton data={data} extraProps={extraProps} getEvents={getEvents}/>
        </div>
      </div>
    </div>
  );
}