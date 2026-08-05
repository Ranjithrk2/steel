import {
  BadgeCheck,
  Beaker,
  ClipboardCheck,
  FileCheck2,
  Gauge,
  Microscope,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import qualityImage from "../assets/images/quality/quality-lab.jpg";
import machineryImage from "../assets/images/infrastructure/infra-machinery.jpg";
import plantImage from "../assets/images/infrastructure/infra-plant.jpg";
import warehouseImage from "../assets/images/infrastructure/infra-warehouse.jpg";

export const qualityStats = [
  {
    value: "100%",
    label: "Pre-Dispatch Verification",
  },
  {
    value: "6",
    label: "Core Quality Checks",
  },
  {
    value: "27+",
    label: "Years of Industry Experience",
  },
  {
    value: "1,450+",
    label: "Projects Supplied",
  },
];

export const qualityChecks = [
  {
    icon: Beaker,
    title: "Chemical Composition Review",
    description:
      "Material chemistry and supporting product information are reviewed according to the applicable requirement.",
  },
  {
    icon: Gauge,
    title: "Strength Verification",
    description:
      "Product strength characteristics and available supporting test information are checked before supply.",
  },
  {
    icon: Ruler,
    title: "Dimensional Inspection",
    description:
      "Diameter, thickness, width, length and profile dimensions are verified against the confirmed order.",
  },
  {
    icon: Sparkles,
    title: "Surface Condition Check",
    description:
      "Visible product condition, finish and handling quality are reviewed before packing and dispatch.",
  },
  {
    icon: FileCheck2,
    title: "Batch Traceability",
    description:
      "Material identification and relevant batch information are maintained for dependable order tracking.",
  },
  {
    icon: PackageCheck,
    title: "Dispatch Verification",
    description:
      "Final packing, labelling, quantity and loading condition are checked before transportation.",
  },
];

export const qualityProcess = [
  {
    number: "01",
    title: "Requirement Confirmation",
    description:
      "The required product, grade, size, quantity and application are confirmed before order processing.",
  },
  {
    number: "02",
    title: "Material Identification",
    description:
      "The selected material is identified and matched with the confirmed order requirement.",
  },
  {
    number: "03",
    title: "Dimensional Check",
    description:
      "Product dimensions and profiles are reviewed before further processing or packing.",
  },
  {
    number: "04",
    title: "Condition Inspection",
    description:
      "Surface condition, visible defects and product handling quality are checked.",
  },
  {
    number: "05",
    title: "Documentation Review",
    description:
      "Relevant order, batch and quality-supporting information is reviewed before release.",
  },
  {
    number: "06",
    title: "Final Dispatch Approval",
    description:
      "Packing, labelling and loading readiness are confirmed before dispatch.",
  },
];

export const qualityPrinciples = [
  {
    icon: ShieldCheck,
    title: "Quality Discipline",
    description:
      "Every order is handled through a structured verification process before dispatch.",
  },
  {
    icon: ClipboardCheck,
    title: "Order Accuracy",
    description:
      "Grade, size, profile, quantity and product details are matched against the confirmed requirement.",
  },
  {
    icon: BadgeCheck,
    title: "Traceable Supply",
    description:
      "Material identification and order records support dependable product traceability.",
  },
];

export const certifications = [
  "Product identification and batch records",
  "Dimensional verification support",
  "Surface and condition inspection",
  "Order specification matching",
  "Packing and loading verification",
  "Quality documentation support",
];

export const qualityMedia = {
  qualityImage,
  machineryImage,
  plantImage,
  warehouseImage,
};
