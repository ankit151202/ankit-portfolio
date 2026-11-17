import React, { useState, useEffect } from 'react';
import { ArrowRight, FileDown, Mail, Github, Linkedin, Sparkles, CheckCircle2, Code2, Terminal, Shield } from 'lucide-react';
import { personalInfo, experienceStats } from '../data/portfolioData';

export default function Hero() {
  const roles = [
    "Software Engineer",
    "React Developer",
    "QA Engineer",
    "Computational Science Undergrad"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    const fullRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullRole.substring(0, displayText.length + 1));
        if (displayText.length === fullRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium shadow-inner shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Available for Opportunities</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">GLA University &apos;26</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I&apos;m <span className="text-gradient">Ankit Verma</span>
              </h1>
              
              <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start">
                <p className="text-xl sm:text-2xl md:text-3xl font-mono font-medium text-slate-300">
                  <span className="text-cyan-400">&gt; </span>
                  <span>{displayText}</span>
                  <span className="inline-block w-2.5 h-6 bg-cyan-400 ml-1 animate-pulse align-middle" />
                </p>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Final-year <span className="text-white font-medium">B.Tech in Computational Science</span> student at <span className="text-cyan-400 font-medium">GLA University, Mathura</span> (CGPA: 7.03).
              Specialized in engineering performant <span className="text-white font-medium">React.js web applications</span>, designing robust full-stack services, and delivering high quality through rigorous <span className="text-emerald-400 font-medium">QA & test automation</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Ankit_Verma_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Trust Row */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-slate-400">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              {experienceStats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-200">{stat.label}</div>
                  <div className="text-[11px] text-slate-400 truncate">{stat.subtext}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Code Showcase Window */}
          <div className="lg:col-span-5 relative">
            {/* Glow backdrop */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-75" />

            {/* Window Container */}
            <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800/90 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-400 font-mono ml-2">ankit-workspace</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-emerald-400">online</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-800/80 bg-slate-900/40 px-2 pt-1 font-mono text-xs">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-3 py-2 border-b-2 font-medium flex items-center gap-1.5 transition-colors ${
                    activeTab === 'profile'
                      ? 'border-cyan-400 text-cyan-300 bg-slate-800/40'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Developer.ts</span>
                </button>
                <button
                  onClick={() => setActiveTab('testing')}
                  className={`px-3 py-2 border-b-2 font-medium flex items-center gap-1.5 transition-colors ${
                    activeTab === 'testing'
                      ? 'border-cyan-400 text-cyan-300 bg-slate-800/40'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>QualityQA.log</span>
                </button>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300">
                {activeTab === 'profile' ? (
                  <pre className="space-y-1">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-yellow-300">softwareEngineer</span> = &#123;
                    {'\n'}  name: <span className="text-emerald-300">&quot;Ankit Verma&quot;</span>,
                    {'\n'}  degree: <span className="text-emerald-300">&quot;B.Tech Computational Science&quot;</span>,
                    {'\n'}  university: <span className="text-emerald-300">&quot;GLA University, Mathura&quot;</span>,
                    {'\n'}  graduation: <span className="text-cyan-300">2026</span>,
                    {'\n'}  cgpa: <span className="text-cyan-300">7.03</span>,
                    {'\n'}  roles: [
                    {'\n'}    <span className="text-emerald-300">&quot;Software Engineer&quot;</span>,
                    {'\n'}    <span className="text-emerald-300">&quot;React Developer&quot;</span>,
                    {'\n'}    <span className="text-emerald-300">&quot;QA Engineer&quot;</span>
                    {'\n'}  ],
                    {'\n'}  coreStack: &#123;
                    {'\n'}    frontend: [<span className="text-emerald-300">&quot;React.js&quot;</span>, <span className="text-emerald-300">&quot;Tailwind&quot;</span>, <span className="text-emerald-300">&quot;JS&quot;</span>],
                    {'\n'}    backend: [<span className="text-emerald-300">&quot;Node.js&quot;</span>, <span className="text-emerald-300">&quot;Express.js&quot;</span>],
                    {'\n'}    database: [<span className="text-emerald-300">&quot;MySQL&quot;</span>, <span className="text-emerald-300">&quot;MongoDB&quot;</span>, <span className="text-emerald-300">&quot;Oracle&quot;</span>],
                    {'\n'}    qaTools: [<span className="text-emerald-300">&quot;Selenium&quot;</span>, <span className="text-emerald-300">&quot;Postman&quot;</span>, <span className="text-emerald-300">&quot;JMeter&quot;</span>]
                    {'\n'}  &#125;,
                    {'\n'}  status: <span className="text-emerald-300">&quot;Ready to collaborate &amp; build&quot;</span>
                    {'\n'}&#125;;
                  </pre>
                ) : (
                  <pre className="space-y-1 text-slate-300">
                    <span className="text-slate-500">// QA Verification &amp; Test Suite Run</span>
                    {'\n'}<span className="text-emerald-400">&#10004;</span> [Selenium] UI Functional regression suite: 42 passed
                    {'\n'}<span className="text-emerald-400">&#10004;</span> [Postman] REST API contracts &amp; auth: 28 passed
                    {'\n'}<span className="text-emerald-400">&#10004;</span> [JMeter] Load &amp; concurrency latency: 99.8% within SLA
                    {'\n'}<span className="text-emerald-400">&#10004;</span> [SQL Testing] Data integrity &amp; transaction sanity: verified
                    {'\n'}<span className="text-emerald-400">&#10004;</span> [Security] CryptEra AES-256 cipher validation: passed
                    {'\n'}<span className="text-cyan-400">&gt; Test Summary: All critical test cases PASSING</span>
                  </pre>
                )}
              </div>

              {/* Terminal Footer Bar */}
              <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production Ready</span>
                </span>
                <span className="text-slate-500">UTF-8 | LF | React 18</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
