import React from 'react'
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

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-brand-text font-sans antialiased overflow-x-hidden selection:bg-brand-orange selection:text-white">
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

        {/* 4. Flagship In-Depth UX Case Study (Lendify) */}
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
    </div>
  )
}

export default App
