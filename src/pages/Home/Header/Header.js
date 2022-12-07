import React from 'react';
import { googleLogout } from '@react-oauth/google';
import { resetSettings } from 'gapi/settings';

export const Header = ({userInfo}) => {

  return (  
    <div className="flex flex-row h-14 w-full bg-gray-700 relative z-50">
      <button 
        className="bg-white rounded-md p-2 m-2"
        onClick={() => googleLogout()}
      >
        Logout
      </button>
      <button 
        className="bg-white rounded-md p-2 m-2"
        onClick={() => resetSettings()}
      >
        Reset Settings
      </button>

      <div 
        className="absolute h-full flex flex-row right-4 py-2"
      >
        <div className='h-full px-4 flex items-center justify-center text-white text-lg'>
          {userInfo.data.name}
        </div>
        <img 
          src={userInfo ? userInfo.data.picture : ""}
          alt="User Profile"
          className=' rounded-full'
        />
      </div>
    </div>
  );
}