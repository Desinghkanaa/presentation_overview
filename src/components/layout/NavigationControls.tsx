import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

export const NavigationControls: React.FC = () => {
  const { currentSlide, totalSlides, nextSlide, prevSlide, goToSlide } = usePresentation();

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === totalSlides - 1;

  return (
    <>
      {/* Left Center-Edge Navigation Arrow (Navigate to Previous Slide) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-3 md:left-6 top-1/2 -translate-y-1/2 z-40 pointer-events-auto"
      >
        <button
          onClick={prevSlide}
          disabled={isFirstSlide}
          title="Previous slide (← / Left Arrow)"
          aria-label="Previous Page"
          className={`group relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full backdrop-blur-2xl border transition-all duration-300 ${
            isFirstSlide
              ? 'opacity-0 pointer-events-none'
              : 'bg-white/90 hover:bg-white border-black/10 hover:border-black/30 text-black shadow-md hover:scale-110 active:scale-95'
          }`}
        >
          <ChevronLeft className="w-5 h-5 md:w-7 md:h-7 transition-transform group-hover:-translate-x-0.5 text-black" />
          
          {/* Key hint tooltip on hover */}
          {!isFirstSlide && (
            <span className="absolute left-full ml-3 px-2.5 py-1 rounded-md bg-black text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden lg:inline-block">
              ← Prev
            </span>
          )}
        </button>
      </motion.div>

      {/* Right Center-Edge Navigation Arrow (Navigate to Next Slide / Restart) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-auto"
      >
        {isLastSlide ? (
          <button
            onClick={() => goToSlide(0)}
            title="Restart Presentation (Return to start)"
            aria-label="Restart Deck"
            className="group relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-black text-white shadow-md hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <RotateCcw className="w-5 h-5 md:w-6 md:h-6 font-black transition-transform group-hover:-rotate-45 text-white" />
            <span className="absolute right-full mr-3 px-2.5 py-1 rounded-md bg-black text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden lg:inline-block">
              Restart ↺
            </span>
          </button>
        ) : (
          <button
            onClick={nextSlide}
            title="Next slide (→ / Right Arrow or Space)"
            aria-label="Next Page"
            className={`group relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full backdrop-blur-2xl border transition-all duration-300 shadow-md hover:scale-110 active:scale-95 ${
              isFirstSlide
                ? 'bg-white text-black border-white/20 shadow-xl'
                : 'bg-white/90 hover:bg-white border-black/10 hover:border-black/30 text-black'
            }`}
          >
            <ChevronRight className="w-5 h-5 md:w-7 md:h-7 transition-transform group-hover:translate-x-0.5 text-black" />
            
            {/* Key hint tooltip on hover */}
            <span className="absolute right-full mr-3 px-2.5 py-1 rounded-md bg-black text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden lg:inline-block">
              Next →
            </span>
          </button>
        )}
      </motion.div>
    </>
  );
};
