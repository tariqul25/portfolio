import { GraduationCap, CalendarDays, Award } from 'lucide-react';
import { education } from '../../data/experience';
import { useGsapCardTilt, useGsapDeepScrollCard, useGsapReveal } from '../../hooks/useGsap';

function EducationCard({
  item,
  index,
}: {
  item: (typeof education)[number];
  index: number;
}) {
  const cardRef = useGsapDeepScrollCard<HTMLElement>({
    delay: index * 0.12,
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
        className="bg-slate-900/80 border border-slate-800 rounded-3xl p-7 sm:p-8 h-full flex flex-col justify-between shadow-xl hover:border-violet-500/50 hover:shadow-2xl transition-all duration-300"
      >
        {/* Top Details with Flexible Height */}
        <div className="flex-1 flex flex-col justify-start">
          <div className="flex items-center justify-between mb-4">
            <span className="w-10 h-10 rounded-xl bg-violet-950/80 border border-violet-700/60 flex items-center justify-center text-violet-400">
              <GraduationCap size={20} />
            </span>
            <span className="text-xs font-mono text-slate-400 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800 flex items-center gap-1.5">
              <CalendarDays size={12} />
              {item.period}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 min-h-[56px] flex items-center">
            {item.degree}
          </h3>
          <p className="text-xs font-semibold text-slate-400 mb-8">
            {item.institution}
          </p>
        </div>

        {/* Score badge strictly anchored to the bottom line */}
        <div className="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Academic Standing
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700/60 px-3 py-1 rounded-full">
            <Award size={13} className="text-emerald-400" />
            {item.gradeType}: {item.grade}
          </span>
        </div>
      </div>
    </article>
  );
}

export function Education() {
  const headerRef = useGsapReveal<HTMLDivElement>({
    from: 'bottom',
    duration: 0.8,
    distance: 30,
  });

  return (
    <section
      id="education"
      className="py-18 sm:py-22 lg:py-24 border-t border-slate-800/80 bg-slate-950/20 relative z-10"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div ref={headerRef} className="mb-10 sm:mb-12">
          <span className="inline-flex text-[11px] uppercase tracking-[.16em] font-semibold text-violet-400 bg-violet-950/60 border border-violet-700/60 px-3 py-1 rounded-full">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-3">
            Formal Education
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Foundational studies in Computer Science and secondary education with high academic standing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {education.map((item, i) => (
            <EducationCard key={item.institution} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
