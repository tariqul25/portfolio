import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface PillDotSliderProps {
  children: React.ReactNode[];
  autoPlayInterval?: number;
  accentColor?: 'violet' | 'emerald';
  className?: string;
  showNavHints?: boolean;
}

export function PillDotSlider({
  children,
  autoPlayInterval = 3500,
  accentColor = 'violet',
  className = '',
}: PillDotSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
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
    if (total <= 1 || isPaused) return;

    const timer = setInterval(() => {
      if (!isHoveredRef.current) {
        nextSlide();
      }
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [total, isPaused, autoPlayInterval, currentIndex]);

  const isViolet = accentColor === 'violet';
  const pillGlowClass = isViolet
    ? 'bg-gradient-to-r from-violet-500 to-indigo-500 shadow-[0_0_12px_rgba(139,92,246,0.6)]'
    : 'bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]';

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
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
        // Resume after small delay
        setTimeout(() => {
          isHoveredRef.current = false;
          setIsPaused(false);
        }, 1500);
      }}
    >
      {/* Slide Viewport */}
      <div className="relative overflow-hidden min-h-[220px] flex items-stretch">
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

      {/* Pill Dot Slider Pagination Controls */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {children.map((_, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`relative transition-all duration-400 ease-out cursor-pointer rounded-full flex items-center justify-center ${
                isActive
                  ? `w-7 h-2.5 ${pillGlowClass}`
                  : 'w-2.5 h-2.5 bg-slate-700/80 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={isActive ? 'true' : undefined}
            />
          );
        })}
      </div>
    </div>
  );
}
