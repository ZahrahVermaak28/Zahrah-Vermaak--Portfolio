import React from 'react';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, onOpenResume }) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md transition-colors duration-300 border-b dark:bg-[#140e1a]/85 bg-[#fcf9f8]/85 dark:border-rose-300/10 border-rose-900/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element Brand Zone */}
        <a 
          href="#" 
          className="text-2xl font-serif font-semibold tracking-tight transition-colors dark:text-[#fbf4f6] text-[#26152a] hover:opacity-85 whitespace-nowrap shrink-0"
        >
          Zahrah Vermaak
        </a>

        {/* Zone 2: 4-5 Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium transition-colors">
          <a 
            href="#about" 
            className="whitespace-nowrap shrink-0 dark:text-[#cbb9cf] text-[#5e4b63] hover:text-[#e08ba6] dark:hover:text-[#f4a6be] transition-colors"
          >
            About
          </a>
          <a 
            href="#skills" 
            className="whitespace-nowrap shrink-0 dark:text-[#cbb9cf] text-[#5e4b63] hover:text-[#e08ba6] dark:hover:text-[#f4a6be] transition-colors"
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="whitespace-nowrap shrink-0 dark:text-[#cbb9cf] text-[#5e4b63] hover:text-[#e08ba6] dark:hover:text-[#f4a6be] transition-colors"
          >
            Projects
          </a>
          <a 
            href="#experience" 
            className="whitespace-nowrap shrink-0 dark:text-[#cbb9cf] text-[#5e4b63] hover:text-[#e08ba6] dark:hover:text-[#f4a6be] transition-colors"
          >
            Experience & Education
          </a>
          <a 
            href="#contact" 
            className="whitespace-nowrap shrink-0 dark:text-[#cbb9cf] text-[#5e4b63] hover:text-[#e08ba6] dark:hover:text-[#f4a6be] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action + theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="p-2.5 rounded-full transition-all duration-200 dark:bg-[#25172b] bg-[#f2e6eb] dark:text-[#f4a6be] text-[#863756] hover:scale-105 active:scale-95 border dark:border-rose-300/15 border-rose-900/10"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 dark:bg-rose-950/40 bg-rose-50 text-[#9c365d] dark:text-[#f4a6be] border dark:border-rose-400/20 border-rose-300/40 hover:bg-rose-100 dark:hover:bg-rose-900/30 whitespace-nowrap shrink-0"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-semibold rounded-full tracking-wide transition-all duration-200 shadow-sm whitespace-nowrap shrink-0 dark:bg-gradient-to-r dark:from-[#d87293] dark:to-[#b85374] dark:hover:from-[#e08ba6] dark:hover:to-[#c45f82] dark:text-white bg-gradient-to-r from-[#9e3a60] to-[#7f284b] hover:from-[#8b2f52] hover:to-[#6d1f3e] text-white hover:shadow-md hover:shadow-rose-900/20 active:scale-98"
          >
            Get In Touch
          </a>
        </div>

      </div>
    </header>
  );
};
