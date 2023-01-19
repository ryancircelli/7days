import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { updateEventDescription } from 'gapi/events';

export const Description = ({data, getEvents, width, value}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(data?.description);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setLoading(true)
    await updateEventDescription(data, description)
    await getEvents()
    setIsModalOpen(false);
    setLoading(false)
  };

  const handleCancel = () => {
    setDescription(data?.description)
    setIsModalOpen(false);
  };

  return (
    <>
      <button 
        className="p-0 z-0 left-0 placeholder:text-black focus:ring-0 border-0"
        style={{ 
          width: width +'px',
        }}
        onClick={showModal}
      >
        {value ? value : "(No title)"} 
      </button>
      <Modal 
        title={data?.summary} 
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="save" type="primary" loading={loading} onClick={handleOk}>
            Save
          </Button>
        ]}
      >
        <textarea 
          className="p-0 h-72 w-full border-slate-200"
          value={description}
          placeholder={"Description"}
          onChange={(evt) => setDescription(evt.target.value)}
        />
      </Modal>
    </>
  );
};