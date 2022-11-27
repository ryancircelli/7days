import React from 'react';

export const Header = ({data, extraProps}) => {
  return (  
    <div className="flex flex-row px-4 bg-red-600">
      <div
        className="py-4 text-xl font-bold"
        style={{
          flex: extraProps.length
        }}
      >
        {data}
      </div>
      <div className="w-8"/>
      {extraProps.map((prop) =>
        <div
          className="py-4 text-xl font-bold flex-1"
          key={prop.name}
        >
          {prop.name}
        </div>
      )}
      <div className="py-4 text-xl font-bold flex-1">
        Due Date
      </div>
    </div>
  );
}