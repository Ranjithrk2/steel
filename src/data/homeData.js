import {
  Building2,
  Factory,
  Gauge,
  HardHat,
  ShieldCheck,
  Sparkles,
  TrainFront,
  Truck,
  Warehouse,
  Wrench,
  Zap,
} from "lucide-react";

import tmtImage from "../assets/images/products/prod-tmt.jpg";
import coilsImage from "../assets/images/products/prod-coils.jpg";
import pipesImage from "../assets/images/products/prod-pipes.jpg";
import structuralImage from "../assets/images/products/prod-structural.jpg";

import plantImage from "../assets/images/infrastructure/infra-plant.jpg";
import machineryImage from "../assets/images/infrastructure/infra-machinery.jpg";
import warehouseImage from "../assets/images/infrastructure/infra-warehouse.jpg";

import qualityImage from "../assets/images/quality/quality-lab.jpg";

import bridgeImage from "../assets/images/projects/project-bridge.jpg";
import constructionImage from "../assets/images/projects/project-construction.jpg";

export const statistics = [
  {
    value: 27,
    suffix: "+",
    label: "Years in Steel",
  },
  {
    value: 600000,
    suffix: " MT",
    label: "Annual Capacity",
  },
  {
    value: 1450,
    suffix: "+",
    label: "Projects Supplied",
  },
  {
    value: 18,
    suffix: "",
    label: "States Served",
  },
];

export const products = [
  {
    name: "TMT Reinforcement Bars",
    category: "Long Products",
    description:
      "High-strength thermo-mechanically treated rebar with superior bendability and earthquake resistance.",
    image: tmtImage,
    slug: "tmt-reinforcement-bars",
  },
  {
    name: "Hot & Cold Rolled Coils",
    category: "Flat Products",
    description:
      "Precision-gauge HR and CR coils with consistent metallurgy for forming, stamping and fabrication.",
    image: coilsImage,
    slug: "hot-cold-rolled-coils",
  },
  {
    name: "MS Pipes & Hollow Sections",
    category: "Tubular",
    description:
      "ERW round pipes, square and rectangular hollow sections engineered for structural and fluid-duty use.",
    image: pipesImage,
    slug: "ms-pipes-hollow-sections",
  },
  {
    name: "Structural Steel Sections",
    category: "Structurals",
    description:
      "Beams, channels, angles and plates for heavy structural frameworks and fabrication shops.",
    image: structuralImage,
    slug: "structural-steel-sections",
  },
];

export const industries = [
  {
    icon: Building2,
    name: "Construction & Real Estate",
    description:
      "Rebar, structurals and roofing systems supplied to residential, commercial and township projects.",
  },
  {
    icon: TrainFront,
    name: "Infrastructure & Bridges",
    description:
      "High-ductility steel for highways, metro corridors, flyovers and long-span bridge girders.",
  },
  {
    icon: Zap,
    name: "Energy & Power",
    description:
      "Transmission towers, boiler structures, solar mounting and plant frameworks built to endure.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description:
      "Steel products for machinery, fabrication lines, industrial sheds and production facilities.",
  },
  {
    icon: Wrench,
    name: "Oil, Gas & Water",
    description:
      "Pipes, hollow sections and fabricated steel for utility, process and distribution systems.",
  },
  {
    icon: Warehouse,
    name: "Agriculture & Irrigation",
    description:
      "Durable structural and tubular products for irrigation, storage and agricultural infrastructure.",
  },
];

export const trustedIndustries = [
  "Construction Companies",
  "Infrastructure Developers",
  "Engineering Firms",
  "Fabrication Units",
  "Real Estate Developers",
  "Manufacturing Companies",
  "Railway Contractors",
  "Power Projects",
  "Warehouse Developers",
  "Government Contractors",
];

