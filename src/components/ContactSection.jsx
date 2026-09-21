import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUp, Copy, Check, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0E0E12] text-white pt-20 pb-12 relative overflow-hidden border-t border-white/10">
      
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-4 py-1.5 rounded-full inline-block">
              Let's Connect & Collaborate
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Have a project in mind? <br />
              <span className="text-brand-orange">Let’s talk!</span>
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              I’m currently available for full-time product design opportunities, freelance projects, and design consultations.
            </p>

            <div className="space-y-4 pt-2">
              
              {/* Email Contact Card */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-orange/40 transition-all">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 font-semibold block uppercase">Direct Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-bold text-white hover:text-brand-orange transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-orange/40 transition-all">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 font-semibold block uppercase">Mobile & WhatsApp</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-white hover:text-brand-orange transition-colors font-mono"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center space-x-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 font-semibold block uppercase">Location</span>
                  <span className="text-sm font-bold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Social Pills */}
            <div className="pt-4 flex flex-wrap gap-2">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/5 hover:bg-brand-orange border border-white/10 hover:border-brand-orange text-xs font-semibold text-gray-300 hover:text-white transition-all duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <MessageSquare size={20} className="text-brand-orange" />
              <span>Send a Direct Message</span>
            </h3>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-brand-orange/20 border border-brand-orange/40 text-center space-y-3">
                <CheckCircle2 size={48} className="text-brand-orange mx-auto" />
                <h4 className="text-xl font-bold text-white">Message Received!</h4>
                <p className="text-sm text-gray-300">
                  Thank you for reaching out, Subham will respond via email or phone within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Project Details / Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your product design needs, timeline, or open role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-brand-orange/30 flex items-center justify-center space-x-2 group cursor-pointer"
                >
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  <span>Send Message to Subham</span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Subham. All rights reserved. Senior Product Designer.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-brand-orange transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;
