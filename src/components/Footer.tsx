import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t dark:border-rose-300/10 border-rose-900/10 py-12 dark:bg-[#130b18] bg-[#fbf7f8] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs dark:text-[#a896ad] text-[#6d5b72]">
          <span className="font-serif text-base font-medium dark:text-[#fbf4f6] text-[#26152a]">
            {PORTFOLIO_DATA.personal.name}
          </span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span className="flex items-center gap-1">
            Built with care & modern web standards
          </span>
        </div>

        {/* Quiet Nav & Back to Top */}
        <div className="flex items-center gap-6 text-xs dark:text-[#a896ad] text-[#6d5b72]">
          <a href="#about" className="hover:text-[#e08ba6] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#e08ba6] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#e08ba6] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#e08ba6] transition-colors">Contact</a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full dark:bg-[#201426] bg-[#f5e9ee] dark:text-[#f4a6be] text-[#8e294f] hover:scale-105 active:scale-95 transition-all ml-2"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
