import axios from "axios";
import { DateTime } from "luxon";

export const createEventTime = async (calendarID, start_date, end_date) => {
  let calendar = await axios.post(
    "https://www.googleapis.com/calendar/v3/calendars/" +
      encodeURIComponent(calendarID) +
      "/events",
    {
      start: {
        dateTime: start_date ? start_date : DateTime.now().toString(),
      },
      end: {
        dateTime: end_date
          ? end_date
          : start_date
          ? start_date
          : DateTime.now().toString(),
      },
      summary: "",
    }
  );
  console.log("Event", calendar, "Created");
  return calendar;
};

export const createEvent = async (calendarID, start_date, end_date) => {
  let calendar = await axios.post(
    "https://www.googleapis.com/calendar/v3/calendars/" +
      encodeURIComponent(calendarID) +
      "/events",
    {
      start: {
        date: (start_date ? start_date : DateTime.now().toString()).substring(
          0,
          10
        ),
      },
      end: {
        date: (end_date
          ? end_date
          : start_date
          ? start_date
          : DateTime.now().plus({ days: 1 }).toString()
        ).substring(0, 10),
      },
      summary: "",
    }
  );
  console.log("Event", calendar, "Created");
  return calendar;
};

export const updateEvent = async (newItem) => {
  let calendar = await axios.put(
    "https://www.googleapis.com/calendar/v3/calendars/" +
      encodeURIComponent(newItem.organizer.email) +
      "/events/" +
      encodeURIComponent(newItem.id),
    newItem
  );
  console.log(calendar);
  return calendar;
};

export const updateEventName = async (originalItem, newName) => {
  let calendar = await axios.put(
    "https://www.googleapis.com/calendar/v3/calendars/" +
      encodeURIComponent(originalItem.organizer.email) +
      "/events/" +
      encodeURIComponent(originalItem.id),
    {
      start: originalItem.recurrence
        ? originalItem.originalStart
        : originalItem.start,
      end: originalItem.recurrence
        ? originalItem.originalEnd
        : originalItem.end,
      extendedProperties: originalItem.extendedProperties,
      recurrence: originalItem.recurrence,
      summary: newName,
      description: originalItem.description,
    }
  );
  console.log(calendar);
  return calendar;
};

export const updateEventDescription = async (originalItem, newDescription) => {
  let calendar = await axios.put(
    "https://www.googleapis.com/calendar/v3/calendars/" +
      encodeURIComponent(originalItem.organizer.email) +
      "/events/" +
      encodeURIComponent(originalItem.id),
    {
      start: originalItem.recurrence
        ? originalItem.originalStart
        : originalItem.start,
      end: originalItem.recurrence
        ? originalItem.originalEnd
        : originalItem.end,
      extendedProperties: originalItem.extendedProperties,
      recurrence: originalItem.recurrence,
      summary: originalItem.summary,
      description: newDescription,
    }
  );
  console.log(calendar);
  return calendar;
};

export const updateEventPrivate = async (originalItem, privateProperties) => {
  let calendar = await axios.put(
    "https://www.googleapis.com/calendar/v3/calendars/" +
      encodeURIComponent(originalItem.organizer.email) +
      "/events/" +
      encodeURIComponent(originalItem.id),
    {
      start: originalItem.recurrence
        ? originalItem.originalStart
        : originalItem.start,
      end: originalItem.recurrence
        ? originalItem.originalEnd
        : originalItem.end,
      extendedProperties: {
        private: privateProperties,
      },
      recurrence: originalItem.recurrence,
      summary: originalItem.summary,
      description: originalItem.description,
    }
  );
  return calendar;
};

export const deleteEvent = async (originalItem) => {
  let calendar = await axios.delete(
    "https://www.googleapis.com/calendar/v3/calendars/" +
      encodeURIComponent(originalItem.organizer.email) +
      "/events/" +
      encodeURIComponent(originalItem.id)
  );
  console.log("Event", originalItem.id, "Deleted");
  return calendar;
};
