import { useEffect, useState } from 'react';
import axios from "axios";
import { DateTime } from 'luxon';
import { convertDate } from 'libs/date';

export const listCalendars = async () => {
  let calendars = await axios.get('https://www.googleapis.com/calendar/v3/users/me/calendarList');
  return calendars?.data.items;
}

export const useListCalendars = () => {
  const [calendars, setCalendars] = useState(null);
  const getCalendars = async () => {
    setCalendars(await listCalendars())
  }
  useEffect(()=>{
    if (calendars === null)
      getCalendars()
  }, [])
  return calendars;
}

export const getCalendar = async (calendarID) => {
  let calendar = {}
  try {
    calendar = await axios.get('https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(calendarID));
  } catch (error) {
    if (error.response.status == 404) {
      console.log("Calendar with ID", calendarID, "Not Found")
      return false;
    }
  }
  console.log("Found", calendar.summary, "with ID", calendarID)
  return calendar;
}

export const getCalendarBySummary = async (calendar_summary) => {
  let calendars = await listCalendars();
  let calendar = calendars.find(calendar => calendar.summary == calendar_summary)
  if (calendar === undefined) {
    console.log("Calendar", calendar_summary, "Not Found")
    return false;
  }
  console.log("Found", calendar_summary, "with ID", calendar.id)
  return calendar;
}

export const createCalendar = async (calendar_summary) => {
  let calendar = await axios.post('https://www.googleapis.com/calendar/v3/calendars', {
    summary: calendar_summary
  });
  console.log("Calendar", calendar_summary, "Created")
  return calendar;
}

export const listEvents = async (calendarID) => {
  let events = []
  let pageToken = "";
  while (pageToken !== null) {
    let response = await axios.get('https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(calendarID) + '/events', {
      params: {
        maxResults: 2500,
        pageToken: pageToken
        // timeMin: "2022-08-01T02:25:08+00:00",
        // timeMax: "2022-09-01T02:25:08+00:00"
      }
    })
    events.push(...response.data.items)
    pageToken = response.data.nextPageToken ? response.data.nextPageToken : null;
  }
  let items = events.map(({end, ...rest}) => {
    let date = DateTime.fromISO(end.date ? end.date : end.dateTime);
    return {
      ...rest,
      end: end,
      convertedEnd: date,
      formatedEnd: convertDate(date)
    }
  })
  items = items.sort((a, b) => a.convertedEnd.toMillis() - b.convertedEnd.toMillis());
  return items;
}

export const useListEvents = (calendarID) => {
  const [events, setEvents] = useState(null);
  const getEvents = async () => {
    setEvents(await listEvents(calendarID))
  };
  useEffect(()=>{
    if (events === null)
      getEvents()
  }, [calendarID])
  return events;
}