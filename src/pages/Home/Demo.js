import React from "react";
import { Header } from "../Calendar/Header/Header";
import { EventList } from "../Calendar/List/EventList";

import { CalendarMenu } from "../Calendar/CalendarMenu/CalendarMenu";
import { Settings } from "../Calendar/Settings/Settings";

export const Demo = ({}) => {
  const events = [
    {
      kind: "calendar#event",
      etag: '"3351473914039000"',
      id: "6j2m4f10fjr32blrampal14ku4",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NmoybTRmMTBmanIzMmJscmFtcGFsMTRrdTQgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T19:50:26.000Z",
      updated: "2023-02-07T02:29:17.128Z",
      summary: "Week 5 Discussion Post",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-06T17:50:00Z",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-06T17:50:00Z",
        timeZone: "America/New_York",
      },
      iCalUID: "6j2m4f10fjr32blrampal14ku4@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"class":{"name":"PHI3681","color":"#fbbf24","index":0},"link":"https://ufl.instructure.com/courses/473642/discussion_topics/3757065","completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      convertedStart: "2023-02-06T12:50:00.000-05:00",
      formatedStart: {
        date_text: "Feb 6, 12:50pm",
        day: "Feb 6",
        year: "2023",
        time: "12:50pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-06T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-06T12:50:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 6, 12:50pm",
        day: "Feb 6",
        year: "2023",
        time: "12:50pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-06T00:00:00.000-05:00",
      },
      type: "task",
    },
    {
      kind: "calendar#event",
      etag: '"3353890309396000"',
      id: "2vrmkjpjkb3ichcp2uh4q2obeg",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MnZybWtqcGprYjNpY2hjcDJ1aDRxMm9iZWdfMjAyMzAxMDlUMTc1MDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:29:37.000Z",
      updated: "2023-02-21T02:05:54.698Z",
      summary: "PHI3681 - In Person",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-06T12:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-06T13:40:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=MO,WE",
      ],
      iCalUID: "2vrmkjpjkb3ichcp2uh4q2obeg@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg0: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg3: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg4: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg1: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg2: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg7: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg8: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg5: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg6: '{"completed":true}',
          default: '{"class":{"name":"PHI3681","color":"#fbbf24","index":0}}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg9: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg11: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg10: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg12: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T17:50:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T18:40:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T17:50:00.000Z",
      },
      recurringEventId: "2vrmkjpjkb3ichcp2uh4q2obeg8",
      convertedStart: "2023-02-06T12:50:00.000-05:00",
      formatedStart: {
        date_text: "Feb 6, 12:50pm",
        day: "Feb 6",
        year: "2023",
        time: "12:50pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-06T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-06T13:40:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 6, 1:40pm",
        day: "Feb 6",
        year: "2023",
        time: "1:40pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-06T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890313356000"',
      id: "51382ji4ftblamdhr9cophpei9",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NTEzODJqaTRmdGJsYW1kaHI5Y29waHBlaTlfMjAyMzAxMDlUMjAwMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:26:50.000Z",
      updated: "2023-02-21T02:05:56.678Z",
      summary: "CEN3031 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-06T15:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-06T15:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=FR,MO,WE",
      ],
      iCalUID: "51382ji4ftblamdhr9cophpei9@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce51382ji4ftblamdhr9cophpei94:
            '{"recording":"https://ufl.zoom.us/rec/play/UGrLwAqQsdziO6McV07jwq1Ht1__hkp7eNf_F0X5-GU4HrKUtrwVbIgN8tVuHFgTJhBuOO4hOJeDRYCI.WuxzUOzl_VBdBpmZ?continueMode=true&_x_zm_rtaid=k3I-hYmyTDmNqz8Ldo1pbA.1674155364160.cf86fa7213e95619052ea4971abeca40&_x_zm_rhtaid=952","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei93: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei92:
            '{"recording":"https://ufl.zoom.us/rec/play/5QtRoXfsxrRU8Ncv8zGwQY__dWVy2yedF8KKn2-LFp7k2S707hPSkKcLK_J_yVMo_1iZs9POMDblwKno.0tinHPE1_cLQz0uU?continueMode=true&_x_zm_rtaid=S79Nh3G7R1mk7BmqGE7vsw.1673984189633.a1e7d4ba2f723783084708defbd8146f&_x_zm_rhtaid=999","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei91:
            '{"recording":"https://ufl.zoom.us/rec/play/4hKX0NKHmbK3H7ywQr6b6NLbyINcwsnIOnIEB5Rvr3RntZk9_XhB5hA0VwXXiysEHkj7GdpS7-HMzT0i.ZxNVBPs_SiDbDlS6?continueMode=true&_x_zm_rtaid=WAx5U1RSS1Ga7ha1-8WxMQ.1673643445927.8f150b6acba85fc5da2bb1910cc2c3ef&_x_zm_rhtaid=869","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei98: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei97:
            '{"recording":"https://ufl.zoom.us/rec/play/6SVobBhWKCnbUVKrmneX3NVP45BzaiLJgMCTYLhLsI1fFTcotBIHXw1feBwYJP1fO3H3Uv-cHgjlDw.ZGN1gybNl6L5CvRM?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei96:
            '{"recording":"https://ufl.zoom.us/rec/play/6tFhTbVFl2LWEvHw4cFQZ2z5WkX3-mOqoVZcW2PhIVYfsup3wfOg2XO1kC0brwopIub7KsdBB63TyTP7.cZ3SXpms5VvNGmp-?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei95: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei912: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei913: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei910: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei911: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei90: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei916: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei917: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei914: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei915: '{"completed":true}',
          default: '{"class":{"name":"CEN3031","color":"#0ea5e9","index":1}}',
          recurrecnce51382ji4ftblamdhr9cophpei918: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei99: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T20:00:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T20:50:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 4,
          },
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T20:00:00.000Z",
      },
      recurringEventId: "51382ji4ftblamdhr9cophpei912",
      convertedStart: "2023-02-06T15:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 6, 3pm",
        day: "Feb 6",
        year: "2023",
        time: "3pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-06T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-06T15:50:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 6, 3:50pm",
        day: "Feb 6",
        year: "2023",
        time: "3:50pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-06T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3350594384294000"',
      id: "1k372ktiqemc41n8j9gf5pbt00",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MWszNzJrdGlxZW1jNDFuOGo5Z2Y1cGJ0MDBfMjAyMzAxMDlUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-13T22:28:27.000Z",
      updated: "2023-02-21T02:05:56.245Z",
      summary: "CIS4930 - Live",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-06T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-06T18:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230428T035959Z;BYDAY=MO,WE,FR",
      ],
      iCalUID: "1k372ktiqemc41n8j9gf5pbt00@google.com",
      sequence: 4,
      extendedProperties: {
        private: {
          recurrecnce1k372ktiqemc41n8j9gf5pbt0012: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0013: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt000: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0010: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0011: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt002: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt001: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt004: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt003: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0018: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0016: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0017: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0014: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0015: '{"completed":true}',
          default: '{"class":{"name":"CIS4930","color":"#fb923c","index":3}}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt006: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt005: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt008: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt007: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt009: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T23:00:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-28T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
          {
            weekday: 4,
          },
        ],
        dtstart: "2023-01-09T22:10:00.000Z",
      },
      recurringEventId: "1k372ktiqemc41n8j9gf5pbt0012",
      convertedStart: "2023-02-06T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Feb 6, 5:10pm",
        day: "Feb 6",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-06T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-06T18:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 6, 6pm",
        day: "Feb 6",
        year: "2023",
        time: "6pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-06T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3350443981418000"',
      id: "0hr8reqnnnlaf7k7fens34c22t",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MGhyOHJlcW5ubmxhZjdrN2ZlbnMzNGMyMnRfMjAyMzAxMTBUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:36:26.000Z",
      updated: "2023-02-01T03:26:30.709Z",
      summary: "COP4600 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-07T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-07T18:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=TU"],
      iCalUID: "0hr8reqnnnlaf7k7fens34c22t@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce0hr8reqnnnlaf7k7fens34c22t1:
            '{"recording":"https://ufl.zoom.us/rec/play/Z8_aetm9XR0WM2Ep2nRm6Y333qPD5R37GDy8f9Klv9iYD2cKFgikGwtubHtjGvl3zWoJJDPBgj8OkdO-.lzK4dRjnWyUm-5-F?continueMode=true&_x_zm_rtaid=7PMqVe8TQaOoyQXih_jpzg.1674068202273.65156d0093852179edb21098a3f12b44&_x_zm_rhtaid=531","completed":true}',
          recurrecnce0hr8reqnnnlaf7k7fens34c22t2:
            '{"completed":true,"recording":"https://ufl.zoom.us/rec/play/hB9JYcoC2XIV-mt-QjDNC2Cb08o8Mz8V7vveL1WEG3UUwxnyvlC-4MOPNLaqOH1uc1rIviAwGALosrL6.XEjvE9jlmElOSv1I?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846"}',
          default: '{"class":{"name":"COP4600","color":"#0284c7","index":2}}',
          recurrecnce0hr8reqnnnlaf7k7fens34c22t0: '{"completed":true}',
          recurrecnce0hr8reqnnnlaf7k7fens34c22t3: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-10T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-10T23:00:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 1,
          },
        ],
        dtstart: "2023-01-10T22:10:00.000Z",
      },
      recurringEventId: "0hr8reqnnnlaf7k7fens34c22t4",
      convertedStart: "2023-02-07T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Feb 7, 5:10pm",
        day: "Feb 7",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-07T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-07T18:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 7, 6pm",
        day: "Feb 7",
        year: "2023",
        time: "6pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-07T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3351762929508000"',
      id: "afkgsnllghmm5eic81evu2eet8",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=YWZrZ3NubGxnaG1tNWVpYzgxZXZ1MmVldDggOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T20:58:21.000Z",
      updated: "2023-02-08T18:37:44.822Z",
      summary: "Reading - Machine Bias Predictive Policing",
      description:
        "Selections from Boonin, “AI Book Manuscript” (26 – 47): \nPredictive Policing and the Problem of Bias ",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-08",
      },
      end: {
        date: "2023-02-09",
      },
      iCalUID: "afkgsnllghmm5eic81evu2eet8@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"link":"https://ufl.instructure.com/courses/473642/files/folder/Readings","class":{"name":"PHI3681","color":"#fbbf24","index":0},"completed":true}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-08T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 8",
        day: "Feb 8",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-08T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-09T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 9",
        day: "Feb 9",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-09T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3351766598752000"',
      id: "fmj64fpun61psqj7cu65ofn04k",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=Zm1qNjRmcHVuNjFwc3FqN2N1NjVvZm4wNGsgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-02-08T19:08:19.000Z",
      updated: "2023-02-08T19:08:19.376Z",
      summary: "Taxes",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-08",
      },
      end: {
        date: "2023-02-09",
      },
      transparency: "transparent",
      iCalUID: "fmj64fpun61psqj7cu65ofn04k@google.com",
      sequence: 0,
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-08T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 8",
        day: "Feb 8",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-08T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-09T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 9",
        day: "Feb 9",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-09T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890309396000"',
      id: "2vrmkjpjkb3ichcp2uh4q2obeg",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MnZybWtqcGprYjNpY2hjcDJ1aDRxMm9iZWdfMjAyMzAxMDlUMTc1MDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:29:37.000Z",
      updated: "2023-02-21T02:05:54.698Z",
      summary: "PHI3681 - In Person",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-08T12:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-08T13:40:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=MO,WE",
      ],
      iCalUID: "2vrmkjpjkb3ichcp2uh4q2obeg@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg0: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg3: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg4: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg1: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg2: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg7: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg8: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg5: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg6: '{"completed":true}',
          default: '{"class":{"name":"PHI3681","color":"#fbbf24","index":0}}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg9: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg11: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg10: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg12: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T17:50:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T18:40:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T17:50:00.000Z",
      },
      recurringEventId: "2vrmkjpjkb3ichcp2uh4q2obeg9",
      convertedStart: "2023-02-08T12:50:00.000-05:00",
      formatedStart: {
        date_text: "Feb 8, 12:50pm",
        day: "Feb 8",
        year: "2023",
        time: "12:50pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-08T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-08T13:40:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 8, 1:40pm",
        day: "Feb 8",
        year: "2023",
        time: "1:40pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-08T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353117534920000"',
      id: "10q94u0opab3h62c1ka2f1pp7v",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MTBxOTR1MG9wYWIzaDYyYzFrYTJmMXBwN3ZfMjAyMzAxMTFUMTg1NTAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:31:37.000Z",
      updated: "2023-02-16T14:46:07.460Z",
      summary: "COP4600 Discussion - In Person (Quiz)",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-08T13:55:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-08T14:45:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=WE"],
      iCalUID: "10q94u0opab3h62c1ka2f1pp7v@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce10q94u0opab3h62c1ka2f1pp7v1: '{"completed":true}',
          recurrecnce10q94u0opab3h62c1ka2f1pp7v0: '{"completed":true}',
          default: '{"class":{"name":"COP4600","color":"#0284c7","index":2}}',
          recurrecnce10q94u0opab3h62c1ka2f1pp7v5: '{"completed":true}',
          recurrecnce10q94u0opab3h62c1ka2f1pp7v4: '{"completed":true}',
          recurrecnce10q94u0opab3h62c1ka2f1pp7v3: '{"completed":true}',
          recurrecnce10q94u0opab3h62c1ka2f1pp7v2: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-11T18:55:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-11T19:45:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-11T18:55:00.000Z",
      },
      recurringEventId: "10q94u0opab3h62c1ka2f1pp7v4",
      convertedStart: "2023-02-08T13:55:00.000-05:00",
      formatedStart: {
        date_text: "Feb 8, 1:55pm",
        day: "Feb 8",
        year: "2023",
        time: "1:55pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-08T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-08T14:45:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 8, 2:45pm",
        day: "Feb 8",
        year: "2023",
        time: "2:45pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-08T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890313356000"',
      id: "51382ji4ftblamdhr9cophpei9",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NTEzODJqaTRmdGJsYW1kaHI5Y29waHBlaTlfMjAyMzAxMDlUMjAwMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:26:50.000Z",
      updated: "2023-02-21T02:05:56.678Z",
      summary: "CEN3031 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-08T15:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-08T15:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=FR,MO,WE",
      ],
      iCalUID: "51382ji4ftblamdhr9cophpei9@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce51382ji4ftblamdhr9cophpei94:
            '{"recording":"https://ufl.zoom.us/rec/play/UGrLwAqQsdziO6McV07jwq1Ht1__hkp7eNf_F0X5-GU4HrKUtrwVbIgN8tVuHFgTJhBuOO4hOJeDRYCI.WuxzUOzl_VBdBpmZ?continueMode=true&_x_zm_rtaid=k3I-hYmyTDmNqz8Ldo1pbA.1674155364160.cf86fa7213e95619052ea4971abeca40&_x_zm_rhtaid=952","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei93: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei92:
            '{"recording":"https://ufl.zoom.us/rec/play/5QtRoXfsxrRU8Ncv8zGwQY__dWVy2yedF8KKn2-LFp7k2S707hPSkKcLK_J_yVMo_1iZs9POMDblwKno.0tinHPE1_cLQz0uU?continueMode=true&_x_zm_rtaid=S79Nh3G7R1mk7BmqGE7vsw.1673984189633.a1e7d4ba2f723783084708defbd8146f&_x_zm_rhtaid=999","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei91:
            '{"recording":"https://ufl.zoom.us/rec/play/4hKX0NKHmbK3H7ywQr6b6NLbyINcwsnIOnIEB5Rvr3RntZk9_XhB5hA0VwXXiysEHkj7GdpS7-HMzT0i.ZxNVBPs_SiDbDlS6?continueMode=true&_x_zm_rtaid=WAx5U1RSS1Ga7ha1-8WxMQ.1673643445927.8f150b6acba85fc5da2bb1910cc2c3ef&_x_zm_rhtaid=869","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei98: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei97:
            '{"recording":"https://ufl.zoom.us/rec/play/6SVobBhWKCnbUVKrmneX3NVP45BzaiLJgMCTYLhLsI1fFTcotBIHXw1feBwYJP1fO3H3Uv-cHgjlDw.ZGN1gybNl6L5CvRM?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei96:
            '{"recording":"https://ufl.zoom.us/rec/play/6tFhTbVFl2LWEvHw4cFQZ2z5WkX3-mOqoVZcW2PhIVYfsup3wfOg2XO1kC0brwopIub7KsdBB63TyTP7.cZ3SXpms5VvNGmp-?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei95: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei912: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei913: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei910: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei911: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei90: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei916: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei917: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei914: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei915: '{"completed":true}',
          default: '{"class":{"name":"CEN3031","color":"#0ea5e9","index":1}}',
          recurrecnce51382ji4ftblamdhr9cophpei918: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei99: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T20:00:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T20:50:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 4,
          },
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T20:00:00.000Z",
      },
      recurringEventId: "51382ji4ftblamdhr9cophpei913",
      convertedStart: "2023-02-08T15:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 8, 3pm",
        day: "Feb 8",
        year: "2023",
        time: "3pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-08T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-08T15:50:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 8, 3:50pm",
        day: "Feb 8",
        year: "2023",
        time: "3:50pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-08T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3350594384294000"',
      id: "1k372ktiqemc41n8j9gf5pbt00",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MWszNzJrdGlxZW1jNDFuOGo5Z2Y1cGJ0MDBfMjAyMzAxMDlUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-13T22:28:27.000Z",
      updated: "2023-02-21T02:05:56.245Z",
      summary: "CIS4930 - Live",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-08T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-08T18:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230428T035959Z;BYDAY=MO,WE,FR",
      ],
      iCalUID: "1k372ktiqemc41n8j9gf5pbt00@google.com",
      sequence: 4,
      extendedProperties: {
        private: {
          recurrecnce1k372ktiqemc41n8j9gf5pbt0012: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0013: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt000: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0010: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0011: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt002: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt001: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt004: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt003: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0018: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0016: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0017: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0014: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0015: '{"completed":true}',
          default: '{"class":{"name":"CIS4930","color":"#fb923c","index":3}}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt006: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt005: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt008: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt007: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt009: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T23:00:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-28T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
          {
            weekday: 4,
          },
        ],
        dtstart: "2023-01-09T22:10:00.000Z",
      },
      recurringEventId: "1k372ktiqemc41n8j9gf5pbt0013",
      convertedStart: "2023-02-08T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Feb 8, 5:10pm",
        day: "Feb 8",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-08T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-08T18:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 8, 6pm",
        day: "Feb 8",
        year: "2023",
        time: "6pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-08T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3351626936186000"',
      id: "3k7e7h62p6ub8afhr09dugdv4k",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=M2s3ZTdoNjJwNnViOGFmaHIwOWR1Z2R2NGtfMjAyMzAxMTJUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:37:23.000Z",
      updated: "2023-02-07T23:44:28.093Z",
      summary: "COP4600 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-09T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-09T19:05:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=TH"],
      iCalUID: "3k7e7h62p6ub8afhr09dugdv4k@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce3k7e7h62p6ub8afhr09dugdv4k3: '{"completed":true}',
          recurrecnce3k7e7h62p6ub8afhr09dugdv4k2:
            '{"recording":"https://ufl.zoom.us/rec/play/OY9q4wDHgCFaCtlXW4L95zAsv-xbsuF0nTzxeUbkSs5lzdnAdIHrtVFL3uCp0GWLqK_rPqTiqqc_SQau.aPZO7ceFsSXmN0Cn?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          default: '{"class":{"name":"COP4600","color":"#0284c7","index":2}}',
          recurrecnce3k7e7h62p6ub8afhr09dugdv4k1: '{"completed":true}',
          recurrecnce3k7e7h62p6ub8afhr09dugdv4k0:
            '{"recording":"https://ufl.zoom.us/rec/play/9MEPb47fU6Ymcm2Stq-e3scNXkON2L0SWTb3nr5rnXsnbH7rJjFR7XLO7NyxOwlWI292U-c4Ui6D7TGy.aN-8rrxSAFG6lXl-?continueMode=true&_x_zm_rtaid=WAx5U1RSS1Ga7ha1-8WxMQ.1673643445927.8f150b6acba85fc5da2bb1910cc2c3ef&_x_zm_rhtaid=869","completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-12T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-13T00:05:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 3,
          },
        ],
        dtstart: "2023-01-12T22:10:00.000Z",
      },
      recurringEventId: "3k7e7h62p6ub8afhr09dugdv4k4",
      convertedStart: "2023-02-09T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Feb 9, 5:10pm",
        day: "Feb 9",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-09T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-09T19:05:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 9, 7:05pm",
        day: "Feb 9",
        year: "2023",
        time: "7:05pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-09T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3351799770349000"',
      id: "ah073inehsamakg7ktchfcc50g",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=YWgwNzNpbmVoc2FtYWtnN2t0Y2hmY2M1MGcgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T22:27:05.000Z",
      updated: "2023-02-08T23:44:45.258Z",
      summary: "Ex3 - Console Debugging",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-10",
      },
      end: {
        date: "2023-02-11",
      },
      iCalUID: "ah073inehsamakg7ktchfcc50g@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"class":{"name":"COP4600","color":"#0284c7","index":2},"link":"https://ufl.instructure.com/courses/473242/assignments/5487547","completed":true}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-10T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 10",
        day: "Feb 10",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-10T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-11T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 11",
        day: "Feb 11",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-11T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890290990000"',
      id: "6i0pvoul1u681couun0d1kukl4",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NmkwcHZvdWwxdTY4MWNvdXVuMGQxa3VrbDRfMjAyMzAxMTNUMTg1NTAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:33:40.000Z",
      updated: "2023-02-21T02:05:45.495Z",
      summary: "PHI3681 Discussion - In Person",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-10T13:55:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-10T14:45:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=FR"],
      iCalUID: "6i0pvoul1u681couun0d1kukl4@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce6i0pvoul1u681couun0d1kukl40: '{"completed":true}',
          default: '{"class":{"name":"PHI3681","color":"#fbbf24","index":0}}',
          recurrecnce6i0pvoul1u681couun0d1kukl41: '{"completed":true}',
          recurrecnce6i0pvoul1u681couun0d1kukl42: '{"completed":true}',
          recurrecnce6i0pvoul1u681couun0d1kukl43: '{"completed":true}',
          recurrecnce6i0pvoul1u681couun0d1kukl44: '{"completed":true}',
          recurrecnce6i0pvoul1u681couun0d1kukl45: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-13T18:55:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-13T19:45:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 4,
          },
        ],
        dtstart: "2023-01-13T18:55:00.000Z",
      },
      recurringEventId: "6i0pvoul1u681couun0d1kukl44",
      convertedStart: "2023-02-10T13:55:00.000-05:00",
      formatedStart: {
        date_text: "Feb 10, 1:55pm",
        day: "Feb 10",
        year: "2023",
        time: "1:55pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-10T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-10T14:45:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 10, 2:45pm",
        day: "Feb 10",
        year: "2023",
        time: "2:45pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-10T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890313356000"',
      id: "51382ji4ftblamdhr9cophpei9",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NTEzODJqaTRmdGJsYW1kaHI5Y29waHBlaTlfMjAyMzAxMDlUMjAwMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:26:50.000Z",
      updated: "2023-02-21T02:05:56.678Z",
      summary: "CEN3031 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-10T15:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-10T15:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=FR,MO,WE",
      ],
      iCalUID: "51382ji4ftblamdhr9cophpei9@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce51382ji4ftblamdhr9cophpei94:
            '{"recording":"https://ufl.zoom.us/rec/play/UGrLwAqQsdziO6McV07jwq1Ht1__hkp7eNf_F0X5-GU4HrKUtrwVbIgN8tVuHFgTJhBuOO4hOJeDRYCI.WuxzUOzl_VBdBpmZ?continueMode=true&_x_zm_rtaid=k3I-hYmyTDmNqz8Ldo1pbA.1674155364160.cf86fa7213e95619052ea4971abeca40&_x_zm_rhtaid=952","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei93: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei92:
            '{"recording":"https://ufl.zoom.us/rec/play/5QtRoXfsxrRU8Ncv8zGwQY__dWVy2yedF8KKn2-LFp7k2S707hPSkKcLK_J_yVMo_1iZs9POMDblwKno.0tinHPE1_cLQz0uU?continueMode=true&_x_zm_rtaid=S79Nh3G7R1mk7BmqGE7vsw.1673984189633.a1e7d4ba2f723783084708defbd8146f&_x_zm_rhtaid=999","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei91:
            '{"recording":"https://ufl.zoom.us/rec/play/4hKX0NKHmbK3H7ywQr6b6NLbyINcwsnIOnIEB5Rvr3RntZk9_XhB5hA0VwXXiysEHkj7GdpS7-HMzT0i.ZxNVBPs_SiDbDlS6?continueMode=true&_x_zm_rtaid=WAx5U1RSS1Ga7ha1-8WxMQ.1673643445927.8f150b6acba85fc5da2bb1910cc2c3ef&_x_zm_rhtaid=869","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei98: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei97:
            '{"recording":"https://ufl.zoom.us/rec/play/6SVobBhWKCnbUVKrmneX3NVP45BzaiLJgMCTYLhLsI1fFTcotBIHXw1feBwYJP1fO3H3Uv-cHgjlDw.ZGN1gybNl6L5CvRM?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei96:
            '{"recording":"https://ufl.zoom.us/rec/play/6tFhTbVFl2LWEvHw4cFQZ2z5WkX3-mOqoVZcW2PhIVYfsup3wfOg2XO1kC0brwopIub7KsdBB63TyTP7.cZ3SXpms5VvNGmp-?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei95: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei912: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei913: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei910: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei911: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei90: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei916: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei917: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei914: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei915: '{"completed":true}',
          default: '{"class":{"name":"CEN3031","color":"#0ea5e9","index":1}}',
          recurrecnce51382ji4ftblamdhr9cophpei918: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei99: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T20:00:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T20:50:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 4,
          },
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T20:00:00.000Z",
      },
      recurringEventId: "51382ji4ftblamdhr9cophpei914",
      convertedStart: "2023-02-10T15:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 10, 3pm",
        day: "Feb 10",
        year: "2023",
        time: "3pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-10T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-10T15:50:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 10, 3:50pm",
        day: "Feb 10",
        year: "2023",
        time: "3:50pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-10T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3350594384294000"',
      id: "1k372ktiqemc41n8j9gf5pbt00",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MWszNzJrdGlxZW1jNDFuOGo5Z2Y1cGJ0MDBfMjAyMzAxMDlUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-13T22:28:27.000Z",
      updated: "2023-02-21T02:05:56.245Z",
      summary: "CIS4930 - Live",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-10T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-10T18:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230428T035959Z;BYDAY=MO,WE,FR",
      ],
      iCalUID: "1k372ktiqemc41n8j9gf5pbt00@google.com",
      sequence: 4,
      extendedProperties: {
        private: {
          recurrecnce1k372ktiqemc41n8j9gf5pbt0012: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0013: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt000: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0010: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0011: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt002: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt001: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt004: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt003: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0018: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0016: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0017: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0014: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0015: '{"completed":true}',
          default: '{"class":{"name":"CIS4930","color":"#fb923c","index":3}}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt006: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt005: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt008: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt007: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt009: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T23:00:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-28T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
          {
            weekday: 4,
          },
        ],
        dtstart: "2023-01-09T22:10:00.000Z",
      },
      recurringEventId: "1k372ktiqemc41n8j9gf5pbt0014",
      convertedStart: "2023-02-10T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Feb 10, 5:10pm",
        day: "Feb 10",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-10T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-10T18:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 10, 6pm",
        day: "Feb 10",
        year: "2023",
        time: "6pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-10T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3352621201444000"',
      id: "h29425u3v4negrjl9unhnglsmk",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=aDI5NDI1dTN2NG5lZ3JqbDl1bmhuZ2xzbWsgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T22:15:23.000Z",
      updated: "2023-02-13T17:50:00.783Z",
      summary: "Assignment: Open Source Documentation Contribution",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-12",
      },
      end: {
        date: "2023-02-13",
      },
      iCalUID: "h29425u3v4negrjl9unhnglsmk@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"class":{"name":"CIS4930","color":"#fb923c","index":3},"completed":true}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-12T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 12",
        day: "Feb 12",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-12T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-13T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 13",
        day: "Feb 13",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-13T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3352621186589000"',
      id: "qfnofd7im53v1luebff1q87e7c",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=cWZub2ZkN2ltNTN2MWx1ZWJmZjFxODdlN2MgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T20:57:55.000Z",
      updated: "2023-02-13T17:49:53.325Z",
      summary: "Reading - Machine Bias Predictive Policing",
      description:
        "Cont’d: Selections from Boonin, “AI Book Manuscript” (26 – 47): Predictive Policing and the Problem of Bias \n \nSelections from Boonin, “AI Book Manuscript” (47 – 60): Accepting the Bias ",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-13",
      },
      end: {
        date: "2023-02-14",
      },
      iCalUID: "qfnofd7im53v1luebff1q87e7c@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"link":"https://ufl.instructure.com/courses/473642/files/folder/Readings","class":{"name":"PHI3681","color":"#fbbf24","index":0},"completed":true}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-13T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 13",
        day: "Feb 13",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-13T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-14T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 14",
        day: "Feb 14",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-14T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353117519629000"',
      id: "6tsnbd2hc05tj5tkt7vdhsl6jk",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NnRzbmJkMmhjMDV0ajV0a3Q3dmRoc2w2amsgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T22:54:31.000Z",
      updated: "2023-02-16T14:45:59.845Z",
      summary: " Reading - Modern OS 3.3.2-3.5",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-13",
      },
      end: {
        date: "2023-02-14",
      },
      iCalUID: "6tsnbd2hc05tj5tkt7vdhsl6jk@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"link":"https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Modern%20Operating%20Systems.pdf","class":{"name":"COP4600","color":"#0284c7","index":2},"completed":true}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-13T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 13",
        day: "Feb 13",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-13T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-14T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 14",
        day: "Feb 14",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-14T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3352621191425000"',
      id: "dii2flbflvf8n642a0mga9kstc",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=ZGlpMmZsYmZsdmY4bjY0MmEwbWdhOWtzdGMgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T19:51:07.000Z",
      updated: "2023-02-13T17:49:55.744Z",
      summary: "Week 6 Discussion Post",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-13T17:50:00Z",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-13T17:50:00Z",
        timeZone: "America/New_York",
      },
      iCalUID: "dii2flbflvf8n642a0mga9kstc@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"class":{"name":"PHI3681","color":"#fbbf24","index":0},"link":"https://ufl.instructure.com/courses/473642/discussion_topics/3776451","completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      convertedStart: "2023-02-13T12:50:00.000-05:00",
      formatedStart: {
        date_text: "Feb 13, 12:50pm",
        day: "Feb 13",
        year: "2023",
        time: "12:50pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-13T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-13T12:50:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 13, 12:50pm",
        day: "Feb 13",
        year: "2023",
        time: "12:50pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-13T00:00:00.000-05:00",
      },
      type: "task",
    },
    {
      kind: "calendar#event",
      etag: '"3353890309396000"',
      id: "2vrmkjpjkb3ichcp2uh4q2obeg",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MnZybWtqcGprYjNpY2hjcDJ1aDRxMm9iZWdfMjAyMzAxMDlUMTc1MDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:29:37.000Z",
      updated: "2023-02-21T02:05:54.698Z",
      summary: "PHI3681 - In Person",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-13T12:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-13T13:40:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=MO,WE",
      ],
      iCalUID: "2vrmkjpjkb3ichcp2uh4q2obeg@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg0: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg3: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg4: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg1: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg2: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg7: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg8: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg5: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg6: '{"completed":true}',
          default: '{"class":{"name":"PHI3681","color":"#fbbf24","index":0}}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg9: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg11: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg10: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg12: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T17:50:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T18:40:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T17:50:00.000Z",
      },
      recurringEventId: "2vrmkjpjkb3ichcp2uh4q2obeg10",
      convertedStart: "2023-02-13T12:50:00.000-05:00",
      formatedStart: {
        date_text: "Feb 13, 12:50pm",
        day: "Feb 13",
        year: "2023",
        time: "12:50pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-13T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-13T13:40:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 13, 1:40pm",
        day: "Feb 13",
        year: "2023",
        time: "1:40pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-13T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890313356000"',
      id: "51382ji4ftblamdhr9cophpei9",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NTEzODJqaTRmdGJsYW1kaHI5Y29waHBlaTlfMjAyMzAxMDlUMjAwMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:26:50.000Z",
      updated: "2023-02-21T02:05:56.678Z",
      summary: "CEN3031 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-13T15:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-13T15:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=FR,MO,WE",
      ],
      iCalUID: "51382ji4ftblamdhr9cophpei9@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce51382ji4ftblamdhr9cophpei94:
            '{"recording":"https://ufl.zoom.us/rec/play/UGrLwAqQsdziO6McV07jwq1Ht1__hkp7eNf_F0X5-GU4HrKUtrwVbIgN8tVuHFgTJhBuOO4hOJeDRYCI.WuxzUOzl_VBdBpmZ?continueMode=true&_x_zm_rtaid=k3I-hYmyTDmNqz8Ldo1pbA.1674155364160.cf86fa7213e95619052ea4971abeca40&_x_zm_rhtaid=952","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei93: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei92:
            '{"recording":"https://ufl.zoom.us/rec/play/5QtRoXfsxrRU8Ncv8zGwQY__dWVy2yedF8KKn2-LFp7k2S707hPSkKcLK_J_yVMo_1iZs9POMDblwKno.0tinHPE1_cLQz0uU?continueMode=true&_x_zm_rtaid=S79Nh3G7R1mk7BmqGE7vsw.1673984189633.a1e7d4ba2f723783084708defbd8146f&_x_zm_rhtaid=999","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei91:
            '{"recording":"https://ufl.zoom.us/rec/play/4hKX0NKHmbK3H7ywQr6b6NLbyINcwsnIOnIEB5Rvr3RntZk9_XhB5hA0VwXXiysEHkj7GdpS7-HMzT0i.ZxNVBPs_SiDbDlS6?continueMode=true&_x_zm_rtaid=WAx5U1RSS1Ga7ha1-8WxMQ.1673643445927.8f150b6acba85fc5da2bb1910cc2c3ef&_x_zm_rhtaid=869","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei98: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei97:
            '{"recording":"https://ufl.zoom.us/rec/play/6SVobBhWKCnbUVKrmneX3NVP45BzaiLJgMCTYLhLsI1fFTcotBIHXw1feBwYJP1fO3H3Uv-cHgjlDw.ZGN1gybNl6L5CvRM?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei96:
            '{"recording":"https://ufl.zoom.us/rec/play/6tFhTbVFl2LWEvHw4cFQZ2z5WkX3-mOqoVZcW2PhIVYfsup3wfOg2XO1kC0brwopIub7KsdBB63TyTP7.cZ3SXpms5VvNGmp-?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei95: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei912: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei913: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei910: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei911: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei90: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei916: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei917: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei914: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei915: '{"completed":true}',
          default: '{"class":{"name":"CEN3031","color":"#0ea5e9","index":1}}',
          recurrecnce51382ji4ftblamdhr9cophpei918: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei99: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T20:00:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T20:50:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 4,
          },
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T20:00:00.000Z",
      },
      recurringEventId: "51382ji4ftblamdhr9cophpei915",
      convertedStart: "2023-02-13T15:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 13, 3pm",
        day: "Feb 13",
        year: "2023",
        time: "3pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-13T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-13T15:50:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 13, 3:50pm",
        day: "Feb 13",
        year: "2023",
        time: "3:50pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-13T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3350594384294000"',
      id: "1k372ktiqemc41n8j9gf5pbt00",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MWszNzJrdGlxZW1jNDFuOGo5Z2Y1cGJ0MDBfMjAyMzAxMDlUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-13T22:28:27.000Z",
      updated: "2023-02-21T02:05:56.245Z",
      summary: "CIS4930 - Live",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-13T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-13T18:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230428T035959Z;BYDAY=MO,WE,FR",
      ],
      iCalUID: "1k372ktiqemc41n8j9gf5pbt00@google.com",
      sequence: 4,
      extendedProperties: {
        private: {
          recurrecnce1k372ktiqemc41n8j9gf5pbt0012: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0013: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt000: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0010: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0011: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt002: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt001: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt004: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt003: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0018: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0016: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0017: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0014: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0015: '{"completed":true}',
          default: '{"class":{"name":"CIS4930","color":"#fb923c","index":3}}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt006: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt005: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt008: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt007: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt009: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T23:00:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-28T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
          {
            weekday: 4,
          },
        ],
        dtstart: "2023-01-09T22:10:00.000Z",
      },
      recurringEventId: "1k372ktiqemc41n8j9gf5pbt0015",
      convertedStart: "2023-02-13T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Feb 13, 5:10pm",
        day: "Feb 13",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-13T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-13T18:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 13, 6pm",
        day: "Feb 13",
        year: "2023",
        time: "6pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-13T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3350443981418000"',
      id: "0hr8reqnnnlaf7k7fens34c22t",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MGhyOHJlcW5ubmxhZjdrN2ZlbnMzNGMyMnRfMjAyMzAxMTBUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:36:26.000Z",
      updated: "2023-02-01T03:26:30.709Z",
      summary: "COP4600 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-14T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-14T18:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=TU"],
      iCalUID: "0hr8reqnnnlaf7k7fens34c22t@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce0hr8reqnnnlaf7k7fens34c22t1:
            '{"recording":"https://ufl.zoom.us/rec/play/Z8_aetm9XR0WM2Ep2nRm6Y333qPD5R37GDy8f9Klv9iYD2cKFgikGwtubHtjGvl3zWoJJDPBgj8OkdO-.lzK4dRjnWyUm-5-F?continueMode=true&_x_zm_rtaid=7PMqVe8TQaOoyQXih_jpzg.1674068202273.65156d0093852179edb21098a3f12b44&_x_zm_rhtaid=531","completed":true}',
          recurrecnce0hr8reqnnnlaf7k7fens34c22t2:
            '{"completed":true,"recording":"https://ufl.zoom.us/rec/play/hB9JYcoC2XIV-mt-QjDNC2Cb08o8Mz8V7vveL1WEG3UUwxnyvlC-4MOPNLaqOH1uc1rIviAwGALosrL6.XEjvE9jlmElOSv1I?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846"}',
          default: '{"class":{"name":"COP4600","color":"#0284c7","index":2}}',
          recurrecnce0hr8reqnnnlaf7k7fens34c22t0: '{"completed":true}',
          recurrecnce0hr8reqnnnlaf7k7fens34c22t3: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-10T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-10T23:00:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 1,
          },
        ],
        dtstart: "2023-01-10T22:10:00.000Z",
      },
      recurringEventId: "0hr8reqnnnlaf7k7fens34c22t5",
      convertedStart: "2023-02-14T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Feb 14, 5:10pm",
        day: "Feb 14",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-14T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-14T18:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 14, 6pm",
        day: "Feb 14",
        year: "2023",
        time: "6pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-14T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3352869470126000"',
      id: "3cf5k815h6qi41bo9evvj0bc4g",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=M2NmNWs4MTVoNnFpNDFibzlldnZqMGJjNGcgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-02-13T17:51:14.000Z",
      updated: "2023-02-16T14:46:04.302Z",
      summary: "In Class Study on Bias ",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-15",
      },
      end: {
        date: "2023-02-16",
      },
      iCalUID: "3cf5k815h6qi41bo9evvj0bc4g@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"class":{"name":"PHI3681","color":"#fbbf24","index":0},"priority":{"name":"5","color":"transparent","index":4},"completed":true}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-15T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 15",
        day: "Feb 15",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-15T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-16T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 16",
        day: "Feb 16",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-16T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890309396000"',
      id: "2vrmkjpjkb3ichcp2uh4q2obeg",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MnZybWtqcGprYjNpY2hjcDJ1aDRxMm9iZWdfMjAyMzAxMDlUMTc1MDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:29:37.000Z",
      updated: "2023-02-21T02:05:54.698Z",
      summary: "PHI3681 - In Person",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-15T12:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-15T13:40:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=MO,WE",
      ],
      iCalUID: "2vrmkjpjkb3ichcp2uh4q2obeg@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg0: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg3: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg4: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg1: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg2: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg7: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg8: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg5: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg6: '{"completed":true}',
          default: '{"class":{"name":"PHI3681","color":"#fbbf24","index":0}}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg9: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg11: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg10: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg12: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T17:50:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T18:40:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T17:50:00.000Z",
      },
      recurringEventId: "2vrmkjpjkb3ichcp2uh4q2obeg11",
      convertedStart: "2023-02-15T12:50:00.000-05:00",
      formatedStart: {
        date_text: "Feb 15, 12:50pm",
        day: "Feb 15",
        year: "2023",
        time: "12:50pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-15T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-15T13:40:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 15, 1:40pm",
        day: "Feb 15",
        year: "2023",
        time: "1:40pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-15T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353117534920000"',
      id: "10q94u0opab3h62c1ka2f1pp7v",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MTBxOTR1MG9wYWIzaDYyYzFrYTJmMXBwN3ZfMjAyMzAxMTFUMTg1NTAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:31:37.000Z",
      updated: "2023-02-16T14:46:07.460Z",
      summary: "COP4600 Discussion - In Person (Quiz)",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-15T13:55:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-15T14:45:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=WE"],
      iCalUID: "10q94u0opab3h62c1ka2f1pp7v@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce10q94u0opab3h62c1ka2f1pp7v1: '{"completed":true}',
          recurrecnce10q94u0opab3h62c1ka2f1pp7v0: '{"completed":true}',
          default: '{"class":{"name":"COP4600","color":"#0284c7","index":2}}',
          recurrecnce10q94u0opab3h62c1ka2f1pp7v5: '{"completed":true}',
          recurrecnce10q94u0opab3h62c1ka2f1pp7v4: '{"completed":true}',
          recurrecnce10q94u0opab3h62c1ka2f1pp7v3: '{"completed":true}',
          recurrecnce10q94u0opab3h62c1ka2f1pp7v2: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-11T18:55:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-11T19:45:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-11T18:55:00.000Z",
      },
      recurringEventId: "10q94u0opab3h62c1ka2f1pp7v5",
      convertedStart: "2023-02-15T13:55:00.000-05:00",
      formatedStart: {
        date_text: "Feb 15, 1:55pm",
        day: "Feb 15",
        year: "2023",
        time: "1:55pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-15T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-15T14:45:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 15, 2:45pm",
        day: "Feb 15",
        year: "2023",
        time: "2:45pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-15T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890313356000"',
      id: "51382ji4ftblamdhr9cophpei9",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NTEzODJqaTRmdGJsYW1kaHI5Y29waHBlaTlfMjAyMzAxMDlUMjAwMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:26:50.000Z",
      updated: "2023-02-21T02:05:56.678Z",
      summary: "CEN3031 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-15T15:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-15T15:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=FR,MO,WE",
      ],
      iCalUID: "51382ji4ftblamdhr9cophpei9@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce51382ji4ftblamdhr9cophpei94:
            '{"recording":"https://ufl.zoom.us/rec/play/UGrLwAqQsdziO6McV07jwq1Ht1__hkp7eNf_F0X5-GU4HrKUtrwVbIgN8tVuHFgTJhBuOO4hOJeDRYCI.WuxzUOzl_VBdBpmZ?continueMode=true&_x_zm_rtaid=k3I-hYmyTDmNqz8Ldo1pbA.1674155364160.cf86fa7213e95619052ea4971abeca40&_x_zm_rhtaid=952","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei93: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei92:
            '{"recording":"https://ufl.zoom.us/rec/play/5QtRoXfsxrRU8Ncv8zGwQY__dWVy2yedF8KKn2-LFp7k2S707hPSkKcLK_J_yVMo_1iZs9POMDblwKno.0tinHPE1_cLQz0uU?continueMode=true&_x_zm_rtaid=S79Nh3G7R1mk7BmqGE7vsw.1673984189633.a1e7d4ba2f723783084708defbd8146f&_x_zm_rhtaid=999","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei91:
            '{"recording":"https://ufl.zoom.us/rec/play/4hKX0NKHmbK3H7ywQr6b6NLbyINcwsnIOnIEB5Rvr3RntZk9_XhB5hA0VwXXiysEHkj7GdpS7-HMzT0i.ZxNVBPs_SiDbDlS6?continueMode=true&_x_zm_rtaid=WAx5U1RSS1Ga7ha1-8WxMQ.1673643445927.8f150b6acba85fc5da2bb1910cc2c3ef&_x_zm_rhtaid=869","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei98: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei97:
            '{"recording":"https://ufl.zoom.us/rec/play/6SVobBhWKCnbUVKrmneX3NVP45BzaiLJgMCTYLhLsI1fFTcotBIHXw1feBwYJP1fO3H3Uv-cHgjlDw.ZGN1gybNl6L5CvRM?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei96:
            '{"recording":"https://ufl.zoom.us/rec/play/6tFhTbVFl2LWEvHw4cFQZ2z5WkX3-mOqoVZcW2PhIVYfsup3wfOg2XO1kC0brwopIub7KsdBB63TyTP7.cZ3SXpms5VvNGmp-?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei95: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei912: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei913: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei910: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei911: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei90: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei916: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei917: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei914: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei915: '{"completed":true}',
          default: '{"class":{"name":"CEN3031","color":"#0ea5e9","index":1}}',
          recurrecnce51382ji4ftblamdhr9cophpei918: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei99: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T20:00:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T20:50:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 4,
          },
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T20:00:00.000Z",
      },
      recurringEventId: "51382ji4ftblamdhr9cophpei916",
      convertedStart: "2023-02-15T15:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 15, 3pm",
        day: "Feb 15",
        year: "2023",
        time: "3pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-15T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-15T15:50:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 15, 3:50pm",
        day: "Feb 15",
        year: "2023",
        time: "3:50pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-15T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3350594384294000"',
      id: "1k372ktiqemc41n8j9gf5pbt00",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MWszNzJrdGlxZW1jNDFuOGo5Z2Y1cGJ0MDBfMjAyMzAxMDlUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-13T22:28:27.000Z",
      updated: "2023-02-21T02:05:56.245Z",
      summary: "CIS4930 - Live",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-15T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-15T18:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230428T035959Z;BYDAY=MO,WE,FR",
      ],
      iCalUID: "1k372ktiqemc41n8j9gf5pbt00@google.com",
      sequence: 4,
      extendedProperties: {
        private: {
          recurrecnce1k372ktiqemc41n8j9gf5pbt0012: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0013: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt000: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0010: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0011: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt002: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt001: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt004: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt003: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0018: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0016: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0017: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0014: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0015: '{"completed":true}',
          default: '{"class":{"name":"CIS4930","color":"#fb923c","index":3}}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt006: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt005: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt008: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt007: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt009: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T23:00:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-28T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
          {
            weekday: 4,
          },
        ],
        dtstart: "2023-01-09T22:10:00.000Z",
      },
      recurringEventId: "1k372ktiqemc41n8j9gf5pbt0016",
      convertedStart: "2023-02-15T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Feb 15, 5:10pm",
        day: "Feb 15",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-15T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-15T18:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 15, 6pm",
        day: "Feb 15",
        year: "2023",
        time: "6pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-15T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3351626936186000"',
      id: "3k7e7h62p6ub8afhr09dugdv4k",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=M2s3ZTdoNjJwNnViOGFmaHIwOWR1Z2R2NGtfMjAyMzAxMTJUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:37:23.000Z",
      updated: "2023-02-07T23:44:28.093Z",
      summary: "COP4600 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-16T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-16T19:05:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=TH"],
      iCalUID: "3k7e7h62p6ub8afhr09dugdv4k@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce3k7e7h62p6ub8afhr09dugdv4k3: '{"completed":true}',
          recurrecnce3k7e7h62p6ub8afhr09dugdv4k2:
            '{"recording":"https://ufl.zoom.us/rec/play/OY9q4wDHgCFaCtlXW4L95zAsv-xbsuF0nTzxeUbkSs5lzdnAdIHrtVFL3uCp0GWLqK_rPqTiqqc_SQau.aPZO7ceFsSXmN0Cn?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          default: '{"class":{"name":"COP4600","color":"#0284c7","index":2}}',
          recurrecnce3k7e7h62p6ub8afhr09dugdv4k1: '{"completed":true}',
          recurrecnce3k7e7h62p6ub8afhr09dugdv4k0:
            '{"recording":"https://ufl.zoom.us/rec/play/9MEPb47fU6Ymcm2Stq-e3scNXkON2L0SWTb3nr5rnXsnbH7rJjFR7XLO7NyxOwlWI292U-c4Ui6D7TGy.aN-8rrxSAFG6lXl-?continueMode=true&_x_zm_rtaid=WAx5U1RSS1Ga7ha1-8WxMQ.1673643445927.8f150b6acba85fc5da2bb1910cc2c3ef&_x_zm_rhtaid=869","completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-12T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-13T00:05:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 3,
          },
        ],
        dtstart: "2023-01-12T22:10:00.000Z",
      },
      recurringEventId: "3k7e7h62p6ub8afhr09dugdv4k5",
      convertedStart: "2023-02-16T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Feb 16, 5:10pm",
        day: "Feb 16",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-16T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-16T19:05:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 16, 7:05pm",
        day: "Feb 16",
        year: "2023",
        time: "7:05pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-16T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890285333000"',
      id: "be92aash8b1uhcn449uogd1u90",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=YmU5MmFhc2g4YjF1aGNuNDQ5dW9nZDF1OTAgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T22:15:41.000Z",
      updated: "2023-02-21T02:05:42.698Z",
      summary: "Assignment: Open Source Code Review",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-17",
      },
      end: {
        date: "2023-02-18",
      },
      iCalUID: "be92aash8b1uhcn449uogd1u90@google.com",
      sequence: 2,
      extendedProperties: {
        private: {
          default:
            '{"class":{"name":"CIS4930","color":"#fb923c","index":3},"completed":true}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-17T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 17",
        day: "Feb 17",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-17T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-18T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 18",
        day: "Feb 18",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-18T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890286660000"',
      id: "uahpg3kmnfs1in2qmv7r3bjho4",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=dWFocGcza21uZnMxaW4ycW12N3IzYmpobzQgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T22:27:06.000Z",
      updated: "2023-02-21T02:05:43.371Z",
      summary: "Ex4 - Remote Debugging",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-17",
      },
      end: {
        date: "2023-02-18",
      },
      iCalUID: "uahpg3kmnfs1in2qmv7r3bjho4@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"class":{"name":"COP4600","color":"#0284c7","index":2},"link":"https://ufl.instructure.com/courses/473242/assignments/5487548","completed":true}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-17T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 17",
        day: "Feb 17",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-17T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-18T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 18",
        day: "Feb 18",
        year: "2023",
        time: null,
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-18T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890290990000"',
      id: "6i0pvoul1u681couun0d1kukl4",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NmkwcHZvdWwxdTY4MWNvdXVuMGQxa3VrbDRfMjAyMzAxMTNUMTg1NTAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:33:40.000Z",
      updated: "2023-02-21T02:05:45.495Z",
      summary: "PHI3681 Discussion - In Person",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-17T13:55:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-17T14:45:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=FR"],
      iCalUID: "6i0pvoul1u681couun0d1kukl4@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce6i0pvoul1u681couun0d1kukl40: '{"completed":true}',
          default: '{"class":{"name":"PHI3681","color":"#fbbf24","index":0}}',
          recurrecnce6i0pvoul1u681couun0d1kukl41: '{"completed":true}',
          recurrecnce6i0pvoul1u681couun0d1kukl42: '{"completed":true}',
          recurrecnce6i0pvoul1u681couun0d1kukl43: '{"completed":true}',
          recurrecnce6i0pvoul1u681couun0d1kukl44: '{"completed":true}',
          recurrecnce6i0pvoul1u681couun0d1kukl45: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-13T18:55:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-13T19:45:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 4,
          },
        ],
        dtstart: "2023-01-13T18:55:00.000Z",
      },
      recurringEventId: "6i0pvoul1u681couun0d1kukl45",
      convertedStart: "2023-02-17T13:55:00.000-05:00",
      formatedStart: {
        date_text: "Feb 17, 1:55pm",
        day: "Feb 17",
        year: "2023",
        time: "1:55pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-17T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-17T14:45:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 17, 2:45pm",
        day: "Feb 17",
        year: "2023",
        time: "2:45pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-17T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890313356000"',
      id: "51382ji4ftblamdhr9cophpei9",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NTEzODJqaTRmdGJsYW1kaHI5Y29waHBlaTlfMjAyMzAxMDlUMjAwMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:26:50.000Z",
      updated: "2023-02-21T02:05:56.678Z",
      summary: "CEN3031 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-17T15:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-17T15:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=FR,MO,WE",
      ],
      iCalUID: "51382ji4ftblamdhr9cophpei9@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce51382ji4ftblamdhr9cophpei94:
            '{"recording":"https://ufl.zoom.us/rec/play/UGrLwAqQsdziO6McV07jwq1Ht1__hkp7eNf_F0X5-GU4HrKUtrwVbIgN8tVuHFgTJhBuOO4hOJeDRYCI.WuxzUOzl_VBdBpmZ?continueMode=true&_x_zm_rtaid=k3I-hYmyTDmNqz8Ldo1pbA.1674155364160.cf86fa7213e95619052ea4971abeca40&_x_zm_rhtaid=952","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei93: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei92:
            '{"recording":"https://ufl.zoom.us/rec/play/5QtRoXfsxrRU8Ncv8zGwQY__dWVy2yedF8KKn2-LFp7k2S707hPSkKcLK_J_yVMo_1iZs9POMDblwKno.0tinHPE1_cLQz0uU?continueMode=true&_x_zm_rtaid=S79Nh3G7R1mk7BmqGE7vsw.1673984189633.a1e7d4ba2f723783084708defbd8146f&_x_zm_rhtaid=999","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei91:
            '{"recording":"https://ufl.zoom.us/rec/play/4hKX0NKHmbK3H7ywQr6b6NLbyINcwsnIOnIEB5Rvr3RntZk9_XhB5hA0VwXXiysEHkj7GdpS7-HMzT0i.ZxNVBPs_SiDbDlS6?continueMode=true&_x_zm_rtaid=WAx5U1RSS1Ga7ha1-8WxMQ.1673643445927.8f150b6acba85fc5da2bb1910cc2c3ef&_x_zm_rhtaid=869","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei98: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei97:
            '{"recording":"https://ufl.zoom.us/rec/play/6SVobBhWKCnbUVKrmneX3NVP45BzaiLJgMCTYLhLsI1fFTcotBIHXw1feBwYJP1fO3H3Uv-cHgjlDw.ZGN1gybNl6L5CvRM?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei96:
            '{"recording":"https://ufl.zoom.us/rec/play/6tFhTbVFl2LWEvHw4cFQZ2z5WkX3-mOqoVZcW2PhIVYfsup3wfOg2XO1kC0brwopIub7KsdBB63TyTP7.cZ3SXpms5VvNGmp-?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei95: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei912: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei913: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei910: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei911: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei90: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei916: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei917: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei914: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei915: '{"completed":true}',
          default: '{"class":{"name":"CEN3031","color":"#0ea5e9","index":1}}',
          recurrecnce51382ji4ftblamdhr9cophpei918: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei99: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T20:00:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T20:50:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 4,
          },
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T20:00:00.000Z",
      },
      recurringEventId: "51382ji4ftblamdhr9cophpei917",
      convertedStart: "2023-02-17T15:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 17, 3pm",
        day: "Feb 17",
        year: "2023",
        time: "3pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-17T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-17T15:50:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 17, 3:50pm",
        day: "Feb 17",
        year: "2023",
        time: "3:50pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-17T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3350594384294000"',
      id: "1k372ktiqemc41n8j9gf5pbt00",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MWszNzJrdGlxZW1jNDFuOGo5Z2Y1cGJ0MDBfMjAyMzAxMDlUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-13T22:28:27.000Z",
      updated: "2023-02-21T02:05:56.245Z",
      summary: "CIS4930 - Live",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-17T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-17T18:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230428T035959Z;BYDAY=MO,WE,FR",
      ],
      iCalUID: "1k372ktiqemc41n8j9gf5pbt00@google.com",
      sequence: 4,
      extendedProperties: {
        private: {
          recurrecnce1k372ktiqemc41n8j9gf5pbt0012: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0013: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt000: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0010: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0011: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt002: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt001: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt004: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt003: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0018: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0016: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0017: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0014: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0015: '{"completed":true}',
          default: '{"class":{"name":"CIS4930","color":"#fb923c","index":3}}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt006: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt005: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt008: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt007: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt009: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T23:00:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-28T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
          {
            weekday: 4,
          },
        ],
        dtstart: "2023-01-09T22:10:00.000Z",
      },
      recurringEventId: "1k372ktiqemc41n8j9gf5pbt0017",
      convertedStart: "2023-02-17T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Feb 17, 5:10pm",
        day: "Feb 17",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-17T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-17T18:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 17, 6pm",
        day: "Feb 17",
        year: "2023",
        time: "6pm",
        clumped_date: "Overdue",
        status: "past",
        date: "2023-02-17T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890300620000"',
      id: "cbgo897gjfimddoa9j7thjha0g",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=Y2Jnbzg5N2dqZmltZGRvYTlqN3RoamhhMGcgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T20:59:11.000Z",
      updated: "2023-02-21T02:05:50.370Z",
      summary: "Reading - What's wrong with the black box?",
      description:
        "Boonin, “AI Book Manuscript” (141 – 162): Risk Assessment Tools and the Black Box Problem \n \nRecommended: Burrell, “How the machine ‘thinks’: Understanding opacity in machine learning algorithms” \n \nRecommended: Neural Networks (YouTube tutorial series) ",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-20",
      },
      end: {
        date: "2023-02-21",
      },
      iCalUID: "cbgo897gjfimddoa9j7thjha0g@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"link":"https://ufl.instructure.com/courses/473642/files/folder/Readings","class":{"name":"PHI3681","color":"#fbbf24","index":0},"completed":true}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-20T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Today",
        day: "Today",
        year: "2023",
        time: null,
        clumped_date: "Today",
        status: "today",
        date: "2023-02-20T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-21T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Tomorrow",
        day: "Tomorrow",
        year: "2023",
        time: null,
        clumped_date: "Tomorrow",
        status: "future",
        date: "2023-02-21T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890301435000"',
      id: "mgpr7v6sev1d19nrvqvnspqrm0",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=bWdwcjd2NnNldjFkMTlucnZxdm5zcHFybTAgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T22:54:31.000Z",
      updated: "2023-02-21T02:05:50.806Z",
      summary: " Reading - Modern OS 3.6-3.7",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-20",
      },
      end: {
        date: "2023-02-21",
      },
      iCalUID: "mgpr7v6sev1d19nrvqvnspqrm0@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"link":"https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Modern%20Operating%20Systems.pdf","class":{"name":"COP4600","color":"#0284c7","index":2},"completed":true}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-20T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Today",
        day: "Today",
        year: "2023",
        time: null,
        clumped_date: "Today",
        status: "today",
        date: "2023-02-20T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-21T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Tomorrow",
        day: "Tomorrow",
        year: "2023",
        time: null,
        clumped_date: "Tomorrow",
        status: "future",
        date: "2023-02-21T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890306382000"',
      id: "mg3onemubeu5kto9co16nvfvt4",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=bWczb25lbXViZXU1a3RvOWNvMTZudmZ2dDQgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T19:51:53.000Z",
      updated: "2023-02-21T02:05:53.307Z",
      summary: "Week 7 Discussion Post",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-20T17:50:00Z",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-20T17:50:00Z",
        timeZone: "America/New_York",
      },
      iCalUID: "mg3onemubeu5kto9co16nvfvt4@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"class":{"name":"PHI3681","color":"#fbbf24","index":0},"link":"https://ufl.instructure.com/courses/473642/discussion_topics/3757066","completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      convertedStart: "2023-02-20T12:50:00.000-05:00",
      formatedStart: {
        date_text: "Today, 12:50pm",
        day: "Today",
        year: "2023",
        time: "12:50pm",
        clumped_date: "Today",
        status: "today",
        date: "2023-02-20T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-20T12:50:00.000-05:00",
      formatedEnd: {
        date_text: "Today, 12:50pm",
        day: "Today",
        year: "2023",
        time: "12:50pm",
        clumped_date: "Today",
        status: "today",
        date: "2023-02-20T00:00:00.000-05:00",
      },
      type: "task",
    },
    {
      kind: "calendar#event",
      etag: '"3353890309396000"',
      id: "2vrmkjpjkb3ichcp2uh4q2obeg",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MnZybWtqcGprYjNpY2hjcDJ1aDRxMm9iZWdfMjAyMzAxMDlUMTc1MDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:29:37.000Z",
      updated: "2023-02-21T02:05:54.698Z",
      summary: "PHI3681 - In Person",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-20T12:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-20T13:40:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=MO,WE",
      ],
      iCalUID: "2vrmkjpjkb3ichcp2uh4q2obeg@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg0: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg3: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg4: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg1: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg2: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg7: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg8: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg5: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg6: '{"completed":true}',
          default: '{"class":{"name":"PHI3681","color":"#fbbf24","index":0}}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg9: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg11: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg10: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg12: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T17:50:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T18:40:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T17:50:00.000Z",
      },
      recurringEventId: "2vrmkjpjkb3ichcp2uh4q2obeg12",
      convertedStart: "2023-02-20T12:50:00.000-05:00",
      formatedStart: {
        date_text: "Today, 12:50pm",
        day: "Today",
        year: "2023",
        time: "12:50pm",
        clumped_date: "Today",
        status: "today",
        date: "2023-02-20T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-20T13:40:00.000-05:00",
      formatedEnd: {
        date_text: "Today, 1:40pm",
        day: "Today",
        year: "2023",
        time: "1:40pm",
        clumped_date: "Today",
        status: "today",
        date: "2023-02-20T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890313356000"',
      id: "51382ji4ftblamdhr9cophpei9",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NTEzODJqaTRmdGJsYW1kaHI5Y29waHBlaTlfMjAyMzAxMDlUMjAwMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:26:50.000Z",
      updated: "2023-02-21T02:05:56.678Z",
      summary: "CEN3031 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-20T15:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-20T15:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=FR,MO,WE",
      ],
      iCalUID: "51382ji4ftblamdhr9cophpei9@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce51382ji4ftblamdhr9cophpei94:
            '{"recording":"https://ufl.zoom.us/rec/play/UGrLwAqQsdziO6McV07jwq1Ht1__hkp7eNf_F0X5-GU4HrKUtrwVbIgN8tVuHFgTJhBuOO4hOJeDRYCI.WuxzUOzl_VBdBpmZ?continueMode=true&_x_zm_rtaid=k3I-hYmyTDmNqz8Ldo1pbA.1674155364160.cf86fa7213e95619052ea4971abeca40&_x_zm_rhtaid=952","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei93: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei92:
            '{"recording":"https://ufl.zoom.us/rec/play/5QtRoXfsxrRU8Ncv8zGwQY__dWVy2yedF8KKn2-LFp7k2S707hPSkKcLK_J_yVMo_1iZs9POMDblwKno.0tinHPE1_cLQz0uU?continueMode=true&_x_zm_rtaid=S79Nh3G7R1mk7BmqGE7vsw.1673984189633.a1e7d4ba2f723783084708defbd8146f&_x_zm_rhtaid=999","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei91:
            '{"recording":"https://ufl.zoom.us/rec/play/4hKX0NKHmbK3H7ywQr6b6NLbyINcwsnIOnIEB5Rvr3RntZk9_XhB5hA0VwXXiysEHkj7GdpS7-HMzT0i.ZxNVBPs_SiDbDlS6?continueMode=true&_x_zm_rtaid=WAx5U1RSS1Ga7ha1-8WxMQ.1673643445927.8f150b6acba85fc5da2bb1910cc2c3ef&_x_zm_rhtaid=869","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei98: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei97:
            '{"recording":"https://ufl.zoom.us/rec/play/6SVobBhWKCnbUVKrmneX3NVP45BzaiLJgMCTYLhLsI1fFTcotBIHXw1feBwYJP1fO3H3Uv-cHgjlDw.ZGN1gybNl6L5CvRM?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei96:
            '{"recording":"https://ufl.zoom.us/rec/play/6tFhTbVFl2LWEvHw4cFQZ2z5WkX3-mOqoVZcW2PhIVYfsup3wfOg2XO1kC0brwopIub7KsdBB63TyTP7.cZ3SXpms5VvNGmp-?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei95: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei912: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei913: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei910: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei911: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei90: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei916: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei917: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei914: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei915: '{"completed":true}',
          default: '{"class":{"name":"CEN3031","color":"#0ea5e9","index":1}}',
          recurrecnce51382ji4ftblamdhr9cophpei918: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei99: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T20:00:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T20:50:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 4,
          },
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T20:00:00.000Z",
      },
      recurringEventId: "51382ji4ftblamdhr9cophpei918",
      convertedStart: "2023-02-20T15:00:00.000-05:00",
      formatedStart: {
        date_text: "Today, 3pm",
        day: "Today",
        year: "2023",
        time: "3pm",
        clumped_date: "Today",
        status: "today",
        date: "2023-02-20T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-20T15:50:00.000-05:00",
      formatedEnd: {
        date_text: "Today, 3:50pm",
        day: "Today",
        year: "2023",
        time: "3:50pm",
        clumped_date: "Today",
        status: "today",
        date: "2023-02-20T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3350594384294000"',
      id: "1k372ktiqemc41n8j9gf5pbt00",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MWszNzJrdGlxZW1jNDFuOGo5Z2Y1cGJ0MDBfMjAyMzAxMDlUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-13T22:28:27.000Z",
      updated: "2023-02-21T02:05:56.245Z",
      summary: "CIS4930 - Live",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-20T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-20T18:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230428T035959Z;BYDAY=MO,WE,FR",
      ],
      iCalUID: "1k372ktiqemc41n8j9gf5pbt00@google.com",
      sequence: 4,
      extendedProperties: {
        private: {
          recurrecnce1k372ktiqemc41n8j9gf5pbt0012: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0013: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt000: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0010: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0011: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt002: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt001: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt004: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt003: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0018: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0016: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0017: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0014: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0015: '{"completed":true}',
          default: '{"class":{"name":"CIS4930","color":"#fb923c","index":3}}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt006: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt005: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt008: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt007: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt009: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T23:00:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-28T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
          {
            weekday: 4,
          },
        ],
        dtstart: "2023-01-09T22:10:00.000Z",
      },
      recurringEventId: "1k372ktiqemc41n8j9gf5pbt0018",
      convertedStart: "2023-02-20T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Today, 5:10pm",
        day: "Today",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Today",
        status: "today",
        date: "2023-02-20T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-20T18:00:00.000-05:00",
      formatedEnd: {
        date_text: "Today, 6pm",
        day: "Today",
        year: "2023",
        time: "6pm",
        clumped_date: "Today",
        status: "today",
        date: "2023-02-20T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3350443981418000"',
      id: "0hr8reqnnnlaf7k7fens34c22t",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MGhyOHJlcW5ubmxhZjdrN2ZlbnMzNGMyMnRfMjAyMzAxMTBUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:36:26.000Z",
      updated: "2023-02-01T03:26:30.709Z",
      summary: "COP4600 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-21T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-21T18:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=TU"],
      iCalUID: "0hr8reqnnnlaf7k7fens34c22t@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce0hr8reqnnnlaf7k7fens34c22t1:
            '{"recording":"https://ufl.zoom.us/rec/play/Z8_aetm9XR0WM2Ep2nRm6Y333qPD5R37GDy8f9Klv9iYD2cKFgikGwtubHtjGvl3zWoJJDPBgj8OkdO-.lzK4dRjnWyUm-5-F?continueMode=true&_x_zm_rtaid=7PMqVe8TQaOoyQXih_jpzg.1674068202273.65156d0093852179edb21098a3f12b44&_x_zm_rhtaid=531","completed":true}',
          recurrecnce0hr8reqnnnlaf7k7fens34c22t2:
            '{"completed":true,"recording":"https://ufl.zoom.us/rec/play/hB9JYcoC2XIV-mt-QjDNC2Cb08o8Mz8V7vveL1WEG3UUwxnyvlC-4MOPNLaqOH1uc1rIviAwGALosrL6.XEjvE9jlmElOSv1I?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846"}',
          default: '{"class":{"name":"COP4600","color":"#0284c7","index":2}}',
          recurrecnce0hr8reqnnnlaf7k7fens34c22t0: '{"completed":true}',
          recurrecnce0hr8reqnnnlaf7k7fens34c22t3: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-10T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-10T23:00:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 1,
          },
        ],
        dtstart: "2023-01-10T22:10:00.000Z",
      },
      recurringEventId: "0hr8reqnnnlaf7k7fens34c22t6",
      convertedStart: "2023-02-21T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Tomorrow, 5:10pm",
        day: "Tomorrow",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Tomorrow",
        status: "future",
        date: "2023-02-21T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-21T18:00:00.000-05:00",
      formatedEnd: {
        date_text: "Tomorrow, 6pm",
        day: "Tomorrow",
        year: "2023",
        time: "6pm",
        clumped_date: "Tomorrow",
        status: "future",
        date: "2023-02-21T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890322869000"',
      id: "1l97cjq5hb924l9j3e59o8ge1o",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MWw5N2NqcTVoYjkyNGw5ajNlNTlvOGdlMW8gOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T20:58:57.000Z",
      updated: "2023-02-21T02:06:01.541Z",
      summary: "Reading - What's wrong with the black box?",
      description:
        "Boonin, “AI Book Manuscript” (162 – 182): Embracing the \nBlack Box ",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-22",
      },
      end: {
        date: "2023-02-23",
      },
      iCalUID: "1l97cjq5hb924l9j3e59o8ge1o@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"link":"https://ufl.instructure.com/courses/473642/files/folder/Readings","class":{"name":"PHI3681","color":"#fbbf24","index":0},"completed":true}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-22T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Wed",
        day: "Wed",
        year: "2023",
        time: null,
        clumped_date: "Wed",
        status: "future",
        date: "2023-02-22T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-23T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Thu",
        day: "Thu",
        year: "2023",
        time: null,
        clumped_date: "Thu",
        status: "future",
        date: "2023-02-23T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890309396000"',
      id: "2vrmkjpjkb3ichcp2uh4q2obeg",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MnZybWtqcGprYjNpY2hjcDJ1aDRxMm9iZWdfMjAyMzAxMDlUMTc1MDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:29:37.000Z",
      updated: "2023-02-21T02:05:54.698Z",
      summary: "PHI3681 - In Person",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-22T12:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-22T13:40:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=MO,WE",
      ],
      iCalUID: "2vrmkjpjkb3ichcp2uh4q2obeg@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg0: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg3: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg4: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg1: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg2: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg7: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg8: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg5: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg6: '{"completed":true}',
          default: '{"class":{"name":"PHI3681","color":"#fbbf24","index":0}}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg9: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg11: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg10: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg12: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T17:50:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T18:40:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T17:50:00.000Z",
      },
      recurringEventId: "2vrmkjpjkb3ichcp2uh4q2obeg13",
      convertedStart: "2023-02-22T12:50:00.000-05:00",
      formatedStart: {
        date_text: "Wed, 12:50pm",
        day: "Wed",
        year: "2023",
        time: "12:50pm",
        clumped_date: "Wed",
        status: "future",
        date: "2023-02-22T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-22T13:40:00.000-05:00",
      formatedEnd: {
        date_text: "Wed, 1:40pm",
        day: "Wed",
        year: "2023",
        time: "1:40pm",
        clumped_date: "Wed",
        status: "future",
        date: "2023-02-22T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353117534920000"',
      id: "10q94u0opab3h62c1ka2f1pp7v",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MTBxOTR1MG9wYWIzaDYyYzFrYTJmMXBwN3ZfMjAyMzAxMTFUMTg1NTAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:31:37.000Z",
      updated: "2023-02-16T14:46:07.460Z",
      summary: "COP4600 Discussion - In Person (Quiz)",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-22T13:55:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-22T14:45:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=WE"],
      iCalUID: "10q94u0opab3h62c1ka2f1pp7v@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce10q94u0opab3h62c1ka2f1pp7v1: '{"completed":true}',
          recurrecnce10q94u0opab3h62c1ka2f1pp7v0: '{"completed":true}',
          default: '{"class":{"name":"COP4600","color":"#0284c7","index":2}}',
          recurrecnce10q94u0opab3h62c1ka2f1pp7v5: '{"completed":true}',
          recurrecnce10q94u0opab3h62c1ka2f1pp7v4: '{"completed":true}',
          recurrecnce10q94u0opab3h62c1ka2f1pp7v3: '{"completed":true}',
          recurrecnce10q94u0opab3h62c1ka2f1pp7v2: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-11T18:55:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-11T19:45:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-11T18:55:00.000Z",
      },
      recurringEventId: "10q94u0opab3h62c1ka2f1pp7v6",
      convertedStart: "2023-02-22T13:55:00.000-05:00",
      formatedStart: {
        date_text: "Wed, 1:55pm",
        day: "Wed",
        year: "2023",
        time: "1:55pm",
        clumped_date: "Wed",
        status: "future",
        date: "2023-02-22T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-22T14:45:00.000-05:00",
      formatedEnd: {
        date_text: "Wed, 2:45pm",
        day: "Wed",
        year: "2023",
        time: "2:45pm",
        clumped_date: "Wed",
        status: "future",
        date: "2023-02-22T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890313356000"',
      id: "51382ji4ftblamdhr9cophpei9",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NTEzODJqaTRmdGJsYW1kaHI5Y29waHBlaTlfMjAyMzAxMDlUMjAwMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:26:50.000Z",
      updated: "2023-02-21T02:05:56.678Z",
      summary: "CEN3031 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-22T15:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-22T15:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=FR,MO,WE",
      ],
      iCalUID: "51382ji4ftblamdhr9cophpei9@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce51382ji4ftblamdhr9cophpei94:
            '{"recording":"https://ufl.zoom.us/rec/play/UGrLwAqQsdziO6McV07jwq1Ht1__hkp7eNf_F0X5-GU4HrKUtrwVbIgN8tVuHFgTJhBuOO4hOJeDRYCI.WuxzUOzl_VBdBpmZ?continueMode=true&_x_zm_rtaid=k3I-hYmyTDmNqz8Ldo1pbA.1674155364160.cf86fa7213e95619052ea4971abeca40&_x_zm_rhtaid=952","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei93: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei92:
            '{"recording":"https://ufl.zoom.us/rec/play/5QtRoXfsxrRU8Ncv8zGwQY__dWVy2yedF8KKn2-LFp7k2S707hPSkKcLK_J_yVMo_1iZs9POMDblwKno.0tinHPE1_cLQz0uU?continueMode=true&_x_zm_rtaid=S79Nh3G7R1mk7BmqGE7vsw.1673984189633.a1e7d4ba2f723783084708defbd8146f&_x_zm_rhtaid=999","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei91:
            '{"recording":"https://ufl.zoom.us/rec/play/4hKX0NKHmbK3H7ywQr6b6NLbyINcwsnIOnIEB5Rvr3RntZk9_XhB5hA0VwXXiysEHkj7GdpS7-HMzT0i.ZxNVBPs_SiDbDlS6?continueMode=true&_x_zm_rtaid=WAx5U1RSS1Ga7ha1-8WxMQ.1673643445927.8f150b6acba85fc5da2bb1910cc2c3ef&_x_zm_rhtaid=869","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei98: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei97:
            '{"recording":"https://ufl.zoom.us/rec/play/6SVobBhWKCnbUVKrmneX3NVP45BzaiLJgMCTYLhLsI1fFTcotBIHXw1feBwYJP1fO3H3Uv-cHgjlDw.ZGN1gybNl6L5CvRM?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei96:
            '{"recording":"https://ufl.zoom.us/rec/play/6tFhTbVFl2LWEvHw4cFQZ2z5WkX3-mOqoVZcW2PhIVYfsup3wfOg2XO1kC0brwopIub7KsdBB63TyTP7.cZ3SXpms5VvNGmp-?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei95: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei912: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei913: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei910: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei911: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei90: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei916: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei917: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei914: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei915: '{"completed":true}',
          default: '{"class":{"name":"CEN3031","color":"#0ea5e9","index":1}}',
          recurrecnce51382ji4ftblamdhr9cophpei918: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei99: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T20:00:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T20:50:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 4,
          },
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T20:00:00.000Z",
      },
      recurringEventId: "51382ji4ftblamdhr9cophpei919",
      convertedStart: "2023-02-22T15:00:00.000-05:00",
      formatedStart: {
        date_text: "Wed, 3pm",
        day: "Wed",
        year: "2023",
        time: "3pm",
        clumped_date: "Wed",
        status: "future",
        date: "2023-02-22T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-22T15:50:00.000-05:00",
      formatedEnd: {
        date_text: "Wed, 3:50pm",
        day: "Wed",
        year: "2023",
        time: "3:50pm",
        clumped_date: "Wed",
        status: "future",
        date: "2023-02-22T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3350594384294000"',
      id: "1k372ktiqemc41n8j9gf5pbt00",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MWszNzJrdGlxZW1jNDFuOGo5Z2Y1cGJ0MDBfMjAyMzAxMDlUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-13T22:28:27.000Z",
      updated: "2023-02-21T02:05:56.245Z",
      summary: "CIS4930 - Live",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-22T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-22T18:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230428T035959Z;BYDAY=MO,WE,FR",
      ],
      iCalUID: "1k372ktiqemc41n8j9gf5pbt00@google.com",
      sequence: 4,
      extendedProperties: {
        private: {
          recurrecnce1k372ktiqemc41n8j9gf5pbt0012: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0013: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt000: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0010: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0011: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt002: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt001: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt004: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt003: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0018: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0016: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0017: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0014: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0015: '{"completed":true}',
          default: '{"class":{"name":"CIS4930","color":"#fb923c","index":3}}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt006: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt005: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt008: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt007: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt009: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T23:00:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-28T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
          {
            weekday: 4,
          },
        ],
        dtstart: "2023-01-09T22:10:00.000Z",
      },
      recurringEventId: "1k372ktiqemc41n8j9gf5pbt0019",
      convertedStart: "2023-02-22T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Wed, 5:10pm",
        day: "Wed",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Wed",
        status: "future",
        date: "2023-02-22T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-22T18:00:00.000-05:00",
      formatedEnd: {
        date_text: "Wed, 6pm",
        day: "Wed",
        year: "2023",
        time: "6pm",
        clumped_date: "Wed",
        status: "future",
        date: "2023-02-22T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3351626936186000"',
      id: "3k7e7h62p6ub8afhr09dugdv4k",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=M2s3ZTdoNjJwNnViOGFmaHIwOWR1Z2R2NGtfMjAyMzAxMTJUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:37:23.000Z",
      updated: "2023-02-07T23:44:28.093Z",
      summary: "COP4600 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-23T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-23T19:05:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=TH"],
      iCalUID: "3k7e7h62p6ub8afhr09dugdv4k@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce3k7e7h62p6ub8afhr09dugdv4k3: '{"completed":true}',
          recurrecnce3k7e7h62p6ub8afhr09dugdv4k2:
            '{"recording":"https://ufl.zoom.us/rec/play/OY9q4wDHgCFaCtlXW4L95zAsv-xbsuF0nTzxeUbkSs5lzdnAdIHrtVFL3uCp0GWLqK_rPqTiqqc_SQau.aPZO7ceFsSXmN0Cn?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          default: '{"class":{"name":"COP4600","color":"#0284c7","index":2}}',
          recurrecnce3k7e7h62p6ub8afhr09dugdv4k1: '{"completed":true}',
          recurrecnce3k7e7h62p6ub8afhr09dugdv4k0:
            '{"recording":"https://ufl.zoom.us/rec/play/9MEPb47fU6Ymcm2Stq-e3scNXkON2L0SWTb3nr5rnXsnbH7rJjFR7XLO7NyxOwlWI292U-c4Ui6D7TGy.aN-8rrxSAFG6lXl-?continueMode=true&_x_zm_rtaid=WAx5U1RSS1Ga7ha1-8WxMQ.1673643445927.8f150b6acba85fc5da2bb1910cc2c3ef&_x_zm_rhtaid=869","completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-12T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-13T00:05:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 3,
          },
        ],
        dtstart: "2023-01-12T22:10:00.000Z",
      },
      recurringEventId: "3k7e7h62p6ub8afhr09dugdv4k6",
      convertedStart: "2023-02-23T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Thu, 5:10pm",
        day: "Thu",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Thu",
        status: "future",
        date: "2023-02-23T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-23T19:05:00.000-05:00",
      formatedEnd: {
        date_text: "Thu, 7:05pm",
        day: "Thu",
        year: "2023",
        time: "7:05pm",
        clumped_date: "Thu",
        status: "future",
        date: "2023-02-23T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3347991519729000"',
      id: "o42s6hgm1mcrab5slv7msa4ru8",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=bzQyczZoZ20xbWNyYWI1c2x2N21zYTRydTggOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T22:27:06.000Z",
      updated: "2023-01-17T22:49:19.933Z",
      summary: "Project 1 - System Calls",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-24",
      },
      end: {
        date: "2023-02-25",
      },
      iCalUID: "o42s6hgm1mcrab5slv7msa4ru8@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"class":{"name":"COP4600","color":"#0284c7","index":2},"link":"https://ufl.instructure.com/courses/473242/assignments/5487557"}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-24T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Fri",
        day: "Fri",
        year: "2023",
        time: null,
        clumped_date: "Fri",
        status: "future",
        date: "2023-02-24T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-25T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Sat",
        day: "Sat",
        year: "2023",
        time: null,
        clumped_date: "Sat",
        status: "future",
        date: "2023-02-25T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3347991630767000"',
      id: "o0sk826bom5ip3se6vo8fnlo0c",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=bzBzazgyNmJvbTVpcDNzZTZ2bzhmbmxvMGMgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T22:27:07.000Z",
      updated: "2023-01-17T22:50:15.502Z",
      summary: "Ex5 - Threading",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-24",
      },
      end: {
        date: "2023-02-25",
      },
      iCalUID: "o0sk826bom5ip3se6vo8fnlo0c@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"class":{"name":"COP4600","color":"#0284c7","index":2},"link":"https://ufl.instructure.com/courses/473242/assignments/5487549"}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-24T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Fri",
        day: "Fri",
        year: "2023",
        time: null,
        clumped_date: "Fri",
        status: "future",
        date: "2023-02-24T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-25T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Sat",
        day: "Sat",
        year: "2023",
        time: null,
        clumped_date: "Sat",
        status: "future",
        date: "2023-02-25T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890290990000"',
      id: "6i0pvoul1u681couun0d1kukl4",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NmkwcHZvdWwxdTY4MWNvdXVuMGQxa3VrbDRfMjAyMzAxMTNUMTg1NTAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:33:40.000Z",
      updated: "2023-02-21T02:05:45.495Z",
      summary: "PHI3681 Discussion - In Person",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-24T13:55:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-24T14:45:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=FR"],
      iCalUID: "6i0pvoul1u681couun0d1kukl4@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce6i0pvoul1u681couun0d1kukl40: '{"completed":true}',
          default: '{"class":{"name":"PHI3681","color":"#fbbf24","index":0}}',
          recurrecnce6i0pvoul1u681couun0d1kukl41: '{"completed":true}',
          recurrecnce6i0pvoul1u681couun0d1kukl42: '{"completed":true}',
          recurrecnce6i0pvoul1u681couun0d1kukl43: '{"completed":true}',
          recurrecnce6i0pvoul1u681couun0d1kukl44: '{"completed":true}',
          recurrecnce6i0pvoul1u681couun0d1kukl45: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-13T18:55:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-13T19:45:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 4,
          },
        ],
        dtstart: "2023-01-13T18:55:00.000Z",
      },
      recurringEventId: "6i0pvoul1u681couun0d1kukl46",
      convertedStart: "2023-02-24T13:55:00.000-05:00",
      formatedStart: {
        date_text: "Fri, 1:55pm",
        day: "Fri",
        year: "2023",
        time: "1:55pm",
        clumped_date: "Fri",
        status: "future",
        date: "2023-02-24T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-24T14:45:00.000-05:00",
      formatedEnd: {
        date_text: "Fri, 2:45pm",
        day: "Fri",
        year: "2023",
        time: "2:45pm",
        clumped_date: "Fri",
        status: "future",
        date: "2023-02-24T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890313356000"',
      id: "51382ji4ftblamdhr9cophpei9",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NTEzODJqaTRmdGJsYW1kaHI5Y29waHBlaTlfMjAyMzAxMDlUMjAwMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:26:50.000Z",
      updated: "2023-02-21T02:05:56.678Z",
      summary: "CEN3031 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-24T15:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-24T15:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=FR,MO,WE",
      ],
      iCalUID: "51382ji4ftblamdhr9cophpei9@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce51382ji4ftblamdhr9cophpei94:
            '{"recording":"https://ufl.zoom.us/rec/play/UGrLwAqQsdziO6McV07jwq1Ht1__hkp7eNf_F0X5-GU4HrKUtrwVbIgN8tVuHFgTJhBuOO4hOJeDRYCI.WuxzUOzl_VBdBpmZ?continueMode=true&_x_zm_rtaid=k3I-hYmyTDmNqz8Ldo1pbA.1674155364160.cf86fa7213e95619052ea4971abeca40&_x_zm_rhtaid=952","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei93: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei92:
            '{"recording":"https://ufl.zoom.us/rec/play/5QtRoXfsxrRU8Ncv8zGwQY__dWVy2yedF8KKn2-LFp7k2S707hPSkKcLK_J_yVMo_1iZs9POMDblwKno.0tinHPE1_cLQz0uU?continueMode=true&_x_zm_rtaid=S79Nh3G7R1mk7BmqGE7vsw.1673984189633.a1e7d4ba2f723783084708defbd8146f&_x_zm_rhtaid=999","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei91:
            '{"recording":"https://ufl.zoom.us/rec/play/4hKX0NKHmbK3H7ywQr6b6NLbyINcwsnIOnIEB5Rvr3RntZk9_XhB5hA0VwXXiysEHkj7GdpS7-HMzT0i.ZxNVBPs_SiDbDlS6?continueMode=true&_x_zm_rtaid=WAx5U1RSS1Ga7ha1-8WxMQ.1673643445927.8f150b6acba85fc5da2bb1910cc2c3ef&_x_zm_rhtaid=869","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei98: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei97:
            '{"recording":"https://ufl.zoom.us/rec/play/6SVobBhWKCnbUVKrmneX3NVP45BzaiLJgMCTYLhLsI1fFTcotBIHXw1feBwYJP1fO3H3Uv-cHgjlDw.ZGN1gybNl6L5CvRM?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei96:
            '{"recording":"https://ufl.zoom.us/rec/play/6tFhTbVFl2LWEvHw4cFQZ2z5WkX3-mOqoVZcW2PhIVYfsup3wfOg2XO1kC0brwopIub7KsdBB63TyTP7.cZ3SXpms5VvNGmp-?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei95: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei912: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei913: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei910: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei911: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei90: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei916: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei917: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei914: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei915: '{"completed":true}',
          default: '{"class":{"name":"CEN3031","color":"#0ea5e9","index":1}}',
          recurrecnce51382ji4ftblamdhr9cophpei918: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei99: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T20:00:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T20:50:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 4,
          },
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T20:00:00.000Z",
      },
      recurringEventId: "51382ji4ftblamdhr9cophpei920",
      convertedStart: "2023-02-24T15:00:00.000-05:00",
      formatedStart: {
        date_text: "Fri, 3pm",
        day: "Fri",
        year: "2023",
        time: "3pm",
        clumped_date: "Fri",
        status: "future",
        date: "2023-02-24T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-24T15:50:00.000-05:00",
      formatedEnd: {
        date_text: "Fri, 3:50pm",
        day: "Fri",
        year: "2023",
        time: "3:50pm",
        clumped_date: "Fri",
        status: "future",
        date: "2023-02-24T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3350594384294000"',
      id: "1k372ktiqemc41n8j9gf5pbt00",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MWszNzJrdGlxZW1jNDFuOGo5Z2Y1cGJ0MDBfMjAyMzAxMDlUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-13T22:28:27.000Z",
      updated: "2023-02-21T02:05:56.245Z",
      summary: "CIS4930 - Live",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-24T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-24T18:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230428T035959Z;BYDAY=MO,WE,FR",
      ],
      iCalUID: "1k372ktiqemc41n8j9gf5pbt00@google.com",
      sequence: 4,
      extendedProperties: {
        private: {
          recurrecnce1k372ktiqemc41n8j9gf5pbt0012: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0013: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt000: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0010: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0011: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt002: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt001: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt004: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt003: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0018: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0016: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0017: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0014: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0015: '{"completed":true}',
          default: '{"class":{"name":"CIS4930","color":"#fb923c","index":3}}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt006: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt005: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt008: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt007: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt009: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T23:00:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-28T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
          {
            weekday: 4,
          },
        ],
        dtstart: "2023-01-09T22:10:00.000Z",
      },
      recurringEventId: "1k372ktiqemc41n8j9gf5pbt0020",
      convertedStart: "2023-02-24T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Fri, 5:10pm",
        day: "Fri",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Fri",
        status: "future",
        date: "2023-02-24T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-24T18:00:00.000-05:00",
      formatedEnd: {
        date_text: "Fri, 6pm",
        day: "Fri",
        year: "2023",
        time: "6pm",
        clumped_date: "Fri",
        status: "future",
        date: "2023-02-24T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3347988035845000"',
      id: "74f242t5t519soncmrkdcgaccg",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NzRmMjQydDV0NTE5c29uY21ya2RjZ2FjY2cgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T22:15:56.000Z",
      updated: "2023-01-17T22:20:18.028Z",
      summary: "Assignment: REST API Design",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-26",
      },
      end: {
        date: "2023-02-27",
      },
      iCalUID: "74f242t5t519soncmrkdcgaccg@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default: '{"class":{"name":"CIS4930","color":"#fb923c","index":3}}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-26T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Sun",
        day: "Sun",
        year: "2023",
        time: null,
        clumped_date: "Sun",
        status: "future",
        date: "2023-02-26T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-27T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 27",
        day: "Feb 27",
        year: "2023",
        time: null,
        clumped_date: "Future",
        status: "future",
        date: "2023-02-27T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3347992627067000"',
      id: "1sh1hhe2joear44i9hiv4f58ks",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MXNoMWhoZTJqb2VhcjQ0aTloaXY0ZjU4a3MgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T22:54:31.000Z",
      updated: "2023-01-17T22:58:33.578Z",
      summary: " Reading - Modern OS 4.3-4.4.2",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-27",
      },
      end: {
        date: "2023-02-28",
      },
      iCalUID: "1sh1hhe2joear44i9hiv4f58ks@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"link":"https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Modern%20Operating%20Systems.pdf","class":{"name":"COP4600","color":"#0284c7","index":2}}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-27T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 27",
        day: "Feb 27",
        year: "2023",
        time: null,
        clumped_date: "Future",
        status: "future",
        date: "2023-02-27T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-28T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 28",
        day: "Feb 28",
        year: "2023",
        time: null,
        clumped_date: "Future",
        status: "future",
        date: "2023-02-28T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3348660887954000"',
      id: "komq043epic9k4bujs20heiqr0",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=a29tcTA0M2VwaWM5azRidWpzMjBoZWlxcjAgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T20:13:19.000Z",
      updated: "2023-01-25T19:18:51.363Z",
      summary: "Case Study - Machine Bias in Predicting Policing",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        date: "2023-02-27",
      },
      end: {
        date: "2023-02-28",
      },
      iCalUID: "komq043epic9k4bujs20heiqr0@google.com",
      sequence: 2,
      extendedProperties: {
        private: {
          default:
            '{"class":{"name":"PHI3681","color":"#fbbf24","index":0},"link":"https://ufl.instructure.com/courses/473642/assignments/5526913"}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-27T00:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 27",
        day: "Feb 27",
        year: "2023",
        time: null,
        clumped_date: "Future",
        status: "future",
        date: "2023-02-27T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-28T00:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 28",
        day: "Feb 28",
        year: "2023",
        time: null,
        clumped_date: "Future",
        status: "future",
        date: "2023-02-28T00:00:00.000-05:00",
      },
      type: "day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3347972390260000"',
      id: "2jkv6k2ubqvob336er52ur3a70",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MmprdjZrMnVicXZvYjMzNmVyNTJ1cjNhNzAgOTJscGVwYW9kazBjbWJvM2pvdnRyZXJnYW9AZw",
      created: "2023-01-17T19:55:43.000Z",
      updated: "2023-01-17T20:09:55.237Z",
      summary: "Week 8 Discussion Post",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-27T17:50:00Z",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-27T17:50:00Z",
        timeZone: "America/New_York",
      },
      iCalUID: "2jkv6k2ubqvob336er52ur3a70@google.com",
      sequence: 1,
      extendedProperties: {
        private: {
          default:
            '{"class":{"name":"PHI3681","color":"#fbbf24","index":0},"link":"https://ufl.instructure.com/courses/473642/discussion_topics/3757067"}',
        },
      },
      reminders: {
        useDefault: false,
      },
      eventType: "default",
      convertedStart: "2023-02-27T12:50:00.000-05:00",
      formatedStart: {
        date_text: "Feb 27, 12:50pm",
        day: "Feb 27",
        year: "2023",
        time: "12:50pm",
        clumped_date: "Future",
        status: "future",
        date: "2023-02-27T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-27T12:50:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 27, 12:50pm",
        day: "Feb 27",
        year: "2023",
        time: "12:50pm",
        clumped_date: "Future",
        status: "future",
        date: "2023-02-27T00:00:00.000-05:00",
      },
      type: "task",
    },
    {
      kind: "calendar#event",
      etag: '"3353890309396000"',
      id: "2vrmkjpjkb3ichcp2uh4q2obeg",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MnZybWtqcGprYjNpY2hjcDJ1aDRxMm9iZWdfMjAyMzAxMDlUMTc1MDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:29:37.000Z",
      updated: "2023-02-21T02:05:54.698Z",
      summary: "PHI3681 - In Person",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-27T12:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-27T13:40:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=MO,WE",
      ],
      iCalUID: "2vrmkjpjkb3ichcp2uh4q2obeg@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg0: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg3: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg4: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg1: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg2: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg7: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg8: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg5: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg6: '{"completed":true}',
          default: '{"class":{"name":"PHI3681","color":"#fbbf24","index":0}}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg9: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg11: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg10: '{"completed":true}',
          recurrecnce2vrmkjpjkb3ichcp2uh4q2obeg12: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T17:50:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T18:40:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T17:50:00.000Z",
      },
      recurringEventId: "2vrmkjpjkb3ichcp2uh4q2obeg14",
      convertedStart: "2023-02-27T12:50:00.000-05:00",
      formatedStart: {
        date_text: "Feb 27, 12:50pm",
        day: "Feb 27",
        year: "2023",
        time: "12:50pm",
        clumped_date: "Future",
        status: "future",
        date: "2023-02-27T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-27T13:40:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 27, 1:40pm",
        day: "Feb 27",
        year: "2023",
        time: "1:40pm",
        clumped_date: "Future",
        status: "future",
        date: "2023-02-27T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3353890313356000"',
      id: "51382ji4ftblamdhr9cophpei9",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=NTEzODJqaTRmdGJsYW1kaHI5Y29waHBlaTlfMjAyMzAxMDlUMjAwMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:26:50.000Z",
      updated: "2023-02-21T02:05:56.678Z",
      summary: "CEN3031 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-27T15:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-27T15:50:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=FR,MO,WE",
      ],
      iCalUID: "51382ji4ftblamdhr9cophpei9@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce51382ji4ftblamdhr9cophpei94:
            '{"recording":"https://ufl.zoom.us/rec/play/UGrLwAqQsdziO6McV07jwq1Ht1__hkp7eNf_F0X5-GU4HrKUtrwVbIgN8tVuHFgTJhBuOO4hOJeDRYCI.WuxzUOzl_VBdBpmZ?continueMode=true&_x_zm_rtaid=k3I-hYmyTDmNqz8Ldo1pbA.1674155364160.cf86fa7213e95619052ea4971abeca40&_x_zm_rhtaid=952","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei93: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei92:
            '{"recording":"https://ufl.zoom.us/rec/play/5QtRoXfsxrRU8Ncv8zGwQY__dWVy2yedF8KKn2-LFp7k2S707hPSkKcLK_J_yVMo_1iZs9POMDblwKno.0tinHPE1_cLQz0uU?continueMode=true&_x_zm_rtaid=S79Nh3G7R1mk7BmqGE7vsw.1673984189633.a1e7d4ba2f723783084708defbd8146f&_x_zm_rhtaid=999","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei91:
            '{"recording":"https://ufl.zoom.us/rec/play/4hKX0NKHmbK3H7ywQr6b6NLbyINcwsnIOnIEB5Rvr3RntZk9_XhB5hA0VwXXiysEHkj7GdpS7-HMzT0i.ZxNVBPs_SiDbDlS6?continueMode=true&_x_zm_rtaid=WAx5U1RSS1Ga7ha1-8WxMQ.1673643445927.8f150b6acba85fc5da2bb1910cc2c3ef&_x_zm_rhtaid=869","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei98: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei97:
            '{"recording":"https://ufl.zoom.us/rec/play/6SVobBhWKCnbUVKrmneX3NVP45BzaiLJgMCTYLhLsI1fFTcotBIHXw1feBwYJP1fO3H3Uv-cHgjlDw.ZGN1gybNl6L5CvRM?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei96:
            '{"recording":"https://ufl.zoom.us/rec/play/6tFhTbVFl2LWEvHw4cFQZ2z5WkX3-mOqoVZcW2PhIVYfsup3wfOg2XO1kC0brwopIub7KsdBB63TyTP7.cZ3SXpms5VvNGmp-?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846","completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei95: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei912: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei913: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei910: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei911: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei90: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei916: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei917: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei914: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei915: '{"completed":true}',
          default: '{"class":{"name":"CEN3031","color":"#0ea5e9","index":1}}',
          recurrecnce51382ji4ftblamdhr9cophpei918: '{"completed":true}',
          recurrecnce51382ji4ftblamdhr9cophpei99: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T20:00:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T20:50:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 4,
          },
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
        ],
        dtstart: "2023-01-09T20:00:00.000Z",
      },
      recurringEventId: "51382ji4ftblamdhr9cophpei921",
      convertedStart: "2023-02-27T15:00:00.000-05:00",
      formatedStart: {
        date_text: "Feb 27, 3pm",
        day: "Feb 27",
        year: "2023",
        time: "3pm",
        clumped_date: "Future",
        status: "future",
        date: "2023-02-27T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-27T15:50:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 27, 3:50pm",
        day: "Feb 27",
        year: "2023",
        time: "3:50pm",
        clumped_date: "Future",
        status: "future",
        date: "2023-02-27T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3350594384294000"',
      id: "1k372ktiqemc41n8j9gf5pbt00",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MWszNzJrdGlxZW1jNDFuOGo5Z2Y1cGJ0MDBfMjAyMzAxMDlUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-13T22:28:27.000Z",
      updated: "2023-02-21T02:05:56.245Z",
      summary: "CIS4930 - Live",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-27T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-27T18:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: [
        "RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230428T035959Z;BYDAY=MO,WE,FR",
      ],
      iCalUID: "1k372ktiqemc41n8j9gf5pbt00@google.com",
      sequence: 4,
      extendedProperties: {
        private: {
          recurrecnce1k372ktiqemc41n8j9gf5pbt0012: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0013: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt000: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0010: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0011: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt002: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt001: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt004: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt003: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0018: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0016: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0017: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0014: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt0015: '{"completed":true}',
          default: '{"class":{"name":"CIS4930","color":"#fb923c","index":3}}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt006: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt005: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt008: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt007: '{"completed":true}',
          recurrecnce1k372ktiqemc41n8j9gf5pbt009: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-09T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-09T23:00:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-28T03:59:59.000Z",
        byweekday: [
          {
            weekday: 0,
          },
          {
            weekday: 2,
          },
          {
            weekday: 4,
          },
        ],
        dtstart: "2023-01-09T22:10:00.000Z",
      },
      recurringEventId: "1k372ktiqemc41n8j9gf5pbt0021",
      convertedStart: "2023-02-27T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Feb 27, 5:10pm",
        day: "Feb 27",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Future",
        status: "future",
        date: "2023-02-27T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-27T18:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 27, 6pm",
        day: "Feb 27",
        year: "2023",
        time: "6pm",
        clumped_date: "Future",
        status: "future",
        date: "2023-02-27T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
    {
      kind: "calendar#event",
      etag: '"3350443981418000"',
      id: "0hr8reqnnnlaf7k7fens34c22t",
      status: "confirmed",
      htmlLink:
        "https://www.google.com/calendar/event?eid=MGhyOHJlcW5ubmxhZjdrN2ZlbnMzNGMyMnRfMjAyMzAxMTBUMjIxMDAwWiA5MmxwZXBhb2RrMGNtYm8zam92dHJlcmdhb0Bn",
      created: "2023-01-09T20:36:26.000Z",
      updated: "2023-02-01T03:26:30.709Z",
      summary: "COP4600 - Recording",
      creator: {
        email: "ryancircelli@gmail.com",
      },
      organizer: {
        email: "92lpepaodk0cmbo3jovtrergao@group.calendar.google.com",
        displayName: "7days",
        self: true,
      },
      start: {
        dateTime: "2023-02-28T17:10:00.000-05:00",
        timeZone: "America/New_York",
      },
      end: {
        dateTime: "2023-02-28T18:00:00.000-05:00",
        timeZone: "America/New_York",
      },
      recurrence: ["RRULE:FREQ=WEEKLY;WKST=SU;UNTIL=20230427T035959Z;BYDAY=TU"],
      iCalUID: "0hr8reqnnnlaf7k7fens34c22t@google.com",
      sequence: 0,
      extendedProperties: {
        private: {
          recurrecnce0hr8reqnnnlaf7k7fens34c22t1:
            '{"recording":"https://ufl.zoom.us/rec/play/Z8_aetm9XR0WM2Ep2nRm6Y333qPD5R37GDy8f9Klv9iYD2cKFgikGwtubHtjGvl3zWoJJDPBgj8OkdO-.lzK4dRjnWyUm-5-F?continueMode=true&_x_zm_rtaid=7PMqVe8TQaOoyQXih_jpzg.1674068202273.65156d0093852179edb21098a3f12b44&_x_zm_rhtaid=531","completed":true}',
          recurrecnce0hr8reqnnnlaf7k7fens34c22t2:
            '{"completed":true,"recording":"https://ufl.zoom.us/rec/play/hB9JYcoC2XIV-mt-QjDNC2Cb08o8Mz8V7vveL1WEG3UUwxnyvlC-4MOPNLaqOH1uc1rIviAwGALosrL6.XEjvE9jlmElOSv1I?continueMode=true&_x_zm_rtaid=LQjtRqFIRGaXzMMfnPoB5A.1674839318487.d20d9c0c2471b0857278e23d2a0150c8&_x_zm_rhtaid=846"}',
          default: '{"class":{"name":"COP4600","color":"#0284c7","index":2}}',
          recurrecnce0hr8reqnnnlaf7k7fens34c22t0: '{"completed":true}',
          recurrecnce0hr8reqnnnlaf7k7fens34c22t3: '{"completed":true}',
        },
      },
      reminders: {
        useDefault: true,
      },
      eventType: "default",
      originalStart: {
        dateTime: "2023-01-10T22:10:00Z",
        timeZone: "America/New_York",
      },
      originalEnd: {
        dateTime: "2023-01-10T23:00:00Z",
        timeZone: "America/New_York",
      },
      rrule: {
        freq: 2,
        wkst: {
          weekday: 6,
        },
        until: "2023-04-27T03:59:59.000Z",
        byweekday: [
          {
            weekday: 1,
          },
        ],
        dtstart: "2023-01-10T22:10:00.000Z",
      },
      recurringEventId: "0hr8reqnnnlaf7k7fens34c22t7",
      convertedStart: "2023-02-28T17:10:00.000-05:00",
      formatedStart: {
        date_text: "Feb 28, 5:10pm",
        day: "Feb 28",
        year: "2023",
        time: "5:10pm",
        clumped_date: "Future",
        status: "future",
        date: "2023-02-28T00:00:00.000-05:00",
      },
      convertedEnd: "2023-02-28T18:00:00.000-05:00",
      formatedEnd: {
        date_text: "Feb 28, 6pm",
        day: "Feb 28",
        year: "2023",
        time: "6pm",
        clumped_date: "Future",
        status: "future",
        date: "2023-02-28T00:00:00.000-05:00",
      },
      type: "single_day_event",
    },
  ];
  const calendar = {
    kind: "calendar#calendarListEntry",
    etag: '"1675738597931000"',
    id: "1@group.calendar.google.com",
    summary: "7days",
    timeZone: "UTC",
    colorId: "18",
    backgroundColor: "#b99aff",
    foregroundColor: "#000000",
    selected: true,
    accessRole: "owner",
    defaultReminders: [],
    conferenceProperties: {
      allowedConferenceSolutionTypes: ["hangoutsMeet"],
    },
  };
  const userInfo = {
    id: "0",
    email: "blank@gmail.com",
    verified_email: true,
    name: "Example User",
    given_name: "Example",
    family_name: "User",
    locale: "en",
  };
  const settings = {
    extraProperties: [
      {
        name: "Recording",
        type: "url",
        index: 0,
      },
      {
        name: "Link",
        type: "url",
        index: 1,
      },
      {
        name: "Priority",
        type: "dropdown",
        index: 2,
        options: [
          {
            name: "1",
            color: "transparent",
            index: 0,
          },
          {
            name: "2",
            color: "transparent",
            index: 1,
          },
          {
            name: "3",
            color: "transparent",
            index: 2,
          },
          {
            name: "4",
            color: "transparent",
            index: 3,
          },
          {
            name: "5",
            color: "transparent",
            index: 4,
          },
        ],
      },
      {
        name: "Class",
        type: "dropdown",
        index: 3,
        options: [
          {
            name: "PHI3681",
            color: "#fbbf24",
            index: 0,
          },
          {
            name: "CEN3031",
            color: "#0ea5e9",
            index: 1,
          },
          {
            name: "COP4600",
            color: "#0284c7",
            index: 2,
          },
          {
            name: "CIS4930",
            color: "#fb923c",
            index: 3,
          },
          {
            name: "SigEp",
            color: "#8b5cf6",
            index: 4,
          },
          {
            name: "Other",
            color: "#737373",
            index: 5,
          },
        ],
      },
    ],
  };
  const page = "upcoming";

  return (
    <div className={"flex h-screen flex-col bg-purple-800 "}>
      <div className="flex h-full w-full flex-col">
        <div className="m-4 grid h-full grid-rows-[auto_1fr] gap-4">
          <div className="row-span-1 h-12">
            <Header userInfo={userInfo} setCredential={undefined} />
          </div>
          <div className="relative row-span-1 flex flex-row">
            <div className="flex">
              <CalendarMenu page={page} setPage={undefined} />
            </div>
            <div className="grid flex-1 grid-cols-1 grid-rows-1 overflow-hidden  rounded-3xl bg-white p-4">
              <EventList
                events={events}
                settings={settings}
                getEvents={undefined}
                getSavedSettings={undefined}
                className={
                  "relative col-start-1 row-start-1 h-full w-full transition-opacity duration-150" +
                  (page === "upcoming"
                    ? " opacity-100 "
                    : " pointer-events-none opacity-0 ")
                }
                calendar={calendar}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
