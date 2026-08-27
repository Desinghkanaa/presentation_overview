import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, ArrowRight, Sparkles, X, User
} from 'lucide-react';
import { teamMembers, teamMotto, TeamMember } from '../data/team';
import { usePresentation } from '../context/PresentationContext';

export const Slide3Team: React.FC = () => {
  const { nextSlide } = usePresentation();
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Duplicated team members list for seamless continuous looping
  const displayMembers = [...teamMembers, ...teamMembers];

  // Auto-scroll effect
  useEffect(() => {
    let animationFrameId: number;
    const speed = 0.85; // Smooth scroll speed in px per frame

    const scroll = () => {
      if (scrollContainerRef.current && !isPaused) {
        const container = scrollContainerRef.current;
        container.scrollLeft += speed;

        // Reset scroll seamlessly when halfway through
        const halfScrollWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfScrollWidth) {
          container.scrollLeft -= halfScrollWidth;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div className="relative min-h-[75vh] flex flex-col justify-center py-2">
      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-neutral-800 uppercase mb-1.5 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>THE TEAM • 11 PROFESSIONALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black">
            Meet the{' '}
            <span className="bg-gradient-to-r from-black via-neutral-800 to-neutral-600 bg-clip-text text-transparent">
              Mission Mavericks.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-lg mx-auto">
            {teamMotto.summary}
          </p>
        </div>

        {/* Continuous Auto-Scrolling Cards Container (Smooth auto-scroll, pauses on hover) */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar py-4 px-2 cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'auto' }}
        >
          {displayMembers.map((member, idx) => {
            const memberNumber = (idx % teamMembers.length) + 1;
            return (
              <div
                key={`${member.id}-${idx}`}
                onClick={() => setSelectedMember(member)}
                className="w-[320px] sm:w-[350px] shrink-0 p-5 rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
              >
                {/* Top Subtle Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-neutral-200" />

                <div>
                  {/* Photo & Header info */}
                  <div className="flex items-start gap-3.5 mb-3.5">
                    {/* Person Image */}
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border border-black/10 shrink-0 bg-neutral-100 shadow-sm group-hover:border-black/30 transition-colors">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-neutral-100 text-neutral-500">
                          <User className="w-8 h-8" />
                        </div>
                      )}
                    </div>

                    {/* Member Meta */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-mono font-bold text-black">
                          #{memberNumber < 10 ? `0${memberNumber}` : memberNumber}
                        </span>
                        <span className="text-[9px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 border border-black/10 text-neutral-700 truncate">
                          {member.badge}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-black group-hover:text-black transition-colors truncate">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-neutral-600 mt-0.5 leading-snug line-clamp-2">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Roles & Responsibilities Section */}
                  <div className="space-y-1.5 mb-3 pt-2.5 border-t border-black/10">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                      Roles & Responsibilities
                    </div>
                    <ul className="space-y-1">
                      {member.responsibilities.slice(0, 2).map((resp, i) => (
                        <li key={i} className="text-[11px] text-neutral-700 flex items-start gap-1.5 leading-snug">
                          <span className="text-black font-bold mt-0.5">•</span>
                          <span className="line-clamp-2">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Focus Highlights */}
                <div className="pt-2.5 border-t border-black/10 flex flex-wrap gap-1">
                  {member.highlights.slice(0, 2).map((h, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-medium px-2 py-0.5 rounded bg-neutral-100 border border-black/5 text-neutral-600 truncate max-w-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Motto Pillars Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          {teamMotto.pillars.map((pill, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1 rounded-full bg-neutral-100 border border-black/10 text-neutral-800 text-[10px] font-mono font-bold tracking-wider uppercase"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Bottom CTA to next slide */}
        <div className="text-center mt-4">
          <button
            onClick={nextSlide}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white font-extrabold text-xs sm:text-sm shadow-md hover:scale-105 transition-all duration-200"
          >
            <span>Explore our four-week journey</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Member Detail Inspection Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl p-6 sm:p-7 rounded-2xl bg-white border border-black/15 shadow-2xl relative text-black"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black transition-all"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4 mb-5 pb-4 border-b border-black/10">
                {/* Large Profile Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-black/15 shrink-0 bg-neutral-100">
                  {selectedMember.image ? (
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-100 text-neutral-400">
                      <User className="w-10 h-10" />
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black">{selectedMember.name}</h3>
                  <div className="text-sm font-semibold text-neutral-600 mt-0.5">{selectedMember.role}</div>
                  <span className="inline-block mt-1.5 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-black/10">
                    {selectedMember.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Roles & Responsibilities */}
                <div>
                  <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                    <span>Roles & Responsibilities</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedMember.responsibilities.map((resp, i) => (
                      <li key={i} className="text-xs text-neutral-700 flex items-start gap-2 leading-relaxed">
                        <span className="text-black font-bold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Contribution */}
                <div>
                  <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-1">Project Contribution</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {selectedMember.contribution}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-1.5">Core Focus Highlights</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMember.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1 rounded-lg bg-neutral-100 border border-black/10 text-neutral-800"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
