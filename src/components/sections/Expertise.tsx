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
    <article ref={cardRef} className="h-full">
      <div
        ref={tiltRef}
        className={`relative border rounded-2xl p-6 sm:p-7 shadow-xl h-full transition-all duration-300 flex flex-col gap-5 ${
          area.primary
            ? 'border-slate-700/80 bg-gradient-to-br from-violet-950/40 via-slate-900/90 to-indigo-950/40 hover:border-violet-500/50'
            : 'bg-slate-900/80 border-slate-800 hover:border-violet-500/40'
        }`}
      >
        {/* Header Row */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[.18em] text-violet-300 font-bold bg-violet-950/80 border border-violet-700/60 px-2.5 py-0.5 rounded-full">
            {area.tagline}
          </span>
          <div className="w-9 h-9 rounded-xl bg-violet-600/90 flex items-center justify-center text-white shrink-0 shadow-md">
            <Icon size={16} />
          </div>
        </div>

        {/* Title + Description */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{area.description}</p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60 mt-auto">
          {area.skills.map((s) => (
            <span
              key={s}
              className="text-[11px] font-medium text-slate-300 border border-slate-700/70 px-2.5 py-0.5 rounded-md bg-slate-800/60 hover:border-violet-500/50 hover:text-violet-300 transition-colors"
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
      className="py-20 sm:py-24 lg:py-28 border-t border-slate-800/80 bg-slate-950/40 relative z-10"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div ref={headerRef} className="mb-12">
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

        <div className="grid sm:grid-cols-2 gap-5">
          {expertiseAreas.map((area, i) => (
            <DisciplineCard key={area.id} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
