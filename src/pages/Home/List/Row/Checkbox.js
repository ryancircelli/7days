import { updateEventPrivate } from 'gapi/events';
import React, { useState } from 'react';

export const Checkbox = ({data, getEvents}) => {
  const [check, setCheck] = useState(data.extendedProperties?.private['completed'] === 'true')
  return (  
    <div className="flex w-8 justify-center items-center">
      <input 
        type="checkbox" 
        checked={check}
        className="h-4 w-4 focus:ring-blue-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
        onChange={async () => {
          let newPrivate = {...data.extendedProperties?.private}
          newPrivate['completed'] = !check;
          setCheck(!check);
          await updateEventPrivate(data, newPrivate);
          getEvents();
        }}
      />
    </div>
  );
}