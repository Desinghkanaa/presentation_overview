import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Zap, TrendingUp, Sparkles } from 'lucide-react';
import { RoadmapMilestone } from '../../data/roadmap';

interface RoadmapModalProps {
  milestone: RoadmapMilestone | null;
  onClose: () => void;
}

export const RoadmapModal: React.FC<RoadmapModalProps> = ({ milestone, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (milestone) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [milestone, onClose]);

  if (!milestone) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/50 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-white border border-black/15 rounded-3xl p-6 sm:p-7 shadow-2xl z-10 text-black max-h-[85vh] flex flex-col overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black transition-all z-10"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Top Header */}
          <div className="flex items-start gap-3.5 pb-4 border-b border-black/10 shrink-0 pr-8">
            {/* Numbered Milestone Badge */}
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-mono font-black text-lg shadow-md shrink-0"
              style={{ backgroundColor: milestone.colorHex }}
            >
              {milestone.number}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-neutral-100 border border-black/10 text-neutral-800 uppercase">
                  {milestone.phase}
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  {milestone.badge}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-black">
                {milestone.title}
              </h3>
              <p className="text-xs text-neutral-600 mt-0.5">
                {milestone.summary}
              </p>
            </div>
          </div>

          {/* Body Content - Concise Key Points */}
          <div className="flex-1 overflow-y-auto space-y-4 py-4 pr-1">
            {/* Key Deliverables & Scope Bullets */}
            <div className="p-4 rounded-2xl bg-neutral-50 border border-black/10 space-y-2.5 shadow-xs">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-black flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                <span>Strategic Scope & Key Capabilities</span>
              </h4>
              <ul className="space-y-2">
                {milestone.keyPoints.map((point, i) => (
                  <li key={i} className="text-xs text-neutral-700 flex items-start gap-2 leading-relaxed">
                    <span 
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" 
                      style={{ backgroundColor: milestone.colorHex }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Capability Pills */}
            <div className="p-4 rounded-2xl bg-white border border-black/10 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Core Capabilities Enabled</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {milestone.capabilities.map((cap, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-neutral-100 border border-black/5 text-xs font-semibold text-neutral-800 flex items-center gap-1.5"
                  >
                    <Zap className="w-3 h-3 text-black" />
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Expected Business Impact */}
            <div className="p-3.5 rounded-xl bg-neutral-100 border border-black/10 flex items-start gap-2.5">
              <TrendingUp className="w-4 h-4 text-black shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-bold text-black uppercase tracking-wider block">
                  Expected Value & Impact
                </span>
                <p className="text-xs text-neutral-700 mt-0.5 leading-relaxed">
                  {milestone.businessImpact}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-black/10 flex items-center justify-between shrink-0">
            <span className="text-[10px] font-mono text-neutral-500">
              ClaimShield+ Strategic Roadmap
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold text-xs shadow-md transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

