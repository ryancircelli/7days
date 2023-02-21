import React, { useState } from "react";
import { FiList, FiCalendar, FiSettings, FiChevronRight } from "react-icons/fi";

export const CalendarMenu = ({ page, setPage }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={
        " flex flex-col py-4 transition-[width] duration-150 ease-in-out" +
        (collapsed ? " w-12 " : " w-36 ")
      }
    >
      <MenuItem
        collapsed={collapsed}
        name={"Upcoming"}
        iconName={FiList}
        selected={page === "upcoming"}
        icon={undefined}
        onClick={() => setPage("upcoming")}
        className={undefined}
      />
      <MenuItem
        collapsed={collapsed}
        name={"Calendar"}
        iconName={FiCalendar}
        selected={page === "calendar"}
        icon={undefined}
        onClick={() => setPage("calendar")}
        className={undefined}
      />
      <MenuItem
        collapsed={collapsed}
        name={"Settings"}
        iconName={FiSettings}
        selected={page === "settings"}
        icon={undefined}
        onClick={() => setPage("settings")}
        className={undefined}
      />
      <MenuItem
        collapsed={collapsed}
        name={"Settings"}
        icon={
          <FiChevronRight
            size={32}
            className={
              "items-end rounded-xl stroke-white p-2 align-bottom transition-[transform] duration-100 ease-in-out " +
              (collapsed
                ? " hover:bg-[rgba(255,255,255,0.2)] "
                : " rotate-180 ")
            }
          />
        }
        selected={false}
        iconName={undefined}
        onClick={() => toggleCollapsed()}
        className="mt-auto"
      />
    </div>
  );
};

const MenuItem = ({
  collapsed,
  name,
  iconName,
  icon,
  selected,
  onClick,
  className,
}) => {
  let IconComponent = icon;
  if (iconName) {
    const Icon = iconName;
    IconComponent = (
      <Icon
        size={32}
        className={
          "rounded-xl stroke-white p-2 align-bottom" +
          (collapsed ? " hover:bg-[rgba(255,255,255,0.2)] " : " ") +
          (selected && collapsed ? " bg-[rgba(255,255,255,0.05)] " : " ")
        }
      />
    );
  }
  return (
    <button
      className={
        "content my-1 inline-flex w-fit items-center overflow-hidden whitespace-nowrap rounded-xl text-white " +
        (collapsed ? " " : " hover:bg-[rgba(255,255,255,0.2)] ") +
        (selected && !collapsed ? " bg-[rgba(255,255,255,0.05)] " : " ") +
        (" " + className)
      }
      onClick={onClick}
    >
      {IconComponent}
      <div
        className={
          "transition-[opacity] duration-150 ease-in-out" +
          (collapsed
            ? " pointer-events-none opacity-0 "
            : " opacity-100 delay-75 ")
        }
      >
        <div
          className={
            "mr-4 text-sm transition-[transform] duration-150 ease-in-out" +
            (collapsed ? " -translate-x-36 delay-75 " : " translate-x-0")
          }
        >
          {name}
        </div>
      </div>
    </button>
  );
};
