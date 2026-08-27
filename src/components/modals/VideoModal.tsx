import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Volume2, Maximize2, Sparkles, Film } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  videoUrl?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle = 'Mission Mavericks × ClaimShield+ Showcase Video',
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
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
            className="relative w-full max-w-4xl bg-white border border-black/15 rounded-3xl overflow-hidden shadow-2xl z-10 text-black"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 bg-neutral-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 border border-black/10 flex items-center justify-center text-black">
                  <Film className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-black leading-none">{title}</h3>
                  <p className="text-xs text-neutral-600 mt-1">{subtitle}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-black/10 flex items-center justify-center text-neutral-700 hover:text-black transition-colors"
                aria-label="Close Video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player Display Container */}
            <div className="relative aspect-video bg-neutral-100 flex items-center justify-center overflow-hidden group">
              {/* Radial gradient background */}
              <div className="absolute inset-0 bg-radial from-neutral-200/50 via-transparent to-transparent pointer-events-none"></div>

              {/* Cinematic video mockup container */}
              <div className="flex flex-col items-center text-center p-8 max-w-lg z-10">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-black flex items-center justify-center text-white shadow-md mb-6 cursor-pointer"
                >
                  <Play className="w-8 h-8 ml-1 fill-white" />
                </motion.div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/10 text-neutral-800 text-xs font-mono font-semibold mb-3 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-black" /> 4K Ultra HD • Dolby Audio
                </span>
                <h4 className="text-xl font-extrabold text-black mb-2">
                  {title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  A 30–45 second cinematic video capturing the friction of motor claims and the breakthrough promise of automated resolution.
                </p>
                <span className="text-xs font-mono text-neutral-600 bg-white px-3 py-1.5 rounded-lg border border-black/10 shadow-xs">
                  Ready to link final production video file
                </span>
              </div>

              {/* Player Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <button className="text-white hover:text-neutral-300 transition-colors">
                    <Play className="w-5 h-5 fill-current" />
                  </button>
                  <button className="text-white hover:text-neutral-300 transition-colors">
                    <Volume2 className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-mono text-neutral-300">0:00 / 0:45</span>
                </div>
                <div className="flex-1 mx-4 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-white"></div>
                </div>
                <div>
                  <button className="text-white hover:text-neutral-300 transition-colors">
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
