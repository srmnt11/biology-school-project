'use client';

import { usePathname } from 'next/navigation';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function RevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useScrollReveal(pathname);
  return <>{children}</>;
}
