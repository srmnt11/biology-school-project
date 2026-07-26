import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

type TopicCardProps = {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent?: string;
  badge?: string;
  className?: string;
};

export function TopicCard({
  href,
  title,
  description,
  icon,
  accent = 'bg-primary/10 text-primary',
  badge,
  className,
}: TopicCardProps) {
  return (
    <Link
      href={href}
      className="group block h-full focus-visible:outline-none"
      aria-label={title}
    >
      <Card
        className={cn(
          'reveal group relative flex h-full flex-col overflow-hidden rounded-xl border-border/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 focus-within:border-primary/30 focus-within:shadow-lg',
          className
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <span
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3',
              accent
            )}
          >
            {icon}
          </span>
          {badge && (
            <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
              {badge}
            </span>
          )}
        </div>
        <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-200 group-hover:gap-2.5">
          Explore
          <ArrowRight className="h-4 w-4" />
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </Card>
    </Link>
  );
}
