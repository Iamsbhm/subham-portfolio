import React, { useState } from 'react';
import { Sparkles, ArrowRight, MousePointer2, Layers, PenTool, LayoutGrid, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [isToggleActive, setIsToggleActive] = useState(false);

  const scrollToCaseStudy = () => {
    const el = document.getElementById('case-study');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF6EC] select-none">
      
      {/* ========================================================
          BACKGROUND DESIGN DOODLES & VECTOR ACCENTS
          ======================================================== */}
      
      {/* Doodle 1: Top-Left Bezier Pen Curve */}
      <div className="absolute top-20 left-4 sm:left-12 lg:left-16 hidden md:flex items-center space-x-2 pointer-events-none opacity-80">
        <svg className="w-20 h-16 text-brand-orange/60" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M10 70 C 20 20, 60 70, 90 20" strokeDasharray="4 4" />
          <circle cx="10" cy="70" r="4" fill="white" stroke="#FF5E2B" strokeWidth="2" />
          <circle cx="90" cy="20" r="4" fill="#FF5E2B" />
        </svg>
      </div>

      {/* Doodle 2: Mid-Left Floating Figma Cursor */}
      <div className="absolute top-1/2 -translate-y-8 left-3 sm:left-8 lg:left-12 hidden lg:flex items-center space-x-1.5 pointer-events-none animate-bounce" style={{ animationDuration: '4s' }}>
        <MousePointer2 size={18} className="text-brand-orange fill-brand-orange" />
        <div className="bg-brand-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
          Subham • Lead Designer
        </div>
      </div>

      {/* ========================================================
          HERO MAIN CONTAINER
          ======================================================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Availability & Hello Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 relative">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/80 text-emerald-900 text-xs font-bold tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{personalInfo.availability}</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-5 py-1.5 rounded-full bg-white/90 border border-gray-300/80 shadow-sm text-xs font-semibold text-gray-800 tracking-wide">
            <Sparkles size={14} className="text-brand-orange" />
            <span>Fintech & SaaS Product Designer</span>
          </div>
        </div>

        {/* ========================================================
            ICONIC EDITORIAL TYPOGRAPHY (Matching Exact Reference)
            ======================================================== */}
        <div className="max-w-4xl mx-auto mb-10 text-[#111115] flex flex-col items-center sm:items-start pl-0 sm:pl-4 lg:pl-12">
          
          {/* ROW 1: SUBHAM + TOGGLE SWITCH + CONNECTOR */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 relative w-full">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight uppercase leading-none text-[#111115]">
              SUBHAM
            </h1>

            {/* Interactive Toggle Switch Component */}
            <div className="relative flex items-center">
              <button
                onClick={() => setIsToggleActive(!isToggleActive)}
                className="relative w-28 sm:w-36 md:w-44 h-12 sm:h-16 md:h-20 rounded-full border-2 border-[#111115] bg-[#EFE9D7] p-1 transition-all duration-300 focus:outline-none cursor-pointer flex items-center shadow-inner hover:scale-105"
                aria-label="Toggle Mode"
                title="Click to toggle UI / UX!"
              >
                <div
                  className={`w-9 sm:w-12 md:w-16 h-9 sm:h-12 md:h-16 rounded-full border-2 border-[#111115] shadow-md transition-all duration-300 flex items-center justify-center font-bold text-xs sm:text-sm ${
                    isToggleActive
                      ? 'translate-x-14 sm:translate-x-20 md:translate-x-24 bg-brand-orange text-white border-brand-orange'
                      : 'translate-x-0 bg-[#FAF6EC] text-[#111115]'
                  }`}
                >
                  {isToggleActive ? 'UX' : 'UI'}
                </div>
              </button>

              {/* Top Dashed Connector Wire */}
              <svg className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-32 h-16 pointer-events-none" viewBox="0 0 120 60" fill="none">
                <path d="M 0 30 H 90 Q 110 30 110 50 V 60" stroke="#111115" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          {/* ROW 2: CIRCULAR NODE + PILL + KUMAR */}
          <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-4 mt-2 sm:mt-3 relative w-full">
            
            {/* Concentric Circle Node with Pill Connector */}
            <div className="flex items-center space-x-1.5 shrink-0 relative">
              <div className="w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 rounded-full border-2 border-[#111115] flex items-center justify-center bg-transparent">
                <div className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 rounded-full border-2 border-[#111115] bg-transparent" />
              </div>

              {/* Capsule connector */}
              <div className="w-6 sm:w-10 h-4 sm:h-6 rounded-full border-2 border-[#111115] bg-transparent" />

              {/* Dashed line dropping down to row 3 */}
              <svg className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-16 h-16 pointer-events-none" viewBox="0 0 60 60" fill="none">
                <path d="M 30 0 V 35 Q 30 50 50 50 H 60" stroke="#111115" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>

            {/* Text: KUMAR */}
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight uppercase leading-none text-[#111115]">
              KUMAR
            </h2>

            {/* Horizontal Dashed Line to Right */}
            <div className="hidden lg:flex flex-1 items-center ml-2">
              <svg className="w-full h-3" viewBox="0 0 200 6" fill="none">
                <line x1="0" y1="3" x2="200" y2="3" stroke="#111115" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          {/* ROW 3: VENN DIAGRAM + DESIGNER (OUTLINE) */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 mt-2 sm:mt-3 relative w-full">
            
            {/* Interlocking Venn Diagram Circles with Crosshair */}
            <div className="relative w-20 sm:w-28 md:w-36 h-12 sm:h-16 md:h-20 flex items-center justify-center shrink-0">
              <svg className="w-full h-full" viewBox="0 0 140 80" fill="none">
                <circle cx="48" cy="40" r="30" stroke="#111115" strokeWidth="2" />
                <circle cx="92" cy="40" r="30" stroke="#111115" strokeWidth="2" />
                <line x1="25" y1="40" x2="115" y2="40" stroke="#111115" strokeWidth="2" />
              </svg>
            </div>

            {/* Outline 'Designer' with 'creative' label */}
            <div className="relative inline-block">
              <span className="absolute -top-3 sm:-top-5 md:-top-6 right-1 sm:right-2 text-sm sm:text-lg md:text-xl font-extrabold text-[#111115] tracking-tight lowercase italic">
                creative
              </span>

              <span
                className="font-black italic tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl block leading-none select-none text-transparent"
                style={{
                  WebkitTextStroke: '2.5px #111115',
                }}
              >
                Designer
              </span>
            </div>

          </div>

        </div>

        {/* ========================================================
            HERO VALUE PROPOSITION & SPECIALTY TAGS
            ======================================================== */}
        <div className="max-w-2xl mx-auto space-y-4 text-center mt-6">
          <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed font-normal">
            Product-focused <span className="text-gray-950 font-extrabold">UI/UX Designer</span> with{' '}
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-brand-orange/10 text-brand-orange font-bold text-xs sm:text-sm">
              2+ years experience
            </span>{' '}
            crafting intuitive <span className="text-gray-950 font-extrabold">Fintech, SaaS & Mobile</span> ecosystems. Driven by human-centered design, scalable <span className="text-gray-950 font-extrabold">design systems</span>, and measurable conversion growth.
          </p>

          {/* Core Capability Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white border border-gray-300/80 text-xs font-semibold text-gray-800 shadow-sm hover:border-brand-orange hover:text-brand-orange transition-all cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Fintech & SaaS UX</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white border border-gray-300/80 text-xs font-semibold text-gray-800 shadow-sm hover:border-brand-orange hover:text-brand-orange transition-all cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span>Design Systems (Figma)</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white border border-gray-300/80 text-xs font-semibold text-gray-800 shadow-sm hover:border-brand-orange hover:text-brand-orange transition-all cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Mobile & Responsive Web</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white border border-gray-300/80 text-xs font-semibold text-gray-800 shadow-sm hover:border-brand-orange hover:text-brand-orange transition-all cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span>WCAG 2.1 AA Accessibility</span>
            </span>
          </div>

          {/* Quick CTAs for Hiring Managers */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={scrollToCaseStudy}
              className="px-6 py-3.5 rounded-full bg-[#111115] hover:bg-brand-orange text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center space-x-2 cursor-pointer group hover:scale-105"
            >
              <span>Explore Flagship Case Study</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/Subham_Kumar_Resume.pdf"
              download="Subham_Kumar_Resume.pdf"
              className="px-6 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center space-x-2 cursor-pointer hover:scale-105"
            >
              <Download size={15} />
              <span>Download CV / Resume</span>
            </a>

            <button
              onClick={scrollToContact}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-gray-100 text-gray-800 font-bold text-xs sm:text-sm border border-gray-300 transition-all shadow-sm cursor-pointer hover:border-brand-orange"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Bottom Metrics Bar for Recruiters */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-gray-200/90 shadow-sm relative">
          <div className="absolute -top-3 right-6 bg-brand-orange text-white text-[9px] font-bold font-mono px-2 py-0.5 rounded-md uppercase tracking-wider shadow-sm rotate-2">
            Verified Results
          </div>

          {personalInfo.metricsSummary.map((m, idx) => (
            <div key={idx} className="text-center p-2">
              <span className="block text-xl sm:text-2xl font-black text-brand-orange">{m.value}</span>
              <span className="block text-xs font-semibold text-gray-600 mt-0.5">{m.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
