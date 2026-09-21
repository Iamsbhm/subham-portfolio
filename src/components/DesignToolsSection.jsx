import React from 'react';
import { designTools } from '../data/portfolioData';
import { Cpu, Palette, Sparkles } from 'lucide-react';

const DesignToolsSection = () => {
  return (
    <section className="py-16 bg-[#FAF9F6] border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Design Stack & Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111115] tracking-tight">
            Tools & Software I <span className="text-brand-orange">Master</span>
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Utilizing industry-standard tools to translate complex ideas into scalable design artifacts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designTools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-brand-orange/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl p-2.5 rounded-xl bg-gray-50 border border-gray-100 group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-orange transition-colors text-base">
                      {tool.name}
                    </h3>
                    <span className="text-xs text-gray-500 font-medium">{tool.level}</span>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded-full">
                  {tool.percent}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-brand-orange to-[#FF8554] h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${tool.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DesignToolsSection;
