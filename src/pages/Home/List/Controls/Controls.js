import React from 'react';

export const Controls = ({toggleFilterCompleted, toggleFilterFuture30, listRef, events_grouped}) => {
  return (  
    <div className="w-full">
      <div className='w-full'>
        <button
          className="bg-white rounded-lg p-2 mx-2 mt-2 hover:brightness-95"
          onClick={() => {
            listRef.current[1].scrollIntoView()  
          }}
        >
          Today
        </button>
        <button 
          className="bg-white rounded-lg p-2 mx-2 mt-2 hover:brightness-95"
          onClick={() => toggleFilterCompleted()}
        >
          Filter Completed
        </button>
        <button 
          className="bg-white rounded-lg p-2 mx-2 mt-2 hover:brightness-95"
          onClick={() => toggleFilterFuture30()}
        >
          Filter Next 30 Days
        </button>
      </div>
    </div>
  );
}