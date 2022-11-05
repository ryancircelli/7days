import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Center, Box, Heading, View, Button, Fab, Icon, Image } from "native-base";
import { AntDesign } from '@expo/vector-icons'; 

import { listEvents, getCalendarBySummary, createCalendar } from './hooks/calendars';
import { getUserInfo } from './hooks/user';
import { getHeader } from './libs/axios';
import { List } from './pages/Main/List';
import { createEvent } from './hooks/events';
import { getSettings, resetSettings } from './hooks/settings';

export const Main = ({logout}) => {
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
    return <View/>

  return (
    <Center style={styles.container}>
      <Center 
        style={styles.grid} 
        bg='indigo.600'
        rounded="3xl"
        px="4" py="4"
      >
        <Box 
          px="4" py="4"
          width="100%"
          height="100%"
          bg="white" 
          rounded="2xl"
          shadow="6"
          style={{gridArea: '2 / 1 / 4 / 2'}}
        >
          <Heading size="md">
            7days
          </Heading>
        </Box>
        <List events={events} settings={settings} getEvents={getEvents}/>
        <Box
          width="100%"
          height="100%"
          rounded="2xl"
          bg="white"
          px="4"
          shadow="6"
          style={{
            gridArea: '1 / 1 / 2 / 3',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
          }}
        >
          <Box
            style={{
              gridArea: '1 / 4 / 1 / 7',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              columnGap: "10px",
            }}
          >
            <Button onPress={resetSettings} size="xs">
              Reset Settings
            </Button>
            <Heading size="sm">
              {userInfo.data.name}
            </Heading>
            <Image 
              source={{
                uri: userInfo.data.picture,
                headers: getHeader()
              }}
              borderRadius={100}
              alt="User Profile Image" 
              size="xs" 
            />
            <Button onPress={logout} size="xs">
              Log Out
            </Button>
          </Box>
        </Box>
      </Center>
      <Fab 
        renderInPortal={false} 
        shadow={2} 
        size="sm" 
        icon={
          <Icon 
            color="white" 
            as={AntDesign} 
            name="plus"
            size="sm" 
          />
        }
        style={{margin: 20}}
        onPress={()=>createEvent(calendar.id)}
      />
    </Center>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100vh",
    width: "100%",
    padding: 2,
    boxSizing: "border-box",
  },
  grid: {
    flex: 1,
    width: "100%",
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: '1fr 5fr',
    gridTemplateRows: '1fr 3fr 5fr'
  }
});