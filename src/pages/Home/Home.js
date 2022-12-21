import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { listEvents, getCalendarBySummary, createCalendar } from '../../gapi/calendar';
import { createEvent } from '../../gapi/events';
import { getSettings } from '../../gapi/settings';
import { getUserInfo } from '../../gapi/user';
import { Header } from './Header/Header';
import { EventList } from './List/EventList';

import { LoadingOutlined } from '@ant-design/icons';
import { HomeMenu } from './HomeMenu/HomeMenu';
import { Settings } from './Settings/Settings';
import { Spin } from 'antd';
import { RxPlus } from 'react-icons/rx';

export const Home = ({setCredential}) => {

  const [events, setEvents] = useState(null);
  const [calendar, setCalendar] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [settings, setSettings] = useState(null);

  const [page, setPage] = useState('upcoming');

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

  const [fadeLogin, setFadeLogin] = useState(true)

  useEffect(()=>{
    setFadeLogin(false)
  },[])

  if (events === null || userInfo === null || settings === null)
    return (
      <div className='flex h-screen flex-col items-center justify-center bg-purple-800'>
        <div 
          className='flex justify-center text-white text-8xl m-8' 
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '100'
          }}
        >
          7days 
        </div>
        <div className='w-48 h-16 overflow-visible grid'>
          <div className='pointer-events-none flex items-center justify-center w-full col-start-1 row-start-1'>
            <Spin 
              indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} 
              className=' text-white'
            />
          </div>
        </div>
      </div>
    )

  return (
    <div className='flex h-screen flex-col bg-purple-800'>
      <div className='flex flex-col h-full w-full'>
        <div
          className='grid grid-rows-[auto_1fr] h-full gap-4 m-4'
        >
          <div className='row-span-1 h-12'>
            <Header userInfo={userInfo} setCredential={setCredential}/>
          </div>
          <div className='relative row-span-1 flex flex-row'>
            <div className='flex'>
              <HomeMenu page={page} setPage={setPage}/>
            </div>
            <div className='flex-1 p-4 bg-white rounded-3xl overflow-hidden grid grid-cols-1 grid-rows-1'>
              <EventList
                events={events} 
                settings={settings} 
                getEvents={getEvents}
                getSavedSettings={getSavedSettings}
                className={'relative w-full h-full transition-opacity duration-150 row-start-1 col-start-1' + 
                  (page === 'upcoming' ? " opacity-100 " : " opacity-0 pointer-events-none ")
                }
              />
              <div className={'w-full h-full transition-opacity duration-150 row-start-1 col-start-1' + 
                (page === 'calendar' ? " opacity-100 " : " opacity-0 pointer-events-none ")
              }/>
              <Settings
                settings={settings} 
                className={'w-full h-full transition-opacity duration-150 row-start-1 col-start-1' + 
                  (page === 'settings' ? " opacity-100 " : " opacity-0 pointer-events-none ")
                }
              />
            </div>
          </div>
        </div>
      </div>
      <button 
        className='absolute right-8 bottom-8 w-14 h-14 bg-white hover:brightness-95 rounded-full z-[1000] flex items-center justify-center'
        style={{
          boxShadow: '0 0 32px rgb(0,0,0,0.1)'
        }}
        onClick={async ()=>{
          await createEvent(calendar.id)
          getEvents()
        }}
      >
        <RxPlus className="align-bottom w-[50%] h-[50%]"/>
      </button>
    </div>
  );
}
