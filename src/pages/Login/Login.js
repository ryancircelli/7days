import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import Cookies from 'js-cookie'
import React from 'react';
import { useEffect } from 'react';

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
      googleLogin()
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
    setCredential(tokens.data.access_token)
    return tokens;
  }

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      var tokens = await getCredentials(codeResponse.code)
      Cookies.set('refresh_token', tokens.data.refresh_token) 
    },
    onError: errorResponse => console.log(errorResponse),
  });

  useEffect(()=> {
    let refresh_token = (Cookies.get('refresh_token'))
    if (refresh_token !== undefined)
      getRefresh(decodeURIComponent(refresh_token))
  })

  return (
    <div>
      <button onClick={() => googleLogin()} style={{height: '100px', width: '100px'}}/>
    </div>
  )
}