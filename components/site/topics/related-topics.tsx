import { Microscope, ArrowRight } from 'lucide-react';
import { topics } from '@/lib/site';

export function RelatedTopics({ currentSlug }: { currentSlug: string }) {
  const related = topics.filter((t) => t.slug !== currentSlug).slice(0, 4);
  return (
    <section className="reveal pt-4">
      <div className="rounded-2xl border border-border bg-secondary/40 p-6 sm:p-8">
        <div className="flex items-center gap-2">
          <Microscope className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">
            Related topics
          </h2>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          Continue learning with these connected topics.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {related.map((t) => (
            <li key={t.slug}>
              <a
                href={t.href}
                className="group flex items-center justify-between rounded-xl border border-border/70 bg-card px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:shadow-sm"
              >
                {t.title}
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}