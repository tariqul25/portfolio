import {
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  MapPin,
} from 'lucide-react';
import { trainingExperience, workExperience } from '../../data/experience';
import { useGsapCardTilt, useGsapDeepScrollCard, useGsapReveal } from '../../hooks/useGsap';

export function Experience() {
  const currentJob = workExperience[0];

  const headerRef = useGsapReveal<HTMLDivElement>({
    from: 'bottom',
    duration: 0.8,
    distance: 30,
  });

  const trainingRef = useGsapDeepScrollCard<HTMLDivElement>({
    delay: 0.05,
    distance: 45,
    duration: 0.9,
  });
  const trainingTiltRef = useGsapCardTilt<HTMLDivElement>(4);

  const workRef = useGsapDeepScrollCard<HTMLDivElement>({
    delay: 0.15,
    distance: 45,
    duration: 0.9,
  });
  const workTiltRef = useGsapCardTilt<HTMLDivElement>(4);

  return (
    <section
      id="experience"
      className="py-18 sm:py-22 lg:py-24 border-t border-slate-800/80 bg-slate-950/40 relative z-10"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div ref={headerRef} className="mb-10 sm:mb-12">
          <span className="inline-flex text-[11px] uppercase tracking-[.16em] font-semibold text-violet-400 bg-violet-950/60 border border-violet-700/60 px-3 py-1 rounded-full">
            Track Record
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-3">
            Experience &amp; Training
          </h2>

          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            My professional career path, from intensive software engineering programs to developing live web and Shopify client solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Training */}
          <div ref={trainingRef} className="h-full">
            <div
              ref={trainingTiltRef}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-7 sm:p-9 h-full shadow-xl hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-5 mb-6 border-b border-slate-800">
                  <div className="w-9 h-9 rounded-xl bg-violet-950/80 border border-violet-700/60 flex items-center justify-center text-violet-400 shrink-0">
                    <GraduationCap size={18} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Training &amp; Learning
                    </h3>

                    <p className="text-xs text-slate-400">
                      Technical bootcamps &amp; attachments
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {trainingExperience.map((item) => (
                    <div
                      key={item.program}
                      className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/90 hover:border-slate-700 transition-colors"
                    >
                      <span className="text-[11px] uppercase tracking-wider text-violet-400 font-bold">
                        Training
                      </span>

                      <h4 className="text-base font-bold text-white mt-1.5">
                        {item.program}
                      </h4>

                      <p className="text-xs text-slate-300 mt-1">{item.institution}</p>

                      <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">{item.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Current Position */}
          <div ref={workRef} className="h-full">
            <div
              ref={workTiltRef}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-7 sm:p-9 h-full shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center text-emerald-400 shrink-0">
                      <BriefcaseBusiness size={18} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Current Position
                      </h3>

                      <p className="text-xs text-slate-400">
                        Professional Agency Work
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Active Role
                  </span>
                </div>

                {currentJob && (
                  <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/90">
                    <div className="flex flex-wrap justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                        <CalendarDays size={12} />
                        {currentJob.period}
                      </span>

                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin size={12} />
                        Full-time
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-1">
                      {currentJob.role}
                    </h4>

                    <p className="text-sm font-semibold text-slate-300 mb-4">
                      {currentJob.company}
                    </p>

                    <div>
                      <p className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
                        Core Responsibilities:
                      </p>

                      <ul className="text-xs text-slate-400 space-y-2.5">
                        {currentJob.responsibilities.map((x) => (
                          <li key={x} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Employment Type</span>

                <span className="font-semibold text-emerald-400">
                  Full-time Agency Role
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}