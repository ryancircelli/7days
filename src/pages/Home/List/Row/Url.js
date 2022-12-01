import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { getTextWidth } from 'get-text-width';
import parseUrl from "parse-url";
import { updateEventPrivate } from 'gapi/events';

export const Url = ({data, prop, getEvents}) => {
  let placeholder = JSON.parse(data.extendedProperties?.private[data.recurringEventId ? data.recurringEventId : "single"] || "{}")?.[prop.name.toLowerCase()];
  const ref = useRef(null);
  const container = useRef(null);
  const [selected, setSelected] = useState(false);
  const [valid, setValid] = useState(false);
  const [parsedURL, setParsedURL] = useState(null);
  const [width, setWidth] = useState(0);
  const [right, setRight] = useState(0);
  const [alignCenter, setAlignCenter] = useState(true);

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
  };

  const exitInput = async () => {
    setSelected(false);
    if (parsedURL && parsedURL.href !== null && placeholder !== parsedURL.href) {
      setWidth(getTextWidth(parsedURL?.resource))
      let privateProps = {...data.extendedProperties?.private}
      privateProps[data.recurringEventId ? data.recurringEventId : "single"] = JSON.stringify({
        ...JSON.parse(privateProps[data.recurringEventId ? data.recurringEventId : "single"] || "{}"),
        [prop.name.toLowerCase()]: parsedURL.href
      })
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
      className="group h-full w-full relative overflow-hidden flex justify-center items-center"
      style={{
        borderWidth: !selected ? 0 : "1px",
        borderColor: valid ? "black" : "red",
        borderRadius: 4
      }}
    >
      { !selected ?
        <a
          href={parsedURL?.href}
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
            {parsedURL?.resource ? parsedURL?.resource : "-"}
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