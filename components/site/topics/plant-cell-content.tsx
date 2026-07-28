import { Info, Lightbulb } from 'lucide-react';
import { ContentCard } from '@/components/site/content-card';
import { InformationBox } from '@/components/site/information-box';
import { KeyTermsAccordion } from './key-terms-accordion';
import { RelatedTopics } from './related-topics';

// Define images for this topic
const images = {
  overview: '/images/plant-cell/overview.png',
  organelles: '/images/plant-cell/organelles.png',
  photosynthesis: '/images/plant-cell/photosynthesis.png',
  applications: '/images/plant-cell/applications.png',
};

export function PlantCellContent() {
  return (
    <>
      <ContentCard
        id="overview"
        eyebrow="Section 1"
        title="Overview of Plant Cells"
        image={images.overview}
        imageAlt="Plant cell structure under microscope"
      >
        <p>Plant cells are eukaryotic cells that form the tissues of plants. They share many organelles with animal cells but have unique structures that enable photosynthesis, provide structural support, and allow for growth throughout the plant's life.</p>
        <p>What makes plant cells distinct is their rigid cell wall, large central vacuole, and chloroplasts—the organelles responsible for converting sunlight into chemical energy through photosynthesis. Plant cells act like self-sustaining factories, with each organelle performing specialized functions to keep the plant alive and growing.</p>
        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="Key Difference"
        >
          Unlike animal cells, plant cells have a cell wall made of cellulose, which provides structural support and prevents the cell from bursting when water enters through osmosis. Plants also have chloroplasts for photosynthesis and a large central vacuole for storage and maintaining turgor pressure.
        </InformationBox>
      </ContentCard>

      <ContentCard
        id="organelles"
        eyebrow="Section 2"
        title="Plant Cell Organelles & Their Functions"
        image={images.organelles}
        imageAlt="Plant cell organelles diagram"
      >
        <p>Plant cells contain several organelles that are either unique to plants or have specialized functions. Each organelle works together to maintain the cell's health and enable plant survival:</p>
        
        <div className="space-y-4 mt-4">
          <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50 rounded-r-lg">
            <h4 className="font-semibold">Chloroplasts</h4>
            <p className="text-sm">Convert light energy into chemical energy through photosynthesis, producing glucose and releasing oxygen. They contain chlorophyll, the pigment that gives plants their green color.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> Solar panels on a house converting sunlight into usable electricity.</p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50/50 rounded-r-lg">
            <h4 className="font-semibold">Cell Wall</h4>
            <p className="text-sm">A rigid outer layer made of cellulose that provides structural support, protection, and regulates cell expansion. It allows plants to grow tall and withstand environmental pressures.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> The brick exterior of a building providing structural integrity and protection.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h4 className="font-semibold">Central Vacuole</h4>
            <p className="text-sm">A large, fluid-filled sac that maintains turgor pressure, stores nutrients, and helps regulate water balance. It can take up to 90% of the cell's volume and is essential for plant rigidity.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> A water tower in a city that maintains water pressure and stores reserves for emergencies.</p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/50 rounded-r-lg">
            <h4 className="font-semibold">Plasmodesmata</h4>
            <p className="text-sm">Microscopic channels that connect adjacent plant cells, allowing for communication and transport of materials between cells. These channels are essential for coordinated plant growth and response to stimuli.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> Underground tunnels or bridges connecting buildings in a city for communication and transport.</p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50/50 rounded-r-lg">
            <h4 className="font-semibold">Nucleus</h4>
            <p className="text-sm">Acts as the control center of the plant cell, storing genetic material (DNA) that directs cellular activities, growth, and reproduction. It contains chromosomes that carry genes for plant traits.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> The city hall or government building storing master plans and issuing directives for all city operations.</p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/50 rounded-r-lg">
            <h4 className="font-semibold">Mitochondria</h4>
            <p className="text-sm">Generate ATP through cellular respiration, providing energy for the plant cell's activities. Plants need energy for growth, reproduction, and active transport of nutrients.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> A power plant generating electricity from fuel to run the city's operations.</p>
          </div>

          <div className="border-l-4 border-teal-500 pl-4 py-2 bg-teal-50/50 rounded-r-lg">
            <h4 className="font-semibold">Endoplasmic Reticulum (ER)</h4>
            <p className="text-sm">Rough ER (studded with ribosomes) processes proteins, while smooth ER synthesizes lipids and detoxifies chemicals. Both are essential for building new plant materials.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> A factory assembly line (rough ER) and a chemical processing plant (smooth ER).</p>
          </div>

          <div className="border-l-4 border-cyan-500 pl-4 py-2 bg-cyan-50/50 rounded-r-lg">
            <h4 className="font-semibold">Golgi Apparatus</h4>
            <p className="text-sm">Modifies, sorts, and packages proteins and lipids for transport to other parts of the cell or outside the cell. Essential for building new cell wall materials.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> A post office or distribution center sorting and packaging items for delivery.</p>
          </div>

          <div className="border-l-4 border-pink-500 pl-4 py-2 bg-pink-50/50 rounded-r-lg">
            <h4 className="font-semibold">Vesicles</h4>
            <p className="text-sm">Small, membrane-bound sacs that store and transport materials within the cell. They move proteins, lipids, and other molecules to their destinations.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> Delivery vans transporting goods between different parts of a city.</p>
          </div>

          <div className="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50/50 rounded-r-lg">
            <h4 className="font-semibold">Cytoskeleton</h4>
            <p className="text-sm">A network of protein fibers that provides structural support, maintains cell shape, and enables intracellular transport and cell division.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Real-life analogy:</strong> The steel framework and scaffolding that supports a building's structure.</p>
          </div>
        </div>

        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="Plant Cell vs. Animal Cell Summary"
        >
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-green-200 p-2 rounded">
              <strong>Plant Cell</strong>
              <ul className="list-disc pl-4 mt-1">
                <li>Cell wall (cellulose)</li>
                <li>Chloroplasts</li>
                <li>Large central vacuole</li>
                <li>No centrioles</li>
                <li>Plasmodesmata</li>
              </ul>
            </div>
            <div className="bg-blue-200 p-2 rounded">
              <strong>Animal Cell</strong>
              <ul className="list-disc pl-4 mt-1">
                <li>No cell wall</li>
                <li>No chloroplasts</li>
                <li>Small vacuoles</li>
                <li>Centrioles present</li>
                <li>No plasmodesmata</li>
              </ul>
            </div>
          </div>
        </InformationBox>
      </ContentCard>

      <ContentCard
        id="photosynthesis"
        eyebrow="Section 3"
        title="Photosynthesis in Detail"
        image={images.photosynthesis}
        imageAlt="Chloroplast structure showing photosynthesis"
      >
        <p>Photosynthesis occurs in the chloroplasts and is the process by which plants convert light energy into chemical energy stored in glucose.</p>
        <p>The process can be summarized by the equation:</p>
        <div className="bg-secondary/30 p-4 rounded-lg my-3 text-center font-mono">
          6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂
        </div>
        <p>This process occurs in two main stages: the light-dependent reactions (which occur in the thylakoid membranes) and the Calvin cycle (which occurs in the stroma).</p>
        <p className="mt-3"><strong>Key components of chloroplasts:</strong></p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li><strong>Thylakoids:</strong> Membrane-bound structures where light-dependent reactions occur</li>
          <li><strong>Granum:</strong> A stack of thylakoids that increases surface area for light absorption</li>
          <li><strong>Stroma:</strong> The fluid-filled space where the Calvin cycle (light-independent reactions) occurs</li>
          <li><strong>Chlorophyll:</strong> The green pigment that captures light energy for photosynthesis</li>
        </ul>

        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="Environmental Impact"
        >
          Plants are essential for life on Earth—they produce the oxygen we breathe and form the foundation of most food chains. Protecting plant ecosystems is crucial for maintaining biodiversity and combating climate change.
          <br /><br />
          <strong>Did you know?</strong> Forests cover about 31% of Earth's land surface and are home to over 80% of the world's terrestrial biodiversity.
        </InformationBox>

        <InformationBox
          variant="warning"
          title="Climate Change Connection"
        >
          Deforestation and climate change threaten plant ecosystems worldwide. Photosynthesis removes carbon dioxide from the atmosphere, making plants critical for regulating global climate. Protecting forests and planting trees are essential strategies for combating climate change.
          <br /><br />
          <strong>Source:</strong> Intergovernmental Panel on Climate Change (IPCC)
        </InformationBox>
      </ContentCard>

      <ContentCard
        id="clinical"
        eyebrow="Section 4"
        title="Plant Cell Applications in Agriculture & Medicine"
        image={images.applications}
        imageAlt="Agricultural and medical applications"
      >
        <p>Understanding plant cell biology has led to numerous practical applications in agriculture, food production, and medicine:</p>
        
        <div className="space-y-4 mt-4">
          <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50 rounded-r-lg">
            <h4 className="font-semibold">Agricultural Applications</h4>
            <p className="text-sm mt-1">
              <strong>Plant breeding:</strong> Understanding plant cell structure and genetics has enabled the development of crop varieties with improved yield, disease resistance, and environmental tolerance.
            </p>
            <p className="text-sm mt-1">
              <strong>Biofortification:</strong> Enhancing the nutritional content of crops by manipulating plant cell metabolism to increase vitamin and mineral content.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50/50 rounded-r-lg">
            <h4 className="font-semibold">Food Production</h4>
            <p className="text-sm mt-1">
              <strong>Fermentation:</strong> Using plant cells and their enzymes to produce foods like bread, beer, and soy sauce.
            </p>
            <p className="text-sm mt-1">
              <strong>Plant-based proteins:</strong> Understanding plant cell protein production has led to the development of plant-based meat alternatives and protein supplements.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h4 className="font-semibold">Medical Applications</h4>
            <p className="text-sm mt-1">
              <strong>Pharmaceutical production:</strong> Using plant cells to produce medicines, including vaccines and therapeutic proteins (plant molecular farming).
            </p>
            <p className="text-sm mt-1">
              <strong>Antioxidants:</strong> Understanding plant cell metabolism has led to the identification of beneficial compounds like flavonoids, carotenoids, and polyphenols.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/50 rounded-r-lg">
            <h4 className="font-semibold">Environmental Applications</h4>
            <p className="text-sm mt-1">
              <strong>Phytoremediation:</strong> Using plants to remove contaminants from soil and water through their cellular processes.
            </p>
            <p className="text-sm mt-1">
              <strong>Carbon sequestration:</strong> Plant cells capture and store carbon dioxide through photosynthesis, helping to mitigate climate change.
            </p>
          </div>
        </div>

        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="The Future of Plant Cell Research"
        >
          Plant cell research continues to advance, with new technologies like CRISPR gene editing allowing scientists to improve crop traits, enhance nutritional content, and develop plants with increased resistance to pests and diseases. These advances are crucial for feeding a growing global population while protecting the environment.
        </InformationBox>
      </ContentCard>

      <KeyTermsAccordion
        terms={[
          { 
            term: 'Chloroplast', 
            definition: 'An organelle that performs photosynthesis, converting light energy, carbon dioxide, and water into glucose and oxygen. Contains chlorophyll for light absorption.' 
          },
          { 
            term: 'Cell Wall', 
            definition: 'A rigid outer layer composed of cellulose that provides structural support, protection, and determines cell shape. Essential for plant rigidity and growth.' 
          },
          { 
            term: 'Central Vacuole', 
            definition: 'A large membrane-bound sac that maintains turgor pressure, stores water and nutrients, and helps regulate the cell\'s water balance. Can take up to 90% of cell volume.' 
          },
          { 
            term: 'Plasmodesmata', 
            definition: 'Microscopic channels that connect the cytoplasm of adjacent plant cells, allowing for communication and transport of molecules between cells.' 
          },
          { 
            term: 'Thylakoid', 
            definition: 'Membrane-bound structures within chloroplasts where the light-dependent reactions of photosynthesis take place. Stacked into structures called grana.' 
          },
          { 
            term: 'Granum', 
            definition: 'A stack of thylakoid membranes within a chloroplast that increases surface area for light absorption during photosynthesis.' 
          },
          { 
            term: 'Stroma', 
            definition: 'The fluid-filled space within chloroplasts where the Calvin cycle (light-independent reactions of photosynthesis) occurs.' 
          },
          { 
            term: 'Chlorophyll', 
            definition: 'The green pigment found in chloroplasts that captures light energy for photosynthesis. Gives plants their green color.' 
          },
          { 
            term: 'Turgor Pressure', 
            definition: 'The pressure exerted by the cell membrane against the cell wall, maintained by water in the central vacuole. Gives plants their rigidity and upright structure.' 
          },
          { 
            term: 'Photosynthesis', 
            definition: 'The process by which plants convert light energy, carbon dioxide, and water into glucose and oxygen, using chloroplasts and chlorophyll.' 
          },
        ]}
      />

      <RelatedTopics currentSlug="plant-cell" />
    </>
  );
}