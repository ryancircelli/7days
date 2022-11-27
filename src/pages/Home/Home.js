import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { listEvents, getCalendarBySummary, createCalendar } from '../../gapi/calendar';
import { createEvent } from '../../gapi/events';
import { getSettings, resetSettings } from '../../gapi/settings';
import { getUserInfo } from '../../gapi/user';
import { Header } from './Header/Header';
import { List } from './List/List';

export const Home = () => {

  const [events, setEvents] = useState(null);
  const [calendar, setCalendar] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [settings, setSettings] = useState(null);

  const getEvents = async () => {
    setEvents(await listEvents(calendar.id))
  };

  useEffect(() => {
    if (calendar != null)
      getEvents()
  }, [calendar]);

  const get7days = useCallback(async () => {
    let cal_7days = await getCalendarBySummary('7days');
    if (cal_7days === false)
      cal_7days = await createCalendar('7days')
    setCalendar(cal_7days)
  }, [events]);

  useEffect(() => {
    if (events == null)
      get7days()
  }, [events]);

  const getUser = useCallback(async () => {
    let userInfo = await getUserInfo();
    setUserInfo(userInfo)
  }, [userInfo]);

  useEffect(() => {
    if (!userInfo)
      getUser()
  }, [userInfo]);
  
  const getSavedSettings = useCallback(async () => {
    let settings = await getSettings();
    setSettings(settings)
  }, [settings]);

  useEffect(() => {
    if (!settings)
      getSavedSettings()
  }, [settings]);

  if (events === null || userInfo === null || settings === null)
    return <div/>

  return (
    <div className='flex h-screen bg-red-900 flex-col'>
      <Header/>
      <List 
        events={events} 
        settings={settings} 
        getEvents={getEvents}
      />
    </div>
  );
}
