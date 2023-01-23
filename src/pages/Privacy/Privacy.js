import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { SlArrowLeft } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

export const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className='flex h-screen flex-col bg-purple-800'>
      <div className='flex flex-col h-full w-full'>
        <div
          className='grid grid-rows-[auto_1fr] h-full gap-4 m-4'
        >
          <div className='row-span-1 h-12'>
          <div className="flex flex-row h-full w-full relative">
            <button 
              className='flex justify-center text-white text-6xl -mt-2' 
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '100'
              }}
              onClick={()=>navigate('/')}
            >
              7days
            </button>
          </div>
          </div>
          <div className='relative row-span-1 flex flex-row'>
            <div className='flex-1 p-4 bg-white rounded-3xl overflow-hidden '>
              <button 
                className='absolute left-2 top-2 z-10 flex flex-row justify-center items-center'
                onClick={()=>navigate('/')}
              >
                <SlArrowLeft size={18} className='align-bottom m-2'/> 
                <div className='text-lg text-center'>
                  Return
                </div>
              </button>
              <Scrollbars
                className='w-full h-full'
                autoHide
                renderThumbVertical={()=>
                  <div 
                    style={{	        
                      cursor: 'pointer',
                      borderRadius: 'inherit',
                      backgroundColor: 'rgba(0,0,0,.2)',
                      zIndex: 100,
                    }}
                  />
                }
                renderTrackVertical={()=>
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
                }
                renderView={props => <div {...props} className={ "flex flex-row items-center justify-center"}/>}
              >
                <div className='w-[33%] h-full'>
                  <div className='mt-8 mb-6 font-bold font-sans text-4xl'>
                    Privacy Policy
                  </div>
                  <div>
                    Ryan Circelli ("we," "us," or "our") operates the website and the service that utilize the Google Calendar API (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                  </div>
                  <div className='my-5 font-semibold font-sans text-2xl'>
                    Google Calendar API
                  </div>
                  <div>
                    Our Service is built on top of Google Calendar API which uses https://www.googleapis.com/auth/calendar, which allows us to access data that you have stored on your Google Calendar. This data is only accessed with your explicit consent and is not stored on our servers. We use this data to interact with your Google Calendar and provide additional ways to organize your calendar and add additional fields to sort your calendar events.
                  </div>
                  <div className='my-5 font-semibold font-sans text-2xl'>
                    Data Collection and Use
                  </div>
                  <div>
                    We do not collect any data from users of the Service. Any data accessed through the Google Calendar API is stored on the user's Google Calendar and the user's settings is stored on the user's Google Drive and is not shared with any third parties.
                  </div>
                  <div className='my-5 font-semibold font-sans text-2xl'>
                    Data Protection and Security
                  </div>
                  <div>
                    We take the protection of your data seriously and use industry-standard security measures to protect the data accessed through the Google Calendar API. However, please be aware that no method of electronic storage is 100% secure and we cannot guarantee its absolute security.
                  </div>
                  <div className='my-5 font-semibold font-sans text-2xl'>
                    User Data Deletion
                  </div>
                  <div>
                    Users can delete their data on their Google Calendar directly and directly delete their settings on their Google Drive.
                  </div>
                  <div className='my-5 font-semibold font-sans text-2xl'>
                    Contact Us
                  </div>
                  <div>
                    If you have any questions about our privacy policy or data protection practices, please contact us by email at ryancircelli@gmail.com.
                  </div>
                </div>
              </Scrollbars>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}