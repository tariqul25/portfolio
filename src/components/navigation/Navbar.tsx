import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  ['About', '#about'],
  ['Projects', '#work'],
  ['Shopify', '#shopify'],
  ['Experience', '#experience'],
  ['Skills', '#stack'],
  ['Contact', '#contact'],
] as const;

const sections = ['hero', 'about', 'work', 'shopify', 'experience', 'education', 'stack', 'contact'];

function useActiveSection() {
  const [active, setActive] = useState(sections[0]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (intersecting?.target.id) {
          setActive(intersecting.target.id);
        }
      },
      { rootMargin: '-80px 0px -50% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return active;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const isActive = (href: string) => {
    const id = href.slice(1);
    if (href === '#about') return ['about', 'expertise'].includes(active);
    if (href === '#experience') return ['experience', 'education'].includes(active);
    return active === id;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <nav className="flex items-center justify-between h-[68px]" aria-label="Main navigation">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                go('#hero');
              }}
              className="flex items-center gap-2.5 group"
              aria-label="Md. Tariqul Islam — Home"
            >
              <span
                style={{ fontFamily: '"Satisfy", cursive', fontSize: '1.75rem', fontWeight: 400, lineHeight: 1 }}
                className="text-white group-hover:opacity-80 transition-opacity duration-200"
              >
                Tariqul
              </span>
            </a>

            <ul className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1 rounded-full border border-slate-800 shadow-inner">
              {links.map(([label, href]) => (
                <li key={href}>
                  <button
                    onClick={() => go(href)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                      isActive(href)
                        ? 'text-violet-300 bg-slate-800 shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                    aria-current={isActive(href) ? 'page' : undefined}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="/cv/Md-Tariqul-Islam-CV.pdf"
                download
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900/80 border border-slate-700/80 rounded-lg hover:border-violet-500/60 hover:text-violet-300 transition-all"
              >
                Download CV
                <Download size={13} />
              </a>
            </div>

            {/* Mobile Hamburger / Close Button */}
            <button
              className={`md:hidden flex items-center justify-center w-10 h-10 border rounded-xl transition-all cursor-pointer ${
                open
                  ? 'bg-rose-950/60 border-rose-500/60 text-rose-300 shadow-md shadow-rose-950/40 hover:bg-rose-900/60'
                  : 'bg-slate-900/90 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={22} className="stroke-[2.5]" /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Animated Mobile Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#0B0F17]/98 backdrop-blur-xl flex flex-col pt-[76px] pb-8 px-5 sm:px-8 md:hidden overflow-y-auto"
          >
            <div className="mx-auto w-full max-w-[1280px]">
              <ul className="flex flex-col gap-1 py-2">
                {links.map(([label, href]) => (
                  <li key={href}>
                    <button
                      onClick={() => go(href)}
                      className={`w-full text-left px-4 py-3.5 text-base font-semibold rounded-xl transition-all cursor-pointer flex items-center justify-between ${
                        isActive(href)
                          ? 'text-violet-300 bg-slate-900/90 border border-violet-500/40 shadow-sm'
                          : 'text-slate-300 hover:text-white hover:bg-slate-900/60 border border-transparent'
                      }`}
                    >
                      <span>{label}</span>
                      <span className="text-xs text-slate-500 font-mono">→</span>
                    </button>
                  </li>
                ))}
                <li className="mt-5 pt-4 border-t border-slate-800/80">
                  <a
                    href="/cv/Md-Tariqul-Islam-CV.pdf"
                    download
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white rounded-xl shadow-lg shadow-violet-900/40 transition-all cursor-pointer"
                  >
                    Download CV
                    <Download size={15} />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
