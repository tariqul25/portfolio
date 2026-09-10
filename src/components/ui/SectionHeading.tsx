import { FadeIn } from './FadeIn';
import { cls } from '../../lib/utils';

interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  badgeVariant?: 'violet' | 'emerald';
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  badgeVariant = 'violet',
  className,
}: SectionHeadingProps) {
  const badgeClasses =
    badgeVariant === 'emerald'
      ? 'text-emerald-400 bg-emerald-950/60 border-emerald-700/60'
      : 'text-violet-400 bg-violet-950/60 border-violet-700/60';

  return (
    <FadeIn className={cls('mb-12', className)}>
      <span
        className={cls(
          'inline-flex text-[11px] uppercase tracking-[.16em] font-semibold border px-3 py-1 rounded-full',
          badgeClasses
        )}
      >
        {badge}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mt-3">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-slate-400 leading-relaxed max-w-2xl text-sm sm:text-base">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
