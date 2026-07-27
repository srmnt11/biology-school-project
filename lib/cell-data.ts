import type { LucideIcon } from 'lucide-react';
import { Shield, Leaf, Droplet, Dna, LayoutGrid, Zap, Recycle } from 'lucide-react';

export type OrganelleName =
  | 'Cell Wall'
  | 'Chloroplasts'
  | 'Central Vacuole'
  | 'Nucleus'
  | 'Plasma Membrane'
  | 'Mitochondria'
  | 'Lysosomes';

export type OrganelleInfo = {
  name: OrganelleName;
  tag: string;
  icon: LucideIcon;
  size: string;
  loc: string;
  vis: string;
  notes: string;
  fact: string;
  color: string; // hex string, also passed straight into THREE.Color
};

export const organelleData: Record<OrganelleName, OrganelleInfo> = {
  'Cell Wall': {
    name: 'Cell Wall',
    tag: 'Structural Support & Defense',
    icon: Shield,
    size: '0.1 - 10 µm thick',
    loc: 'Outer Plant Boundary',
    vis: 'Yes, prominent structure',
    notes:
      'The Cell Wall provides tensile strength and protection against mechanical and osmotic stress. It allows cells to develop turgor pressure.',
    fact: 'Primary cell walls are mainly composed of cellulose fibers embedded in a pectin-rich matrix.',
    color: '#2b9348',
  },
  Chloroplasts: {
    name: 'Chloroplasts',
    tag: 'Photosynthesis Engine',
    icon: Leaf,
    size: '5 - 10 µm',
    loc: 'Plant Cytoplasm',
    vis: 'Yes, bright green',
    notes:
      'Chloroplasts capture light energy via chlorophyll to convert carbon dioxide and water into glucose and oxygen through photosynthesis.',
    fact: 'Chloroplasts have their own genome and are believed to have originated from endosymbiotic cyanobacteria!',
    color: '#55a630',
  },
  'Central Vacuole': {
    name: 'Central Vacuole',
    tag: 'Turgor & Storage Reservoir',
    icon: Droplet,
    size: 'Up to 90% cell volume',
    loc: 'Central Cell Interior',
    vis: 'Yes, under phase contrast',
    notes:
      'Maintains cell turgor pressure, stores nutrients and water, and isolates waste materials from the cytoplasm.',
    fact: 'When a plant wilts, it is mainly because its central vacuoles have lost water and turgor pressure!',
    color: '#48cae4',
  },
  Nucleus: {
    name: 'Nucleus',
    tag: 'Genetic Control Center',
    icon: Dna,
    size: 'approx. 6 µm diameter',
    loc: 'Central / Eccentric',
    vis: 'Yes, easily stained',
    notes:
      "Houses the cell's genetic material (DNA) and directs essential activities like cellular growth, metabolism, and protein synthesis.",
    fact: 'The nuclear envelope contains thousands of nuclear pores regulating molecular traffic in and out.',
    color: '#705294',
  },
  'Plasma Membrane': {
    name: 'Plasma Membrane',
    tag: 'Selective Permeability Barrier',
    icon: LayoutGrid,
    size: 'approx. 7.5 nm thick',
    loc: 'Cell Periphery',
    vis: 'Requires Electron Microscope',
    notes:
      'A phospholipid bilayer with embedded proteins that regulates the entry and exit of molecules, ensuring homeostasis.',
    fact: "It functions like a 'fluid mosaic', where lipid molecules move laterally within the membrane layer.",
    color: '#e07a5f',
  },
  Mitochondria: {
    name: 'Mitochondria',
    tag: 'Powerhouse of the Cell',
    icon: Zap,
    size: '0.5 - 1.0 µm',
    loc: 'Cytoplasm',
    vis: 'Requires special stain',
    notes:
      "Generates most of the chemical energy needed to power the cell's biochemical reactions in the form of ATP.",
    fact: 'Mitochondria possess their own circular DNA independent of the cell nucleus!',
    color: '#f4a261',
  },
  Lysosomes: {
    name: 'Lysosomes',
    tag: 'Cellular Digestive System',
    icon: Recycle,
    size: '0.1 - 1.2 µm',
    loc: 'Animal Cytoplasm',
    vis: 'Stained Enzyme View',
    notes:
      'Contains hydrolytic enzymes that break down waste materials, cellular debris, and foreign invaders.',
    fact: 'Lysosomal enzymes work best in acidic environments (pH ~ 4.5-5.0) inside the lysosomal membrane.',
    color: '#d62828',
  },
};

export type CellType = 'plant' | 'animal';

export const cellMeta: Record<
  CellType,
  { title: string; sub: string; organelles: OrganelleName[] }
> = {
  plant: {
    title: 'Plant Cell',
    sub: 'Eukaryotic Cell',
    organelles: ['Cell Wall', 'Chloroplasts', 'Central Vacuole', 'Nucleus'],
  },
  animal: {
    title: 'Animal Cell',
    sub: 'Eukaryotic Cell',
    organelles: ['Plasma Membrane', 'Nucleus', 'Mitochondria', 'Lysosomes'],
  },
};