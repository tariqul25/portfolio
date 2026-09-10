import { type ReactNode, type JSX as ReactJSX } from 'react';
import { cls } from '../../lib/utils';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: keyof ReactJSX.IntrinsicElements;
}

export function Section({ id, children, className, as: Tag = 'section' }: SectionProps) {
  return (
    <Tag id={id} className={cls('py-20 sm:py-24 lg:py-28 relative z-10', className)}>
      {children}
    </Tag>
  );
}
