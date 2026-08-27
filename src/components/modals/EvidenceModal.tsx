import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, FileText, FileCode2, GitPullRequest, 
  Palette, Film, Camera, Play, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { EvidenceItem } from '../../data/links';

interface EvidenceModalProps {
  item: EvidenceItem | null;
  onClose: () => void;
}

export const EvidenceModal: React.FC<EvidenceModalProps> = ({ item, onClose }) => {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);

  if (!item) return null;

  return (
    <AnimatePresence>
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
          className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto bg-white border border-black/15 rounded-3xl p-6 md:p-8 shadow-2xl z-10 text-black"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-black/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-black/10 flex items-center justify-center text-black shadow-xs">
                {item.code === 'FRD' && <FileText className="w-6 h-6" />}
                {item.code === 'FRS' && <FileCode2 className="w-6 h-6" />}
                {item.code === 'PROCESS' && <GitPullRequest className="w-6 h-6" />}
                {item.code === 'UI/UX' && <Palette className="w-6 h-6" />}
                {item.code === 'VIDEOS' && <Film className="w-6 h-6" />}
                {item.code === 'GALLERY' && <Camera className="w-6 h-6" />}
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-800 border border-black/10 font-mono font-bold">
                    {item.code}
                  </span>
                  <h3 className="text-2xl font-black text-black">{item.title}</h3>
                </div>
                <p className="text-xs md:text-sm text-neutral-600 mt-1">{item.description}</p>
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

          {/* Interactive Preview Content based on previewType */}
          <div className="mt-6">
            {/* Document Preview (FRD / FRS) */}
            {item.previewType === 'document' && item.previewData?.pages && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-black uppercase tracking-wider">
                    Specification Document Sections
                  </span>
                  <span className="text-xs text-neutral-500">6 Core Chapters</span>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {item.previewData.pages.map((page, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-neutral-50 border border-black/10 flex items-start gap-3 hover:border-black/30 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-neutral-700 leading-relaxed">{page}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Process Preview */}
            {item.previewType === 'process' && item.previewData?.steps && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-black uppercase tracking-wider">
                    E2E Straight-Through Processing Flow
                  </span>
                  <span className="text-xs text-neutral-500">6 Lifecycle Stages</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.previewData.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-neutral-50 border border-black/10 hover:border-black/30 transition-all space-y-1.5"
                    >
                      <div className="flex items-center gap-2 text-black font-bold text-xs">
                        <ArrowRight className="w-3.5 h-3.5" />
                        <span>{step.step}</span>
                      </div>
                      <p className="text-xs text-neutral-600 leading-relaxed">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* UI/UX Design System Preview */}
            {item.previewType === 'design' && item.previewData?.designScreens && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-black uppercase tracking-wider">
                    Design System & UI Components
                  </span>
                  <span className="text-xs text-neutral-500">Design System</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.previewData.designScreens.map((screen, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-neutral-50 border border-black/10 hover:border-black/30 transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-black">{screen.title}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 border border-black/10">
                          {screen.tag}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-600 leading-relaxed">{screen.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Video Showcase Preview */}
            {item.previewType === 'video' && item.previewData?.videos && (
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-neutral-100 border border-black/10 aspect-video flex flex-col items-center justify-center text-center relative overflow-hidden group">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white shadow-md cursor-pointer hover:scale-110 transition-transform mb-3">
                    <Play className="w-6 h-6 ml-1 fill-white" />
                  </div>
                  <h4 className="text-lg font-bold text-black">
                    {item.previewData.videos[activeVideoIndex].title}
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 max-w-md">
                    {item.previewData.videos[activeVideoIndex].desc}
                  </p>
                  <span className="mt-3 text-[10px] font-mono px-2.5 py-1 rounded bg-white border border-black/10 text-neutral-800 shadow-xs">
                    Duration: {item.previewData.videos[activeVideoIndex].duration}
                  </span>
                </div>

                {/* Video Selector Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {item.previewData.videos.map((vid, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveVideoIndex(idx)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                        activeVideoIndex === idx
                          ? 'bg-black text-white border-black font-bold'
                          : 'bg-neutral-50 border-black/10 text-neutral-700 hover:text-black hover:bg-neutral-100'
                      }`}
                    >
                      <div className="font-bold truncate">{vid.title}</div>
                      <div className={`text-[10px] mt-0.5 ${activeVideoIndex === idx ? 'text-neutral-300' : 'text-neutral-500'}`}>{vid.duration}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Lightbox Preview */}
            {item.previewType === 'gallery' && item.previewData?.galleryImages && (
              <div className="space-y-4">
                {/* Active Photo Feature View */}
                <div className="p-8 rounded-2xl bg-neutral-50 border border-black/10 text-center relative overflow-hidden min-h-[220px] flex flex-col items-center justify-center">
                  <div className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 border border-black/10">
                    {item.previewData.galleryImages[activeGalleryIndex].date}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-neutral-100 text-black flex items-center justify-center mb-3">
                    <Camera className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-black">
                    {item.previewData.galleryImages[activeGalleryIndex].title}
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 max-w-lg">
                    {item.previewData.galleryImages[activeGalleryIndex].subtitle}
                  </p>
                  <span className="mt-3 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                    Phase: {item.previewData.galleryImages[activeGalleryIndex].category}
                  </span>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                  {item.previewData.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryIndex(idx)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        activeGalleryIndex === idx
                          ? 'bg-black text-white border-black font-bold shadow-xs'
                          : 'bg-neutral-50 border-black/10 text-neutral-700 hover:text-black hover:bg-neutral-100'
                      }`}
                    >
                      <div className={`text-[10px] font-mono ${activeGalleryIndex === idx ? 'text-white font-bold' : 'text-black'}`}>{img.date}</div>
                      <div className="text-[11px] font-semibold truncate mt-0.5">{img.title.split(':')[0]}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Controls & External Link Trigger */}
          <div className="mt-6 pt-5 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-neutral-500 font-mono">
              Configured resource path: <code className="text-black font-bold">{item.url}</code>
            </span>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-black/10 text-black font-semibold text-xs transition-colors"
              >
                Close Preview
              </button>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-black text-white hover:bg-neutral-800 text-xs font-bold shadow-md transition-all"
              >
                <span>{item.actionText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
