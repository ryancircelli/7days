import React, { useRef } from 'react';

export const Header = ({data, extraProps, viewportRef}) => {

  const ref = useRef(null)

  // const observer = new IntersectionObserver( 
  //   ([e]) => e.target.classList.toggle("bg-red-100", e.isIntersecting || e.boundingClientRect.top < 0),
  //   { threshold: [1], root: viewportRef.current }
  // );
  
  // if(ref.current) observer.observe(ref.current);

  return (  
    <div ref={ref} className="sticky -top-[1px] z-40 flex flex-row ml-4 mr-6 bg-white">
      <div
        className="py-4 text-xl font-bold"
        style={{
          flex: extraProps.length
        }}
      >
        {data}
      </div>
      <div className="w-8"/>
      {extraProps.map((prop) =>
        <div
          className="py-4 text-xl font-bold flex-1 text-center"
          key={prop.name}
        >
          {prop.name}
        </div>
      )}
      <div className="py-4 text-xl font-bold flex-[2] text-center">
        Due Date
      </div>
      <div className="w-16"/> 
    </div>
  );
}