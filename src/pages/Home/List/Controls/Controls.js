import React from 'react';

export const Controls = ({toggleFilterCompleted, toggleFilterFuture30, listRef, events_grouped}) => {
  return (  
    <div className="h-14 w-full bg-gray-400">
      <button
        className="bg-white rounded-md p-2 m-2"
        onClick={() => {
          listRef.current[1].scrollIntoView()  
        }}
      >
        Scroll To
      </button>
      <button 
        className="bg-white rounded-md p-2 m-2"
        onClick={() => toggleFilterCompleted()}
      >
        Filter Completed
      </button>
      <button 
        className="bg-white rounded-md p-2 m-2"
        onClick={() => toggleFilterFuture30()}
      >
        Filter Next 30 Days
      </button>
    </div>
  );
}