import React from 'react';
import { workExperience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, Building2 } from 'lucide-react';

const WorkExperience = () => {
  return (
    <section id="about" className="py-24 bg-[#FAF6EC] relative overflow-hidden">
      
      {/* Background Decor Ambient Circles */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-white/90 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-wider uppercase font-mono shadow-xs mb-3">
            <Briefcase size={14} />
            <span>Career Milestones & Proven Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#111115] tracking-tight">
            My <span className="text-brand-orange">Work Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Delivering measurable product growth, scalable design systems, and user-validated experiences for high-growth startups and enterprises.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-orange to-amber-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {workExperience.map((exp, index) => {
            const isCurrent = index === 0;

            return (
              <div 
                key={exp.id}
                className="bg-white rounded-3xl border border-gray-200/90 hover:border-brand-orange/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative group"
              >
                {/* Top Accent Strip */}
                <div className={`h-1.5 w-full ${
                  isCurrent 
                    ? 'bg-gradient-to-r from-brand-orange via-amber-400 to-emerald-400' 
                    : 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500'
                }`} />

                <div className="p-6 sm:p-8 md:p-10">
                  
                  {/* Card Header: Role, Company, Period, Badges */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-gray-100">
                    
                    {/* Left: Role, Company & Location */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-2xl sm:text-3xl font-black text-[#111115] tracking-tight group-hover:text-brand-orange transition-colors">
                          {exp.title}
                        </h3>
                        
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shadow-2xs ${
                          isCurrent 
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                            : 'bg-blue-50 border-blue-200 text-blue-800'
                        }`}>
                          {isCurrent && <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />}
                          <span>{exp.type}</span>
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-700">
                        <span className="flex items-center gap-1.5 text-base font-extrabold text-[#111115]">
                          <Building2 size={16} className="text-brand-orange" />
                          {exp.company}
                        </span>

                        {exp.location && (
                          <span className="flex items-center gap-1 text-xs text-gray-500 font-medium bg-[#FAF6EC] px-2.5 py-1 rounded-lg border border-gray-200">
                            <MapPin size={12} className="text-brand-orange shrink-0" />
                            <span>{exp.location}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right: Date Range & Focus Tag */}
                    <div className="flex flex-row lg:flex-col items-start lg:items-end justify-between gap-2 shrink-0">
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111115] text-white text-xs font-bold tracking-wide font-mono shadow-xs">
                        <Calendar size={13} className="text-brand-orange" />
                        <span>{exp.period}</span>
                      </div>

                      <span className="text-xs font-bold text-brand-orange bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-200/80">
                        {exp.roleFocus || "Product Design"}
                      </span>
                    </div>

                  </div>

                  {/* Context & Description */}
                  <div className="my-5">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                      {exp.description}
                    </p>
                  </div>

                  {/* Core Achievements List */}
                  {exp.achievements && (
                    <div className="space-y-3 bg-[#FAF9F6] p-5 sm:p-6 rounded-2xl border border-gray-200/80">
                      <div className="text-xs font-bold uppercase font-mono tracking-wider text-gray-500 mb-2 flex items-center gap-1.5">
                        <Sparkles size={13} className="text-brand-orange" />
                        <span>Key Contributions & Results</span>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-2.5">
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 leading-relaxed group/item">
                            <div className="p-1 rounded-full bg-emerald-100/80 border border-emerald-300 mt-0.5 shrink-0 text-emerald-800 group-hover/item:bg-brand-orange group-hover/item:border-brand-orange group-hover/item:text-white transition-colors">
                              <CheckCircle2 size={13} />
                            </div>
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom Deliverables & Skills Badges */}
                  {exp.impactTags && (
                    <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase font-mono text-gray-400 mr-1">
                        Domain Scope:
                      </span>
                      {exp.impactTags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-xs font-semibold bg-white hover:bg-brand-orange hover:text-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg shadow-2xs transition-all cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WorkExperience;
