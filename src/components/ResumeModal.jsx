import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, Mail, Phone, MapPin, Award, BookOpen, Briefcase, Sparkles } from 'lucide-react';
import { personalInfo, workExperience, resumeData } from '../data/portfolioData';

const ResumeModal = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-xl overflow-y-auto animate-fadeIn">
      
      {/* Container */}
      <div 
        className="relative w-full max-w-4xl bg-white text-gray-900 rounded-3xl border border-gray-200 shadow-2xl overflow-hidden my-4 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Actions Bar */}
        <div className="p-4 sm:p-6 bg-[#111115] text-white border-b border-gray-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-orange text-white uppercase tracking-wider">
              Official Resume / CV
            </span>
            <span className="text-xs text-gray-400 hidden sm:inline">• {personalInfo.name} — {personalInfo.role}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-gray-200 transition-colors flex items-center space-x-1 cursor-pointer"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Email'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-gray-200 transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-6 sm:p-12 overflow-y-auto space-y-8 bg-[#FCFCFD]">
          
          {/* Header Info */}
          <div className="border-b border-gray-200 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg font-bold text-brand-orange mt-0.5">
                {personalInfo.role}
              </p>
              <p className="text-xs text-gray-600 mt-1 max-w-lg">
                {resumeData.summary}
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-gray-600 bg-gray-50 p-4 rounded-2xl border border-gray-200 shrink-0">
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-brand-orange" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-brand-orange font-semibold">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-brand-orange" />
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-brand-orange font-semibold font-mono">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-brand-orange" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-700 font-bold pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personalInfo.availability}</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-lg font-extrabold text-gray-950 uppercase tracking-wider flex items-center space-x-2 border-b border-gray-200 pb-2">
              <Briefcase size={18} className="text-brand-orange" />
              <span>Work Experience</span>
            </h2>

            <div className="space-y-6">
              {workExperience.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-gray-950">{exp.title}</h3>
                      <span className="text-sm font-semibold text-brand-orange">{exp.company}</span>
                      <span className="text-xs text-gray-500 ml-2">({exp.type})</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full mt-1 sm:mt-0 w-max">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.achievements && (
                    <ul className="list-disc list-inside text-xs text-gray-600 space-y-1 pl-1">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="leading-normal">{ach}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown Grid */}
          <div className="space-y-4">
            <h2 className="text-lg font-extrabold text-gray-950 uppercase tracking-wider flex items-center space-x-2 border-b border-gray-200 pb-2">
              <Sparkles size={18} className="text-brand-orange" />
              <span>Core Skills & Competencies</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                <span className="text-xs font-bold text-brand-orange uppercase block mb-2">UX Research</span>
                <div className="flex flex-wrap gap-1.5">
                  {resumeData.skills.research.map((s) => (
                    <span key={s} className="bg-white px-2 py-1 rounded-md text-[11px] font-medium text-gray-700 border border-gray-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                <span className="text-xs font-bold text-brand-orange uppercase block mb-2">UI & Systems</span>
                <div className="flex flex-wrap gap-1.5">
                  {resumeData.skills.design.map((s) => (
                    <span key={s} className="bg-white px-2 py-1 rounded-md text-[11px] font-medium text-gray-700 border border-gray-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                <span className="text-xs font-bold text-brand-orange uppercase block mb-2">Software Stack</span>
                <div className="flex flex-wrap gap-1.5">
                  {resumeData.skills.tools.map((s) => (
                    <span key={s} className="bg-white px-2 py-1 rounded-md text-[11px] font-medium text-gray-700 border border-gray-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h2 className="text-lg font-extrabold text-gray-950 uppercase tracking-wider flex items-center space-x-2 border-b border-gray-200 pb-2">
                <BookOpen size={18} className="text-brand-orange" />
                <span>Education</span>
              </h2>
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution} • {edu.year}</p>
                  <p className="text-gray-500 italic">{edu.details}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-extrabold text-gray-950 uppercase tracking-wider flex items-center space-x-2 border-b border-gray-200 pb-2">
                <Award size={18} className="text-brand-orange" />
                <span>Certifications</span>
              </h2>
              <ul className="space-y-2 text-xs text-gray-700">
                {resumeData.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-100 border-t border-gray-200 flex items-center justify-between">
          <span className="text-xs text-gray-500">Subham • {personalInfo.email} • {personalInfo.phone}</span>
          <button
            onClick={handlePrint}
            className="px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-all shadow-md cursor-pointer ml-auto flex items-center space-x-2"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </button>
        </div>

      </div>

    </div>
  );
};

export default ResumeModal;
