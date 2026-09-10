import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
            ? 'bg-[#0B0F17]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg'
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
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${isActive(href)
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

            <button
              className="md:hidden flex items-center justify-center w-9 h-9 text-slate-300 hover:text-white border border-slate-800 rounded-lg bg-slate-900/80 cursor-pointer"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-[#0B0F17]/95 backdrop-blur-md flex flex-col pt-[68px] md:hidden">
          <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
            <ul className="flex flex-col gap-1 py-6">
              {links.map(([label, href]) => (
                <li key={href}>
                  <button
                    onClick={() => go(href)}
                    className="w-full text-left px-4 py-3.5 text-base font-semibold text-slate-300 hover:text-violet-300 hover:bg-slate-800/60 rounded-lg border-b border-slate-800/80 cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="mt-6">
                <a
                  href="/cv/Md-Tariqul-Islam-CV.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold bg-violet-600 text-white rounded-lg"
                >
                  Download CV
                  <Download size={15} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
