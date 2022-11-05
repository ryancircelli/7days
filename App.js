import React from 'react';
import { NativeBaseProvider } from "native-base";
import { maybeCompleteAuthSession } from 'expo-web-browser';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';
import Login from './src/pages/Login';

maybeCompleteAuthSession();

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Login/>
      </Provider>
    </NativeBaseProvider>
  );
}