import React, { useState } from 'react';
import { X, CheckCircle2, Layers, Palette, FileText, ExternalLink, Sparkles } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-[#141418] text-white rounded-3xl border border-white/20 shadow-2xl overflow-hidden my-4 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 bg-gradient-to-r from-brand-orange/30 via-[#1A1A22] to-[#141418] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-orange text-white uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs text-gray-400 font-semibold">• Case Study</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {project.title}
            </h3>
            <p className="text-brand-orange font-semibold text-xs sm:text-sm mt-0.5">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none self-end sm:self-center cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Navigation Bar */}
        <div className="flex items-center space-x-2 px-6 pt-3 border-b border-white/10 bg-[#0E0E12] shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all border-b-2 cursor-pointer ${
              activeTab === 'overview'
                ? 'border-brand-orange text-brand-orange bg-white/5'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <span className="flex items-center space-x-1.5">
              <FileText size={15} />
              <span>Overview & Visuals</span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab('casestudy')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all border-b-2 cursor-pointer ${
              activeTab === 'casestudy'
                ? 'border-brand-orange text-brand-orange bg-white/5'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <span className="flex items-center space-x-1.5">
              <Sparkles size={15} />
              <span>UX Case Study</span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab('tokens')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all border-b-2 cursor-pointer ${
              activeTab === 'tokens'
                ? 'border-brand-orange text-brand-orange bg-white/5'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <span className="flex items-center space-x-1.5">
              <Palette size={15} />
              <span>Design Tokens</span>
            </span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          
          {/* TAB 1: OVERVIEW & REAL IMAGE SHOWCASE */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Project Image if available */}
              {project.image && (
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover max-h-80"
                  />
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Project Brief</h4>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.highlights && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">UX Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 bg-white/5 p-3 rounded-xl border border-white/10 text-sm text-gray-200">
                        <CheckCircle2 size={18} className="text-brand-orange shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.stats && (
                <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                  {Object.entries(project.stats).map(([key, val]) => (
                    <div key={key}>
                      <span className="block text-2xl font-black text-brand-orange">{val}</span>
                      <span className="block text-xs text-gray-400 capitalize font-medium mt-0.5">{key}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: UX CASE STUDY */}
          {activeTab === 'casestudy' && (
            <div className="space-y-5">
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">Problem & Background</span>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  {project.fullCaseStudy || project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                  <span className="text-xs font-bold text-emerald-400 uppercase block mb-1">User Goal</span>
                  <p className="text-xs text-emerald-100">Simple 1-2 click flows with instant feedback, zero hidden fees, and high transparency.</p>
                </div>

                <div className="p-4 rounded-xl bg-orange-950/40 border border-orange-500/30">
                  <span className="text-xs font-bold text-brand-orange uppercase block mb-1">Business Goal</span>
                  <p className="text-xs text-orange-100">Increase checkout conversion, lower user drop-off rate, and reduce support tickets.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DESIGN TOKENS */}
          {activeTab === 'tokens' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Color Palette Swatches</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {(project.colors || ['#FF5E2B', '#141418', '#FAF9F6', '#10B981']).map((hex, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center space-y-2">
                      <div className="w-full h-12 rounded-xl shadow-md border border-white/10" style={{ backgroundColor: hex }} />
                      <span className="text-xs font-mono font-bold text-gray-300">{hex}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-gray-300 block mb-2">Typography & Grid System</span>
                <p className="text-xs text-gray-400">Plus Jakarta Sans & Outfit (8-pt Spatial Grid, Responsive Breakpoints: 375px / 768px / 1440px).</p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0E0E12] border-t border-white/10 flex items-center justify-between shrink-0">
          <span className="text-xs text-gray-400 hidden sm:inline">Product Design by Subham</span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-semibold transition-all shadow-lg cursor-pointer ml-auto"
          >
            Close Preview
          </button>
        </div>

      </div>

    </div>
  );
};

export default ProjectModal;
