import { DateTime } from 'luxon'

export const convertDate = (date_string) => {
  let date  = DateTime.fromISO(date_string).startOf('day');
  let today = DateTime.now().startOf('day')
  let date_time = DateTime.fromISO(date_string);

  let day = date.toFormat("LLL d");
  let time = date_time.toFormat("t");
  let daysDiff = date.diff(today, 'days').as('days');

  if (daysDiff === 0) {
    day = "Today";
  } else if (daysDiff === 1) {
    day = "Tomorrow";
  } else if (daysDiff === -1) {
    day = "Yesterday";
  } else if (daysDiff < 6 && daysDiff > 1) {
    day = date.toFormat("ccc");
  }

  return {
    date: day,
    clumped_date: daysDiff > 6 ? "Future" : daysDiff < 0 ? "Overdue" : day,
    time:  time.slice(-6, -3) === ":00" ? time.slice(0, -6) + time.slice(-2).toLowerCase() : time.slice(0, -3) + time.slice(-2).toLowerCase(),
    status: daysDiff === 0 ? "today" : daysDiff > 0 ? "future" : "past"
  };
}