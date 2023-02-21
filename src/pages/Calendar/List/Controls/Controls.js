import { Select } from "antd";
import { SlEqualizer, SlRefresh } from "react-icons/sl";
import React, { useEffect, useRef, useState } from "react";

export const Controls = ({
  setFilterCompleted,
  filterCompleted,
  setFilterFuture30,
  filterFuture30,
  listRef,
  events_grouped,
  getEvents,
  setCondensed,
  condensed,
}) => {
  const timer = useRef(null);

  const [selectedFilter, setSelectedFilter] = useState([]);

  const [buttonHover, setButtonHover] = useState(false);
  const [dropdownHover, setDropdownHover] = useState(false);

  const options = [
    {
      label: <div className="mt-[3px]">Condensed View</div>,
      value: "condensed",
      className:
        "!my-[3px] !pt-[3px] !rounded-xl !bg-white hover:brightness-95",
    },
    {
      label: <div className="mt-[3px]">Filter Completed</div>,
      value: "filterCompleted",
      className:
        "!my-[3px] !pt-[3px] !rounded-xl !bg-white hover:brightness-95",
    },
    {
      label: <div className="mt-[3px]">Filter Next 30 Days</div>,
      value: "filterFuture30",
      className:
        "!my-[3px] !pt-[3px] !rounded-xl !bg-white hover:brightness-95",
    },
  ];

  useEffect(() => {
    let newSelectedFilter = [];
    if (filterCompleted) newSelectedFilter.push("filterCompleted");
    if (filterFuture30) newSelectedFilter.push("filterFuture30");
    if (condensed) newSelectedFilter.push("condensed");
    setSelectedFilter(newSelectedFilter);
  }, []);

  return (
    <div className="w-full">
      <div className="flex w-full flex-row justify-between px-2">
        <button
          className="mt-2 rounded-xl bg-white p-2 hover:brightness-[0.975]"
          onClick={() => {
            listRef.current[1].scrollIntoView();
          }}
        >
          Today
        </button>
        <div className="w-48" onMouseLeave={() => setButtonHover(false)}>
          <button
            className="absolute right-14 mx-2 mt-2 rounded-xl bg-white p-3 hover:brightness-[0.975]"
            onClick={() => getEvents()}
            onMouseEnter={() => {
              clearInterval(timer.current);
              timer.current = null;
              setButtonHover(false);
            }}
          >
            <SlRefresh size={16} />
          </button>
          <button
            className={
              "absolute right-2 mx-2 mt-2 rounded-xl bg-white p-3 hover:brightness-[0.975] " +
              (buttonHover || dropdownHover ? " brightness-[0.975] " : " ")
            }
            onMouseEnter={() => {
              clearInterval(timer.current);
              timer.current = null;
              setButtonHover(true);
            }}
            onMouseLeave={() => {
              timer.current = setTimeout(() => {
                setButtonHover(false);
              }, 500);
            }}
            onClick={() => {
              setButtonHover(!buttonHover);
            }}
          >
            <SlEqualizer size={16} />
          </button>
          <Select
            mode="multiple"
            open={buttonHover || dropdownHover}
            className="invisible absolute top-3 right-2 w-48"
            tagRender={() => null}
            value={selectedFilter}
            onSelect={(selectFilter) => {
              setSelectedFilter([...selectedFilter, selectFilter]);
              if (selectFilter === "filterCompleted") setFilterCompleted(true);
              if (selectFilter === "filterFuture30") setFilterFuture30(true);
              if (selectFilter === "condensed") setCondensed(true);
            }}
            onDeselect={(selectFilter) => {
              setSelectedFilter(
                selectedFilter.filter((filter) => filter !== selectFilter)
              );
              if (selectFilter === "filterCompleted") setFilterCompleted(false);
              if (selectFilter === "filterFuture30") setFilterFuture30(false);
              if (selectFilter === "condensed") setCondensed(false);
            }}
            onMouseEnter={() => {
              setDropdownHover(true);
            }}
            onMouseLeave={() => {
              setDropdownHover(false);
            }}
            popupClassName="px-[6px] py-[4px] rounded-2xl"
            options={options}
          />
        </div>
      </div>
    </div>
  );
};
