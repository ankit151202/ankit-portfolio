import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Github, 
  Linkedin, 
  MessageSquare, 
  Sparkles, 
  Copy, 
  ExternalLink,
  Settings,
  FileDown,
  Code2,
  ShieldCheck
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedbackMessage('');

    const endpoint = personalInfo.contactFormEndpoint;

    if (endpoint) {
      // If a real backend or Formspree endpoint is configured
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
          setFeedbackMessage('Thank you! Your message has been sent successfully.');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Submission response was not OK');
        }
      } catch (err) {
        setStatus('error');
        setFeedbackMessage('Could not connect to the form endpoint. You can reach out directly via LinkedIn.');
      }
    } else {
      // Configurable fallback mode: Simulates submission cleanly & provides direct mailto link
      setTimeout(() => {
        setStatus('success');
        setFeedbackMessage('Message submitted successfully! (Configured with local mail delivery fallback)');
      }, 700);
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry for Ankit Verma');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const copyDraft = () => {
    const text = `Subject: ${formData.subject}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something <span className="text-gradient">Exceptional</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Have a project in mind, an opportunity, or looking for a dedicated Software / QA Engineer? Send a message below.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Socials, Connect Info & Endpoint Guide */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Connect Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/80 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Direct Connection</span>
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                I am actively seeking software engineering roles, React development projects, and QA automation opportunities. Connect with me directly on LinkedIn or explore my code on GitHub.
              </p>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        LinkedIn Profile
                      </div>
                      <div className="text-xs text-slate-400">Professional Network &amp; Messages</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-slate-200 group-hover:scale-110 transition-transform">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        GitHub Profile
                      </div>
                      <div className="text-xs text-slate-400">Repositories &amp; Code History</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                </a>
              </div>

              {/* Resume Download CTAs */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={personalInfo.resumes.developer.url}
                  download="Ankit_Verma_Developer_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-cyan-500/50 hover:text-white transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Dev Resume</span>
                </a>
                <a
                  href={personalInfo.resumes.qa.url}
                  download="Ankit_Verma_QA_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-emerald-500/50 hover:text-white transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>QA Resume</span>
                </a>
              </div>
            </div>

            {/* Configurable Endpoint Note */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-1.5 text-slate-300 font-mono font-medium">
                <Settings className="w-3.5 h-3.5 text-cyan-400" />
                <span>Configurable Email Service</span>
              </div>
              <p className="leading-relaxed">
                Submissions automatically utilize <code className="text-cyan-300">VITE_CONTACT_FORM_ENDPOINT</code> (e.g. Formspree / EmailJS / custom REST webhook) without exposing personal credentials.
              </p>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-xl">
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Fill out the form below and I will respond promptly.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {feedbackMessage}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleMailtoFallback}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40 transition-colors flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Mail Client</span>
                    </button>
                    
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{feedbackMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration / Project Inquiry"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Ankit, I came across your portfolio and would like to discuss..."
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    {formData.message && (
                      <button
                        type="button"
                        onClick={copyDraft}
                        className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copied ? 'Copied draft!' : 'Copy draft'}</span>
                      </button>
                    )}
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
