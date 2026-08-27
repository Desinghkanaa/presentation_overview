import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2, Lightbulb, Target, Sparkles } from 'lucide-react';
import { TimelineWeek } from '../../data/timeline';

interface TimelineModalProps {
  week: TimelineWeek | null;
  onClose: () => void;
}

export const TimelineModal: React.FC<TimelineModalProps> = ({ week, onClose }) => {
  return (
    <AnimatePresence>
      {week && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white border border-black/15 rounded-3xl p-6 md:p-8 shadow-2xl z-10 text-black"
          >
            {/* Top Bar */}
            <div className="flex items-start justify-between pb-6 border-b border-black/10">
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 rounded-xl bg-neutral-100 border border-black/10 text-sm font-mono font-extrabold tracking-wider text-black">
                  {week.weekNumber}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-black tracking-tight text-black">{week.title}</h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-800 border border-black/10 font-medium">
                      Completed
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 mt-0.5">{week.subtitle}</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-black/10 flex items-center justify-center text-neutral-700 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="mt-6 space-y-6">
              {/* Focus Summary */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-black/10 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-black shrink-0" />
                <span className="text-sm text-neutral-700 font-medium">
                  <strong className="text-black">Core Focus:</strong> {week.focus}
                </span>
              </div>

              {/* Grid with Deliverables and Learnings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Deliverables */}
                <div className="p-5 rounded-2xl bg-neutral-50 border border-black/10 space-y-3">
                  <div className="flex items-center gap-2 text-black font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    <span>Key Deliverables</span>
                  </div>
                  <ul className="space-y-2.5">
                    {week.deliverables.map((item, i) => (
                      <li key={i} className="text-xs text-neutral-700 leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learnings */}
                <div className="p-5 rounded-2xl bg-neutral-50 border border-black/10 space-y-3">
                  <div className="flex items-center gap-2 text-black font-bold text-sm">
                    <Lightbulb className="w-4 h-4 text-black" />
                    <span>Domain Insights & Data</span>
                  </div>
                  <ul className="space-y-2.5">
                    {week.learnings.map((item, i) => (
                      <li key={i} className="text-xs text-neutral-700 leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Milestones */}
              <div className="p-5 rounded-2xl bg-neutral-50 border border-black/10">
                <div className="flex items-center gap-2 text-black font-bold text-sm mb-3">
                  <Target className="w-4 h-4 text-black" />
                  <span>PMO Milestones Achieved</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {week.milestones.map((milestone, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-black/10 text-xs font-semibold text-neutral-800 flex items-center gap-2 shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                      <span>{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom action */}
            <div className="mt-6 pt-4 border-t border-black/10 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white font-semibold text-xs transition-colors"
              >
                Close Deep Dive
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