export const infrastructureItems = [
  {
    title: "Integrated Rolling Mill",
    description:
      "Automated rolling lines, controlled stands and precise gauging support consistent metallurgy and dimensional accuracy.",
    image: machineryImage,
    icon: Gauge,
  },
  {
    title: "Manufacturing Campus",
    description:
      "An integrated campus supporting processing, finishing, testing, packaging and dispatch under one coordinated system.",
    image: plantImage,
    icon: Factory,
  },
  {
    title: "Warehousing & Logistics",
    description:
      "Organized storage, handling systems and dispatch planning support safe and timely pan-India delivery.",
    image: warehouseImage,
    icon: Warehouse,
  },
];

export const advantages = [
  {
    icon: ShieldCheck,
    title: "Certified Metallurgy",
    description:
      "Quality-controlled materials supported by testing, verification and batch traceability.",
  },
  {
    icon: Factory,
    title: "Integrated Capacity",
    description:
      "Processing, finishing, testing and dispatch are coordinated through one operational system.",
  },
  {
    icon: Truck,
    title: "On-Time Dispatch",
    description:
      "Organized inventory and logistics planning support dependable project delivery schedules.",
  },
  {
    icon: Gauge,
    title: "Custom Processing",
    description:
      "Cutting, sizing, finishing and specification support for project-specific requirements.",
  },
  {
    icon: HardHat,
    title: "Engineer-Led Support",
    description:
      "Technical assistance helps clients select suitable grades, dimensions and applications.",
  },
  {
    icon: Sparkles,
    title: "Responsible Production",
    description:
      "Efficient material usage, recycling and process discipline reduce waste across operations.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Requirement Review",
    description:
      "We review grade, size, quantity, application and delivery requirements.",
  },
  {
    number: "02",
    title: "Material Planning",
    description:
      "Products and specifications are mapped to the project requirement.",
  },
  {
    number: "03",
    title: "Quality Verification",
    description:
      "Materials are inspected and verified before processing and dispatch.",
  },
  {
    number: "04",
    title: "Processing & Packing",
    description:
      "Products are prepared, packed and labelled for safe movement.",
  },
  {
    number: "05",
    title: "Dispatch & Delivery",
    description:
      "Orders are coordinated through a dependable logistics network.",
  },
];

export const qualityPoints = [
  "Chemical composition analysis",
  "Dimensional inspection",
  "Strength and bend testing",
  "Surface quality verification",
  "Batch-level traceability",
  "Quality documentation",
];

export const projects = [
  {
    title: "National Highway Bridge Project",
    category: "Infrastructure",
    location: "South India",
    description:
      "Structural steel and reinforcement materials supplied for a major highway bridge development.",
    image: bridgeImage,
  },
  {
    title: "Commercial Construction Project",
    category: "Real Estate",
    location: "Bengaluru",
    description:
      "TMT bars and structural steel supplied for a modern commercial development.",
    image: constructionImage,
  },
];

export const testimonials = [
  {
    review:
      "Godavari Iron & Steel has consistently supported our projects with dependable material quality and timely delivery.",
    name: "Rajesh Kumar",
    role: "Project Director, Infrastructure Company",
  },
  {
    review:
      "Their team understands technical requirements clearly and provides reliable steel products for every project.",
    name: "Pradeep Reddy",
    role: "Managing Director, Construction Group",
  },
  {
    review:
      "Professional coordination, competitive pricing and consistent quality make them a valuable supply partner.",
    name: "Arun Sharma",
    role: "Purchase Head, Engineering Company",
  },
];

export const blogPosts = [
  {
    title: "How to Select the Right TMT Steel Grade",
    category: "Product Guide",
    date: "August 02, 2026",
    image: tmtImage,
  },
  {
    title: "Why Quality Testing Matters in Structural Steel",
    category: "Quality",
    date: "July 24, 2026",
    image: qualityImage,
  },
  {
    title: "Steel's Role in Modern Infrastructure Development",
    category: "Industry",
    date: "July 15, 2026",
    image: bridgeImage,
  },
];

export const media = {
  plantImage,
  machineryImage,
  warehouseImage,
  qualityImage,
};