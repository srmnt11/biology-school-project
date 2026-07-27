import {
  Microscope,
  Dna as CellIcon,
  PawPrint,
  Sprout,
  Layers,
  BookOpen,
} from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
  icon: typeof Microscope;
  description: string;
};

export const navItems: NavItem[] = [
  {
    label: 'Cell Types',
    href: '/topics/cell-types',
    icon: CellIcon,
    description: 'Compare the building blocks of life',
  },
  {
    label: 'Animal Cell',
    href: '/topics/animal-cell',
    icon: PawPrint,
    description: 'Structure and organelles of animal cells',
  },
  {
    label: 'Plant Cell',
    href: '/topics/plant-cell',
    icon: Sprout,
    description: 'Unique features of plant cells',
  },
  {
    label: 'Animal Tissues',
    href: '/topics/animal-tissues',
    icon: Layers,
    description: 'Tissue types across the animal kingdom',
  },
  {
    label: 'Plant Tissues',
    href: '/topics/plant-tissues',
    icon: Sprout,
    description: 'Dermal, vascular, and ground tissues',
  },
  {
    label: 'References',
    href: '/references',
    icon: BookOpen,
    description: 'Sources and further reading',
  },
];

export type TopicMeta = {
  slug: string;
  title: string;
  subtitle: string;
  href: string;
  icon: typeof Microscope;
  color: string;
  accent: string;
  summary: string;
  sections: { id: string; label: string }[];
};

export const topics: TopicMeta[] = [
  {
    slug: 'cell-types',
    title: 'Cell Types',
    subtitle: 'Compare the building blocks of life across kingdoms.',
    href: '/topics/cell-types',
    icon: CellIcon,
    color: 'text-emerald-600',
    accent: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    summary:
      'An overview of how cells are classified, what they share, and where they diverge.',
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'prokaryotic', label: 'Prokaryotic Cells' },
      { id: 'eukaryotic', label: 'Eukaryotic Cells' },
      { id: 'comparison', label: 'Comparison' },
      { id: 'key-terms', label: 'Key Terms' },
    ],
  },
  {
    slug: 'animal-cell',
    title: 'Animal Cell',
    subtitle: 'Structure, organelles, and function of animal cells.',
    href: '/topics/animal-cell',
    icon: PawPrint,
    color: 'text-sky-600',
    accent: 'bg-sky-50 text-sky-700 ring-sky-200',
    summary:
      'A guided tour of the major organelles found in a typical animal cell.',
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: '3d-model', label: '3D Model' }, 
      { id: 'organelles', label: 'Organelles' },
      { id: 'structure', label: 'Structure' },
      { id: 'function', label: 'Function' },
      { id: 'key-terms', label: 'Key Terms' },
    ],
  },
  {
    slug: 'plant-cell',
    title: 'Plant Cell',
    subtitle: 'Unique features that set plant cells apart.',
    href: '/topics/plant-cell',
    icon: Sprout,
    color: 'text-green-600',
    accent: 'bg-green-50 text-green-700 ring-green-200',
    summary:
      'Explore the cell wall, chloroplasts, and large central vacuole.',
    sections: [
      { id: 'overview', label: 'Overview' },
       { id: '3d-model', label: '3D Model' },  
      { id: 'organelles', label: 'Organelles' },
      { id: 'cell-wall', label: 'Cell Wall' },
      { id: 'chloroplasts', label: 'Chloroplasts' },
      { id: 'key-terms', label: 'Key Terms' },
    ],
  },
  {
    slug: 'animal-tissues',
    title: 'Animal Tissues',
    subtitle: 'Tissue types across the animal kingdom.',
    href: '/topics/animal-tissues',
    icon: Layers,
    color: 'text-teal-600',
    accent: 'bg-teal-50 text-teal-700 ring-teal-200',
    summary:
      'Epithelial, connective, muscular, and nervous tissues explained.',
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'epithelial', label: 'Epithelial' },
      { id: 'connective', label: 'Connective' },
      { id: 'muscular', label: 'Muscular' },
      { id: 'nervous', label: 'Nervous' },
    ],
  },
  {
    slug: 'plant-tissues',
    title: 'Plant Tissues',
    subtitle: 'Dermal, vascular, and ground tissues.',
    href: '/topics/plant-tissues',
    icon: Sprout,
    color: 'text-lime-600',
    accent: 'bg-lime-50 text-lime-700 ring-lime-200',
    summary:
      'How plants organize cells into tissues for protection, transport, and growth.',
    sections: [
      { id: 'overview', label: 'Overview' },
      { id: 'dermal', label: 'Dermal' },
      { id: 'vascular', label: 'Vascular' },
      { id: 'ground', label: 'Ground' },
      { id: 'meristematic', label: 'Meristematic' },
    ],
  },
];

export function getTopic(slug: string): TopicMeta | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getAdjacentTopics(slug: string) {
  const i = topics.findIndex((t) => t.slug === slug);
  return {
    prev: i > 0 ? topics[i - 1] : undefined,
    next: i >= 0 && i < topics.length - 1 ? topics[i + 1] : undefined,
  };
}
