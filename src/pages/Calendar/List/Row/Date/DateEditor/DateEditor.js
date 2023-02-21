import React, { useEffect, useRef, useState } from "react";
import { updateEvent } from "gapi/events";
import { DatePicker, Switch } from "antd";
import dayjs from "dayjs";
import { Recurring } from "./Recurring/Recurring";
import { RRule } from "rrule";
import deepEqual from "deep-equal";

export const DateEditor = ({ data, showEditor, getEvents }) => {
  console.log(data);

  const ref = useRef(null);
  const childrenRef = useRef([]);
  const [tab, setTab] = useState(
    data.type !== "day_event" &&
      data.convertedStart.toMillis() !== data.convertedEnd.toMillis()
      ? 1
      : 0
  );
  const [timeEnabled, setTimeEnabled] = useState(
    data.formatedStart.time !== null
  );

  const [recurringEnabled, setRecurringEnabled] = useState(
    data.recurrence ? true : false
  );
  let defaultWeekdays = [false, false, false, false, false, false, false];
  defaultWeekdays[data.convertedStart.weekday - 1] = true;
  let defaultRecurring = {
    freq: RRule.DAILY,
    freqRate: 1,
    weekdays: defaultWeekdays,
    ends: "never",
    ends_on: dayjs(data.convertedStart.toMillis()),
    ends_after: 1,
  };
  const [recurring, setRecurring] = useState(defaultRecurring);
  const [recurringOriginal, setRecurringOriginal] = useState(defaultRecurring);

  const convertRecurring = () => {
    let rule = {
      freq: recurring.freq,
      interval: recurring.freqRate,
      wkst: RRule.SU,
    };
    if (recurring.freq === RRule.WEEKLY)
      rule.byweekday = convertToWeekday(recurring.weekdays);
    if (recurring.ends === "on")
      rule.until = new Date(recurring.ends_on.toISOString());
    if (recurring.ends === "after") rule.count = recurring.ends_after;
    return new RRule(rule).toString();
  };

  useEffect(() => {
    console.log(data.recurrence);
    if (!recurringEnabled) return;
    let output = defaultRecurring;
    if (data.rrule.freq !== undefined) output.freq = data.rrule.freq;
    if (data.rrule.interval !== undefined)
      output.freqRate = data.rrule.interval;
    if (data.rrule.freq !== undefined) output.freq = data.rrule.freq;
    if (data.rrule.byweekday !== undefined) {
      let weekdays = [false, false, false, false, false, false, false];
      if (data.rrule.byweekday instanceof Array) {
        for (let i = 0; i < data.rrule.byweekday.length; i++) {
          // @ts-ignore
          let weekday = data.rrule.byweekday[i].weekday;
          weekday = (weekday + 1) % 7;
          weekdays[weekday] = true;
        }
      } else {
        // @ts-ignore
        weekdays[(data.rrule.byweekday.weekday + 1) % 7] = true;
      }
      output.weekdays = weekdays;
    }
    if (data.rrule.until !== undefined) {
      output.ends = "on";
      output.ends_on = dayjs(data.rrule.until);
    }
    if (data.rrule.count !== undefined) {
      output.ends = "after";
      output.ends_after = data.rrule.count;
    }
    setRecurring(output);
    setRecurringOriginal(output);
  }, []);

  const [startDate, setStartDate] = useState(
    dayjs(
      data.originalStart
        ? data.originalStart.date
          ? data.originalStart.date
          : data.originalStart.dateTime
        : data.convertedStart.valueOf()
    )
  );
  const [endDate, setEndDate] = useState(
    timeEnabled
      ? dayjs(
          data.originalEnd
            ? data.originalEnd.date
              ? data.originalEnd.date
              : data.originalEnd.dateTime
            : data.convertedEnd.valueOf()
        )
      : dayjs(
          data.originalEnd
            ? data.originalEnd.date
              ? data.originalEnd.date
              : data.originalEnd.dateTime
            : data.convertedEnd.valueOf()
        ).add(-1, "day")
  );

  useEffect(() => {
    if (endDate && startDate && endDate < startDate) setEndDate(startDate);
  }, [endDate, startDate]);

  const dateTimeFormat = "MMM D, YYYY h:mm a";
  const dateFormat = "MMM D, YYYY";

  useEffect(() => {
    const handleClickOutside = (event) => {
      let clickChildren = false;
      for (let childRef of childrenRef.current)
        if (childRef.contains(event.target)) clickChildren = true;
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !clickChildren
      ) {
        showEditor(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [showEditor]);

  const [timer, setTimer] = useState(null);

  function updateDateDelayed() {
    showEditor(false);
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setTimer(
      setTimeout(async () => {
        let newData = structuredClone(data);
        if (recurringEnabled) {
          newData.recurrence = [convertRecurring()];
        } else {
          newData.recurrence = [];
        }
        if (timeEnabled) {
          if (startDate) {
            newData.start.dateTime = startDate.toISOString();
            delete newData.start.date;
          }
          if (endDate) {
            newData.end.dateTime = endDate.toISOString();
            delete newData.end.date;
          }
          if (tab === 0) {
            newData.end.dateTime = newData.start.dateTime;
          }
        } else {
          if (startDate) {
            newData.start.date = startDate.toISOString().slice(0, 10);
            delete newData.start.dateTime;
          }
          if (endDate) {
            newData.end.date = endDate.add(1, "day").toISOString().slice(0, 10);
            delete newData.end.dateTime;
          }
          if (tab === 0) {
            newData.end.date = startDate
              .add(1, "day")
              .toISOString()
              .slice(0, 10);
            delete newData.end.dateTime;
          }
        }
        if (deepEqual(data, newData)) return;
        let output = {
          ...newData,
          type: undefined,
          recurringEventId: undefined,
        };
        await updateEvent(output);
        getEvents();
      }, 1000)
    );
  }

  const DateOptions = () => {
    return (
      <>
        <div className="m-1 flex flex-row items-center">
          <div className="flex w-[50%] flex-row items-center">
            <Switch
              checked={!timeEnabled}
              className="bg-gray-200"
              onChange={() => setTimeEnabled(!timeEnabled)}
            />
            <div className="mx-1">All-Day Task</div>
          </div>
          <div className="flex w-[50%] flex-row items-center">
            <Switch
              checked={recurringEnabled}
              className="bg-gray-200"
              onChange={() => setRecurringEnabled(!recurringEnabled)}
            />
            <div className="mx-1">Recurring</div>
          </div>
        </div>
        <Recurring
          recurringEnabled={recurringEnabled}
          recurring={recurring}
          setRecurring={setRecurring}
          childrenRef={childrenRef}
          defaultWeekdays={defaultWeekdays}
          startDate={startDate}
        />
        <button
          className="m-1 rounded-md bg-gray-200"
          onClick={() => updateDateDelayed()}
        >
          Save
        </button>
      </>
    );
  };

  return (
    <div
      ref={ref}
      className="z-[100] flex w-80 flex-col rounded-xl bg-gray-100 p-2"
    >
      <div className="flex h-6 w-full first-line:flex-row">
        <button
          className={
            "h-full flex-1 rounded-t-md " +
            (tab === 0 ? " bg-white " : " bg-gray-200 ")
          }
          onClick={() => setTab(0)}
        >
          Task
        </button>
        <button
          className={
            "h-full flex-1 rounded-t-md " +
            (tab === 1 ? " bg-white " : " bg-gray-200 ")
          }
          onClick={() => setTab(1)}
        >
          Event
        </button>
        <div className="h-full flex-1" />
      </div>
      <div className="flex w-full flex-1 rounded-b-lg rounded-r-lg bg-gray-200">
        {tab === 0 ? (
          <div className="flex w-full flex-1 rounded-b-lg rounded-r-lg bg-white">
            <div className="flex w-full flex-col p-1">
              <div className="flex w-full flex-col p-1">
                {recurringEnabled ? "Recurrence Start Date" : ""}
                <DatePicker
                  getPopupContainer={(node) =>
                    (childrenRef.current[
                      childrenRef.current ? childrenRef.current.length : 0
                    ] = node)
                  }
                  showTime={timeEnabled}
                  showToday
                  showNow
                  value={startDate}
                  onSelect={setStartDate}
                  onChange={setStartDate}
                  format={timeEnabled ? dateTimeFormat : dateFormat}
                  allowClear={false}
                  placement="topLeft"
                />
              </div>
              <DateOptions />
            </div>
          </div>
        ) : (
          <div className="flex w-full flex-1 rounded-lg bg-white">
            <div className="flex w-full flex-col p-1">
              <div className="flex w-full flex-col p-1">
                {recurringEnabled ? "Recurrence Start Date" : ""}
                <DatePicker
                  getPopupContainer={(node) =>
                    (childrenRef.current[
                      childrenRef.current ? childrenRef.current.length : 0
                    ] = node)
                  }
                  showTime={timeEnabled}
                  showToday
                  showNow
                  value={startDate}
                  onSelect={setStartDate}
                  onChange={setStartDate}
                  format={timeEnabled ? dateTimeFormat : dateFormat}
                  allowClear={false}
                  placement="topLeft"
                />
                <div className="flex items-center justify-center">-</div>
                <DatePicker
                  getPopupContainer={(node) =>
                    (childrenRef.current[
                      childrenRef.current ? childrenRef.current.length : 0
                    ] = node)
                  }
                  showTime={
                    timeEnabled
                      ? {
                          hideDisabledOptions: false,
                        }
                      : false
                  }
                  disabledDate={(current) =>
                    current && current.endOf("day") < startDate.endOf("day")
                  }
                  disabledTime={() => ({
                    disabledHours: () =>
                      Array.from(Array(startDate.hour()).keys()),
                    disabledMinutes: (hour) =>
                      startDate.hour() === hour
                        ? Array.from(Array(startDate.minute()).keys())
                        : [],
                  })}
                  showToday
                  showNow
                  value={endDate}
                  onSelect={setEndDate}
                  onChange={setEndDate}
                  format={timeEnabled ? dateTimeFormat : dateFormat}
                  allowClear={false}
                  placement="topLeft"
                />
              </div>
              <DateOptions />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const convertToWeekday = (booleanWeekdays) => {
  let output = [];
  for (let i = 0; i < booleanWeekdays.length; i++)
    if (booleanWeekdays[i] === true) output.push((i + 6) % 7);
  return output;
};
