import React, { Suspense } from 'react';
import Banner from './Banner';
import Friends from './Friends';

const HomePage = () => {
  return (
    <div className="bg-[#f7fafc]">
      <Banner></Banner>
      
      <Suspense fallback={
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-spinner loading-lg text-[#244d3f]"></span>
        </div>
      }>
        <Friends />
      </Suspense>
    </div>
  );
};

export default HomePage;