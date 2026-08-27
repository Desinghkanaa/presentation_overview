import React, { useState } from 'react';
import { 
  Lightbulb, Settings, Gem, Landmark,
  BookOpen, ClipboardCheck, FolderArchive, ArrowRight, ExternalLink, Sparkles
} from 'lucide-react';
import { timelineWeeks, domainPillars, TimelineWeek } from '../data/timeline';
import { TimelineModal } from '../components/modals/TimelineModal';
import { usePresentation } from '../context/PresentationContext';

export const Slide4Journey: React.FC = () => {
  const { nextSlide } = usePresentation();
  const [selectedWeek, setSelectedWeek] = useState<TimelineWeek | null>(null);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-4 h-4 text-black" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-4 h-4 text-black" />;
      case 'FolderArchive': return <FolderArchive className="w-4 h-4 text-black" />;
      default: return <BookOpen className="w-4 h-4 text-black" />;
    }
  };

  const stepsConfig = [
    {
      weekIndex: 0,
      number: '01',
      nodePosition: 'top',
      icon: Lightbulb,
      accentColor: 'from-cyan-400 to-cyan-500',
      pillBg: 'bg-cyan-400 text-black',
      ringColor: 'border-cyan-400',
      tagColor: 'text-cyan-600',
      glow: 'shadow-cyan-500/20'
    },
    {
      weekIndex: 1,
      number: '02',
      nodePosition: 'bottom',
      icon: Settings,
      accentColor: 'from-sky-400 to-blue-500',
      pillBg: 'bg-sky-500 text-white',
      ringColor: 'border-sky-400',
      tagColor: 'text-sky-600',
      glow: 'shadow-sky-500/20'
    },
    {
      weekIndex: 2,
      number: '03',
      nodePosition: 'top',
      icon: Gem,
      accentColor: 'from-indigo-500 to-indigo-600',
      pillBg: 'bg-indigo-600 text-white',
      ringColor: 'border-indigo-400',
      tagColor: 'text-indigo-600',
      glow: 'shadow-indigo-500/20'
    },
    {
      weekIndex: 3,
      number: '04',
      nodePosition: 'bottom',
      icon: Landmark,
      accentColor: 'from-purple-500 to-purple-600',
      pillBg: 'bg-purple-600 text-white',
      ringColor: 'border-purple-400',
      tagColor: 'text-purple-600',
      glow: 'shadow-purple-500/20'
    }
  ];

  return (
    <div className="relative min-h-[74vh] flex flex-col justify-center py-2">
      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-neutral-800 uppercase mb-1 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>PAGE 03 • OUR FOUR-WEEK JOURNEY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
            From learning{' '}
            <span className="bg-gradient-to-r from-black via-neutral-800 to-neutral-600 bg-clip-text text-transparent">
              to solution.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-lg mx-auto">
            Click any stage in the 4-week turns timeline to inspect deliverables, learnings, and milestones.
          </p>
        </div>

        {/* 4-Step Turns Infographic Flow (Desktop / Large Screen) */}
        <div className="hidden md:block relative w-full my-4 py-4 px-2 select-none">
          {/* Continuous Serpentine Connector Road SVG with Animated Car */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            viewBox="0 0 1000 300" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <defs>
              {/* Vibrant Multi-Stage Journey Gradient */}
              <linearGradient id="serpentineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="33%" stopColor="#0ea5e9" />
                <stop offset="66%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>

              {/* Headlight Beam Gradient */}
              <linearGradient id="headlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="40%" stopColor="#fef08a" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>

              {/* Sleek Metallic Car Body Gradient */}
              <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="50%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>

              {/* Car Glow Filter */}
              <filter id="carGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Taillight Flare Filter */}
              <filter id="tailGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="-1" dy="0" stdDeviation="2" floodColor="#ef4444" floodOpacity="0.9" />
              </filter>

              {/* Road Drop Shadow */}
              <filter id="roadBedShadow" x="-2%" y="-10%" width="104%" height="130%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.08" floodColor="#0f172a" />
              </filter>
            </defs>

            {/* Clean Serpentine Roadmap Connector Path */}
            <path
              d="M 45 245 
                 L 45 65 
                 A 20 20 0 0 1 65 45 
                 L 230 45 
                 A 20 20 0 0 1 250 65 
                 L 250 225 
                 A 20 20 0 0 0 270 245 
                 L 480 245 
                 A 20 20 0 0 0 500 225 
                 L 500 65 
                 A 20 20 0 0 1 520 45 
                 L 730 45 
                 A 20 20 0 0 1 750 65 
                 L 750 225 
                 A 20 20 0 0 0 770 245 
                 L 935 245 
                 A 20 20 0 0 0 955 225 
                 L 955 45"
              stroke="url(#serpentineGrad)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Inflection Connector Waypoint Nodes */}
            <circle cx="45" cy="245" r="5" fill="#06b6d4" />
            <circle cx="250" cy="145" r="5.5" fill="#ffffff" stroke="#0ea5e9" strokeWidth="2.5" />
            <circle cx="500" cy="145" r="5.5" fill="#ffffff" stroke="#6366f1" strokeWidth="2.5" />
            <circle cx="750" cy="145" r="5.5" fill="#ffffff" stroke="#9333ea" strokeWidth="2.5" />
            <circle cx="955" cy="45" r="5" fill="#9333ea" />

            {/* 5. Traveling Car Vehicle Following the Journey Path */}
            <g>
              <animateMotion
                path="M 45 245 L 45 65 A 20 20 0 0 1 65 45 L 230 45 A 20 20 0 0 1 250 65 L 250 225 A 20 20 0 0 0 270 245 L 480 245 A 20 20 0 0 0 500 225 L 500 65 A 20 20 0 0 1 520 45 L 730 45 A 20 20 0 0 1 750 65 L 750 225 A 20 20 0 0 0 770 245 L 935 245 A 20 20 0 0 0 955 225 L 955 45"
                dur="10s"
                repeatCount="indefinite"
                rotate="auto"
                calcMode="linear"
              />

              {/* Headlight Beam Cones (Projecting forward in travel direction) */}
              <polygon
                points="15,-4.5 44,-13 44,-1 15,-2"
                fill="url(#headlightBeam)"
              />
              <polygon
                points="15,4.5 44,1 44,13 15,2"
                fill="url(#headlightBeam)"
              />

              {/* 4 Rubber Tires with Rims */}
              <rect x="5" y="-9.5" width="6.5" height="2.5" rx="1" fill="#020617" stroke="#475569" strokeWidth="0.5" />
              <rect x="5" y="7" width="6.5" height="2.5" rx="1" fill="#020617" stroke="#475569" strokeWidth="0.5" />
              <rect x="-11.5" y="-9.5" width="6.5" height="2.5" rx="1" fill="#020617" stroke="#475569" strokeWidth="0.5" />
              <rect x="-11.5" y="7" width="6.5" height="2.5" rx="1" fill="#020617" stroke="#475569" strokeWidth="0.5" />

              {/* Cyan Neon Underglow Glow */}
              <ellipse cx="-1" cy="0" rx="16" ry="8" fill="#06b6d4" opacity="0.45" filter="url(#carGlow)" />

              {/* Aerodynamic Chassis */}
              <path
                d="M -13 -6.5 
                   C -15.5 -6.5 -15.5 6.5 -13 6.5 
                   L 9 6.5 
                   C 13 6.5 15 4 15 0 
                   C 15 -4 13 -6.5 9 -6.5 
                   Z"
                fill="url(#carBodyGrad)"
                stroke="#38bdf8"
                strokeWidth="1.2"
              />

              {/* Hood Tech Accent Lines */}
              <line x1="6" y1="-2" x2="13" y2="-1" stroke="#38bdf8" strokeWidth="0.8" opacity="0.8" />
              <line x1="6" y1="2" x2="13" y2="1" stroke="#38bdf8" strokeWidth="0.8" opacity="0.8" />

              {/* Front Windshield Glass */}
              <path d="M 1.5 -4.5 L 5.5 -3.5 L 5.5 3.5 L 1.5 4.5 Z" fill="#38bdf8" opacity="0.95" />

              {/* Rear Windshield Glass */}
              <path d="M -7.5 -4 L -4.5 -4.5 L -4.5 4.5 L -7.5 4 Z" fill="#38bdf8" opacity="0.75" />

              {/* Roof Cabin Panel */}
              <rect x="-4.5" y="-4" width="6" height="8" rx="1" fill="#0f172a" stroke="#1e293b" strokeWidth="0.5" />

              {/* Side Window Strips */}
              <rect x="-3.5" y="-5" width="4.5" height="0.9" fill="#7dd3fc" opacity="0.85" />
              <rect x="-3.5" y="4.1" width="4.5" height="0.9" fill="#7dd3fc" opacity="0.85" />

              {/* Side Mirrors */}
              <rect x="3.5" y="-8" width="1.5" height="1.5" rx="0.5" fill="#38bdf8" />
              <rect x="3.5" y="6.5" width="1.5" height="1.5" rx="0.5" fill="#38bdf8" />

              {/* Xenon Front Headlights */}
              <circle cx="14" cy="-4" r="1.3" fill="#ffffff" stroke="#38bdf8" strokeWidth="0.7" />
              <circle cx="14" cy="4" r="1.3" fill="#ffffff" stroke="#38bdf8" strokeWidth="0.7" />

              {/* Red LED Taillights */}
              <rect x="-14.5" y="-5" width="1.2" height="2" rx="0.5" fill="#ef4444" filter="url(#tailGlow)" />
              <rect x="-14.5" y="3" width="1.2" height="2" rx="0.5" fill="#ef4444" filter="url(#tailGlow)" />

              {/* ClaimShield Pulse Beacon on Roof */}
              <circle cx="-1.5" cy="0" r="1.4" fill="#00d9ff">
                <animate attributeName="r" values="1.2;1.8;1.2" dur="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>

          {/* 4 Interactive Columns Grid */}
          <div className="relative z-10 grid grid-cols-4 gap-4 h-[300px]">
            {stepsConfig.map((cfg, idx) => {
              const week = timelineWeeks[cfg.weekIndex];
              const Icon = cfg.icon;
              const isTop = cfg.nodePosition === 'top';

              return (
                <div
                  key={idx}
                  onClick={() => setSelectedWeek(week)}
                  className="flex flex-col items-center justify-between text-center cursor-pointer group px-2 py-1"
                >
                  {/* Top Element */}
                  {isTop ? (
                    /* Top Circular Icon Node */
                    <div className="relative">
                      <div className={`w-18 h-18 rounded-full bg-white border-4 ${cfg.ringColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                        <div className={`w-13 h-13 rounded-full bg-gradient-to-br ${cfg.accentColor} flex items-center justify-center text-white shadow-inner`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Top Large Number */
                    <div className="h-18 flex items-center justify-center">
                      <span className="text-3xl font-black font-mono tracking-tight text-neutral-800 group-hover:text-black transition-colors">
                        {cfg.number}
                      </span>
                    </div>
                  )}

                  {/* Middle Content: Pill Banner & Text */}
                  <div className="my-auto w-full px-1">
                    <div className={`inline-block px-4 py-1.5 rounded-full ${cfg.pillBg} font-black text-xs uppercase tracking-wider shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all mb-2`}>
                      {week.title}
                    </div>

                    <p className="text-[11px] font-semibold text-neutral-700 leading-snug line-clamp-2">
                      {week.subtitle}
                    </p>

                    <div className="mt-1.5 flex items-center justify-center gap-1 text-[10px] font-bold text-neutral-500 group-hover:text-black transition-colors">
                      <span>View details</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom Element */}
                  {!isTop ? (
                    /* Bottom Circular Icon Node */
                    <div className="relative">
                      <div className={`w-18 h-18 rounded-full bg-white border-4 ${cfg.ringColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                        <div className={`w-13 h-13 rounded-full bg-gradient-to-br ${cfg.accentColor} flex items-center justify-center text-white shadow-inner`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Bottom Large Number */
                    <div className="h-18 flex items-center justify-center">
                      <span className="text-3xl font-black font-mono tracking-tight text-neutral-800 group-hover:text-black transition-colors">
                        {cfg.number}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Small Screen Card View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden my-3">
          {stepsConfig.map((cfg, idx) => {
            const week = timelineWeeks[cfg.weekIndex];
            const Icon = cfg.icon;
            return (
              <div
                key={idx}
                onClick={() => setSelectedWeek(week)}
                className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-md transition-all cursor-pointer flex items-center gap-3.5"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cfg.accentColor} flex items-center justify-center text-white shrink-0 shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-black text-black">{cfg.number} • {week.title}</span>
                    <ExternalLink className="w-3 h-3 text-neutral-500" />
                  </div>
                  <p className="text-[11px] text-neutral-600 mt-0.5 line-clamp-1">{week.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Domain Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          {domainPillars.map((p) => (
            <div
              key={p.id}
              className="p-3.5 rounded-xl bg-white border border-black/10 hover:border-black/25 shadow-xs transition-all flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-neutral-100 border border-black/10 shrink-0">
                {getPillarIcon(p.icon)}
              </div>
              <div className="min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="text-xs font-bold text-black truncate">{p.title}</h4>
                  <span className="text-[9px] font-mono text-neutral-500 shrink-0">{p.tag}</span>
                </div>
                <p className="text-[10px] text-neutral-600 leading-snug line-clamp-1 mt-0.5">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-3.5">
          <button
            onClick={nextSlide}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white font-extrabold text-xs sm:text-sm shadow-md hover:scale-105 transition-all duration-200"
          >
            <span>Explore the claims challenge</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Week Deep Dive Modal */}
      <TimelineModal
        week={selectedWeek}
        onClose={() => setSelectedWeek(null)}
      />
    </div>
  );
};

