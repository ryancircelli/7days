import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import Cookies from 'js-cookie'
import React, { useState } from 'react';
import { useEffect } from 'react';
import gLogo from '../../assets/g-logo.png';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export const Login = ({setCredential}) => {
  const getRefresh = async (refresh_token) => {
    try {
      console.log(refresh_token)
      const tokens = await axios.post(
        'https://www.googleapis.com/oauth2/v4/token', {
            refresh_token: refresh_token,
            client_id: '820232599217-dpo4vm7it9vctfafu01f29huff8n4afa.apps.googleusercontent.com',
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
            grant_type: 'refresh_token',
            redirect_uri: process.env.REACT_APP_REDIRECT_URI
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

      console.log(tokens);
      setCredential(tokens.data.access_token)
      return tokens;
    } catch (error) {
      console.log('Failed Auth Refresh')
    }
  }

  const getCredentials = async (refresh_token) => {
    console.log(refresh_token)
    let tokens = await axios.post(
      'https://www.googleapis.com/oauth2/v4/token', {
          code: refresh_token,
          client_id: '820232599217-dpo4vm7it9vctfafu01f29huff8n4afa.apps.googleusercontent.com',
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          grant_type: 'authorization_code',
          redirect_uri: process.env.REACT_APP_REDIRECT_URI
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    console.log(tokens);
    setTimeout(async () => {
      setCredential(tokens.data.access_token)
    }, 250);
    return tokens;
  }

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      setShowLogin(false)
      console.log(codeResponse);
      var tokens = await getCredentials(codeResponse.code)
      Cookies.set('refresh_token', tokens.data.refresh_token) 
    },
    onError: errorResponse => console.log(errorResponse),
  });

  const [showLogin, setShowLogin] = useState(false)

  useEffect(()=> {
    setTimeout(() => {
      setShowLogin(true)
    }, 250);
    let refresh_token = Cookies.get('refresh_token')
    if (refresh_token !== 'undefined')
      getRefresh(decodeURIComponent(refresh_token))
  }, [])

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
        <div 
          className={"pointer-events-none flex items-center justify-center w-full col-start-1 row-start-1 transition-opacity duration-150 delay-100" + 
            (!showLogin ? ' opacity-100 ' : ' opacity-0 ')
          }
        >
          <Spin 
            indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} 
            className=' text-white'
          />
        </div>
        <button 
          onClick={() => googleLogin()} 
          className={"col-start-1 row-start-1 text-xl font-normal flex flex-row items-center justify-center bg-white rounded-lg w-48 h-16 transition-opacity duration-150 " + 
            (showLogin ? ' opacity-100 ' : ' opacity-0 ')
          }
          style={{
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          Sign in with
          <img 
            src={gLogo}
            alt="Google Signin"
            className='m-2 mr-0 h-8'
          />
        </button>
      </div>
    </div>
  )
}