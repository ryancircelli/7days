import React from 'react';
import { Checkbox } from './Checkbox';
import { Date } from './Date';
import { Dropdown } from './Dropdown';
import { Text } from './Text';
import { Url } from './Url';

export const Row = ({data, extraProps, getEvents}) => {
  return (
    <div className="flex flex-row h-12">
      <Checkbox
        data={data} 
        getEvents={getEvents} 
      />
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
      {extraProps.map((prop) => 
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
            />
          : (prop.type === "dropdown") ?
            <Dropdown
              data={data} 
              prop={prop} 
              getEvents={getEvents} 
              key={prop.name}
            />
          : 
            data.extendedProperties?.private[prop.name.toLowerCase()] 
        }
        </div>
      )}
      <div
        className="flex-1 flex items-center"
      >
        <Date
          data={data} 
          getEvents={getEvents} 
        />
      </div>
    </div>
  );
}