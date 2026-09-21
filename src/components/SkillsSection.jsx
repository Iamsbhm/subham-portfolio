import React, { useState } from 'react';
import { Cpu, Sparkles } from 'lucide-react';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const allSkills = [
    // Column 1: Design & UI Tools
    { name: 'Figma', category: 'design', percent: 96, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Framer', category: 'design', percent: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg' },
    { name: 'Design Systems & Tokens', category: 'design', percent: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg' },
    { name: 'UX Research & Testing', category: 'design', percent: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    
    // Column 2: Core Frontend & Web
    { name: 'HTML5', category: 'code', percent: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3 / SASS', category: 'code', percent: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', category: 'code', percent: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', category: 'code', percent: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },

    // Column 3: Frameworks & Modern Stack
    { name: 'React.js', category: 'code', percent: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', category: 'code', percent: 94, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Next.js', category: 'code', percent: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Git & GitHub', category: 'code', percent: 86, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  const filteredSkills = activeTab === 'all'
    ? allSkills
    : allSkills.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-24 bg-[#08080C] text-white relative overflow-hidden border-y border-white/10">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching screenshot */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2 font-mono">
            MY SKILLS
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Technologies I Master
          </h2>

          {/* Underline bar with glowing gradient */}
          <div className="w-16 h-1 bg-gradient-to-r from-brand-orange via-purple-500 to-indigo-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex bg-white/5 p-1 rounded-full border border-white/10 space-x-1 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'design'
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🎨 UI/UX & Design Tools
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              💻 Frontend & Tech Stack
            </button>
          </div>
        </div>

        {/* 3-Column Skills Matrix matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {filteredSkills.map((skill, index) => (
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
                        // Fallback icon styling if svg fails
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

              {/* Progress Bar with Glowing Gradient */}
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
