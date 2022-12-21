import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { getTextWidth } from 'get-text-width';
import parseUrl from "parse-url";
import { updateEventPrivate } from 'gapi/events';
import { FiEdit } from "react-icons/fi";

export const Url = ({data, prop, getEvents, changeDefault, disabled}) => {
  // add changeDefault logic

  const eventValue = JSON.parse(data?.extendedProperties?.private['default'] || "{}")[prop.name.toLowerCase()];
  const [parsedEventValue, setParsedEventValue] = useState(null);

  const originalValue = data?.recurringEventId && !changeDefault ? JSON.parse(data?.extendedProperties?.private[data?.recurringEventId] || "{}")[prop.name.toLowerCase()] : eventValue;
  const [value, setValue] = useState(originalValue);
  const [parsedURL, setParsedURL] = useState(null);
  const [valid, setValid] = useState(false);

  const ref = useRef(null);
  const container = useRef(null);
  const [selected, setSelected] = useState(false);

  const [width, setWidth] = useState(0);
  const [right, setRight] = useState(0);
  const [alignCenter, setAlignCenter] = useState(true);

  const loadEventValue = () => {
    try {
      let url = parseUrl(eventValue)
      setValid(true)
      // @ts-ignore
      setParsedEventValue(url);
      setWidth(getTextWidth(url?.resource))
    } catch {
      setValid(false);
    }
  }

  const changeHandler = evt => {
    setValue(evt.target.value)
    if (evt.target.value === '') {
      setValid(true);
      setParsedURL(null);
      setWidth(getTextWidth(''));
      return
    }
    try {
      let url = parseUrl(evt.target.value);
      setValid(true);
      setParsedURL(url);
      setWidth(getTextWidth(url?.resource));
    } catch {
      setValid(false);
    }
  };

  const exitInput = async () => {
    setSelected(false);
    if (value === '' && originalValue !== '') {
      setWidth(getTextWidth(parsedEventValue?.resource))
      let privateProps = {...data.extendedProperties?.private}
      let key = data.recurringEventId && !changeDefault ? data.recurringEventId : 'default'
      let privatePropsKey = JSON.parse(privateProps[key] || "{}")
      delete privatePropsKey[prop.name.toLowerCase()]
      privateProps[key] = JSON.stringify(privatePropsKey)
      await updateEventPrivate(data, privateProps);
      getEvents();
    }
    if (parsedURL && parsedURL.href !== null && originalValue !== parsedURL.href && eventValue !== parsedURL.href) {
      setWidth(getTextWidth(parsedURL?.resource))
      let privateProps = {...data.extendedProperties?.private}
      let key = data.recurringEventId && !changeDefault ? data.recurringEventId : 'default'
      let privatePropsKey = JSON.parse(privateProps[key] || "{}")
      privatePropsKey[prop.name.toLowerCase()] = parsedURL.href
      privateProps[key] = JSON.stringify(privatePropsKey)
      await updateEventPrivate(data, privateProps);
      getEvents();
    }
  }

  const escapeHandler = evt => {
    if (evt.code === "Enter") {
      exitInput();
    }
    if (evt.code === "Escape") {
      setSelected(false);
      setValue(parsedURL?.href)
      setWidth(getTextWidth(parsedURL?.resource))
    }
  };

  useEffect(() => {
    if (selected)
      ref.current.focus()
  }, [selected]);

  useEffect(() => {
    loadEventValue();
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target))
        exitInput();
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  useLayoutEffect(() => {
    function updateRight() {
      let right = container.current && (container.current.offsetWidth - width)/2 - 32;
      right = right > 0 ? right : 0;
      setRight(right)
      setAlignCenter(container.current.offsetWidth > width);
    }
    window.addEventListener('resize', updateRight);
    updateRight();
    return () => window.removeEventListener('resize', updateRight);
  }, [parsedURL?.resource, width]);

  return (
    <div 
      ref={container} 
      className={
        "group h-full w-full relative overflow-hidden flex justify-center items-center " + 
        (!selected ? ' hover:border border-black' : 
          (' border ' + (valid ? ' border-black ' : ' border-red-600 ')))
      }
    >
      { !selected ?
        <a
          href={parsedURL?.href ? parsedURL?.href : parsedEventValue?.resource}
          target="_blank" 
          rel="noopener noreferrer"
          className="h-full flex justify-center items-center"
        >
          <div
            className="p-0 h-full w-full absolute flex items-center peer border-0 placeholder:text-black focus:ring-0"
            style={{
              justifyContent: alignCenter ? "center" : "left"
            }}
          >
            {parsedURL?.resource ? parsedURL?.resource : (parsedEventValue?.resource ? parsedEventValue?.resource : "-")}
          </div>
        </a>
      :
        <input 
          ref={ref}
          disabled={!selected}
          className="p-0 h-full w-full absolute left-0 peer border-0 placeholder:text-black focus:ring-0"
          type="text" 
          onChange={changeHandler}
          onKeyDown={escapeHandler}
          value={value}
          placeholder={'https://'}
        />
      }
      <button 
        className={'w-8 h-full absolute group-hover:inline peer-focus:hidden hidden justify-center items-center' + (disabled ? ' invisible ' : '')}
        style={{
          right: right + 'px'
        }}
        onClick={() => {
          setSelected(true)
        }}
      >
        <FiEdit className="m-2 align-bottom"/>
      </button>
    </div>
  );
}