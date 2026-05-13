import React from 'react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';


const FooterSection = () => {
  return (
    <div className="bg-[#234e3f] text-white py-16 w-full">
      <div className="md:max-w-[85%] mx-auto px-6 md:px-0">

        <div className="flex flex-col items-center text-center space-y-6 mb-12">

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">KeenKeeper</h2>
          <p className="max-w-4xl text-gray-200 font-light text-sm md:text-base leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

          <div className="pt-2">
            <h3 className="font-semibold text-lg mb-4">Social Links</h3>

            <div className="flex gap-3">
              <a href="#" className="bg-white p-2 rounded-full text-[#244D3F] hover:bg-gray-200 transition-all shadow-lg">
                <SiInstagram size={18}></SiInstagram>
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-[#244D3F] hover:bg-gray-200 transition-all shadow-lg">
                <SiFacebook size={18}></SiFacebook>
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-[#244D3F] hover:bg-gray-200 transition-all shadow-lg">
                <SiX size={18}></SiX>
              </a>
            </div>
            
          </div>

        </div>

        <hr className="border-white/10" />

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-6 md:gap-0 font-light">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>


        </div>

      </div>
    </div>
  );
};

export default FooterSection;