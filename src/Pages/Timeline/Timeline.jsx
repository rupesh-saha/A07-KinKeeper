import React, { useState } from 'react';
import TimelineDetails from './TimelineDetails';

const Timeline = () => {

  const [filterType, setFilterType] = useState("")

  const handleFilterType = (type) => {
    setFilterType(type);
    console.log("Filtering by:", type);
  };


  return (
    <div className="max-w-[95%] md:max-w-[85%] mx-auto mt-12 md:mt-18">
      
      <h1 className="text-5xl font-bold text-[#1F2937] mb-2.5">Timeline</h1>

      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1 font-medium">Filter Timeline</div>
        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li><button onClick={() => handleFilterType("call")}>Call</button></li>
          <li><button onClick={() => handleFilterType("text")}>Text</button></li>
          <li><button onClick={() => handleFilterType("video")}>Video</button></li>
          <li><button onClick={() => handleFilterType("")} className="font-light">Clear Filter</button></li>
        </ul>
      </div>

      <TimelineDetails filterType={filterType}></TimelineDetails>

    </div>
  );
};

export default Timeline;