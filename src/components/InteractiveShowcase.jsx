import React, { useState } from 'react';
import { Smartphone, Laptop, Sliders, Sparkles, Shield, DollarSign, Calendar, Compass, MapPin, Star } from 'lucide-react';

const InteractiveShowcase = () => {
  const [activeTab, setActiveTab] = useState('loan-calculator');

  // Prototype 1: Loan Calculator State
  const [loanAmount, setLoanAmount] = useState(45000);
  const [loanTermMonths, setLoanTermMonths] = useState(24);
  const interestRate = 0.058; // 5.8% APR
  const monthlyRepayment = Math.round((loanAmount * (1 + (interestRate * (loanTermMonths / 12)))) / loanTermMonths);

  // Prototype 2: Travel destination state
  const [selectedDest, setSelectedDest] = useState('Bali, Indonesia');
  const destinations = [
    { name: 'Bali, Indonesia', price: '$1,450', rating: 4.9, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80', badge: 'Top Rated' },
    { name: 'Kyoto, Japan', price: '$2,100', rating: 4.8, image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80', badge: 'Culture' },
    { name: 'Amalfi Coast, Italy', price: '$2,800', rating: 5.0, image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80', badge: 'Scenic' }
  ];

  return (
    <section className="py-20 bg-[#FAF9F6] border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Interactive Prototype Sandbox
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111115] tracking-tight">
            Test My Live <span className="text-brand-orange">Prototypes</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3">
            Interactive micro-interactions designed to prove usability before writing production code. Try them out below!
          </p>
        </div>

        {/* Prototype Switcher Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-200/70 p-1.5 rounded-full space-x-2">
            <button
              onClick={() => setActiveTab('loan-calculator')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'loan-calculator'
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'text-gray-700 hover:text-black hover:bg-white/50'
              }`}
            >
              ⚡ Lendify Loan Calculator
            </button>
            <button
              onClick={() => setActiveTab('travel-planner')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'travel-planner'
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'text-gray-700 hover:text-black hover:bg-white/50'
              }`}
            >
              ✈️ Wanderly Trip Discovery
            </button>
          </div>
        </div>

        {/* Prototype 1: Lendify Dynamic Loan Calculator */}
        {activeTab === 'loan-calculator' && (
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#141418] via-[#1A1A22] to-[#141418] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Live Micro-Interaction Prototype</span>
              </div>
              <span className="text-xs font-mono text-gray-400">Figma ➔ React Live Test</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Controls Column */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-gray-300">Loan Amount</label>
                    <span className="text-2xl font-black text-emerald-400 font-mono">
                      ${loanAmount.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-brand-orange h-2.5 bg-white/20 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                    <span>$5,000</span>
                    <span>$100,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-gray-300">Repayment Period</label>
                    <span className="text-base font-bold text-white font-mono">
                      {loanTermMonths} Months
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[12, 24, 36, 48].map((term) => (
                      <button
                        key={term}
                        onClick={() => setLoanTermMonths(term)}
                        className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          loanTermMonths === term
                            ? 'bg-brand-orange text-white shadow-md'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {term} Mo
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Calculated Result Card */}
              <div className="md:col-span-5 bg-black/40 rounded-2xl p-6 border border-white/10 text-center space-y-3">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">
                  Estimated Monthly Payment
                </span>
                <span className="text-3xl sm:text-4xl font-black text-white block">
                  ${monthlyRepayment.toLocaleString()}<span className="text-sm text-gray-400 font-normal">/mo</span>
                </span>
                <div className="pt-2 border-t border-white/10 flex justify-between text-xs text-gray-300">
                  <span>Interest Rate</span>
                  <span className="font-bold text-emerald-400">5.8% Fixed APR</span>
                </div>
                <button className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer">
                  Apply with Pre-Approval
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Prototype 2: Wanderly Travel Planner */}
        {activeTab === 'travel-planner' && (
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#141418] via-[#1A1A22] to-[#141418] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Interactive Travel Card Slider</span>
              </div>
              <span className="text-xs font-mono text-gray-400">Mobile UI Preview</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {destinations.map((dest) => {
                const isSelected = selectedDest === dest.name;
                return (
                  <div
                    key={dest.name}
                    onClick={() => setSelectedDest(dest.name)}
                    className={`relative rounded-2xl overflow-hidden border p-4 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? 'border-blue-500 bg-blue-950/40 ring-2 ring-blue-500/50 scale-[1.02]'
                        : 'border-white/10 bg-white/5 hover:border-white/30'
                    }`}
                  >
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-32 object-cover rounded-xl mb-3"
                    />

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded-md border border-blue-500/30">
                          {dest.badge}
                        </span>
                        <div className="flex items-center text-amber-400 text-xs font-bold">
                          <Star size={12} fill="currentColor" className="mr-0.5" />
                          <span>{dest.rating}</span>
                        </div>
                      </div>
                      <h4 className="font-bold text-sm text-white">{dest.name}</h4>
                      <span className="text-xs text-gray-300 font-semibold block mt-1">Starting from {dest.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-xs text-gray-300">Selected: <strong>{selectedDest}</strong></span>
              <button className="px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs transition-all shadow-md cursor-pointer">
                View 3-Day Itinerary ➔
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default InteractiveShowcase;
