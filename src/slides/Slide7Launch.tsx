import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, FileText, Mic, MessageSquare, ShieldCheck, 
  ArrowRight, ExternalLink, Sparkles, AlertOctagon
} from 'lucide-react';
import { usePresentation } from '../context/PresentationContext';
import { RuleEngineModal } from '../components/modals/RuleEngineModal';

export const Slide7Launch: React.FC = () => {
  const { nextSlide } = usePresentation();
  const [isRuleModalOpen, setIsRuleModalOpen] = useState(false);

  const aiFeatures = [
    {
      title: 'OCR',
      desc: 'Extracts data from RC, Driving Licence & documents',
      icon: FileText
    },
    {
      title: 'Voice Assist',
      desc: 'Enables faster voice-based interaction',
      icon: Mic
    },
    {
      title: 'Chatbot',
      desc: 'Provides instant claim guidance',
      icon: MessageSquare
    },
    {
      title: 'Decision Support',
      desc: 'Combines claim, policy & validation insights',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="relative min-h-[74vh] flex flex-col justify-center py-2">
      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-neutral-800 uppercase mb-1 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>PAGE 07 • AI & AUTOMATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
            AI & Automation —{' '}
            <span className="bg-gradient-to-r from-black via-neutral-800 to-neutral-600 bg-clip-text text-transparent">
              Powering Intelligent Claims Processing
            </span>
          </h2>
        </div>

        {/* 2 Main Columns: AI Intelligence Layer vs Automation Execution Layer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
          {/* Card 1: 🧠 AI | Intelligence Layer */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-5 rounded-2xl bg-white border border-black/10 shadow-md flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-black/10 mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white shadow-xs">
                    <span className="text-base">🧠</span>
                  </div>
                  <div>
                    <h3 className="text-base font-black text-black leading-tight">
                      AI | Intelligence Layer
                    </h3>
                    <span className="text-[10px] font-mono text-neutral-500 font-semibold uppercase">
                      Cognitive Decision Augmentation
                    </span>
                  </div>
                </div>
                <span className="text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-neutral-100 border border-black/10 text-neutral-800">
                  4 ENGINES
                </span>
              </div>

              {/* 4 AI Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {aiFeatures.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-neutral-50 border border-black/5 hover:border-black/20 hover:bg-neutral-100/70 transition-all space-y-1"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-neutral-200/80 flex items-center justify-center text-black">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="text-xs font-black text-black">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-neutral-600 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Mini Pillar Note */}
            <div className="mt-3 pt-2.5 border-t border-black/10 flex items-center gap-2 text-[11px] font-semibold text-neutral-600">
              <Sparkles className="w-3.5 h-3.5 text-black shrink-0" />
              <span>Multi-modal intelligence assisting policyholders and claims officers.</span>
            </div>
          </motion.div>

          {/* Card 2: ⚙️ Automation | Execution Layer */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-5 rounded-2xl bg-white border border-black/10 shadow-md flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-black/10 mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center text-white shadow-xs">
                    <span className="text-base">⚙️</span>
                  </div>
                  <div>
                    <h3 className="text-base font-black text-black leading-tight">
                      Automation | Execution Layer
                    </h3>
                    <span className="text-[10px] font-mono text-neutral-500 font-semibold uppercase">
                      Rule Engine & Policy Gating
                    </span>
                  </div>
                </div>
                <span className="text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-neutral-100 border border-black/10 text-neutral-800">
                  EXECUTION
                </span>
              </div>

              {/* Execution Pipeline Ribbon */}
              <div className="p-2.5 rounded-xl bg-neutral-100 border border-black/10 mb-3 text-center">
                <div className="flex flex-wrap items-center justify-center gap-1 text-[11px] font-bold text-black">
                  <span>Rule Engine</span>
                  <span className="text-neutral-400">→</span>
                  <span>Validation</span>
                  <span className="text-neutral-400">→</span>
                  <span className="px-2 py-0.5 rounded bg-black text-white text-[10px]">
                    Fast Track / Exception Handling
                  </span>
                </div>
              </div>

              {/* Evaluator Stages Breakdown */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-neutral-50 border border-black/5 flex items-start gap-2">
                  <span className="text-[10px] font-mono font-black px-1.5 py-0.5 rounded bg-black text-white shrink-0 mt-0.5">
                    Stage 1
                  </span>
                  <div className="min-w-0">
                    <span className="font-bold text-black text-xs">FNOL Evaluation:</span>
                    <p className="text-[11px] text-neutral-600 leading-snug">
                      Policy status, late intimation, FIR, claim frequency, driver eligibility
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-neutral-50 border border-black/5 flex items-start gap-2">
                  <span className="text-[10px] font-mono font-black px-1.5 py-0.5 rounded bg-black text-white shrink-0 mt-0.5">
                    Stage 2
                  </span>
                  <div className="min-w-0">
                    <span className="font-bold text-black text-xs">Survey Evaluation:</span>
                    <p className="text-[11px] text-neutral-600 leading-snug">
                      Suspicious flags, damage consistency, IDV threshold, garage watch-list, estimate outliers
                    </p>
                  </div>
                </div>
              </div>

              {/* Rule Outcomes Banner */}
              <div className="mt-2.5 flex items-center justify-between text-[11px] font-bold px-2 py-1.5 rounded-lg bg-neutral-100 border border-black/5 text-neutral-800">
                <span className="flex items-center gap-1">
                  <AlertOctagon className="w-3.5 h-3.5 text-red-600" />
                  Hard Rules → 🔴 Red Flag
                </span>
                <span className="text-neutral-400">|</span>
                <span>Point Rules → 📊 Risk Score</span>
              </div>
            </div>

            {/* Interactive Button to View Configured Rules */}
            <div className="mt-3 pt-2.5 border-t border-black/10">
              <button
                onClick={() => setIsRuleModalOpen(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-black shadow-md flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>View Configured Claim Rules</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Tagline / Closing Synthesis Tile */}
        <div className="p-3.5 rounded-xl bg-neutral-100 border border-black/10 text-center text-xs sm:text-sm text-neutral-800 font-medium my-2">
          <strong className="text-black">AI brings the intelligence. Automation brings the speed.</strong>{' '}
          Together, they deliver faster, smarter claims processing.
        </div>

        {/* Next Slide CTA */}
        <div className="text-center mt-3">
          <button
            onClick={nextSlide}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white font-extrabold text-xs sm:text-sm shadow-md hover:scale-105 transition-all duration-200"
          >
            <span>Explore Business Impact & PMO Disciplines</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Rule Engine Modal Popup */}
      <RuleEngineModal
        isOpen={isRuleModalOpen}
        onClose={() => setIsRuleModalOpen(false)}
      />
    </div>
  );
};

