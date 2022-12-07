import { convertDates } from 'libs/date';
import React, { useState, useEffect } from 'react';
import { FiRepeat } from "react-icons/fi";
import { DateEditor } from './DateEditor/DateEditor';

import { Popover, ArrowContainer } from 'react-tiny-popover'

export const Date = ({data, getEvents, setScrollable}) => {

  const [editor, showEditor] = useState(false);

  useEffect(() => {
    //setScrollable(!editor)
  }, [setScrollable, editor]);

  return (
    <div className="w-full h-full relative">
      <Popover
        content={({ position, childRect, popoverRect }) => (
          <ArrowContainer
            position={position}
            childRect={childRect}
            popoverRect={popoverRect}
            arrowColor={'#F3F4F7'}
            arrowSize={10}
          >
            <DateEditor 
              data={data} 
              showEditor={showEditor}
              getEvents={getEvents}
            />
          </ArrowContainer>
        )}
        isOpen={editor}
        reposition={true}
        positions={['bottom']}
        containerClassName='relative z-40'
      >
        <button 
          onClick={()=> showEditor(!editor)} 
          className="absolute top-0 hover:underline hover:decoration-dotted peer-hover:underline peer-hover:decoration-dotted w-full h-full flex-1 flex justify-center items-center"
        >
          {convertDates(data.formatedStart, data.formatedEnd)}
          {data.recurrence ? <FiRepeat className="m-2 align-bottom"/> : ""}
        </button>
      </Popover>
    </div>
  );
}