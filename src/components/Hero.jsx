import React from 'react';
import { Sparkles, ArrowRight, MousePointer2, Layers, PenTool, LayoutGrid, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const scrollToCaseStudy = () => {
    const el = document.getElementById('case-study');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#FAF9F6] select-none">
      
      {/* ========================================================
          BACKGROUND DESIGN DOODLES & VECTOR ACCENTS
          ======================================================== */}
      
      {/* Doodle 1: Top-Left Bezier Pen Curve & Component Token */}
      <div className="absolute top-24 left-6 sm:left-16 lg:left-24 hidden md:flex items-center space-x-2 pointer-events-none opacity-80 hover:opacity-100 transition-opacity">
        <svg className="w-24 h-20 text-brand-orange/60" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          {/* S-curve bezier */}
          <path d="M10 70 C 20 20, 60 70, 90 20" strokeDasharray="4 4" />
          {/* Anchor handle */}
          <circle cx="10" cy="70" r="4" fill="white" stroke="#FF5E2B" strokeWidth="2" />
          <circle cx="90" cy="20" r="4" fill="#FF5E2B" />
          <line x1="90" y1="20" x2="70" y2="40" stroke="#FF5E2B" strokeWidth="1.5" />
        </svg>
        <div className="bg-white/90 border border-brand-orange/40 text-brand-orange px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold shadow-sm -rotate-6">
          ❖ design-tokens.fig
        </div>
      </div>

      {/* Doodle 2: Top-Right Wireframe Layout Doodle */}
      <div className="absolute top-28 right-6 sm:right-16 lg:right-24 hidden md:flex flex-col items-center pointer-events-none opacity-85">
        <div className="relative bg-white/80 backdrop-blur-sm p-3 rounded-2xl border-2 border-dashed border-gray-300 shadow-sm rotate-6 hover:rotate-0 transition-transform">
          {/* Mini Wireframe Sketch */}
          <div className="w-24 h-16 rounded-lg bg-gray-50 border border-gray-200 p-1.5 space-y-1">
            <div className="w-full h-2 bg-brand-orange/30 rounded" />
            <div className="flex space-x-1">
              <div className="w-1/3 h-8 bg-gray-200 rounded" />
              <div className="w-2/3 h-8 bg-gray-100 rounded space-y-1 p-0.5">
                <div className="w-full h-1 bg-gray-300 rounded" />
                <div className="w-3/4 h-1 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
          {/* Sparkle doodle next to wireframe */}
          <svg className="absolute -top-3 -right-3 w-6 h-6 text-brand-orange animate-spin" style={{ animationDuration: '8s' }} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>
        <span className="text-[10px] font-mono text-gray-400 mt-1 font-semibold">Low-Fi Wireframe</span>
      </div>

      {/* Doodle 3: Mid-Left Floating Figma Cursor */}
      <div className="absolute top-1/2 -translate-y-12 left-4 sm:left-12 lg:left-20 hidden lg:flex items-center space-x-1.5 pointer-events-none animate-bounce" style={{ animationDuration: '4s' }}>
        <MousePointer2 size={20} className="text-brand-orange fill-brand-orange" />
        <div className="bg-brand-orange text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
          Subham • UX Lead
        </div>
      </div>

      {/* Doodle 4: Mid-Right Hand-Drawn Curved Arrow pointing to CTA */}
      <div className="absolute top-1/2 -translate-y-4 right-4 sm:right-12 lg:right-28 hidden lg:flex flex-col items-center pointer-events-none opacity-85">
        <span className="text-xs font-bold font-sans text-brand-orange -rotate-12 mb-1">
          Explore Case Study! 🚀
        </span>
        <svg className="w-16 h-16 text-brand-orange -scale-x-100 rotate-45" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M10 10 Q 30 15, 35 40" />
          <path d="M28 35 L 35 40 L 40 32" />
        </svg>
      </div>

      {/* Doodle 5: Playful Scribble Star Bursts near bottom */}
      <div className="absolute bottom-24 left-8 hidden sm:block pointer-events-none text-brand-orange/40">
        <svg className="w-10 h-10" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M25 5 L 25 45" />
          <path d="M5 25 L 45 25" />
          <path d="M10 10 L 40 40" />
          <path d="M10 40 L 40 10" />
        </svg>
      </div>

      {/* Doodle 6: Spiral doodle near bottom right */}
      <div className="absolute bottom-24 right-8 hidden sm:block pointer-events-none text-brand-orange/40">
        <svg className="w-12 h-12" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M25 25 m -20 0 a 20 20 0 1 0 40 0 a 15 15 0 1 0 -30 0 a 10 10 0 1 0 20 0 a 5 5 0 1 0 -10 0" />
        </svg>
      </div>

      {/* ========================================================
          HERO MAIN CONTENT
          ======================================================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Availability & Hello Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 relative">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{personalInfo.availability}</span>
          </div>

          <div className="relative inline-flex items-center px-6 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-semibold text-gray-800 tracking-wide">
            {/* Doodle lines on top left */}
            <svg className="absolute -top-3 -left-3 w-6 h-6 text-brand-orange animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12C4 8 8 4 12 4" strokeLinecap="round" />
              <path d="M2 7C4 5 7 2 12 2" strokeLinecap="round" />
            </svg>
            <span>{personalInfo.heroTag}</span>
          </div>

        </div>

        {/* Hero Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8 relative">
          
          {/* Mini corner scribble on title */}
          <div className="absolute -top-4 left-4 hidden sm:block text-brand-orange">
            <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 25 Q 15 5, 25 15" />
            </svg>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#111115] tracking-tight leading-[1.1]">
            I’m <span className="text-brand-orange relative inline-block">
              {personalInfo.name}
              {/* Decorative underline burst */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-orange/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 50 20, 100 10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>,
            <br className="hidden sm:inline" /> {personalInfo.role}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Quick CTAs for Hiring Managers */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              onClick={scrollToCaseStudy}
              className="px-6 py-3 rounded-full bg-[#111115] hover:bg-brand-orange text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center space-x-2 cursor-pointer group hover:scale-105"
            >
              <span>Explore Flagship Case Study</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/Subham_Kumar_Resume.pdf"
              download="Subham_Kumar_Resume.pdf"
              className="px-6 py-3 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center space-x-2 cursor-pointer hover:scale-105"
            >
              <Download size={15} />
              <span>Download CV / Resume</span>
            </a>

            <button
              onClick={scrollToContact}
              className="px-6 py-3 rounded-full bg-white hover:bg-gray-100 text-gray-800 font-bold text-xs sm:text-sm border border-gray-300 transition-all shadow-sm cursor-pointer hover:border-brand-orange"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Bottom Metrics Bar for Recruiters */}
        <div className="max-w-4xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-gray-200/90 shadow-sm relative">
          
          {/* Subtle doodle badge attached to metrics */}
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
