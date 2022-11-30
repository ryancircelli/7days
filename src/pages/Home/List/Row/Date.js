import { updateEvent } from 'gapi/events';
import { convertDate } from 'libs/date';
import { DateTime } from 'luxon';
import React, { useState, useRef } from 'react';

export const Date = ({data, getEvents}) => {
  const ref = useRef(null);
  const [convertedDate, setConvertedDate] = useState(data.formatedEnd)

  const [timer, setTimer] = useState(null);

  function setDateDelayed(date) {
    setConvertedDate(convertDate(date, convertedDate.time === null));
    console.log(convertedDate)
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setTimer(
      setTimeout(async () => {
        if (convertedDate.time !== null) {
          data.end.dateTime = DateTime.fromISO(date).toISO().slice(0,16);
          data.start.dateTime = DateTime.fromISO(date).toISO().slice(0,16);
        } else {
          data.end.date = DateTime.fromISO(date).toISO().slice(0,10);
          data.start.date = DateTime.fromISO(date).toISO().slice(0,10);
        }

        await updateEvent(data)
        getEvents();
      }, 1000)
    );
  }

  return (
    <div className="w-full h-full relative">
      <button 
        onClick={()=> ref.current.showPicker()} 
        className="absolute top-0 hover:border-2 peer-hover:border-2 border-white w-full h-full flex-1 flex justify-center items-center"
      >
        {convertedDate.date + (convertedDate.time !== null ? ", " + convertedDate.time : "")}
      </button>
      {convertedDate.time !== null ? 
        <input 
          ref={ref} 
          type="datetime-local"
          className="absolute top-0 invisible w-0"
          onChange={(e) => {
            setDateDelayed(e.target.value);
          }}
          defaultValue={data.convertedEnd.toISO().slice(0,16)}
        />
      :
        <input 
          ref={ref} 
          type="date"
          className="absolute top-0 invisible w-0"
          onChange={(e) => {
            setDateDelayed(DateTime.fromISO(e.target.value));
          }}
          value={data.convertedEnd.toISO().slice(0,10)}
        />
      }

    </div>
  );
}