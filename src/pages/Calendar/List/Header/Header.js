import { createEvent } from "gapi/events";
import { DateTime } from "luxon";
import React, { useRef } from "react";
import { TfiPlus } from "react-icons/tfi";

export const Header = ({
  data,
  extraProps,
  viewportRef,
  condensed,
  getEvents,
  calendar,
  date,
}) => {
  const ref = useRef(null);

  // const observer = new IntersectionObserver(
  //   ([e]) => e.target.classList.toggle("bg-red-100", e.isIntersecting || e.boundingClientRect.top < 0),
  //   { threshold: [1], root: viewportRef.current }
  // );

  // if(ref.current) observer.observe(ref.current);

  return (
    <div
      ref={ref}
      className={
        "group sticky -top-[1px] z-40 ml-2 mr-4 flex flex-row bg-white pl-2 pr-1 " +
        (condensed ? " h-10 border-b border-gray-100 pb-1 " : " h-12 pb-3 ")
      }
    >
      <div
        className="flex items-end text-xl font-bold"
        style={{
          flex: extraProps.length + 2,
        }}
      >
        {data}
      </div>
      <div className="w-8" />
      {extraProps.map((prop) => (
        <div
          className="flex flex-1 items-end justify-center text-xl font-bold"
          key={prop.name}
        >
          {prop.name}
        </div>
      ))}
      <div className="flex flex-[2] items-end justify-center text-xl font-bold">
        Due Date
      </div>
      <div className="invisible ml-1 -mb-0.5 flex w-12 items-end justify-end group-hover:visible">
        <button
          className="flex items-center justify-center rounded-xl bg-white p-2 hover:brightness-[0.975]"
          onClick={async () => {
            await createEvent(
              calendar.id,
              date.toString(),
              date.plus({ days: 1 }).toString()
            );
            getEvents();
          }}
        >
          <TfiPlus size={16} />
        </button>
      </div>
    </div>
  );
};
