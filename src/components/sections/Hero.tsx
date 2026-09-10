import { ArrowDown, Atom, Code2, Database, Server, ShoppingBag } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { AnimatedRole } from '../ui/AnimatedRole';
import { Magnetic } from '../ui/MagneticButton';
import { useGsapCardTilt, useGsapParallaxScrub } from '../../hooks/useGsap';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Hero() {
  const glow1Ref = useGsapParallaxScrub<HTMLDivElement>({ speed: 20 });
  const glow2Ref = useGsapParallaxScrub<HTMLDivElement>({ speed: -25 });

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-[76px] pb-12"
      aria-label="Hero section"
    >
      {/* Ambient background glow & mesh with GSAP Scroll Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          ref={glow1Ref}
          className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, rgba(99, 102, 241, 0.06) 50%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        <div
          ref={glow2Ref}
          className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-14 items-center py-8 sm:py-14">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 border border-slate-700/80 px-3.5 py-1.5 rounded-full bg-slate-900/80 shadow-sm backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                Available for Full-Stack &amp; Shopify Projects
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.8rem,5.5vw,4.8rem)] font-extrabold leading-[1.08] tracking-tight text-white mb-3"
            >
              Md. Tariqul
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Islam
              </span>
            </motion.h1>

            {/* Animated role */}
            <motion.div variants={itemVariants} className="mb-5 h-9 flex items-center">
              <AnimatedRole />
            </motion.div>

            {/* Intro quote */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-300 italic mb-4 font-light tracking-wide"
            >
              "Coding interactive experiences with passion and precision"
            </motion.p>


            {/* Supporting paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 leading-relaxed mb-8 max-w-lg text-sm sm:text-base"
            >
              Passionate about crafting high-performance web experiences using <span className="font-semibold text-slate-200">React, Next.js</span> and <span className="font-semibold text-slate-200">Node.js</span> — with deep expertise in custom <span className="font-semibold text-slate-200">Shopify Liquid</span> theme development for global brands.
            </motion.p>

            {/* CTAs with GSAP Magnetic Hover */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-8">
              <Magnetic strength={0.32}>
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold bg-violet-600 text-white rounded-lg hover:bg-violet-500 active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-violet-600/30 cursor-pointer"
                >
                  View Projects
                  <ArrowDown size={15} />
                </a>
              </Magnetic>

              {/* <Magnetic strength={0.32}>
                <a
                  href="#shopify"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#shopify')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-700/60 rounded-lg hover:bg-emerald-900/60 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <ShoppingBag size={15} className="text-emerald-400" />
                  Shopify Showcase
                </a>
              </Magnetic> */}

              <Magnetic strength={0.32}>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-violet-500/50 rounded-lg transition-all cursor-pointer"
                >
                  Let's Talk
                </a>
              </Magnetic>
            </motion.div>

            {/* Social links with GSAP Magnetic Hover */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5">
              <Magnetic strength={0.25}>
                <a
                  href="https://github.com/tariqul25"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center justify-center w-10 h-10 border border-slate-700/80 bg-slate-800/80 text-slate-300 hover:text-white hover:border-violet-500/60 hover:bg-violet-950/40 shadow-xs hover:shadow-md transition-all duration-200 rounded-lg cursor-pointer"
                >
                  <GithubIcon size={18} />
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a
                  href="https://www.linkedin.com/in/tariqul25/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center justify-center w-10 h-10 border border-slate-700/80 bg-slate-800/80 text-slate-300 hover:text-white hover:border-violet-500/60 hover:bg-violet-950/40 shadow-xs hover:shadow-md transition-all duration-200 rounded-lg cursor-pointer"
                >
                  <LinkedinIcon size={18} />
                </a>
              </Magnetic>

              <div className="ml-2 w-px h-5 bg-slate-800" aria-hidden="true" />
              <a
                href="mailto:tariqulcst@gmail.com"
                className="text-xs font-medium text-slate-400 hover:text-violet-400 transition-colors ml-2"
              >
                tariqulcst@gmail.com
              </a>
            </motion.div>
          </motion.div>

          {/* Hero visual — Circular Animated Avatar with Tech Stack Orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex items-center justify-center relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const tiltRef = useGsapCardTilt<HTMLDivElement>(8);

  return (
    <div
      ref={tiltRef}
      className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 select-none group flex items-center justify-center my-8 lg:my-0"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* 1. Ambient pulsing background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600/40 via-indigo-500/30 to-cyan-500/25 blur-3xl scale-125 animate-pulse pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      {/* 2. Outer pulsing radar ring */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.08, 0.4] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute -inset-4 sm:-inset-6 rounded-full border border-violet-500/30 pointer-events-none"
      />

      {/* 3. Reverse rotating dashed orbit ring with glowing celestial beacons */}
      <div
        className="absolute -inset-6 sm:-inset-8 rounded-full border border-dashed border-slate-700/60 pointer-events-none animate-[spin_24s_linear_infinite_reverse]"
      >
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_12px_#a855f7]" />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
      </div>

      {/* 4. High-speed spinning conic gradient border ring */}
      <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-cyan-400 animate-[spin_6s_linear_infinite] blur-[1px] opacity-90" />

      {/* 5. Inner dark bezel layer */}
      <div className="absolute inset-[3px] rounded-full bg-slate-950 z-0" />

      {/* 6. Authentic circular image frame */}
      <div className="relative z-10 w-full h-full rounded-full overflow-hidden p-1.5 bg-slate-950 shadow-2xl">
        <img
          src="/profile.png"
          alt="Md. Tariqul Islam"
          className="w-full h-full object-cover object-center rounded-full group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Subtle bottom vignette inside circular frame */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 7. Stack Badge: TypeScript (Top-Left) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute -top-3 -left-2 sm:-left-5 z-20 bg-slate-900/90 border border-blue-500/40 shadow-lg shadow-blue-950/40 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-blue-300 backdrop-blur-md"
      >
        <Code2 size={13} className="text-blue-400" />
        <span>TypeScript</span>
      </motion.div>

      {/* 8. Stack Badge: React (Top-Right) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut', delay: 0.3 }}
        className="absolute -top-3 -right-2 sm:-right-5 z-20 bg-slate-900/90 border border-cyan-500/40 shadow-lg shadow-cyan-950/40 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md"
      >
        <Atom size={13} className="text-cyan-400" />
        <span>React</span>
      </motion.div>

      {/* 9. Stack Badge: MongoDB (Middle-Left) */}
      <motion.div
        animate={{ x: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 0.6 }}
        className="absolute top-1/2 -left-6 sm:-left-10 -translate-y-1/2 z-20 bg-slate-900/90 border border-emerald-500/40 shadow-lg shadow-emerald-950/40 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md"
      >
        <Database size={13} className="text-emerald-400" />
        <span>MongoDB</span>
      </motion.div>

      {/* 10. Stack Badge: Node.js (Middle-Right) */}
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: 0.9 }}
        className="absolute top-1/2 -right-6 sm:-right-10 -translate-y-1/2 z-20 bg-slate-900/90 border border-lime-500/40 shadow-lg shadow-lime-950/40 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-lime-300 backdrop-blur-md"
      >
        <Server size={13} className="text-lime-400" />
        <span>Node.js</span>
      </motion.div>

      {/* 11. Stack Badge: Shopify Liquid (Bottom-Center) */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.4 }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 bg-slate-900/95 border border-violet-500/40 shadow-lg shadow-violet-950/40 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-violet-300 backdrop-blur-md whitespace-nowrap"
      >
        <ShoppingBag size={13} className="text-violet-400" />
        <span>Shopify Liquid</span>
      </motion.div>
    </div>
  );
}



