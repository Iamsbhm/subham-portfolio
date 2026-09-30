import React, { useState } from 'react';
import { Sparkles, ArrowRight, MousePointer2, Download, Layers, PenTool, CheckCircle2, TrendingUp, Check, Eye } from 'lucide-react';
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
          LEFT SIDE DOODLES & BLUEPRINT DESIGN ARTIFACTS
          ======================================================== */}
      
      {/* Left Doodle 1: Top-Left Bezier Pen Curve & Token */}
      <div className="absolute top-14 left-4 xl:left-12 hidden lg:flex items-center space-x-2 pointer-events-none opacity-85 hover:opacity-100 transition-opacity">
        <svg className="w-20 h-14 text-brand-orange/70" viewBox="0 0 90 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M10 50 C 25 10, 60 50, 80 15" strokeDasharray="3 3" />
          <circle cx="10" cy="50" r="3.5" fill="white" stroke="#FF5E2B" strokeWidth="2" />
          <circle cx="80" cy="15" r="3.5" fill="#FF5E2B" />
          <line x1="80" y1="15" x2="60" y2="35" stroke="#FF5E2B" strokeWidth="1.5" />
        </svg>
        <div className="bg-white/95 backdrop-blur-xs border border-brand-orange/30 text-brand-orange px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold shadow-xs -rotate-6">
          ❖ design-tokens.fig
        </div>
      </div>

      {/* Left Doodle 2: Mid-Left Color Palette Token Swatches */}
      <div className="absolute top-1/2 -translate-y-20 left-4 xl:left-12 hidden xl:flex flex-col space-y-1.5 pointer-events-none opacity-85">
        <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-2xl border border-gray-300 shadow-xs space-y-2 -rotate-3">
          <div className="flex items-center justify-between space-x-2 pb-1 border-b border-gray-200">
            <span className="text-[9px] font-mono font-bold text-gray-600">🎨 UI Palette</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </div>
          <div className="flex space-x-1.5">
            <div className="w-5 h-5 rounded-md bg-[#10B981] shadow-xs" title="Emerald Primary" />
            <div className="w-5 h-5 rounded-md bg-[#FF5E2B] shadow-xs" title="Brand Orange" />
            <div className="w-5 h-5 rounded-md bg-[#3B82F6] shadow-xs" title="Travel Blue" />
            <div className="w-5 h-5 rounded-md bg-[#111115] shadow-xs" title="Dark Canvas" />
          </div>
          <span className="text-[8px] font-mono text-gray-500 block text-center">Auto-Layout: 8px Soft Grid</span>
        </div>
      </div>

      {/* Left Doodle 3: Lower-Left Hand-Drawn Arrow pointing to CTA */}
      <div className="absolute bottom-28 left-6 xl:left-16 hidden lg:flex flex-col items-start pointer-events-none opacity-85">
        <span className="text-[11px] font-bold font-sans text-brand-orange rotate-6 mb-1">
          ✦ 100% User-Validated
        </span>
        <svg className="w-16 h-12 text-brand-orange rotate-12" viewBox="0 0 60 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M10 10 Q 30 35, 50 35" />
          <path d="M40 28 L 50 35 L 42 42" />
        </svg>
      </div>

      {/* ========================================================
          RIGHT SIDE DOODLES & BLUEPRINT DESIGN ARTIFACTS
          ======================================================== */}
      
      {/* Right Doodle 1: Top-Right Low-Fi Wireframe Component */}
      <div className="absolute top-14 right-4 xl:right-12 hidden lg:flex flex-col items-center pointer-events-none opacity-85 rotate-6">
        <div className="bg-white/90 backdrop-blur-xs p-2.5 rounded-2xl border-2 border-dashed border-gray-300 shadow-xs space-y-1.5 w-24">
          <div className="flex items-center justify-between">
            <div className="w-10 h-1.5 bg-brand-orange/40 rounded" />
            <span className="text-[8px] font-mono text-gray-400">v2.4</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-1/3 h-6 bg-gray-200 rounded" />
            <div className="w-2/3 h-6 bg-gray-100 rounded space-y-1 p-0.5">
              <div className="w-full h-1 bg-gray-300 rounded" />
              <div className="w-3/4 h-1 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
        <span className="text-[9px] font-mono text-gray-500 font-semibold mt-1">Wireframe ➔ Prototype</span>
      </div>

      {/* Right Doodle 2: Mid-Right Verified Impact Sparkline Card */}
      <div className="absolute top-1/2 -translate-y-20 right-4 xl:right-12 hidden xl:flex flex-col pointer-events-none opacity-85">
        <div className="bg-white/95 backdrop-blur-xs p-3 rounded-2xl border border-gray-300 shadow-xs space-y-1.5 rotate-3">
          <div className="flex items-center justify-between space-x-2">
            <span className="text-[9px] font-mono font-bold text-gray-500 uppercase">A/B Testing</span>
            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              Verified ✓
            </span>
          </div>
          <div className="flex items-baseline space-x-1.5">
            <span className="text-lg font-black text-brand-orange font-mono">+38.4%</span>
            <span className="text-[9px] text-gray-600 font-medium">Conversion Lift</span>
          </div>
          {/* Sparkline mini wave */}
          <svg className="w-24 h-5 text-emerald-500" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M 0 15 Q 25 18, 40 10 T 70 8 T 100 2" />
          </svg>
        </div>
      </div>

      {/* Right Doodle 3: Lower-Right Curved Arrow pointing to Contact CTA */}
      <div className="absolute bottom-28 right-6 xl:right-16 hidden lg:flex flex-col items-end pointer-events-none opacity-85">
        <span className="text-[11px] font-bold font-sans text-brand-orange -rotate-6 mb-1">
          Let's talk design! 💬
        </span>
        <svg className="w-16 h-12 text-brand-orange -scale-x-100 rotate-12" viewBox="0 0 60 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M10 10 Q 30 35, 50 35" />
          <path d="M40 28 L 50 35 L 42 42" />
        </svg>
      </div>

      {/* ========================================================
          MAIN HERO CONTAINER
          ======================================================== */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Availability & Hello Badge */}
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
            ICONIC EDITORIAL TYPOGRAPHY COMPOSITION (Exact Reference Match)
            ======================================================== */}
        <div className="max-w-4xl mx-auto text-[#111115] relative flex flex-col items-center sm:items-start pl-0 sm:pl-4 lg:pl-8">
          
          {/* Floating Figma Cursor Doodle */}
          <div className="absolute -top-6 -left-6 hidden md:flex items-center space-x-1 pointer-events-none">
            <MousePointer2 size={16} className="text-brand-orange fill-brand-orange rotate-12" />
            <span className="bg-brand-orange text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-xs">
              Subham • Lead UX
            </span>
          </div>

          {/* ROW 1: SUBHAM + TOGGLE SWITCH + CONNECTING RIGHT WIRE */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 relative w-full">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-black tracking-tighter uppercase leading-none text-[#111115]">
              SUBHAM
            </h1>

            {/* Interactive Toggle Switch */}
            <div className="relative flex items-center">
              
              {/* Playful Hand-Drawn Annotation Arrow */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden sm:flex items-center space-x-1 pointer-events-none">
                <span className="text-[10px] font-bold font-sans text-brand-orange -rotate-6">
                  {isToggleActive ? 'UX Mode ⚡' : 'Click Toggle! 💡'}
                </span>
              </div>

              <button
                onClick={() => setIsToggleActive(!isToggleActive)}
                className="relative w-24 sm:w-32 md:w-36 h-12 sm:h-14 md:h-16 rounded-full border-2 border-[#111115] bg-[#EDE6D4] p-1 transition-all duration-300 focus:outline-none cursor-pointer flex items-center shadow-inner hover:scale-105"
                aria-label="Toggle Mode"
                title="Click to toggle UI / UX!"
              >
                <div
                  className={`w-9 sm:w-11 md:w-13 h-9 sm:h-11 md:h-13 rounded-full border-2 border-[#111115] shadow-md transition-all duration-300 flex items-center justify-center font-bold text-xs sm:text-sm ${
                    isToggleActive
                      ? 'translate-x-11 sm:translate-x-17 md:translate-x-19 bg-brand-orange text-white border-brand-orange'
                      : 'translate-x-0 bg-[#FAF6EC] text-[#111115]'
                  }`}
                >
                  {isToggleActive ? 'UX' : 'UI'}
                </div>
              </button>

              {/* Top Dashed Connector Wire looping down toward Row 2 */}
              <svg className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-36 xl:w-44 h-24 pointer-events-none z-0" viewBox="0 0 160 90" fill="none">
                <path d="M 0 35 H 120 Q 145 35 145 60 V 90" stroke="#111115" strokeWidth="2" strokeDasharray="5 5" />
              </svg>
            </div>
          </div>

          {/* ROW 2: CIRCULAR NODE + PILL + KUMAR + RIGHT DASHED LINE */}
          <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-4 -mt-1 sm:-mt-2 relative w-full">
            
            {/* Concentric Circle Node with Pill Connector */}
            <div className="flex items-center space-x-1.5 shrink-0 relative">
              <div className="w-11 sm:w-13 md:w-15 h-11 sm:h-13 md:h-15 rounded-full border-2 border-[#111115] flex items-center justify-center bg-transparent">
                <div className="w-3.5 sm:w-4 md:w-4.5 h-3.5 sm:h-4 md:h-4.5 rounded-full border-2 border-[#111115] bg-transparent" />
              </div>

              {/* Capsule connector */}
              <div className="w-6 sm:w-8 md:w-10 h-4 sm:h-5 md:h-6 rounded-full border-2 border-[#111115] bg-transparent" />

              {/* Vertical Dashed wire dropping directly into the Venn diagram below */}
              <svg className="hidden sm:block absolute top-full left-5.5 sm:left-6.5 w-6 h-12 pointer-events-none" viewBox="0 0 20 40" fill="none">
                <path d="M 10 0 V 40" stroke="#111115" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>

            {/* Text: KUMAR */}
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-black tracking-tighter uppercase leading-none text-[#111115]">
              KUMAR
            </h2>

            {/* Horizontal Dashed Line to Right */}
            <div className="hidden lg:flex flex-1 items-center ml-2 relative">
              <svg className="w-full h-4" viewBox="0 0 220 10" fill="none">
                <line x1="0" y1="5" x2="220" y2="5" stroke="#111115" strokeWidth="2" strokeDasharray="5 5" />
              </svg>
            </div>
          </div>

          {/* ROW 3: VENN DIAGRAM + DESIGNER (OUTLINE) */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 mt-1 sm:mt-2 relative w-full">
            
            {/* Interlocking Venn Diagram Circles with Crosshair */}
            <div className="relative w-20 sm:w-24 md:w-28 h-12 sm:h-14 md:h-16 flex items-center justify-center shrink-0">
              <svg className="w-full h-full" viewBox="0 0 130 80" fill="none">
                <circle cx="45" cy="40" r="30" stroke="#111115" strokeWidth="2" />
                <circle cx="85" cy="40" r="30" stroke="#111115" strokeWidth="2" />
                <line x1="20" y1="40" x2="110" y2="40" stroke="#111115" strokeWidth="2" />
              </svg>
            </div>

            {/* Outline 'Designer' with 'product' label */}
            <div className="relative inline-block pt-1">
              {/* Floating 'product' label positioned on top of the right letters with clean breathing room */}
              <span className="absolute -top-4 sm:-top-5 md:-top-6 right-3 text-sm sm:text-lg md:text-xl font-extrabold text-[#111115] tracking-tight lowercase italic">
                product
              </span>

              <span
                className="font-black italic tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] block leading-none select-none text-transparent"
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
