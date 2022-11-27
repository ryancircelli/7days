import React from 'react';

export const Controls = ({toggleFilterCompleted}) => {
  return (  
    <div className="h-14 w-full bg-gray-400">
      <button 
        className="bg-white rounded-md p-2 m-2"
        onClick={() => toggleFilterCompleted()}
      >
        Filter Completed
      </button>
    </div>
  );
}