import { Info, Lightbulb } from 'lucide-react';
import { ContentCard } from '@/components/site/content-card';
import { InformationBox } from '@/components/site/information-box';
import { KeyTermsAccordion } from './key-terms-accordion';
import { RelatedTopics } from './related-topics';

// Define images for this topic
const images = {
  overview: '/images/plant-tissues/overview.jpg',
  meristematic: '/images/plant-tissues/meristematic.jpg',
  dermal: '/images/plant-tissues/dermal.jpg',
  vascular: '/images/plant-tissues/vascular.jpg',
  ground: '/images/plant-tissues/ground.jpg',
  applications: '/images/plant-tissues/applications.jpg',
};

export function PlantTissuesContent() {
  return (
    <>
      <ContentCard
        id="overview"
        eyebrow="Section 1"
        title="Overview of Plant Tissues"
        image={images.overview}
        imageAlt="Plant tissue cross-section"
      >
        <p>As for all animals, your body is made of four types of tissue: epithelial, muscle, nerve, and connective tissues. Plants, too, are built of tissues, but not surprisingly, their very different lifestyles derive from different kinds of tissues. All three types of plant cells are found in most plant tissues.</p>
        <p>Three major types of plant tissues are dermal, ground, and vascular tissues. These tissues are arranged differently in different organs (roots, stems, leaves) and are responsible for functions ranging from protection and support to transport and photosynthesis.</p>
        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="Plant vs. Animal Tissues"
        >
          Plant tissues differ from animal tissues in several key ways: plant cells have cell walls, plants have meristematic tissue that allows continuous growth, and plants lack specialized nervous or muscle tissues. Plants can grow throughout their lifespan, unlike most animals.
        </InformationBox>
      </ContentCard>

      <ContentCard
        id="meristematic"
        eyebrow="Section 2"
        title="Meristematic Tissue"
        image={images.meristematic}
        imageAlt="Plant meristem showing cell division"
      >
        <p>Meristematic tissue consists of undifferentiated cells capable of continuous division. This tissue is responsible for the growth of plants throughout their lifetime. These cells are small, have thin cell walls, and contain dense cytoplasm with large nuclei.</p>
        <p>Types of meristems include:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Apical meristems:</strong> Located at root and shoot tips, responsible for primary growth (lengthening) that allows plants to grow taller and roots to extend deeper.</li>
          <li><strong>Lateral meristems:</strong> Found in cambium layers, responsible for secondary growth (thickening) that allows woody plants to increase in girth.</li>
          <li><strong>Intercalary meristems:</strong> Located between mature tissues, allow regrowth after damage and are common in grasses.</li>
        </ul>
        <InformationBox
          variant="tip"
          icon={<Lightbulb className="h-5 w-5" />}
          title="Growth Note"
        >
          The ability of plants to grow continuously is unique among organisms. Unlike animals, whose growth is mostly limited to developmental stages, plants can grow throughout their lifespan due to meristematic tissue. This is why trees can live for thousands of years and continue to grow.
        </InformationBox>
        <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50 rounded-r-lg mt-4">
          <h4 className="font-semibold">Real-life Application: Agriculture</h4>
          <p className="text-sm mt-1">
            Understanding meristematic tissue is crucial in agriculture. Farmers use this knowledge for pruning techniques that promote bushier growth, and horticulturists use meristem culture for plant propagation and disease-free plant production.
          </p>
        </div>
      </ContentCard>

      <ContentCard
        id="dermal"
        eyebrow="Section 3"
        title="Dermal Tissue"
        image={images.dermal}
        imageAlt="Epidermis of a plant leaf"
      >
        <p>Dermal tissue covers the outside of a plant in a single layer of cells called the epidermis. You can think of the epidermis as the plant's skin. It mediates most of the interactions between a plant and its environment.</p>
        <p>Key components include:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Epidermis:</strong> The outer layer of cells covering leaves, stems, and roots that protects against physical damage and pathogens</li>
          <li><strong>Cuticle:</strong> A waxy layer that prevents water loss and protects against pathogens and UV radiation</li>
          <li><strong>Guard Cells:</strong> Specialized cells in the epidermis of leaves, stems, and other organs that control gas exchange. They are produced in pairs with a gap between them that forms a stomatal pore.</li>
          <li><strong>Stomata:</strong> A pore found in the epidermis of leaves, stems, and other organs that controls the rate of gas exchange between the internal air spaces of the leaf and the atmosphere. The pore is bordered by a pair of specialized parenchyma cells known as guard cells that regulate the size of the stomatal opening.</li>
          <li><strong>Trichomes:</strong> Hair-like structures that protect against insects, reduce water loss, and reflect excess light</li>
        </ul>
        <InformationBox
          variant="warning"
          title="Environmental Adaptation"
        >
          Desert plants have thicker cuticles and fewer stomata to minimize water loss, while aquatic plants have thinner cuticles and more stomata on the upper surface of leaves. This demonstrates how plants adapt their dermal tissue to survive in different environments.
        </InformationBox>
        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 rounded-r-lg mt-4">
          <h4 className="font-semibold">Real-life Application: Agriculture</h4>
          <p className="text-sm mt-1">
            Understanding stomata and guard cells is essential for agriculture. Farmers and scientists monitor stomatal behavior to optimize irrigation timing and understand how plants respond to drought conditions, helping to develop more drought-resistant crop varieties.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            <strong>Sources:</strong> Wikipedia — Stoma; Wikipedia — Guard Cell; Lumen Learning — Plant Tissues
          </p>
        </div>
      </ContentCard>

      <ContentCard
        id="vascular"
        eyebrow="Section 4"
        title="Vascular Tissue"
        image={images.vascular}
        imageAlt="Vascular tissue in plant stem"
      >
        <p>Vascular tissues are complex conducting tissues in higher plants that are made up of different types of cells and elements. The two main components of vascular tissue in plants are xylem and phloem. These tissues are responsible for the transport of water and nutrients in the plants.</p>
        
        <div className="space-y-4 mt-4">
          <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50 rounded-r-lg">
            <h4 className="font-semibold">Xylem</h4>
            <p className="text-sm">Transports water and dissolved minerals from roots to the aerial parts of the plant such as stem and leaves. Made of dead cells with thick, lignified cell walls that provide structural support. Xylem is one of the conducting tissues responsible for the transport of nutrients and water from roots to the aerial parts of the plant.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Key cells:</strong> Tracheids and vessel elements</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Analogy:</strong> Water pipes in a building carrying water from the basement to all floors.</p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50/50 rounded-r-lg">
            <h4 className="font-semibold">Phloem</h4>
            <p className="text-sm">Another conducting vascular tissue found in plants that transports food made in leaves during photosynthesis to all the parts of the plant. Phloem consists of living cells that can transport sugars and organic compounds in both directions.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Key cells:</strong> Sieve tube elements and companion cells</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Analogy:</strong> A delivery network moving food from kitchens (leaves) to all parts of a building.</p>
          </div>
        </div>
        
        <div className="mt-3 p-3 bg-primary/5 rounded-lg">
          <p className="text-sm"><strong>Remember:</strong> Xylem = flows <strong>up</strong> (water and minerals from roots to leaves), Phloem = flows <strong>both ways</strong> (sugars from leaves to other plant parts)</p>
        </div>

        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="Evolutionary Significance"
        >
          The evolution of vascular tissue was a major milestone in plant evolution. It allowed plants to grow taller and colonize drier environments, leading to the development of forests and the diverse plant life we see today.
          <br /><br />
          <strong>Source:</strong> Byjus — Vascular Tissue
        </InformationBox>

        <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50/50 rounded-r-lg mt-4">
          <h4 className="font-semibold">Real-life Application: Forestry</h4>
          <p className="text-sm mt-1">
            Understanding xylem and phloem is essential in forestry and arboriculture. Knowledge of vascular tissue helps tree surgeons treat diseases, understand how trees transport nutrients, and develop better methods for timber production and forest management.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            <strong>Sources:</strong> Byjus — Vascular Tissue; M.Megias — Plant Vascular Tissue
          </p>
        </div>
      </ContentCard>

      <ContentCard
        id="ground"
        eyebrow="Section 5"
        title="Ground Tissue"
        image={images.ground}
        imageAlt="Ground tissue in plant cross-section"
      >
        <p>The ground tissue system arises from a ground tissue meristem and consists of three simple tissues: parenchyma, collenchyma, and sclerenchyma. Ground tissue fills the space between the dermal and vascular tissues.</p>
        
        <div className="space-y-4 mt-4">
          <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50/50 rounded-r-lg">
            <h4 className="font-semibold">Parenchyma</h4>
            <p className="text-sm">Most common, thin-walled cells involved in photosynthesis, storage, and secretion. These cells are capable of cell division, even after they have differentiated into the mature form. They can therefore give rise to adventitious buds and roots at some distance from the apical meristem at the tips of shoots and roots.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Analogy:</strong> The general-purpose cells that can perform multiple functions, like versatile workers in a factory.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h4 className="font-semibold">Collenchyma</h4>
            <p className="text-sm">Alive at maturity; primary cell walls have uneven thickenings of cellulose, pectin, and hemicellulose, usually thickest at the corners. These cells provide flexible support to young, growing plant organs.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Analogy:</strong> Flexible support structures like bendable scaffolding that can grow with a building.</p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/50 rounded-r-lg">
            <h4 className="font-semibold">Sclerenchyma</h4>
            <p className="text-sm">Dead at maturity and lacks living cytoplasm; features thick, hard secondary cell walls heavily impregnated with lignin. These cells provide rigid structural support and are found in woody tissues and seed coats.</p>
            <p className="text-xs text-muted-foreground mt-1"><strong>Analogy:</strong> Concrete and steel structures that provide permanent, rigid support to a building.</p>
          </div>
        </div>

        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="Tissue Distribution"
        >
          In leaves, ground tissue is called mesophyll and is specialized for photosynthesis. In stems, it provides both support and storage. In roots, it stores food and helps with transport.
          <br /><br />
          <strong>Sources:</strong> Britannica — Angiosperm Ground Tissue; Lumen Learning — Plant Tissues
        </InformationBox>

        <div className="border-l-4 border-teal-500 pl-4 py-2 bg-teal-50/50 rounded-r-lg mt-4">
          <h4 className="font-semibold">Real-life Application: Food Production</h4>
          <p className="text-sm mt-1">
            Understanding ground tissue is essential in agriculture and food production. Parenchyma cells store starches and sugars in crops like potatoes, sweet potatoes, and carrots. Knowledge of ground tissue development helps farmers improve crop yields and storage quality.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            <strong>Sources:</strong> Britannica — Angiosperm Ground Tissue; M.Megias — Plant Tissue Support
          </p>
        </div>
      </ContentCard>

      <ContentCard
        id="applications"
        eyebrow="Section 6"
        title="Agricultural & Environmental Applications"
        image={images.applications}
        imageAlt="Agricultural and environmental applications"
      >
        <p>Understanding plant tissues has led to numerous practical applications in agriculture, forestry, and environmental management:</p>
        
        <div className="space-y-4 mt-4">
          <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50 rounded-r-lg">
            <h4 className="font-semibold">Agricultural Applications</h4>
            <p className="text-sm mt-1">
              <strong>Crop improvement:</strong> Understanding meristematic tissue allows plant breeders to develop varieties with improved yield, disease resistance, and drought tolerance.
            </p>
            <p className="text-sm mt-1">
              <strong>Plant propagation:</strong> Knowledge of meristematic tissue enables plant tissue culture and rapid multiplication of desirable plant varieties.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 rounded-r-lg">
            <h4 className="font-semibold">Environmental Management</h4>
            <p className="text-sm mt-1">
              <strong>Carbon sequestration:</strong> Understanding how trees transport and store carbon in their tissues (especially xylem) is crucial for climate change mitigation.
            </p>
            <p className="text-sm mt-1">
              <strong>Forestry:</strong> Knowledge of vascular tissue helps in sustainable forest management and timber production.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50/50 rounded-r-lg">
            <h4 className="font-semibold">Climate Change Adaptations</h4>
            <p className="text-sm mt-1">
              Understanding how plant tissues respond to environmental stress is crucial for developing crops that can survive in changing climate conditions. Scientists study how dermal tissue adaptations (like cuticle thickness) and vascular tissue efficiency change in response to temperature and water availability.
            </p>
          </div>
        </div>

        <InformationBox
          variant="info"
          icon={<Info className="h-5 w-5" />}
          title="The Importance of Plant Tissue Knowledge"
        >
          Understanding plant tissues is essential for addressing global challenges including food security, climate change, and biodiversity conservation. As we face a growing global population and environmental challenges, knowledge of plant tissues will be crucial for developing sustainable solutions.
        </InformationBox>
      </ContentCard>

      <KeyTermsAccordion
        terms={[
          { 
            term: 'Meristematic Tissue', 
            definition: 'A tissue of undifferentiated cells capable of continuous division and differentiation, responsible for plant growth throughout the plant\'s lifespan.' 
          },
          { 
            term: 'Apical Meristem', 
            definition: 'Meristematic tissue located at root and shoot tips responsible for primary growth, allowing plants to grow taller and roots to extend deeper.' 
          },
          { 
            term: 'Lateral Meristem', 
            definition: 'Meristematic tissue in cambium layers responsible for secondary growth (thickening) that allows woody plants to increase in girth.' 
          },
          { 
            term: 'Dermal Tissue', 
            definition: 'The outer protective tissue of plants, consisting of the epidermis, cuticle, and specialized structures like stomata and trichomes.' 
          },
          { 
            term: 'Guard Cells', 
            definition: 'Specialized cells in the epidermis that form stomatal pores and regulate gas exchange by opening and closing the pore.' 
          },
          { 
            term: 'Stomata', 
            definition: 'Microscopic pores in the epidermis of leaves and stems that regulate gas exchange and transpiration through opening and closing mechanisms.' 
          },
          { 
            term: 'Vascular Tissue', 
            definition: 'A system of conducting tissues including xylem (water and minerals) and phloem (sugars) that transports materials throughout the plant.' 
          },
          { 
            term: 'Xylem', 
            definition: 'A vascular tissue that conducts water and dissolved minerals upward from roots to leaves, consisting of tracheids and vessel elements. Made of dead cells with lignified walls.' 
          },
          { 
            term: 'Phloem', 
            definition: 'A vascular tissue that transports sugars and organic compounds from leaves to other parts of the plant, consisting of sieve tube elements and companion cells.' 
          },
          { 
            term: 'Ground Tissue', 
            definition: 'A tissue that fills the spaces between dermal and vascular tissues, performing functions such as photosynthesis, storage, and support. Includes parenchyma, collenchyma, and sclerenchyma.' 
          },
          { 
            term: 'Parenchyma', 
            definition: 'Thin-walled cells capable of division and differentiation, involved in photosynthesis, storage, and secretion. Most common ground tissue type.' 
          },
          { 
            term: 'Collenchyma', 
            definition: 'Living cells with unevenly thickened cell walls that provide flexible support to growing plant organs.' 
          },
          { 
            term: 'Sclerenchyma', 
            definition: 'Dead cells with thick, lignified walls that provide rigid structural support to mature plant organs.' 
          },
        ]}
      />

      <RelatedTopics currentSlug="plant-tissues" />
    </>
  );
}