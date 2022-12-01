import { updateEventPrivate } from 'gapi/events';
import React, { useState, useEffect, useRef } from 'react';

export const Dropdown = ({data, prop, getEvents}) => {
  const [show, setShow] = useState(false)
  const ref = useRef(null);
  let dropdown = JSON.parse(data.extendedProperties?.private[data.recurringEventId ? data.recurringEventId : "single"] || "{}")?.[prop.name.toLowerCase()];
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
        className="hover:border-2 peer-hover:border-2 border-white w-full h-full flex-1 flex justify-center items-center" 
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
                  className="py-3 px-4 mx-0.5 mt-0.5 rounded hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  style={{
                    background: option.color
                  }}
                  onClick={async () => {
                    let privateProps = {...data.extendedProperties?.private}
                    privateProps[data.recurringEventId ? data.recurringEventId : "single"] = JSON.stringify({
                      ...JSON.parse(privateProps[data.recurringEventId ? data.recurringEventId : "single"] || "{}"),
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
            </ul>
          </div>
        </div>
      : ""}
    </div>
  );
}