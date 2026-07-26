import { BookOpen, ExternalLink, Quote } from 'lucide-react';
import { SectionTitle } from '@/components/site/section-title';
import { ReferenceCard } from '@/components/site/reference-card';
import { Breadcrumbs } from '@/components/site/breadcrumbs';
import { InformationBox } from '@/components/site/information-box';

const references = [
  {
    href: '#',
    title: 'Placeholder reference title one',
    source: 'Journal of Placeholder Biology',
    year: '2023',
    type: 'Journal',
    image:
      'https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    href: '#',
    title: 'Placeholder reference title two',
    source: 'OpenStax Biology',
    year: '2022',
    type: 'Textbook',
    image:
      'https://images.pexels.com/photos/3784372/pexels-photo-3784372.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    href: '#',
    title: 'Placeholder reference title three',
    source: 'Nature Education',
    year: '2021',
    type: 'Article',
    image:
      'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    href: '#',
    title: 'Placeholder reference title four',
    source: 'Cell Press',
    year: '2023',
    type: 'Journal',
    image:
      'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    href: '#',
    title: 'Placeholder reference title five',
    source: 'Khan Academy',
    year: '2024',
    type: 'Course',
    image:
      'https://images.pexels.com/photos/3825571/pexels-photo-3825571.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    href: '#',
    title: 'Placeholder reference title six',
    source: 'Encyclopedia of Life',
    year: '2020',
    type: 'Reference',
    image:
      'https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

const quotes = [
  {
    text: 'A placeholder quotation from a notable biologist would go here, illustrating an important idea about cells or tissues.',
    cite: 'Placeholder Author, Year',
  },
  {
    text: 'Another placeholder quotation could highlight a key concept that ties the topics together.',
    cite: 'Placeholder Author, Year',
  },
];

export default function ReferencesPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-border bg-hero-mesh">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'References' }]}
          />
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
              <BookOpen className="h-7 w-7" strokeWidth={1.8} />
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
              Resources
            </span>
          </div>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            References &amp; further reading
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            A curated list of sources to go deeper on any topic. All entries
            below are placeholders — swap in real citations when ready.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Sources"
          title="Citations"
          description="Books, journals, and courses referenced across the site."
          className="reveal"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {references.map((r, i) => (
            <ReferenceCard
              key={r.title}
              href={r.href}
              title={r.title}
              source={r.source}
              year={r.year}
              type={r.type}
              image={r.image}
            />
          ))}
        </div>

        <div className="reveal mt-14 grid gap-4 md:grid-cols-2">
          {quotes.map((q) => (
            <figure
              key={q.cite}
              className="flex gap-3 rounded-2xl border border-border bg-secondary/40 p-6"
            >
              <Quote className="h-6 w-6 shrink-0 text-primary/60" />
              <div>
                <blockquote className="text-base leading-relaxed text-foreground text-pretty">
                  {q.text}
                </blockquote>
                <figcaption className="mt-3 text-sm font-medium text-muted-foreground">
                  — {q.cite}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <div className="reveal mt-10">
          <InformationBox
            variant="info"
            icon={<ExternalLink className="h-5 w-5" />}
            title="External links"
          >
            Reference cards link out to their original sources. Add real URLs
            to each entry when filling in content.
          </InformationBox>
        </div>
      </section>
    </>
  );
}
