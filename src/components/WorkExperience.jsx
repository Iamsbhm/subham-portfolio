import React from 'react';
import { workExperience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, ArrowUpRight, Award, ShieldCheck, Zap } from 'lucide-react';

const WorkExperience = () => {
  return (
    <section id="about" className="py-20 bg-[#FAF9F6] relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[11px] font-bold tracking-wider uppercase font-mono mb-3">
            <Briefcase size={13} />
            <span>Career & Impact Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#111115] tracking-tight">
            My <span className="text-brand-orange">Work Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mt-3">
            Driving user growth, design system consistency, and measurable product impact across fintech and SaaS platforms.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-orange to-amber-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Central Line */}
          <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] border-l-2 border-dashed border-gray-300 z-0 hidden md:block" />

          <div className="space-y-12 sm:space-y-16">
            {workExperience.map((exp, index) => {
              const isCurrent = index === 0;

              return (
                <div key={exp.id} className="relative z-10 grid grid-cols-1 md:grid-cols-11 items-center gap-4 md:gap-8 group">
                  
                  {/* Left Column: Role & Period */}
                  <div className="md:col-span-5 text-center md:text-right">
                    {isCurrent ? (
                      <div className="inline-flex md:hidden items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Current Position</span>
                      </div>
                    ) : (
                      <div className="inline-flex md:hidden items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-2">
                        <span>{exp.type}</span>
                      </div>
                    )}

                    <h3 className="text-2xl sm:text-3xl font-black text-[#111115] group-hover:text-brand-orange transition-colors tracking-tight">
                      {exp.title}
                    </h3>
                    
                    <div className="mt-2 flex items-center justify-center md:justify-end gap-2 text-sm font-semibold text-gray-600">
                      <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs">
                        <Calendar size={13} className="text-brand-orange" />
                        <span>{exp.period}</span>
                      </span>
                    </div>

                    {/* Quick Metrics Callout under role for desktop */}
                    <div className="hidden md:flex flex-col items-end mt-4 space-y-1.5">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider font-mono">
                        Key Deliverables
                      </div>
                      <div className="flex flex-wrap justify-end gap-1.5 max-w-xs">
                        {exp.impactTags && exp.impactTags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[11px] font-semibold bg-white border border-gray-200/90 text-gray-700 px-2.5 py-0.5 rounded-md shadow-2xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Column: Dotted Timeline Node */}
                  <div className="md:col-span-1 hidden md:flex justify-center py-2 md:py-0">
                    {isCurrent ? (
                      /* Active / Current Orange Gear/Sunburst Node */
                      <div className="relative flex items-center justify-center">
                        <div className="w-11 h-11 rounded-full bg-brand-orange/20 animate-ping absolute" />
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-brand-orange flex items-center justify-center shadow-md relative z-10">
                          <div className="w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Past Internship Node */
                      <div className="w-9 h-9 rounded-full bg-white border-2 border-[#111115] flex items-center justify-center shadow-sm group-hover:border-brand-orange transition-colors">
                        <div className="w-4 h-4 rounded-full bg-[#111115] group-hover:bg-brand-orange transition-colors flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Company, Context & Detailed Bullets Card */}
                  <div className="md:col-span-5 bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-gray-200 hover:border-brand-orange/40 hover:shadow-md transition-all text-left">
                    
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gray-100">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xl sm:text-2xl font-black text-[#111115] tracking-tight">
                            {exp.company}
                          </h4>
                          {exp.location && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                              <MapPin size={11} className="text-brand-orange" />
                              <span>{exp.location}</span>
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-semibold text-brand-orange block mt-0.5">
                          {exp.roleFocus || "Product Design"}
                        </span>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 shadow-2xs ${
                        isCurrent
                          ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                          : 'text-blue-700 bg-blue-50 border-blue-200'
                      }`}>
                        {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                        {exp.type}
                      </span>
                    </div>

                    {/* Brief Overview */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-3 mb-4 font-normal">
                      {exp.description}
                    </p>

                    {/* Detailed Achievement Bullets */}
                    {exp.achievements && (
                      <div className="space-y-3 pt-2">
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start space-x-2.5 text-xs sm:text-[13px] text-gray-700 leading-relaxed group/item">
                            <div className="p-0.5 rounded-full bg-orange-50 border border-orange-200 mt-0.5 shrink-0 group-hover/item:bg-brand-orange group-hover/item:border-brand-orange transition-colors">
                              <CheckCircle2 size={12} className="text-brand-orange group-hover/item:text-white transition-colors" />
                            </div>
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Mobile impact tags */}
                    <div className="md:hidden flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-gray-100">
                      {exp.impactTags && exp.impactTags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>

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
