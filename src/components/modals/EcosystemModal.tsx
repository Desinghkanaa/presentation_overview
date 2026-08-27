import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, User, CheckCircle2, 
  Sparkles, Bot
} from 'lucide-react';

export interface EcosystemJourney {
  id: 'customer' | 'repairer' | 'handler';
  title: string;
  role: string;
  badge: string;
  summary: string;
  icon: typeof User;
  steps: {
    number: string;
    name: string;
    description: string;
    aiTrigger?: string;
    actorAction: string;
    outcome: string;
  }[];
  keyBenefits: string[];
  metrics: { label: string; value: string }[];
}

interface EcosystemModalProps {
  journey: EcosystemJourney | null;
  onClose: () => void;
}

export const EcosystemModal: React.FC<EcosystemModalProps> = ({ journey, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (journey) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [journey, onClose]);

  if (!journey) return null;

  const Icon = journey.icon;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-3xl my-auto rounded-3xl bg-white border border-black/15 shadow-2xl p-6 sm:p-8 relative text-black overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black transition-all z-10"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="flex items-start gap-4 pb-4 border-b border-black/10 shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white shrink-0 shadow-md">
              <Icon className="w-7 h-7" />
            </div>
            <div className="flex-1 min-w-0 pr-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-neutral-100 border border-black/10 text-neutral-800 uppercase">
                  {journey.badge}
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  END-TO-END WORKFLOW
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-black">
                {journey.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                {journey.summary}
              </p>
            </div>
          </div>

          {/* Scrollable Workflow Content */}
          <div className="flex-1 overflow-y-auto space-y-6 py-4 pr-1">
            {/* Step-by-Step Interactive Workflow Pipeline */}
            <div>
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-500 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Workflow Pipeline & System Execution Steps</span>
              </h3>

              <div className="space-y-3">
                {journey.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-neutral-50 border border-black/10 hover:border-black/25 transition-all flex flex-col sm:flex-row items-start gap-3.5"
                  >
                    {/* Step Number Badge */}
                    <div className="w-8 h-8 rounded-xl bg-black text-white font-mono font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                      {step.number}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <h4 className="text-sm font-bold text-black">{step.name}</h4>
                        {step.aiTrigger && (
                          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-md bg-neutral-200 border border-black/10 text-black flex items-center gap-1">
                            <Bot className="w-3 h-3 text-black" />
                            {step.aiTrigger}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-neutral-700 leading-relaxed mb-2">
                        {step.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-black/5 text-[11px]">
                        <div>
                          <strong className="text-black font-semibold">User Action: </strong>
                          <span className="text-neutral-600">{step.actorAction}</span>
                        </div>
                        <div>
                          <strong className="text-black font-semibold">System Outcome: </strong>
                          <span className="text-neutral-600">{step.outcome}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Capabilities & Differentiators */}
            <div className="p-4 rounded-2xl bg-white border border-black/10 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-black mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                <span>Key Capabilities & Friction Eliminators</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {journey.keyBenefits.map((benefit, i) => (
                  <li key={i} className="text-xs text-neutral-700 flex items-start gap-2 leading-snug">
                    <span className="text-black font-bold mt-0.5">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Impact Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {journey.metrics.map((m, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-neutral-100 border border-black/10 text-center">
                  <div className="text-base sm:text-lg font-black text-black">{m.value}</div>
                  <div className="text-[10px] font-semibold text-neutral-600 mt-0.5 uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="pt-4 border-t border-black/10 flex items-center justify-between shrink-0">
            <span className="text-[11px] font-mono text-neutral-500">
              ClaimShield+ Connected Claims Ecosystem
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs shadow-md transition-all"
            >
              Close Workflow Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
