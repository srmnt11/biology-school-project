import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Breadcrumbs } from '@/components/site/breadcrumbs';
import { PrevNextNav } from '@/components/site/prev-next-nav';
import { SidebarNav } from '@/components/site/sidebar-nav';
import type { TopicMeta } from '@/lib/site';
import { getAdjacentTopics } from '@/lib/site';

export function TopicLayout({
  topic,
  children,
}: {
  topic: TopicMeta;
  children: React.ReactNode;
}) {
  const { prev, next } = getAdjacentTopics(topic.slug);
  const Icon = topic.icon;

  return (
    <article>
      {/* Banner */}
      <header
        className={cn(
          'relative overflow-hidden border-b border-border bg-hero-mesh',
          topic.accent.includes('emerald') && 'bg-hero-mesh',
          topic.accent.includes('sky') && 'bg-hero-mesh'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Topics', href: '/topics/cell-types' },
              { label: topic.title },
            ]}
          />
          <div className="mt-6 flex items-center gap-4">
            <span
              className={cn(
                'flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-inset',
                topic.accent
              )}
            >
              <Icon className="h-7 w-7" strokeWidth={1.8} />
            </span>
            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset',
                topic.accent
              )}
            >
              Topic
            </span>
          </div>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {topic.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {topic.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`#${topic.sections[0]?.id ?? 'overview'}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:shadow-md hover:brightness-105 active:scale-[0.98]"
            >
              Start reading
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/references"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary/30 hover:bg-muted active:scale-[0.98]"
            >
              References
            </Link>
          </div>
        </div>
      </header>

      {/* Body: sticky sidebar + content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <SidebarNav items={topic.sections} />
            </div>
          </aside>
          <div className="min-w-0 space-y-8">{children}</div>
        </div>
      </div>

      {/* Prev / Next */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PrevNextNav
          prev={
            prev
              ? {
                  href: prev.href,
                  title: prev.title,
                  subtitle: prev.subtitle,
                }
              : undefined
          }
          next={
            next
              ? {
                  href: next.href,
                  title: next.title,
                  subtitle: next.subtitle,
                }
              : undefined
          }
        />
      </div>
    </article>
  );
}
