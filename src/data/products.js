import tmtImage from "../assets/images/products/prod-tmt.jpg";
import coilsImage from "../assets/images/products/prod-coils.jpg";
import pipesImage from "../assets/images/products/prod-pipes.jpg";
import structuralImage from "../assets/images/products/prod-structural.jpg";

export const productCategories = [
  "All Products",
  "Long Products",
  "Flat Products",
  "Tubular Products",
  "Structural Products",
];

export const products = [
  {
    id: 1,
    slug: "tmt-reinforcement-bars",
    name: "TMT Reinforcement Bars",
    shortName: "TMT Bars",
    category: "Long Products",
    image: tmtImage,

    shortDescription:
      "High-strength thermo-mechanically treated reinforcement bars for residential, commercial and infrastructure construction.",

    description:
      "Godavari TMT reinforcement bars are engineered for strength, ductility, weldability and dependable bonding with concrete. They are suitable for residential buildings, commercial developments, bridges, highways and major infrastructure projects.",

    grades: ["Fe 500", "Fe 500D", "Fe 550", "Fe 550D"],

    sizes: [
      "8 mm",
      "10 mm",
      "12 mm",
      "16 mm",
      "20 mm",
      "25 mm",
      "28 mm",
      "32 mm",
    ],

    benefits: [
      "High tensile strength",
      "Superior ductility",
      "Strong concrete bonding",
      "Earthquake-resistant performance",
      "Excellent bendability",
      "Consistent dimensional accuracy",
    ],

    applications: [
      "Residential construction",
      "Commercial buildings",
      "Bridges and flyovers",
      "Highways and metro projects",
      "Industrial structures",
      "Government infrastructure",
    ],

    specifications: [
      {
        label: "Product Type",
        value: "Thermo-Mechanically Treated Reinforcement Bars",
      },
      {
        label: "Available Grades",
        value: "Fe 500, Fe 500D, Fe 550 and Fe 550D",
      },
      {
        label: "Diameter Range",
        value: "8 mm to 32 mm",
      },
      {
        label: "Standard Length",
        value: "12 metres",
      },
      {
        label: "Surface",
        value: "Ribbed reinforcement profile",
      },
      {
        label: "Applications",
        value: "Construction and infrastructure reinforcement",
      },
    ],
  },

  {
    id: 2,
    slug: "hot-cold-rolled-coils",
    name: "Hot & Cold Rolled Coils",
    shortName: "Steel Coils",
    category: "Flat Products",
    image: coilsImage,

    shortDescription:
      "Precision hot-rolled and cold-rolled steel coils for forming, fabrication, manufacturing and industrial applications.",

    description:
      "Our hot-rolled and cold-rolled steel coils are supplied for manufacturing, engineering, forming, stamping and fabrication requirements. The products are selected for dimensional consistency, surface quality and reliable processing performance.",

    grades: ["Commercial Grade", "Structural Grade", "Drawing Grade"],

    sizes: [
      "Custom thickness",
      "Custom width",
      "Coil form",
      "Sheet conversion available",
    ],

    benefits: [
      "Consistent thickness",
      "Good surface finish",
      "Reliable forming performance",
      "Suitable for fabrication",
      "Available in multiple widths",
      "Project-specific processing",
    ],

    applications: [
      "Automotive components",
      "Industrial fabrication",
      "Machinery manufacturing",
      "Electrical enclosures",
      "Storage systems",
      "General engineering",
    ],

    specifications: [
      {
        label: "Product Type",
        value: "Hot-Rolled and Cold-Rolled Steel Coils",
      },
      {
        label: "Available Form",
        value: "Coils and processed sheets",
      },
      {
        label: "Thickness",
        value: "Available according to project requirement",
      },
      {
        label: "Width",
        value: "Standard and custom widths",
      },
      {
        label: "Surface",
        value: "Mill finish or processed surface",
      },
      {
        label: "Applications",
        value: "Manufacturing, fabrication and engineering",
      },
    ],
  },

  {
    id: 3,
    slug: "ms-pipes-hollow-sections",
    name: "MS Pipes & Hollow Sections",
    shortName: "MS Pipes",
    category: "Tubular Products",
    image: pipesImage,

    shortDescription:
      "ERW round pipes, square hollow sections and rectangular hollow sections for structural and industrial use.",

    description:
      "Godavari MS pipes and hollow sections are suitable for fabrication, structural frameworks, industrial buildings, utility systems and engineering projects. Products are supplied in round, square and rectangular profiles.",

    grades: ["Commercial Grade", "Structural Grade", "Project Grade"],

    sizes: [
      "Round Pipes",
      "Square Hollow Sections",
      "Rectangular Hollow Sections",
      "Custom cutting available",
    ],

    benefits: [
      "High structural strength",
      "Consistent wall thickness",
      "Accurate dimensions",
      "Easy fabrication",
      "Multiple profile options",
      "Suitable for welding",
    ],

    applications: [
      "Industrial sheds",
      "Structural frameworks",
      "Fabrication projects",
      "Warehouses",
      "Railings and supports",
      "Utility applications",
    ],

    specifications: [
      {
        label: "Product Type",
        value: "ERW Pipes and Hollow Structural Sections",
      },
      {
        label: "Available Profiles",
        value: "Round, square and rectangular",
      },
      {
        label: "Length",
        value: "Standard and project-specific lengths",
      },
      {
        label: "Wall Thickness",
        value: "Multiple thickness options",
      },
      {
        label: "Processing",
        value: "Cutting and project-specific preparation available",
      },
      {
        label: "Applications",
        value: "Structural, fabrication and industrial use",
      },
    ],
  },

  {
    id: 4,
    slug: "structural-steel-sections",
    name: "Structural Steel Sections",
    shortName: "Structural Steel",
    category: "Structural Products",
    image: structuralImage,

    shortDescription:
      "Beams, channels, angles and structural sections for industrial buildings, fabrication and infrastructure projects.",

    description:
      "Our structural steel range supports industrial sheds, commercial buildings, infrastructure development and heavy fabrication requirements. Products are supplied with a focus on strength, dimensional accuracy and dependable availability.",

    grades: ["Commercial Grade", "Structural Grade", "Heavy-Duty Grade"],

    sizes: [
      "I-Beams",
      "Channels",
      "Angles",
      "Plates",
      "Custom cutting available",
    ],

    benefits: [
      "Reliable structural strength",
      "Multiple section profiles",
      "Suitable for heavy fabrication",
      "Consistent dimensions",
      "Project-specific cutting",
      "Wide industrial applications",
    ],

    applications: [
      "Industrial buildings",
      "Commercial structures",
      "Factories and warehouses",
      "Bridges and infrastructure",
      "Heavy fabrication",
      "Engineering projects",
    ],

    specifications: [
      {
        label: "Product Type",
        value: "Structural steel beams, channels, angles and plates",
      },
      {
        label: "Available Sections",
        value: "Beams, channels, angles and plates",
      },
      {
        label: "Length",
        value: "Standard and customised lengths",
      },
      {
        label: "Processing",
        value: "Cutting and project preparation available",
      },
      {
        label: "Supply",
        value: "Bulk and project-based supply",
      },
      {
        label: "Applications",
        value: "Construction, fabrication and infrastructure",
      },
    ],
  },
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug, limit = 3) {
  return products
    .filter((product) => product.slug !== slug)
    .slice(0, limit);
}