import React, { useEffect, useRef, useState } from 'react';
import { getTextWidth } from 'get-text-width';
import { updateEvent } from 'gapi/events';

export const Text = ({data, getEvents}) => {
  let placeholder = "(No title)";
  const ref = useRef(null);
  const container = useRef(null);
  const [selected, setSelected] = useState(false);
  const [width, setWidth] = useState(getTextWidth(data.summary ? data.summary : placeholder));
  const [right, setRight] = useState(0);
  const [value, setValue] = useState(data.summary);

  const changeHandler = evt => {
    setValue(evt.target.value)
    setWidth(getTextWidth(evt.target.value ? evt.target.value : placeholder))
  };
  
  const exitInput = async () => {
    setSelected(false);
    let value = ref.current.value !== "" ? ref.current.value : undefined
    if (value !== data.summary) {
      data.summary = value;
      await updateEvent(data)
      getEvents();
    }
  }

  const escapeHandler = evt => {
    if (evt.code === "Escape" || evt.code === "Enter") {
      exitInput();
    }
  };

  useEffect(() => {
    if (selected)
      ref.current.focus()
  }, [selected]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        exitInput()
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    let right = container.current && container.current.offsetWidth - width - 32;
    right = right > 0 ? right : 0;
    setRight(right)
  }, [width, container]);

  return (
    <div ref={container} className="group w-full h-full relative overflow-hidden">
      <input 
        ref={ref}
        disabled={!selected}
        className="p-0 h-full absolute left-0 peer border-0 bg-blue-700 placeholder:text-black focus:ring-0"
        style={{ 
          width: selected ? '100%' : width +'px',
        }}
        type="text" 
        value={value}
        onChange={changeHandler}
        onKeyDown={escapeHandler}
        placeholder={placeholder}
      />
      <button 
        className='w-8 h-full absolute group-hover:inline peer-focus:hidden hidden justify-center items-center'
        style={{
          right: right + 'px'
        }}
        onClick={() => {
          setSelected(true)
        }}
      >
        [*]
      </button>
    </div>
  );
}