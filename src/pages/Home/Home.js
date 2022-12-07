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

  return (
    <div className='flex h-screen flex-col'>
      <Header userInfo={userInfo}/>
      <EventList
        events={events} 
        settings={settings} 
        getEvents={getEvents}
        className="px-4"
      />
      <button 
        className='absolute right-8 bottom-8 w-16 h-16 bg-white hover:bg-[rgb(0,0,0,0.06)] rounded-full z-[1000] flex items-center justify-center'
        style={{
          boxShadow: '0 0 32px rgb(0,0,0,0.16)'
        }}
        onClick={async ()=>{
          await createEvent(calendar.id)
          getEvents()
        }}
      >
        <FiPlus className="align-bottom w-8 h-8"/>
      </button>
    </div>
  );
}
