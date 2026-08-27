import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingDown, Zap, ShieldCheck, GitMerge, ArrowRight, 
  Sparkles, ExternalLink, FileText 
} from 'lucide-react';
import { evidenceItems, EvidenceItem } from '../data/links';
import { EvidenceModal } from '../components/modals/EvidenceModal';
import { usePresentation } from '../context/PresentationContext';

interface ImpactPillar {
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
  keyPoints: { label: string; desc: string }[];
  statValue: string;
  statLabel: string;
}

export const Slide8Evidence: React.FC = () => {
  const { nextSlide } = usePresentation();
  const [selectedId, setSelectedId] = useState<string>('efficiency');
  const [selectedEvidence, setSelectedEvidence] = useState<EvidenceItem | null>(null);
  const [showDossiers, setShowDossiers] = useState<boolean>(false);

  const pillars: ImpactPillar[] = [
    {
      id: 'efficiency',
      number: '01',
      title: 'Efficiency & Cost',
      subtitle: 'Automated verification & zero rekeying',
      icon: TrendingDown,
      accentColor: '#00d9ff',
      numColor: 'text-cyan-400',
      iconColor: 'text-cyan-400',
      activeBorder: 'border-cyan-400',
      activeGlow: 'shadow-[0_0_25px_rgba(0,217,255,0.25)]',
      activeStrip: 'bg-cyan-400',
      signalTag: 'OPERATIONAL VALUE SIGNAL',
      headline: 'Scale claim volumes without linear staffing costs',
      description: 'By automating repetitive document verification and OCR data extraction, standard low-risk claims move straight through without manual intervention, eliminating paperwork overhead.',
      keyPoints: [
        { label: 'Zero Manual Rekeying', desc: 'AI-assisted OCR extracts itemized bills & garage estimates instantly.' },
        { label: 'Straight-Through Processing (STP)', desc: 'Standard single-vehicle OD claims auto-adjudicated without manual touch.' },
        { label: 'Decoupled Growth Capacity', desc: 'Insurers handle 3x volume spikes during monsoon/peak surges effortlessly.' }
      ],
      statValue: '~60%',
      statLabel: 'Reduction in manual document handling & administrative overhead'
    },
    {
      id: 'turnaround',
      number: '02',
      title: 'Turnaround Time',
      subtitle: 'Multi-day delays compressed to minutes',
      icon: Zap,
      accentColor: '#22c55e',
      numColor: 'text-emerald-400',
      iconColor: 'text-emerald-400',
      activeBorder: 'border-emerald-400',
      activeGlow: 'shadow-[0_0_25px_rgba(34,197,94,0.25)]',
      activeStrip: 'bg-emerald-400',
      signalTag: 'SPEED & ACCELERATION SIGNAL',
      headline: 'From days of coordination to ~30-min spot settlement',
      description: 'What historically took 3 to 7 days of fragmented coordination between customers, repair workshops, and adjusters is compressed into minutes via automated straight-through assessment.',
      keyPoints: [
        { label: 'Instant Fast-Track Intake', desc: 'Rule engine identifies single-vehicle OD eligibility in <60 seconds.' },
        { label: 'Remote Virtual Survey', desc: 'Eliminates physical surveyor dispatch queue and unblocks workshop bays.' },
        { label: 'One-Click Direct Payout', desc: 'Instant bank/UPI disbursement as soon as customer confirms settlement quote.' }
      ],
      statValue: '~30 Mins',
      statLabel: 'End-to-end turnaround time for eligible spot settlement claims'
    },
    {
      id: 'accuracy',
      number: '03',
      title: 'Accuracy & Trust',
      subtitle: 'Consistent rule checks & customer loyalty',
      icon: ShieldCheck,
      accentColor: '#a855f7',
      numColor: 'text-purple-400',
      iconColor: 'text-purple-400',
      activeBorder: 'border-purple-400',
      activeGlow: 'shadow-[0_0_25px_rgba(168,85,247,0.25)]',
      activeStrip: 'bg-purple-400',
      signalTag: 'QUALITY & FIDELITY SIGNAL',
      headline: 'Empowering adjusters & building policyholder trust',
      description: 'Automated rule engines eliminate human calculation errors and ensure consistent policy enforcement. Adjusters receive concise decision briefs to focus on complex, high-value cases.',
      keyPoints: [
        { label: 'Decision-Support Briefs', desc: 'Handlers receive synthesized summaries rather than wading through raw files.' },
        { label: 'Uniform Policy Enforcement', desc: 'Consistent OEM pricing rules and depreciation matrices prevent leakage.' },
        { label: 'Transparent Milestone Telemetry', desc: 'Live progress tracking turns accident anxiety into a high-trust experience.' }
      ],
      statValue: '4.9 / 5.0',
      statLabel: 'Customer CSAT score driven by instant visibility & zero status calls'
    },
    {
      id: 'pmo',
      number: '04',
      title: 'PMO Governance',
      subtitle: 'Structured execution & strict quality gates',
      icon: GitMerge,
      accentColor: '#f59e0b',
      numColor: 'text-amber-400',
      iconColor: 'text-amber-400',
      activeBorder: 'border-amber-400',
      activeGlow: 'shadow-[0_0_25px_rgba(245,158,11,0.25)]',
      activeStrip: 'bg-amber-400',
      signalTag: 'ENTERPRISE GOVERNANCE SIGNAL',
      headline: 'Governing backbone aligning tech with business impact',
      description: 'PMO discipline ensures ClaimShield+ moves from idea to enterprise-ready platform through strategic milestone alignment, risk management, and continuous KPI telemetry.',
      keyPoints: [
        { label: 'Phased Sprint Milestones', desc: 'Discovery, Core Rules, Integration & Validation kept in strict lockstep.' },
        { label: 'Risk & Exception Gates', desc: 'Ambiguous claims route cleanly to human exception queues with full audit.' },
        { label: 'KPI Health Telemetry', desc: 'Live monitoring of STP rates, OCR precision, and SLA latency benchmarks.' }
      ],
      statValue: '100%',
      statLabel: 'Regulatory traceability, artifact handover, and audit compliance'
    }
  ];

  const activePillar = pillars.find((p) => p.id === selectedId) || pillars[0];
  const ActiveIcon = activePillar.icon;

  return (
    <div className="relative min-h-[74vh] flex flex-col justify-center py-2">
      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-neutral-800 uppercase mb-1 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>PAGE 08 • BUSINESS IMPACT & PMO DISCIPLINES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
            Measurable value.{' '}
            <span className="bg-gradient-to-r from-black via-neutral-800 to-neutral-600 bg-clip-text text-transparent">
              Disciplined execution.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 max-w-lg mx-auto">
            Click any impact pillar to inspect measurable operational gains, turnaround compression, and PMO governance gates.
          </p>
        </div>

        {/* 2-Column Impact Cards Grid & Dynamic Showcase Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch my-2">
          {/* Left Column: 2x2 Grid of 4 Impact & PMO Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-3.5">
            {pillars.map((p) => {
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
                      layoutId="impactActiveBottomStrip"
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
                key={activePillar.id}
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
                  {/* Large Pillar Icon */}
                  <div className="mb-3">
                    <ActiveIcon
                      className="w-10 h-10 sm:w-12 sm:h-12"
                      style={{ color: activePillar.accentColor }}
                    />
                  </div>

                  {/* Uppercase Signal Category Tag */}
                  <div
                    className="text-[10px] sm:text-[11px] font-mono font-extrabold tracking-[0.2em] uppercase mb-1.5"
                    style={{ color: activePillar.accentColor }}
                  >
                    {activePillar.signalTag}
                  </div>

                  {/* Main Headline */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight mb-2">
                    {activePillar.headline}
                  </h3>

                  {/* Summary Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl font-normal">
                    {activePillar.description}
                  </p>

                  {/* Impact Key Points Grid */}
                  <div className="mt-4 pt-3.5 border-t border-white/10 space-y-2">
                    {activePillar.keyPoints.map((kp, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: activePillar.accentColor }}
                        />
                        <div>
                          <span className="text-xs font-bold text-white block">
                            {kp.label}
                          </span>
                          <span className="text-[11px] text-neutral-300 leading-snug">
                            {kp.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Metric Badge & HUD Telemetry Visual */}
                <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between gap-4">
                  {/* Metric Stat */}
                  <div className="flex items-center gap-3">
                    <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-baseline gap-2">
                      <span
                        className="text-lg sm:text-xl font-black font-mono"
                        style={{ color: activePillar.accentColor }}
                      >
                        {activePillar.statValue}
                      </span>
                      <span className="text-[10px] text-neutral-400 font-medium max-w-[200px] leading-tight">
                        {activePillar.statLabel}
                      </span>
                    </div>
                  </div>

                  {/* HUD Telemetry Signal Bars */}
                  <div className="flex items-end gap-1.5 shrink-0 pr-1">
                    <div
                      className="w-1.5 h-5 rounded-full animate-pulse"
                      style={{ backgroundColor: `${activePillar.accentColor}80` }}
                    />
                    <div
                      className="w-1.5 h-9 rounded-full"
                      style={{ backgroundColor: activePillar.accentColor }}
                    />
                    <div
                      className="w-1.5 h-12 rounded-full"
                      style={{ backgroundColor: activePillar.accentColor }}
                    />
                    <div
                      className="w-1.5 h-4 rounded-full"
                      style={{ backgroundColor: `${activePillar.accentColor}60` }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Bar: Action Buttons & Artifacts Drawer Toggle */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setShowDossiers(!showDossiers)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-black/10 text-black font-bold text-xs shadow-xs transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5 text-black" />
            <span>{showDossiers ? 'Hide PMO Artifacts' : 'Inspect PMO Artifacts & Specifications (6 Files)'}</span>
          </button>

          <button
            onClick={nextSlide}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-extrabold text-xs sm:text-sm shadow-md hover:scale-105 transition-all duration-200"
          >
            <span>Explore Strategic Roadmap (Current • Next • Future)</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Collapsible PMO Artifacts Grid (When expanded) */}
        <AnimatePresence>
          {showDossiers && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 overflow-hidden"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 p-3 rounded-2xl bg-neutral-50 border border-black/10">
                {evidenceItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedEvidence(item)}
                    className="p-3 rounded-xl bg-white border border-black/10 hover:border-black/30 text-left transition-all hover:scale-102 flex flex-col justify-between group shadow-xs"
                  >
                    <div>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-700">
                        {item.code}
                      </span>
                      <h4 className="text-xs font-bold text-black mt-1.5 truncate group-hover:text-cyan-600 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-black/5 flex items-center justify-between text-[9px] font-medium text-neutral-500">
                      <span>View</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Evidence Viewer Modal */}
      <EvidenceModal
        item={selectedEvidence}
        onClose={() => setSelectedEvidence(null)}
      />
    </div>
  );
};
