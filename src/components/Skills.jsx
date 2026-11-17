import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  ShieldCheck, 
  Wrench, 
  Cpu, 
  Search, 
  FileCode2, 
  Palette, 
  Globe, 
  Layers, 
  HardDrive, 
  Binary, 
  Coffee, 
  FileCode, 
  Send, 
  Gauge, 
  CheckSquare, 
  SearchCheck, 
  GitBranch, 
  Github, 
  Code,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Dynamic Icon Mapping
const iconMap = {
  Layout: Code2,
  Server: Server,
  Database: Database,
  Terminal: Terminal,
  ShieldCheck: ShieldCheck,
  Wrench: Wrench,
  Code2: Code2,
  FileCode2: FileCode2,
  Palette: Palette,
  Globe: Globe,
  Layers: Layers,
  Cpu: Cpu,
  HardDrive: HardDrive,
  Binary: Binary,
  Coffee: Coffee,
  FileCode: FileCode,
  Send: Send,
  Gauge: Gauge,
  CheckSquare: CheckSquare,
  SearchCheck: SearchCheck,
  GitBranch: GitBranch,
  Github: Github,
  Code: Code,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...skillCategories.map(c => c.category)];

  // Filter skills based on selected category and search query
  const filteredCategories = skillCategories.map(cat => {
    if (selectedCategory !== 'All' && cat.category !== selectedCategory) {
      return null;
    }

    const filteredSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A comprehensive toolkit spanning reactive frontend engineering, scalable backend architecture, and rigorous quality assurance.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-900/80 rounded-2xl border border-slate-800 max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors"
            />
          </div>
        </div>

        {/* Categories & Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((catGroup, idx) => {
              const CategoryIcon = iconMap[catGroup.iconName] || Code2;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Category Title & Icon */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                        <CategoryIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {catGroup.category}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-1">
                          {catGroup.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills Badges */}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {catGroup.skills.map((skill, sIdx) => {
                        const SkillIcon = iconMap[skill.icon] || Code2;
                        return (
                          <div
                            key={sIdx}
                            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border transition-all duration-200 hover:-translate-y-0.5 ${
                              skill.highlight
                                ? 'bg-slate-900/90 border-cyan-500/30 text-slate-200 hover:border-cyan-400 hover:text-white hover:shadow-sm hover:shadow-cyan-500/20'
                                : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <SkillIcon className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{skill.name}</span>
                            <span className="text-[10px] text-slate-400 font-mono px-1.5 py-0.5 rounded bg-slate-800/80">
                              {skill.level}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>{catGroup.skills.length} competencies</span>
                    <span className="text-cyan-500/70 group-hover:text-cyan-400 transition-colors">Verified in Projects</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-12 text-center text-slate-400 glass-card rounded-2xl">
              <p className="text-base font-medium">No skills match &quot;{searchQuery}&quot;</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-3 text-xs text-cyan-400 hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Quality Assurance Highlight Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-emerald-500/20 bg-gradient-to-r from-emerald-950/20 via-slate-900/40 to-cyan-950/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span>Testing &amp; QA Specialization</span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Full Suite
                </span>
              </h4>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Skilled in Manual Testing, Selenium UI Automation, Postman API testing, JMeter load verification, and relational SQL testing to deliver zero-regression production releases.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
          >
            See Tested Projects
          </a>
        </div>

      </div>
    </section>
  );
}
