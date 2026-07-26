import { cn } from '@/lib/utils';

type TimelineItem = {
  step: string;
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol
      className={cn(
        'relative space-y-8 border-l border-border pl-8',
        className
      )}
    >
      {items.map((item, i) => (
        <li
          key={item.step}
          className="reveal relative"
          data-reveal-delay={i * 80}
        >
          <span
            className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-sm ring-4 ring-background"
            aria-hidden
          >
            {item.step}
          </span>
          <div className="rounded-xl border border-border/70 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
            <h3 className="text-base font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
