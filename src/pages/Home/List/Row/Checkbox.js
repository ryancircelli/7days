import { updateEventPrivate } from 'gapi/events';
import React, { useState } from 'react';

export const Checkbox = ({data, getEvents}) => {
  const [check, setCheck] = useState(JSON.parse(data.extendedProperties?.private[data.recurringEventId ? data.recurringEventId : "single"] || "{}")?.completed === true)
  return (  
    <input 
      type="checkbox" 
      checked={check}
      className="h-4 w-4 focus:ring-blue-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
      onChange={async () => {
        let privateProps = {...data.extendedProperties?.private}
        privateProps[data.recurringEventId ? data.recurringEventId : "single"] = JSON.stringify({
          ...JSON.parse(privateProps[data.recurringEventId ? data.recurringEventId : "single"] || "{}"),
          'completed': !check
        })
        setCheck(!check);
        await updateEventPrivate(data, privateProps);
        getEvents();
      }}
    />
  );
}