import React, { useState } from 'react';
import { FiList, FiCalendar, FiSettings, FiChevronRight } from "react-icons/fi";

export const HomeMenu = ({page, setPage}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (  
    <div className={" transition-[width] ease-in-out duration-150 flex flex-col py-4" +
      (collapsed ? " w-12 " : " w-36 ")
    }>
      <MenuItem 
        collapsed={collapsed} 
        name={"Upcoming"} 
        iconName={FiList} 
        selected={page === 'upcoming'} 
        icon={undefined} 
        onClick={()=>setPage('upcoming')} 
        className={undefined}
      />
      <MenuItem 
        collapsed={collapsed} 
        name={"Calendar"} 
        iconName={FiCalendar} 
        selected={page === 'calendar'} 
        icon={undefined} 
        onClick={()=>setPage('calendar')} 
        className={undefined}/>
      <MenuItem 
        collapsed={collapsed} 
        name={"Settings"} 
        iconName={FiSettings} 
        selected={page === 'settings'} 
        icon={undefined} 
        onClick={()=>setPage('settings')} 
        className={undefined}
      />
      <MenuItem 
        collapsed={collapsed} 
        name={"Settings"} 
        icon={
          <FiChevronRight 
            size={32} 
            className={"transition-[transform] ease-in-out duration-100 stroke-white align-bottom items-end rounded-xl p-2 " +
              (collapsed ? " hover:bg-[rgba(255,255,255,0.2)] " : " rotate-180 ")
            }
          />
        } 
        selected={false} 
        iconName={undefined} 
        onClick={()=>toggleCollapsed()} 
        className="mt-auto"/>
    </div>
  );
}

const MenuItem = ({collapsed, name, iconName, icon, selected, onClick, className}) => {
  let IconComponent = icon
  if (iconName) {
    const Icon = iconName
    IconComponent = (
      <Icon size={32} className={"align-bottom stroke-white rounded-xl p-2" +
        (collapsed ? " hover:bg-[rgba(255,255,255,0.2)] " : " ") + 
        (selected && collapsed ? " bg-[rgba(255,255,255,0.05)] " : " ")
      }/>
    )
  }
  return (
    <button 
      className={"my-1 inline-flex items-center text-white whitespace-nowrap overflow-hidden rounded-xl content w-fit " +
        (collapsed ? " " : " hover:bg-[rgba(255,255,255,0.2)] ") +
        (selected && !collapsed ? " bg-[rgba(255,255,255,0.05)] " : " ")+
        (" " + className)
      }
      onClick={onClick}
    >
      {IconComponent}
      <div className={'transition-[opacity] ease-in-out duration-150' +
        (collapsed ? " opacity-0 " : " opacity-100 delay-75 ")
      }>
        <div className={'transition-[transform] ease-in-out duration-150 mr-4 text-sm' +
          (collapsed ? " -translate-x-36 delay-75 " : " translate-x-0")
        }>
          {name}
        </div>
      </div>
    </button>
  )
}