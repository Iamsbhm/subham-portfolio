import React, { useState } from 'react';
import { designProcess } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';

const DesignProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF9F6] to-white border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Product Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111115] tracking-tight">
            My Design <span className="text-brand-orange">Process</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3">
            A proven 4-stage framework ensuring every product is backed by data, validated by users, and built for scale.
          </p>
        </div>

        {/* 4 Steps Interactive Selector */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {designProcess.map((proc, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={proc.step}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-3xl text-left border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  isActive
                    ? 'bg-[#141418] text-white border-brand-orange shadow-xl scale-[1.02]'
                    : 'bg-white text-gray-800 border-gray-200 hover:border-brand-orange/50 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-black ${isActive ? 'text-brand-orange' : 'text-gray-400'}`}>
                    {proc.step}
                  </span>
                  {isActive && <CheckCircle2 size={18} className="text-brand-orange" />}
                </div>

                <h3 className={`font-bold text-lg leading-snug ${isActive ? 'text-white' : 'text-gray-900'}`}>
                  {proc.name}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Box */}
        <div className="bg-[#141418] text-white p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-brand-orange/20 px-3 py-1 rounded-full">
                Stage {designProcess[activeStep].step} Focus
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                {designProcess[activeStep].name}
              </h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {designProcess[activeStep].desc}
              </p>
            </div>

            <div className="shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-brand-orange/30">
                {designProcess[activeStep].step}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DesignProcessSection;
