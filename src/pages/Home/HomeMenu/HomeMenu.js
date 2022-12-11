import React, { useState } from 'react';
import { googleLogout } from '@react-oauth/google';
import { resetSettings } from 'gapi/settings';
import { FiList, FiCalendar, FiSettings, FiChevronRight, FiChevronLeft } from "react-icons/fi";

export const HomeMenu = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (  
    <div className={" transition-[width] ease-in-out duration-150 flex flex-col py-4" +
      (collapsed ? " w-12 " : " w-36 ")
    }>
      <div className={"my-1 inline-flex items-center text-white whitespace-nowrap overflow-hidden rounded-xl content w-fit " +
        (collapsed ? " " : " hover:bg-[rgba(255,255,255,0.2)] ")
      }>
        <FiList size={32} className={"align-bottom stroke-white rounded-xl p-2" +
          (collapsed ? " hover:bg-[rgba(255,255,255,0.2)] " : " ")
        }/>
        <div className={'transition-[opacity] ease-in-out duration-150' +
          (collapsed ? " opacity-0 " : " opacity-100 delay-75 ")
        }>
          <div className={'transition-[transform] ease-in-out duration-150 mr-4 text-sm' +
            (collapsed ? " -translate-x-36 delay-75 " : " translate-x-0")
          }>
            Upcoming
          </div>
        </div>
      </div>
      <div className={"my-1 inline-flex items-center text-white whitespace-nowrap overflow-hidden rounded-xl content w-fit " +
        (collapsed ? " " : " hover:bg-[rgba(255,255,255,0.2)] ")
      }>
        <FiCalendar size={32} className={"align-bottom stroke-white rounded-xl p-2" +
          (collapsed ? " hover:bg-[rgba(255,255,255,0.2)] " : " ")
        }/>
        <div className={'transition-[opacity] ease-in-out duration-150' +
          (collapsed ? " opacity-0 " : " opacity-100 delay-75 ")
        }>
          <div className={'transition-[transform] ease-in-out duration-150 mr-4 text-sm' +
            (collapsed ? " -translate-x-36 delay-75 " : " translate-x-0")
          }>
            Calendar
          </div>
        </div>
      </div>
      <div className={"my-1 inline-flex items-center text-white whitespace-nowrap overflow-hidden rounded-xl content w-fit " +
        (collapsed ? " " : " hover:bg-[rgba(255,255,255,0.2)] ")
      }>
        <FiSettings size={32} className={"align-bottom stroke-white rounded-xl p-2" +
          (collapsed ? " hover:bg-[rgba(255,255,255,0.2)] " : " ")
        }/>
        <div className={'transition-[opacity] ease-in-out duration-150' +
          (collapsed ? " opacity-0 " : " opacity-100 delay-75 ")
        }>
          <div className={'transition-[transform] ease-in-out duration-150 mr-4 text-sm' +
            (collapsed ? " -translate-x-36 delay-75 " : " translate-x-0")
          }>
            Settings
          </div>
        </div>
      </div>
      <button 
        className={"my-1 inline-flex items-center mt-auto text-white whitespace-nowrap overflow-hidden rounded-xl content w-fit " +
          (collapsed ? " " : " hover:bg-[rgba(255,255,255,0.2)] ")
        }
        onClick={()=>toggleCollapsed()}
      >
        <FiChevronRight size={32} className={"transition-[transform] ease-in-out duration-100 stroke-white align-bottom items-end rounded-xl p-2 " +
          (collapsed ? " hover:bg-[rgba(255,255,255,0.2)] " : " rotate-180 ")
        }/>
        <div className={'transition-[opacity] ease-in-out duration-150' +
          (collapsed ? " opacity-0 " : " opacity-100 delay-75 ")
        }>
          <div className={'transition-[transform] ease-in-out duration-150 mr-4 text-sm ' +
            (collapsed ? " -translate-x-36 delay-75 " : " translate-x-0")
          }>
            Collapse
          </div>
        </div>
      </button>
    </div>
  );
}