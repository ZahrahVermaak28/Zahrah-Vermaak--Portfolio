import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github, ArrowUpRight, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['All', 'Full-Stack', 'AI & Data', 'Web Apps'];

  const filteredProjects = selectedFilter === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 md:py-28 relative scroll-mt-20">
      
      {/* Background ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-0 w-80 h-80 rounded-full blur-3xl opacity-15 dark:bg-rose-500 bg-rose-200" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-mono dark:text-[#f4a6be] text-[#9c365d] uppercase tracking-widest mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#e08ba6]" />
              03. Selected Works & Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight dark:text-[#fbf4f7] text-[#241228] mb-4">
              Engineered for impact and elegance.
            </h2>
            <p className="text-base dark:text-[#c4b3c9] text-[#5e4c63] font-light">
              Each project represents real software development, AI model integration, and intuitive human-centered design.
            </p>
          </div>

          {/* Interactive Filter Control Tabs */}
          <div className="flex items-center gap-1 p-1.5 rounded-2xl dark:bg-[#1d1223] bg-white border dark:border-rose-300/10 border-rose-900/10 overflow-x-auto self-start md:self-auto">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  selectedFilter === filter
                    ? 'dark:bg-[#2e1a35] bg-[#fae8ef] dark:text-[#f7bed0] text-[#8e294f] shadow-sm'
                    : 'dark:text-[#a594a9] text-[#69566e] hover:text-[#e08ba6]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-3xl overflow-hidden transition-all duration-300 dark:bg-[#1a1122] bg-white border dark:border-rose-300/10 border-rose-900/10 hover:border-rose-400/30 hover:shadow-xl hover:shadow-rose-950/5 flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail Area */}
                <div 
                  className="relative aspect-video overflow-hidden cursor-pointer bg-neutral-900"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category & Metric overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="backdrop-blur-md bg-black/40 text-rose-100 text-[11px] font-mono px-3 py-1 rounded-full border border-white/10">
                      {project.category}
                    </span>
                    <span className="backdrop-blur-md bg-black/40 text-white text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Hover Inspect Prompt */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs bg-black/20">
                    <span className="px-4 py-2 rounded-full text-xs font-medium text-white backdrop-blur-md bg-black/60 border border-white/20 inline-flex items-center gap-1.5 shadow-lg">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-7">
                  
                  {/* Clean unboxed tags with typographic separators */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono dark:text-[#d87293] text-[#9c365d] mb-3">
                    {project.tags.map((tag, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <span>{tag}</span>
                        {tIdx < project.tags.length - 1 && (
                          <span aria-hidden="true" className="opacity-40">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-2xl font-serif font-medium dark:text-[#faf3f6] text-[#241328] mb-2 hover:text-[#e08ba6] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs uppercase tracking-wider dark:text-[#a593a9] text-[#715f75] mb-4 font-medium">
                    {project.subtitle}
                  </p>

                  <p className="text-sm leading-relaxed dark:text-[#bfacc3] text-[#55435a] mb-6 font-light line-clamp-3">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-7 pt-0 border-t dark:border-rose-300/10 border-rose-900/10 mt-auto flex items-center justify-between pt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold dark:text-[#f4a6be] text-[#9c365d] hover:underline inline-flex items-center gap-1"
                >
                  <span>Detailed Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full dark:bg-[#27192f] bg-[#f5e9ee] dark:text-[#e4d4e8] text-[#553c5b] hover:text-[#d87293] transition-colors"
                    title="View Source Code"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full dark:bg-[#27192f] bg-[#f5e9ee] dark:text-[#e4d4e8] text-[#553c5b] hover:text-[#d87293] transition-colors"
                    title="Live Preview"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};
