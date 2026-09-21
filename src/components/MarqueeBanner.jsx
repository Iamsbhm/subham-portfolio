import React from 'react';
import { marqueeItems } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';

const MarqueeBanner = () => {
  // Duplicate array for seamless infinite looping
  const doubledItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative py-4 bg-gradient-to-r from-brand-orange via-[#FF6D3A] to-brand-orange text-white overflow-hidden shadow-lg border-y border-orange-400/30 my-8">
      
      {/* Infinite Ticker Track */}
      <div className="flex w-max animate-marquee space-x-8 items-center font-extrabold text-lg sm:text-xl md:text-2xl tracking-wider uppercase select-none">
        {doubledItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-6 shrink-0">
            <span className="drop-shadow-sm">{item}</span>
            <span className="text-white/80">✦</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MarqueeBanner;
