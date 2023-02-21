import React, { useCallback, useEffect } from "react";

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

export const Loading = ({ setCredential, setRefreshAttempted }) => {
  const getRefresh = useCallback(async (refresh_token) => {
    try {
      console.log("Refresh Token:", refresh_token);
      const tokens = await axios.post(
        "https://www.googleapis.com/oauth2/v4/token",
        {
          refresh_token: refresh_token,
          client_id:
            "820232599217-dpo4vm7it9vctfafu01f29huff8n4afa.apps.googleusercontent.com",
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          grant_type: "refresh_token",
          redirect_uri: process.env.REACT_APP_REDIRECT_URI,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log("Credential Request Response:", tokens);
      setCredential(tokens.data.access_token);
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + tokens.data.access_token;
    } catch (error) {
      console.log("Failed Auth Refresh");
    }
    setRefreshAttempted(true);
  }, []);

  useEffect(() => {
    let refresh_token = Cookies.get("refresh_token");
    if (refresh_token !== "undefined")
      getRefresh(decodeURIComponent(refresh_token));
    else setRefreshAttempted(true);
  }, [getRefresh, setRefreshAttempted]);

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
        <div className="pointer-events-none col-start-1 row-start-1 flex w-full items-center justify-center transition-opacity delay-100 duration-150">
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
            className=" text-white"
          />
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
