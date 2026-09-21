import React, { useState } from 'react';
import { Sparkles, Search, Palette, Layers, Code, Users, CheckCircle2, Award, Cpu, Wrench } from 'lucide-react';
import { designTools } from '../data/portfolioData';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    {
      id: 'research',
      title: 'UX Research & Strategy',
      icon: <Search className="text-brand-orange" size={20} />,
      description: 'Uncovering actionable user insights and validating hypotheses before writing code.',
      skills: [
        'User Interviews (1-on-1)',
        'Usability Testing (Maze)',
        'Persona & Empathy Mapping',
        'Customer Journey Architecture',
        'Heuristic Audits',
        'Information Architecture (IA)',
        'A/B Testing & Card Sorting',
        'Quantitative Analytics (Hotjar/Mixpanel)'
      ]
    },
    {
      id: 'ui-design',
      title: 'UI & Interaction Design',
      icon: <Palette className="text-brand-orange" size={20} />,
      description: 'Crafting visually stunning, accessible, and responsive multi-platform interfaces.',
      skills: [
        'High-Fidelity Wireframing',
        'Micro-Interactions & Lottie',
        'Responsive Web Design',
        'Mobile App UI (iOS / Android)',
        'WCAG 2.1 AA Accessibility',
        'Interactive Prototyping',
        'Visual Identity & Branding',
        'Spatial Grids & Typography'
      ]
    },
    {
      id: 'design-systems',
      title: 'Design Systems & Tokens',
      icon: <Layers className="text-brand-orange" size={20} />,
      description: 'Building scalable, multi-brand component libraries and token architectures.',
      skills: [
        'Atomic Design Architecture',
        'Semantic Color & Spacing Tokens',
        'Component State Variants',
        'Auto-Layout & Constraints',
        'Figma Component Publishing',
        'Design-to-Code Tokens',
        'Multi-Brand Theming',
        'Component Documentation'
      ]
    },
    {
      id: 'leadership',
      title: 'Leadership & Process',
      icon: <Users className="text-brand-orange" size={20} />,
      description: 'Facilitating cross-functional alignment and seamless engineering handoffs.',
      skills: [
        'Agile / Scrum Sprint Planning',
        'Engineering Handoff & Specs',
        'Stakeholder Discovery Workshops',
        'Design QA & Implementation Review',
        'Mentoring Junior Designers',
        'Cross-Functional Collaboration',
        'Product Roadmap Alignment',
        'Design Sprint Facilitation'
      ]
    }
  ];

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white border-y border-gray-200/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
            <Cpu size={14} />
            <span>Skills & Core Competencies</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111115] tracking-tight">
            Comprehensive <span className="text-brand-orange">Skill Matrix</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Organized across product discovery, visual execution, design system governance, and modern design tools.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#111115] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Skills
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-[#FAF9F6] p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-xs">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-950">{category.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{category.description}</p>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 bg-white px-3 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs hover:border-brand-orange/50 transition-colors"
                    >
                      <CheckCircle2 size={14} className="text-brand-orange shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Software & Tool Proficiency Meters Bar */}
        <div className="bg-[#111115] text-white p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">Production Stack</span>
              <h3 className="text-2xl font-extrabold text-white mt-1">Design Software & Toolkit Mastery</h3>
            </div>
            <span className="text-xs font-mono text-gray-400">Daily Active Workflow</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {designTools.map((tool) => (
              <div key={tool.name} className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{tool.icon}</span>
                    <span className="text-sm font-bold text-white">{tool.name}</span>
                  </div>
                  <span className="text-xs font-extrabold text-brand-orange font-mono">{tool.percent}%</span>
                </div>

                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-brand-orange to-[#FF8554] h-full rounded-full"
                    style={{ width: `${tool.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
