import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, Sparkles, FileText, Github, Linkedin, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    if (!formState.email.includes('@') || !formState.email.includes('.')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    // Smooth simulated network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-20">
      
      {/* Background ambient orbs */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 dark:bg-rose-500 bg-rose-200" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct channels and greeting (5 cols) */}
          <div className="lg:col-span-5">
            <p className="text-xs font-mono dark:text-[#f4a6be] text-[#9c365d] uppercase tracking-widest mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#e08ba6]" />
              05. Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight dark:text-[#fbf4f7] text-[#241228] mb-6">
              Let's create something meaningful together.
            </h2>
            <p className="text-base leading-relaxed dark:text-[#c4b3c9] text-[#5e4c63] font-light mb-8">
              Whether you are looking for an ambitious software developer, a digital associate for product operations, or exploring a new project collaboration, I'd love to hear from you.
            </p>

            {/* Direct Email Card with One-Click Copy */}
            <div className="rounded-3xl p-6 dark:bg-[#1b1122] bg-white border dark:border-rose-300/10 border-rose-900/10 mb-6 shadow-sm">
              <span className="text-xs font-mono dark:text-[#a896ad] text-[#78647c] uppercase tracking-wider block mb-2">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-sm sm:text-base font-semibold dark:text-[#fbf3f6] text-[#2a172d] hover:text-[#d87293] transition-colors truncate"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-full dark:bg-[#281830] bg-[#fbf0f4] text-[#a43b64] dark:text-[#f2a7be] hover:scale-105 active:scale-95 transition-all shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-emerald-400 mt-2 font-mono flex items-center gap-1.5">
                  <Check className="w-3 h-3" />
                  Email address copied to clipboard!
                </p>
              )}
            </div>

            {/* Location & Availability */}
            <div className="space-y-3 text-xs dark:text-[#bfacc3] text-[#55435a] mb-8">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#d87293]" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full dark:bg-[#f4a6be] bg-[#a43b64]" />
                <span>{PORTFOLIO_DATA.personal.status}</span>
              </div>
            </div>

            {/* Quick Resume & Socials */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium dark:bg-[#24152a] bg-stone-100 dark:text-[#ebdce9] text-[#422e47] hover:border-rose-400/30 border border-transparent transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-[#d87293]" />
                <span>Open Full Resume</span>
              </button>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full dark:bg-[#24152a] bg-stone-100 dark:text-[#ebdce9] text-[#422e47] hover:text-[#d87293] transition-colors"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full dark:bg-[#24152a] bg-stone-100 dark:text-[#ebdce9] text-[#422e47] hover:text-[#d87293] transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 dark:bg-[#1a1122] bg-white border dark:border-rose-300/10 border-rose-900/10 shadow-lg shadow-rose-950/5">
              
              <h3 className="text-2xl font-serif font-medium dark:text-[#faf2f5] text-[#241328] mb-2">
                Send a Message
              </h3>
              <p className="text-xs uppercase tracking-wider dark:text-[#a896ad] text-[#715d74] mb-8">
                Response typically within 24 hours
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl dark:bg-[#25172d] bg-[#fbf0f4] border dark:border-rose-300/15 border-rose-900/10 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-rose-500/20 text-[#d87293]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-serif font-medium dark:text-[#fcf6f8] text-[#241228]">
                    Message Sent Successfully
                  </h4>
                  <p className="text-sm dark:text-[#c4b3c9] text-[#55435a] font-light max-w-md mx-auto">
                    Thank you for reaching out, Zahrah has received your note and will be in touch shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold text-white dark:bg-gradient-to-r dark:from-[#d87293] dark:to-[#b85374] bg-gradient-to-r from-[#9e3a60] to-[#7f284b] hover:opacity-90 transition-opacity"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-mono dark:text-[#bba9be] text-[#6d5970] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Elena Vance"
                        className="w-full px-4 py-3 rounded-2xl text-sm dark:bg-[#24162a] bg-[#faf3f6] border dark:border-rose-300/10 border-rose-900/10 dark:text-[#f8eff3] text-[#28162c] focus:outline-none focus:ring-2 focus:ring-[#e08ba6]/50 transition-all placeholder:text-stone-400 dark:placeholder:text-stone-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-mono dark:text-[#bba9be] text-[#6d5970] mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. elena@company.com"
                        className="w-full px-4 py-3 rounded-2xl text-sm dark:bg-[#24162a] bg-[#faf3f6] border dark:border-rose-300/10 border-rose-900/10 dark:text-[#f8eff3] text-[#28162c] focus:outline-none focus:ring-2 focus:ring-[#e08ba6]/50 transition-all placeholder:text-stone-400 dark:placeholder:text-stone-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono dark:text-[#bba9be] text-[#6d5970] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Role Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-2xl text-sm dark:bg-[#24162a] bg-[#faf3f6] border dark:border-rose-300/10 border-rose-900/10 dark:text-[#f8eff3] text-[#28162c] focus:outline-none focus:ring-2 focus:ring-[#e08ba6]/50 transition-all placeholder:text-stone-400 dark:placeholder:text-stone-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono dark:text-[#bba9be] text-[#6d5970] mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share details about your team, project timeline, or questions..."
                      className="w-full px-4 py-3 rounded-2xl text-sm dark:bg-[#24162a] bg-[#faf3f6] border dark:border-rose-300/10 border-rose-900/10 dark:text-[#f8eff3] text-[#28162c] focus:outline-none focus:ring-2 focus:ring-[#e08ba6]/50 transition-all placeholder:text-stone-400 dark:placeholder:text-stone-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider text-white dark:bg-gradient-to-r dark:from-[#d87293] dark:to-[#b85374] dark:hover:from-[#e08ba6] dark:hover:to-[#c45f82] bg-gradient-to-r from-[#9e3a60] to-[#7f284b] hover:from-[#8b2f52] hover:to-[#6d1f3e] transition-all shadow-md active:scale-98 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
