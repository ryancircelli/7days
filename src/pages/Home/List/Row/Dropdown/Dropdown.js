import { updateEventPrivate } from 'gapi/events';
import React, { useState, useEffect, useRef } from 'react';

export const Dropdown = ({data, prop, getEvents, changeDefault}) => {
  const [show, setShow] = useState(false)
  const ref = useRef(null);

  let key = data.recurringEventId && !changeDefault && (JSON.parse(data.extendedProperties?.private[data.recurringEventId] || "{}")[prop.name.toLowerCase()] !== undefined) ? data.recurringEventId : 'default'
  let dropdown = JSON.parse(data.extendedProperties?.private[key] || "{}")?.[prop.name.toLowerCase()];
  
  if (dropdown && (typeof dropdown === 'string'))
   dropdown = JSON.parse(dropdown)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false)
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div ref={ref} className="w-full h-full">
      <button 
        onClick={()=> setShow(!show)} 
        className="hover:border-[1px] peer-hover:border-[1px] border-black w-full h-full flex-1 flex justify-center items-center" 
        style={{
          background: dropdown?.color
        }}
      >
        {dropdown?.name ? dropdown?.name : "-"}
      </button>
      {show ? 
        <div className="h-0 overflow-visible peer">
          <div className="pb-0.5 relative z-50 bg-white rounded-b divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul className="text-gray-700 dark:text-gray-200 flex flex-col">
              {prop.options.map((option) => 
                <button
                  key={option.name}
                  className="py-3 px-4 mx-0.5 mt-0.5 rounded hover:brightness-95"
                  style={{
                    background: option.color
                  }}
                  onClick={async () => {
                    let privateProps = {...data.extendedProperties?.private}
                    let key = data.recurringEventId && !changeDefault ? data.recurringEventId : 'default'
                    privateProps[key] = JSON.stringify({
                      ...JSON.parse(privateProps[key] || "{}"),
                      [prop.name.toLowerCase()]: option
                    })
                    setShow(false);
                    await updateEventPrivate(data, privateProps);
                    getEvents();
                  }}
                >
                  {option.name}
                </button>
              )}
                <button
                  className="py-3 px-4 mx-0.5 mt-0.5 rounded bg-white hover:brightness-95"
                  onClick={async () => {
                    let privateProps = {...data.extendedProperties?.private}
                    let key = data.recurringEventId && !changeDefault ? data.recurringEventId : 'default'
                    let privatePropsKey = JSON.parse(privateProps[key] || "{}")
                    delete privatePropsKey[prop.name.toLowerCase()]
                    privateProps[key] = JSON.stringify(privatePropsKey)
                    setShow(false);
                    await updateEventPrivate(data, privateProps);
                    getEvents();
                  }}
                >
                  -
                </button>
            </ul>
          </div>
        </div>
      : ""}
    </div>
  );
}