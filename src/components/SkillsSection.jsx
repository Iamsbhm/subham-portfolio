import React, { useState } from 'react';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const allSkills = [
    // 🎨 UI & Product Design Core
    { 
      name: 'Figma & Auto-Layout', 
      category: 'ui-ux', 
      percent: 96, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' 
    },
    { 
      name: 'Design Systems & Tokens', 
      category: 'systems', 
      percent: 95, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg' 
    },
    { 
      name: 'Framer Interactive Prototyping', 
      category: 'ui-ux', 
      percent: 92, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg' 
    },
    { 
      name: 'User Research & Maze Testing', 
      category: 'research', 
      percent: 90, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' 
    },
    { 
      name: 'Wireframing & IA', 
      category: 'ui-ux', 
      percent: 94, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' 
    },
    { 
      name: 'Mobile App UI (iOS & Android)', 
      category: 'ui-ux', 
      percent: 93, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' 
    },
    { 
      name: 'Adobe Photoshop', 
      category: 'ui-ux', 
      percent: 88, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' 
    },
    { 
      name: 'Adobe Illustrator', 
      category: 'ui-ux', 
      percent: 89, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' 
    },
    { 
      name: 'Adobe XD', 
      category: 'ui-ux', 
      percent: 87, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg' 
    },
    { 
      name: 'Micro-Interactions & Lottie', 
      category: 'ui-ux', 
      percent: 91, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg' 
    },
    { 
      name: 'User Journey & Empathy Mapping', 
      category: 'research', 
      percent: 92, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' 
    },
    { 
      name: 'WCAG 2.1 AA Accessibility', 
      category: 'systems', 
      percent: 89, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg' 
    },
    { 
      name: 'Conversion Rate Optimization', 
      category: 'research', 
      percent: 88, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' 
    },
    { 
      name: 'Engineering Handoff & Specs', 
      category: 'systems', 
      percent: 94, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg' 
    },

    // 💻 Frontend Stack
    { 
      name: 'HTML5 & Semantic Markup', 
      category: 'code', 
      percent: 95, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' 
    },
    { 
      name: 'CSS3 / SASS / Responsive Web', 
      category: 'code', 
      percent: 92, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' 
    },
    { 
      name: 'Tailwind CSS', 
      category: 'code', 
      percent: 94, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' 
    },
    { 
      name: 'React.js & Prototyping', 
      category: 'code', 
      percent: 86, 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' 
    }
  ];

  const filteredSkills = activeTab === 'all'
    ? allSkills
    : allSkills.filter(s => {
        if (activeTab === 'ui-ux') return s.category === 'ui-ux' || s.category === 'systems';
        if (activeTab === 'research') return s.category === 'research' || s.category === 'systems';
        if (activeTab === 'code') return s.category === 'code';
        return s.category === activeTab;
      });

  return (
    <section id="skills" className="py-24 bg-[#08080C] text-white relative overflow-hidden border-y border-white/10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2 font-mono">
            MY SKILLS & CAPABILITIES
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            UI/UX Design & Technologies
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-brand-orange via-purple-500 to-indigo-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex flex-wrap justify-center bg-white/5 p-1.5 rounded-full border border-white/10 gap-1 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All Skills ({allSkills.length})
            </button>
            <button
              onClick={() => setActiveTab('ui-ux')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'ui-ux'
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🎨 UI/UX & Visual Design
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'research'
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🔍 UX Research & Strategy
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              💻 Frontend & Code
            </button>
          </div>
        </div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="space-y-2 group">
              
              {/* Icon, Title and Percentage Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-gray-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>

                <span className="text-xs sm:text-sm font-mono font-bold text-gray-300">
                  {skill.percent}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#1C1C24] h-2.5 rounded-full overflow-hidden p-0.5 border border-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-orange via-[#FF7A45] to-[#A855F7] shadow-sm transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
