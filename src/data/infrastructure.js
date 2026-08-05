import {
  Boxes,
  Factory,
  Gauge,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Warehouse,
  Wrench,
  Zap,
} from "lucide-react";

import plantImage from "../assets/images/infrastructure/infra-plant.jpg";
import machineryImage from "../assets/images/infrastructure/infra-machinery.jpg";
import warehouseImage from "../assets/images/infrastructure/infra-warehouse.jpg";
import qualityImage from "../assets/images/quality/quality-lab.jpg";

export const infrastructureStats = [
  { value: "6,00,000 MT", label: "Annual Handling Capacity" },
  { value: "27+", label: "Years of Operations" },
  { value: "18", label: "States Served" },
  { value: "1,450+", label: "Projects Supplied" },
];

export const infrastructureFacilities = [
  {
    id: 1,
    title: "Integrated Manufacturing Campus",
    image: plantImage,
    icon: Factory,
    description:
      "A coordinated industrial campus supporting material receipt, processing, inspection, storage, packing and dispatch.",
    points: [
      "Integrated operational workflow",
      "Organised material movement",
      "Dedicated processing areas",
      "Project-focused dispatch planning",
    ],
  },
  {
    id: 2,
    title: "Steel Processing & Rolling Systems",
    image: machineryImage,
    icon: Gauge,
    description:
      "Modern machinery and controlled processing systems support dimensional consistency and dependable product preparation.",
    points: [
      "Precision sizing and preparation",
      "Controlled processing workflow",
      "Multiple steel profiles supported",
      "Project-specific material handling",
    ],
  },
  {
    id: 3,
    title: "Warehousing & Inventory Management",
    image: warehouseImage,
    icon: Warehouse,
    description:
      "Structured storage and inventory systems help maintain product condition, identification and delivery readiness.",
    points: [
      "Organised product segregation",
      "Batch and grade identification",
      "Safe loading and unloading",
      "Dispatch-ready inventory planning",
    ],
  },
  {
    id: 4,
    title: "Quality Verification Laboratory",
    image: qualityImage,
    icon: ShieldCheck,
    description:
      "Inspection and verification processes support dimensional, surface and specification checks before dispatch.",
    points: [
      "Dimensional verification",
      "Surface-condition inspection",
      "Specification matching",
      "Batch-level traceability",
    ],
  },
];

export const operationalCapabilities = [
  {
    icon: Gauge,
    title: "Precision Processing",
    description:
      "Cutting, sizing and preparation are coordinated according to project and product requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    description:
      "Material condition, dimensions, grade and order specifications are verified before dispatch.",
  },
  {
    icon: Warehouse,
    title: "Inventory Planning",
    description:
      "Structured storage and stock planning help support dependable project supply schedules.",
  },
  {
    icon: Truck,
    title: "Logistics Coordination",
    description:
      "Loading, dispatch and delivery are planned through a controlled logistics workflow.",
  },
  {
    icon: PackageCheck,
    title: "Safe Packing",
    description:
      "Products are bundled, labelled and prepared for safe handling and transportation.",
  },
  {
    icon: Wrench,
    title: "Project Support",
    description:
      "Our team helps coordinate suitable products, sizes and processing options for each requirement.",
  },
];

export const infrastructureProcess = [
  {
    number: "01",
    title: "Material Receipt",
    description:
      "Incoming material is received, identified and organised according to product type and requirement.",
  },
  {
    number: "02",
    title: "Inspection",
    description:
      "Material condition, specifications and dimensional details are reviewed before processing.",
  },
  {
    number: "03",
    title: "Processing",
    description:
      "Cutting, sizing and project-specific preparation are completed using suitable equipment.",
  },
  {
    number: "04",
    title: "Quality Verification",
    description:
      "Processed material is checked against the confirmed product and order requirements.",
  },
  {
    number: "05",
    title: "Packing & Storage",
    description:
      "Products are bundled, labelled and placed in organised storage before dispatch.",
  },
  {
    number: "06",
    title: "Dispatch",
    description:
      "Final loading and delivery are coordinated through a dependable logistics network.",
  },
];

export const facilityHighlights = [
  {
    icon: Zap,
    title: "Integrated Workflow",
    description:
      "Processing, quality, storage and dispatch are coordinated through one connected operational system.",
  },
  {
    icon: Boxes,
    title: "Scalable Capacity",
    description:
      "The facility supports regular commercial requirements as well as larger project-based supply.",
  },
  {
    icon: Sparkles,
    title: "Clean Material Handling",
    description:
      "Structured movement and storage help protect material condition throughout the supply process.",
  },
];

export const infrastructureMedia = {
  plantImage,
  machineryImage,
  warehouseImage,
  qualityImage,
};
