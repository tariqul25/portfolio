import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cls } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all cursor-pointer';
  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-xs sm:text-sm gap-2',
    lg: 'px-6 py-3.5 text-sm gap-2',
  }[size];

  const variantStyles = {
    primary: 'bg-violet-600 text-white hover:bg-violet-500 shadow-md',
    secondary: 'bg-slate-800/80 text-slate-200 border border-slate-700 hover:bg-slate-800',
    outline: 'border border-slate-700 text-slate-200 hover:border-violet-500/60 hover:text-violet-300',
    emerald: 'bg-emerald-950/60 text-emerald-300 border border-emerald-700/60 hover:bg-emerald-900/60',
  }[variant];

  return (
    <button className={cls(baseStyles, sizeStyles, variantStyles, className)} {...props}>
      {children}
    </button>
  );
}
