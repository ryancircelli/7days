import React from "react";
import { useEffect, useState, useCallback } from "react";
import {
  listEvents,
  getCalendarBySummary,
  createCalendar,
} from "../../gapi/calendar";
import { getSettings } from "../../gapi/settings";
import { getUserInfo } from "../../gapi/user";
import { Header } from "./Header/Header";
import { EventList } from "./List/EventList";

import { LoadingOutlined } from "@ant-design/icons";
import { CalendarMenu } from "./CalendarMenu/CalendarMenu";
import { Settings } from "./Settings/Settings";
import { Spin } from "antd";
import { googleLogout } from "@react-oauth/google";
import Cookies from "js-cookie";

export const Calendar = ({ setCredential, className }) => {
  const [events, setEvents] = useState(null);
  const [calendar, setCalendar] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [settings, setSettings] = useState(null);

  const [page, setPage] = useState("upcoming");

  const getEvents = useCallback(async () => {
    setEvents(await listEvents(calendar.id));
  }, [calendar]);

  useEffect(() => {
    if (calendar !== null) getEvents();
  }, [calendar, getEvents]);

  const get7days = useCallback(async () => {
    let cal_7days = await getCalendarBySummary("7days");
    if (cal_7days === false) cal_7days = await createCalendar("7days");
    setCalendar(cal_7days);
  }, []);

  useEffect(() => {
    if (calendar === null) get7days();
  }, [calendar, get7days]);

  const getUser = useCallback(async () => {
    let userInfo = await getUserInfo();
    setUserInfo(userInfo.data);
  }, []);

  useEffect(() => {
    console.log("Profile:", userInfo);
    if (!userInfo) getUser();
  }, [getUser, userInfo]);

  const getSavedSettings = useCallback(async () => {
    let settings = await getSettings();
    setSettings(settings);
  }, []);

  useEffect(() => {
    if (!settings) getSavedSettings();
  }, [getSavedSettings, settings]);

  useEffect(() => {
    setTimeout(() => {
      setShowLogout(true);
    }, 2000);
  }, []);

  const [showLogout, setShowLogout] = useState(false);

  if (events === null || userInfo === null || settings === null)
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-purple-800">
        <div
          className="m-8 flex justify-center text-8xl text-white"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "100",
          }}
        >
          7days
        </div>
        <div className="grid h-16 w-48 overflow-visible">
          <div className="pointer-events-none col-start-1 row-start-1 flex w-full items-center justify-center">
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
              className=" text-white"
            />
          </div>
          <div className="pointer-events-none col-start-1 row-start-1 flex h-16 w-48 flex-row items-center justify-center rounded-lg bg-white text-xl font-normal opacity-0 transition-opacity duration-150" />
          <div className="col-start-1 row-start-2 flex items-center justify-center pt-4">
            <button
              onClick={async () => {
                await googleLogout();
                Cookies.set("refresh_token", undefined);
                setCredential(undefined);
                console.log("Logging Out");
              }}
              className={
                "flex h-16 w-32 flex-row items-center justify-center rounded-lg bg-white text-xl font-normal transition-opacity duration-150 " +
                (showLogout ? " opacity-100 " : " opacity-0 ")
              }
              style={{
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Logout
            </button>
          </div>
        </div>
        <a
          className="absolute bottom-2 right-4 hover:underline"
          href="/privacy"
        >
          Privacy Policy
        </a>
        <a
          className="absolute bottom-2 left-4 hover:underline"
          href="https://github.com/rinorocks8/7days"
        >
          Source Code
        </a>
      </div>
    );

  console.log(calendar);
  console.log(userInfo);
  console.log(settings);

  return (
    <div className={"flex h-screen flex-col bg-purple-800 " + className}>
      <div className="flex h-full w-full flex-col">
        <div className="m-4 grid h-full grid-rows-[auto_1fr] gap-4">
          <div className="row-span-1 h-12">
            <Header userInfo={userInfo} setCredential={setCredential} />
          </div>
          <div className="relative row-span-1 flex flex-row">
            <div className="flex">
              <CalendarMenu page={page} setPage={setPage} />
            </div>
            <div className="grid flex-1 grid-cols-1 grid-rows-1 overflow-hidden  rounded-3xl bg-white p-4 p-2">
              <EventList
                events={events}
                settings={settings}
                getEvents={getEvents}
                getSavedSettings={getSavedSettings}
                className={
                  "relative col-start-1 row-start-1 h-full w-full transition-opacity duration-150" +
                  (page === "upcoming"
                    ? " opacity-100 "
                    : " pointer-events-none opacity-0 ")
                }
                calendar={calendar}
              />
              <div
                className={
                  "col-start-1 row-start-1 h-full w-full transition-opacity duration-150" +
                  (page === "calendar"
                    ? " opacity-100 "
                    : " pointer-events-none opacity-0 ")
                }
              />
              <Settings
                settings={settings}
                className={
                  "col-start-1 row-start-1 h-full w-full transition-opacity duration-150" +
                  (page === "settings"
                    ? " opacity-100 "
                    : " pointer-events-none opacity-0 ")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
