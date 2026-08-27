import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface SlideMeta {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  category: string;
}

export const SLIDES: SlideMeta[] = [
  { id: 'home', number: 1, title: 'Home', subtitle: 'Mission Mavericks', category: 'Prologue' },
  { id: 'team', number: 2, title: 'Team Members', subtitle: '11 People. One Purpose.', category: 'The Team' },
  { id: 'journey', number: 3, title: 'Journey', subtitle: 'From Learning To Solution', category: 'Journey' },
  { id: 'problem', number: 4, title: 'The Problem', subtitle: 'One Claim. Many Frictions.', category: 'Problem' },
  { id: 'reveal', number: 5, title: 'Product Reveal', subtitle: 'ClaimShield+ Intelligent Claims', category: 'Reveal' },
  { id: 'ecosystem', number: 6, title: 'Ecosystem', subtitle: 'All Claims Journey', category: 'Ecosystem' },
  { id: 'ai-automation', number: 7, title: 'AI Automation', subtitle: 'Fast-Track & Decision Support', category: 'AI Automation' },
  { id: 'impact-pmo', number: 8, title: 'Business Impact & PMO', subtitle: 'Impact, Artifacts & Disciplines', category: 'Business Impact & PMO' },
  { id: 'roadmap', number: 9, title: 'Roadmap', subtitle: 'Current • Next • Future', category: 'Roadmap' },
];

interface PresentationContextType {
  currentSlide: number; // 0-indexed (0 to 8)
  totalSlides: number;
  currentSlideMeta: SlideMeta;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  direction: number; // 1 for next, -1 for prev
  activeModal: string | null;
  openModal: (modalId: string) => void;
  closeModal: () => void;
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

export const PresentationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const totalSlides = SLIDES.length;

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide, totalSlides]);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const openModal = useCallback((modalId: string) => {
    setActiveModal(modalId);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  // Global Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If modal is open, let Escape close it
      if (activeModal) {
        if (e.key === 'Escape') {
          closeModal();
        }
        return;
      }

      // Don't trigger slide change if user is inside an input/textarea
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.code === 'Space') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, activeModal, closeModal]);

  return (
    <PresentationContext.Provider
      value={{
        currentSlide,
        totalSlides,
        currentSlideMeta: SLIDES[currentSlide],
        nextSlide,
        prevSlide,
        goToSlide,
        direction,
        activeModal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
};

export const usePresentation = (): PresentationContextType => {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error('usePresentation must be used within a PresentationProvider');
  }
  return context;
};
