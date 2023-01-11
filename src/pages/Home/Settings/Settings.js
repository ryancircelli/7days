import { resetSettings } from 'gapi/settings';
import React, { useState, useRef, useEffect } from 'react';
import { Header } from '../List/Header/Header';
import { Completed } from '../List/Row/Completed/Completed';
import { Date } from '../List/Row/Date/Date';
import { PropDropdown } from '../List/Row/PropDropdown/PropDropdown';
import { Text } from '../List/Row/Text/Text';
import { Url } from '../List/Row/Url/Url';

export const Settings = ({settings, className}) => {
  const extraProps = settings.extraProperties;
  return (
    <div className={'w-full flex flex-1 flex-col overflow-y-hidden p-2 ' + className}>
      <div className='text-3xl'>
        Settings
      </div>
      <div>
        <button 
          onClick={()=>{
            resetSettings()
          }}
          className="p-2 m-4 mb-0 rounded-lg bg-white brightness-[.975] hover:brightness-95"
        >
          Reset Settings
        </button>
        <Header data={"Name"} extraProps={extraProps} viewportRef={undefined} condensed={undefined}/>
        <div className="grid group/row">
          <div className='z-1 group-hover/row:border pointer-events-none ml-4 mr-6' style={{gridArea: '1/1'}}/>
          <div className="flex flex-row h-12 ml-4 mr-6" style={{gridArea: '1/1'}}>
            <div className="flex w-10 justify-center items-center">
              <Completed
                data={undefined} 
                getEvents={undefined}
                disabled
              />
            </div>
            <div
              style={{
                flex: extraProps.length
              }}
              className="flex items-center"
            >
              <Text
                data={undefined}
                getEvents={undefined}
                disabled
              />
            </div>
            {extraProps.map((prop, index) => 
              <div
                key={prop.name}
                className="flex-1"
              >
              {
                (prop.type === "url") ?
                  <Url
                    data={undefined} 
                    prop={prop}
                    getEvents={undefined}
                    key={prop.name}
                    changeDefault={false}
                    disabled
                  />
                : (prop.type === "dropdown") ?
                  <PropDropdown
                    data={undefined}
                    settings={settings}
                    prop={prop}
                    getEvents={undefined}
                    key={prop.name}
                    changeDefault={false}
                    disabled getSavedSettings={undefined}                 
                  />
                : 
                  prop.name.toLowerCase()
              }
              </div>
            )}
            <div
              className="flex-[2] flex items-center"
            >
              <Date
                data={undefined} 
                getEvents={undefined}
                setScrollable={undefined}
                disabled
              />
            </div>
            <div
              className="flex w-16 justify-center items-center invisible group-hover/row:visible"
            />
          </div>
        </div>
      </div>
    </div>
  );
}