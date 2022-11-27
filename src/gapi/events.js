import { useEffect, useState } from 'react';
import axios from "axios";
import { DateTime } from 'luxon'

export const createEvent = async (calendarID) => {
  let calendar = await axios.post('https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(calendarID) + '/events', {
    start: {
      dateTime: DateTime.now().toString()
    },
    end: {
      dateTime: DateTime.now().toString()
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

export const updateEvent = async (newItem) => {
  let calendar = await axios.put('https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(newItem.organizer.email) + '/events/' + encodeURIComponent(newItem.id), newItem);
  console.log(calendar)
  return calendar;
}

export const updateEventPrivate = async (originalItem, privateProperties) => {
  let calendar = await axios.put('https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(originalItem.organizer.email) + '/events/' + encodeURIComponent(originalItem.id), {
    start: originalItem.start,
    end: originalItem.end,
    extendedProperties: {
      private: privateProperties
    },
    summary: originalItem.summary
  });
  console.log(calendar)
  return calendar;
}

export const deleteEvent = async (originalItem) => {
  let calendar = await axios.delete('https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(originalItem.organizer.email) + '/events/' + encodeURIComponent(originalItem.id));
  console.log("Event", originalItem.id, "Deleted")
  return calendar;
}
