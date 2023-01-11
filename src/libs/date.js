import { DateTime } from 'luxon'

export const convertDates = (convertedDateStart, convertedDateEnd) => {

  //Same Day
  if (convertedDateStart.year === convertedDateEnd.year && convertedDateStart.day === convertedDateEnd.day) {
    //With Time
    if (convertedDateStart.time && convertedDateEnd.time) {
      //Same Time
      if (convertedDateStart.time === convertedDateEnd.time) {  
        // Current Year
        if (Number(convertedDateStart.year) === Number(DateTime.now().year)) {
          return convertedDateStart.day + ", " + convertedDateStart.time;
        }
        // Not Current Year
        return convertedDateStart.day + ", " + convertedDateStart.year + ", " + convertedDateStart.time
      //Same AM/PM
      } else if (convertedDateStart.time.slice(-2) === convertedDateEnd.time.slice(-2)) {
        // Current Year
        if (Number(convertedDateStart.year) === Number(DateTime.now().year)) {
          return convertedDateStart.day + ", " + convertedDateStart.time.slice(0, -2) + "-" + convertedDateEnd.time;
        }
        // Not Current Year
        return convertedDateStart.day + ", " + convertedDateStart.year + ", " + convertedDateStart.time.slice(0, -2) + "-" + convertedDateEnd.time;
      // Not Same Time
      } else {
        // Current Year
        if (Number(convertedDateStart.year) === Number(DateTime.now().year)) {
          return convertedDateStart.day + ", " + convertedDateStart.time + "-" + convertedDateEnd.time;
        }
        // Not Current Year
        return convertedDateStart.day + ", " + convertedDateStart.year + ", " + convertedDateStart.time + "-" + convertedDateEnd.time;
      }
    }
    return "error";
  // Not Same Day
  } else {
    // No Time
    if (!convertedDateStart.time && !convertedDateEnd.time) {
      // If Single Day Event
      if (convertedDateStart.date.toMillis() === convertedDateEnd.date.toMillis() || convertedDateStart.date.toMillis() === convertedDateEnd.date.plus({ days: -1 }).toMillis())
        return convertedDateStart.date_text;
      return convertedDateStart.date_text + " - " + convertDate(convertedDateEnd.date.plus({ days: -1 }), true).date_text;
    }
  
    //Default
    return convertedDateStart.date_text + " - " + convertedDateEnd.date_text;
  }
}

export const convertDate = (date_string, time_enabled) => {
  let date  = DateTime.fromISO(date_string).startOf('day');
  let today = DateTime.now().startOf('day')
  let date_time = DateTime.fromISO(date_string);

  let day = date.toFormat("LLL d");
  let time = date_time.toFormat("t");
  let daysDiff = date.diff(today, 'days').as('days');
  let year = date.toFormat("yyyy");
  
  time = (!time_enabled ? (time.slice(-6, -3) === ":00" ? time.slice(0, -6) + time.slice(-2).toLowerCase() : time.slice(0, -3) + time.slice(-2).toLowerCase()) : "");

  if (daysDiff === 0) {
    day = "Today";
  } else if (daysDiff === 1) {
    day = "Tomorrow";
  } else if (daysDiff === -1) {
    day = "Yesterday";
  } else if (daysDiff < 7 && daysDiff > 1) {
    day = date.toFormat("ccc");
  }

  return {
    date_text: day + (today.year !== date.year ? ", " + year : "") + (time ? ", " + time : ""),
    day: day,
    year: year,
    time: !time_enabled ? time : null,
    clumped_date: daysDiff > 6 ? "Future" : daysDiff < 0 ? "Overdue" : day,
    status: daysDiff === 0 ? "today" : daysDiff > 0 ? "future" : "past",
    date: date
  };
}