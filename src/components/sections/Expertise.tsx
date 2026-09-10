import { Code2, Server, ShoppingBag, Workflow } from 'lucide-react';
import { expertiseAreas } from '../../data/expertise';
import { useGsapCardTilt, useGsapDeepScrollCard, useGsapReveal } from '../../hooks/useGsap';

const iconMap: Record<string, typeof Code2> = {
  frontend: Code2,
  fullstack: Server,
  shopify: ShoppingBag,
  'marketing-automation': Workflow,
};

function DisciplineCard({
  area,
  index,
}: {
  area: (typeof expertiseAreas)[number];
  index: number;
}) {
  const Icon = iconMap[area.id] || Code2;
  const cardRef = useGsapDeepScrollCard<HTMLElement>({
    delay: index * 0.1,
    distance: 40,
    duration: 0.9,
  });
  const tiltRef = useGsapCardTilt<HTMLDivElement>(5);

  return (
    <article
      ref={cardRef}
      className="h-full"
    >
      <div
        ref={tiltRef}
        className={`relative border rounded-3xl p-8 shadow-xl h-full transition-all duration-300 flex flex-col justify-between ${
          area.primary
            ? 'border-slate-700/80 bg-gradient-to-br from-violet-950/40 via-slate-900/90 to-indigo-950/40 hover:border-violet-500/50'
            : 'bg-slate-900/80 border-slate-800 hover:border-violet-500/40'
        }`}
      >
        <div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-[11px] uppercase tracking-[.16em] text-violet-300 font-bold bg-violet-950/80 border border-violet-700/60 px-3 py-1 rounded-full inline-block mb-3">
                {area.tagline}
              </span>
              <h3 className="text-2xl font-bold text-white">{area.title}</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <Icon size={18} />
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm mb-6">{area.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
          {area.skills.map((s) => (
            <span
              key={s}
              className="text-xs font-semibold text-violet-300 border border-violet-800/60 px-3 py-1 rounded-lg bg-slate-900/90 hover:border-violet-500/60 hover:text-white transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Expertise() {
  const headerRef = useGsapReveal<HTMLDivElement>({
    from: 'bottom',
    duration: 0.8,
    distance: 30,
  });

  return (
    <section
      id="expertise"
      className="py-18 sm:py-22 lg:py-24 border-t border-slate-800/80 bg-slate-950/40 relative z-10"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div ref={headerRef} className="mb-10 sm:mb-12">
          <span className="inline-flex text-[11px] uppercase tracking-[.16em] font-semibold text-violet-400 bg-violet-950/60 border border-violet-700/60 px-3 py-1 rounded-full">
            What I Specialize In
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-3">
            Core Technical Disciplines
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Proven execution across modern frontend development, backend systems, and conversion-focused Shopify solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {expertiseAreas.map((area, i) => (
            <DisciplineCard key={area.id} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
