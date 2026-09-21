import React from 'react';
import { services } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="service-list" className="py-20 bg-[#FAF9F6] border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-4 py-1.5 rounded-full inline-block mb-3">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111115] tracking-tight">
            Specialized Design <span className="text-brand-orange">Services</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-4">
            Helping startups, scale-ups, and established digital brands build human-centered interfaces that drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => (
            <div
              key={srv.num}
              className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-brand-orange/40 group-hover:text-brand-orange transition-colors">
                    {srv.num}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-brand-orange group-hover:text-white text-gray-700 flex items-center justify-center transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-orange transition-colors">
                  {srv.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mt-3">
                  {srv.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center space-x-2 text-xs font-semibold text-gray-500">
                <CheckCircle size={14} className="text-brand-orange" />
                <span>High-Fidelity Figma & Prototype Deliverables</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
