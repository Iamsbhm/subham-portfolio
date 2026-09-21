import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, Mail, Phone, MapPin, Award, BookOpen, Briefcase, Sparkles, FolderGit2, ExternalLink } from 'lucide-react';
import { personalInfo, resumeData } from '../data/portfolioData';

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
        <div className="p-4 sm:p-5 bg-[#111115] text-white border-b border-gray-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-orange text-white uppercase tracking-wider">
              Official Resume / CV
            </span>
            <span className="text-xs text-gray-400 hidden sm:inline">• {personalInfo.name} — {personalInfo.role}</span>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="/Subham_Kumar_Resume.pdf"
              download="Subham_Kumar_Resume.pdf"
              className="px-3 py-1.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-xs font-bold text-white transition-colors flex items-center space-x-1.5 cursor-pointer shadow-sm"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-gray-200 transition-colors hidden sm:flex items-center space-x-1 cursor-pointer"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Email'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-gray-200 transition-colors hidden md:flex items-center space-x-1 cursor-pointer"
            >
              <Printer size={14} />
              <span>Print</span>
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
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#FCFCFD]">
          
          {/* Header Info */}
          <div className="border-b border-gray-200 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg font-bold text-brand-orange">
                {personalInfo.role}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl">
                {resumeData.summary}
              </p>
            </div>

            <div className="space-y-2 text-xs text-gray-700 bg-gray-50 p-4 rounded-2xl border border-gray-200 shrink-0 min-w-[240px]">
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-brand-orange shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-brand-orange font-semibold">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-brand-orange shrink-0" />
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-brand-orange font-semibold font-mono">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-brand-orange shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-700 font-bold pt-1 border-t border-gray-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personalInfo.availability}</span>
              </div>
            </div>
          </div>

          {/* Core Skills & Competencies */}
          <div className="space-y-4">
            <h2 className="text-base font-extrabold text-gray-950 uppercase tracking-wider flex items-center space-x-2 border-b border-gray-200 pb-2">
              <Sparkles size={16} className="text-brand-orange" />
              <span>Skills & Competencies</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {resumeData.skillsStructured.map((skillGroup, idx) => (
                <div key={idx} className="bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                  <span className="text-xs font-bold text-brand-orange block mb-1">
                    {skillGroup.category}
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {skillGroup.items}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-base font-extrabold text-gray-950 uppercase tracking-wider flex items-center space-x-2 border-b border-gray-200 pb-2">
              <Briefcase size={16} className="text-brand-orange" />
              <span>Work Experience</span>
            </h2>

            <div className="space-y-4">
              {resumeData.experience.map((exp, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-base font-bold text-gray-950">{exp.title}</h3>
                      <span className="text-sm font-semibold text-brand-orange">{exp.company}</span>
                      <span className="text-xs text-gray-500 ml-2">({exp.type})</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full w-max">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="list-disc list-inside text-xs text-gray-700 space-y-2 pl-1 leading-relaxed">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="text-base font-extrabold text-gray-950 uppercase tracking-wider flex items-center space-x-2 border-b border-gray-200 pb-2">
              <FolderGit2 size={16} className="text-brand-orange" />
              <span>Key Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resumeData.projects.map((proj, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm space-y-2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-gray-950 flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0" />
                      <span>{proj.title}</span>
                    </h3>
                    <ul className="list-disc list-inside text-[11px] text-gray-600 space-y-1.5 mt-2 pl-1 leading-relaxed">
                      {proj.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-base font-extrabold text-gray-950 uppercase tracking-wider flex items-center space-x-2 border-b border-gray-200 pb-2">
                <BookOpen size={16} className="text-brand-orange" />
                <span>Education</span>
              </h2>
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs space-y-1">
                  <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                  <p className="text-brand-orange font-semibold">{edu.institution} • {edu.year}</p>
                  <p className="text-gray-500">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <h2 className="text-base font-extrabold text-gray-950 uppercase tracking-wider flex items-center space-x-2 border-b border-gray-200 pb-2">
                <Award size={16} className="text-brand-orange" />
                <span>Achievements & Recognition</span>
              </h2>
              {resumeData.achievements.map((ach, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs space-y-1">
                  <h4 className="font-bold text-gray-900">{ach.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{ach.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-100 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-gray-500">
            {personalInfo.name} • {personalInfo.email} • {personalInfo.phone}
          </span>
          <a
            href="/Subham_Kumar_Resume.pdf"
            download="Subham_Kumar_Resume.pdf"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2"
          >
            <Download size={14} />
            <span>Download Official Resume PDF</span>
          </a>
        </div>

      </div>

    </div>
  );
};

export default ResumeModal;
