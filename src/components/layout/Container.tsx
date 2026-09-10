import { type ReactNode } from 'react';
import { cls } from '../../lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cls('mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12', className)}>
      {children}
    </div>
  );
}
