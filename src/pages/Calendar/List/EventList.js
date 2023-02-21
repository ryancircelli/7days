import React, { useState, useRef, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import { Controls } from "./Controls/Controls";
import { Header } from "./Header/Header";
import { Row } from "./Row/Row";
import { convertDate } from "libs/date";

import { ViewportList } from "react-viewport-list";
import { DateTime } from "luxon";
import { createEvent } from "gapi/events";

export const EventList = ({
  events,
  settings,
  getSavedSettings,
  getEvents,
  className,
  calendar,
}) => {
  const [filterCompleted, setFilterCompleted] = useState(true);
  const [filterFuture30, setFilterFuture30] = useState(true);
  const [scrollable, setScrollable] = useState(true);
  const [condensed, setCondensed] = useState(true);
  console.log(events);

  const extraProps = settings?.extraProperties;
  let filtered_events = events?.filter(
    (event) =>
      !(
        filterCompleted &&
        JSON.parse(
          event.extendedProperties?.private[
            event.recurringEventId
              ? "recurrecnce" + event.recurringEventId
              : "default"
          ] || "{}"
        )?.completed === true
      ) &&
      !(
        filterFuture30 &&
        event.convertedStart > DateTime.now().plus({ days: 30 })
      )
  );

  let events_grouped = groupBy(
    filtered_events,
    (event) => convertDate(event.convertedStart).clumped_date
  );

  const ref = useRef(null);
  const listRef = useRef([]);

  return (
    <div
      className={"flex w-full flex-1 flex-col overflow-y-hidden " + className}
    >
      <div className="sticky top-0">
        <Controls
          setFilterCompleted={setFilterCompleted}
          setFilterFuture30={setFilterFuture30}
          condensed={condensed}
          setCondensed={setCondensed}
          listRef={listRef}
          events_grouped={events_grouped}
          filterCompleted={filterCompleted}
          filterFuture30={filterFuture30}
          getEvents={getEvents}
        />
      </div>
      <div className="w-full flex-1" ref={ref}>
        <Scrollbars
          className="w-full"
          autoHide
          renderThumbVertical={() => (
            <div
              style={{
                cursor: "pointer",
                borderRadius: "inherit",
                backgroundColor: "rgba(0,0,0,.2)",
                zIndex: 100,
              }}
            />
          )}
          renderTrackVertical={() => (
            <div
              style={{
                position: "absolute",
                width: 6,
                right: 2,
                bottom: 2,
                top: 60,
                borderRadius: 3,
                zIndex: 100,
              }}
            />
          )}
          renderView={(props) => (
            <div
              {...props}
              className={
                "!overflow-x-hidden " +
                (scrollable ? "" : " !mr-0 !overflow-hidden ")
              }
            />
          )}
        >
          {events_grouped.map(([key, value], index) => {
            return (
              <div
                key={key}
                ref={(el) => (listRef.current[index] = el)}
                style={{ willChange: "transform" }}
              >
                <Header
                  data={key}
                  date={value[0].convertedStart}
                  extraProps={extraProps}
                  viewportRef={ref}
                  condensed={condensed}
                  getEvents={getEvents}
                  calendar={calendar}
                />
                <ViewportList
                  viewportRef={ref}
                  items={value}
                  overscan={10}
                  itemMinSize={condensed ? 36 : 48}
                >
                  {(item, i) => (
                    <Row
                      key={item.id + item.convertedStart}
                      data={item}
                      settings={settings}
                      getEvents={getEvents}
                      getSavedSettings={getSavedSettings}
                      viewportRef={ref}
                      setScrollable={setScrollable}
                      condensed={condensed}
                      last={i === value.length - 1}
                      first={i === 0}
                    />
                  )}
                </ViewportList>
                <div className="h-2" />
              </div>
            );
          })}
          <div className="flex h-14 items-start justify-center">
            <button
              className="flex items-center justify-center rounded-xl bg-white p-2 px-4 text-sm hover:brightness-[0.975]"
              onClick={async () => {
                await createEvent(calendar.id);
                getEvents();
              }}
            >
              Create New Event
            </button>
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

function groupBy(list, keyGetter) {
  let output = [];
  list?.forEach((item) => {
    let key = keyGetter(item);
    if (output.length > 0 && output[output.length - 1][0] === key) {
      output[output.length - 1][1].push(item);
    } else {
      output.push([key, [item]]);
    }
  });
  return output;
}
