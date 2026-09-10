import { Code2, Server, ShoppingBag, Sparkles } from 'lucide-react';
import { useGsapCardTilt, useGsapReveal } from '../../hooks/useGsap';

const cards = [
  [
    'Frontend Development',
    'Crafting responsive, accessible, and fast web interfaces using React, Next.js, and TypeScript.',
    Code2,
  ],
  [
    'Full-Stack MERN',
    'Building RESTful APIs with Node.js & Express, MongoDB database design, and JWT / Firebase auth.',
    Server,
  ],
  [
    'Shopify Storefronts',
    'Developing bespoke Liquid themes, custom sections, app integrations, and Klaviyo email workflows.',
    ShoppingBag,
  ],
  [
    'Performance & Polish',
    'Deep focus on smooth micro-interactions, cross-browser compatibility, and conversion optimization.',
    Sparkles,
  ],
] as const;

function AboutCard({
  title,
  desc,
  Icon,
  index,
}: {
  title: string;
  desc: string;
  Icon: typeof Code2;
  index: number;
}) {
  const tiltRef = useGsapCardTilt<HTMLDivElement>(6);

  return (
    <div
      ref={tiltRef}
      className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-violet-500/50 hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center mb-4 text-violet-400">
          <Icon size={18} />
        </div>
        <span className="text-[10px] font-mono text-slate-500 font-semibold block mb-1">
          0{index + 1}
        </span>
        <h3 className="text-base font-bold text-white mb-2">{title}</h3>
        <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export function About() {
  const leftColRef = useGsapReveal<HTMLDivElement>({
    from: 'left',
    duration: 0.85,
    distance: 35,
  });

  const rightColRef = useGsapReveal<HTMLDivElement>({
    from: 'right',
    duration: 0.85,
    distance: 35,
  });

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 border-t border-slate-800/80 bg-slate-950/40 relative z-10">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1.05fr_1.15fr] gap-12 lg:gap-16 items-center">
          <div ref={leftColRef}>
            <span className="inline-flex text-[11px] uppercase tracking-[.16em] font-semibold text-violet-400 bg-violet-950/60 border border-violet-800/60 px-3 py-1 rounded-full mb-4">
              About Me
            </span>
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold leading-[1.14] tracking-tight text-white mb-6">
              Building modern web,<br />
              <span className="text-slate-400 font-normal">one component</span><br />
              at a time.
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed text-[15px]">
              <p>
                I'm <span className="text-white font-semibold">Md. Tariqul Islam</span>, a frontend-focused web developer based in Kishoreganj, Bangladesh.
              </p>
              <p>
                My core passion is building clean, component-driven user interfaces that feel alive and intuitive. I bridge the gap between creative visual designs and robust production code.
              </p>
            </div>
            <div className="mt-8 p-5 bg-slate-900/90 border-l-4 border-violet-500 rounded-r-xl border border-slate-800 shadow-md">
              <p className="text-sm text-slate-300 leading-relaxed italic font-medium">
                "Good frontend craftsmanship is invisible — when an interface flows effortlessly and responds smoothly, the code behind it has done its job perfectly."
              </p>
            </div>
          </div>

          <div ref={rightColRef}>
            <div className="grid sm:grid-cols-2 gap-4">
              {cards.map(([title, desc, Icon], i) => (
                <AboutCard
                  key={title}
                  title={title}
                  desc={desc}
                  Icon={Icon}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
