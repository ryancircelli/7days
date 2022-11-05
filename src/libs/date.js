export const convertDate = (date_string, time, clump) => {
  let date_time  = new Date(date_string);
  let today_time = new Date().setHours(0,0,0,0);

  let date  = new Date(new Date(date_string).setHours(0,0,0,0));
  let today = new Date(new Date().setHours(0,0,0,0));

  let status = "error";
  let day = "error";

  if (date.getTime() === today.getTime()) {
    status = today_time > date_time ? "today" : "future";
    day = "Today";
  } else if (date.getTime() === addDays(today, 1).getTime()) {
    status = "future";
    day = "Tomorrow";
  } else if (date.getTime() === addDays(today, -1).getTime()) {
    status = "past";
    day = "Yesterday";
  } else if (clump === true) {
    if(date.getTime() < addDays(today, -1).getTime()) {
      status = "past";
      day = "Overdue";
    } else if (date.getTime() > addDays(today, 6).getTime()) {
      status = "future";
      day = "Future";
    }
  } else {
    if (date.getTime() > addDays(today, 1).getTime() && date.getTime() < addDays(today, 6).getTime()) {
      status = "future";
      day = getDayOfWeek(date);
    } else {
      status = "future";
      day = date.toLocaleString('en-US', {
        month: "short",
        day: "numeric"
      });
    }
  }

  if (time) {
    let hours = date_time.getHours() % 12 || 12;
    let minutes = String(date_time.getMinutes()).padStart(2, '0');
    let ampm = date_time.getHours() >= 12 ? "pm" : "am";
    day += ', ' + hours;
    if (minutes > 0)
      day += ':' + minutes;
    day += ampm;
  }

  return {
    day: day,
    status: status
  };
}

const addDays = (date, days) => {
  var date = new Date(date);
  date.setDate(date.getDate() + days);
  return date;
}

const getDayOfWeek = (date) => {   
  return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][ date.getDay() ];
};