import { createEvent } from 'gapi/events';
import { DateTime } from 'luxon';
import React, { useRef } from 'react';
import { TfiPlus } from 'react-icons/tfi';

export const Header = ({data, extraProps, viewportRef, condensed, getEvents, calendar, date}) => {

  const ref = useRef(null)

  // const observer = new IntersectionObserver( 
  //   ([e]) => e.target.classList.toggle("bg-red-100", e.isIntersecting || e.boundingClientRect.top < 0),
  //   { threshold: [1], root: viewportRef.current }
  // );
  
  // if(ref.current) observer.observe(ref.current);

  return (  
    <div ref={ref} className={"group sticky -top-[1px] z-40 flex flex-row ml-2 pl-2 pr-1 mr-4 bg-white " + (condensed ? " h-10 border-gray-100 border-b pb-1 " : " h-12 pb-3 ")}>
      <div
        className="text-xl font-bold flex items-end"
        style={{
          flex: extraProps.length + 2
        }}
      >
        {data}
      </div>
      <div className="w-8"/>
      {extraProps.map((prop) =>
        <div
          className="text-xl font-bold flex-1 flex items-end justify-center"
          key={prop.name}
        >
          {prop.name}
        </div>
      )}
      <div className="text-xl font-bold flex-[2] flex items-end justify-center">
        Due Date
      </div>
      <div className='w-12 ml-1 flex items-end justify-end invisible group-hover:visible -mb-0.5'>
        <button 
          className='bg-white hover:brightness-[0.975] flex items-center justify-center rounded-xl p-2'
          onClick={async ()=>{
            await createEvent(calendar.id, date.toString(), date.plus({days: 1}).toString())
            getEvents()
          }}
        >
          <TfiPlus size={16}/>
        </button>
      </div>
    </div>
  );
}