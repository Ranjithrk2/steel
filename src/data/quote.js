import {
  Building2,
  CheckCircle2,
  Factory,
  FileText,
  MapPin,
  PackageCheck,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  Truck,
  UserRound,
} from "lucide-react";

export const quoteProductOptions = [
  "TMT Reinforcement Bars",
  "Hot Rolled Coils",
  "Cold Rolled Coils",
  "MS Pipes",
  "Square Hollow Sections",
  "Rectangular Hollow Sections",
  "Structural Steel Sections",
  "Steel Plates",
  "Multiple Products",
  "Other Requirement",
];

export const quoteProjectTypes = [
  "Construction Project",
  "Infrastructure Project",
  "Industrial Project",
  "Warehouse / Logistics Project",
  "Energy / Power Project",
  "Government Project",
  "Fabrication Requirement",
  "Dealer / Distributor Requirement",
  "General Procurement",
];

export const quoteUnits = [
  "Kilograms",
  "Metric Tonnes",
  "Pieces",
  "Bundles",
  "Length",
];

export const quoteSteps = [
  {
    icon: FileText,
    number: "01",
    title: "Share Requirement",
    description:
      "Submit product, grade, dimensions, quantity and delivery details.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Technical Review",
    description:
      "Our team reviews the application and confirms the supply requirement.",
  },
  {
    icon: PackageCheck,
    number: "03",
    title: "Commercial Proposal",
    description:
      "A suitable quotation is prepared based on product and delivery details.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Supply Coordination",
    description:
      "Order processing, packing and dispatch are coordinated after confirmation.",
  },
];

export const quoteBenefits = [
  {
    icon: Ruler,
    title: "Specification-Focused",
    description:
      "Grade, size, profile and quantity are reviewed before quotation.",
  },
  {
    icon: Factory,
    title: "Processing Support",
    description:
      "Cutting, sizing and project-specific preparation can be coordinated.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Verification",
    description:
      "Product and order details are checked before dispatch.",
  },
  {
    icon: Truck,
    title: "Delivery Planning",
    description:
      "Location, schedule and phased supply requirements are considered.",
  },
];

export const quoteContact = {
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  email: "info@godavariironsteel.com",
  address:
    "Plot 14, Industrial Growth Centre, Rajahmundry, Andhra Pradesh, India",
};

export const quoteHighlights = [
  {
    icon: UserRound,
    label: "Dedicated Support",
  },
  {
    icon: Building2,
    label: "Project-Based Supply",
  },
  {
    icon: CheckCircle2,
    label: "Clear Requirement Review",
  },
  {
    icon: Phone,
    label: "Fast Team Response",
  },
  {
    icon: MapPin,
    label: "Pan-India Coordination",
  },
  {
    icon: Send,
    label: "Simple Enquiry Process",
  },
];
