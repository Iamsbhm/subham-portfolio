import React, { useState } from 'react';
import { X, CheckCircle2, TrendingUp, Users, Clock, ShieldCheck, Sparkles, ArrowRight, Palette, Layers, Compass, Award } from 'lucide-react';

const FullCaseStudyModal = ({ caseStudy, onClose }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const navItems = [
    { id: 'overview', label: '1. Executive Summary' },
    { id: 'research', label: '2. Research & Insights' },
    { id: 'design-system', label: '3. Design System & Tokens' },
    { id: 'process', label: '4. Process & Iterations' },
    { id: 'results', label: '5. Impact & Results' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-xl overflow-y-auto animate-fadeIn">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl bg-[#111115] text-white rounded-3xl border border-white/20 shadow-2xl overflow-hidden my-4 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Modal Top Bar */}
        <div className="p-4 sm:p-6 bg-[#16161D] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${caseStudy.accentBg} text-gray-950`}>
              Comprehensive Case Study
            </span>
            <span className="text-xs text-gray-400 hidden sm:inline">• {caseStudy.client}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none cursor-pointer"
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sticky Secondary Navigation */}
        <div className="flex items-center space-x-2 px-4 sm:px-6 py-2.5 bg-[#0D0D11] border-b border-white/10 overflow-x-auto no-scrollbar shrink-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeSection === item.id
                  ? `${caseStudy.accentBg} text-gray-950 font-bold shadow-md`
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10 text-gray-200">
          
          {/* SECTION 1: EXECUTIVE SUMMARY & HERO IMAGE */}
          {activeSection === 'overview' && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* High-Resolution Showcase Image Banner */}
              {caseStudy.heroImage && (
                <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
                  <img
                    src={caseStudy.heroImage}
                    alt={caseStudy.title}
                    className="w-full h-auto object-cover max-h-96"
                  />
                </div>
              )}

              <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {caseStudy.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed">
                  {caseStudy.tagline} • Full End-to-End Product Design Case Study.
                </p>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                <div>
                  <span className="text-xs text-gray-400 block font-semibold uppercase">Client</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">{caseStudy.client}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-semibold uppercase">My Role</span>
                  <span className={`text-sm font-bold mt-0.5 block ${caseStudy.accentText}`}>{caseStudy.role}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-semibold uppercase">Timeline</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">{caseStudy.duration}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-semibold uppercase">Team</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">{caseStudy.team}</span>
                </div>
              </div>

              {/* Business Impact Metrics */}
              <div>
                <h3 className={`text-xs font-bold uppercase tracking-widest mb-3 ${caseStudy.accentText}`}>
                  Verified Business Impact & Metrics
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {caseStudy.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <span className={`text-3xl font-black block ${caseStudy.accentText}`}>{m.value}</span>
                      <span className="text-xs font-bold text-white mt-1 block">{m.label}</span>
                      <span className="text-[10px] text-gray-300 mt-0.5 block">{m.change}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Problem Statement Card */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">The Problem Statement</span>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                  "{caseStudy.problemStatement}"
                </p>
              </div>
            </div>
          )}

          {/* SECTION 2: RESEARCH & INSIGHTS */}
          {activeSection === 'research' && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest block mb-1 ${caseStudy.accentText}`}>Phase 1</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Discovery & Qualitative User Research</h3>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  We conducted in-depth user interviews and behavioral analytics to identify key friction points in the user journey.
                </p>
              </div>

              {/* Key Pain Points and Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseStudy.researchInsights.map((insight, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange font-bold text-xs flex items-center justify-center mb-3">
                        0{idx + 1}
                      </div>
                      <h4 className="text-base font-bold text-white">{insight.title}</h4>
                      <p className="text-xs text-red-300/90 mt-2 bg-red-950/30 p-2.5 rounded-lg border border-red-500/20">
                        <strong>Pain Point:</strong> {insight.finding}
                      </p>
                    </div>

                    <p className={`text-xs p-2.5 rounded-lg border bg-white/5 ${caseStudy.accentText}`}>
                      <strong>UX Solution:</strong> {insight.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 3: DESIGN SYSTEM & TOKENS */}
          {activeSection === 'design-system' && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest block mb-1 ${caseStudy.accentText}`}>Phase 2</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Design System & Design Tokens</h3>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  Created a standardized Figma component library containing atomic components and semantic tokens for engineering handoff.
                </p>
              </div>

              {/* Color Tokens */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Semantic Color Tokens</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {caseStudy.designSystemHighlights.colorPalette.map((col, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="w-full h-14 rounded-xl shadow-inner border border-white/10" style={{ backgroundColor: col.hex }} />
                      <div>
                        <span className="text-xs font-bold text-white block">{col.name}</span>
                        <span className="text-[11px] font-mono text-gray-400">{col.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography & Layout Rules */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <span className={`text-xs font-bold uppercase block mb-1 ${caseStudy.accentText}`}>Typography Architecture</span>
                  <p className="text-xs text-gray-300 mt-1">{caseStudy.designSystemHighlights.typography}</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-xs font-bold text-brand-orange uppercase block mb-1">Spatial & Layout System</span>
                  <p className="text-xs text-gray-300 mt-1">{caseStudy.designSystemHighlights.gridRules}</p>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 4: PROCESS & ITERATIONS */}
          {activeSection === 'process' && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest block mb-1 ${caseStudy.accentText}`}>Phase 3</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Iterations & Usability Testing</h3>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  How we moved from initial hypothesis and wireframes to high-fidelity validated code.
                </p>
              </div>

              <div className="space-y-4">
                {caseStudy.processSteps.map((proc, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-full ${caseStudy.accentBg} text-gray-950 font-black text-xs flex items-center justify-center shrink-0`}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{proc.step}</h4>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">{proc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 5: IMPACT & TAKEAWAYS */}
          {activeSection === 'results' && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest block mb-1 ${caseStudy.accentText}`}>Phase 4</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Quantitative Results & Retrospective</h3>
              </div>

              {/* Impact Card */}
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                <h4 className={`text-lg font-extrabold ${caseStudy.accentText}`}>Key Business Wins</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseStudy.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl">
                      <TrendingUp className={`shrink-0 ${caseStudy.accentText}`} size={20} />
                      <span className="text-xs text-gray-200"><strong>{m.label}:</strong> {m.value} ({m.change})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Designer Takeaways */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Key Learnings</h4>
                <div className="space-y-2">
                  {caseStudy.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-brand-orange shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 sm:p-6 bg-[#16161D] border-t border-white/10 flex items-center justify-between shrink-0">
          <span className="text-xs text-gray-400 hidden sm:inline">
            Case study by Subham • Ready for hiring review
          </span>
          <button
            onClick={onClose}
            className={`px-6 py-2.5 rounded-full ${caseStudy.accentBg} text-gray-950 font-bold text-xs sm:text-sm transition-all shadow-lg cursor-pointer ml-auto`}
          >
            Done Reading
          </button>
        </div>

      </div>

    </div>
  );
};

export default FullCaseStudyModal;
