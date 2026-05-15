import React from 'react';
import InteractionChart from './InteractionChart';

const Stats = () => {
  return (
    <div className="max-w-[93%] md:max-w-[85%] mx-auto mt-12 md:mt-18 mb-6">
      
      <h1 className="text-5xl font-bold text-[#1F2937] mb-4">Friendship Analytics</h1>

      <InteractionChart></InteractionChart>
      
    </div>
  );
};

export default Stats;