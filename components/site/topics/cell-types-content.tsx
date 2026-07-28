import { Info, Lightbulb, Microscope, SplitSquareHorizontal } from 'lucide-react';
import { ContentCard } from '@/components/site/content-card';
import { InformationBox } from '@/components/site/information-box';
import { KeyTermsAccordion } from './key-terms-accordion';
import { RelatedTopics } from './related-topics';

// Define images for this topic
const images = {
  overview: '/images/cell-types/overview.jpg',
  prokaryotic: '/images/cell-types/prokaryotic.jpg',
  eukaryotic: '/images/cell-types/eukaryotic.jpg',
  comparison: '/images/cell-types/comparison.png',
  clinical: '/images/cell-types/clinical.jpg',
};

export function CellTypesContent() {
  return (
    <>
      <ContentCard
        id="overview"
        eyebrow="Section 1"
        title="Overview of Cell Types"
        image={images.overview}
        imageAlt="Comparison of prokaryotic and eukaryotic cells"
      >
        <p>Cells are the fundamental units of life, but not all cells are the same. The two main categories of cells are prokaryotic and eukaryotic, with eukaryotic cells further divided into animal and plant cells.</p>
        <p>Understanding the differences between these cell types is essential for comprehending how organisms function, evolve, and interact with their environments. Every organelle in a cell acts like a department in a city, each performing specialized functions that keep the cellular "city" running smoothly.</p>
        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="The Cell Theory"
        >
          All living organisms are composed of cells. Cells are the basic unit of structure and function in organisms. All cells arise from pre-existing cells through cell division.
        </InformationBox>
      </ContentCard>

      <ContentCard
        id="prokaryotic"
        eyebrow="Section 2"
        title="Prokaryotic Cells"
        image={images.prokaryotic}
        imageAlt="Bacteria cell structure"
      >
        <p>Prokaryotic cells are simple, primitive cells that lack a nucleus and membrane-bound organelles. They are typically smaller than eukaryotic cells and are represented by bacteria and archaea.</p>
        <p>Key characteristics of prokaryotic cells:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li><strong>No nucleus:</strong> Genetic material (DNA) is located in the nucleoid region</li>
          <li><strong>No membrane-bound organelles:</strong> No mitochondria, chloroplasts, or endoplasmic reticulum</li>
          <li><strong>Small size:</strong> Typically 0.5-5.0 micrometers in diameter</li>
          <li><strong>Ribosomes:</strong> Smaller (70S) ribosomes compared to eukaryotes</li>
          <li><strong>Cell wall:</strong> Contains peptidoglycan in bacteria</li>
          <li><strong>Binary fission:</strong> Reproduce through simple division</li>
        </ul>
        <InformationBox
          variant="tip"
          icon={<Lightbulb className="h-5 w-5" />}
          title="Memory Tip"
        >
          Remember: <strong>"Pro"</strong>karyotic = <strong>"before"</strong> the nucleus (pro = before in Greek). These cells evolved first and are simpler than eukaryotic cells.
        </InformationBox>
      </ContentCard>

      <ContentCard
        id="eukaryotic"
        eyebrow="Section 3"
        title="Eukaryotic Cells"
        image={images.eukaryotic}
        imageAlt="Eukaryotic cell structure"
      >
        <p>Eukaryotic cells are complex, membrane-bound cells that contain a nucleus and various organelles. They are found in organisms such as plants, animals, fungi, and protists.</p>
        <p>Common features of eukaryotic cells:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Nucleus:</strong> Contains DNA organized into chromosomes</li>
          <li><strong>Membrane-bound organelles:</strong> Mitochondria, endoplasmic reticulum, Golgi apparatus, etc.</li>
          <li><strong>Larger size:</strong> Typically 10-100 micrometers in diameter</li>
          <li><strong>Ribosomes:</strong> Larger (80S) ribosomes</li>
          <li><strong>Cytoskeleton:</strong> Internal framework for support and transport</li>
          <li><strong>Complex reproduction:</strong> Mitosis and meiosis</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
            <h4 className="font-semibold text-sm flex items-center gap-2">
              <Microscope className="h-4 w-4 text-primary" />
              Animal Cells
            </h4>
            <p className="text-sm text-muted-foreground mt-1">No cell wall, no chloroplasts, small vacuoles, centrioles present</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-sm flex items-center gap-2">
              <SplitSquareHorizontal className="h-4 w-4 text-green-600" />
              Plant Cells
            </h4>
            <p className="text-sm text-muted-foreground mt-1">Cell wall, chloroplasts, large central vacuole, no centrioles</p>
          </div>
        </div>
      </ContentCard>

      <ContentCard
        id="comparison"
        eyebrow="Section 4"
        title="Comparison Table"
        image={images.comparison}
        imageAlt="Cell type comparison chart"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-secondary/40">
                <th className="border border-border p-3 text-left font-semibold">Feature</th>
                <th className="border border-border p-3 text-left font-semibold">Prokaryotic</th>
                <th className="border border-border p-3 text-left font-semibold">Eukaryotic (Animal)</th>
                <th className="border border-border p-3 text-left font-semibold">Eukaryotic (Plant)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-3 font-medium">Nucleus</td>
                <td className="border border-border p-3">No</td>
                <td className="border border-border p-3">Yes</td>
                <td className="border border-border p-3">Yes</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Membrane-bound organelles</td>
                <td className="border border-border p-3">No</td>
                <td className="border border-border p-3">Yes</td>
                <td className="border border-border p-3">Yes</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Cell wall</td>
                <td className="border border-border p-3">Yes (peptidoglycan)</td>
                <td className="border border-border p-3">No</td>
                <td className="border border-border p-3">Yes (cellulose)</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Chloroplasts</td>
                <td className="border border-border p-3">No</td>
                <td className="border border-border p-3">No</td>
                <td className="border border-border p-3">Yes</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Ribosomes</td>
                <td className="border border-border p-3">70S</td>
                <td className="border border-border p-3">80S</td>
                <td className="border border-border p-3">80S</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Size</td>
                <td className="border border-border p-3">0.5-5 µm</td>
                <td className="border border-border p-3">10-100 µm</td>
                <td className="border border-border p-3">10-100 µm</td>
              </tr>
              <tr>
                <td className="border border-border p-3 font-medium">Examples</td>
                <td className="border border-border p-3">Bacteria, Archaea</td>
                <td className="border border-border p-3">Animals, Humans</td>
                <td className="border border-border p-3">Plants, Trees</td>
              </tr>
            </tbody>
          </table>
        </div>
        <InformationBox
          variant="warning"
          title="Evolutionary Significance"
        >
          Prokaryotic cells evolved first (~3.5 billion years ago), while eukaryotic cells evolved about 1.5 billion years ago through endosymbiosis. This ancient event—where one cell engulfed another—gave rise to mitochondria and chloroplasts.
        </InformationBox>
      </ContentCard>

      <ContentCard
        id="clinical"
        eyebrow="Section 5"
        title="Clinical Applications: Cell Structure & Disease"
        image={images.clinical}
        imageAlt="Clinical applications of cell biology"
      >
        <p>Understanding cellular structures is essential for diagnosing and treating diseases. Here are real clinical scenarios that demonstrate the importance of cellular components in human health:</p>
        
        <div className="space-y-4 mt-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h4 className="font-semibold">Damaged Cell Membranes and Dehydration</h4>
            <p className="text-sm text-muted-foreground mt-1">
              <strong>Scenario:</strong> A person becomes severely dehydrated after prolonged vomiting.
            </p>
            <p className="text-sm mt-1">
              <strong>Cellular structure:</strong> Cell membrane — Regulates water movement by osmosis, helping cells maintain their shape and function.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              <strong>Source:</strong> National Cancer Institute — NCI Dictionary of Cancer Terms – Cell Membrane
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50/50 rounded-r-lg">
            <h4 className="font-semibold">Insulin and Glucose Uptake in Diabetes</h4>
            <p className="text-sm text-muted-foreground mt-1">
              <strong>Scenario:</strong> A person with diabetes has high blood sugar because glucose cannot enter cells efficiently.
            </p>
            <p className="text-sm mt-1">
              <strong>Cellular structure:</strong> Cell membrane transport proteins (glucose transporters) — Allow glucose to enter cells for energy.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              <strong>Source:</strong> National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/50 rounded-r-lg">
            <h4 className="font-semibold">Mitochondria and Muscle Fatigue</h4>
            <p className="text-sm text-muted-foreground mt-1">
              <strong>Scenario:</strong> A person with a mitochondrial disease experiences muscle weakness and fatigue.
            </p>
            <p className="text-sm mt-1">
              <strong>Cellular structure:</strong> Mitochondria — Produce ATP, the cell's primary energy source.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              <strong>Source:</strong> MedlinePlus — Mitochondrial Diseases
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/50 rounded-r-lg">
            <h4 className="font-semibold">Lysosomes and Genetic Disorders</h4>
            <p className="text-sm text-muted-foreground mt-1">
              <strong>Scenario:</strong> A child has a lysosomal storage disease.
            </p>
            <p className="text-sm mt-1">
              <strong>Cellular structure:</strong> Lysosomes — Break down waste materials; defective lysosomes lead to harmful buildup inside cells.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              <strong>Source:</strong> MedlinePlus Genetics — Lysosomal Storage Disorders
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50 rounded-r-lg">
            <h4 className="font-semibold">White Blood Cells Fighting Infection</h4>
            <p className="text-sm text-muted-foreground mt-1">
              <strong>Scenario:</strong> White blood cells destroy bacteria during an infection.
            </p>
            <p className="text-sm mt-1">
              <strong>Cellular structure:</strong> Lysosomes — Contain enzymes that digest pathogens engulfed by immune cells.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              <strong>Source:</strong> National Library of Medicine
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50/50 rounded-r-lg">
            <h4 className="font-semibold">Cancer and the Nucleus</h4>
            <p className="text-sm text-muted-foreground mt-1">
              <strong>Scenario:</strong> Cancer develops because mutations in DNA cause uncontrolled cell division.
            </p>
            <p className="text-sm mt-1">
              <strong>Cellular structure:</strong> Nucleus — Stores DNA and regulates cell growth.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              <strong>Source:</strong> National Cancer Institute — Cancer Basics
            </p>
          </div>

          <div className="border-l-4 border-teal-500 pl-4 py-2 bg-teal-50/50 rounded-r-lg">
            <h4 className="font-semibold">Protein Production in Cystic Fibrosis</h4>
            <p className="text-sm text-muted-foreground mt-1">
              <strong>Scenario:</strong> A child has cystic fibrosis due to a defective CFTR protein.
            </p>
            <p className="text-sm mt-1">
              <strong>Cellular structures:</strong> Rough Endoplasmic Reticulum and Golgi Apparatus — Produce and process proteins before they reach the cell membrane.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              <strong>Source:</strong> Cystic Fibrosis Foundation
            </p>
          </div>

          <div className="border-l-4 border-pink-500 pl-4 py-2 bg-pink-50/50 rounded-r-lg">
            <h4 className="font-semibold">Red Blood Cells and Oxygen Transport</h4>
            <p className="text-sm text-muted-foreground mt-1">
              <strong>Scenario:</strong> A person with sickle cell disease has abnormally shaped red blood cells.
            </p>
            <p className="text-sm mt-1">
              <strong>Cellular structure:</strong> Red blood cell internal structure (hemoglobin) — Abnormal hemoglobin changes cell shape, reducing oxygen delivery.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              <strong>Source:</strong> Centers for Disease Control and Prevention — Sickle Cell Disease
            </p>
          </div>
        </div>

        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="The Clinical Importance of Cell Biology"
        >
          Understanding cellular structures is crucial for diagnosing and treating diseases. From diabetes to cancer, many conditions can be traced back to malfunctioning organelles or cellular structures. This knowledge guides treatment development and helps clinicians understand disease mechanisms.
        </InformationBox>
      </ContentCard>

      <KeyTermsAccordion
        terms={[
          { 
            term: 'Prokaryotic Cell', 
            definition: 'A simple cell that lacks a nucleus and membrane-bound organelles. Found in bacteria and archaea, typically 0.5-5 micrometers in size.' 
          },
          { 
            term: 'Eukaryotic Cell', 
            definition: 'A complex cell that contains a nucleus and membrane-bound organelles. Found in animals, plants, fungi, and protists, typically 10-100 micrometers in size.' 
          },
          { 
            term: 'Nucleoid', 
            definition: 'A region within prokaryotic cells where the circular DNA is located, not enclosed by a membrane.' 
          },
          { 
            term: 'Organelle', 
            definition: 'A specialized structure within a cell that performs a specific function, such as mitochondria for energy production or chloroplasts for photosynthesis.' 
          },
          { 
            term: 'Differentiation', 
            definition: 'The process by which cells become specialized in structure and function during development.' 
          },
          { 
            term: 'Stem Cell', 
            definition: 'An undifferentiated cell that has the ability to divide and differentiate into specialized cell types, crucial for development and tissue repair.' 
          },
          { 
            term: 'Cell Membrane', 
            definition: 'A flexible, semi-permeable lipid bilayer that regulates what enters and exits the cell, maintaining cellular homeostasis.' 
          },
          { 
            term: 'Mitochondria', 
            definition: 'Organelles that produce ATP through cellular respiration, serving as the cell\'s primary energy source.' 
          },
          { 
            term: 'Lysosomes', 
            definition: 'Membrane-bound organelles containing digestive enzymes that break down waste materials, cellular debris, and foreign invaders.' 
          },
          { 
            term: 'Glucose Transporters', 
            definition: 'Cell membrane proteins that facilitate glucose uptake into cells, crucial for cellular energy production and diabetes management.' 
          },
        ]}
      />

      <RelatedTopics currentSlug="cell-types" />
    </>
  );
}