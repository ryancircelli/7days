import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";

import { Modal, Button } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Url } from "../Url/Url";
import { PropDropdown } from "../PropDropdown/PropDropdown";
import { deleteEvent } from "gapi/events";

const { confirm } = Modal;

export const SettingsButton = ({ data, extraProps, getEvents }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    console.log(data);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={showModal}
        className="flex items-center justify-center rounded-xl bg-white p-2 hover:brightness-[0.975]"
      >
        <FiMoreHorizontal className="align-bottom" />
      </button>
      <Modal
        title={
          <div className="text-xl font-bold">
            {data.recurringEventId
              ? "Recurring Event Settings"
              : "Event Settings"}
          </div>
        }
        width={"50%"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {data.recurringEventId ? (
          <div>
            <div className="text-lg font-bold">Default Values</div>
            <div className="flex h-12 flex-row">
              {extraProps.map((prop) => (
                <div
                  className="flex-1 py-4 text-center text-xl font-bold"
                  key={prop.name}
                >
                  {prop.name}
                </div>
              ))}
            </div>
            <div className="flex h-12 flex-row border">
              {extraProps.map((prop, index) => (
                <div key={prop.name} className="flex-1">
                  {prop.type === "url" ? (
                    <Url
                      data={data}
                      prop={prop}
                      getEvents={getEvents}
                      key={prop.name}
                      changeDefault={true}
                      disabled={undefined}
                    />
                  ) : prop.type === "dropdown" ? (
                    <PropDropdown
                      data={data}
                      prop={prop}
                      getEvents={getEvents}
                      key={prop.name}
                      changeDefault={true}
                      disabled={undefined}
                      settings={undefined}
                      getSavedSettings={undefined}
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
            </div>
          </div>
        ) : null}
        <div className="pt-4">
          <div className="pb-2 text-lg font-bold">Settings</div>
          <Button
            onClick={() => showDeleteConfirm(data, getEvents)}
            className="ant-btn-dangerous"
          >
            {data.recurringEventId ? "Delete Recurring Event" : "Delete Event"}
          </Button>
        </div>
      </Modal>
    </>
  );
};

const showDeleteConfirm = (data, getEvents) => {
  confirm({
    title: "Are you sure delete this event?",
    icon: <ExclamationCircleFilled />,
    content: "This action cannot be undone!",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    async onOk() {
      await deleteEvent(data);
      getEvents();
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};
