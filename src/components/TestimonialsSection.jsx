import React, { useState } from 'react';
import { testimonials } from '../data/portfolioData';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-[#FAF9F6] border-t border-gray-200/60 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Recommendations
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111115] tracking-tight">
            What Clients & Leads <span className="text-brand-orange">Say</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-xl transition-all duration-500">
          
          <Quote size={48} className="text-brand-orange/20 absolute top-6 right-6" />

          <div className="flex items-center space-x-1 text-amber-400 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" stroke="none" />
            ))}
          </div>

          <p className="text-lg sm:text-2xl font-medium text-gray-900 leading-relaxed italic mb-8">
            "{current.quote}"
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-brand-orange shadow-md"
              />
              <div>
                <h3 className="font-extrabold text-gray-900 text-lg">{current.author}</h3>
                <p className="text-xs font-semibold text-gray-500">{current.role} at <span className="text-brand-orange">{current.company}</span></p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gray-100 hover:bg-brand-orange hover:text-white text-gray-700 transition-colors focus:outline-none cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gray-100 hover:bg-brand-orange hover:text-white text-gray-700 transition-colors focus:outline-none cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
