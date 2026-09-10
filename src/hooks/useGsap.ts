import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealOptions {
  from?: 'bottom' | 'left' | 'right' | 'scale';
  delay?: number;
  duration?: number;
  distance?: number;
  triggerHook?: string;
}

/**
 * Standard smooth reveal for headings and containers
 */
export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null);
  const {
    from = 'bottom',
    delay = 0,
    duration = 0.9,
    distance = 45,
    triggerHook = 'top 85%',
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' });
      return;
    }

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration,
      delay,
      ease: 'power3.out',
    };

    if (from === 'bottom') fromVars.y = distance;
    else if (from === 'left') fromVars.x = -distance;
    else if (from === 'right') fromVars.x = distance;
    else if (from === 'scale') {
      fromVars.scale = 0.92;
      fromVars.y = 25;
    }

    gsap.set(el, fromVars);

    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: triggerHook,
        once: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll()
        .filter((st) => st.trigger === el)
        .forEach((st) => st.kill());
    };
  }, [from, delay, duration, distance, triggerHook]);

  return ref;
}

/**
 * Deep 3D cinematic scroll entrance with perspective, blur, scale, and rotateX
 */
export function useGsapDeepScrollCard<T extends HTMLElement = HTMLDivElement>(
  options: {
    delay?: number;
    duration?: number;
    distance?: number;
    triggerHook?: string;
  } = {}
) {
  const ref = useRef<T>(null);
  const {
    delay = 0,
    duration = 1.1,
    distance = 70,
    triggerHook = 'top 88%',
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(el, { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' });
      return;
    }

    gsap.set(el, {
      opacity: 0,
      y: distance,
      scale: 0.92,
      rotateX: 10,
      transformPerspective: 1200,
      filter: 'blur(8px)',
      transformOrigin: 'top center',
    });

    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: triggerHook,
        once: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll()
        .filter((st) => st.trigger === el)
        .forEach((st) => st.kill());
    };
  }, [delay, duration, distance, triggerHook]);

  return ref;
}

/**
 * Continuous real-time parallax scrub: moves an element as you scroll
 */
export function useGsapParallaxScrub<T extends HTMLElement = HTMLDivElement>(
  options: {
    speed?: number; // percentage of element height to shift
  } = {}
) {
  const ref = useRef<T>(null);
  const { speed = -15 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const tween = gsap.to(el, {
      yPercent: speed,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll()
        .filter((st) => st.trigger === el)
        .forEach((st) => st.kill());
    };
  }, [speed]);

  return ref;
}

/**
 * Velocity-based scroll skew effect:
 * Visibly skews content on fast scrolling and springs back on stop
 */
export function useScrollVelocitySkew<T extends HTMLElement = HTMLDivElement>(
  maxSkew = 3.5
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const proxy = { skew: 0 };
    const skewSetter = gsap.quickSetter(el, 'skewY', 'deg');
    const clamp = gsap.utils.clamp(-maxSkew, maxSkew);

    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        const skew = clamp(self.getVelocity() / -350);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: 'power3.out',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    return () => st.kill();
  }, [maxSkew]);

  return ref;
}

/**
 * Magnetic element effect:
 * Elements smoothly gravitate toward cursor when hovered
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(
  strength = 0.35
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const xTo = gsap.quickTo(el, 'x', { duration: 0.45, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.45, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      xTo(relX * strength);
      yTo(relY * strength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      xTo(0);
      yTo(0);
    };
  }, [strength]);

  return ref;
}

/**
 * Interactive 3D card tilt with smooth perspective on mouse move
 */
export function useGsapCardTilt<T extends HTMLElement = HTMLDivElement>(
  intensity = 8
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -intensity;
      const rotateY = ((x - centerX) / centerX) * intensity;

      gsap.to(el, {
        rotateX,
        rotateY,
        transformPerspective: 1000,
        ease: 'power2.out',
        duration: 0.35,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        ease: 'power3.out',
        duration: 0.6,
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity]);

  return ref;
}

/**
 * Staggered child reveals on scroll
 */
export function useGsapStagger<T extends HTMLElement = HTMLDivElement>(
  options: {
    stagger?: number;
    from?: 'bottom' | 'left' | 'right';
    delay?: number;
    duration?: number;
    triggerHook?: string;
  } = {}
) {
  const ref = useRef<T>(null);
  const {
    stagger = 0.1,
    from = 'bottom',
    delay = 0,
    duration = 0.8,
    triggerHook = 'top 85%',
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const children = Array.from(el.children) as HTMLElement[];
    if (!children.length) return;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration,
      ease: 'power3.out',
    };

    if (from === 'bottom') fromVars.y = 35;
    else if (from === 'left') fromVars.x = -35;
    else if (from === 'right') fromVars.x = 35;

    gsap.set(children, fromVars);

    const tween = gsap.to(children, {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      stagger,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: triggerHook,
        once: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll()
        .filter((st) => st.trigger === el)
        .forEach((st) => st.kill());
    };
  }, [stagger, from, delay, duration, triggerHook]);

  return ref;
}
