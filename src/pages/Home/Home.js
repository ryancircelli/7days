import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { listEvents, getCalendarBySummary, createCalendar } from '../../gapi/calendar';
import { createEvent } from '../../gapi/events';
import { getSettings, resetSettings } from '../../gapi/settings';
import { getUserInfo } from '../../gapi/user';
import { Header } from './Header/Header';
import { EventList } from './List/EventList';

import { FiPlus } from "react-icons/fi";
import { Row } from './List/Row/Row';
import { HomeMenu } from './HomeMenu/HomeMenu';

export const Home = () => {

  const [events, setEvents] = useState(null);
  const [calendar, setCalendar] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [settings, setSettings] = useState(null);

  const getEvents = useCallback(async () => {
    setEvents(await listEvents(calendar.id))
  }, [calendar]);

  useEffect(() => {
    if (calendar != null)
      getEvents()
  }, [calendar, getEvents]);

  const get7days = useCallback(async () => {
    let cal_7days = await getCalendarBySummary('7days');
    if (cal_7days === false)
      cal_7days = await createCalendar('7days')
    setCalendar(cal_7days)
  }, []);

  useEffect(() => {
    if (events == null)
      get7days()
  }, [events, get7days]);

  const getUser = useCallback(async () => {
    let userInfo = await getUserInfo();
    setUserInfo(userInfo)
  }, []);

  useEffect(() => {
    console.log(userInfo)
    if (!userInfo)
      getUser()
  }, [getUser, userInfo]);
  
  const getSavedSettings = useCallback(async () => {
    let settings = await getSettings();
    setSettings(settings)
  }, []);

  useEffect(() => {
    if (!settings)
      getSavedSettings()
  }, [getSavedSettings, settings]);

  if (events === null || userInfo === null || settings === null)
    return <div/>


  // TODO renaming current event overrides recurrence

  return (
    <div className='flex h-screen flex-col bg-purple-800'>
      <div className='flex flex-col h-full w-full'>
          <div
            className='grid grid-rows-[auto_1fr] h-full gap-4 m-4'
          >
            <div className='row-span-1 h-12'>
              <Header userInfo={userInfo}/>
            </div>
            <div className='row-span-1 flex flex-row'>
              <div className='flex'>
                <HomeMenu/>
              </div>
              <div className='flex-1 p-4 bg-white rounded-3xl overflow-hidden'>
                <EventList
                  events={events} 
                  settings={settings} 
                  getEvents={getEvents}
                  className='w-full h-full'
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
