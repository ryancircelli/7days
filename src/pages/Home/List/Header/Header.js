import React from 'react';

export const Header = ({data, extraProps}) => {
  return (  
    <div className="flex flex-row">
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
          className="py-4 text-xl font-bold flex-1 text-center"
          key={prop.name}
        >
          {prop.name}
        </div>
      )}
      <div className="py-4 text-xl font-bold flex-1 text-center">
        Due Date
      </div>
    </div>
  );
}