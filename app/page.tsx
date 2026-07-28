import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Microscope,
  Info,
  Lightbulb as TipIcon,
} from 'lucide-react';
import { navItems, topics } from '@/lib/site';
import { SectionTitle } from '@/components/site/section-title';
import { TopicCard } from '@/components/site/topic-card';
import { Timeline } from '@/components/site/timeline';
import { InformationBox } from '@/components/site/information-box';


const roadmap = [
  {
    step: '01',
    title: 'Start with the cell',
    description:
      'Begin with Cell Types to understand the difference between prokaryotic and eukaryotic cells.',
  },
  {
    step: '02',
    title: 'Zoom into animal cells',
    description:
      'Explore the organelles that make up a typical animal cell and what each one does.',
  },
  {
    step: '03',
    title: 'Discover plant cells',
    description:
      'See how plant cells differ — the cell wall, chloroplasts, and the central vacuole.',
  },
  {
    step: '04',
    title: 'Build up to tissues',
    description:
      'Move from single cells to the tissues that form organs in animals and plants.',
  },
  {
    step: '05',
    title: 'Check the references',
    description:
      'Wrap up with curated sources and further reading to go deeper on any topic.',
  },
];

export default function Home() {
  const topicCards = navItems.filter((i) => i.href.startsWith('/topics'));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-mesh">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
          <div className="reveal">
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Explore the living world, one cell at a time.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              From the organelles humming inside a single cell to the tissues that build entire organs, this project breaks biology down into clear, connected lessons — including an interactive 3D model you can rotate, zoom, and click through yourself.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/topics/cell-types"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 hover:brightness-105 active:scale-[0.98]"
              >
                Start learning
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/references"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary/30 hover:bg-muted active:scale-[0.98]"
              >
                Browse references
              </Link>
            </div>
          </div>

          <div className="reveal" data-reveal-delay="120">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/15 via-accent/10 to-transparent" />
              <div className="float-slow relative h-full w-full">
                <Image
                  src="images/home-cell.jpeg"
                  alt="Microscope view of cells — placeholder biology illustration"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="rounded-[2rem] object-cover shadow-xl ring-1 ring-border"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionTitle
          eyebrow="Topics"
          title="Pick up where you left off"
          description="Each topic is self-contained with overviews, diagrams, callouts, and key terms."
          align="center"
          className="reveal mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topicCards.map((t, i) => {
            const Icon = t.icon;
            return (
              <TopicCard
                key={t.href}
                href={t.href}
                title={t.label}
                description={t.description}
                icon={<Icon className="h-6 w-6" strokeWidth={1.8} />}
                badge={`0${i + 1}`}
                accent={
                  i % 3 === 0
                    ? 'bg-emerald-50 text-emerald-600'
                    : i % 3 === 1
                      ? 'bg-sky-50 text-sky-600'
                      : 'bg-teal-50 text-teal-600'
                }
              />
            );
          })}
        </div>
      </section>

      {/* Roadmap / timeline */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionTitle
          eyebrow="Learning roadmap"
          title="A clear path from cell to tissue"
          description="Five steps take you from the basics of cell types all the way through plant and animal tissues."
          className="reveal"
        />
        <div className="mt-12 max-w-3xl">
          <Timeline items={roadmap} />
        </div>
      </section>

      {/* Related topics strip */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Keep going"
          title="Jump into a topic"
          className="reveal"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {topics.map((t) => {
            const Icon = t.icon;
            return (
              <Link
                key={t.href}
                href={t.href}
                className="reveal group flex flex-col gap-2 rounded-xl border border-border/70 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="mt-1 text-sm font-semibold text-foreground">
                  {t.title}
                </span>
                <span className="text-xs text-muted-foreground">
                  {t.summary}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
