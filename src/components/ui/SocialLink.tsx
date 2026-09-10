import type { ReactNode } from 'react';
import { cls } from '../../lib/utils';

interface SocialLinkProps {
  href: string;
  label: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function SocialLink({ href, label, icon, children, className }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={cls(
        'inline-flex items-center justify-center border border-slate-800 bg-slate-900/80 text-slate-400 hover:text-white hover:border-slate-700 rounded-lg transition-all',
        className
      )}
    >
      {icon}
      {children}
    </a>
  );
}
