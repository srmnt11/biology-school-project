import { Info } from 'lucide-react';
import { ContentCard } from '@/components/site/content-card';
import { InformationBox } from '@/components/site/information-box';
import { KeyTermsAccordion } from './key-terms-accordion';
import { RelatedTopics } from './related-topics';

// Define images for this topic
const images = {
  overview: '/images/animal-cell/overview.png',
  organelles: '/images/animal-cell/organelles.png',
};

export function AnimalCellContent() {
  return (
    <>
      <ContentCard
        id="overview"
        eyebrow="Section 1"
        title="Overview of Animal Cells"
        image={images.overview}
        imageAlt="Overview of animal cell structure"
      >
        <p>An animal cell is the basic functional unit of all animals, acting like a bustling city where distinct specialized structures work together to sustain life. Each organelle performs specific functions that keep the cellular "city" running smoothly.</p>
        <p>Think of it like a fully self-sustaining house or city containing dedicated rooms for power, waste management, and security. When these organelles malfunction, it can lead to various diseases and disorders.</p>
        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="Overview"
        >
          Every organelle in an animal cell acts like a department in a city. The nucleus is city hall, mitochondria are power plants, lysosomes are waste management, and the cell membrane is the city border controlling what enters and exits.
        </InformationBox>
      </ContentCard>

      <ContentCard
        id="organelles"
        eyebrow="Section 2"
        title="Cell Organelles & Their Functions"
        image={images.organelles}
        imageAlt="Animal cell organelles diagram"
      >
        <p>Animal cells contain various organelles, each with specialized functions essential for cell survival and activity:</p>
        
        <div className="space-y-4 mt-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h4 className="font-semibold">Nucleus</h4>
            <p className="text-sm">The nucleus acts as the control center of the cell by storing genetic material (DNA) and directing cellular activities.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> A city hall or mayor's office storing master blueprints and issuing laws for city operations.</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50 rounded-r-lg">
            <h4 className="font-semibold">Ribosomes</h4>
            <p className="text-sm">Ribosomes are non-membrane-bound structures that assemble proteins by reading genetic instructions from the nucleus.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> Construction workers on a job site building structures according to architectural blueprints.</p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/50 rounded-r-lg">
            <h4 className="font-semibold">Rough Endoplasmic Reticulum (Rough ER)</h4>
            <p className="text-sm">The rough ER is studded with ribosomes and specializes in processing and folding newly made proteins.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> A manufacturing assembly line where products are put together, inspected, and prepared for shipping.</p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50/50 rounded-r-lg">
            <h4 className="font-semibold">Smooth Endoplasmic Reticulum (Smooth ER)</h4>
            <p className="text-sm">The smooth ER lacks ribosomes and synthesizes lipids, metabolizes carbohydrates, and detoxifies chemicals.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> An oil refinery or chemical processing plant that produces essential oils and neutralizes toxic waste.</p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50/50 rounded-r-lg">
            <h4 className="font-semibold">Golgi Body (Golgi Apparatus)</h4>
            <p className="text-sm">The Golgi body modifies, sorts, and packages proteins and lipids into vesicles for transport throughout or outside of the cell.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> A post office or logistics center (like FedEx) sorting, packaging, and labeling boxes for delivery.</p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/50 rounded-r-lg">
            <h4 className="font-semibold">Mitochondria</h4>
            <p className="text-sm">Mitochondria generate cellular chemical energy in the form of ATP through cellular respiration. They are often called the "powerhouse of the cell."</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> A municipal power plant converting raw fuel into usable electricity for a city.</p>
          </div>

          <div className="border-l-4 border-teal-500 pl-4 py-2 bg-teal-50/50 rounded-r-lg">
            <h4 className="font-semibold">Cytoplasm & Cytosol</h4>
            <p className="text-sm">The cytoplasm is the entire gel-like region within the cell membrane (excluding the nucleus) that holds all organelles in place. The cytosol is the fluid matrix where vital metabolic reactions take place.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> The geographic terrain and atmosphere within city borders (cytoplasm), and the water filling an Olympic swimming pool allowing swimmers to move freely (cytosol).</p>
          </div>

          <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/50 rounded-r-lg">
            <h4 className="font-semibold">Cytoskeleton</h4>
            <p className="text-sm">The cytoskeleton is a network of protein fibers that gives the cell structural support, shape, and internal organization.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> The internal steel framework and girders holding up a skyscraper against wind and gravity.</p>
          </div>

          <div className="border-l-4 border-pink-500 pl-4 py-2 bg-pink-50/50 rounded-r-lg">
            <h4 className="font-semibold">Vesicles</h4>
            <p className="text-sm">Vesicles are small, membrane-bound sacs that store and transport materials across the cell.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> Delivery vans transporting groceries and packages from warehouses directly to homes.</p>
          </div>

          <div className="border-l-4 border-rose-500 pl-4 py-2 bg-rose-50/50 rounded-r-lg">
            <h4 className="font-semibold">Lysosomes</h4>
            <p className="text-sm">Lysosomes contain digestive enzymes that break down waste materials, cellular debris, and foreign invaders.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> Garbage trucks and recycling facilities breaking down municipal waste and broken items.</p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-4 py-2 bg-cyan-50/50 rounded-r-lg">
            <h4 className="font-semibold">Centrosome</h4>
            <p className="text-sm">The centrosome contains a pair of centrioles that organize microtubules to separate chromosomes during cell division.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> Event organizers or referees guiding two opposing sports teams to opposite sides of a playing field.</p>
          </div>

          <div className="border-l-4 border-gray-500 pl-4 py-2 bg-gray-50/50 rounded-r-lg">
            <h4 className="font-semibold">Cell Membrane</h4>
            <p className="text-sm">The cell membrane is a flexible, semi-permeable lipid bilayer that regulates what enters and exits the cell, maintaining cellular homeostasis.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> City borders with checkpoints controlling what goods and people enter or leave the city.</p>
          </div>
        </div>

        <InformationBox
          variant="warning"
          title="Cancer and the Nucleus"
        >
          Cancer develops when mutations in DNA cause uncontrolled cell division. The nucleus stores DNA and regulates cell growth. When DNA damage occurs (such as from UV radiation or carcinogens), and the damage is not repaired, cells can divide uncontrollably, forming tumors.
          <br /><br />
          <strong>Scenario:</strong> A person develops skin cancer after years of excessive sun exposure. UV radiation damages the DNA inside the cell nucleus. When the damage is not repaired, cells divide uncontrollably, forming a tumor.
          <br /><br />
          <strong>Source:</strong> National Cancer Institute — Cancer Basics
        </InformationBox>

        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="Clinical Connection: Cystic Fibrosis"
        >
          A child with cystic fibrosis has frequent lung infections because a defective protein in the cell membrane prevents normal movement of chloride ions, producing thick mucus. The cell membrane controls what enters and leaves the cell. Defects in membrane proteins affect organ function and increase disease risk.
          <br /><br />
          <strong>Scenario:</strong> A child has cystic fibrosis due to a defective CFTR protein.
          <br />
          <strong>Cellular structures involved:</strong> Rough Endoplasmic Reticulum and Golgi Apparatus — These organelles produce and process proteins before they reach the cell membrane.
          <br /><br />
          <strong>Source:</strong> Cystic Fibrosis Foundation
        </InformationBox>
      </ContentCard>

      <KeyTermsAccordion
        terms={[
          { 
            term: 'Nucleus', 
            definition: 'The control center of the cell containing DNA that regulates cell growth, division, and gene expression. Acts like city hall storing master blueprints.' 
          },
          { 
            term: 'Mitochondria', 
            definition: 'Organelles that produce ATP through cellular respiration, serving as the cell\'s primary energy source. Known as the "powerhouse of the cell."' 
          },
          { 
            term: 'Ribosomes', 
            definition: 'Non-membrane-bound structures that assemble proteins by reading genetic instructions from the nucleus. Found free in the cytoplasm or attached to the rough ER.' 
          },
          { 
            term: 'Endoplasmic Reticulum (ER)', 
            definition: 'A network of membranes involved in protein synthesis (rough ER with ribosomes) and lipid synthesis (smooth ER without ribosomes).' 
          },
          { 
            term: 'Golgi Apparatus', 
            definition: 'An organelle that modifies, sorts, and packages proteins and lipids into vesicles for transport throughout or outside of the cell. Acts like a post office or logistics center.' 
          },
          { 
            term: 'Lysosomes', 
            definition: 'Membrane-bound organelles containing digestive enzymes that break down waste materials, cellular debris, and foreign invaders like bacteria.' 
          },
          { 
            term: 'Cell Membrane', 
            definition: 'A flexible, semi-permeable lipid bilayer that regulates what enters and exits the cell, maintaining cellular homeostasis and protecting the cell.' 
          },
          { 
            term: 'Cytoskeleton', 
            definition: 'A network of protein fibers that gives the cell structural support, shape, and internal organization. Acts like the steel framework of a building.' 
          },
          { 
            term: 'Vesicles', 
            definition: 'Small, membrane-bound sacs that store and transport materials across the cell. Act like delivery vehicles moving cargo to different destinations.' 
          },
          { 
            term: 'Centrosome', 
            definition: 'An organelle containing a pair of centrioles that organize microtubules to separate chromosomes during cell division.' 
          },
        ]}
      />

      <RelatedTopics currentSlug="animal-cell" />
    </>
  );
}