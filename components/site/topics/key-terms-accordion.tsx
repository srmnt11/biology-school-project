type Term = { term: string; definition: string };

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { ContentCard } from '@/components/site/content-card';

export function KeyTermsAccordion({ terms }: { terms: Term[] }) {
  return (
    <ContentCard id="key-terms" eyebrow="Review" title="Key terms">
      <p>A collapsible list of definitions. Click any item to expand it.</p>
      <Accordion type="single" collapsible className="mt-2">
        {terms.map((t, i) => (
          <AccordionItem key={t.term} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-base text-foreground">
              {t.term}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              {t.definition}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ContentCard>
  );
}