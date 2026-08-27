import React from 'react';
import { ArrowRight, Sparkles, Shield, Users, Layers } from 'lucide-react';
import { usePresentation } from '../context/PresentationContext';
import missionMavericksLogo from '../Assets/mission-mavericks-logo.png';

export const Slide1Landing: React.FC = () => {
  const { nextSlide } = usePresentation();

  return (
    <div className="relative min-h-[74vh] flex flex-col items-center justify-center text-center py-4 px-2">
      {/* Main Foreground Content */}
      <div className="max-w-3xl mx-auto z-10 flex flex-col items-center relative">
        {/* Mission Mavericks Dominant Hero Logo & Name Header */}
        <div className="flex flex-col items-center mb-4 group">
          <img
            src={missionMavericksLogo}
            alt="Mission Mavericks Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain shrink-0 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] mb-3 group-hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wider text-white uppercase flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 drop-shadow-md">
            <span>MISSION</span>
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              MAVERICKS
            </span>
          </h2>
        </div>

        {/* Hero Headline: Every claim has a story */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight mt-1 mb-2 drop-shadow-md">
          Every claim <span className="text-cyan-300 font-extrabold">has a story.</span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-neutral-200 mt-2 mb-4 leading-relaxed font-normal max-w-xl drop-shadow-sm">
          From the instant an accident strikes to straight-through settlement — transforming the motor claims experience through technology, empathy, and speed.
        </p>

        {/* Scrolling Rallying Cry Ribbon: "Own the Mission. Be the Maverick. Win Together" */}
        <div className="w-full max-w-2xl my-2 overflow-hidden rounded-2xl bg-black/50 backdrop-blur-xl border border-white/20 py-3 shadow-lg">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-6 select-none">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-6 text-xs sm:text-sm font-mono font-black tracking-widest text-white uppercase">
                <span className="flex items-center gap-2 text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                  Own the Mission. Be the Maverick. Win Together.
                </span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <span className="text-neutral-300 font-bold">MISSION MAVERICKS</span>
                <span className="w-2 h-2 rounded-full bg-white/40 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl mt-4 mb-6">
          <div className="p-3.5 rounded-xl bg-black/50 backdrop-blur-xl border border-white/15 hover:border-cyan-400/50 shadow-lg flex items-center gap-3 text-left transition-all group">
            <div className="p-2 rounded-lg bg-white/10 border border-white/10 shrink-0 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">11 Mavericks</div>
              <div className="text-[10px] text-neutral-300 font-mono">Cross-Functional Team</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-black/50 backdrop-blur-xl border border-white/15 hover:border-cyan-400/50 shadow-lg flex items-center gap-3 text-left transition-all group">
            <div className="p-2 rounded-lg bg-white/10 border border-white/10 shrink-0 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">4-Week Sprint</div>
              <div className="text-[10px] text-neutral-300 font-mono">Learning To Solution</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-black/50 backdrop-blur-xl border border-white/15 hover:border-cyan-400/50 shadow-lg flex items-center gap-3 text-left transition-all group">
            <div className="p-2 rounded-lg bg-white/10 border border-white/10 shrink-0 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">ClaimShield+</div>
              <div className="text-[10px] text-neutral-300 font-mono">Connected Claims Engine</div>
            </div>
          </div>
        </div>

        {/* Action Button: Next to Team members */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={nextSlide}
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-white hover:bg-neutral-100 text-black font-black text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Meet the Mission Mavericks</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};
