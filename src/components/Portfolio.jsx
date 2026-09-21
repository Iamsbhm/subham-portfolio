import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Smartphone, ExternalLink, ShieldCheck, Sparkles, Compass } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'UI/ UX Design', 'App Design', 'Web Design'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === selectedCategory || p.tag === selectedCategory);

  return (
    <section id="project" className="py-20 bg-[#FAF9F6] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111115] tracking-tight leading-tight">
              Lets have a look at <br className="hidden sm:inline" />
              my <span className="text-brand-orange">Portfolio</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            {/* Filter Pills */}
            <div className="flex items-center space-x-2 bg-gray-200/60 p-1.5 rounded-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-brand-orange text-white shadow-md'
                      : 'text-gray-700 hover:text-black hover:bg-white/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* See All Button */}
            <button
              onClick={() => setSelectedCategory('All')}
              className="px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold transition-all shadow-md shadow-brand-orange/20 cursor-pointer hidden sm:block"
            >
              See All
            </button>
          </div>
        </div>

        {/* TOP ROW: Large Featured Showcase Cards (Lendify & Wanderly with High-Res Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* Card 1: Lendify */}
          <div 
            onClick={() => setActiveModalProject(portfolioProjects[0])}
            className="group relative rounded-3xl bg-[#EAF7F1] border border-emerald-900/10 p-6 sm:p-8 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
          >
            <div className="relative z-10 mb-4">
              <div className="flex items-center space-x-2 text-emerald-800 text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Lendify</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-1">
                Loan Made <span className="text-emerald-600">Simple</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-sm">
                Empowering financial decision-making with seamless loan calculation & intuitive dashboards.
              </p>
            </div>

            {/* High-Resolution Project Showcase Image */}
            <div className="relative z-10 mt-2 rounded-2xl overflow-hidden shadow-xl border border-gray-200/80 bg-white group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/images/lendify-showcase.png"
                alt="Lendify - Loan Made Simple UI/UX Case Study"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                <span className="px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-bold flex items-center space-x-1">
                  <span>View Case Study</span>
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Wanderly */}
          <div 
            onClick={() => setActiveModalProject(portfolioProjects[1])}
            className="group relative rounded-3xl bg-[#EEF4FF] border border-blue-900/10 p-6 sm:p-8 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
          >
            <div className="relative z-10 mb-4">
              <div className="flex items-center space-x-2 text-blue-800 text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Wanderly</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-1">
                Simpler, <span className="text-blue-600">Brighter.</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-sm">
                Travel companion app designed to help you discover destinations and build unforgettable trips.
              </p>
            </div>

            {/* High-Resolution Project Showcase Image */}
            <div className="relative z-10 mt-2 rounded-2xl overflow-hidden shadow-xl border border-gray-200/80 bg-white group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/images/wanderly-showcase.png"
                alt="Wanderly - Travel Made Simpler, Brighter Case Study"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                <span className="px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-bold flex items-center space-x-1">
                  <span>View Case Study</span>
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: 3 Grid Cards matching original design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 3: Purple Loan App */}
          <div 
            onClick={() => setActiveModalProject(portfolioProjects[2])}
            className="group flex flex-col justify-between"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] p-6 text-white h-72 shadow-xl overflow-hidden cursor-pointer group-hover:shadow-2xl transition-all duration-300">
              
              {/* Card Content UI */}
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-200">Financial App</span>
                <h4 className="text-2xl font-bold mt-1">Instant Loan UI</h4>
              </div>

              {/* Inset Screen Mockup */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <span className="text-xs text-purple-100 font-medium">Approved Balance</span>
                <span className="text-xl font-extrabold text-white block">$12,500</span>
              </div>

              {/* Bottom Right Circular Action Button */}
              <div className="absolute bottom-4 right-4 z-20">
                <div className="w-12 h-12 rounded-full bg-[#111115] border border-white/20 group-hover:bg-brand-orange group-hover:border-brand-orange text-white flex items-center justify-center transition-all duration-300 shadow-lg">
                  <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

            </div>

            {/* Tag Pill below card */}
            <div className="mt-3 flex justify-start">
              <span className="px-4 py-1.5 rounded-full bg-gray-200/80 text-gray-800 text-xs font-bold tracking-wide">
                UI/ UX Design
              </span>
            </div>
          </div>

          {/* Card 4: Sugee Analytics (Green) */}
          <div 
            onClick={() => setActiveModalProject(portfolioProjects[3])}
            className="group flex flex-col justify-between"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-[#059669] to-[#047857] p-6 text-white h-72 shadow-xl overflow-hidden cursor-pointer group-hover:shadow-2xl transition-all duration-300">
              
              {/* Sugee Header */}
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold tracking-tight">sugee</h3>
                <span className="text-xs font-semibold text-emerald-200 block mt-1">Analytics Dashboard</span>
              </div>

              {/* Inset Chart Mockup */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-emerald-100 font-bold block uppercase">Growth Rate</span>
                    <span className="text-lg font-extrabold text-white">85.7%</span>
                  </div>
                  <TrendingUp size={24} className="text-emerald-300" />
                </div>
              </div>

              {/* Bottom Right Circular Action Button */}
              <div className="absolute bottom-4 right-4 z-20">
                <div className="w-12 h-12 rounded-full bg-[#111115] border border-white/20 group-hover:bg-brand-orange group-hover:border-brand-orange text-white flex items-center justify-center transition-all duration-300 shadow-lg">
                  <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

            </div>

            {/* Tag Pill below card */}
            <div className="mt-3 flex justify-start">
              <span className="px-4 py-1.5 rounded-full bg-gray-200/80 text-gray-800 text-xs font-bold tracking-wide">
                App Design
              </span>
            </div>
          </div>

          {/* Card 5: ineTrade Platform (Yellow) */}
          <div 
            onClick={() => setActiveModalProject(portfolioProjects[4])}
            className="group flex flex-col justify-between"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-[#EAB308] to-[#CA8A04] p-6 text-gray-900 h-72 shadow-xl overflow-hidden cursor-pointer group-hover:shadow-2xl transition-all duration-300">
              
              {/* ineTrade Header */}
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold tracking-tight text-gray-950">ineTrade</h3>
                <span className="text-xs font-bold text-yellow-950 block mt-1">Trading & Entertainment</span>
              </div>

              {/* Inset Trading Card Mockup */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md text-white rounded-2xl p-4 border border-white/20">
                <span className="text-[10px] text-yellow-400 font-bold block uppercase">Live Movies & Trading</span>
                <span className="text-base font-extrabold">Jayesh Patil Portfolio</span>
              </div>

              {/* Bottom Right Circular Action Button */}
              <div className="absolute bottom-4 right-4 z-20">
                <div className="w-12 h-12 rounded-full bg-[#111115] border border-white/20 group-hover:bg-brand-orange group-hover:border-brand-orange text-white flex items-center justify-center transition-all duration-300 shadow-lg">
                  <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

            </div>

            {/* Tag Pill below card */}
            <div className="mt-3 flex justify-start">
              <span className="px-4 py-1.5 rounded-full bg-gray-200/80 text-gray-800 text-xs font-bold tracking-wide">
                App Design
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;
