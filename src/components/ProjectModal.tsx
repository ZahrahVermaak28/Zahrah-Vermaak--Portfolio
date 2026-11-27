import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl dark:bg-[#1a1121] bg-white border dark:border-rose-300/20 border-rose-900/10 shadow-2xl z-10 flex flex-col">
        
        {/* Sticky Close Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 dark:bg-[#1a1121]/90 bg-white/90 backdrop-blur-md border-b dark:border-rose-300/10 border-rose-900/10">
          <div className="flex items-center gap-2 text-xs font-mono dark:text-[#f4a6be] text-[#9c365d]">
            <span>Case Study</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full dark:bg-[#27192f] bg-[#f5e9ee] dark:text-[#e4d4e8] text-[#553c5b] hover:text-[#d87293] transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Hero Media Preview */}
          <div className="rounded-2xl overflow-hidden aspect-video border dark:border-rose-300/15 border-rose-900/10 relative group">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
              <span className="font-serif italic text-base drop-shadow">{project.title}</span>
              <span className="backdrop-blur-md bg-black/40 px-3 py-1 rounded-full border border-white/20">
                {project.metrics}
              </span>
            </div>
          </div>

          {/* Title & Summary */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif font-medium dark:text-[#faf2f5] text-[#241328] mb-2">
              {project.title}
            </h3>
            <p className="text-sm font-medium dark:text-[#d87293] text-[#9c365d] mb-4">
              {project.subtitle}
            </p>
            <p className="text-base leading-relaxed dark:text-[#c4b3c9] text-[#55435a] font-light">
              {project.description}
            </p>
          </div>

          {/* Key Architectural Features */}
          <div className="p-6 rounded-2xl dark:bg-[#22162a] bg-[#faf2f5] border dark:border-rose-300/10 border-rose-900/5">
            <h4 className="text-sm font-semibold uppercase tracking-wider dark:text-[#f3a6bd] text-[#8e2b4f] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Key Features & Implementation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm dark:text-[#d4c5d8] text-[#4d3b51]">
                  <span className="text-[#e08ba6] font-bold mt-0.5">•</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Challenges & Solutions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider dark:text-[#d87293] text-[#9c365d] mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Technical Challenge & Architecture
            </h4>
            <p className="text-sm leading-relaxed dark:text-[#bfacc3] text-[#5c4a61] font-light">
              {project.challenges}
            </p>
          </div>

          {/* Technologies Used (Clean unboxed tags) */}
          <div className="pt-4 border-t dark:border-rose-300/10 border-rose-900/10">
            <p className="text-xs uppercase tracking-wider font-mono dark:text-[#9e8b9f] text-[#7d6980] mb-3">
              Technologies & Frameworks
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium dark:text-[#e8dbe8] text-[#3e2c43]">
              {project.technologies.map((tech, tIdx) => (
                <React.Fragment key={tIdx}>
                  <span>{tech}</span>
                  {tIdx < project.technologies.length - 1 && (
                    <span aria-hidden="true" className="opacity-40">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Actions & Links */}
          <div className="pt-6 border-t dark:border-rose-300/10 border-rose-900/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white dark:bg-gradient-to-r dark:from-[#d87293] dark:to-[#b85374] bg-gradient-to-r from-[#9e3a60] to-[#7f284b] hover:opacity-90 transition-opacity"
              >
                <span>Live Project Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium dark:bg-[#25172d] bg-stone-100 dark:text-[#e4d6e8] text-[#422f46] hover:text-[#d87293] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs dark:text-[#a897aa] text-[#6d5b70] hover:underline"
            >
              Back to Portfolio
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
