import React from 'react';
import { motion } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { ExternalLink } from 'lucide-react';
import { links } from '../../data/links';
import missionMavericksLogo from '../../Assets/mission-mavericks-logo.png';

export const SlideNavbar: React.FC = () => {
  const { goToSlide, currentSlide } = usePresentation();
  const isHomeSlide = currentSlide === 0;

  const navLinks = [
    { label: 'Team', slideIdx: 1 },
    { label: 'Journey', slideIdx: 2 },
    { label: 'The problem', slideIdx: 3 },
    { label: 'Product reveal', slideIdx: 4 },
    { label: 'Ecosystem', slideIdx: 5 },
    { label: 'AI automation', slideIdx: 6 },
    { label: 'Impact & PMO', slideIdx: 7 },
    { label: 'Roadmap', slideIdx: 8 },
  ];

  return (
    <motion.header
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 h-16 md:h-20 z-40 flex items-center justify-between px-6 md:px-12 transition-colors duration-300 ${
        isHomeSlide
          ? 'bg-black/25 backdrop-blur-md border-b border-white/10 text-white'
          : 'bg-white/90 backdrop-blur-2xl border-b border-black/10 text-black shadow-xs'
      }`}
    >
      {/* Brand Logo: Mission Mavericks */}
      <button
        onClick={() => goToSlide(0)}
        className="flex items-center gap-2.5 group text-left focus:outline-none shrink-0"
        title="Go to Start"
      >
        <img
          src={missionMavericksLogo}
          alt="Mission Mavericks Logo"
          className="w-9 h-9 object-contain shrink-0 group-hover:scale-105 transition-transform drop-shadow-sm"
        />
        <span className={`font-black text-sm sm:text-base tracking-wider transition-colors ${
          isHomeSlide ? 'text-white' : 'text-black'
        }`}>
          MISSION MAVERICKS
        </span>
      </button>

      {/* Center Navigation Links */}
      <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
        {navLinks.map((link) => {
          const isActive = currentSlide === link.slideIdx;
          return (
            <button
              key={link.label}
              onClick={() => goToSlide(link.slideIdx)}
              className={`relative text-xs font-medium tracking-wide transition-all py-1 px-1.5 ${
                isActive
                  ? isHomeSlide ? 'text-cyan-300 font-bold' : 'text-black font-bold'
                  : isHomeSlide ? 'text-neutral-300 hover:text-white' : 'text-neutral-500 hover:text-black'
              }`}
            >
              {link.label}
              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                    isHomeSlide ? 'bg-cyan-400' : 'bg-black'
                  }`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Right Action: Launch App Button */}
      <div className="flex items-center gap-3 shrink-0">
        <a
          href={links.claimShieldLiveApp}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 shadow-sm hover:scale-105 ${
            isHomeSlide
              ? 'bg-white hover:bg-neutral-100 text-black shadow-md'
              : 'bg-black hover:bg-neutral-800 text-white'
          }`}
        >
          <span>Launch app</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.header>
  );
};
