import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const roles = ['MERN Stack Developer', 'Frontend Developer', 'Shopify Developer'];
const DISPLAY_DURATION = 2800; // ms each role is visible
const TRANSITION_DURATION = 450; // ms for the animation

export function AnimatedRole() {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState<'visible' | 'exiting' | 'entering'>('entering');
  const prefersReducedMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const schedule = () => {
      // Show current role for DISPLAY_DURATION
      timerRef.current = setTimeout(() => {
        // Start exit animation
        setPhase('exiting');
        timerRef.current = setTimeout(() => {
          // Switch to next role
          setCurrent((prev) => (prev + 1) % roles.length);
          setPhase('entering');
          // After enter animation completes, hold as visible
          timerRef.current = setTimeout(() => {
            setPhase('visible');
            schedule();
          }, TRANSITION_DURATION);
        }, TRANSITION_DURATION);
      }, DISPLAY_DURATION);
    };

    // Initial entry
    timerRef.current = setTimeout(() => {
      setPhase('visible');
      schedule();
    }, TRANSITION_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <span className="text-[#7C3AED] font-bold text-xl sm:text-2xl">
        {roles[current]}
      </span>
    );
  }

  const getTransform = () => {
    if (phase === 'exiting') return 'translateY(-10px)';
    if (phase === 'entering') return 'translateY(10px)';
    return 'translateY(0)';
  };

  const getOpacity = () => {
    if (phase === 'visible') return 1;
    return 0;
  };

  return (
    <span
      className="inline-block text-[#7C3AED] font-bold text-xl sm:text-2xl"
      style={{
        opacity: getOpacity(),
        transform: getTransform(),
        transition:
          phase === 'exiting'
            ? `opacity ${TRANSITION_DURATION}ms ease, transform ${TRANSITION_DURATION}ms ease`
            : phase === 'entering'
            ? 'none'
            : `opacity ${TRANSITION_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${TRANSITION_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        minWidth: '280px',
        display: 'inline-block',
        textAlign: 'left',
      }}
      aria-live="polite"
      aria-label={`Current role: ${roles[current]}`}
    >
      {roles[current]}
    </span>
  );
}
