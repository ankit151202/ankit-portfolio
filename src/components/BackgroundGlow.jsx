import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Mesh Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Primary Radial Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute top-1/4 -right-40 w-[30rem] h-[30rem] bg-indigo-600/15 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-2/3 -left-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
      <div className="absolute -bottom-40 right-1/4 w-[28rem] h-[28rem] bg-emerald-500/10 rounded-full blur-[140px]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070b14]/50 to-[#070b14]" />
    </div>
  );
}
