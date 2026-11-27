import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, MapPin, Globe, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl dark:bg-[#180f1e] bg-[#fdfbfb] border dark:border-rose-300/20 border-rose-900/15 shadow-2xl z-10 flex flex-col">
        
        {/* Controls Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 dark:bg-[#180f1e]/95 bg-white/95 backdrop-blur-md border-b dark:border-rose-300/10 border-rose-900/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono dark:text-[#f4a6be] text-[#9c365d] uppercase tracking-wider">Curriculum Vitae</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span className="text-xs dark:text-[#a896ad] text-[#6d5b72]">Zahrah Vermaak</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium dark:bg-[#281830] bg-rose-50 text-[#8e294f] dark:text-[#f2a7be] hover:bg-rose-100 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full dark:bg-[#27192f] bg-[#f5e9ee] dark:text-[#e4d4e8] text-[#553c5b] hover:text-[#d87293] transition-colors"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-8 sm:p-12 print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b dark:border-rose-300/15 border-rose-900/15 pb-8 mb-8">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium dark:text-[#faf2f5] text-[#241328] mb-2">
              {PORTFOLIO_DATA.personal.name}
            </h2>
            <p className="text-sm font-medium dark:text-[#e08ba6] text-[#9c365d] mb-4">
              {PORTFOLIO_DATA.personal.role}
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs dark:text-[#bfacc3] text-[#55435a]">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#d87293]" />
                {PORTFOLIO_DATA.personal.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#d87293]" />
                {PORTFOLIO_DATA.personal.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#d87293]" />
                github.com / linkedin.com
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest font-mono dark:text-[#f4a6be] text-[#9c365d] mb-3">
              Professional Summary
            </h3>
            <p className="text-sm leading-relaxed dark:text-[#cfc0d3] text-[#4d3b51] font-light">
              Aspiring Software Developer and Digital Associate with a solid foundation in modern full-stack web architectures (React, TypeScript, Node.js) and digital workflow coordination. Proven track record in translating high-level requirements into clean, accessible web components and leveraging AI integrations to streamline digital operations. Passionate about engineering elegant digital products that blend technical robustness with human-centered aesthetics.
            </p>
          </div>

          {/* Core Technical Stack */}
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest font-mono dark:text-[#f4a6be] text-[#9c365d] mb-3">
              Core Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs dark:text-[#cfc0d3] text-[#4d3b51]">
              <div className="p-3.5 rounded-xl dark:bg-[#201426] bg-[#fbf3f6]">
                <strong className="block dark:text-[#faf2f5] text-[#241328] mb-1 font-semibold">Languages & Frontend:</strong>
                TypeScript, JavaScript (ES6+), React 19, Next.js, HTML5, Tailwind CSS, Responsive Design, CSS Grid/Flexbox
              </div>
              <div className="p-3.5 rounded-xl dark:bg-[#201426] bg-[#fbf3f6]">
                <strong className="block dark:text-[#faf2f5] text-[#241328] mb-1 font-semibold">Backend & Architecture:</strong>
                Node.js, Express, RESTful APIs, PostgreSQL, SQL, Firebase/Firestore, Authentication & Access Control
              </div>
              <div className="p-3.5 rounded-xl dark:bg-[#201426] bg-[#fbf3f6]">
                <strong className="block dark:text-[#faf2f5] text-[#241328] mb-1 font-semibold">AI & Emerging Tools:</strong>
                Google Gemini API, Prompt Engineering, Agentic Workflows, Function Calling, AI Assisted Development
              </div>
              <div className="p-3.5 rounded-xl dark:bg-[#201426] bg-[#fbf3f6]">
                <strong className="block dark:text-[#faf2f5] text-[#241328] mb-1 font-semibold">DevOps & Methodologies:</strong>
                Git/GitHub, Vite, Postman, Agile/Scrum Sprints, CI/CD, Technical Documentation, Figma Hand-off
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest font-mono dark:text-[#f4a6be] text-[#9c365d] mb-4">
              Work Experience
            </h3>
            <div className="space-y-6">
              {PORTFOLIO_DATA.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h4 className="text-base font-semibold dark:text-[#faf2f5] text-[#241328]">
                      {exp.role} <span className="font-normal opacity-70">| {exp.company}</span>
                    </h4>
                    <span className="text-xs font-mono dark:text-[#e08ba6] text-[#9c365d]">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-xs leading-relaxed dark:text-[#cfc0d3] text-[#4d3b51] font-light">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#e08ba6]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t dark:border-rose-300/15 border-rose-900/15">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-mono dark:text-[#f4a6be] text-[#9c365d] mb-3">
                Education
              </h3>
              {PORTFOLIO_DATA.education.map((edu) => (
                <div key={edu.id} className="text-xs">
                  <p className="font-semibold dark:text-[#faf2f5] text-[#241328]">{edu.degree}</p>
                  <p className="dark:text-[#a896ad] text-[#6d5b72]">{edu.institution} · {edu.period}</p>
                  {edu.honors && (
                    <p className="mt-1 text-[#d87293] font-medium">{edu.honors}</p>
                  )}
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest font-mono dark:text-[#f4a6be] text-[#9c365d] mb-3">
                Certifications
              </h3>
              <div className="space-y-2 text-xs">
                {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-baseline justify-between">
                    <span className="dark:text-[#cfc0d3] text-[#4d3b51] font-medium">{cert.name}</span>
                    <span className="font-mono text-[11px] opacity-70">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
