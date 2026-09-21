import React, { useState } from 'react';
import { Download, FileText, ExternalLink, Award, CheckCircle, Eye, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ResumeModal from './ResumeModal';

const ResumeSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <section id="resume" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Sleek Card matching design theme */}
        <div className="relative bg-gradient-to-r from-[#141418] via-[#1A1A22] to-[#141418] border border-white/10 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-brand-orange/30">
                <Award size={14} />
                <span>Job-Ready Credentials & CV</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Looking to Hire or Collaborate?
              </h2>

              <p className="text-sm text-gray-300 max-w-lg">
                View my complete verified curriculum vitae, including quantitative case study impact metrics, design system architectural experience, and leadership references.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm tracking-wide transition-all shadow-xl shadow-brand-orange/30 flex items-center justify-center space-x-2 group cursor-pointer hover:scale-105"
              >
                <Eye size={16} />
                <span>View Full CV</span>
              </button>

              <a
                href="/Subham_Kumar_Resume.pdf"
                download="Subham_Kumar_Resume.pdf"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm tracking-wide transition-all flex items-center justify-center space-x-2 cursor-pointer hover:border-brand-orange"
              >
                <Download size={16} />
                <span>Download PDF</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Resume Modal */}
      {isResumeModalOpen && (
        <ResumeModal onClose={() => setIsResumeModalOpen(false)} />
      )}
    </section>
  );
};

export default ResumeSection;
