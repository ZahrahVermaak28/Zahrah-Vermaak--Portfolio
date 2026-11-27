import React from 'react';
import { Code2, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const icons = [Code2, Compass, Sparkles];

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono dark:text-[#f4a6be] text-[#9c365d] uppercase tracking-widest mb-3">
            01. Narrative & Approach
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight dark:text-[#fbf4f7] text-[#241228] mb-6">
            Blending engineering rigor with a sense of purpose.
          </h2>
          <p className="text-base leading-relaxed dark:text-[#c4b3c9] text-[#5e4c63] font-light">
            I believe software should not only be technically sound and resilient, but also deeply intuitive and aesthetically composed. Here is how I approach modern web development and digital transformation.
          </p>
        </div>

        {/* Three About Me Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.aboutCards.map((card, idx) => {
            const IconComponent = icons[idx] || Code2;
            return (
              <div
                key={card.id}
                className="group relative rounded-3xl p-8 transition-all duration-300 dark:bg-[#1c1223] bg-white border dark:border-rose-300/10 border-rose-900/10 hover:border-rose-400/30 hover:shadow-xl hover:shadow-rose-950/5 flex flex-col justify-between"
              >
                {/* Subtle top corner gradient highlight on hover */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-rose-300/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                />

                <div>
                  {/* Card Icon & Subtitle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-colors dark:bg-[#281830] bg-[#fbf0f4] text-[#a43b64] dark:text-[#f2a7be]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono dark:text-[#9e8b9f] text-[#7a677d]">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs uppercase tracking-wider font-medium mb-1 dark:text-[#d87293] text-[#9e3a60]">
                    {card.subtitle}
                  </p>

                  <h3 className="text-xl font-serif font-medium dark:text-[#faf3f6] text-[#26152a] mb-4">
                    {card.title}
                  </h3>

                  <p className="text-sm leading-relaxed dark:text-[#bfacc4] text-[#5c4a61] mb-8 font-light">
                    {card.description}
                  </p>
                </div>

                {/* Highlights List (Clean unboxed items with check icon) */}
                <div className="pt-6 border-t dark:border-rose-300/10 border-rose-900/10 space-y-2.5">
                  {card.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2.5 text-xs dark:text-[#d3c4d7] text-[#4a394f]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e08ba6] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
