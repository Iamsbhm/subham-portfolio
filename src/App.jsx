import React, { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillsSection from './components/SkillsSection'
import WorkExperience from './components/WorkExperience'
import FeaturedCaseStudy from './components/FeaturedCaseStudy'
import Portfolio from './components/Portfolio'
import InteractiveShowcase from './components/InteractiveShowcase'
import MarqueeBanner from './components/MarqueeBanner'
import Expertise from './components/Expertise'
import DesignProcessSection from './components/DesignProcessSection'
import TestimonialsSection from './components/TestimonialsSection'
import ResumeSection from './components/ResumeSection'
import ContactSection from './components/ContactSection'
import FloatingActionBar from './components/FloatingActionBar'
import ScrollProgressBar from './components/ScrollProgressBar'
import ResumeModal from './components/ResumeModal'

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger shortcuts if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'r' || e.key === 'R') {
        setIsResumeModalOpen(true);
      } else if (e.key === 'c' || e.key === 'C') {
        const contactEl = document.getElementById('contact');
        if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'Escape') {
        setIsResumeModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-brand-text font-sans antialiased overflow-x-hidden selection:bg-brand-orange selection:text-white">
      {/* Scroll Progress Bar at the Top */}
      <ScrollProgressBar />

      {/* Floating Pill Navigation Header */}
      <Navbar />

      {/* Main Content: Logical Resume Flow */}
      <main>
        {/* 1. Hero / Professional Summary & Above-the-Fold Metrics */}
        <Hero />

        {/* 2. Skills & Core Competency Matrix */}
        <SkillsSection />

        {/* 3. Work Experience & Career Timeline */}
        <WorkExperience />

        {/* 4. Flagship In-Depth UX Case Study (Lendify & Wanderly) */}
        <FeaturedCaseStudy />

        {/* 5. Complete Projects Portfolio Gallery */}
        <Portfolio />

        {/* 6. Interactive Prototype Sandbox */}
        <InteractiveShowcase />

        {/* 7. Infinite Running Marquee Ribbon */}
        <MarqueeBanner />

        {/* 8. Core Design Capabilities & Expertise */}
        <Expertise />

        {/* 9. 4-Stage Product Design Methodology */}
        <DesignProcessSection />

        {/* 10. Recommendations & Client Testimonials */}
        <TestimonialsSection />

        {/* 11. Verified Resume, Education, Certifications & PDF Export */}
        <ResumeSection />
      </main>

      {/* 12. Contact & Footer */}
      <ContactSection />

      {/* 13. Sticky Floating Recruiter Action Bar */}
      <FloatingActionBar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* 14. Interactive Resume Modal (Global shortcut & trigger) */}
      {isResumeModalOpen && (
        <ResumeModal onClose={() => setIsResumeModalOpen(false)} />
      )}

      {/* Vercel Web Analytics & Speed Insights */}
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App
