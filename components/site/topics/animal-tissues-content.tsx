import { Info, Lightbulb } from 'lucide-react';
import { ContentCard } from '@/components/site/content-card';
import { InformationBox } from '@/components/site/information-box';
import { KeyTermsAccordion } from './key-terms-accordion';
import { RelatedTopics } from './related-topics';

// Define images for this topic
const images = {
  overview: '/images/animal-tissues/overview.jpg',
  epithelial: '/images/animal-tissues/epithelial.jpg',
  connective: '/images/animal-tissues/connective.jpg',
  muscle: '/images/animal-tissues/muscle.jpg',
  nervous: '/images/animal-tissues/nervous.jpg',
  clinical: '/images/animal-tissues/clinical.jpg',
};

export function AnimalTissuesContent() {
  return (
    <>
      <ContentCard
        id="overview"
        eyebrow="Section 1"
        title="Overview of Animal Tissues"
        image={images.overview}
        imageAlt="Microscopic view of different animal tissues"
      >
        <p>Animal tissues are groups of specialized cells that work together to perform specific functions. In complex animals, tissues are organized into four main types: epithelial, connective, muscle, and nervous tissue.</p>
        <p>These tissues combine to form organs, which in turn work together in organ systems to maintain homeostasis and support the life of the organism. Each tissue type has unique characteristics and functions that are essential for survival.</p>
        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="Tissue Organization"
        >
          The hierarchy of biological organization: Cells → Tissues → Organs → Organ Systems → Organism. Each level builds upon the previous to create increasing complexity.
        </InformationBox>
      </ContentCard>

      <ContentCard
        id="epithelial"
        eyebrow="Section 2"
        title="Epithelial Tissue"
        image={images.epithelial}
        imageAlt="Epithelial tissue layers"
      >
        <p>Epithelial tissue forms the covering of all body surfaces, lines body cavities and hollow organs, and is the major tissue in glands.</p>
        <p>Key characteristics include:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Protection:</strong> Acts as a barrier against physical, chemical, and biological damage</li>
          <li><strong>Secretion:</strong> Releases hormones, enzymes, and other substances</li>
          <li><strong>Absorption:</strong> Takes in nutrients and other substances in the digestive tract</li>
          <li><strong>Excretion:</strong> Removes waste products in the kidneys</li>
        </ul>
        <p>Epithelial tissues are classified by cell shape (squamous, cuboidal, columnar) and number of layers (simple, stratified, pseudostratified).</p>
        
        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 rounded-r-lg mt-4">
          <h4 className="font-semibold">Clinical Connection: Wound Healing</h4>
          <p className="text-sm mt-1">
            <strong>Scenario:</strong> A person cuts their hand while cooking. Epithelial cells divide to cover the wound, while connective tissue repairs the damaged area.
          </p>
          <p className="text-sm mt-1">
            <strong>Why tissues matter:</strong> Epithelial tissue protects the body from infection. Connective tissue restores strength and supports healing.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            <strong>Source:</strong> SEER Training — Cells, Tissues, and Membranes; JCI Insight — Fibroblasts in Wound Healing
          </p>
        </div>

        <InformationBox
          variant="tip"
          icon={<Lightbulb className="h-5 w-5" />}
          title="Memory Aid"
        >
          Remember epithelial tissue with the mnemonic: <strong>"PASS"</strong> — Protection, Absorption, Secretion, and Sensory reception.
        </InformationBox>
      </ContentCard>

      <ContentCard
        id="connective"
        eyebrow="Section 2"
        title="Connective Tissue"
        image={images.connective}
        imageAlt="Connective tissue fibers"
      >
        <p>Connective tissue is the most abundant and widely distributed tissue type in the body. It connects, supports, binds, and separates other tissues and organs.</p>
        <p>Types of connective tissue include:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Loose connective tissue:</strong> Fills spaces between organs and provides cushioning</li>
          <li><strong>Dense connective tissue:</strong> Forms tendons and ligaments, providing strength and flexibility</li>
          <li><strong>Adipose tissue:</strong> Stores fat for energy, insulation, and protection</li>
          <li><strong>Bone:</strong> Provides structural support, protection, and serves as a mineral reservoir</li>
          <li><strong>Blood:</strong> Transports oxygen, nutrients, and waste products throughout the body</li>
        </ul>

        <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50/50 rounded-r-lg mt-4">
          <h4 className="font-semibold">Clinical Connection: Fibrosis</h4>
          <p className="text-sm mt-1">
            <strong>Scenario:</strong> A patient with chronic liver disease develops liver fibrosis. Repeated injury causes excessive collagen deposition, replacing healthy tissue with scar tissue.
          </p>
          <p className="text-sm mt-1">
            <strong>Why tissues matter:</strong> Connective tissue provides support and repair. Too much scar tissue reduces organ function.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            <strong>Source:</strong> Nature Review — ECM Formation and Degradation During Fibrosis; Nature Reviews Molecular Cell Biology — Fibroblast Activation
          </p>
        </div>

        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="Real-life Analogy"
        >
          Think of connective tissue as the mortar between bricks or heavy-duty steel cables holding a suspension bridge together. It provides the structural framework that holds everything in place.
        </InformationBox>
      </ContentCard>

      <ContentCard
        id="muscle"
        eyebrow="Section 4"
        title="Muscle Tissue"
        image={images.muscle}
        imageAlt="Different types of muscle tissue"
      >
        <p>Muscle tissue is characterized by its ability to contract and generate force. There are three types of muscle tissue:</p>
        
        <div className="space-y-4 mt-4">
          <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/50 rounded-r-lg">
            <h4 className="font-semibold">Cardiac Muscle</h4>
            <p className="text-sm">Found only in the heart. Involuntary, rhythmic contractions pump blood throughout the body.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Analogy:</strong> A continuous sump pump in a basement running automatically 24/7 without stopping to prevent flooding.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h4 className="font-semibold">Skeletal Muscle</h4>
            <p className="text-sm">Attached to bones. Voluntary control allows movement, posture, and breathing.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Analogy:</strong> Pulley ropes pulled manually to raise a heavy garage door.</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50 rounded-r-lg">
            <h4 className="font-semibold">Smooth Muscle</h4>
            <p className="text-sm">Found in organs and blood vessels. Involuntary control regulates internal processes.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Analogy:</strong> Automatic conveyor belts inside an airport luggage system pushing bags forward continuously without manual control.</p>
          </div>
        </div>

        <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/50 rounded-r-lg mt-4">
          <h4 className="font-semibold">Clinical Connection: Muscular Dystrophy</h4>
          <p className="text-sm mt-1">
            <strong>Scenario:</strong> A child with muscular dystrophy experiences progressive muscle weakness because muscle cells are damaged and cannot repair themselves effectively.
          </p>
          <p className="text-sm mt-1">
            <strong>Why tissues matter:</strong> Muscle tissue enables movement. Degeneration of muscle cells causes weakness and loss of mobility.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            <strong>Source:</strong> SEER Training — Cells, Tissues, and Membranes
          </p>
        </div>

        <InformationBox
          variant="warning"
          title="Clinical Note"
        >
          Muscle diseases like muscular dystrophy and cardiomyopathy affect millions worldwide. Understanding muscle tissue structure and function is crucial for developing treatments and therapies.
        </InformationBox>
      </ContentCard>

      <ContentCard
        id="nervous"
        eyebrow="Section 5"
        title="Nervous Tissue"
        image={images.nervous}
        imageAlt="Neuron structure"
      >
        <p>Nervous tissue is specialized for communication and coordination. It forms the brain, spinal cord, and nerves throughout the body.</p>
        <p>The two main cell types are:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Neurons:</strong> The functional units that transmit electrical and chemical signals</li>
          <li><strong>Neuroglia (glial cells):</strong> Support, protect, and nourish neurons</li>
        </ul>
        <p>Neurons have specialized structures: dendrites receive signals, the cell body integrates them, and the axon transmits signals to other cells.</p>

        <div className="border-l-4 border-cyan-500 pl-4 py-2 bg-cyan-50/50 rounded-r-lg mt-4">
          <h4 className="font-semibold">Clinical Connection: Alzheimer's Disease</h4>
          <p className="text-sm mt-1">
            <strong>Scenario:</strong> An older adult gradually loses memory because neurons in the brain become damaged and die.
          </p>
          <p className="text-sm mt-1">
            <strong>Why tissues matter:</strong> Nervous tissue transmits signals throughout the body. Damage to neurons leads to impaired memory, thinking, and movement.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            <strong>Source:</strong> NIH Overview of Tissues
          </p>
        </div>

        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="Real-life Analogy"
        >
          Think of nervous tissue as fiber-optic internet cables transmitting high-speed digital data instantly across an entire country. The nervous system coordinates rapid responses and maintains communication throughout the body.
        </InformationBox>

        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="Did You Know?"
        >
          The human brain contains approximately 86 billion neurons, each forming thousands of connections. This creates a network of over 100 trillion synaptic connections!
        </InformationBox>
      </ContentCard>

      <ContentCard
        id="clinical"
        eyebrow="Section 6"
        title="Tissue Disorders & Clinical Applications"
        image={images.clinical}
        imageAlt="Clinical applications of tissue biology"
      >
        <p>Understanding the four tissue types is essential for diagnosing and treating various medical conditions. Here are key clinical applications:</p>
        
        <div className="space-y-4 mt-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h4 className="font-semibold">Cancer – Damage to the Cell Nucleus and DNA</h4>
            <p className="text-sm text-muted-foreground mt-1">
              <strong>Scenario:</strong> A person develops skin cancer after years of excessive sun exposure. UV radiation damages the DNA inside the cell nucleus. When the damage is not repaired, cells divide uncontrollably, forming a tumor.
            </p>
            <p className="text-sm mt-1">
              <strong>Why cellular structures matter:</strong> The nucleus stores DNA and controls cell activities. DNA mutations can disrupt the normal cell cycle, leading to cancer.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              <strong>Sources:</strong> National Cancer Institute; PubMed – From Single Cells to Tissue Self-Organization
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/50 rounded-r-lg">
            <h4 className="font-semibold">Cystic Fibrosis – Defective Cell Membrane</h4>
            <p className="text-sm text-muted-foreground mt-1">
              <strong>Scenario:</strong> A child with cystic fibrosis has frequent lung infections because a defective protein in the cell membrane prevents normal movement of chloride ions, producing thick mucus.
            </p>
            <p className="text-sm mt-1">
              <strong>Why cellular structures matter:</strong> The cell membrane controls what enters and leaves the cell. Defects in membrane proteins affect organ function and increase disease risk.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              <strong>Source:</strong> NIH Overview of Cells and Tissues
            </p>
          </div>
        </div>

        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="The Importance of Understanding Tissues"
        >
          From wound healing to degenerative diseases, understanding how tissues function at the cellular level is essential for medical diagnosis, treatment development, and advancing healthcare. Each tissue type plays a vital role in maintaining health and responding to injury or disease.
        </InformationBox>
      </ContentCard>

      <KeyTermsAccordion
        terms={[
          { 
            term: 'Epithelial Tissue', 
            definition: 'A tissue that covers body surfaces, lines cavities and organs, and forms glands. It provides protection, secretion, absorption, and sensory functions.' 
          },
          { 
            term: 'Connective Tissue', 
            definition: 'The most abundant tissue type that connects, supports, and binds other tissues. Includes bone, cartilage, blood, and adipose tissue. Acts like mortar between bricks.' 
          },
          { 
            term: 'Skeletal Muscle Tissue', 
            definition: 'Voluntary striated fibers that contract to move the bones of the skeleton. Under conscious control for movement, posture, and breathing.' 
          },
          { 
            term: 'Smooth Muscle Tissue', 
            definition: 'Involuntary muscle that manages sustained contractions inside hollow internal organs like the stomach and blood vessels. Not under conscious control.' 
          },
          { 
            term: 'Cardiac Muscle Tissue', 
            definition: 'Involuntary striated cells located exclusively in the heart that continuously pump blood throughout the body without conscious control.' 
          },
          { 
            term: 'Nervous Tissue', 
            definition: 'A tissue specialized for communication and coordination, consisting of neurons that transmit signals and neuroglia that provide support and protection.' 
          },
          { 
            term: 'Neuron', 
            definition: 'A specialized cell that transmits electrical and chemical signals throughout the nervous system, consisting of dendrites, a cell body, and an axon.' 
          },
          { 
            term: 'Homeostasis', 
            definition: 'The maintenance of a stable internal environment in the body through the coordinated action of tissues, organs, and organ systems.' 
          },
          { 
            term: 'Fibrosis', 
            definition: 'The formation of excess fibrous connective tissue in an organ or tissue in response to injury or disease, leading to scar tissue formation.' 
          },
          { 
            term: 'Muscular Dystrophy', 
            definition: 'A group of genetic diseases characterized by progressive weakness and degeneration of skeletal muscle tissue due to damage that prevents effective repair.' 
          },
        ]}
      />

      <RelatedTopics currentSlug="animal-tissues" />
    </>
  );
}