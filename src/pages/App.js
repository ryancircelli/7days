import axios from "axios";
import { useState } from 'react';

import { Login } from '../pages/Login/Login'
import { Home } from '../pages/Home/Home'
import React from "react";

function App() {

  const [credential, setCredential] = useState(undefined);

  if (credential === undefined)
    return <Login setCredential={setCredential}/>

  axios.defaults.headers.common['Authorization'] = 'Bearer ' + credential;

  return <Home setCredential={setCredential}/>

}

export default App;
