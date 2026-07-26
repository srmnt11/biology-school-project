import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

type InfoBoxProps = {
  title?: string;
  children: React.ReactNode;
  variant?: 'note' | 'tip' | 'warning' | 'info';
  icon?: React.ReactNode;
  className?: string;
};

const variants: Record<
  NonNullable<InfoBoxProps['variant']>,
  { wrap: string; iconWrap: string }
> = {
  note: {
    wrap: 'border-emerald-200 bg-emerald-50/70',
    iconWrap: 'bg-emerald-100 text-emerald-700',
  },
  tip: {
    wrap: 'border-sky-200 bg-sky-50/70',
    iconWrap: 'bg-sky-100 text-sky-700',
  },
  warning: {
    wrap: 'border-amber-200 bg-amber-50/70',
    iconWrap: 'bg-amber-100 text-amber-700',
  },
  info: {
    wrap: 'border-primary/20 bg-primary/5',
    iconWrap: 'bg-primary/15 text-primary',
  },
};

export function InformationBox({
  title,
  children,
  variant = 'info',
  icon,
  className,
}: InfoBoxProps) {
  const v = variants[variant];
  return (
    <Card
      className={cn(
        'flex gap-4 rounded-xl border p-4 sm:p-5',
        v.wrap,
        className
      )}
    >
      {icon && (
        <span
          className={cn(
            'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
            v.iconWrap
          )}
        >
          {icon}
        </span>
      )}
      <div className="min-w-0">
        {title && (
          <p className="text-sm font-semibold text-foreground">{title}</p>
        )}
        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </Card>
  );
}
