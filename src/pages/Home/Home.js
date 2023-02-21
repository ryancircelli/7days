import React from "react";
import { useNavigate } from "react-router-dom";
import { Demo } from "./Demo";

export const Home = ({ setCredential }) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <div className="absolute z-50 flex h-full w-full">
        <div className="h-full flex-[3] bg-black opacity-60" />
        <div className="h-full flex-1 bg-purple-800">
          <div className="flex h-full flex-col p-12">
            <div className="flex w-full flex-row items-end justify-between">
              <button
                className="-mt-2 flex justify-center text-7xl text-white"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "100",
                }}
                onClick={() => navigate("/")}
              >
                7days
              </button>
              <div className="flex h-full flex-row space-x-4 align-bottom">
                <button
                  className="flex items-end text-xl text-white"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>
            </div>
            <div
              className="flex w-full items-center py-8 text-3xl text-white"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "100",
              }}
            >
              A Minimal Planner & To-Do List App.
            </div>
            <li
              className="w-full items-center text-xl text-white"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "100",
              }}
            >
              Synched with Google Calendar
            </li>
            <li
              className="w-full items-center text-xl text-white"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "100",
              }}
            >
              Recurring tasks
            </li>
            <li
              className="w-full items-center text-xl text-white"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "100",
              }}
            >
              Class Categories and Priorities
            </li>
            <div className="mt-auto">
              <div className="flex flex-row items-center justify-between">
                <a
                  className="text-white hover:underline"
                  href="https://github.com/rinorocks8/7days"
                >
                  Source Code
                </a>
                <a className="text-white hover:underline" href="/privacy">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-full w-full">
        <div className="flex-[3]">
          <Demo />
        </div>
        <div className="flex-1" />
      </div>
    </div>
  );
};
