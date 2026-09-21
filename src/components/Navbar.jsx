import React, { useState, useEffect } from 'react';
import { Menu, X, Award } from 'lucide-react';
import ResumeModal from './ResumeModal';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#about' },
    { name: 'Case Study', href: '#case-study' },
    { name: 'Portfolio', href: '#project' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'skills', 'about', 'case-study', 'project', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    if (id === 'resume') {
      setIsResumeModalOpen(true);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
        <nav
          className={`inline-flex items-center justify-between md:justify-center bg-[#111115]/95 backdrop-blur-xl text-white px-3 py-2 rounded-full border border-white/15 shadow-2xl transition-all duration-300 ${
            scrolled ? 'py-2 bg-black/95 shadow-orange-950/20' : ''
          }`}
        >
          {/* Mobile Logo Brand */}
          <div className="md:hidden px-3 text-sm font-bold tracking-wide">
            <span className="text-brand-orange">Subham</span>
            <span className="text-xs text-gray-400 ml-1.5 font-normal">Product Design</span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(sectionId)}
                  className={`px-4 lg:px-5 py-2 text-sm font-medium whitespace-nowrap rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-brand-orange text-white font-bold shadow-lg shadow-brand-orange/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-4 right-4 bg-black/95 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-2xl z-50 flex flex-col space-y-2">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(sectionId)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-gray-200 hover:bg-brand-orange/20 hover:text-white rounded-xl transition-all"
                >
                  {link.name}
                </button>
              );
            })}

            <button
              onClick={() => { setMobileMenuOpen(false); setIsResumeModalOpen(true); }}
              className="w-full text-left px-4 py-3 text-sm font-bold text-brand-orange bg-white/5 rounded-xl flex items-center space-x-2"
            >
              <Award size={16} />
              <span>View Official Resume / CV</span>
            </button>
          </div>
        )}
      </header>

      {/* Global Resume Modal */}
      {isResumeModalOpen && (
        <ResumeModal onClose={() => setIsResumeModalOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
