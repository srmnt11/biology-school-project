import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type PrevNext = {
  href: string;
  title: string;
  subtitle?: string;
};

export function PrevNextNav({
  prev,
  next,
  className,
}: {
  prev?: PrevNext;
  next?: PrevNext;
  className?: string;
}) {
  return (
    <nav
      aria-label="Previous and next topic"
      className={cn(
        'mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2',
        className
      )}
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col rounded-xl border border-border/70 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Previous
          </span>
          <span className="mt-2 text-base font-semibold text-foreground">
            {prev.title}
          </span>
          {prev.subtitle && (
            <span className="mt-0.5 text-sm text-muted-foreground">
              {prev.subtitle}
            </span>
          )}
        </Link>
      ) : (
        <span aria-hidden className="hidden sm:block" />
      )}
      {next && (
        <Link
          href={next.href}
          className="group flex flex-col items-end rounded-xl border border-border/70 bg-card p-5 text-right transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:items-end"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Next
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="mt-2 text-base font-semibold text-foreground">
            {next.title}
          </span>
          {next.subtitle && (
            <span className="mt-0.5 text-sm text-muted-foreground">
              {next.subtitle}
            </span>
          )}
        </Link>
      )}
    </nav>
  );
}
