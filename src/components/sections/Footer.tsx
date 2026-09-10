import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../ui/Icons';

const links: Array<[string, string]> = [
  ['About', '#about'],
  ['Projects', '#work'],
  ['Shopify', '#shopify'],
  ['Experience', '#experience'],
  ['Skills', '#stack'],
  ['Contact', '#contact'],
];

export function Footer() {
  const go = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070A10]" role="contentinfo">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-10 py-12">
          {/* Brand & Socials */}
          <div>
            <div className="flex items-center mb-3.5">
              <span style={{ fontFamily: '"Satisfy", cursive', fontSize: '1.75rem', fontWeight: 400, lineHeight: 1 }} className="text-white">
                Tariqul
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs mb-5">
              Frontend &amp; Full-Stack MERN developer crafting bespoke Shopify storefronts and scalable web applications.
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/tariqul25"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 flex items-center justify-center border border-slate-800 bg-slate-900/80 text-slate-400 hover:text-white hover:border-violet-500/60 hover:bg-violet-950/40 rounded-lg transition-all"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/tariqul25/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 flex items-center justify-center border border-slate-800 bg-slate-900/80 text-slate-400 hover:text-white hover:border-violet-500/60 hover:bg-violet-950/40 rounded-lg transition-all"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://www.facebook.com/tariqul25/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Profile"
                className="w-8 h-8 flex items-center justify-center border border-slate-800 bg-slate-900/80 text-slate-400 hover:text-white hover:border-violet-500/60 hover:bg-violet-950/40 rounded-lg transition-all"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[.16em] text-slate-500 font-bold mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2">
              {links.map(([label, href]) => (
                <li key={href}>
                  <button
                    onClick={() => go(href)}
                    className="text-xs font-semibold text-slate-400 hover:text-violet-400 transition-colors cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[.16em] text-slate-500 font-bold mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="mailto:tariqulcst@gmail.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors"
                >
                  <Mail size={13} className="text-violet-400" />
                  tariqulcst@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin size={13} className="text-indigo-400" />
                Kishoreganj, Bangladesh
              </li>
            </ul>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 bg-violet-950/60 border border-violet-800/60 px-3 py-1.5 rounded-lg hover:bg-violet-900/60 transition-colors cursor-pointer"
            >
              <ArrowUp size={13} />
              Back to Top
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800/80 py-5 flex items-center justify-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Md. Tariqul Islam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
