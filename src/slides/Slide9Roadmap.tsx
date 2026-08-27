import React, { useState } from 'react';
import { 
  RotateCcw, ExternalLink, Sparkles, Cpu, GitMerge, Handshake, Target,
  Camera, Eye, Calculator
} from 'lucide-react';
import { roadmapMilestones, concludingStatement, RoadmapMilestone } from '../data/roadmap';
import { RoadmapModal } from '../components/modals/RoadmapModal';
import { usePresentation } from '../context/PresentationContext';

export const Slide9Roadmap: React.FC = () => {
  const { goToSlide } = usePresentation();
  const [selectedMilestone, setSelectedMilestone] = useState<RoadmapMilestone | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const futureScopeSteps = [
    { title: 'AI Picture Assessment', icon: Camera },
    { title: 'Damage Detection', icon: Eye },
    { title: 'Area Identification', icon: Target },
    { title: 'Repair Estimation', icon: Calculator }
  ];

  const getMilestoneIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-3.5 h-3.5" />;
      case 'GitMerge': return <GitMerge className="w-3.5 h-3.5" />;
      case 'Handshake': return <Handshake className="w-3.5 h-3.5" />;
      case 'Target': return <Target className="w-3.5 h-3.5" />;
      default: return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="relative min-h-[74vh] flex flex-col justify-center py-2">
      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Header */}
        <div className="text-center mb-2">
          <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-neutral-800 uppercase mb-1 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>PAGE 09 • TOP VIEW ROADMAP TIMELINE (4 MILESTONES)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
            From reactive claims{' '}
            <span className="bg-gradient-to-r from-black via-neutral-800 to-neutral-600 bg-clip-text text-transparent">
              to intelligent claims.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 max-w-lg mx-auto">
            Click any milestone pin on the highway or card below to view concise key points.
          </p>
        </div>

        {/* Top View Winding Highway Track (Desktop View) */}
        <div className="hidden md:block relative w-full my-2 h-[150px] select-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 150"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Road Drop Shadow */}
              <filter id="roadShadow" x="-5%" y="-20%" width="110%" height="150%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.18" floodColor="#0f172a" />
              </filter>

              {/* Pin Glow Filters */}
              <filter id="pinGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.25" floodColor="#000000" />
              </filter>

              {/* Car Glow Filter */}
              <filter id="highwayCarGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Headlight Beam Gradient */}
              <linearGradient id="highwayHeadlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#fef08a" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>

              {/* Car Body Gradient */}
              <linearGradient id="highwayCarBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="60%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>

            {/* Outer Road Edge / Curb */}
            <path
              d="M 0 85 
                 C 60 85, 75 35, 140 35 
                 C 220 35, 270 115, 380 115 
                 C 480 115, 520 135, 630 135 
                 C 730 135, 780 45, 870 45 
                 C 940 45, 960 95, 1000 95"
              stroke="#cbd5e1"
              strokeWidth="38"
              strokeLinecap="round"
              filter="url(#roadShadow)"
            />

            {/* Dark Asphalt Highway Body */}
            <path
              d="M 0 85 
                 C 60 85, 75 35, 140 35 
                 C 220 35, 270 115, 380 115 
                 C 480 115, 520 135, 630 135 
                 C 730 135, 780 45, 870 45 
                 C 940 45, 960 95, 1000 95"
              stroke="#1e293b"
              strokeWidth="32"
              strokeLinecap="round"
            />

            {/* White Dashed Centerline */}
            <path
              d="M 0 85 
                 C 60 85, 75 35, 140 35 
                 C 220 35, 270 115, 380 115 
                 C 480 115, 520 135, 630 135 
                 C 730 135, 780 45, 870 45 
                 C 940 45, 960 95, 1000 95"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeDasharray="9 7"
              strokeLinecap="round"
            />

            {/* Dashed Indicator Tether Lines from pins to road */}
            <line x1="140" y1="35" x2="140" y2="48" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="380" y1="100" x2="380" y2="115" stroke="#eab308" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="630" y1="120" x2="630" y2="135" stroke="#22c55e" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="870" y1="45" x2="870" y2="58" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" />

            {/* Animated Car Driving on the Highway */}
            <g>
              <animateMotion
                path="M 0 85 C 60 85, 75 35, 140 35 C 220 35, 270 115, 380 115 C 480 115, 520 135, 630 135 C 730 135, 780 45, 870 45 C 940 45, 960 95, 1000 95"
                dur="9s"
                repeatCount="indefinite"
                rotate="auto"
                calcMode="linear"
              />

              {/* Headlight Beams */}
              <polygon
                points="14,-4 40,-11 40,0 14,-2"
                fill="url(#highwayHeadlightBeam)"
              />
              <polygon
                points="14,4 40,0 40,11 14,2"
                fill="url(#highwayHeadlightBeam)"
              />

              {/* 4 Tires */}
              <rect x="5" y="-8.5" width="5.5" height="2.2" rx="0.8" fill="#020617" />
              <rect x="5" y="6.3" width="5.5" height="2.2" rx="0.8" fill="#020617" />
              <rect x="-10.5" y="-8.5" width="5.5" height="2.2" rx="0.8" fill="#020617" />
              <rect x="-10.5" y="6.3" width="5.5" height="2.2" rx="0.8" fill="#020617" />

              {/* Underglow */}
              <ellipse cx="0" cy="0" rx="14" ry="7" fill="#38bdf8" opacity="0.4" filter="url(#highwayCarGlow)" />

              {/* Chassis */}
              <path
                d="M -12 -5.5 
                   C -14 -5.5 -14 5.5 -12 5.5 
                   L 8 5.5 
                   C 12 5.5 13.5 3.5 13.5 0 
                   C 13.5 -3.5 12 -5.5 8 -5.5 
                   Z"
                fill="url(#highwayCarBodyGrad)"
                stroke="#38bdf8"
                strokeWidth="1"
              />

              {/* Windshield */}
              <path d="M 1 -3.8 L 4.5 -3 L 4.5 3 L 1 3.8 Z" fill="#38bdf8" opacity="0.9" />

              {/* Rear Window */}
              <path d="M -7 -3.2 L -4 -3.6 L -4 3.6 L -7 3.2 Z" fill="#38bdf8" opacity="0.75" />

              {/* Roof */}
              <rect x="-4" y="-3.2" width="5" height="6.4" rx="1" fill="#0f172a" />

              {/* Headlights */}
              <circle cx="12.5" cy="-3.2" r="1.1" fill="#ffffff" stroke="#38bdf8" strokeWidth="0.6" />
              <circle cx="12.5" cy="3.2" r="1.1" fill="#ffffff" stroke="#38bdf8" strokeWidth="0.6" />

              {/* Taillights */}
              <rect x="-13" y="-4" width="1" height="1.6" rx="0.4" fill="#ef4444" />
              <rect x="-13" y="2.4" width="1" height="1.6" rx="0.4" fill="#ef4444" />

              {/* Beacon */}
              <circle cx="-1" cy="0" r="1.1" fill="#00d9ff">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>

          {/* Interactive Teardrop Map Pins Overlaid on the Highway Curves */}
          {roadmapMilestones.map((m) => {
            const isHovered = hoveredId === m.id;
            return (
              <div
                key={m.id}
                onClick={() => setSelectedMilestone(m)}
                onMouseEnter={() => setHoveredId(m.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  left: `${(m.pinX / 1000) * 100}%`,
                  top: `${m.pinY}px`,
                  transform: 'translate(-50%, -100%)'
                }}
                className={`absolute cursor-pointer transition-all duration-200 z-20 flex flex-col items-center group ${
                  isHovered ? 'scale-125 -translate-y-2' : 'hover:scale-115'
                }`}
              >
                {/* Teardrop Pin Head */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-xl relative border-2 border-white"
                  style={{ backgroundColor: m.colorHex }}
                >
                  <div className="text-white">
                    {getMilestoneIcon(m.iconName)}
                  </div>
                  {/* Pin Point Tip */}
                  <div
                    className="absolute -bottom-1.5 w-3 h-3 rotate-45 border-r-2 border-b-2 border-white"
                    style={{ backgroundColor: m.colorHex }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Interactive Milestone Cards Below Highway */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-2">
          {roadmapMilestones.map((m) => {
            const isHovered = hoveredId === m.id;
            return (
              <div
                key={m.id}
                onClick={() => setSelectedMilestone(m)}
                onMouseEnter={() => setHoveredId(m.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`p-4 rounded-2xl bg-white border transition-all duration-200 cursor-pointer shadow-md flex flex-col justify-between relative group ${
                  isHovered 
                    ? 'border-black/40 shadow-xl -translate-y-1' 
                    : 'border-black/10 hover:border-black/30 hover:shadow-lg'
                }`}
              >
                {/* Top Numbered Badge */}
                <div className="flex items-center justify-between mb-2.5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-mono font-black text-xs shadow-sm"
                    style={{ backgroundColor: m.colorHex }}
                  >
                    {m.number}
                  </div>
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-neutral-100 border border-black/10 text-neutral-800 uppercase">
                    {m.phase.split(' ')[0]}
                  </span>
                </div>

                {/* Title & Summary */}
                <div>
                  <h3 className="text-sm sm:text-base font-black text-black group-hover:text-black transition-colors leading-tight">
                    {m.title}
                  </h3>
                  <p className="text-[10px] text-neutral-500 font-semibold mt-0.5 mb-2 line-clamp-1">
                    {m.summary}
                  </p>

                  {/* Concise Key Points Bullets */}
                  <ul className="space-y-1 border-t border-black/5 pt-2">
                    {m.keyPoints.slice(0, 2).map((point, pIdx) => (
                      <li key={pIdx} className="text-[11px] text-neutral-700 leading-snug flex items-start gap-1.5">
                        <span 
                          className="w-1 h-1 rounded-full mt-1.5 shrink-0" 
                          style={{ backgroundColor: m.colorHex }}
                        />
                        <span className="line-clamp-2">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-[10px] font-bold text-black group-hover:text-neutral-700">
                  <span>Click for key points</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 🚀 Future Scope Banner on Roadmap */}
        <div className="my-2 p-3.5 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center text-white">
              <span className="text-sm">🚀</span>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-black uppercase tracking-wider">
                Future Scope
              </h4>
              <span className="text-[10px] font-mono text-neutral-500">
                Next-Gen Computer Vision Damage Pipeline
              </span>
            </div>
          </div>

          {/* 4 Connected Pipeline Stages */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-bold">
            {futureScopeSteps.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <React.Fragment key={sIdx}>
                  <div className="px-3 py-1.5 rounded-xl bg-neutral-100 border border-black/10 flex items-center gap-1.5 text-neutral-800 shadow-2xs">
                    <StepIcon className="w-3.5 h-3.5 text-black" />
                    <span className="text-[11px] font-semibold">{step.title}</span>
                  </div>
                  {sIdx < futureScopeSteps.length - 1 && (
                    <span className="text-neutral-400 font-black text-xs">→</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Concluding Grand Finale Banner */}
        <div className="mt-2 p-3.5 sm:p-4 rounded-2xl bg-white border border-black/15 text-center shadow-md text-black flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-left">
            <h4 className="text-xs sm:text-sm font-black text-black">
              {concludingStatement.quote}
            </h4>
            <div className="flex items-center gap-2 mt-0.5 text-[10px] font-mono text-neutral-500">
              <span className="font-bold text-black">MISSION MAVERICKS</span>
              <span>•</span>
              <span className="font-bold text-black">CLAIMSHIELD+</span>
            </div>
          </div>

          <button
            onClick={() => goToSlide(0)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-bold shadow-md hover:scale-105 transition-all shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restart Showcase Deck</span>
          </button>
        </div>
      </div>

      {/* Roadmap Key Points Modal */}
      <RoadmapModal
        milestone={selectedMilestone}
        onClose={() => setSelectedMilestone(null)}
      />
    </div>
  );
};


