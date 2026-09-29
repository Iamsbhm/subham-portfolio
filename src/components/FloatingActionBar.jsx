import React, { useState, useEffect } from 'react';
import { FileText, MessageCircle, Mail, ArrowUp, Check, Download, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const FloatingActionBar = ({ onOpenResume }) => {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/916201072469?text=${encodeURIComponent(
    'Hi Subham, I saw your product design portfolio and would love to discuss an opportunity!'
  )}`;

  if (!visible) return null;

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-slideUp">
      <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-[#111115]/90 backdrop-blur-xl border border-white/15 rounded-full shadow-2xl shadow-black/50 text-white">
        
        {/* Quick Resume Button */}
        <button
          onClick={onOpenResume}
          className="px-3.5 sm:px-4 py-2 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-all shadow-md flex items-center space-x-1.5 cursor-pointer hover:scale-105 shrink-0"
          title="View Official CV"
        >
          <FileText size={14} />
          <span className="hidden xs:inline sm:inline">Resume / CV</span>
        </button>

        {/* WhatsApp Direct Quick Chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 sm:px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer hover:scale-105 shrink-0"
          title="Chat on WhatsApp (+91 6201072469)"
        >
          <MessageCircle size={14} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Copy Email Button */}
        <button
          onClick={handleCopyEmail}
          className="px-3 sm:px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white text-xs font-semibold transition-all flex items-center space-x-1.5 cursor-pointer shrink-0 relative"
          title="Copy Email"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Mail size={14} />}
          <span className="hidden md:inline">{copied ? 'Copied!' : 'Copy Email'}</span>
          
          {/* Mobile Copied Badge */}
          {copied && (
            <span className="md:hidden absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
              Copied!
            </span>
          )}
        </button>

        <div className="w-[1px] h-5 bg-white/15 mx-0.5" />

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all cursor-pointer hover:scale-105"
          title="Back to top"
          aria-label="Back to top"
        >
          <ArrowUp size={14} />
        </button>

      </div>
    </aside>
  );
};

export default FloatingActionBar;
