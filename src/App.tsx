import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('zv_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return true; // Default to dark theme as requested with deep plum & rose
    }
    return true;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('zv_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('zv_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-[#130c17] dark:text-[#fbf5f7] bg-[#fcf9f9] text-[#241328] selection:bg-[#e08ba6]/30 selection:text-[#fde2ea]">
      {/* Navigation Top Bar */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Narrative & About Me Section */}
        <About />

        {/* Minimal Skills & Tech Stack Section */}
        <Skills />

        {/* Featured Projects & Case Studies */}
        <Projects />

        {/* Experience, Education & Certifications */}
        <ExperienceEducation />

        {/* Contact Form & Direct Channels */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
