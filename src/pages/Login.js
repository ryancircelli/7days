import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { CLIENT_SECRET, LOGIN_VERBOSE } from "@env"

import { useAutoDiscovery, exchangeCodeAsync, refreshAsync, revokeAsync } from "expo-auth-session";
import { useAuthRequest } from 'expo-auth-session/providers/google';

import { Main } from '../Main'

import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/slices/auth';

export default function Login() {

  const dispatch = useDispatch();

  const [ authTokens, setAuthTokens ] = useState(null);
  const [ exchangeToken, setExchangeToken ] = useState(null);
  const { getItem: getStoredToken, setItem: setStoredToken } = useAsyncStorage('jwtToken')

  const [request, response, promptAsync] = useAuthRequest({
    expoClientId:    '820232599217-dpo4vm7it9vctfafu01f29huff8n4afa.apps.googleusercontent.com',
    iosClientId:     '820232599217-dpo4vm7it9vctfafu01f29huff8n4afa.apps.googleusercontent.com',
    androidClientId: '820232599217-dpo4vm7it9vctfafu01f29huff8n4afa.apps.googleusercontent.com',
    webClientId:     '820232599217-dpo4vm7it9vctfafu01f29huff8n4afa.apps.googleusercontent.com',
    responseType:    'code',
    shouldAutoExchangeCode: false,
    extraParams: {
      access_type: 'offline'
    },
    scopes: [
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/drive.appdata',
      'https://www.googleapis.com/auth/drive.file'
    ]
  });

  const discoveryDocument = useAutoDiscovery('https://accounts.google.com/');

  const getToken = async () => {

    const exchangeFn = async () => {
      try {
        const exchangeTokenResponse = await exchangeCodeAsync({
            clientId: request.clientId,
            code: response.params.code,
            redirectUri: request.redirectUri,
            extraParams: {
              code_verifier: request.codeVerifier,
            },
            clientSecret: String(CLIENT_SECRET)
          },
          discoveryDocument
        );
        return exchangeTokenResponse;
      } catch (error) {
        console.error(error);
      }
      return false;
    };

    const refreshFn = async (exchange) => {
      try {
        const refreshTokenResponse = await refreshAsync({
          clientId: request.clientId,
          refreshToken: exchange.refreshToken,
          clientSecret: String(CLIENT_SECRET)
        }, discoveryDocument);
        console.log("Refreshed")
        if (LOGIN_VERBOSE === true) console.log(refreshTokenResponse)
        setAuthTokens(refreshTokenResponse)
        return;
      } catch (error) {
        console.error(error);
      }
      setStoredToken(null);
    };

    try {
      let stored_exchange = JSON.parse(await getStoredToken())
      if (stored_exchange != null) {
        console.log("Stored Exchange")
        if (LOGIN_VERBOSE === true) console.log(stored_exchange)
        setExchangeToken(stored_exchange)
        await refreshFn(stored_exchange);
        return;
      }
    } catch (error) {
      console.log("Token Cache Invalid", error)
    }

    if (response) {
      if (response.error) {
        Alert.alert(
          'Authentication error',
          response.params.error_description || 'something went wrong'
        );
        return;
      }
      if (response.type === 'success') {
        console.log("Recieved new code")
        if (LOGIN_VERBOSE === true) console.log(response)
        let exchange = await exchangeFn();
        console.log("Exchanged")
        if (LOGIN_VERBOSE === true) console.log(exchange)
        setStoredToken(JSON.stringify(exchange));
        setExchangeToken(exchange)
        await refreshFn(exchange);
      }
    }
  }

  useEffect(() => {
    if (discoveryDocument && request)
      getToken()
  }, [discoveryDocument, request, response]);

  const logout = async () => {
    const revokeResponse = await revokeAsync({
        clientId: request.clientId,
        token: exchangeToken.refreshToken,
      }, discoveryDocument);
    if (revokeResponse) {
      setAuthTokens(null);
      setStoredToken(null);
    }
  };

  if (authTokens) {
    dispatch(setAuth(authTokens))
    return (
      <Main logout={logout}/>
    )
  }

  return (
    <View style={styles.container}>
      <Text>Login!</Text>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});