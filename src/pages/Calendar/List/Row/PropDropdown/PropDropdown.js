import { updateEventPrivate } from "gapi/events";
import React, { useState, useEffect, useRef } from "react";
import { Dropdown, Modal } from "antd";
import { FaTrash, FaPlus, FaCheck } from "react-icons/fa";
import { updateSettings } from "gapi/settings";
import { ColorPicker } from "./ColorPicker/ColorPicker";

export const PropDropdown = ({
  data,
  settings,
  getSavedSettings,
  prop,
  getEvents,
  changeDefault,
  disabled,
}) => {
  let key =
    data?.recurringEventId &&
    !changeDefault &&
    JSON.parse(
      data?.extendedProperties?.private[
        "recurrecnce" + data.recurringEventId
      ] || "{}"
    )[prop.name.toLowerCase()] !== undefined
      ? "recurrecnce" + data.recurringEventId
      : "default";

  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newOptions, setNewOptions] = useState(prop?.options);
  const [items, setItems] = useState([]);

  const [dropdown, setDropdown] = useState();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    let dropdown1 = JSON.parse(
      data?.extendedProperties?.private[key] || "{}"
    )?.[prop.name.toLowerCase()];
    if (dropdown1 && typeof dropdown1 === "string")
      dropdown1 = JSON.parse(dropdown1);
    setDropdown(dropdown1);
  }, [data, key, prop.name]);

  useEffect(() => {
    let curItems = newOptions.map((option) => {
      return {
        key: option.index,
        className: "!p-0.5 !bg-transparent",
        label: (
          <div className="rounded bg-white brightness-95 hover:brightness-90">
            <button
              className="m-0 flex w-full flex-row items-center justify-center rounded py-3 hover:brightness-95"
              style={{
                background: option.color,
              }}
              onClick={async (e) => {
                let privateProps = { ...data.extendedProperties?.private };
                let key =
                  data.recurringEventId && !changeDefault
                    ? "recurrecnce" + data.recurringEventId
                    : "default";
                privateProps[key] = JSON.stringify({
                  ...JSON.parse(privateProps[key] || "{}"),
                  [prop.name.toLowerCase()]: option,
                });
                setShow(false);
                await updateEventPrivate(data, privateProps);
                getEvents();
              }}
            >
              {option.name}
            </button>
          </div>
        ),
      };
    });

    curItems.push({
      key: "edit",
      className: "!p-0.5 !bg-transparent",
      label: (
        <div className="flex flex-row space-x-1">
          <button
            className="flex-1 rounded bg-white brightness-95 hover:brightness-90"
            onClick={async () => {
              let privateProps = { ...data.extendedProperties?.private };
              let key =
                data.recurringEventId && !changeDefault
                  ? "recurrecnce" + data.recurringEventId
                  : "default";
              let privatePropsKey = JSON.parse(privateProps[key] || "{}");
              delete privatePropsKey[prop.name.toLowerCase()];
              privateProps[key] = JSON.stringify(privatePropsKey);
              setShow(false);
              await updateEventPrivate(data, privateProps);
              getEvents();
            }}
          >
            Clear
          </button>
          <button
            className="flex-1 rounded bg-white brightness-95 hover:brightness-90"
            onClick={(e) => {
              setIsModalOpen(true);
            }}
          >
            Edit
          </button>
        </div>
      ),
    });
    setItems(curItems);
  }, [changeDefault, data, getEvents, prop.name, settings]);

  useEffect(() => {
    setNewOptions(prop?.options);
  }, [items]);

  return (
    <div ref={ref} className="h-full w-full">
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        placement="bottom"
        overlayClassName="p-0"
      >
        <div
          className="flex h-full w-full flex-1 items-center justify-center border-black hover:border-[1px] peer-hover:border-[1px]"
          style={{
            background: dropdown?.color,
          }}
        >
          {dropdown?.name ? dropdown?.name : "-"}
        </div>
      </Dropdown>
      <Modal
        title="Edit Dropdown"
        open={isModalOpen}
        onOk={(e) => {
          e.stopPropagation();
          setIsModalOpen(false);
        }}
        onCancel={(e) => {
          e.stopPropagation();
          setIsModalOpen(false);
        }}
      >
        <div className="space-y-1">
          {newOptions.map((option) => (
            <div
              className="flex h-full flex-row items-center justify-end space-x-1 bg-white"
              key={option.index}
            >
              <ColorPicker
                newOptions={newOptions}
                settings={settings}
                prop={prop}
                option={option}
                updateSettings={updateSettings}
                getSavedSettings={getSavedSettings}
              />
              <div className="grid h-full flex-1 grid-rows-[1fr] rounded-lg bg-white brightness-95 hover:brightness-90">
                <input
                  className="col-start-1 row-start-1 m-0 w-full rounded-lg py-3 text-center font-normal hover:brightness-95"
                  style={{
                    background: option.color,
                  }}
                  value={option.name}
                  autoComplete="off"
                  onClick={() => setNewOptions(prop?.options)}
                  onChange={(evt) => {
                    let newOptions1 = newOptions.map((propOption) =>
                      propOption.index === option.index
                        ? {
                            ...propOption,
                            name: evt.target.value,
                          }
                        : propOption
                    );
                    setNewOptions(newOptions1);
                  }}
                />
                <div className="pointer-events-none z-10 col-start-1 row-start-1 flex w-full flex-row items-center justify-end">
                  <button
                    className={
                      "group pointer-events-auto flex w-8 items-center justify-center py-4 " +
                      (prop?.options.find(
                        (propOption) => propOption.index === option.index
                      )?.name === option.name
                        ? " hidden "
                        : "")
                    }
                    onClick={async () => {
                      let newExtraProps = settings.extraProperties.filter(
                        (extraProp) => extraProp.index !== prop.index
                      );
                      newExtraProps.push({
                        name: prop?.name,
                        type: prop?.type,
                        index: prop?.index,
                        options: newOptions,
                      });
                      let newSettings = {
                        ...settings,
                        extraProperties: newExtraProps,
                      };
                      await updateSettings(newSettings);
                      await getSavedSettings();
                    }}
                  >
                    <FaCheck className="group-hover:fill-green-400" />
                  </button>
                </div>
              </div>
              <button
                className="group flex w-12 items-center justify-center rounded-lg bg-white py-4 hover:brightness-95"
                onClick={async () => {
                  let newOptions1 = newOptions.filter(
                    (propOption) => propOption.index !== option.index
                  );
                  let newExtraProps = settings.extraProperties.filter(
                    (extraProp) => extraProp.index !== prop.index
                  );
                  newExtraProps.push({
                    name: prop.name,
                    type: prop.type,
                    index: prop.index,
                    options: newOptions1,
                  });
                  let newSettings = {
                    ...settings,
                    extraProperties: newExtraProps,
                  };
                  await updateSettings(newSettings);
                  await getSavedSettings();
                }}
              >
                <FaTrash className="group-hover:fill-red-600" />
              </button>
            </div>
          ))}
          <div className="flex h-full flex-row items-center justify-center space-x-1 bg-white">
            <button
              className="group flex items-center justify-center rounded-lg bg-white px-4 py-4 hover:brightness-95"
              onClick={async () => {
                let newOptions1 = JSON.parse(JSON.stringify(newOptions));
                newOptions1.push({
                  name: "New Option",
                  color: "transparent",
                  index: newOptions1.length,
                });
                let newExtraProps = settings.extraProperties.filter(
                  (extraProp) => extraProp.index !== prop.index
                );
                newExtraProps.push({
                  name: prop.name,
                  type: prop.type,
                  index: prop.index,
                  options: newOptions1,
                });
                let newSettings = {
                  ...settings,
                  extraProperties: newExtraProps,
                };
                await updateSettings(newSettings);
                await getSavedSettings();
              }}
            >
              <FaPlus className="group-hover:fill-green-400" />
              <div className="pl-2 font-semibold group-hover:text-green-400">
                Add Option
              </div>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
