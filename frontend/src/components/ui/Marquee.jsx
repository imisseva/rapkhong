import React from 'react';

const Marquee = () => {
  return (
    /* Container màu vàng: Chỉ giữ lại dải chữ chạy */
    <div className="bg-[#FFD700] py-6 md:py-8 overflow-hidden whitespace-nowrap border-y-4 border-black flex items-center shadow-2xl">
      
      {/* Dòng chữ chạy ngang liên tục */}
      <div className="flex animate-[marquee_25s_linear_infinite]">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-black text-5xl md:text-7xl font-black italic uppercase mx-8 tracking-tighter">
              NEXT DROP COMING SOON • NEXT DROP COMING SOON • NEXT DROP COMING SOON • NEXT DROP COMING SOON •
            </span>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Marquee;