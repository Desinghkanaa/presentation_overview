import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, AlertOctagon, CheckCircle2, Zap } from 'lucide-react';

interface RuleEngineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RuleEngineModal: React.FC<RuleEngineModalProps> = ({ isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const stage1Rules = [
    { code: 'S1-R01', desc: 'Policy not active / lapsed on loss date', isHard: true },
    { code: 'S1-R02', desc: 'Claim intimated >7 days after loss', isHard: false },
    { code: 'S1-R03', desc: 'Loss within 15 days of policy inception', isHard: false },
    { code: 'S1-R04', desc: 'FIR required but not provided', isHard: false },
    { code: 'S1-R05', desc: 'Claim frequency exceeds threshold', isHard: false },
    { code: 'S1-R06', desc: 'Driver not a permitted driver', isHard: false },
    { code: 'S1-R07', desc: 'Loss location inconsistent with usage area', isHard: false },
  ];

  const stage2Rules = [
    { code: 'S2-R01', desc: 'Surveyor flags claim as suspicious', isHard: true },
    { code: 'S2-R02', desc: 'Damage pattern inconsistent with FNOL', isHard: false },
    { code: 'S2-R03', desc: 'Estimate at/above % of IDV', isHard: false },
    { code: 'S2-R04', desc: 'Garage on watch-list / high frequency', isHard: false },
    { code: 'S2-R05', desc: 'Pre-existing damage claimed as new', isHard: false },
    { code: 'S2-R06', desc: 'Estimate outlier vs similar claims', isHard: false },
    { code: 'S2-R07', desc: 'Mandatory survey documents missing', isHard: false },
  ];

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/50 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 20 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-white border border-black/15 rounded-3xl p-6 sm:p-7 shadow-2xl z-10 text-black max-h-[88vh] flex flex-col overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black transition-all z-10"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="flex items-start gap-3.5 pb-4 border-b border-black/10 shrink-0 pr-8">
            <div className="w-11 h-11 rounded-2xl bg-black flex items-center justify-center text-white shadow-md shrink-0">
              <Cpu className="w-5 h-5" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-neutral-100 border border-black/10 text-neutral-800 uppercase">
                  EXECUTION LAYER
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  14 ACTIVE EVALUATORS
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-black">
                Rule Engine — Configured Claim Rules
              </h3>
              <p className="text-xs text-neutral-600 mt-0.5">
                Evaluates intake eligibility, fraud anomaly patterns, and straight-through routing.
              </p>
            </div>
          </div>

          {/* Modal Body - 2 Stages Grid */}
          <div className="flex-1 overflow-y-auto space-y-4 py-4 pr-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Stage 1: FNOL */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-black/10 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-black/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-black" />
                    <h4 className="text-xs font-black text-black uppercase tracking-wider">
                      Stage 1 — FNOL
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 font-bold">7 Rules</span>
                </div>

                <div className="space-y-1.5">
                  {stage1Rules.map((r, i) => (
                    <div 
                      key={i}
                      className="p-2 rounded-xl bg-white border border-black/5 flex items-center justify-between gap-2 text-[11px] shadow-2xs"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="font-mono font-bold text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-700 shrink-0">
                          {r.code}
                        </span>
                        <span className="text-neutral-800 font-medium truncate">
                          {r.desc}
                        </span>
                      </div>

                      {r.isHard ? (
                        <span className="shrink-0 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center gap-1">
                          <AlertOctagon className="w-2.5 h-2.5" />
                          Hard → 🔴 Red
                        </span>
                      ) : (
                        <span className="shrink-0 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-black/5">
                          Risk Score
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage 2: Survey */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-black/10 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-black/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-black" />
                    <h4 className="text-xs font-black text-black uppercase tracking-wider">
                      Stage 2 — Survey
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 font-bold">7 Rules</span>
                </div>

                <div className="space-y-1.5">
                  {stage2Rules.map((r, i) => (
                    <div 
                      key={i}
                      className="p-2 rounded-xl bg-white border border-black/5 flex items-center justify-between gap-2 text-[11px] shadow-2xs"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="font-mono font-bold text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-700 shrink-0">
                          {r.code}
                        </span>
                        <span className="text-neutral-800 font-medium truncate">
                          {r.desc}
                        </span>
                      </div>

                      {r.isHard ? (
                        <span className="shrink-0 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200 flex items-center gap-1">
                          <AlertOctagon className="w-2.5 h-2.5" />
                          Hard → 🔴 Red
                        </span>
                      ) : (
                        <span className="shrink-0 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-black/5">
                          Risk Score
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rule Outcome Banner */}
            <div className="p-3.5 rounded-2xl bg-neutral-100 border border-black/10 space-y-1.5">
              <div className="text-[10px] font-mono font-bold text-black uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-black" />
                <span>Rule Outcome Logic</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-black/10 flex items-center gap-2">
                  <AlertOctagon className="w-4 h-4 text-red-600 shrink-0" />
                  <div>
                    <strong className="text-black">Hard Rule:</strong> Immediate 🔴 Red Flag (Routed to Fraud / Investigation).
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-black/10 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <div>
                    <strong className="text-black">Point-Based Rules:</strong> Risk Score → Validation → Fast Track / Exception Handling.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="pt-3 border-t border-black/10 flex items-center justify-between shrink-0">
            <span className="text-[10px] font-mono text-neutral-500">
              ClaimShield+ Execution Engine
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs shadow-md transition-colors"
            >
              Close Configurator
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
