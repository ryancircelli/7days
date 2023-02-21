import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

export const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col bg-purple-800">
      <div className="flex h-full w-full flex-col">
        <div className="m-4 grid h-full grid-rows-[auto_1fr] gap-4">
          <div className="row-span-1 h-12">
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
            </div>
          </div>
          <div className="relative row-span-1 flex flex-row">
            <div className="flex-1 overflow-hidden rounded-3xl bg-white p-4 ">
              <button
                className="absolute left-2 top-2 z-10 flex flex-row items-center justify-center"
                onClick={() => navigate("/")}
              >
                <SlArrowLeft size={18} className="m-2 align-bottom" />
                <div className="text-center text-lg">Return</div>
              </button>
              <Scrollbars
                className="h-full w-full"
                autoHide
                renderThumbVertical={() => (
                  <div
                    style={{
                      cursor: "pointer",
                      borderRadius: "inherit",
                      backgroundColor: "rgba(0,0,0,.2)",
                      zIndex: 100,
                    }}
                  />
                )}
                renderTrackVertical={() => (
                  <div
                    style={{
                      position: "absolute",
                      width: 6,
                      right: 2,
                      bottom: 2,
                      top: 2,
                      borderRadius: 3,
                      zIndex: 100,
                    }}
                  />
                )}
                renderView={(props) => (
                  <div
                    {...props}
                    className={"flex flex-row items-center justify-center"}
                  />
                )}
              >
                <div className="h-full w-[33%]">
                  <div className="mt-8 mb-6 font-sans text-4xl font-bold">
                    Privacy Policy
                  </div>
                  <div>
                    Ryan Circelli ("we," "us," or "our") operates the website
                    and the service that utilize the Google Calendar API (the
                    "Service"). This page informs you of our policies regarding
                    the collection, use, and disclosure of personal data when
                    you use our Service and the choices you have associated with
                    that data.
                  </div>
                  <div className="my-5 font-sans text-2xl font-semibold">
                    Google Calendar API
                  </div>
                  <div>
                    Our Service is built on top of Google Calendar API which
                    uses https://www.googleapis.com/auth/calendar, which allows
                    us to access data that you have stored on your Google
                    Calendar. This data is only accessed with your explicit
                    consent and is not stored on our servers. We use this data
                    to interact with your Google Calendar and provide additional
                    ways to organize your calendar and add additional fields to
                    sort your calendar events.
                  </div>
                  <div className="my-5 font-sans text-2xl font-semibold">
                    Data Collection and Use
                  </div>
                  <div>
                    We do not collect any data from users of the Service. Any
                    data accessed through the Google Calendar API is stored on
                    the user's Google Calendar and the user's settings is stored
                    on the user's Google Drive and is not shared with any third
                    parties.
                  </div>
                  <div className="my-5 font-sans text-2xl font-semibold">
                    Data Protection and Security
                  </div>
                  <div>
                    We take the protection of your data seriously and use
                    industry-standard security measures to protect the data
                    accessed through the Google Calendar API. However, please be
                    aware that no method of electronic storage is 100% secure
                    and we cannot guarantee its absolute security.
                  </div>
                  <div className="my-5 font-sans text-2xl font-semibold">
                    User Data Deletion
                  </div>
                  <div>
                    Users can delete their data on their Google Calendar
                    directly and directly delete their settings on their Google
                    Drive.
                  </div>
                  <div className="my-5 font-sans text-2xl font-semibold">
                    Contact Us
                  </div>
                  <div>
                    If you have any questions about our privacy policy or data
                    protection practices, please contact us by email at
                    ryancircelli@gmail.com.
                  </div>
                </div>
              </Scrollbars>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
