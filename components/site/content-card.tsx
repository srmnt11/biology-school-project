import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

export function ContentCard({
  id,
  eyebrow,
  title,
  children,
  image,
  imageAlt = '',
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
}) {
  return (
    <Card
      id={id}
      className={cn(
        'reveal scroll-mt-24 rounded-xl border-border/70 p-6 sm:p-8',
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h2>
      {image && (
        <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-xl bg-muted">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </Card>
  );
}
