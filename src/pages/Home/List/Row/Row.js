import React, { useEffect } from 'react';
import { Completed } from './Completed/Completed';
import { Date } from './Date/Date';
import { PropDropdown } from './PropDropdown/PropDropdown';
import { Text } from './Text/Text';
import { Url } from './Url/Url';
import { SettingsButton } from './Settings/SettingsButton';

export const Row = ({data, settings, getSavedSettings, getEvents, viewportRef, setScrollable}) => {
  useEffect(()=>{}, [data, settings])
  return (
    <div className="grid group/row">
      <div className='z-1 group-hover/row:border pointer-events-none ml-4 mr-6' style={{gridArea: '1/1'}}/>
      <div className="flex flex-row h-12 ml-4 mr-6" style={{gridArea: '1/1'}}>
        <div className="flex w-10 justify-center items-center">
          <Completed
            data={data}
            getEvents={getEvents} 
            disabled={false}    
          />
        </div>
        <div
          style={{
            flex: settings.extraProperties.length
          }}
          className="flex items-center"
        >
          <Text
            data={data}
            getEvents={getEvents}
            disabled={false}    
          />
        </div>
        {settings.extraProperties.map((prop, index) => 
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
                disabled={false}    
              />
            : (prop.type === "dropdown") ?
              <PropDropdown
                data={data} 
                prop={prop} 
                getEvents={getEvents} 
                getSavedSettings={getSavedSettings}
                key={prop.name}
                changeDefault={false}
                disabled={false} 
                settings={settings}   
              />
            : 
              JSON.parse(data.extendedProperties?.private[data.recurringEventId ? data.recurringEventId : "single"] || "{}")?.[prop.name.toLowerCase()]
          }
          </div>
        )}
        <div
          className="flex-[2] flex items-center"
        >
          <Date
            data={data}
            getEvents={getEvents}
            setScrollable={setScrollable} 
            disabled={false}            
          />
        </div>
        <div
          className="flex w-12 justify-center items-center invisible group-hover/row:visible"
        >
          <SettingsButton data={data} extraProps={settings.extraProperties} getEvents={getEvents}/>
        </div>
      </div>
    </div>
  );
}