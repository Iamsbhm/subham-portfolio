import React, { useState } from 'react';
import { ArrowUpRight, Layers, Layout, Monitor } from 'lucide-react';
import { expertiseCategories } from '../data/portfolioData';

const Expertise = () => {
  const [activeIndex, setActiveIndex] = useState(1); // default middle item active

  return (
    <section id="service" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6]">
      {/* Outer Dark Container matching screenshot */}
      <div className="max-w-6xl mx-auto bg-gradient-to-b from-[#141418] via-[#0E0E12] to-[#0A0A0D] rounded-3xl p-6 sm:p-10 md:p-14 text-white shadow-2xl relative overflow-hidden border border-white/10">
        
        {/* Subtle dark texture background glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Title */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            My <span className="text-brand-orange">Expertise</span>
          </h2>
        </div>

        {/* Cards Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {expertiseCategories.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`group relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-5 transition-all duration-500 hover:border-brand-orange/50 hover:bg-white/10 cursor-pointer flex flex-col justify-between overflow-hidden shadow-xl ${
                  index === activeIndex ? 'ring-2 ring-brand-orange/60 bg-white/10' : ''
                }`}
              >
                {/* Card Header Title */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* UI Design Screen Preview Frame */}
                <div className="relative rounded-xl overflow-hidden bg-black/40 border border-white/10 aspect-[4/3] my-2 group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                  {/* Subtle Glass Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Bottom Circular Action Arrow Button matching design */}
                <div className="mt-4 flex items-center justify-end">
                  <div className="w-12 h-12 rounded-full bg-[#111115] border border-white/20 group-hover:border-brand-orange group-hover:bg-brand-orange text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
                    <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center space-x-2 mt-10 relative z-10">
          {expertiseCategories.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIndex(dotIdx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                dotIdx === activeIndex ? 'w-8 bg-brand-orange' : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;
