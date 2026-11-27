import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Layers, Terminal, Sparkles, Cpu, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    "Frontend Development": <Layers className="w-4 h-4" />,
    "Backend & Systems": <Terminal className="w-4 h-4" />,
    "AI & Emerging Technologies": <Sparkles className="w-4 h-4" />,
    "Tools, Practices & DevOps": <Cpu className="w-4 h-4" />
  };

  const filteredCategories = activeCategory === 'all'
    ? PORTFOLIO_DATA.skillCategories
    : PORTFOLIO_DATA.skillCategories.filter(cat => cat.name.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="skills" className="py-20 md:py-28 relative scroll-mt-20 dark:bg-[#160e1d]/50 bg-[#f9f3f6]/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-mono dark:text-[#f4a6be] text-[#9c365d] uppercase tracking-widest mb-3">
              02. Technical Competencies
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight dark:text-[#fbf4f7] text-[#241228] mb-4">
              Curated tools & modern engineering stack.
            </h2>
            <p className="text-base dark:text-[#c4b3c9] text-[#5e4c63] font-light">
              A disciplined selection of technologies I leverage to build resilient architectures, fluid user interfaces, and automated workflows.
            </p>
          </div>

          {/* Interactive Filter Control Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl dark:bg-[#1d1223] bg-white border dark:border-rose-300/10 border-rose-900/10 overflow-x-auto self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${
                activeCategory === 'all'
                  ? 'dark:bg-[#2e1a35] bg-[#fae8ef] dark:text-[#f7bed0] text-[#8e294f] shadow-sm'
                  : 'dark:text-[#a594a9] text-[#69566e] hover:text-[#e08ba6]'
              }`}
            >
              All Domains
            </button>
            <button
              onClick={() => setActiveCategory('frontend')}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${
                activeCategory === 'frontend'
                  ? 'dark:bg-[#2e1a35] bg-[#fae8ef] dark:text-[#f7bed0] text-[#8e294f] shadow-sm'
                  : 'dark:text-[#a594a9] text-[#69566e] hover:text-[#e08ba6]'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveCategory('backend')}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${
                activeCategory === 'backend'
                  ? 'dark:bg-[#2e1a35] bg-[#fae8ef] dark:text-[#f7bed0] text-[#8e294f] shadow-sm'
                  : 'dark:text-[#a594a9] text-[#69566e] hover:text-[#e08ba6]'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveCategory('ai')}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${
                activeCategory === 'ai'
                  ? 'dark:bg-[#2e1a35] bg-[#fae8ef] dark:text-[#f7bed0] text-[#8e294f] shadow-sm'
                  : 'dark:text-[#a594a9] text-[#69566e] hover:text-[#e08ba6]'
              }`}
            >
              AI & Emerging
            </button>
          </div>
        </div>

        {/* Skills Grid: Clean, unboxed presentation adhering to Zero-Pill Discipline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 dark:bg-[#1b1222] bg-white border dark:border-rose-300/10 border-rose-900/10 hover:border-rose-400/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center dark:bg-[#281830] bg-[#fdf0f5] text-[#d87293]">
                      {categoryIcons[cat.name] || <Terminal className="w-4 h-4" />}
                    </div>
                    <h3 className="text-xl font-serif font-medium dark:text-[#f8f1f5] text-[#28162c]">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono dark:text-[#917d95] text-[#85718a]">
                    {cat.skills.length} competencies
                  </span>
                </div>

                <p className="text-xs leading-relaxed dark:text-[#bcaabf] text-[#69566e] mb-6 font-light">
                  {cat.description}
                </p>

                {/* Clean unboxed skill list with subtle separators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group flex items-center justify-between py-2 px-3 rounded-xl transition-colors dark:hover:bg-[#25172d] hover:bg-[#faf0f4]"
                    >
                      <span className="text-sm font-medium dark:text-[#e8dbe8] text-[#3e2b43] group-hover:text-[#e08ba6] transition-colors">
                        {skill}
                      </span>
                      <Check className="w-3.5 h-3.5 text-[#e08ba6] opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimalist foundation note */}
              <div className="mt-6 pt-4 border-t dark:border-rose-300/10 border-rose-900/10 flex items-center justify-between text-[11px] font-mono dark:text-[#8e7b92] text-[#8f7d93]">
                <span>Validated in live production & sprint builds</span>
                <span className="text-[#d87293]">100% active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
