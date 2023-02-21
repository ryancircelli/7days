import React from "react";
import { googleLogout } from "@react-oauth/google";
import { resetSettings } from "gapi/settings";

import { Dropdown } from "antd";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import blankProfile from "../../../assets/blankProfile.jpg";

export const Header = ({ userInfo, setCredential }) => {
  const navigate = useNavigate();

  const items = [
    {
      key: "0",
      label: <a href="https://github.com/rinorocks8/7days">Source Code</a>,
    },
    {
      key: "1",
      label: <button>Privacy Policy</button>,
      onClick: async () => {
        navigate("/privacy");
      },
    },
    {
      key: "2",
      label: <button>Logout</button>,
      onClick: async () => {
        await googleLogout();
        Cookies.set("refresh_token", undefined);
        setCredential(undefined);
        console.log("Logging Out");
      },
    },
  ];

  return (
    <div className="relative flex h-full w-full flex-row">
      <button
        className="-mt-2 flex justify-center text-6xl text-white"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "100",
        }}
        onClick={() => navigate("/")}
      >
        7days
      </button>
      <div className="absolute right-4 flex h-full flex-row">
        <Dropdown className="h-full" menu={{ items }}>
          <div className="flex flex-row items-end">
            <div className="flex h-full items-end justify-center px-4 text-xl font-extralight text-white">
              {userInfo?.name}
            </div>
            <img
              src={userInfo?.picture ?? blankProfile}
              referrerPolicy="no-referrer"
              alt="User Profile"
              className="h-[80%] rounded-full"
            />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};
