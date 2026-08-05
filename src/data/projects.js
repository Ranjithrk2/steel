import {
  Building2,
  Factory,
  HardHat,
  Landmark,
  MapPin,
  TrainFront,
  Warehouse,
  Zap,
} from "lucide-react";

import bridgeImage from "../assets/images/projects/project-bridge.jpg";
import constructionImage from "../assets/images/projects/project-construction.jpg";
import plantImage from "../assets/images/infrastructure/infra-plant.jpg";
import warehouseImage from "../assets/images/infrastructure/infra-warehouse.jpg";
import structuralImage from "../assets/images/products/prod-structural.jpg";
import tmtImage from "../assets/images/products/prod-tmt.jpg";

export const projectCategories = [
  "All Projects",
  "Infrastructure",
  "Construction",
  "Industrial",
  "Warehousing",
  "Energy",
  "Government",
];

export const projects = [
  {
    id: 1,
    title: "National Highway Bridge Project",
    slug: "national-highway-bridge-project",
    category: "Infrastructure",
    location: "South India",
    image: bridgeImage,
    icon: TrainFront,
    description:
      "Structural steel and reinforcement materials supplied for a major highway bridge development.",
    products: [
      "TMT Reinforcement Bars",
      "Structural Steel Sections",
      "Steel Plates",
    ],
    highlights: [
      "Project-based material planning",
      "High-strength steel supply",
      "Coordinated phased dispatch",
    ],
  },
  {
    id: 2,
    title: "Commercial Construction Development",
    slug: "commercial-construction-development",
    category: "Construction",
    location: "Bengaluru",
    image: constructionImage,
    icon: Building2,
    description:
      "TMT bars and structural steel supplied for a large commercial development project.",
    products: [
      "TMT Reinforcement Bars",
      "MS Pipes & Hollow Sections",
      "Structural Steel Sections",
    ],
    highlights: [
      "Multi-stage delivery support",
      "Grade and size coordination",
      "Reliable site dispatch planning",
    ],
  },
  {
    id: 3,
    title: "Industrial Manufacturing Campus",
    slug: "industrial-manufacturing-campus",
    category: "Industrial",
    location: "Karnataka",
    image: plantImage,
    icon: Factory,
    description:
      "Structural steel and processed materials supplied for an integrated industrial manufacturing facility.",
    products: [
      "Structural Steel Sections",
      "Hot & Cold Rolled Coils",
      "MS Pipes",
    ],
    highlights: [
      "Heavy structural supply",
      "Project-specific processing",
      "Scheduled bulk deliveries",
    ],
  },
  {
    id: 4,
    title: "Logistics & Warehouse Park",
    slug: "logistics-warehouse-park",
    category: "Warehousing",
    location: "South India",
    image: warehouseImage,
    icon: Warehouse,
    description:
      "Steel products supplied for a multi-block warehouse and logistics park development.",
    products: [
      "Structural Steel Sections",
      "MS Pipes & Hollow Sections",
      "Steel Plates",
    ],
    highlights: [
      "Large-volume supply",
      "Warehouse structure support",
      "Planned dispatch coordination",
    ],
  },
  {
    id: 5,
    title: "Power Infrastructure Upgrade",
    slug: "power-infrastructure-upgrade",
    category: "Energy",
    location: "Andhra Pradesh",
    image: structuralImage,
    icon: Zap,
    description:
      "Structural steel and fabricated sections supplied for power infrastructure expansion.",
    products: [
      "Structural Steel Sections",
      "Steel Plates",
      "MS Pipes",
    ],
    highlights: [
      "Project-grade steel support",
      "Custom processing coordination",
      "Reliable delivery scheduling",
    ],
  },
  {
    id: 6,
    title: "Public Infrastructure Development",
    slug: "public-infrastructure-development",
    category: "Government",
    location: "Karnataka",
    image: tmtImage,
    icon: Landmark,
    description:
      "Reinforcement and structural steel supplied for a government-led public infrastructure project.",
    products: [
      "TMT Reinforcement Bars",
      "Structural Steel",
      "MS Pipes",
    ],
    highlights: [
      "Specification-focused supply",
      "Tender-based coordination",
      "Documented dispatch support",
    ],
  },
];

export const projectStats = [
  {
    value: "1,450+",
    label: "Projects Supplied",
  },
  {
    value: "18",
    label: "States Served",
  },
  {
    value: "27+",
    label: "Years of Experience",
  },
  {
    value: "6",
    label: "Key Project Sectors",
  },
];

export const projectSupport = [
  {
    icon: HardHat,
    title: "Project Planning",
    description:
      "We review application, grade, size, quantity and delivery schedules before supply.",
  },
  {
    icon: MapPin,
    title: "Site Coordination",
    description:
      "Dispatch planning is aligned with project location, access and phased delivery requirements.",
  },
  {
    icon: Factory,
    title: "Processing Support",
    description:
      "Cutting, sizing and project-specific material preparation can be coordinated when required.",
  },
  {
    icon: Warehouse,
    title: "Inventory Management",
    description:
      "Structured stock and storage planning help support dependable project supply.",
  },
];

export const projectWorkflow = [
  {
    number: "01",
    title: "Requirement Review",
    description:
      "The product, grade, dimensions, quantity and delivery schedule are reviewed.",
  },
  {
    number: "02",
    title: "Supply Planning",
    description:
      "Suitable products, processing needs and phased delivery requirements are mapped.",
  },
  {
    number: "03",
    title: "Quality Verification",
    description:
      "Material condition, order specifications and dimensional requirements are checked.",
  },
  {
    number: "04",
    title: "Processing & Packing",
    description:
      "Products are prepared, bundled and labelled according to the project requirement.",
  },
  {
    number: "05",
    title: "Dispatch Coordination",
    description:
      "Loading and transportation are planned according to site and project schedules.",
  },
];

export const projectMedia = {
  bridgeImage,
  constructionImage,
  plantImage,
  warehouseImage,
  structuralImage,
  tmtImage,
};
