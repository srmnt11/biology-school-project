import { Info, Lightbulb, Microscope, ArrowRight } from 'lucide-react';
import { ContentCard } from '@/components/site/content-card';
import { InformationBox } from '@/components/site/information-box';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Cell3DViewer } from '@/components/site/cell-3d-viewer';
import type { TopicMeta } from '@/lib/site';

const placeholderImg = (q: string) =>
  `https://images.pexels.com/photos/${q}?auto=compress&cs=tinysrgb&w=900`;

const images = [
  '3825529/pexels-photo-3825529.jpeg',
  '3784372/pexels-photo-3784372.jpeg',
  '2280549/pexels-photo-2280549.jpeg',
  '2280571/pexels-photo-2280571.jpeg',
  '3825571/pexels-photo-3825571.jpeg',
];

export function TopicContent({ topic }: { topic: TopicMeta }) {
  return (
    <>
      {topic.sections.map((section, i) => {
        if (section.id === '3d-model') {
          return (
            <ContentCard key={section.id} id={section.id} eyebrow={`Section ${i + 1}`} title={section.label}>
              <p>Rotate, zoom, and click on the organelles below to explore the structure interactively.</p>
              <Cell3DViewer lockType={topic.slug === 'animal-cell' ? 'animal' : 'plant'} />
            </ContentCard>
          );
        }
        return (
          <ContentCard
            key={section.id}
            id={section.id}
            eyebrow={`Section ${i + 1}`}
            title={section.label}
            image={placeholderImg(images[i % images.length])}
            imageAlt={`${section.label} — placeholder illustration`}
          >
            <p>
              This is a placeholder paragraph for the{' '}
              <strong>{section.label}</strong> section of{' '}
              <strong>{topic.title}</strong>. Replace it with real biology
              content describing the key ideas, structures, and functions
              relevant to this section.
            </p>
            <p>
              Keep the explanation concise and approachable. Use a second
              paragraph to add context, an example, or a connection to another
              topic. The layout, spacing, and components are already in place.
            </p>

            {i === 0 && (
              <InformationBox
                variant="info"
                icon={<Info className="h-5 w-5" />}
                title="Overview"
              >
                This callout box is a reusable component. Use it to highlight the
                single most important takeaway of the section.
              </InformationBox>
            )}
            {i === 1 && (
              <InformationBox
                variant="tip"
                icon={<Lightbulb className="h-5 w-5" />}
                title="Tip"
              >
                Drop study tips or mnemonics here to help learners remember the
                key structures.
              </InformationBox>
            )}
          </ContentCard>
        );
      })}

      {/* Accordion placeholder */}
      <ContentCard id="key-terms" eyebrow="Review" title="Key terms">
        <p>A collapsible list of definitions. Click any item to expand it.</p>
        <Accordion type="single" collapsible className="mt-2">
          {['Term one', 'Term two', 'Term three', 'Term four'].map((t, i) => (
            <AccordionItem key={t} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base text-foreground">
                {t}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                SEXXXXX {t}. Replace with a concise,
                accurate explanation of the term.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ContentCard>

      {/* Related topics */}
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
            {['Cell Types', 'Animal Cell', 'Plant Cell', 'Animal Tissues'].map(
              (label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="group flex items-center justify-between rounded-xl border border-border/70 bg-card px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:shadow-sm"
                  >
                    {label}
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
    </>
  );
}