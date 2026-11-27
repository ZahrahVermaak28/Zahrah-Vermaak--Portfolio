import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Delicate ambient gradient orbs */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-25 dark:opacity-20 dark:bg-rose-500 bg-rose-300" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-40 right-10 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 dark:opacity-15 dark:bg-purple-600 bg-purple-200" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy & Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Elegant Kicker (Unboxed text with delicate dot) */}
            <div className="flex items-center gap-2.5 text-xs font-medium tracking-widest uppercase mb-4 dark:text-[#f4a6be] text-[#9c365d]">
              <Sparkles className="w-3.5 h-3.5 text-[#e08ba6]" />
              <span>{PORTFOLIO_DATA.personal.role}</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.12] mb-6 dark:text-[#fcf7f9] text-[#221226] text-balance">
              Architecting modern digital solutions with{' '}
              <span className="italic font-serif dark:text-[#f2a7be] text-[#a43b64] font-medium">
                precision & elegance.
              </span>
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg leading-relaxed dark:text-[#c4b3c9] text-[#5c4a61] mb-8 max-w-2xl font-light">
              Hello, I'm <strong className="font-semibold dark:text-[#f5eef7] text-[#2c1830]">Zahrah Vermaak</strong>. {PORTFOLIO_DATA.personal.bioLong}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-200 shadow-md shadow-rose-900/15 dark:bg-gradient-to-r dark:from-[#d87293] dark:to-[#b85374] dark:hover:from-[#e08ba6] dark:hover:to-[#c45f82] bg-gradient-to-r from-[#9e3a60] to-[#7f284b] hover:from-[#8b2f52] hover:to-[#6d1f3e] hover:shadow-lg active:scale-98"
              >
                <span>Explore Selected Works</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-200 dark:bg-[#201526] bg-white border dark:border-rose-300/15 border-rose-900/10 dark:text-[#ecdfe8] text-[#422d47] hover:border-rose-400/40 hover:shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#d87293]" />
                <span>View Full CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium transition-colors dark:text-[#c4b3c9] text-[#69546e] hover:text-[#e08ba6] dark:hover:text-[#f4a6be]"
              >
                <span>Contact Direct</span>
              </a>
            </div>

            {/* Quiet Social Links & Status */}
            <div className="pt-6 border-t dark:border-rose-300/10 border-rose-900/10 flex flex-wrap items-center justify-between gap-4 text-xs dark:text-[#a895ad] text-[#6d5b72]">
              <div className="flex items-center gap-5">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-[#e08ba6] dark:hover:text-[#f4a6be] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{PORTFOLIO_DATA.personal.email}</span>
                </a>
                <span aria-hidden="true" className="opacity-40">·</span>
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#e08ba6] dark:hover:text-[#f4a6be] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <span aria-hidden="true" className="opacity-40">·</span>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#e08ba6] dark:hover:text-[#f4a6be] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full dark:bg-[#f4a6be] bg-[#a43b64]" />
                <span>Available for new opportunities</span>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Backlight halo glow */}
              <div 
                aria-hidden="true" 
                className="absolute inset-0 rounded-[2.5rem] -rotate-3 scale-105 opacity-60 blur-xl dark:bg-gradient-to-tr dark:from-[#7c284a] dark:to-[#4e204c] bg-gradient-to-tr from-[#fbcfe8] to-[#e9d5ff]" 
              />

              {/* Main Portrait Card */}
              <div className="relative rounded-[2.5rem] p-3 dark:bg-[#1f1426] bg-white border dark:border-rose-300/15 border-rose-900/10 shadow-xl shadow-rose-950/10 overflow-hidden">
                <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] bg-stone-900">
                  <img
                    src="/src/assets/images/zahrah_portrait_1792134242136.jpg"
                    alt="Zahrah Vermaak - Software Developer & Digital Associate"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Subtle vignette gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Elegant bottom label on portrait */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl backdrop-blur-md bg-black/45 border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-rose-200/90 font-medium">Zahrah Vermaak</p>
                      <p className="text-sm font-serif italic text-white/95">Full-Stack & Digital Systems</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-rose-200/80 uppercase tracking-widest">2026 Portfolio</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Capability Strip (Below split as mandated by frontend-design guidelines) */}
        <div className="mt-16 pt-8 border-t dark:border-rose-300/10 border-rose-900/10 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex flex-col">
            <span className="text-xs font-mono dark:text-[#e08ba6] text-[#9c365d] uppercase tracking-wider mb-1">01 / Code Craft</span>
            <span className="text-sm font-semibold dark:text-[#f8eff3] text-[#2d1830]">Modern React & TypeScript</span>
            <p className="text-xs dark:text-[#a895ad] text-[#6d5b72] mt-1">Modular, testable, type-safe architectures.</p>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-mono dark:text-[#e08ba6] text-[#9c365d] uppercase tracking-wider mb-1">02 / Digital Delivery</span>
            <span className="text-sm font-semibold dark:text-[#f8eff3] text-[#2d1830]">Digital Operations & Agile</span>
            <p className="text-xs dark:text-[#a895ad] text-[#6d5b72] mt-1">Bridging stakeholder requirements & technical sprints.</p>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-mono dark:text-[#e08ba6] text-[#e08ba6] dark:text-[#f4a6be] text-[#9c365d] uppercase tracking-wider mb-1">03 / Intelligence</span>
            <span className="text-sm font-semibold dark:text-[#f8eff3] text-[#2d1830]">AI API Integration</span>
            <p className="text-xs dark:text-[#a895ad] text-[#6d5b72] mt-1">Prompt engineering & LLM workflow automation.</p>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-mono dark:text-[#e08ba6] text-[#9c365d] uppercase tracking-wider mb-1">04 / Accessibility</span>
            <span className="text-sm font-semibold dark:text-[#f8eff3] text-[#2d1830]">Intuitive Design & UX</span>
            <p className="text-xs dark:text-[#a895ad] text-[#6d5b72] mt-1">Accessible, fluid layouts with soft aesthetic elegance.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
