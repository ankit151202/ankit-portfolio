import React from 'react';
import { 
  GraduationCap, 
  Code2, 
  ShieldCheck, 
  Database, 
  Layers, 
  CheckCircle, 
  ArrowUpRight, 
  Compass, 
  Sparkles,
  FileDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      title: "Frontend Engineering",
      subtitle: "React.js & Tailwind Ecosystem",
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
      description: "Crafting fluid, high-performance web applications using modern React patterns, responsive Tailwind CSS layouts, and intuitive user experiences with clean state management."
    },
    {
      title: "Backend & Systems",
      subtitle: "Node.js, Express & Databases",
      icon: Database,
      color: "from-blue-500 to-indigo-600",
      description: "Developing scalable RESTful APIs with Node.js and Express, coupled with structured data design across MySQL, MongoDB, and Oracle databases."
    },
    {
      title: "Quality Assurance & Testing",
      subtitle: "Automation & Manual Verification",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-600",
      description: "Ensuring flawless release stability through Selenium UI automation, Postman API regression, JMeter load verification, and comprehensive SQL data validation."
    }
  ];

  const highlights = [
    { label: "Degree", value: "B.Tech in Computer Science" },
    { label: "Institution", value: "GLA University, Mathura" },
    { label: "Academic Status", value: "B.Tech Graduate" },
    { label: "Academic CGPA", value: "7.03 / 10.0" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineering with <span className="text-gradient">Precision &amp; Purpose</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Bridging frontend design, full-stack development, and thorough quality assurance to build software people rely on.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Academic Snapshot */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span>Who I Am</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am <span className="text-white font-semibold">Ankit Verma</span>, a Computer Science graduate from <span className="text-cyan-400 font-medium">GLA University, Mathura</span>. My academic journey has anchored me deeply in core computer science foundations, algorithmic efficiency, and scalable software architecture.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                As a developer, I take pride in writing clean, modular code. Whether developing modern frontend solutions like the <span className="text-cyan-300">Rajesh Jewellers</span> catalog or architecting end-to-end encrypted storage platforms like <span className="text-cyan-300">CryptEra</span>, my philosophy blends design elegance with security and dependability.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Simultaneously, my QA engineering background ensures that code isn&apos;t just shipped—it is validated against real-world test cases, API contracts, and edge conditions using tools like <span className="text-emerald-400">Selenium, Postman, JMeter, and SQL validation</span>.
              </p>

              {/* Education Highlights Grid */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <span className="text-xs font-mono text-slate-400 block">{item.label}</span>
                    <span className="text-sm font-semibold text-slate-200 mt-0.5 block">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Download Resume Links */}
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={personalInfo.resumes.developer.url}
                  download="Ankit_Verma_Developer_Resume.pdf"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>Developer Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.resumes.qa.url}
                  download="Ankit_Verma_QA_Resume.pdf"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>QA Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Pillars Cards */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-tr ${pillar.color} text-white shadow-md shadow-cyan-500/10 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {pillar.title}
                        </h4>
                        <span className="text-xs font-mono text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                          {pillar.subtitle}
                        </span>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Status Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-purple-950/40 border border-cyan-500/20 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white">Computer Science Graduate</h5>
                  <p className="text-xs text-slate-400">Open to full-time software engineering &amp; QA opportunities</p>
                </div>
              </div>
              <a
                href="#contact"
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 text-black hover:bg-cyan-400 transition-colors whitespace-nowrap"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
