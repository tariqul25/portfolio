import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-transparent"
    >
      <motion.div
        className="h-full w-full bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.85)] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
