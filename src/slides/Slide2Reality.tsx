import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Wrench, ClipboardCheck, Landmark, ArrowRight, 
  AlertTriangle 
} from 'lucide-react';
import { usePresentation } from '../context/PresentationContext';

interface PersonaProblem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accentColor: string;
  numColor: string;
  iconColor: string;
  activeBorder: string;
  activeGlow: string;
  activeStrip: string;
  signalTag: string;
  headline: string;
  description: string;
  bottlenecks: string[];
  statValue: string;
  statLabel: string;
  quote: string;
}

export const Slide2Reality: React.FC = () => {
  const { nextSlide } = usePresentation();
  const [selectedId, setSelectedId] = useState<string>('repairer');

  const personas: PersonaProblem[] = [
    {
      id: 'customer',
      number: '01',
      title: 'Customer',
      subtitle: 'Uncertainty after impact',
      icon: User,
      accentColor: '#f59e0b',
      numColor: 'text-amber-400',
      iconColor: 'text-amber-400',
      activeBorder: 'border-amber-400',
      activeGlow: 'shadow-[0_0_25px_rgba(245,158,11,0.25)]',
      activeStrip: 'bg-amber-400',
      signalTag: 'VISIBILITY & ANXIETY SIGNAL',
      headline: 'Uncertainty after impact',
      description: 'Customers face high friction at FNOL, endless IVR phone queues, and zero real-time visibility into claim approval and settlement progress.',
      bottlenecks: [
        'Unclear claim registration channels with endless IVR waiting',
        'Repetitive physical document submissions & photo re-taking',
        'Zero live milestone tracking causing high customer anxiety',
        'Delayed spot settlements for minor single-vehicle OD damage'
      ],
      statValue: '42%',
      statLabel: 'Customer dissatisfaction driven by inspection status blindspots',
      quote: '“I had an accident, but figuring out how to register the claim took endless phone calls and anxiety.”'
    },
    {
      id: 'repairer',
      number: '02',
      title: 'Repairer',
      subtitle: 'Idle workshop time',
      icon: Wrench,
      accentColor: '#00d9ff',
      numColor: 'text-cyan-400',
      iconColor: 'text-cyan-400',
      activeBorder: 'border-cyan-400',
      activeGlow: 'shadow-[0_0_25px_rgba(0,217,255,0.25)]',
      activeStrip: 'bg-cyan-400',
      signalTag: 'READINESS SIGNAL',
      headline: 'Approval waits stall repair',
      description: 'Repairers need an immediate, shared view of eligibility, authorisation and repair readiness.',
      bottlenecks: [
        '3 to 7 days physical surveyor dispatch delay blocking repair bays',
        'Manual estimate reviews and OEM part price discrepancies',
        'Unclear depreciation & customer deductible calculations',
        'Cashless settlement payment lag averaging 12-18 business days'
      ],
      statValue: '3-7 Days',
      statLabel: 'Surveyor dispatch delay blocking workshop repair bays',
      quote: '“Vehicles occupy workshop bays for days waiting for physical survey inspection and estimate sign-off.”'
    },
    {
      id: 'handler',
      number: '03',
      title: 'Claims Handler',
      subtitle: 'Manual hand-offs',
      icon: ClipboardCheck,
      accentColor: '#f87171',
      numColor: 'text-rose-400',
      iconColor: 'text-rose-400',
      activeBorder: 'border-rose-400',
      activeGlow: 'shadow-[0_0_25px_rgba(248,113,113,0.25)]',
      activeStrip: 'bg-rose-400',
      signalTag: 'OPERATIONAL LOAD SIGNAL',
      headline: 'Manual hand-offs stall turnaround',
      description: 'Handlers spend over 50% of their working hours manually typing paper bills into legacy spreadsheets and cross-verifying complex policy rules.',
      bottlenecks: [
        'Over 50% of handler time spent typing paper bills into spreadsheets',
        'Fragmented policy records allowing duplicate and inflated claims',
        'Lack of automated damage severity grading at First Notice of Loss',
        'High cognitive overload and burnout across claims operations'
      ],
      statValue: '55%+',
      statLabel: 'Working hours lost to repetitive document re-verification',
      quote: '“Over 50% of my time is spent manually typing paper bills into legacy spreadsheets and cross-checking rules.”'
    },
    {
      id: 'insurer',
      number: '04',
      title: 'Insurer',
      subtitle: 'Pressure at scale',
      icon: Landmark,
      accentColor: '#fb923c',
      numColor: 'text-orange-400',
      iconColor: 'text-orange-400',
      activeBorder: 'border-orange-400',
      activeGlow: 'shadow-[0_0_25px_rgba(251,146,60,0.25)]',
      activeStrip: 'bg-orange-400',
      signalTag: 'LOSS RATIO & SCALE SIGNAL',
      headline: 'Leakage risk & rising claims friction',
      description: 'Insurers suffer from high loss adjustment expense (LAE), estimate inflation, and missed fraud detection across fragmented legacy core systems.',
      bottlenecks: [
        'High loss adjustment expenses (LAE) on high-frequency OD claims',
        'Delayed subrogation and parts pricing verification at scale',
        'Inability to scale straight-through processing without risk guardrails',
        'Slow settlement cycles impacting customer retention and NPS'
      ],
      statValue: '18% LAE',
      statLabel: 'Operational overhead on manual physical inspection lifecycles',
      quote: '“Managing rising claims volume with legacy workflows leads to estimate leakage and slow customer turnarounds.”'
    }
  ];

  const activePersona = personas.find((p) => p.id === selectedId) || personas[1];
  const ActiveIcon = activePersona.icon;

  return (
    <div className="relative min-h-[74vh] flex flex-col justify-center py-2">
      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-neutral-800 uppercase mb-1 flex items-center justify-center gap-2">
            <AlertTriangle className="w-3.5 h-3.5 text-black" />
            <span>PAGE 04 • THE CLAIMS BOTTLENECKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
            One claim.{' '}
            <span className="bg-gradient-to-r from-black via-neutral-800 to-neutral-600 bg-clip-text text-transparent">
              Many frictions.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 max-w-lg mx-auto">
            Click any stakeholder card to inspect operational bottlenecks, readiness signals, and breakdown evidence.
          </p>
        </div>

        {/* 2-Column Persona Cards & Dynamic Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch my-2">
          {/* Left Column: 2x2 Grid of 4 Persona Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-3.5">
            {personas.map((p) => {
              const Icon = p.icon;
              const isSelected = selectedId === p.id;

              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
                  className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 relative flex flex-col justify-between cursor-pointer group bg-neutral-900/90 backdrop-blur-xl border ${
                    isSelected
                      ? `${p.activeBorder} ${p.activeGlow} ring-1 ring-white/20 bg-neutral-900`
                      : 'border-white/10 hover:border-white/25 hover:bg-neutral-800/80 shadow-md'
                  }`}
                >
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className={`text-xs sm:text-sm font-mono font-bold ${isSelected ? p.numColor : 'text-neutral-400'}`}>
                      {p.number}
                    </span>
                    <Icon className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${isSelected ? p.iconColor : 'text-neutral-400'}`} />
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5 leading-snug font-medium line-clamp-1">
                      {p.subtitle}
                    </p>
                  </div>

                  {/* Bottom Active Strip Indicator */}
                  {isSelected && (
                    <motion.div
                      layoutId="cardActiveBottomStrip"
                      className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${p.activeStrip}`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: High-Impact Dynamic Showcase Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePersona.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="h-full p-6 sm:p-7 rounded-2xl bg-neutral-900/95 backdrop-blur-xl border border-white/10 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl"
              >
                {/* Background Tech Watermark Lines */}
                <div className="absolute inset-0 pointer-events-none opacity-5 bg-gradient-to-br from-white via-transparent to-black" />

                {/* Top Section: Icon, Signal Badge, Title & Paragraph */}
                <div>
                  {/* Large Persona Icon */}
                  <div className="mb-3">
                    <ActiveIcon
                      className="w-10 h-10 sm:w-12 sm:h-12"
                      style={{ color: activePersona.accentColor }}
                    />
                  </div>

                  {/* Uppercase Signal Category Tag */}
                  <div
                    className="text-[10px] sm:text-[11px] font-mono font-extrabold tracking-[0.2em] uppercase mb-1.5"
                    style={{ color: activePersona.accentColor }}
                  >
                    {activePersona.signalTag}
                  </div>

                  {/* Main Headline */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight mb-2">
                    {activePersona.headline}
                  </h3>

                  {/* Summary Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl font-normal">
                    {activePersona.description}
                  </p>

                  {/* Bottlenecks Grid */}
                  <div className="mt-4 pt-3.5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activePersona.bottlenecks.map((pt, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: activePersona.accentColor }}
                        />
                        <span className="text-[11px] text-neutral-300 leading-snug">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Stat, Quote & HUD Telemetry Visual */}
                <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between gap-4">
                  {/* Metric / Field Voice */}
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-baseline gap-1.5">
                      <span
                        className="text-base sm:text-lg font-black font-mono"
                        style={{ color: activePersona.accentColor }}
                      >
                        {activePersona.statValue}
                      </span>
                      <span className="text-[10px] text-neutral-400 font-medium max-w-[180px] truncate">
                        {activePersona.statLabel}
                      </span>
                    </div>
                  </div>

                  {/* HUD Telemetry Signal Bars (Matching screenshot aesthetic) */}
                  <div className="flex items-end gap-1.5 shrink-0 pr-1">
                    <div className="w-1.5 h-5 rounded-full bg-cyan-400/50 animate-pulse" />
                    <div className="w-1.5 h-8 rounded-full bg-cyan-400/80" />
                    <div className="w-1.5 h-12 rounded-full bg-cyan-400" />
                    <div className="w-1.5 h-3 rounded-full bg-cyan-400/40" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Bottom Section */}
        <div className="mt-3 text-center flex flex-col items-center">
          <button
            onClick={nextSlide}
            className="flex items-center gap-2.5 px-7 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white font-extrabold text-xs sm:text-sm shadow-md hover:scale-105 transition-all duration-200"
          >
            <span>Reveal our solution: ClaimShield+</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
