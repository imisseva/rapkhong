import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/5 py-5 px-6 md:px-12 lg:px-16">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl font-black tracking-tighter italic uppercase text-white hover:text-rap-red transition-colors duration-200">
          <Link to="/">RAP KHÔNG</Link>
        </div>

        {/* Nav links — căn giữa */}
        <ul className="hidden md:flex items-center gap-10 font-bold uppercase text-[11px] tracking-[0.2em] text-white/60">
          <li className="hover:text-white transition-colors duration-200">
            <Link to="/">Trang chủ</Link>
          </li>
          <li className="hover:text-white transition-colors duration-200">
            <Link to="/events">Events</Link>
          </li>
          <li className="hover:text-white transition-colors duration-200">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        {/* Dot indicator bên phải */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-rap-red animate-pulse" />
          <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-bold hidden md:block">
            Live
          </span>
        </div>

      </div>
    </nav>
  );
};

export default Header;
