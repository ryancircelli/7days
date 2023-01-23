import axios from "axios";
import { useEffect, useState } from 'react';
import { Route, Navigate, Routes, useNavigate } from 'react-router-dom';

import { Login } from '../pages/Login/Login'
import { Home } from '../pages/Home/Home'
import React from "react";
import { Privacy } from "./Privacy/Privacy";

function App() {
  const [credential, setCredential] = useState(undefined);

  return (
    <Routes>
      <Route path="/login" element={
        <Login setCredential={setCredential}/>
      }/>
      <Route path="/privacy" element={
        <Privacy/>
      }/>
      <Route path="/" element={
        <Private credential={credential} to="/login">
          <Home setCredential={setCredential}/>
        </Private>
      }/>
    </Routes>
  )
}

const Private = ({ credential, to, children }) => {  
  return credential ? children : <Navigate to={to} />;
}


export default App;
