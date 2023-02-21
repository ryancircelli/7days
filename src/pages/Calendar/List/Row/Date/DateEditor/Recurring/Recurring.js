import React from "react";
import { Select, InputNumber, Radio, DatePicker } from "antd";
import dayjs from "dayjs";
import { DateTime } from "luxon";
import { RRule } from "rrule";

export const Recurring = ({
  recurringEnabled,
  recurring,
  setRecurring,
  childrenRef,
  defaultWeekdays,
  startDate,
}) => {
  if (!recurringEnabled) return null;
  return (
    <div className="m-1 flex flex-col">
      <div className="flex flex-row items-center">
        <div className="flex-1">Repeat Every</div>
        <div className="flex flex-[2] flex-row items-center">
          <InputNumber
            min={1}
            value={recurring.freqRate}
            autoComplete="off"
            onChange={(value) =>
              setRecurring({
                ...recurring,
                freqRate: value,
              })
            }
            className="mx-1 flex-1"
          />
          <Select
            value={recurring.freq}
            className="flex-1"
            onChange={(value) =>
              setRecurring({
                ...recurring,
                freq: value,
              })
            }
            getPopupContainer={(node) =>
              (childrenRef.current[
                childrenRef.current ? childrenRef.current.length : 0
              ] = node)
            }
            options={[
              {
                value: RRule.DAILY,
                label: "day" + (recurring.freqRate > 1 ? "s" : ""),
              },
              {
                value: RRule.WEEKLY,
                label: "week" + (recurring.freqRate > 1 ? "s" : ""),
              },
              {
                value: RRule.MONTHLY,
                label: "month" + (recurring.freqRate > 1 ? "s" : ""),
              },
              {
                value: RRule.YEARLY,
                label: "year" + (recurring.freqRate > 1 ? "s" : ""),
              },
            ]}
          />
        </div>
      </div>
      {recurring.freq === RRule.WEEKLY ? (
        <div className="flex flex-col">
          <div className="my-1">Repeat On</div>
          <div className="flex flex-row items-center justify-center">
            {recurring.weekdays.map((weekday, index) => (
              <button
                key={index}
                className={
                  "m-1 h-8 w-8 rounded-full text-center text-xs " +
                  (weekday ? "bg-[#1677ff] text-white" : "bg-gray-100")
                }
                onClick={() => {
                  let newWeekdays = recurring.weekdays;
                  newWeekdays[index] = !newWeekdays[index];
                  if (!newWeekdays.includes(true))
                    newWeekdays = defaultWeekdays;
                  setRecurring({
                    ...recurring,
                    weekdays: newWeekdays,
                  });
                }}
              >
                {DateTime.now()
                  .startOf("week")
                  .plus({ days: index - 1 })
                  .toFormat("ccccc")}
              </button>
            ))}
          </div>
        </div>
      ) : null}
      <div className="mt-1 flex flex-col">
        <div>Ends</div>
        <Radio.Group
          onChange={(e) =>
            setRecurring({
              ...recurring,
              ends: e.target.value,
            })
          }
          value={recurring.ends}
          className="flex flex-col"
        >
          <div className="my-1 flex flex-row items-center justify-center">
            <Radio value={"never"} className="flex-1">
              Never
            </Radio>
            <div className="flex-[2]">
              <InputNumber
                disabled
                autoComplete="off"
                className="invisible w-full"
              />
            </div>
          </div>
          <div className="my-1 flex flex-row items-center justify-center">
            <Radio value={"on"} className="flex-1">
              On
            </Radio>
            <div className="flex-[2]">
              <DatePicker
                getPopupContainer={(node) =>
                  (childrenRef.current[
                    childrenRef.current ? childrenRef.current.length : 0
                  ] = node)
                }
                showToday
                disabled={recurring.ends !== "on"}
                placeholder={dayjs(recurring.ends_on).format("MMM D, YYYY")}
                defaultValue={recurring.ends_on}
                value={recurring.ends_on}
                onSelect={(value) =>
                  setRecurring({
                    ...recurring,
                    ends_on: value,
                  })
                }
                onOk={(value) =>
                  setRecurring({
                    ...recurring,
                    ends_on: value,
                  })
                }
                disabledDate={(current) =>
                  current && current.endOf("day") < startDate.endOf("day")
                }
                format={"MMM D, YYYY"}
                className="w-full"
                allowClear={false}
                placement="topLeft"
              />
            </div>
          </div>
          <div className="my-1 flex flex-row items-center justify-center">
            <Radio value={"after"} className="flex-1">
              After
            </Radio>
            <div className="flex-[2]">
              <InputNumber
                addonAfter={"occurance" + (recurring.ends_after > 1 ? "s" : "")}
                autoComplete="off"
                disabled={recurring.ends !== "after"}
                onChange={(value) =>
                  setRecurring({
                    ...recurring,
                    ends_after: value,
                  })
                }
                min={1}
                value={recurring.ends_after}
                className="w-full"
              />
            </div>
          </div>
        </Radio.Group>
      </div>
    </div>
  );
};
