import { updateEventPrivate } from "gapi/events";
import React, { useState } from "react";
import { Checkbox } from "antd";

export const Completed = ({ data, getEvents, disabled }) => {
  const [check, setCheck] = useState(
    JSON.parse(
      data?.extendedProperties?.private[
        data.recurringEventId
          ? "recurrecnce" + data.recurringEventId
          : "default"
      ] || "{}"
    )?.completed === true
  );
  return (
    <Checkbox
      disabled={disabled}
      checked={check}
      onChange={async () => {
        let privateProps = { ...data?.extendedProperties?.private };
        privateProps[
          data?.recurringEventId
            ? "recurrecnce" + data.recurringEventId
            : "default"
        ] = JSON.stringify({
          ...JSON.parse(
            privateProps[
              data?.recurringEventId
                ? "recurrecnce" + data.recurringEventId
                : "default"
            ] || "{}"
          ),
          completed: !check,
        });
        setCheck(!check);
        await updateEventPrivate(data, privateProps);
        getEvents();
      }}
    />
  );
};
