import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const tween = gsap.to(el, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll()
        .filter((st) => st.trigger === document.documentElement)
        .forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent"
    >
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-violet-500 via-indigo-400 to-emerald-400 shadow-[0_0_12px_rgba(139,92,246,0.6)] origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
