import {
  Building2,
  Factory,
  Hammer,
  HardHat,
  Landmark,
  Pickaxe,
  TrainFront,
  Truck,
  Warehouse,
  Waves,
  Wrench,
  Zap,
} from "lucide-react";

import bridgeImage from "../assets/images/projects/project-bridge.jpg";
import constructionImage from "../assets/images/projects/project-construction.jpg";
import plantImage from "../assets/images/infrastructure/infra-plant.jpg";
import warehouseImage from "../assets/images/infrastructure/infra-warehouse.jpg";
import machineryImage from "../assets/images/infrastructure/infra-machinery.jpg";

export const industries = [
  {
    id: 1,
    slug: "construction-real-estate",
    name: "Construction & Real Estate",
    shortName: "Construction",
    icon: Building2,
    image: constructionImage,
    description:
      "Reliable steel products for residential, commercial and large-scale real estate developments.",
    longDescription:
      "We support builders, contractors and developers with TMT bars, structural steel, pipes and processed materials for residential buildings, commercial complexes and township developments.",
    products: [
      "TMT Reinforcement Bars",
      "Structural Steel Sections",
      "MS Pipes & Hollow Sections",
    ],
    applications: [
      "Residential Buildings",
      "Commercial Complexes",
      "High-Rise Structures",
      "Township Developments",
    ],
  },
  {
    id: 2,
    slug: "infrastructure-bridges",
    name: "Infrastructure & Bridges",
    shortName: "Infrastructure",
    icon: TrainFront,
    image: bridgeImage,
    description:
      "High-strength steel for highways, flyovers, metro corridors, bridges and public infrastructure.",
    longDescription:
      "Our steel solutions support demanding infrastructure projects requiring strength, consistency, ductility and dependable long-term performance.",
    products: [
      "TMT Reinforcement Bars",
      "Structural Steel Sections",
      "Steel Plates",
    ],
    applications: [
      "Bridges",
      "Flyovers",
      "Highways",
      "Metro Rail Projects",
    ],
  },
  {
    id: 3,
    slug: "manufacturing-engineering",
    name: "Manufacturing & Engineering",
    shortName: "Manufacturing",
    icon: Factory,
    image: machineryImage,
    description:
      "Steel coils, pipes and structural products for machinery, fabrication and engineering facilities.",
    longDescription:
      "We supply manufacturers and engineering companies with steel products suited for machinery production, fabrication, equipment structures and industrial assemblies.",
    products: [
      "Hot & Cold Rolled Coils",
      "MS Pipes & Hollow Sections",
      "Structural Steel Sections",
    ],
    applications: [
      "Machinery Manufacturing",
      "Industrial Fabrication",
      "Equipment Frames",
      "Production Facilities",
    ],
  },
  {
    id: 4,
    slug: "energy-power",
    name: "Energy & Power",
    shortName: "Energy",
    icon: Zap,
    image: plantImage,
    description:
      "Structural steel solutions for power plants, transmission systems and renewable-energy projects.",
    longDescription:
      "Our products are supplied for power generation, transmission structures, solar projects and industrial energy infrastructure.",
    products: [
      "Structural Steel Sections",
      "MS Pipes & Hollow Sections",
      "Steel Plates",
    ],
    applications: [
      "Power Plants",
      "Transmission Towers",
      "Solar Mounting Systems",
      "Utility Infrastructure",
    ],
  },
  {
    id: 5,
    slug: "oil-gas-water",
    name: "Oil, Gas & Water",
    shortName: "Oil & Gas",
    icon: Waves,
    image: machineryImage,
    description:
      "Steel pipes and structural materials for utility, process and distribution systems.",
    longDescription:
      "We support utility contractors and industrial projects with pipe and structural solutions for water, process and distribution applications.",
    products: [
      "MS Pipes",
      "Hollow Sections",
      "Structural Steel",
    ],
    applications: [
      "Water Distribution",
      "Industrial Piping",
      "Utility Networks",
      "Process Systems",
    ],
  },
  {
    id: 6,
    slug: "warehousing-logistics",
    name: "Warehousing & Logistics",
    shortName: "Warehousing",
    icon: Warehouse,
    image: warehouseImage,
    description:
      "Structural steel for warehouses, logistics parks and industrial storage facilities.",
    longDescription:
      "Our steel supports the construction of warehouses, distribution centres, industrial sheds and large-scale logistics infrastructure.",
    products: [
      "Structural Steel Sections",
      "MS Pipes & Hollow Sections",
      "Steel Plates",
    ],
    applications: [
      "Warehouses",
      "Logistics Parks",
      "Industrial Sheds",
      "Distribution Centres",
    ],
  },
  {
    id: 7,
    slug: "government-contractors",
    name: "Government Contractors",
    shortName: "Government",
    icon: Landmark,
    image: bridgeImage,
    description:
      "Project-based steel supply for government, civic and public-development projects.",
    longDescription:
      "We support contractors executing government and public works through reliable project supply, product coordination and dependable dispatch.",
    products: [
      "TMT Reinforcement Bars",
      "Structural Steel",
      "MS Pipes",
    ],
    applications: [
      "Public Buildings",
      "Civic Infrastructure",
      "Road Projects",
      "Government Facilities",
    ],
  },
  {
    id: 8,
    slug: "mining-heavy-industry",
    name: "Mining & Heavy Industry",
    shortName: "Heavy Industry",
    icon: Pickaxe,
    image: plantImage,
    description:
      "Heavy-duty steel products for mining, processing plants and industrial installations.",
    longDescription:
      "Our structural and processed steel products support heavy-duty operational environments requiring strength, durability and reliable performance.",
    products: [
      "Structural Steel Sections",
      "Steel Plates",
      "MS Pipes",
    ],
    applications: [
      "Mining Facilities",
      "Processing Plants",
      "Heavy Machinery",
      "Industrial Platforms",
    ],
  },
];

export const industryCapabilities = [
  {
    icon: HardHat,
    title: "Project Understanding",
    description:
      "We review the application, specification, quantity and delivery requirements.",
  },
  {
    icon: Wrench,
    title: "Product Selection",
    description:
      "Our team helps identify suitable products, grades, sizes and profiles.",
  },
  {
    icon: Hammer,
    title: "Custom Processing",
    description:
      "Cutting, sizing and preparation can be coordinated for project requirements.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "Planned inventory and logistics support dependable material dispatch.",
  },
];

export const industryStats = [
  {
    value: "27+",
    label: "Years of Experience",
  },
  {
    value: "18",
    label: "States Served",
  },
  {
    value: "1,450+",
    label: "Projects Supplied",
  },
  {
    value: "8",
    label: "Major Industries",
  },
];