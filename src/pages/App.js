import axios from "axios";
import { useState } from 'react';

import { Login } from '../pages/Login/Login'
import { Home } from '../pages/Home/Home'
import React from "react";

function App() {

  const [credential, setCredential] = useState(null);

  if (credential == null)
    return <Login setCredential={setCredential}/>

  axios.interceptors.request.use(function (config) {
    config.headers.Authorization = 'Bearer ' + credential;
    return config;
  });

  return <Home/>

}

export default App;
