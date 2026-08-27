import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { usePresentation } from '../context/PresentationContext';

export const Slide5Reveal: React.FC = () => {
  const { nextSlide } = usePresentation();

  return (
    <div className="relative min-h-[72vh] flex flex-col items-center justify-center text-center py-4 overflow-hidden">
      <div className="max-w-3xl mx-auto z-10 flex flex-col items-center">
        {/* Stage 1: Reveal Category Tag - Appears slowly first */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-neutral-100 border border-black/10 text-neutral-800 text-[11px] font-mono font-bold tracking-[0.2em] uppercase mb-3 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-black" />
          <span>PAGE 05 • THE PRODUCT REVEAL</span>
        </motion.div>

        {/* Narrative Build-up Text - Appears smoothly & slowly */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-600 leading-tight"
        >
          We understood the problem. We learned the business.<br />
          <span className="text-black font-black">We redesigned the entire journey.</span>
        </motion.h2>

        {/* Teaser Question Text - Appears after the narrative text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 text-sm sm:text-base text-neutral-700 font-mono font-medium tracking-wide flex items-center gap-2"
        >
          <span className="w-8 h-px bg-neutral-300" />
          <span>So, what did we create?</span>
          <span className="w-8 h-px bg-neutral-300" />
        </motion.div>

        {/* Stage 2: CLAIMSHIELD+ Hero Reveal Card - Animates in smoothly once the text arrives */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            delay: 1.95, 
            duration: 0.85, 
            type: 'spring', 
            stiffness: 170, 
            damping: 18 
          }}
          className="mt-5 p-6 sm:p-8 rounded-3xl bg-white border border-black/15 shadow-2xl relative group w-full max-w-xl overflow-hidden"
        >
          {/* Shimmer Light Reflection Sweep */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ delay: 2.65, duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-neutral-200/50 to-transparent skew-x-12 pointer-events-none"
          />

          <div className="flex flex-col items-center relative z-10">
            {/* Shield Logo Icon - Pops and rotates in */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 2.25, type: 'spring', stiffness: 220, damping: 14 }}
              className="w-16 h-16 rounded-2xl bg-black border border-black/20 p-1 shadow-md mb-3 flex items-center justify-center"
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>

            {/* Logo Text - Cinematic appearance */}
            <motion.h1
              initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 2.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-black leading-none"
            >
              <span className="bg-gradient-to-r from-black via-neutral-800 to-neutral-600 bg-clip-text text-transparent">
                CLAIMSHIELD
              </span>
              <span className="text-black font-black">+</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.5 }}
              className="text-xs sm:text-sm text-neutral-600 font-mono font-bold tracking-widest uppercase mt-3"
            >
              Intelligent Motor OD Claims Management
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.95, duration: 0.5 }}
              className="flex items-center gap-2.5 mt-3 text-[11px] font-mono font-extrabold tracking-widest text-neutral-500"
            >
              <span className="text-black">FASTER</span>
              <span>•</span>
              <span className="text-black">SMARTER</span>
              <span>•</span>
              <span className="text-black">SIMPLER</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Stage 3: Feature Highlights Bar - Appears following the reveal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mt-5"
        >
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neutral-100 border border-black/10 text-[11px] font-semibold text-neutral-800 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-black" />
            <span>AI Decision Augmentation</span>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neutral-100 border border-black/10 text-[11px] font-semibold text-neutral-800 shadow-xs">
            <CheckCircle className="w-3.5 h-3.5 text-black" />
            <span>~30-Minute Fast-Track</span>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neutral-100 border border-black/10 text-[11px] font-semibold text-neutral-800 shadow-xs">
            <Shield className="w-3.5 h-3.5 text-black" />
            <span>Connected 3-Actor Ecosystem</span>
          </div>
        </motion.div>

        {/* Stage 4: CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 3.45, duration: 0.5 }}
          className="mt-6"
        >
          <button
            onClick={nextSlide}
            className="flex items-center gap-2.5 px-7 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white font-extrabold text-xs sm:text-sm shadow-md hover:scale-105 transition-all duration-200"
          >
            <span>Explore ClaimShield+ Ecosystem</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

