import React, { useState } from 'react';
import { featuredCaseStudies } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, Eye, ChevronLeft, ChevronRight, Sparkles, ShieldCheck, TrendingUp, Smartphone, Compass } from 'lucide-react';
import FullCaseStudyModal from './FullCaseStudyModal';

const FeaturedCaseStudy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentStudy = featuredCaseStudies[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === featuredCaseStudies.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredCaseStudies.length - 1 : prev - 1));
  };

  return (
    <section id="case-study" className="py-24 bg-gradient-to-b from-[#111115] via-[#16161D] to-[#111115] text-white relative overflow-hidden border-y border-white/10">
      
      {/* Dynamic Background Glow matching active case study theme */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: currentStudy.accentColor }}
      />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles size={14} className="text-brand-orange" />
              <span>Flagship UX Case Studies • Carousel View</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              In-Depth <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-300 to-emerald-400">Case Studies</span>
            </h2>
          </div>

          {/* Quick Carousel Tabs & Arrow Controls */}
          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            
            {/* Quick Switcher Tabs */}
            <div className="flex bg-black/50 p-1.5 rounded-full border border-white/10 space-x-1">
              {featuredCaseStudies.map((study, idx) => (
                <button
                  key={study.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'bg-white text-gray-950 shadow-md scale-105'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  0{idx + 1}. {study.client.split('/')[0].trim()}
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center space-x-1.5">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-white/10 hover:bg-brand-orange hover:text-white text-gray-300 transition-colors focus:outline-none cursor-pointer"
                aria-label="Previous Case Study"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-white/10 hover:bg-brand-orange hover:text-white text-gray-300 transition-colors focus:outline-none cursor-pointer"
                aria-label="Next Case Study"
              >
                <ChevronRight size={18} />
              </button>
            </div>

          </div>
        </div>

        {/* Highlight Metrics Grid for Active Case Study */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {currentStudy.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/30 transition-all"
            >
              <span className={`text-3xl sm:text-4xl font-black block tracking-tight ${currentStudy.accentText}`}>
                {m.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white mt-1 block">
                {m.label}
              </span>
              <span className="text-[11px] text-gray-400 mt-0.5 block">
                {m.change}
              </span>
            </div>
          ))}
        </div>

        {/* Main Case Study Feature Card (Two Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white/[0.03] border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden transition-all duration-500">
          
          {/* Left Column: Context, Problem & Solutions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-white/10 ${currentStudy.accentText}`}>
                  {currentStudy.badge}
                </span>
                <span className="text-xs text-gray-400">• {currentStudy.duration}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {currentStudy.title}
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-3">
                {currentStudy.context}
              </p>
            </div>

            {/* Key Research & UX Solutions list */}
            <div className="space-y-3 pt-1">
              <span className={`text-xs font-bold uppercase tracking-wider block ${currentStudy.accentText}`}>
                Core UX Solutions Delivered:
              </span>
              {currentStudy.researchInsights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
                  <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${currentStudy.accentText}`} />
                  <div>
                    <span className="text-xs font-bold text-white block">{item.title}</span>
                    <span className="text-xs text-gray-300">{item.solution}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button to open full case study modal */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className={`px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all shadow-lg flex items-center space-x-2 cursor-pointer hover:scale-105 ${
                  currentStudy.id.includes('wanderly')
                    ? 'bg-blue-500 hover:bg-blue-400 text-white shadow-blue-500/30'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-gray-950 shadow-emerald-500/30'
                }`}
              >
                <Eye size={18} />
                <span>Read Full Case Study</span>
                <ArrowRight size={16} />
              </button>

              <span className="text-xs text-gray-400 font-mono">
                {currentIndex + 1} of {featuredCaseStudies.length} Featured Studies
              </span>
            </div>
          </div>

          {/* Right Column: Top Mockup UI + Bottom Showcase Image */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* 1. Top Interactive Mockup UI Frame */}
            <div className={`relative rounded-2xl bg-gradient-to-br ${currentStudy.themeGradient} p-5 border ${currentStudy.accentBorder} shadow-2xl transition-all duration-500`}>
              
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className={`text-[11px] font-mono font-semibold ${currentStudy.accentText}`}>
                  {currentStudy.mockupUrl}
                </span>
              </div>

              {/* SLIDE 1: Lendify UI Mockup */}
              {currentStudy.id.includes('lendify') && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="bg-black/40 rounded-xl p-4 border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-300 font-semibold">Requested Business Loan</span>
                      <span className="text-lg font-black text-emerald-400">$65,000</span>
                    </div>
                    <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[75%]" />
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-400 mt-1.5">
                      <span>Min: $10,000</span>
                      <span>Term: 24 Months</span>
                      <span>Max: $100,000</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <span className="text-[10px] text-gray-400 block uppercase font-bold">Monthly Repayment</span>
                      <span className="text-base font-extrabold text-white mt-0.5 block">$2,940/mo</span>
                      <span className="text-[10px] text-emerald-400 font-semibold">Fixed 5.8% APR</span>
                    </div>

                    <div className="bg-emerald-500 text-gray-950 p-3 rounded-xl font-bold flex flex-col justify-center items-center text-center shadow-lg">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold">Instant Decision</span>
                      <span className="text-xs font-black mt-0.5">Pre-Approved ✓</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between text-xs text-gray-300">
                    <div className="flex items-center space-x-2">
                      <ShieldCheck size={16} className="text-emerald-400" />
                      <span>Bank-Grade 256-Bit Security</span>
                    </div>
                    <span className="text-emerald-400 font-mono text-[10px]">WCAG AA Compliant</span>
                  </div>
                </div>
              )}

              {/* SLIDE 2: Wanderly UI Mockup */}
              {currentStudy.id.includes('wanderly') && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="bg-black/40 rounded-xl p-4 border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <Compass size={16} className="text-blue-400" />
                        <span className="text-xs text-gray-200 font-bold">AI Itinerary: 4 Days in Tokyo</span>
                      </div>
                      <span className="text-xs font-bold text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-500/30">Offline Ready</span>
                    </div>

                    <div className="space-y-2 mt-3">
                      <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg text-xs">
                        <span>Day 1: Shibuya Crossing & Meiji Shrine</span>
                        <span className="text-emerald-400 font-mono font-bold">$45</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg text-xs">
                        <span>Day 2: Akihabara Tech & Shinjuku Gyoen</span>
                        <span className="text-emerald-400 font-mono font-bold">$70</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <span className="text-[10px] text-gray-400 block uppercase font-bold">Group Expense Split</span>
                      <span className="text-base font-extrabold text-white mt-0.5 block">$320 / person</span>
                      <span className="text-[10px] text-blue-400 font-semibold">4 Members Settled</span>
                    </div>

                    <div className="bg-blue-600 text-white p-3 rounded-xl font-bold flex flex-col justify-center items-center text-center shadow-lg">
                      <Smartphone size={18} className="mb-1" />
                      <span className="text-xs font-black">1-Tap Book All</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between text-xs text-gray-300">
                    <span>Active Sync: Tokyo Offline Maps</span>
                    <span className="text-blue-400 font-mono text-[10px]">iOS 17 HIG</span>
                  </div>
                </div>
              )}

            </div>

            {/* 2. Right Bottom Side: High-Resolution Showcase Image */}
            {currentStudy.heroImage && (
              <div 
                onClick={() => setIsModalOpen(true)}
                className="group relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black cursor-pointer hover:border-white/40 transition-all duration-500"
              >
                <img
                  src={currentStudy.heroImage}
                  alt={currentStudy.title}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <span className="text-xs font-bold text-white">Inspect Full UX Artifacts</span>
                  <div className="px-3 py-1 rounded-full bg-white text-gray-950 font-bold text-xs flex items-center space-x-1 shadow-md">
                    <Eye size={13} />
                    <span>View Modal</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Carousel Bottom Dots */}
        <div className="flex items-center justify-center space-x-2.5 mt-8">
          {featuredCaseStudies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-10 bg-brand-orange'
                  : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to case study ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Deep-Dive Case Study Modal for active slide */}
      {isModalOpen && (
        <FullCaseStudyModal
          caseStudy={currentStudy}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default FeaturedCaseStudy;
