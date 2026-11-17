import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2, MapPin } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const edu = educationData[0];

  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java/C)",
    "Database Management Systems (MySQL/MongoDB)",
    "Software Quality Assurance & Testing",
    "Web Technologies & React Ecosystem",
    "Computer Networks & Cloud Systems"
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="text-gradient">Academics</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Rigorous computational science foundation empowering practical software engineering and testing.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-8">
            
            {/* Timeline Dot */}
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-slate-950 border-4 border-cyan-400 shadow-md shadow-cyan-400/50" />

            {/* Main Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 space-y-6">
              
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800/80">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    {edu.degree}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {edu.field}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                {/* Score & Status Badges */}
                <div className="flex sm:flex-col items-end gap-2">
                  <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-right">
                    <div className="text-xs font-mono text-slate-400">Cumulative GPA</div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
                      {edu.cgpa} <span className="text-xs text-slate-500 font-normal">/ 10.0</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{edu.period} (Graduating {edu.status ? '2026' : '2026'})</span>
                  </div>
                </div>
              </div>

              {/* Highlights & Scope */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>Program Highlights &amp; Academic Focus</span>
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relevant Core Coursework */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>Key Coursework &amp; Competencies</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
