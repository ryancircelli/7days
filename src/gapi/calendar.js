import { useEffect, useState } from 'react';
import axios from "axios";
import { DateTime } from 'luxon';
import { convertDate } from 'libs/date';
import { RRule } from 'rrule';
import dayjs from 'dayjs';

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
  let calendar = calendars.find(calendar => calendar.summary === calendar_summary)
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
  return calendar.data;
}

export const listEvents = async (calendarID) => {
  let events = []
  let pageToken = "";
  while (pageToken !== null) {
    let response = await axios.get('https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(calendarID) + '/events', {
      params: {
        maxResults: 2500,
        singleEvents: false,
        pageToken: pageToken
      }
    })
    events.push(...response.data.items)
    pageToken = response.data.nextPageToken ? response.data.nextPageToken : null;
  }
  events = events.filter(event => event.status !== "cancelled")

  let recurring_events = events.flatMap((event) => convertToRecurring(event));
  events.flatMap((event) => [event, ...convertToRecurring(event)]);
  let items = recurring_events.map(({...rest}) => {
    let start_date_or_time = rest.start?.date ? true : false;
    let start_date = DateTime.fromISO(start_date_or_time ? rest.start.date : rest.start.dateTime);
    let end_date_or_time = rest.end.date ? true : false;
    let end_date = DateTime.fromISO(end_date_or_time ? rest.end.date : rest.end.dateTime);
    return {
      ...rest,
      convertedStart: start_date,
      formatedStart: convertDate(start_date, start_date_or_time),
      convertedEnd: end_date,
      formatedEnd: convertDate(end_date, end_date_or_time),
      type: (start_date.toMillis() === end_date.plus({ days: -1 }).toMillis() && start_date.startOf('day').toMillis() === start_date.toMillis()) ? 'day_event' : 
            (start_date.toMillis() === end_date.toMillis()) ? 'task' : 
            (start_date.startOf('day').toMillis() === end_date.startOf('day').toMillis()) ? 'single_day_event' : 
            'multi_day_event'
    }
  })
  items = items.sort((a, b) => a.convertedStart.toMillis() - b.convertedStart.toMillis());
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

const convertToRecurring = (event) => {
  if (event.recurrence === undefined) return [event];
  let output = [];

  let start_date = DateTime.fromISO(event.start.date ? event.start.date : event.start.dateTime);

  const eventStart = new Date(event.start.date ? event.start.date : event.start.dateTime);
  const eventEnd = new Date(event.end.date ? event.end.date : event.end.dateTime);
  const eventLength = eventEnd.valueOf() - eventStart.valueOf();
  const ruleOptions = RRule.parseString(event.recurrence[0]);
  ruleOptions.dtstart = eventStart;
  const rule = new RRule(ruleOptions);
  let dates = rule.between(eventStart, DateTime.now().plus({years: 10}).toJSDate(), true)
  for (let [index, date] of dates.entries()) {
    let occuranceStart = DateTime.fromMillis(date.valueOf());
    occuranceStart = occuranceStart.setZone(start_date.zone, { keepLocalTime: true })
    let occuranceEnd = DateTime.fromMillis(date.valueOf() + eventLength.valueOf());
    occuranceEnd = occuranceEnd.setZone(start_date.zone, { keepLocalTime: true })
  	output.push({
      ...event,
      originalStart: event.start.date ? { date: event.start.date } : { dateTime: event.start.dateTime, timeZone: event.start.timeZone },
      originalEnd: event.end.date ? { date: event.end.date } : { dateTime: event.end.dateTime, timeZone: event.end.timeZone  },
      start: event.start.date ? { date: occuranceStart.toISO(), timeZone: event.start.timeZone } : { dateTime: occuranceStart.toISO(), timeZone: event.start.timeZone  },
      end: event.end.date ? { date: occuranceEnd.toISO(), timeZone: event.start.timeZone } : { dateTime: occuranceEnd.toISO(), timeZone: event.end.timeZone  },
      rrule: ruleOptions,
      recurringEventId: (event.id + index)
    })
  }
  return output;
}