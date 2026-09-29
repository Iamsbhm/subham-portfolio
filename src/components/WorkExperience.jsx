import React from 'react';
import { workExperience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

const WorkExperience = () => {
  return (
    <section id="about" className="py-20 bg-[#FAF9F6] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2 font-mono">
            CAREER & IMPACT MILESTONES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111115] tracking-tight">
            My <span className="text-brand-orange">Work Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-orange to-amber-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline Table Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Central Line (Dashed/Dotted Track) */}
          <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] border-l-2 border-dashed border-gray-300 z-0 hidden md:block" />

          <div className="space-y-12 sm:space-y-16">
            {workExperience.map((exp, index) => {
              const isCurrent = index === 0;

              return (
                <div key={exp.id} className="relative z-10 grid grid-cols-1 md:grid-cols-11 items-center gap-4 md:gap-8 group">
                  
                  {/* Left Column: Role & Period */}
                  <div className="md:col-span-5 text-center md:text-right">
                    <div className="inline-flex md:hidden items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Current Position</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-brand-orange transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mt-1 flex items-center justify-center md:justify-end gap-1.5">
                      <Calendar size={14} className="text-brand-orange" />
                      <span>{exp.period}</span>
                    </p>
                  </div>

                  {/* Center Column: Dotted Node */}
                  <div className="md:col-span-1 hidden md:flex justify-center py-2 md:py-0">
                    {isCurrent ? (
                      /* Active / Current Orange Gear/Sunburst Node */
                      <div className="relative flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-brand-orange/20 animate-ping absolute" />
                        <div className="w-9 h-9 rounded-full bg-white border-2 border-brand-orange flex items-center justify-center shadow-md">
                          <div className="w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Past Node matching design */
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-800 flex items-center justify-center shadow-sm group-hover:border-brand-orange transition-colors">
                        <div className="w-3.5 h-3.5 rounded-full bg-gray-800 group-hover:bg-brand-orange transition-colors" />
                      </div>
                    )}
                  </div>

                  {/* Right Column: Company & Type */}
                  <div className="md:col-span-5 text-center md:text-left bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-200/80">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                      <h4 className="text-xl font-extrabold text-gray-900">
                        {exp.company}
                      </h4>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 w-max mx-auto md:mx-0">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    {exp.achievements && (
                      <div className="space-y-1.5 pt-2 border-t border-gray-100 text-left">
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start space-x-2 text-xs text-gray-700">
                            <CheckCircle2 size={13} className="text-brand-orange shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WorkExperience;
