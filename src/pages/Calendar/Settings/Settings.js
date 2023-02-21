import { resetSettings } from "gapi/settings";
import React, { useState, useRef, useEffect } from "react";
import { Header } from "../List/Header/Header";
import { Completed } from "../List/Row/Completed/Completed";
import { Date } from "../List/Row/Date/Date";
import { PropDropdown } from "../List/Row/PropDropdown/PropDropdown";
import { Text } from "../List/Row/Text/Text";
import { Url } from "../List/Row/Url/Url";

export const Settings = ({ settings, className }) => {
  const extraProps = settings.extraProperties;
  return (
    <div
      className={
        "flex w-full flex-1 flex-col overflow-y-hidden p-2 " + className
      }
    >
      <div className="text-3xl">Settings</div>
      <div>
        <button
          onClick={() => {
            resetSettings();
          }}
          className="m-4 mb-0 rounded-lg bg-white p-2 brightness-[.975] hover:brightness-95"
        >
          Reset Settings
        </button>
        <Header
          data={"Name"}
          extraProps={extraProps}
          viewportRef={undefined}
          condensed={undefined}
        />
        <div className="group/row grid">
          <div
            className="z-1 pointer-events-none ml-4 mr-6 group-hover/row:border"
            style={{ gridArea: "1/1" }}
          />
          <div
            className="ml-4 mr-6 flex h-12 flex-row"
            style={{ gridArea: "1/1" }}
          >
            <div className="flex w-10 items-center justify-center">
              <Completed data={undefined} getEvents={undefined} disabled />
            </div>
            <div
              style={{
                flex: extraProps.length,
              }}
              className="flex items-center"
            >
              <Text data={undefined} getEvents={undefined} disabled />
            </div>
            {extraProps.map((prop, index) => (
              <div key={prop.name} className="flex-1">
                {prop.type === "url" ? (
                  <Url
                    data={undefined}
                    prop={prop}
                    getEvents={undefined}
                    key={prop.name}
                    changeDefault={false}
                    disabled
                  />
                ) : prop.type === "dropdown" ? (
                  <PropDropdown
                    data={undefined}
                    settings={settings}
                    prop={prop}
                    getEvents={undefined}
                    key={prop.name}
                    changeDefault={false}
                    disabled
                    getSavedSettings={undefined}
                  />
                ) : (
                  prop.name.toLowerCase()
                )}
              </div>
            ))}
            <div className="flex flex-[2] items-center">
              <Date
                data={undefined}
                getEvents={undefined}
                setScrollable={undefined}
                disabled
              />
            </div>
            <div className="invisible flex w-16 items-center justify-center group-hover/row:visible" />
          </div>
        </div>
      </div>
    </div>
  );
};
