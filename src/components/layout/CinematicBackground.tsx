import React from 'react';
import { usePresentation } from '../../context/PresentationContext';
import cinematicVideo from '../../Assets/cinematic-secon.mp4';

export const CinematicBackground: React.FC = () => {
  const { currentSlide } = usePresentation();
  const isHomeSlide = currentSlide === 0;

  return (
    <div
      className={`fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0 select-none transition-colors duration-300 ${
        isHomeSlide ? 'bg-neutral-950' : 'bg-white'
      }`}
    >
      {/* Slide 1 Exclusive Full-Screen Cinematic Video Background with Dark Fallback */}
      {isHomeSlide ? (
        <div className="fixed inset-0 w-screen h-screen z-0 bg-gradient-to-br from-neutral-950 via-slate-950 to-black">
          <video
            src={cinematicVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 opacity-90 transition-opacity duration-700"
          />
          {/* Darkened overlay for sharp text legibility and contrast */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/85 pointer-events-none" />
        </div>
      ) : (
        <>
          {/* Subtle soft gradient base for other slides */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-neutral-100/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-100/40 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-neutral-200 pointer-events-none" />
        </>
      )}
    </div>
  );
};
