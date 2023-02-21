import { convertDate, convertDates } from "libs/date";
import React, { useState, useEffect } from "react";
import { FiRepeat } from "react-icons/fi";
import { DateEditor } from "./DateEditor/DateEditor";

import { Popover, ArrowContainer } from "react-tiny-popover";
import { DateTime } from "luxon";
import { Tooltip } from "antd";

export const Date = ({ data, getEvents, setScrollable, disabled }) => {
  const [editor, showEditor] = useState(false);

  useEffect(() => {
    //setScrollable(!editor)
  }, [setScrollable, editor]);

  if (disabled) {
    return (
      <div className="flex h-full w-full flex-1 select-none items-center justify-center hover:underline hover:decoration-dotted peer-hover:underline peer-hover:decoration-dotted">
        Date, Time
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <Popover
        content={({ position, childRect, popoverRect }) => (
          <ArrowContainer
            position={position}
            childRect={childRect}
            popoverRect={popoverRect}
            arrowColor={"#F3F4F7"}
            arrowSize={10}
          >
            <DateEditor
              data={data}
              showEditor={showEditor}
              getEvents={getEvents}
            />
          </ArrowContainer>
        )}
        isOpen={editor}
        reposition={true}
        positions={["bottom"]}
        containerClassName="relative z-40"
      >
        <button
          onClick={() => showEditor(!editor)}
          className={
            "absolute top-0 flex h-full w-full flex-1 items-center justify-center text-black hover:underline hover:decoration-dotted peer-hover:underline peer-hover:decoration-dotted" +
            (data.formatedStart.clumped_date === "Overdue"
              ? " text-red-700 "
              : "")
          }
        >
          <Tooltip
            title={data.convertedStart.toLocaleString(DateTime.DATETIME_HUGE)}
            color="#F3F4F7"
            overlayInnerStyle={{
              color: "black",
            }}
            mouseEnterDelay={0.5}
            mouseLeaveDelay={0}
          >
            <div
              className={
                "absolute top-0 flex h-full w-full flex-1 items-center justify-center text-black hover:underline hover:decoration-dotted peer-hover:underline peer-hover:decoration-dotted" +
                (data.formatedStart.clumped_date === "Overdue"
                  ? " text-red-700 "
                  : "")
              }
            >
              {convertDates(data.formatedStart, data.formatedEnd)}
              {data.recurrence ? <FiRepeat className="m-2 align-bottom" /> : ""}
            </div>
          </Tooltip>
        </button>
      </Popover>
    </div>
  );
};
