import React, { useState } from 'react';
import { Sparkles, ArrowRight, MousePointer2, Download, Layers, PenTool, CheckCircle2 } from 'lucide-react';
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
    <section id="home" className="relative pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-[#FAF6EC] select-none">
      
      {/* ========================================================
          BACKGROUND VECTOR ACCENTS & DESIGN TOKENS
          ======================================================== */}
      
      {/* Top Left Subtle Bezier Pen Accent */}
      <div className="absolute top-16 left-6 hidden lg:flex items-center space-x-2 pointer-events-none opacity-70">
        <svg className="w-16 h-12 text-brand-orange/60" viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M10 50 C 20 15, 50 50, 70 15" strokeDasharray="3 3" />
          <circle cx="10" cy="50" r="3" fill="white" stroke="#FF5E2B" strokeWidth="1.5" />
          <circle cx="70" cy="15" r="3" fill="#FF5E2B" />
        </svg>
        <span className="text-[10px] font-mono text-gray-500 font-bold -rotate-6 bg-white/80 px-2 py-0.5 rounded border border-gray-200">
          ❖ design-tokens.fig
        </span>
      </div>

      {/* Top Right Mini Wireframe Doodle */}
      <div className="absolute top-16 right-8 hidden lg:flex flex-col items-center pointer-events-none opacity-80 rotate-6">
        <div className="bg-white/90 p-2 rounded-xl border border-dashed border-gray-300 shadow-sm space-y-1 w-20">
          <div className="w-full h-1.5 bg-brand-orange/40 rounded" />
          <div className="flex space-x-1">
            <div className="w-1/3 h-5 bg-gray-200 rounded" />
            <div className="w-2/3 h-5 bg-gray-100 rounded" />
          </div>
        </div>
        <span className="text-[9px] font-mono text-gray-400 mt-0.5">Wireframe</span>
      </div>

      {/* ========================================================
          MAIN HERO CONTAINER
          ======================================================== */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Availability & Hello Badge (Tightened top spacing) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 mb-5 relative">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-[11px] font-bold tracking-wide shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{personalInfo.availability}</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-4 py-1 rounded-full bg-white/90 border border-gray-300 shadow-xs text-[11px] font-semibold text-gray-800">
            <Sparkles size={13} className="text-brand-orange" />
            <span>Fintech & SaaS Product Designer</span>
          </div>
        </div>

        {/* ========================================================
            ICONIC EDITORIAL TYPOGRAPHY COMPOSITION (Tight & Connected)
            ======================================================== */}
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-[#111115] relative flex flex-col items-center sm:items-start pl-0 sm:pl-4 lg:pl-10">
          
          {/* Floating Figma Cursor Doodle attached near the header */}
          <div className="absolute -top-6 -left-6 hidden md:flex items-center space-x-1 pointer-events-none">
            <MousePointer2 size={16} className="text-brand-orange fill-brand-orange rotate-12" />
            <span className="bg-brand-orange text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow">
              Subham
            </span>
          </div>

          {/* ROW 1: SUBHAM + TOGGLE SWITCH + CONNECTING RIGHT WIRE */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 relative w-full">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter uppercase leading-[0.9] text-[#111115]">
              SUBHAM
            </h1>

            {/* Interactive Toggle Switch */}
            <div className="relative flex items-center">
              
              {/* Playful Hand-Drawn Arrow annotation pointing to toggle */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden sm:flex items-center space-x-1 pointer-events-none">
                <span className="text-[10px] font-bold font-sans text-brand-orange -rotate-6">
                  {isToggleActive ? 'UX Mode ⚡' : 'Click Toggle! 💡'}
                </span>
              </div>

              <button
                onClick={() => setIsToggleActive(!isToggleActive)}
                className="relative w-24 sm:w-32 md:w-40 h-11 sm:h-14 md:h-16 rounded-full border-2 border-[#111115] bg-[#EDE6D4] p-1 transition-all duration-300 focus:outline-none cursor-pointer flex items-center shadow-inner hover:scale-105"
                aria-label="Toggle Mode"
                title="Click to toggle UI / UX!"
              >
                <div
                  className={`w-8 sm:w-11 md:w-13 h-8 sm:h-11 md:h-13 rounded-full border-2 border-[#111115] shadow-md transition-all duration-300 flex items-center justify-center font-bold text-xs sm:text-sm ${
                    isToggleActive
                      ? 'translate-x-12 sm:translate-x-17 md:translate-x-22 bg-brand-orange text-white border-brand-orange'
                      : 'translate-x-0 bg-[#FAF6EC] text-[#111115]'
                  }`}
                >
                  {isToggleActive ? 'UX' : 'UI'}
                </div>
              </button>

              {/* Dashed connector wire looping from right of toggle down toward row 2 */}
              <svg className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 w-28 lg:w-36 h-20 pointer-events-none" viewBox="0 0 120 70" fill="none">
                <path d="M 0 35 H 85 Q 105 35 105 50 V 70" stroke="#111115" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          {/* ROW 2: CIRCULAR NODE + PILL + KUMAR + RIGHT DASHED LINE */}
          <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 -mt-1 sm:-mt-2 relative w-full">
            
            {/* Concentric Circle Node with Pill Connector */}
            <div className="flex items-center space-x-1.5 shrink-0 relative">
              <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full border-2 border-[#111115] flex items-center justify-center bg-transparent">
                <div className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 rounded-full border-2 border-[#111115] bg-transparent" />
              </div>

              {/* Capsule connector */}
              <div className="w-6 sm:w-8 md:w-10 h-3.5 sm:h-5 md:h-6 rounded-full border-2 border-[#111115] bg-transparent" />

              {/* Dashed wire dropping from bottom of node into Venn diagram in row 3 */}
              <svg className="hidden sm:block absolute top-full left-5 w-12 h-14 pointer-events-none" viewBox="0 0 50 60" fill="none">
                <path d="M 5 0 V 35 Q 5 50 25 50 H 45" stroke="#111115" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>

            {/* Text: KUMAR */}
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tighter uppercase leading-[0.9] text-[#111115]">
              KUMAR
            </h2>

            {/* Horizontal Dashed Line to Right (Matching user reference) */}
            <div className="hidden md:flex flex-1 items-center ml-2">
              <svg className="w-full h-3" viewBox="0 0 200 6" fill="none">
                <line x1="0" y1="3" x2="200" y2="3" stroke="#111115" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          {/* ROW 3: VENN DIAGRAM + DESIGNER (OUTLINE) */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-4 -mt-1 sm:-mt-2 relative w-full">
            
            {/* Interlocking Venn Diagram Circles with Crosshair */}
            <div className="relative w-18 sm:w-24 md:w-30 h-10 sm:h-14 md:h-18 flex items-center justify-center shrink-0">
              <svg className="w-full h-full" viewBox="0 0 120 70" fill="none">
                <circle cx="40" cy="35" r="26" stroke="#111115" strokeWidth="2" />
                <circle cx="80" cy="35" r="26" stroke="#111115" strokeWidth="2" />
                <line x1="20" y1="35" x2="100" y2="35" stroke="#111115" strokeWidth="2" />
              </svg>
            </div>

            {/* Outline 'Designer' with 'creative' label */}
            <div className="relative inline-block">
              <span className="absolute -top-2.5 sm:-top-4 md:-top-5 right-1 text-xs sm:text-base md:text-lg font-extrabold text-[#111115] tracking-tight lowercase italic">
                creative
              </span>

              <span
                className="font-black italic tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] block leading-[0.9] select-none text-transparent"
                style={{
                  WebkitTextStroke: '2.5px #111115',
                }}
              >
                Designer
              </span>
            </div>

            {/* Playful Scribble Starburst Doodle next to Designer */}
            <div className="hidden sm:block text-brand-orange opacity-80 ml-2">
              <svg className="w-8 h-8 animate-spin" style={{ animationDuration: '12s' }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>

          </div>

        </div>

        {/* ========================================================
            HERO VALUE PROPOSITION & SPECIALTY TAGS (Tightened Spacing)
            ======================================================== */}
        <div className="max-w-2xl mx-auto space-y-3.5 text-center mt-5">
          <p className="text-xs sm:text-sm md:text-base text-gray-800 leading-relaxed font-normal max-w-xl mx-auto">
            Product-focused <span className="text-gray-950 font-extrabold">UI/UX Designer</span> with{' '}
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-brand-orange/10 text-brand-orange font-bold text-xs">
              2+ years experience
            </span>{' '}
            crafting intuitive <span className="text-gray-950 font-extrabold">Fintech, SaaS & Mobile</span> ecosystems. Driven by user research, scalable <span className="text-gray-950 font-extrabold">design systems</span>, and measurable conversion growth.
          </p>

          {/* Core Capability Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-0.5">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-gray-300 text-[11px] font-semibold text-gray-800 shadow-xs hover:border-brand-orange hover:text-brand-orange transition-all cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Fintech & SaaS UX</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-gray-300 text-[11px] font-semibold text-gray-800 shadow-xs hover:border-brand-orange hover:text-brand-orange transition-all cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span>Design Systems (Figma)</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-gray-300 text-[11px] font-semibold text-gray-800 shadow-xs hover:border-brand-orange hover:text-brand-orange transition-all cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Mobile & Responsive Web</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white border border-gray-300 text-[11px] font-semibold text-gray-800 shadow-xs hover:border-brand-orange hover:text-brand-orange transition-all cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span>WCAG 2.1 AA Accessibility</span>
            </span>
          </div>

          {/* Quick CTAs for Hiring Managers */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <button
              onClick={scrollToCaseStudy}
              className="px-5 py-3 rounded-full bg-[#111115] hover:bg-brand-orange text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center space-x-2 cursor-pointer group hover:scale-105"
            >
              <span>Explore Flagship Case Study</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/Subham_Kumar_Resume.pdf"
              download="Subham_Kumar_Resume.pdf"
              className="px-5 py-3 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center space-x-2 cursor-pointer hover:scale-105"
            >
              <Download size={15} />
              <span>Download CV / Resume</span>
            </a>

            <button
              onClick={scrollToContact}
              className="px-5 py-3 rounded-full bg-white hover:bg-gray-100 text-gray-800 font-bold text-xs sm:text-sm border border-gray-300 transition-all shadow-xs cursor-pointer hover:border-brand-orange"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Bottom Metrics Bar for Recruiters */}
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-gray-200/90 shadow-xs relative">
          <div className="absolute -top-2.5 right-6 bg-brand-orange text-white text-[9px] font-bold font-mono px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs rotate-2">
            Verified Results
          </div>

          {personalInfo.metricsSummary.map((m, idx) => (
            <div key={idx} className="text-center p-1.5">
              <span className="block text-lg sm:text-xl font-black text-brand-orange">{m.value}</span>
              <span className="block text-[11px] font-semibold text-gray-600 mt-0.5">{m.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
