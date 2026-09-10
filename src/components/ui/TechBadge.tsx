import type { ReactNode } from 'react';
import { cls } from '../../lib/utils';

interface TechBadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'violet' | 'emerald';
}

export function TechBadge({ children, className, variant = 'default' }: TechBadgeProps) {
  const variantStyles = {
    default: 'border-slate-700/70 bg-slate-800/80 text-slate-300',
    violet: 'border-violet-700/60 bg-violet-950/60 text-violet-300',
    emerald: 'border-emerald-700/60 bg-emerald-950/60 text-emerald-300',
  }[variant];

  return (
    <span
      className={cls(
        'inline-flex items-center text-xs px-2.5 py-1 font-medium rounded-md border',
        variantStyles,
        className
      )}
    >
      {children}
    </span>
  );
}
