import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";

import { Login } from "../pages/Login/Login";
import { Calendar } from "./Calendar/Calendar";
import React from "react";
import { Privacy } from "./Privacy/Privacy";
import { Home } from "./Home/Home";
import Cookies from "js-cookie";
import { Loading } from "./Loading/Loading";

function App() {
  const [credential, setCredential] = useState(undefined);
  const [refreshAttempted, setRefreshAttempted] = useState(false);

  return (
    <Routes>
      <Route path="/login" element={<Login setCredential={setCredential} />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route
        path="/loading"
        element={
          <Loading
            setRefreshAttempted={setRefreshAttempted}
            setCredential={setCredential}
          />
        }
      />
      <Route
        path="/"
        element={
          refreshAttempted ? (
            credential ? (
              <Calendar setCredential={setCredential} className={""} />
            ) : (
              <Home setCredential={setCredential} />
            )
          ) : (
            <Loading
              setRefreshAttempted={setRefreshAttempted}
              setCredential={setCredential}
            />
          )
        }
      />
    </Routes>
  );
}

export default App;
