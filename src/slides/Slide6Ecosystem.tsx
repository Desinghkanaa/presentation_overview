import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Wrench, Briefcase, Layers, ArrowRight, 
  Sparkles, ExternalLink 
} from 'lucide-react';
import { usePresentation } from '../context/PresentationContext';
import { EcosystemModal, EcosystemJourney } from '../components/modals/EcosystemModal';

interface EcosystemPersona {
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
  pipelineStages: { name: string; detail: string; trigger: string }[];
  statValue: string;
  statLabel: string;
}

export const Slide6Ecosystem: React.FC = () => {
  const { nextSlide } = usePresentation();
  const [selectedId, setSelectedId] = useState<string>('customer');
  const [selectedJourneyModal, setSelectedJourneyModal] = useState<EcosystemJourney | null>(null);

  const personas: EcosystemPersona[] = [
    {
      id: 'customer',
      number: '01',
      title: 'Customer Journey',
      subtitle: 'Voice FNOL & ~30-min spot settlement',
      icon: User,
      accentColor: '#00d9ff',
      numColor: 'text-cyan-400',
      iconColor: 'text-cyan-400',
      activeBorder: 'border-cyan-400',
      activeGlow: 'shadow-[0_0_25px_rgba(0,217,255,0.25)]',
      activeStrip: 'bg-cyan-400',
      signalTag: 'HERO CUSTOMER EXPERIENCE',
      headline: 'Conversational intake to instant settlement',
      description: 'Touchless conversational intake, instant guided 360° damage video capture, live progress telemetry, and ~30-minute spot settlement.',
      pipelineStages: [
        { name: 'Conversational Voice FNOL', detail: 'NLP voice intake initializes claim in <60 seconds.', trigger: 'Voice & Policy 360' },
        { name: 'AI-Guided Video Capture', detail: 'Real-time camera overlay captures tamper-verified damage.', trigger: 'Computer Vision Assist' },
        { name: 'STP Fast-Track Adjudication', detail: 'Auto-verifies single-vehicle OD eligibility.', trigger: 'STP Rule Engine & OCR' },
        { name: 'Transparent Live Telemetry', detail: 'Real-time progress updates eliminate anxiety phone calls.', trigger: 'Live Event Pipeline' },
        { name: 'Instant Direct Payout', detail: 'Direct UPI/bank transfer credited in ~30 minutes.', trigger: 'Banking Gateway' }
      ],
      statValue: '~30 Mins',
      statLabel: 'Spot settlement turnaround for eligible Motor OD claims'
    },
    {
      id: 'repairer',
      number: '02',
      title: 'Repairer Portal',
      subtitle: 'Zero bay idle time & instant estimate sync',
      icon: Wrench,
      accentColor: '#22c55e',
      numColor: 'text-emerald-400',
      iconColor: 'text-emerald-400',
      activeBorder: 'border-emerald-400',
      activeGlow: 'shadow-[0_0_25px_rgba(34,197,94,0.25)]',
      activeStrip: 'bg-emerald-400',
      signalTag: 'WORKSHOP CONNECTIVITY SIGNAL',
      headline: 'Direct job-cards to transparent cashless payout',
      description: 'Direct job-card intimation, remote survey video sync, one-click liability sheet generation, and accelerated invoice settlement.',
      pipelineStages: [
        { name: 'QR Job Card Check-In', detail: 'Auto-syncs customer intake & insurer authorization.', trigger: 'QR Intake Sync' },
        { name: 'OEM Pricing Master Sync', detail: 'Auto-verifies parts & labor rates against OEM catalog.', trigger: 'Parts Pricing Master' },
        { name: 'Virtual Remote Survey', detail: 'Live synchronized video stream eliminates surveyor wait.', trigger: 'Live Video Survey' },
        { name: 'Digital Liability Sheet', detail: 'Calculates customer deductible and insurer breakdown.', trigger: 'Depreciation Engine' },
        { name: 'Direct Cashless Payout', detail: 'Accelerated invoice disbursement credited in <24 hours.', trigger: 'Workshop Payout SLA' }
      ],
      statValue: '45% Faster',
      statLabel: 'Workshop bay turnover cycle with 80% fewer estimate disputes'
    },
    {
      id: 'handler',
      number: '03',
      title: 'Handler Cockpit',
      subtitle: 'AI triage, OCR & early fraud detection',
      icon: Briefcase,
      accentColor: '#a855f7',
      numColor: 'text-purple-400',
      iconColor: 'text-purple-400',
      activeBorder: 'border-purple-400',
      activeGlow: 'shadow-[0_0_25px_rgba(168,85,247,0.25)]',
      activeStrip: 'bg-purple-400',
      signalTag: 'AI DECISION SUPPORT COCKPIT',
      headline: 'Empowering adjusters with synthesized briefs',
      description: 'Centralized decision cockpit with computer vision damage grading, automated document OCR, and early fraud anomaly detection.',
      pipelineStages: [
        { name: 'Smart Case Allocation', detail: 'Optimized queue routing by loss threshold & handler skills.', trigger: 'Allocation Matrix' },
        { name: 'Multi-Format Document OCR', detail: 'RC, license, FIR, and repair bills extracted instantly.', trigger: 'Vision OCR Engine' },
        { name: 'Damage Severity Grading', detail: 'Heatmaps segment panel damage & suggest repair vs replace.', trigger: 'Deep Learning Model' },
        { name: 'Early Fraud Risk Scoring', detail: 'Image hash comparisons flag duplicate/inflated claims.', trigger: 'Fraud Anomaly Detector' },
        { name: '1-Click Straight-Through Signoff', detail: 'High-confidence claims approved instantly with audit trail.', trigger: 'STP Approval Rule' }
      ],
      statValue: '+3.5x',
      statLabel: 'Caseload capacity with 38% higher early fraud detection'
    },
    {
      id: 'core',
      number: '04',
      title: 'Unified Ledger',
      subtitle: 'Single source of truth & audit compliance',
      icon: Layers,
      accentColor: '#f59e0b',
      numColor: 'text-amber-400',
      iconColor: 'text-amber-400',
      activeBorder: 'border-amber-400',
      activeGlow: 'shadow-[0_0_25px_rgba(245,158,11,0.25)]',
      activeStrip: 'bg-amber-400',
      signalTag: 'UNIFIED ARCHITECTURE SIGNAL',
      headline: 'Synchronized ecosystem across all stakeholders',
      description: 'Every interaction across Customer, Workshop, and Handler synchronizes in real time to a single immutable claims ledger with end-to-end auditability.',
      pipelineStages: [
        { name: 'Real-Time State Sync', detail: 'Updates in one portal reflect across all actors in <1s.', trigger: 'Event Bus Engine' },
        { name: 'Rule Engine Guardrails', detail: 'Deterministic rules protect against over-limit settlements.', trigger: 'Policy 360 Guard' },
        { name: 'Telemetry Dashboard', detail: 'Live loss ratio, cycle TAT, and leakage metrics.', trigger: 'Analytics Stream' },
        { name: 'Subrogation Triage', detail: 'Automated recovery identification for multi-party claims.', trigger: 'Subrogation Engine' },
        { name: 'Bank-Grade Security', detail: 'Complete regulatory compliance & encrypted audit trail.', trigger: 'Security & Audit' }
      ],
      statValue: '100%',
      statLabel: 'Synchronized ledger fidelity & end-to-end regulatory compliance'
    }
  ];

  // Full journey definitions for deep-dive modal
  const fullJourneys: EcosystemJourney[] = [
    {
      id: 'customer',
      title: 'Customer Journey: Simpler When It Can Be',
      role: 'Vehicle Owner / Policyholder',
      badge: 'Hero Experience',
      summary: 'Touchless conversational intake, instant damage video capture, live progress telemetry, and ~30-minute spot settlement.',
      icon: User,
      steps: [
        { number: '01', name: 'Conversational Voice & Digital FNOL', description: 'Customer initiates claim via voice or mobile portal. Policy 360 immediately validates active coverage.', aiTrigger: 'NLP Voice & Policy 360', actorAction: 'Speaks or types incident description', outcome: 'Claim dossier initialized in <60 seconds' },
        { number: '02', name: 'AI-Guided Video & Photo Capture', description: 'Real-time camera overlay guides customer to capture 360° vehicle angles, odometer, and damage focal points.', aiTrigger: 'Computer Vision Assist', actorAction: 'Follows guided camera prompts', outcome: 'Tamper-verified high-res inspection stream' },
        { number: '03', name: 'Instant Eligibility & ~30-Min Fast-Track', description: 'Automated rules engine verifies single-vehicle minor OD eligibility for instant straight-through processing.', aiTrigger: 'STP Rule Engine & OCR', actorAction: 'Reviews automated preliminary damage report', outcome: 'Eligibility confirmed without physical surveyor' },
        { number: '04', name: 'Real-Time Transparent Milestone Tracking', description: 'Customer receives live status updates at every stage (FNOL, Survey, Approval, Cashless Workshop, Settlement).', actorAction: 'Monitors timeline on mobile web app', outcome: 'Zero anxious inquiry phone calls' },
        { number: '05', name: 'Instant Direct Settlement Disbursement', description: 'Customer accepts spot payout or selects preferred network cashless garage with one-click bank/UPI payout.', aiTrigger: 'Banking Payment Gateway', actorAction: 'Confirms payout option & account', outcome: 'Immediate funds transfer in ~30 minutes' }
      ],
      keyBenefits: ['Voice FNOL in regional languages eliminates paperwork anxiety', '360° guided video capture eliminates physical survey waiting', 'Direct settlement straight-through processing in ~30 mins', 'End-to-end transparent progress tracking on mobile app'],
      metrics: [{ label: 'Turnaround Time', value: '~30 Mins' }, { label: 'Customer Satisfaction', value: '4.9 / 5.0' }, { label: 'Digital Adoption', value: '92%' }]
    },
    {
      id: 'repairer',
      title: 'Repairer Journey: Less Chasing, More Visibility',
      role: 'Workshop Manager & Surveyor',
      badge: 'Workshop Portal',
      summary: 'Direct job-card intimation, remote survey photo sync, one-click liability sheet generation, and transparent invoice settlement.',
      icon: Wrench,
      steps: [
        { number: '01', name: 'Job Card Intimation & Check-In', description: 'Workshop scans vehicle QR/RegNo. System pulls existing FNOL details and syncs customer authorization.', actorAction: 'Inputs vehicle reg & initiates intake check-in', outcome: 'Job card auto-linked to insurer claim' },
        { number: '02', name: 'Digital Estimate & Part Pricing Sync', description: 'Workshop uploads repair estimate and parts list. OEM pricing master verifies rate compatibility automatically.', aiTrigger: 'OEM Parts Master Engine', actorAction: 'Uploads repair estimate & photo bundle', outcome: 'Verified itemized parts & labour breakdown' },
        { number: '03', name: 'Remote Virtual Survey & Assessment', description: 'Surveyor conducts virtual survey over live synchronized video link, annotating damage zones in real time.', aiTrigger: 'Virtual Survey Video Stream', actorAction: 'Walks around vehicle with surveyor on video', outcome: 'Same-day survey approval without bay idle time' },
        { number: '04', name: 'Automated Digital Liability Sheet', description: 'System automatically calculates customer deductible, depreciation schedules, and insurer liability breakdown.', aiTrigger: 'Depreciation & Rules Engine', actorAction: 'Reviews generated liability matrix', outcome: 'Signed liability sheet shared with customer' },
        { number: '05', name: 'Supplementary Invoice & Direct Settlement', description: 'Final invoice uploaded with completion photos. Fast-track disbursement credited directly to workshop account.', actorAction: 'Uploads gate pass & tax invoice', outcome: 'Direct cashless credit within 24–48 hours' }
      ],
      keyBenefits: ['Eliminates multi-day vehicle bay blockage waiting for surveyors', 'Automated OEM part pricing prevents estimate disputes', 'One-click digital liability sheet prevents customer misunderstandings', 'Streamlined cashless settlement turnaround'],
      metrics: [{ label: 'Bay Cycle Time', value: '45% Faster' }, { label: 'Estimate Disputes', value: '-80%' }, { label: 'Cashless Payout SLA', value: '<24 Hours' }]
    },
    {
      id: 'handler',
      title: 'Claims Handler Cockpit: AI Decision Support',
      role: 'Claims Officer & Fraud Investigator',
      badge: 'AI Cockpit',
      summary: 'Centralized decision cockpit with computer vision damage grading, automated document OCR, and early fraud risk scoring.',
      icon: Briefcase,
      steps: [
        { number: '01', name: 'Automated Workload Allocation', description: 'New claims are routed to specialized handlers based on claim type, loss threshold, language, and availability.', aiTrigger: 'Smart Allocation Matrix', actorAction: 'Opens optimized daily claim task queue', outcome: 'Balanced caseload distribution across teams' },
        { number: '02', name: 'Automated OCR Document Extraction', description: 'Driving license, RC book, FIR, and medical bills are digitized and cross-checked against database records.', aiTrigger: 'Multi-Format OCR Engine', actorAction: 'Verifies pre-extracted metadata fields', outcome: 'Zero manual data entry & 100% data fidelity' },
        { number: '03', name: 'Computer Vision Damage Severity Grading', description: 'AI model segments damaged panels, classifies severity, and suggests repair vs replace recommendations.', aiTrigger: 'Deep Learning Vision Model', actorAction: 'Reviews AI severity heatmaps and bounding boxes', outcome: 'Standardized and objective damage estimates' },
        { number: '04', name: 'Early Fraud Scoring & Duplicate Detection', description: 'Real-time fraud algorithms compare image hashes with prior claims, analyze metadata, and check loss records.', aiTrigger: 'Fraud Signal & Anomaly Detection', actorAction: 'Reviews fraud risk score & alert flags', outcome: 'High-risk claims routed to investigation team' },
        { number: '05', name: '1-Click Straight-Through Approval', description: 'Low-risk, high-confidence claims are approved with a single click or automatically straight-through processed.', actorAction: 'Executes final sign-off or notes exception', outcome: 'Instant settlement instruction triggered' }
      ],
      keyBenefits: ['AI damage model provides consistent repair vs replace benchmarks', 'Automated OCR eliminates 50%+ of manual paperwork retyping', 'Fraud scoring identifies duplicate image reuse and inflated bills', 'Augments human judgment while cutting claim cycle times by 70%'],
      metrics: [{ label: 'Caseload Capacity', value: '+3.5x' }, { label: 'Fraud Detection', value: '+38% Higher' }, { label: 'Straight-Through Rate', value: '85%+ STP' }]
    }
  ];

  const activePersona = personas.find((p) => p.id === selectedId) || personas[0];
  const ActiveIcon = activePersona.icon;

  const handleOpenModal = () => {
    const matched = fullJourneys.find((j) => j.id === activePersona.id) || fullJourneys[0];
    setSelectedJourneyModal(matched);
  };

  return (
    <div className="relative min-h-[74vh] flex flex-col justify-center py-2">
      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-neutral-800 uppercase mb-1 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>PAGE 06 • THE PRODUCT ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
            Three journeys.{' '}
            <span className="bg-gradient-to-r from-black via-neutral-800 to-neutral-600 bg-clip-text text-transparent">
              One connected ecosystem.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 max-w-lg mx-auto">
            Click any stakeholder card to inspect the interactive workflow, actor actions, and real-time ledger synchronization.
          </p>
        </div>

        {/* 2-Column Persona Cards Grid & Dynamic Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch my-2">
          {/* Left Column: 2x2 Grid of 4 Ecosystem Cards */}
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
                      layoutId="ecosystemActiveBottomStrip"
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

                {/* Top Section: Icon, Signal Tag, Title & Paragraph */}
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

                  {/* 5-Stage Pipeline Flow Preview */}
                  <div className="mt-4 pt-3.5 border-t border-white/10 space-y-2">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-1 flex items-center justify-between">
                      <span>Workflow Pipeline Execution</span>
                      <span style={{ color: activePersona.accentColor }}>5 Automated Stages</span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activePersona.pipelineStages.slice(0, 4).map((stage, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ backgroundColor: activePersona.accentColor }}
                          />
                          <div className="min-w-0">
                            <span className="text-xs font-bold text-white block truncate">
                              {stage.name}
                            </span>
                            <span className="text-[10px] text-neutral-300 leading-snug line-clamp-1">
                              {stage.detail}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Stat Badge, Modal Trigger & Telemetry Bars */}
                <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between gap-4">
                  {/* Metric Stat Badge */}
                  <div className="flex items-center gap-3">
                    <div className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-baseline gap-2">
                      <span
                        className="text-lg sm:text-xl font-black font-mono"
                        style={{ color: activePersona.accentColor }}
                      >
                        {activePersona.statValue}
                      </span>
                      <span className="text-[10px] text-neutral-400 font-medium max-w-[180px] leading-tight">
                        {activePersona.statLabel}
                      </span>
                    </div>

                    {activePersona.id !== 'core' && (
                      <button
                        onClick={handleOpenModal}
                        className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-semibold transition-all hover:scale-105"
                      >
                        <span>Inspect Flow</span>
                        <ExternalLink className="w-3 h-3 text-neutral-300" />
                      </button>
                    )}
                  </div>

                  {/* HUD Telemetry Signal Bars */}
                  <div className="flex items-end gap-1.5 shrink-0 pr-1">
                    <div
                      className="w-1.5 h-5 rounded-full animate-pulse"
                      style={{ backgroundColor: `${activePersona.accentColor}80` }}
                    />
                    <div
                      className="w-1.5 h-9 rounded-full"
                      style={{ backgroundColor: activePersona.accentColor }}
                    />
                    <div
                      className="w-1.5 h-12 rounded-full"
                      style={{ backgroundColor: activePersona.accentColor }}
                    />
                    <div
                      className="w-1.5 h-4 rounded-full"
                      style={{ backgroundColor: `${activePersona.accentColor}60` }}
                    />
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
            <span>Explore AI Automation & Telemetry</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Deep Dive Ecosystem Modal */}
      <EcosystemModal
        journey={selectedJourneyModal}
        onClose={() => setSelectedJourneyModal(null)}
      />
    </div>
  );
};
