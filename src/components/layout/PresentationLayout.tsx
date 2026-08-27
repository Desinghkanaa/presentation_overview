import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentation } from '../../context/PresentationContext';
import { SlideNavbar } from './SlideNavbar';
import { NavigationControls } from './NavigationControls';
import { CinematicBackground } from './CinematicBackground';

import { Slide1Landing } from '../../slides/Slide1Landing';
import { Slide2Reality } from '../../slides/Slide2Reality';
import { Slide3Team } from '../../slides/Slide3Team';
import { Slide4Journey } from '../../slides/Slide4Journey';
import { Slide5Reveal } from '../../slides/Slide5Reveal';
import { Slide6Ecosystem } from '../../slides/Slide6Ecosystem';
import { Slide7Launch } from '../../slides/Slide7Launch';
import { Slide8Evidence } from '../../slides/Slide8Evidence';
import { Slide9Roadmap } from '../../slides/Slide9Roadmap';

const slideComponents = [
  Slide1Landing,   // Page 1: Home
  Slide3Team,      // Page 2: Team Members Display
  Slide4Journey,   // Page 3: Journey
  Slide2Reality,   // Page 4: The Problem
  Slide5Reveal,    // Page 5: Product Reveal
  Slide6Ecosystem, // Page 6: Ecosystem All Claims Journey
  Slide7Launch,    // Page 7: AI Automation
  Slide8Evidence,  // Page 8: Business Impact, PMO Disciplines
  Slide9Roadmap,   // Page 9: Roadmap (Current - Next - Future)
];

// Simple clean slide transitions
const slideVariants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: 'easeInOut',
    },
  },
};

export const PresentationLayout: React.FC = () => {
  const { currentSlide, direction, nextSlide, prevSlide } = usePresentation();

  const CurrentSlideComponent = slideComponents[currentSlide];

  // Touch Swipe Handling via Framer Motion Drag
  const handleDragEnd = (_: any, info: { offset: { x: number; y: number } }) => {
    const swipeThreshold = 60;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white text-black select-none flex flex-col justify-between">
      {/* Cinematic Animated Video & Hologram Radar Layer */}
      <CinematicBackground />

      {/* Top Navbar */}
      <SlideNavbar />

      {/* Center-Edge Left & Right Navigation Arrows */}
      <NavigationControls />

      {/* Main Slide Deck Area */}
      <main className="relative w-full flex-1 pt-18 pb-8 md:pt-20 md:pb-12 overflow-y-auto overflow-x-hidden flex items-center justify-center z-10">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="w-full max-w-6xl mx-auto my-auto px-6 md:px-16"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
