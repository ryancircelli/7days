import React from 'react';
import { googleLogout } from '@react-oauth/google';
import { resetSettings } from 'gapi/settings';

export const Header = () => {
  return (  
    <div className="h-14 w-full bg-gray-700">
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
    </div>
  );
}