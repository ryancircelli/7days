import { updateEventPrivate } from 'gapi/events';
import React, { useState } from 'react';
import { Checkbox } from 'antd';

export const Completed = ({data, getEvents, disabled}) => {
  const [check, setCheck] = useState(JSON.parse(data?.extendedProperties?.private[data.recurringEventId ? data.recurringEventId : "single"] || "{}")?.completed === true)
  return (  
    <Checkbox
      disabled={disabled}
      checked={check}
      onChange={async () => {
        let privateProps = {...data?.extendedProperties?.private}
        privateProps[data?.recurringEventId ? data?.recurringEventId : "single"] = JSON.stringify({
          ...JSON.parse(privateProps[data?.recurringEventId ? data?.recurringEventId : "single"] || "{}"),
          'completed': !check
        })
        setCheck(!check);
        await updateEventPrivate(data, privateProps);
        getEvents();
      }}
    />
  );
}