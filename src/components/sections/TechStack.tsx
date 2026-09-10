import { Code2, Server, ShieldCheck, ShoppingBag } from 'lucide-react';
import { techStack } from '../../data/skills';
import { useGsapCardTilt, useGsapReveal } from '../../hooks/useGsap';

const iconMap: Record<string, typeof Code2> = {
  Frontend: Code2,
  Backend: Server,
  'Auth & Services': ShieldCheck,
  Shopify: ShoppingBag,
};

function TechCard({
  group,
  index,
}: {
  group: (typeof techStack)[number];
  index: number;
}) {
  const Icon = iconMap[group.name] || Code2;
  const cardRef = useGsapReveal<HTMLDivElement>({
    from: index % 2 === 0 ? 'left' : 'right',
    delay: index * 0.1,
    duration: 0.8,
    distance: 35,
  });
  const tiltRef = useGsapCardTilt<HTMLDivElement>(5);

  return (
    <div ref={cardRef} className="h-full">
      <div
        ref={tiltRef}
        className="bg-slate-900/80 border border-slate-800 rounded-3xl p-7 sm:p-8 shadow-xl hover:border-violet-500/50 hover:shadow-2xl transition-all duration-200 h-full flex flex-col justify-between"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl border border-violet-700/60 bg-violet-950/80 flex items-center justify-center text-violet-400 shrink-0">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-bold text-white">{group.name}</h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400 bg-slate-950/80 px-2.5 py-0.5 rounded-md border border-slate-800">
              {group.name === 'Frontend'
                ? 'UI & State'
                : group.name === 'Backend'
                ? 'API & DB'
                : group.name === 'Shopify'
                ? 'E-Commerce'
                : 'Security & Sync'}
            </span>
          </div>

          {/* Skill Badges with Min-Height */}
          <div className="flex flex-wrap gap-2 min-h-[90px] content-start">
            {group.items.map((x) => (
              <span
                key={x}
                className="inline-flex items-center border border-slate-700/70 bg-slate-800/80 text-slate-300 text-xs px-2.5 py-1 font-medium rounded-md hover:border-violet-500/60 hover:text-white transition-colors"
              >
                {x}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>{group.items.length} Technologies</span>
          <span className="text-emerald-400 font-medium">● Active in Production</span>
        </div>
      </div>
    </div>
  );
}

export function TechStack() {
  const headerRef = useGsapReveal<HTMLDivElement>({
    from: 'bottom',
    duration: 0.8,
    distance: 30,
  });

  return (
    <section
      id="stack"
      className="py-20 sm:py-24 lg:py-28 border-t border-slate-800/80 bg-slate-950/20 relative z-10"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div ref={headerRef} className="mb-14">
          <span className="inline-flex text-[11px] uppercase tracking-[.16em] font-semibold text-violet-400 bg-violet-950/60 border border-violet-700/60 px-3 py-1 rounded-full">
            Tools & Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-3">
            Technology Stack
          </h2>
          <p className="mt-3.5 text-slate-400 max-w-2xl">
            Production-tested tools and frameworks I use to build scalable web applications and high-performance storefronts.
          </p>
        </div>

        {/* 2-Column with 2-Row Balanced Equal-Height Grid with GSAP Entrance & Tilt */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {techStack.map((group, i) => (
            <TechCard key={group.name} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
