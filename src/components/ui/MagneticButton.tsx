import type { ReactNode } from 'react';
import { useMagnetic } from '../../hooks/useGsap';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, className = '', strength = 0.3 }: MagneticProps) {
  const ref = useMagnetic<HTMLDivElement>(strength);

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}
