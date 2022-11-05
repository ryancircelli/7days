import React from 'react';
import { Box, Heading, Text, IconButton, Menu, Input } from "native-base";
import { FontAwesome } from '@expo/vector-icons';

import { convertDate } from '../../libs/date'
import { updateEventPrivate } from '../../hooks/events'
import { Url } from './Properties/Url';

export const Item = ({item, settings, getEvents}) => {
  const extraProps = settings.extraProperties;

  return (
    <Box
      style={{
        width: '100%',
        paddingHorizontal: 4,
        paddingBottom: 6
      }}
    >
      <Box
        style={{
          flex: 1,
          padding: 8,
          display: 'flex',
          flexDirection: 'row'
        }}
        bg="indigo.300" 
        rounded="2xl"
        shadow={3}
      >
        <IconButton
          padding={1}
          icon={
            <FontAwesome
              name="check"
              color={item.extendedProperties?.private?.closed == "closed" ? "tertiary.600" : "white"}
              size={16}
            />
          } 
          onPress={async () => {
            await updateEventPrivate(item, {
              ...item.extendedProperties?.private,
              closed: item.extendedProperties?.private?.closed == "closed" ? "open" : "closed"
            })
            getEvents();
          }}
        />
        <Heading 
          size="xs" 
          style={{ 
            flex: extraProps.length,
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {item.summary}
        </Heading>
        {
          extraProps.map((prop) => {
            if (prop.type == "url") {
              return (
                <Box
                  style={{ 
                    flex: 1,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  key={prop.name}
                >
                  <Url
                    item={item} 
                    prop={prop} 
                    getEvents={getEvents} 
                    key={prop.name}
                  />
                </Box>
              )
            } else if (prop.type == "dropdown") {
              let curDropdown = item.extendedProperties?.private[prop.name.toLowerCase()]
              return (
                <Box
                  style={{ 
                    flex: 1,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  key={prop.name}
                >
                  <Menu 
                    trigger={triggerProps =>
                      <Text
                        size="xs"
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        accessibilityLabel={prop.name + "Dropdown Options"} 
                        {...triggerProps}
                      >
                        {curDropdown}
                      </Text>
                    }
                  >
                    {
                      prop.options.map((option) => 
                        <Menu.Item 
                          key={option}
                          onPress={async () => {
                            if (option !== curDropdown) {
                              let newDropdown = {...item.extendedProperties?.private}
                              newDropdown[prop.name.toLowerCase()] = option;
                              await updateEventPrivate(item, newDropdown)
                              getEvents();
                            }
                          }}
                        >
                          {option}
                        </Menu.Item>
                      )
                    }
                  </Menu>
                </Box>
              )
            } else {
              return (
                <Box
                  style={{ 
                    flex: 1,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'purple'
                  }}
                  key={prop.name}
                />
              )
            }
          })
        }
        <Text
          size="xs" 
          style={{ 
            flex: 1,
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {convertDate(item.end, true, false).day}
        </Text>
      </Box>
    </Box>
  )
}

export const Header = ({section: { title }, settings}) => {
  const extraProps = settings.extraProperties;
  return (
    <Box
      style={{
        width: '100%',
        height: '30px',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white'
      }}
    >
      <Heading 
        size="s" 
        style={{ 
          flex: extraProps.length,
          height: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {convertDate(title, false, false).day}
      </Heading>
      <Box
        style={{
          flex: extraProps.length + 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          paddingLeft: 42,
          paddingRight: 12
        }}
      >
        {
          extraProps.map((prop) =>
            <Heading
              size="xs" 
              style={{ 
                flex: 1,
                height: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
              key={prop.name}
            >
              {prop.name}
            </Heading>
          )
        }
        <Heading
          size="xs" 
          style={{ 
            flex: 1,
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          Due Date
        </Heading>
      </Box>
    </Box>
  )
}
