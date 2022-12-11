import React from 'react';
import { googleLogout } from '@react-oauth/google';
import { resetSettings } from 'gapi/settings';

import { Dropdown } from 'antd';

export const Header = ({userInfo}) => {

  return (  
    <div className="flex flex-row h-full w-full relative z-50">
      <div 
        className='flex justify-center text-white text-6xl -mt-2' 
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: '100'
        }}
      >
        7days
      </div>
      <div 
        className="absolute h-full flex flex-row right-4"
      >
        <Dropdown
          className='h-full'
          menu={{items}}
        >
          <div className="flex flex-row items-end">
            <div className='text-xl h-full px-4 flex items-end justify-center text-white font-extralight'>
              {userInfo.data.name}
            </div>
            <img 
              src={userInfo ? userInfo.data.picture : ""}
              alt="User Profile"
              className='h-[80%] rounded-full'
            />
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

const items = [
  {
    key: '1',
    label: (
      <button 
        onClick={() => resetSettings()}
      >
        Reset Settings
      </button>
    ),
  },
  {
    key: '2',
    label: (
      <button 
        onClick={() => googleLogout()}
      >
        Logout
      </button>
    ),
  },
];