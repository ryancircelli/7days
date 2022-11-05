import { useEffect, useState } from 'react';
import axios from "axios";

//Adds Authorization Header
import {} from '../libs/axios'

export const createEvent = async (calendarID) => {
  let calendar = await axios.post('https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(calendarID) + '/events', {
    start: {
      dateTime: new Date().toISOString()
    },
    end: {
      dateTime: new Date().toISOString()
    },
    extendedProperties: {
      private: {
        class: "CDA3101"
      }
    },
    summary: "Lecture Test"
  });
  console.log("Event", calendar, "Created")
  return calendar;
}

export const updateEventPrivate = async (originalItem, privateProperties) => {
  let calendar = await axios.put('https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(originalItem.organizer.email) + '/events/' + encodeURIComponent(originalItem.id), {
    start: {
      dateTime: originalItem.start.dateTime
    },
    end: {
      dateTime: originalItem.end
    },
    extendedProperties: {
      private: privateProperties
    },
    summary: originalItem.summary
  });
  console.log(calendar)
  return calendar;
}
