import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import gLogo from "../../assets/g-logo.png";

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";

export const Login = ({ setCredential }) => {
  const navigate = useNavigate();

  const getCredentials = async (refresh_token) => {
    console.log("Refresh Token:", refresh_token);
    let tokens = await axios.post(
      "https://www.googleapis.com/oauth2/v4/token",
      {
        code: refresh_token,
        client_id:
          "820232599217-dpo4vm7it9vctfafu01f29huff8n4afa.apps.googleusercontent.com",
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        grant_type: "authorization_code",
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log("Credential Request Response:", tokens);
    setTimeout(async () => {
      setCredential(tokens.data.access_token);
      navigate("/");
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + tokens.data.access_token;
    }, 250);
    return tokens;
  };

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    scope:
      "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file",
    onSuccess: async (codeResponse) => {
      setShowLogin(false);
      console.log("Access Token:", codeResponse);
      var tokens = await getCredentials(codeResponse.code);
      Cookies.set("refresh_token", tokens.data.refresh_token);
      setTimeout(() => {
        setShowLogout(true);
      }, 2000);
    },
    onError: (errorResponse) => {
      console.log("Login Failed:", errorResponse);
    },
  });

  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLogin(true);
    }, 250);
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-purple-800">
      <div
        className="m-8 flex justify-center text-8xl text-white"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "100",
        }}
      >
        7days
      </div>
      <div className="grid h-16 w-48 overflow-visible">
        <div
          className={
            "pointer-events-none col-start-1 row-start-1 flex w-full items-center justify-center transition-opacity delay-100 duration-150" +
            (!showLogin ? " opacity-100 " : " opacity-0 ")
          }
        >
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
            className=" text-white"
          />
        </div>
        <button
          onClick={() => googleLogin()}
          className={
            "col-start-1 row-start-1 flex h-16 w-48 flex-row items-center justify-center rounded-lg bg-white text-xl font-normal transition-opacity duration-150 " +
            (showLogin ? " opacity-100 " : " pointer-events-none opacity-0 ")
          }
          style={{
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Sign in with
          <img src={gLogo} alt="Google Signin" className="m-2 mr-0 h-8" />
        </button>
        <div className="col-start-1 row-start-2 flex items-center justify-center pt-4">
          <button
            onClick={async () => {
              await googleLogout();
              Cookies.set("refresh_token", undefined);
              setCredential(undefined);
              navigate("/login");
              axios.defaults.headers.common["Authorization"] = undefined;
              console.log("Logging Out");
              setShowLogout(false);
              setTimeout(() => {
                setShowLogin(true);
              }, 250);
            }}
            className={
              "flex h-16 w-32 flex-row items-center justify-center rounded-lg bg-white text-xl font-normal transition-opacity duration-150 " +
              (showLogout ? " opacity-100 " : " pointer-events-none opacity-0 ")
            }
            style={{
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Logout
          </button>
        </div>
      </div>
      <a className="absolute bottom-2 right-4 hover:underline" href="/privacy">
        Privacy Policy
      </a>
      <a
        className="absolute bottom-2 left-4 hover:underline"
        href="https://github.com/rinorocks8/7days"
      >
        Source Code
      </a>
    </div>
  );
};
