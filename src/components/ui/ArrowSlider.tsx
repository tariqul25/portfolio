import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ArrowSliderProps {
  children: React.ReactNode[];
  accentColor?: 'violet' | 'emerald';
  className?: string;
  autoPlayInterval?: number;
  autoPlay?: boolean;
}

export function ArrowSlider({
  children,
  accentColor = 'violet',
  className = '',
  autoPlayInterval = 3800,
  autoPlay = true,
}: ArrowSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [isPaused, setIsPaused] = useState(false);
  const total = children.length;
  const isHoveredRef = useRef(false);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto-scrolling timer
  useEffect(() => {
    if (!autoPlay || total <= 1 || isPaused) return;

    const timer = setInterval(() => {
      if (!isHoveredRef.current) {
        nextSlide();
      }
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [total, autoPlay, isPaused, autoPlayInterval, currentIndex]);

  const isViolet = accentColor === 'violet';
  const borderHoverClass = isViolet ? 'hover:border-violet-500/60' : 'hover:border-emerald-500/60';
  const textHoverClass = isViolet ? 'hover:text-violet-300' : 'hover:text-emerald-300';
  const glowShadowClass = isViolet ? 'hover:shadow-violet-950/40' : 'hover:shadow-emerald-950/40';
  const activeDotClass = isViolet ? 'bg-violet-400' : 'bg-emerald-400';

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div
      className={`relative flex flex-col ${className}`}
      onMouseEnter={() => {
        isHoveredRef.current = true;
        setIsPaused(true);
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        setIsPaused(false);
      }}
      onTouchStart={() => {
        isHoveredRef.current = true;
        setIsPaused(true);
      }}
      onTouchEnd={() => {
        setTimeout(() => {
          isHoveredRef.current = false;
          setIsPaused(false);
        }, 1500);
      }}
    >
      {/* Slide Container */}
      <div className="relative overflow-hidden min-h-[260px] flex items-stretch">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              const swipe = info.offset.x;
              if (swipe < -40) {
                nextSlide();
              } else if (swipe > 40) {
                prevSlide();
              }
            }}
            className="w-full h-full flex-1 touch-pan-y cursor-grab active:cursor-grabbing"
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Bar: Arrows & Counter */}
      <div className="mt-5 flex items-center justify-between px-1">
        {/* Slide Counter / Dots Indicator */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400 font-semibold tracking-wider">
            0{currentIndex + 1}
            <span className="text-slate-600 mx-1">/</span>
            0{total}
          </span>
          <div className="flex items-center gap-1.5 ml-2">
            {children.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? `w-4 h-1.5 ${activeDotClass}`
                    : 'w-1.5 h-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className={`w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 flex items-center justify-center ${borderHoverClass} ${textHoverClass} ${glowShadowClass} shadow-md active:scale-95 transition-all cursor-pointer`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className={`w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 flex items-center justify-center ${borderHoverClass} ${textHoverClass} ${glowShadowClass} shadow-md active:scale-95 transition-all cursor-pointer`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
