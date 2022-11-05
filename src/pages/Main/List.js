import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { SectionList, StyleSheet, Animated, View } from 'react-native';
import { Box, Heading, Text, Button, Center } from "native-base";
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'

import { Item, Header } from "./Item";

export const List = ({events, settings, getEvents}) => {
  useEffect(() => {
    console.log("Reloading List")
  }, [events])
  const list = useRef();

  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);
  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight)
        / completeScrollBarHeight
      : visibleScrollBarHeight;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight,
  ).interpolate({
    extrapolate: 'clamp',
    inputRange: [0, difference],
    outputRange: [0, difference],
  });

  const onContentSizeChange = (_, contentHeight) => 
    setCompleteScrollBarHeight(contentHeight);

  const onLayout = ({
    nativeEvent: {
      layout: { height },
    },
  }) => {
    setVisibleScrollBarHeight(height - 16);
  };

  let events_formatted = []

  if (events.length > 1) {
    let end_i = new Date(events[0].end).setHours(0,0,0,0);
    events_formatted.push(
      {
        title: end_i,
        data: [
          events[0]
        ]
      }
    )
  }

  let start_section = null;

  for (let i = 1; i < events.length; i++) {
    let end_i = new Date(events[i].end).setHours(0,0,0,0)
    let end_i1 = new Date(events[i-1].end).setHours(0,0,0,0)
    if (end_i == end_i1) {
      events_formatted[events_formatted.length - 1].data.push(events[i])
    } else {
      events_formatted.push(
        {
          title: end_i,
          data: [
            events[i]
          ]
        }
      )
    }
    if (start_section == null && end_i >= end_i1)
      start_section = events_formatted.length - 1;
  }
  
  start_section = start_section == null ? 0 : start_section;

  const scrollToToday = () => {
    if (events_formatted.length > 0)
      list.current.scrollToLocation({
        sectionIndex: start_section,
        itemIndex: 0
      })
  }

  //const Seperator = () => <View style={{height:0}}/>
  
  const ItemLayout = sectionListGetItemLayout({
    getItemHeight: () => 40,
    getSeparatorHeight: () => 0,
    getSectionHeaderHeight: () => 30,
    getSectionFooterHeight: () => 0,
  })

  return (
    <View 
      style={{
        gridArea: '2 / 2 / 4 / 2',
        width:"100%",
        height:"100%",
        rowGap: "20px"
      }}
    >
      {/* <Box
        width="100%"
        height="50px"
        rounded="2xl"
        bg="white"
        px="4"
        shadow="6"
        gap="10px"
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <Button onPress={scrollToToday} size="xs">
          Today
        </Button>
        {
          settings.extraProperties.map((property) => (
            <Button size="xs" key={property.name}>
              {property.name}
            </Button>
          ))
        }
      </Box> */}
      <Box
        flex="1"
        rounded="2xl"
        bg="white"
        px="4"
        shadow="6"   
      >
        <View style={styles.scrollContainer}>
          <SectionList 
            width="100%"
            height="100%"
            sections={events_formatted}
            keyExtractor={item => item.id}
            ref={list}
            renderSectionHeader={({section})=><Header section={section} settings={settings}/>}
            renderItem={({item})=><Item item={item} settings={settings} getEvents={getEvents}/>}
            getItemLayout={ItemLayout}
            //ItemSeparatorComponent={Seperator}
            stickySectionHeadersEnabled

            contentContainerStyle={{ paddingRight: 14}}
            onContentSizeChange={onContentSizeChange}
            onLayout={onLayout}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollIndicator } } }],
              { useNativeDriver: false },
            )}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            style={styles.scrollViewContainer}
          />
          <View style={styles.customScrollBarBackground}>
            <Animated.View
              style={[
                styles.customScrollBar,
                {
                  height: scrollIndicatorSize,
                  transform: [{ translateY: scrollIndicatorPosition }],
                },
              ]}
            />
          </View>
        </View>
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    width: '100%',
    flex: 1
  },
  scrollViewContainer: {
    width: '100%',
  },
  customScrollBar: {
    backgroundColor: '#ccc',
    borderRadius: 6,
    width: 6,
  },
  customScrollBarBackground: {
    backgroundColor: '#232323',
    borderRadius: 6,
    height: "calc(100% - 16px)",
    width: 6,
    marginVertical: 8,
  },
});