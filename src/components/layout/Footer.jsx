import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 md:px-12 border-t border-white/5 mt-10 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 text-center md:text-left">
          
          <div className="flex items-center gap-2.5">
            <div className="w-3.5 h-3.5 bg-rap-red rounded-full animate-pulse"></div>
            <span className="text-xl font-black tracking-tighter uppercase">Rap Không</span>
          </div>

          <div className="md:text-right flex-1 md:px-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 mb-1.5 font-medium">
               RAP KHÔNG • HỒ CHÍ MINH, VIỆT NAM
            </p>
            <p className="text-rap-red font-bold text-sm tracking-wide">BOOKING@RAPKHONG.VN</p>
          </div>

          <div className="flex gap-7 text-xl text-white">
            <a href="https://www.facebook.com/ent.rapkhong7723" className="hover:text-rap-red transition-colors" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.youtube.com/@Rapkhongmayku" className="hover:text-rap-red transition-colors" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-[10px] text-gray-600 uppercase tracking-[0.2em] font-medium">
        </div>
      </div>
    </footer>
  );
};

export default Footer;