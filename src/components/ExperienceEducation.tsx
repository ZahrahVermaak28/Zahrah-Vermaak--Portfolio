import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative scroll-mt-20 dark:bg-[#160e1d]/50 bg-[#f9f3f6]/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono dark:text-[#f4a6be] text-[#9c365d] uppercase tracking-widest mb-3">
            04. Experience & Academic Pathway
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight dark:text-[#fbf4f7] text-[#241228] mb-4">
            Professional trajectory & continuous mastery.
          </h2>
          <p className="text-base dark:text-[#c4b3c9] text-[#5e4c63] font-light">
            Combining real-world software engineering practice, digital operations leadership, and structured technical certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center dark:bg-[#27172e] bg-[#fdf0f5] text-[#d87293]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-serif font-medium dark:text-[#faf2f5] text-[#26152a]">
                Work & Apprenticeship Experience
              </h3>
            </div>

            <div className="space-y-6">
              {PORTFOLIO_DATA.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="rounded-3xl p-8 dark:bg-[#1b1222] bg-white border dark:border-rose-300/10 border-rose-900/10 hover:border-rose-400/25 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <h4 className="text-xl font-serif font-medium dark:text-[#fdf7f9] text-[#241328]">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-mono dark:text-[#e08ba6] text-[#9e3a60] flex items-center gap-1.5 shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs dark:text-[#a896ad] text-[#6d5b72] mb-6">
                    <span className="font-medium dark:text-[#e0cfdf] text-[#453248]">{exp.company}</span>
                    <span aria-hidden="true" className="opacity-40">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#d87293]" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Accomplishment Bullet Points */}
                  <ul className="space-y-3 mb-6 text-sm leading-relaxed dark:text-[#bfacc3] text-[#55435a] font-light">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#e08ba6] font-bold mt-1 text-xs">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Tag Strip (Clean unboxed tags) */}
                  <div className="pt-4 border-t dark:border-rose-300/10 border-rose-900/10 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium dark:text-[#e8dbe8] text-[#3e2c43]">
                    {exp.skills.map((skill, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span>{skill}</span>
                        {sIdx < exp.skills.length - 1 && (
                          <span aria-hidden="true" className="opacity-40">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Sub-section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center dark:bg-[#27172e] bg-[#fdf0f5] text-[#d87293]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-medium dark:text-[#faf2f5] text-[#26152a]">
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                {PORTFOLIO_DATA.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="rounded-3xl p-7 dark:bg-[#1b1222] bg-white border dark:border-rose-300/10 border-rose-900/10 hover:border-rose-400/25 transition-all duration-300"
                  >
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <span className="text-xs font-mono dark:text-[#e08ba6] text-[#9e3a60]">
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="text-lg font-serif font-medium dark:text-[#fbf4f7] text-[#26152a] mb-1">
                      {edu.degree}
                    </h4>

                    <p className="text-xs dark:text-[#a896ad] text-[#6d5b72] mb-3">
                      {edu.institution}
                    </p>

                    <p className="text-xs leading-relaxed dark:text-[#bfacc3] text-[#55435a] font-light mb-4">
                      {edu.details}
                    </p>

                    {edu.honors && (
                      <div className="p-3 rounded-2xl dark:bg-[#25172d] bg-[#fbf0f4] text-xs font-medium dark:text-[#f4a6be] text-[#8e294f] flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 shrink-0 text-[#d87293]" />
                        <span>{edu.honors}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Sub-section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center dark:bg-[#27172e] bg-[#fdf0f5] text-[#d87293]">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-medium dark:text-[#faf2f5] text-[#26152a]">
                  Verified Certifications
                </h3>
              </div>

              <div className="space-y-3">
                {PORTFOLIO_DATA.certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="rounded-2xl p-5 dark:bg-[#1b1222] bg-white border dark:border-rose-300/10 border-rose-900/10 hover:border-rose-400/25 transition-all duration-200 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-medium dark:text-[#f8eff3] text-[#29172d]">
                        {cert.name}
                      </h4>
                      <p className="text-xs dark:text-[#a896ad] text-[#6d5b72]">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-xs font-mono dark:text-[#e08ba6] text-[#9e3a60] shrink-0">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
