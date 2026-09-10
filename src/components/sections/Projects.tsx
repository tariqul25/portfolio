import { ArrowUpRight, Globe, Landmark, Sprout, Zap } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { projects, type Project } from '../../data/projects';
import { useGsapReveal } from '../../hooks/useGsap';
import { Magnetic } from '../ui/MagneticButton';

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((x) => (
        <span
          key={x}
          className="inline-flex items-center border border-slate-700/70 bg-slate-800/70 text-slate-300 text-[11px] px-2.5 py-0.5 font-medium rounded-md hover:border-violet-500/60 hover:text-white transition-colors"
        >
          {x}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useGsapReveal<HTMLElement>({
    from: 'bottom',
    duration: 0.7,
    distance: 25,
    delay: index * 0.12,
  });

  const isGarden = project.id === 'gardenhub';
  const isTasks = project.id === 'swifttasks';
  const ProjectIcon = isGarden ? Sprout : isTasks ? Zap : Landmark;

  const glowColor = isGarden
    ? 'rgba(16,185,129,0.15)'
    : isTasks
      ? 'rgba(139,92,246,0.18)'
      : 'rgba(245,158,11,0.15)';

  const domainLabel = isGarden
    ? 'garden-guidance.web.app'
    : isTasks
      ? 'swift-tasks-87d89.web.app'
      : 'historical-artifacts-8b68f.web.app';

  return (
    <article
      ref={cardRef}
      className="group flex flex-col h-full bg-slate-900/80 border border-slate-800/90 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-950/20 transition-all duration-300"
    >
      {/* Top Browser Window Mockup */}
      <div className="relative w-full aspect-[16/10] bg-slate-950 flex flex-col overflow-hidden border-b border-slate-800/80">
        {/* Ambient glow behind image */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: `radial-gradient(ellipse 70% 55% at 50% 45%, ${glowColor}, transparent)`,
          }}
        />

        {/* Chrome Bar */}
        <div className="relative z-10 flex items-center justify-between px-4 py-2.5 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block" />
          </div>
          <div className="text-[10px] font-mono text-slate-400 bg-slate-900/90 px-2.5 py-0.5 rounded-md border border-slate-800 flex items-center gap-1.5 max-w-[170px] sm:max-w-none truncate">
            <Globe size={10} className="text-violet-400 shrink-0" />
            <span className="truncate">{domainLabel}</span>
          </div>
          <div className="w-6" />
        </div>

        {/* Screenshot preview */}
        <div className="relative z-10 flex-1 w-full overflow-hidden bg-slate-950">
          {project.image ? (
            <a
              href={project.ctaUrl || '#'}
              target="_blank"
              rel="noreferrer"
              className="w-full h-full block overflow-hidden cursor-pointer"
              tabIndex={-1}
            >
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </a>
          ) : (
            <div className="w-full h-full bg-slate-900/60 flex items-center justify-center text-slate-600 text-xs font-mono">
              Preview Unavailable
            </div>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-slate-900/90">
        <div>
          {/* Card Top: Numbering + SVG Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-mono font-bold text-slate-600 group-hover:text-violet-400/90 transition-colors">
                0{index + 1}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <span className="text-[10.5px] uppercase tracking-wider text-violet-300 font-bold bg-violet-950/70 border border-violet-800/60 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5">
                <ProjectIcon
                  size={12}
                  className={isGarden ? 'text-emerald-400' : isTasks ? 'text-amber-400' : 'text-violet-400'}
                />
                <span>{project.badge}</span>
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium shrink-0">Full-Stack</span>
          </div>

          {/* Equal height title container */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-violet-300 transition-colors min-h-[3.25rem] flex items-center">
            {project.title}
          </h3>

          {/* Equal height description container */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 min-h-[4.25rem] flex items-start">
            {project.description}
          </p>
        </div>

        <div>
          {/* Equal height tech stack area */}
          <div className="mb-5 pt-3 border-t border-slate-800/60 min-h-[3.75rem] flex items-start">
            <Tags items={project.technologies} />
          </div>

          {/* Action CTAs */}
          <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-800/80">
            {project.ctaUrl && (
              <Magnetic strength={0.25}>
                <a
                  href={project.ctaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-violet-600 text-white text-xs font-semibold rounded-lg hover:bg-violet-500 shadow-md hover:shadow-violet-600/30 transition-all duration-200 cursor-pointer"
                >
                  <span>{project.ctaLabel || 'Live Preview'}</span>
                  <ArrowUpRight size={13} />
                </a>
              </Magnetic>
            )}

            <div className="flex items-center gap-1.5">
              {project.clientRepo ? (
                <>
                  <Magnetic strength={0.15}>
                    <a
                      href={project.clientRepo}
                      target="_blank"
                      rel="noreferrer"
                      title="Client Repository"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/70 text-[11px] font-semibold rounded-md transition-all cursor-pointer"
                    >
                      <GithubIcon size={13} />
                      <span>Client</span>
                    </a>
                  </Magnetic>
                  {project.serverRepo && (
                    <Magnetic strength={0.15}>
                      <a
                        href={project.serverRepo}
                        target="_blank"
                        rel="noreferrer"
                        title="Server Repository"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/70 text-[11px] font-semibold rounded-md transition-all cursor-pointer"
                      >
                        <GithubIcon size={13} />
                        <span>Server</span>
                      </a>
                    </Magnetic>
                  )}
                </>
              ) : (
                project.githubUrl && (
                  <Magnetic strength={0.2}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/70 text-xs font-semibold rounded-lg transition-all cursor-pointer"
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                    </a>
                  </Magnetic>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const headerRef = useGsapReveal<HTMLDivElement>({
    from: 'bottom',
    duration: 0.8,
    distance: 25,
  });

  return (
    <section id="work" className="py-16 sm:py-20 lg:py-24 border-t border-slate-800/80 bg-slate-950/20 relative z-10">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div ref={headerRef} className="mb-10 sm:mb-12">
          <span className="inline-flex text-[11px] uppercase tracking-[.16em] font-semibold text-violet-400 bg-violet-950/60 border border-violet-700/60 px-3 py-1 rounded-full">
            Selected Web Applications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mt-3">
            Full-Stack &amp; Frontend Projects
          </h2>
          <p className="mt-3 text-slate-400 leading-relaxed max-w-2xl text-sm sm:text-base">
            Explore full-stack MERN web applications engineered with clean code architecture, scalable database design, and interactive UI states.
          </p>
        </div>

        {/* 3 Columns, 1 Row Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}


