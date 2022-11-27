import React, { useEffect, useRef, useState } from 'react';
import { getTextWidth } from 'get-text-width';
import parseUrl from "parse-url";
import { updateEventPrivate } from 'gapi/events';

export const Url = ({data, prop, getEvents}) => {
  let placeholder = data.extendedProperties?.private[prop.name.toLowerCase()];
  const ref = useRef(null);
  const container = useRef(null);
  const [selected, setSelected] = useState(false);
  const [valid, setValid] = useState(false);
  const [parsedURL, setParsedURL] = useState(null);
  const [width, setWidth] = useState(0);

  const loadPlaceholder = () => {
    try {
      let url = parseUrl(placeholder);
      setValid(true);
      setParsedURL(url);
      setWidth(getTextWidth(url?.resource));
    } catch {
      setValid(false);
    }
  }

  const changeHandler = evt => {
    try {
      let url = parseUrl(evt.target.value);
      setValid(true);
      setParsedURL(url);
      setWidth(getTextWidth(url?.resource));
    } catch {
      setValid(false);
    }
    setWidth(getTextWidth(evt.target.value ? evt.target.value : parsedURL?.resource))
  };

  const exitInput = async () => {
    setSelected(false);
    if (parsedURL && parsedURL.href !== null && placeholder !== parsedURL.href) {
      let privateProps = {...data.extendedProperties?.private}
      privateProps[prop.name.toLowerCase()] = parsedURL.href;
      await updateEventPrivate(data, privateProps);
      getEvents();
    }
  }

  const escapeHandler = evt => {
    if (evt.code === "Escape" || evt.code === "Enter")
      exitInput();
  };

  useEffect(() => {
    if (selected)
      ref.current.focus()
  }, [selected]);

  useEffect(() => {
    loadPlaceholder();
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target))
        exitInput();
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  let right = container.current && container.current.offsetWidth - width - 32 - (parsedURL?.resource ? 8 : 0);
  right = right > 0 ? right : 0;

  return (
    <div 
      ref={container} 
      className="group h-full w-full relative overflow-hidden"
      style={{
        borderWidth: valid || !selected ? 0 : "2px",
        borderColor: "red"
      }}
    >
      { !selected ?
        <a
          href={parsedURL?.href}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div
            className="p-0 h-full flex items-center absolute left-0 peer border-0 bg-blue-700 placeholder:text-black focus:ring-0"
            style={{ 
              width: (width + (parsedURL?.resource ? 16 : 0)) +'px',
              paddingLeft:  parsedURL?.resource ? '8px' : '0px'
            }}
          >
            {parsedURL?.resource}
          </div>
        </a>
      :
        <input 
          ref={ref}
          disabled={!selected}
          className="p-0 h-full w-full absolute left-0 peer border-0 bg-blue-700 placeholder:text-black focus:ring-0"
          type="text" 
          onChange={changeHandler}
          onKeyDown={escapeHandler}
          placeholder={placeholder}
        />
      }
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