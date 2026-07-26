import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

type ReferenceCardProps = {
  href: string;
  title: string;
  source: string;
  year: string;
  type: string;
  image: string;
  className?: string;
};

export function ReferenceCard({
  href,
  title,
  source,
  year,
  type,
  image,
  className,
}: ReferenceCardProps) {
  return (
    <Card
      className={cn(
        'reveal group flex h-full flex-col overflow-hidden rounded-xl border-border/70 p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
        className
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur">
          {type}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {source} · {year}
        </p>
        <h3 className="mt-2 flex-1 text-base font-semibold leading-snug text-foreground">
          {title}
        </h3>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-200 group-hover:gap-2.5"
        >
          View reference
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}
