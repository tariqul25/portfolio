import { useState } from 'react';
import { Mail, Phone, MapPin, Check, Copy, ArrowUpRight, LucideSend } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../ui/Icons';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { useGsapCardTilt, useGsapReveal } from '../../hooks/useGsap';
import { Magnetic } from '../ui/MagneticButton';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('tariqulcst@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const leftCardRef = useGsapReveal<HTMLDivElement>({
    from: 'left',
    duration: 0.9,
    distance: 45,
  });
  const leftTiltRef = useGsapCardTilt<HTMLDivElement>(4);

  const rightCardRef = useGsapReveal<HTMLDivElement>({
    from: 'right',
    duration: 0.9,
    distance: 45,
  });
  const rightTiltRef = useGsapCardTilt<HTMLDivElement>(4);

  return (
    <Section id="contact" className="py-20 sm:py-24 lg:py-28 border-t border-slate-800/80 bg-slate-950/40 relative z-10">
      <Container>
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something Exceptional"
          description="Whether you have a full-stack project in mind, need custom Shopify development, or want to discuss a full-time opportunity — my inbox is always open."
        />

        <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto mt-12">
          {/* LEFT COLUMN: Project Collaboration & Direct Actions (Matching Reference Image) */}
          <div ref={leftCardRef} className="h-full">
            <div
              ref={leftTiltRef}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl h-full flex flex-col justify-between hover:border-violet-500/40 transition-all duration-300"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-400 bg-violet-950/80 border border-violet-700/60 px-3 py-1 rounded-full mb-6">
                  <LucideSend size={12} />
                  Open For Opportunities
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                  Have a project worth building together?
                </h3>

                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Whether you are looking to build a high-performance React application, a full-stack MERN portal, or a custom-tailored Shopify storefront — my inbox is always open.
                </p>
              </div>

              {/* Action Buttons: Clean flow without dividing line per reference image */}
              <div className="pt-8 flex flex-wrap items-center gap-3.5">
                <Magnetic strength={0.32}>
                  <a
                    href="mailto:tariqulcst@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-violet-600 text-white rounded-xl hover:bg-violet-500 shadow-md hover:shadow-violet-600/30 transition-all duration-200 cursor-pointer"
                  >
                    <Mail size={15} />
                    Send An Email
                  </a>
                </Magnetic>

                <Magnetic strength={0.32}>
                  <a
                    href="https://www.linkedin.com/in/tariqul25/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-slate-950/80 text-slate-200 hover:text-white hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-200 cursor-pointer"
                  >
                    <LinkedinIcon size={15} />
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight size={13} />
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Information with Exact Reference Grid & Accent Circle */}
          <div ref={rightCardRef} className="h-full relative">
            <div
              ref={rightTiltRef}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl h-full flex flex-col justify-between hover:border-violet-500/40 transition-all duration-300 relative"
            >
              <div>
                <h4 className="text-[11px] uppercase tracking-widest text-slate-400 font-bold mb-5">
                  Direct Contact Information
                </h4>

                {/* ROW 1: 2 Contact Items Side-by-Side (Email + Phone/WhatsApp) */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {/* Email Box */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center gap-3.5 hover:border-slate-700 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-violet-950/80 border border-violet-700/60 flex items-center justify-center text-violet-400 shrink-0 shadow-sm">
                      <Mail size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        Direct Email
                      </span>
                      <a
                        href="mailto:tariqulcst@gmail.com"
                        className="text-xs font-bold text-white hover:text-violet-400 transition-colors truncate block"
                      >
                        tariqulcst@gm...
                      </a>
                    </div>
                    <button
                      onClick={copyEmail}
                      title="Copy Email"
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shrink-0"
                    >
                      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  </div>

                  {/* Phone / WhatsApp Box */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center gap-3.5 hover:border-slate-700 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center text-emerald-400 shrink-0 shadow-sm">
                      <Phone size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        Phone / WhatsApp
                      </span>
                      <a
                        href="tel:+8801703301147"
                        className="text-xs font-bold text-white hover:text-emerald-400 transition-colors block"
                      >
                        +880 17033-01147
                      </a>
                    </div>
                  </div>
                </div>

                {/* ROW 2: 1 Full-width Contact Item (Location) */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center gap-3.5 hover:border-slate-700 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-indigo-950/80 border border-indigo-700/60 flex items-center justify-center text-indigo-400 shrink-0 shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      Kishoreganj, Bangladesh (Remote Available)
                    </span>
                  </div>
                </div>
              </div>

              {/* Follow & Connect Online with Reference Divider */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Follow &amp; Connect Online
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <Magnetic strength={0.25}>
                    <a
                      href="https://github.com/tariqul25"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                    >
                      <GithubIcon size={15} />
                      <span>GitHub</span>
                    </a>
                  </Magnetic>

                  <Magnetic strength={0.25}>
                    <a
                      href="https://www.linkedin.com/in/tariqul25/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                    >
                      <LinkedinIcon size={15} />
                      <span>LinkedIn</span>
                    </a>
                  </Magnetic>

                  <Magnetic strength={0.25}>
                    <a
                      href="https://www.facebook.com/tariqul25/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook Profile"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                    >
                      <FacebookIcon size={15} />
                      <span>Facebook</span>
                    </a>
                  </Magnetic>
                </div>
              </div>


            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}