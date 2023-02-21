import React, { useEffect } from "react";
import { Completed } from "./Completed/Completed";
import { Date } from "./Date/Date";
import { PropDropdown } from "./PropDropdown/PropDropdown";
import { Text } from "./Text/Text";
import { Url } from "./Url/Url";
import { SettingsButton } from "./Settings/SettingsButton";

export const Row = ({
  data,
  settings,
  getSavedSettings,
  getEvents,
  viewportRef,
  setScrollable,
  condensed,
  last,
  first,
}) => {
  useEffect(() => {}, [data, settings]);
  return (
    <div className="group/row grid">
      <div
        className={
          "z-1 pointer-events-none ml-4 mr-6 border-gray-100 group-hover/row:border " +
          (condensed && !first ? " group-hover/row:border-t-0 " : " ")
        }
        style={{ gridArea: "1/1" }}
      />
      <div
        className={
          "ml-4 mr-6 flex flex-row border-gray-100 " +
          (condensed ? " h-9 " : " h-12 ") +
          (condensed && !last ? " border-b " : " ")
        }
        style={{ gridArea: "1/1" }}
      >
        <div className="flex w-10 items-center justify-center">
          <Completed data={data} getEvents={getEvents} disabled={false} />
        </div>
        <div
          style={{
            flex: settings.extraProperties.length + 2,
          }}
          className="flex items-center"
        >
          <Text data={data} getEvents={getEvents} disabled={false} />
        </div>
        {settings.extraProperties.map((prop, index) => (
          <div key={prop.name} className="flex-1">
            {prop.type === "url" ? (
              <Url
                data={data}
                prop={prop}
                getEvents={getEvents}
                key={prop.name}
                changeDefault={false}
                disabled={false}
              />
            ) : prop.type === "dropdown" ? (
              <PropDropdown
                data={data}
                prop={prop}
                getEvents={getEvents}
                getSavedSettings={getSavedSettings}
                key={prop.name}
                changeDefault={false}
                disabled={false}
                settings={settings}
              />
            ) : (
              JSON.parse(
                data.extendedProperties?.private[
                  data.recurringEventId
                    ? "recurrecnce" + data.recurringEventId
                    : "default"
                ] || "{}"
              )?.[prop.name.toLowerCase()]
            )}
          </div>
        ))}
        <div className="flex flex-[2] items-center">
          <Date
            data={data}
            getEvents={getEvents}
            setScrollable={setScrollable}
            disabled={false}
          />
        </div>
        <div className="invisible flex w-12 items-center justify-center group-hover/row:visible">
          <SettingsButton
            data={data}
            extraProps={settings.extraProperties}
            getEvents={getEvents}
          />
        </div>
      </div>
    </div>
  );
};
