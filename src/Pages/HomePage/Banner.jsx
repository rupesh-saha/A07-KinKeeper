import { Plus } from 'lucide-react';
import React from 'react';

const Banner = () => {
  return (
    <div className="hero w-full md:max-w-[85%] mx-auto">
      <div className="hero-content text-center max-w-none w-full flex-col">
        <div className="mt-6 mb-4 md:mt-18 md:mb-8">
          <h1 className="text-5xl mx-auto font-bold text-[#1F2937] max-w-xs md:max-w-3xl">Friends to keep close in your life</h1>
          <p className="py-8 font-medium text-[#64748B] md:max-w-lg mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
          <button className="bg-[#234e3f] text-white font-semibold px-3 py-2 rounded-lg flex items-center gap-1 mx-auto"><Plus></Plus> Add a Friend</button>
        </div>

        <div className="grid-tiles grid w-full grid-cols-1 md:grid-cols-4 gap-3 md:gap-8">

          <div className="py-8 px-10 rounded-lg flex flex-col bg-white shadow md:shadow-sm">
            <h2 className="text-[#244D3F] font-semibold text-4xl">12</h2>
            <p className="font-light text-[#64748B] mt-1">Total Friends</p>
          </div>
          <div className="py-8 px-10 rounded-lg flex flex-col bg-white shadow md:shadow-sm">
            <h2 className="text-[#244D3F] font-semibold text-4xl">3</h2>
            <p className="font-light text-[#64748B] mt-1">On Track</p>
          </div>
          <div className="py-8 px-10 rounded-lg flex flex-col bg-white shadow md:shadow-sm">
            <h2 className="text-[#244D3F] font-semibold text-4xl">6</h2>
            <p className="font-light text-[#64748B] mt-1">Need Attention</p>
          </div>
          <div className="py-8 px-10 rounded-lg flex flex-col bg-white shadow md:shadow-sm">
            <h2 className="text-[#244D3F] font-semibold text-4xl">12</h2>
            <p className="font-light text-[#64748B] mt-1">Interaction this Month</p>
          </div>

        </div>

        <div className="border-t border-gray-200 w-full my-5"></div>
      </div>
    </div>
  );
};

export default Banner;