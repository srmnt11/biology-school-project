import { BookOpen, ExternalLink } from 'lucide-react';  // Removed Quote import
import { SectionTitle } from '@/components/site/section-title';
import { ReferenceCard } from '@/components/site/reference-card';
import { Breadcrumbs } from '@/components/site/breadcrumbs';
import { InformationBox } from '@/components/site/information-box';

const references = [
  {
    href: 'https://www.cancer.gov',
    title: 'Cell Membrane & Cancer Basics',
    source: 'National Cancer Institute',
    year: 'n.d.',
    type: 'Government',
  },
  {
    href: 'https://www.niddk.nih.gov',
    title: 'Diabetes Overview',
    source: 'NIDDK',
    year: 'n.d.',
    type: 'Government',
  },
  {
    href: 'https://medlineplus.gov',
    title: 'Mitochondrial Diseases',
    source: 'MedlinePlus',
    year: 'n.d.',
    type: 'Government',
  },
  {
    href: 'https://medlineplus.gov/genetics/',
    title: 'Lysosomal Storage Disorders',
    source: 'MedlinePlus Genetics',
    year: 'n.d.',
    type: 'Government',
  },
  {
    href: 'https://training.seer.cancer.gov',
    title: 'Cells, Tissues, and Membranes',
    source: 'NLM / SEER Training',
    year: 'n.d.',
    type: 'Government',
  },
  {
    href: 'https://www.cff.org',
    title: 'What Is Cystic Fibrosis?',
    source: 'Cystic Fibrosis Foundation',
    year: 'n.d.',
    type: 'Nonprofit',
  },
  {
    href: 'https://www.cdc.gov',
    title: 'Sickle Cell Disease',
    source: 'CDC',
    year: 'n.d.',
    type: 'Government',
  },
  {
    href: 'https://www.nhlbi.nih.gov',
    title: 'Heart Attack & Anemia',
    source: 'NHLBI',
    year: 'n.d.',
    type: 'Government',
  },
  {
    href: 'https://www.ninds.nih.gov',
    title: 'Stroke Information',
    source: 'NINDS',
    year: 'n.d.',
    type: 'Government',
  },
  {
    href: 'https://www.niams.nih.gov',
    title: 'Osteoporosis',
    source: 'NIAMS',
    year: 'n.d.',
    type: 'Government',
  },
  {
    href: 'https://pubmed.ncbi.nlm.nih.gov/30390414',
    title: 'Single Cells to Tissue Self-Organization',
    source: 'PubMed',
    year: '2018',
    type: 'Journal',
  },
  {
    href: 'https://www.nature.com/articles/s44324-025-00063-4',
    title: 'ECM Formation & Degradation in Fibrosis',
    source: 'Nature Reviews',
    year: '2025',
    type: 'Journal',
  },
  {
    href: 'https://www.nature.com/articles/s41580-024-00716-0',
    title: 'Fibroblast Activation',
    source: 'Nature Reviews Molecular Cell Biology',
    year: '2024',
    type: 'Journal',
  },
  {
    href: 'https://insight.jci.org/articles/view/202529',
    title: 'Fibroblasts in Wound Healing',
    source: 'JCI Insight',
    year: 'n.d.',
    type: 'Journal',
  },
  {
    href: 'https://www.britannica.com',
    title: 'Animal Cell / Endoplasmic Reticulum / Cardiac Muscle / Epithelium',
    source: 'Encyclopaedia Britannica',
    year: 'n.d.',
    type: 'Encyclopedia',
  },
  {
    href: 'https://byjus.com',
    title: 'Plant Cell, Golgi Apparatus, Cell Wall & Membrane, Vascular Tissue, Nervous Tissue, Cell Nucleus',
    source: "BYJU'S",
    year: 'n.d.',
    type: 'Educational',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Stoma',
    title: 'Stoma / Guard Cell',
    source: 'Wikipedia',
    year: 'n.d.',
    type: 'Wiki',
  },
  {
    href: 'https://courses.lumenlearning.com/suny-biology2xmaster/chapter/plant-tissues/',
    title: 'Plant Tissues',
    source: 'Lumen Learning',
    year: 'n.d.',
    type: 'Educational',
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
            link to their original sources for further exploration.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Sources"
          title="Citations"
          description="Government agencies, journals, and educational resources referenced across the site."
          className="reveal"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {references.map((r, i) => (
            <ReferenceCard
              key={`${r.source}-${i}`}
              href={r.href}
              title={r.title}
              source={r.source}
              year={r.year}
              type={r.type}
            />
          ))}
        </div>
      </section>
    </>
  );
}