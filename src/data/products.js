import tmtBarsImage from "../assets/images/products/generated/prod-tmt-bars.jpg";
import hrCrCoilsImage from "../assets/images/products/generated/prod-hr-cr-coils.jpg";
import msHollowPipesImage from "../assets/images/products/generated/prod-ms-hollow-pipes.jpg";
import structuralSectionsImage from "../assets/images/products/generated/prod-structural-sections.jpg";
import msChannelsImage from "../assets/images/products/generated/prod-ms-channels.jpg";
import msGiPipesImage from "../assets/images/products/generated/prod-ms-gi-pipes.jpg";
import coldRolledSheetsImage from "../assets/images/products/generated/prod-cold-rolled-sheets.jpg";
import roofingProfileSheetsImage from "../assets/images/products/generated/prod-roofing-profile-sheets.jpg";
import giCorrugatedSheetsImage from "../assets/images/products/generated/prod-gi-corrugated-sheets.jpg";
import hrSheetsPlatesImage from "../assets/images/products/generated/prod-hr-sheets-plates.jpg";
import wireRodsImage from "../assets/images/products/generated/prod-wire-rods.jpg";
import msEqualAnglesImage from "../assets/images/products/generated/prod-ms-equal-angles.jpg";
import squareHollowSectionsImage from "../assets/images/products/generated/prod-square-hollow-sections.jpg";
import iHBeamsImage from "../assets/images/products/generated/prod-i-h-beams.jpg";
import chequeredPlatesImage from "../assets/images/products/generated/prod-chequered-plates.jpg";

export const productCategories = [
  "All Products",
  "Long Products",
  "Flat Products",
  "Tubular Products",
  "Structural Products",
  "Sheets & Plates",
  "Wire Products",
];

export const products = [
  {
    id: 1,
    slug: "tmt-reinforcement-bars",
    name: "TMT Reinforcement Bars",
    shortName: "TMT Bars",
    category: "Long Products",
    image: tmtBarsImage,
    shortDescription:
      "High-strength reinforcement bars for concrete construction, structural stability and demanding infrastructure projects.",
    description:
      "TMT reinforcement bars provide a strong combination of strength, ductility, bendability and bond performance for reinforced concrete structures. They are suitable for residential, commercial and infrastructure applications where dependable structural performance is essential.",
    grades: ["Fe 500", "Fe 500D", "Fe 550", "Fe 550D"],
    sizes: ["8 mm", "10 mm", "12 mm", "16 mm", "20 mm", "25 mm", "32 mm"],
    benefits: [
      "High tensile strength",
      "Excellent concrete bonding",
      "Good bendability and ductility",
      "Suitable for seismic-zone construction",
    ],
    applications: [
      "Residential Buildings",
      "Commercial Structures",
      "Bridges & Flyovers",
      "Industrial Foundations",
      "Infrastructure Projects",
      "Precast Construction",
    ],
    specifications: [
      { label: "Product Type", value: "Thermo Mechanically Treated reinforcement bars" },
      { label: "Common Grades", value: "Fe 500, Fe 500D, Fe 550, Fe 550D" },
      { label: "Common Diameter Range", value: "8 mm to 32 mm" },
      { label: "Supply Form", value: "Straight lengths / project bundles" },
      { label: "Typical Standard", value: "IS 1786 or project-specified equivalent" },
    ],
  },
  {
    id: 2,
    slug: "hot-cold-rolled-coils",
    name: "Hot & Cold Rolled Coils",
    shortName: "HR / CR Coils",
    category: "Flat Products",
    image: hrCrCoilsImage,
    shortDescription:
      "Hot-rolled and cold-rolled steel coils for fabrication, automotive, engineering and industrial processing.",
    description:
      "HR and CR coils support a wide range of manufacturing and fabrication requirements. Hot-rolled coils are suitable for structural and general engineering work, while cold-rolled coils provide improved dimensional accuracy and surface finish.",
    grades: ["IS 2062", "IS 1079", "Commercial Quality", "Drawing Quality"],
    sizes: ["Custom Widths", "Project Thicknesses", "Coil Supply", "Cut-to-Length"],
    benefits: [
      "Wide industrial usability",
      "Consistent thickness options",
      "Suitable for downstream processing",
      "Available in project-specific widths",
    ],
    applications: [
      "Automotive Components",
      "General Fabrication",
      "Industrial Equipment",
      "Pipes & Tubes",
      "Storage Systems",
      "Engineering Components",
    ],
    specifications: [
      { label: "Product Type", value: "Hot-rolled and cold-rolled steel coils" },
      { label: "Supply Form", value: "Coils / slit coils / cut-to-length support" },
      { label: "Thickness", value: "Project-specific availability" },
      { label: "Width", value: "Standard and custom widths" },
    ],
  },
  {
    id: 3,
    slug: "ms-pipes-hollow-sections",
    name: "MS Pipes & Hollow Sections",
    shortName: "MS Hollow Sections",
    category: "Tubular Products",
    image: msHollowPipesImage,
    shortDescription:
      "Mild-steel pipes and hollow sections for structures, fabrication, utilities and engineering projects.",
    description:
      "MS pipes and hollow structural sections are widely used where strength, fabrication flexibility and efficient structural geometry are required. Options can include round, square and rectangular profiles.",
    grades: ["IS 1161", "IS 4923", "Commercial Grade"],
    sizes: ["Round", "Square", "Rectangular", "Project Sizes"],
    benefits: [
      "Efficient structural geometry",
      "Easy fabrication and welding",
      "Multiple profile options",
      "Suitable for indoor and outdoor projects",
    ],
    applications: [
      "Industrial Sheds",
      "Fabricated Structures",
      "Railings & Frames",
      "Warehousing",
      "Engineering Projects",
      "Utility Structures",
    ],
    specifications: [
      { label: "Profiles", value: "Round, square and rectangular" },
      { label: "Supply", value: "Standard lengths and bulk/project quantities" },
      { label: "Processing", value: "Cutting and project-specific preparation available" },
    ],
  },
  {
    id: 4,
    slug: "structural-steel-sections",
    name: "Structural Steel Sections",
    shortName: "Structural Sections",
    category: "Structural Products",
    image: structuralSectionsImage,
    shortDescription:
      "Beams, channels and structural profiles designed for load-bearing construction and engineering applications.",
    description:
      "Structural steel sections provide the strength and geometry required for industrial buildings, commercial structures, infrastructure frameworks and heavy fabrication. Product selection depends on load, span and engineering requirements.",
    grades: ["IS 2062 E250", "IS 2062 E350", "Project Grade"],
    sizes: ["Beams", "Channels", "Columns", "Custom Sections"],
    benefits: [
      "High load-bearing capability",
      "Reliable fabrication performance",
      "Wide structural application range",
      "Project-specific section selection",
    ],
    applications: [
      "Industrial Buildings",
      "Warehouses",
      "Commercial Structures",
      "Bridges",
      "Fabrication",
      "Heavy Engineering",
    ],
    specifications: [
      { label: "Section Types", value: "Beams, channels, columns and structural profiles" },
      { label: "Grades", value: "IS 2062 grades and project-specific options" },
      { label: "Supply", value: "Standard lengths / project quantities" },
    ],
  },
  {
    id: 5,
    slug: "mild-steel-channels",
    name: "Mild Steel Channels",
    shortName: "MS Channels",
    category: "Structural Products",
    image: msChannelsImage,
    shortDescription:
      "MS channels for structural frames, supports, fabrication, industrial sheds and engineering assemblies.",
    description:
      "Mild steel channels are versatile structural profiles used for framing, bracing, supporting and fabrication work. They offer straightforward welding, bolting and machining for site and workshop applications.",
    grades: ["IS 2062", "Commercial Grade"],
    sizes: ["ISMC Profiles", "Light Channels", "Heavy Channels"],
    benefits: [
      "Strong section geometry",
      "Easy welding and fabrication",
      "Suitable for frames and supports",
      "Available in multiple sizes",
    ],
    applications: [
      "Industrial Frames",
      "Platform Supports",
      "Warehouse Structures",
      "General Fabrication",
      "Machinery Supports",
      "Construction",
    ],
    specifications: [
      { label: "Profile", value: "Channel sections / ISMC-type profiles" },
      { label: "Grade", value: "IS 2062 and commercial grades" },
      { label: "Length", value: "Standard and project-specific lengths" },
    ],
  },
  {
    id: 6,
    slug: "ms-gi-pipes",
    name: "MS Pipes & GI Pipes",
    shortName: "MS / GI Pipes",
    category: "Tubular Products",
    image: msGiPipesImage,
    shortDescription:
      "Mild-steel and galvanized pipes for structural, utility, fabrication and general industrial use.",
    description:
      "MS and GI pipes are suitable for structural frames, utility lines, fabrication work and general engineering. Galvanized options provide an additional protective zinc coating for improved corrosion resistance.",
    grades: ["ERW", "Galvanized", "Commercial Grade"],
    sizes: ["Light", "Medium", "Heavy", "Project Sizes"],
    benefits: [
      "Multiple wall-thickness options",
      "Good fabrication characteristics",
      "GI options for corrosion resistance",
      "Suitable for structural and utility use",
    ],
    applications: [
      "Structural Frames",
      "Water & Utility Lines",
      "Fencing",
      "Industrial Fabrication",
      "Scaffolding",
      "General Engineering",
    ],
    specifications: [
      { label: "Product Types", value: "MS ERW pipes and GI pipes" },
      { label: "Finish", value: "Black / galvanized" },
      { label: "Supply", value: "Standard lengths and project quantities" },
    ],
  },
  {
    id: 7,
    slug: "cold-rolled-sheets",
    name: "Cold Rolled Sheets",
    shortName: "CR Sheets",
    category: "Sheets & Plates",
    image: coldRolledSheetsImage,
    shortDescription:
      "Smooth, dimensionally consistent cold-rolled sheets for precision fabrication and finished components.",
    description:
      "Cold-rolled sheets are selected for applications that benefit from improved surface finish, dimensional consistency and forming characteristics. They are widely used in appliances, enclosures, automotive parts and precision fabrication.",
    grades: ["IS 513", "Commercial Quality", "Drawing Quality"],
    sizes: ["Standard Sheets", "Custom Cut Sizes", "Project Thicknesses"],
    benefits: [
      "Smooth surface finish",
      "Good dimensional accuracy",
      "Suitable for forming",
      "Ideal for finished components",
    ],
    applications: [
      "Electrical Enclosures",
      "Automotive Parts",
      "Furniture",
      "Appliances",
      "Precision Fabrication",
      "General Engineering",
    ],
    specifications: [
      { label: "Product", value: "Cold-rolled steel sheets" },
      { label: "Finish", value: "Smooth mill finish" },
      { label: "Thickness", value: "Subject to grade and availability" },
    ],
  },
  {
    id: 8,
    slug: "roofing-profile-sheets",
    name: "Roofing Profile Sheets",
    shortName: "Profile Sheets",
    category: "Sheets & Plates",
    image: roofingProfileSheetsImage,
    shortDescription:
      "Profiled steel roofing sheets for industrial sheds, warehouses, commercial roofs and cladding applications.",
    description:
      "Profile roofing sheets combine lightweight handling with effective coverage for industrial and commercial roof systems. Profiles can be selected to suit span, drainage and cladding requirements.",
    grades: ["Galvanized", "Color Coated", "Project Grade"],
    sizes: ["Standard Profiles", "Custom Lengths", "Roofing Profiles"],
    benefits: [
      "Fast installation",
      "Good roof coverage",
      "Lightweight handling",
      "Multiple profile options",
    ],
    applications: [
      "Industrial Roofing",
      "Warehouses",
      "Factory Sheds",
      "Commercial Roofing",
      "Wall Cladding",
      "Canopies",
    ],
    specifications: [
      { label: "Profile", value: "Corrugated / trapezoidal / project-specific profiles" },
      { label: "Finish", value: "Galvanized or coated options" },
      { label: "Length", value: "Standard and custom project lengths" },
    ],
  },
  {
    id: 9,
    slug: "galvanized-corrugated-sheets",
    name: "Galvanized Corrugated Sheets",
    shortName: "GI Corrugated Sheets",
    category: "Sheets & Plates",
    image: giCorrugatedSheetsImage,
    shortDescription:
      "Zinc-coated corrugated steel sheets for roofing, cladding, shelters and industrial buildings.",
    description:
      "Galvanized corrugated sheets are formed to provide stiffness and efficient drainage while the zinc coating provides protection against corrosion. They are commonly used for roofing and cladding in industrial and commercial buildings.",
    grades: ["GI", "Zinc Coated", "Commercial Grade"],
    sizes: ["Standard Widths", "Custom Lengths", "Multiple Thicknesses"],
    benefits: [
      "Corrosion-resistant surface",
      "Good rigidity",
      "Efficient drainage profile",
      "Suitable for rapid installation",
    ],
    applications: [
      "Industrial Sheds",
      "Warehouses",
      "Temporary Structures",
      "Commercial Roofing",
      "Wall Cladding",
      "Agricultural Buildings",
    ],
    specifications: [
      { label: "Coating", value: "Galvanized zinc-coated steel" },
      { label: "Profile", value: "Corrugated" },
      { label: "Supply", value: "Sheets cut to project requirements" },
    ],
  },
  {
    id: 10,
    slug: "hot-rolled-steel-sheets-plates",
    name: "Hot Rolled Steel Sheets & Plates",
    shortName: "HR Sheets & Plates",
    category: "Sheets & Plates",
    image: hrSheetsPlatesImage,
    shortDescription:
      "Hot-rolled sheets and plates for fabrication, structures, machinery, tanks and industrial projects.",
    description:
      "Hot-rolled sheets and plates provide dependable material for structural fabrication, machinery, storage systems and general engineering. Different thicknesses and grades can be selected according to the final application.",
    grades: ["IS 2062 E250", "IS 2062 E350", "IS 1079"],
    sizes: ["Sheets", "Plates", "Custom Cut Sizes"],
    benefits: [
      "Suitable for heavy fabrication",
      "Multiple thickness options",
      "Good weldability",
      "Available for project-based cutting",
    ],
    applications: [
      "Heavy Fabrication",
      "Storage Tanks",
      "Machine Bases",
      "Structural Work",
      "Industrial Equipment",
      "General Engineering",
    ],
    specifications: [
      { label: "Product", value: "Hot-rolled sheets and plates" },
      { label: "Grades", value: "IS 2062 / IS 1079 and project-specific grades" },
      { label: "Processing", value: "Cut-to-size support available" },
    ],
  },
  {
    id: 11,
    slug: "steel-wire-rods",
    name: "Steel Wire Rods",
    shortName: "Wire Rods",
    category: "Wire Products",
    image: wireRodsImage,
    shortDescription:
      "Steel wire rods for wire drawing, fasteners, mesh, fabrication and downstream manufacturing.",
    description:
      "Steel wire rods are supplied as coiled long products for downstream conversion into wire, fasteners, mesh and other manufactured components. Grade selection depends on the intended drawing and end-use requirements.",
    grades: ["Mild Steel", "Drawing Grade", "Project Grade"],
    sizes: ["Coil Supply", "Multiple Diameters"],
    benefits: [
      "Suitable for wire drawing",
      "Continuous coil supply",
      "Multiple downstream applications",
      "Consistent processing feedstock",
    ],
    applications: [
      "Wire Drawing",
      "Fasteners",
      "Wire Mesh",
      "Fabrication",
      "General Manufacturing",
      "Industrial Components",
    ],
    specifications: [
      { label: "Supply Form", value: "Coiled wire rod" },
      { label: "Diameter", value: "Subject to grade and availability" },
      { label: "Use", value: "Wire drawing and downstream conversion" },
    ],
  },
  {
    id: 12,
    slug: "mild-steel-equal-angles",
    name: "Mild Steel Equal Angles",
    shortName: "MS Angles",
    category: "Structural Products",
    image: msEqualAnglesImage,
    shortDescription:
      "Equal-angle steel sections for towers, frames, supports, trusses and general structural fabrication.",
    description:
      "MS equal angles are widely used in frames, bracing, racks, towers and fabrication because of their simple geometry and strong corner profile. They are suitable for welding, bolting and site assembly.",
    grades: ["IS 2062", "Commercial Grade"],
    sizes: ["Equal Angles", "Multiple Leg Sizes", "Project Thicknesses"],
    benefits: [
      "Versatile structural profile",
      "Easy fabrication",
      "Good bracing performance",
      "Wide range of sizes",
    ],
    applications: [
      "Transmission Structures",
      "Industrial Frames",
      "Trusses",
      "Racks",
      "General Fabrication",
      "Support Structures",
    ],
    specifications: [
      { label: "Profile", value: "Equal-leg angle sections" },
      { label: "Grade", value: "IS 2062 and commercial grades" },
      { label: "Supply", value: "Standard lengths / project quantities" },
    ],
  },
  {
    id: 13,
    slug: "square-hollow-sections",
    name: "Square Hollow Sections",
    shortName: "SHS",
    category: "Tubular Products",
    image: squareHollowSectionsImage,
    shortDescription:
      "Square hollow structural sections for architectural steelwork, frames, industrial structures and fabrication.",
    description:
      "Square hollow sections provide clean geometry and efficient structural performance for frames, architectural work, industrial structures and general fabrication. The closed section offers good stiffness in multiple directions.",
    grades: ["IS 4923", "Structural Grade", "Commercial Grade"],
    sizes: ["Square Profiles", "Multiple Wall Thicknesses", "Project Sizes"],
    benefits: [
      "Clean architectural appearance",
      "Efficient torsional stiffness",
      "Easy frame fabrication",
      "Multiple section sizes",
    ],
    applications: [
      "Architectural Frames",
      "Industrial Structures",
      "Gates & Railings",
      "Warehouses",
      "Equipment Frames",
      "General Fabrication",
    ],
    specifications: [
      { label: "Profile", value: "Square hollow sections" },
      { label: "Standard", value: "IS 4923 or project-specific equivalent" },
      { label: "Supply", value: "Standard lengths / bulk project supply" },
    ],
  },
  {
    id: 14,
    slug: "i-beams-h-beams",
    name: "I Beams & H Beams",
    shortName: "I / H Beams",
    category: "Structural Products",
    image: iHBeamsImage,
    shortDescription:
      "Heavy structural beams for industrial buildings, bridges, columns, platforms and load-bearing frames.",
    description:
      "I and H beams are primary structural members used to carry bending and axial loads in buildings, bridges, platforms and industrial structures. Section selection should follow engineering design and load requirements.",
    grades: ["IS 2062 E250", "IS 2062 E350", "Project Grade"],
    sizes: ["I Sections", "H Sections", "Multiple Depths"],
    benefits: [
      "High load-carrying capacity",
      "Efficient bending resistance",
      "Suitable for heavy structures",
      "Multiple section sizes",
    ],
    applications: [
      "Industrial Buildings",
      "Bridges",
      "Heavy Platforms",
      "Columns",
      "Warehouses",
      "Infrastructure",
    ],
    specifications: [
      { label: "Profiles", value: "I-beam and H-beam structural sections" },
      { label: "Grade", value: "IS 2062 grades and project-specific options" },
      { label: "Supply", value: "Standard lengths / project quantities" },
    ],
  },
  {
    id: 15,
    slug: "chequered-steel-plates",
    name: "Chequered Steel Plates",
    shortName: "Chequered Plates",
    category: "Sheets & Plates",
    image: chequeredPlatesImage,
    shortDescription:
      "Patterned steel plates for industrial flooring, platforms, stairs, walkways and anti-slip surfaces.",
    description:
      "Chequered plates feature a raised surface pattern that improves grip for industrial floors, platforms, stair treads and access areas. They combine structural durability with practical anti-slip performance.",
    grades: ["Mild Steel", "IS 2062", "Commercial Grade"],
    sizes: ["Standard Plates", "Custom Cut Sizes", "Multiple Thicknesses"],
    benefits: [
      "Improved surface grip",
      "Durable industrial flooring",
      "Easy fabrication and cutting",
      "Suitable for heavy-use access areas",
    ],
    applications: [
      "Industrial Flooring",
      "Walkways",
      "Stair Treads",
      "Platforms",
      "Vehicle Floors",
      "Access Areas",
    ],
    specifications: [
      { label: "Surface", value: "Raised chequered anti-slip pattern" },
      { label: "Material", value: "Mild steel / project-specified grade" },
      { label: "Processing", value: "Cut-to-size options available" },
    ],
  },
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug, limit = 3) {
  const currentProduct = getProductBySlug(slug);

  if (!currentProduct) {
    return products.slice(0, limit);
  }

  const sameCategory = products.filter(
    (product) =>
      product.slug !== slug &&
      product.category === currentProduct.category
  );

  const otherProducts = products.filter(
    (product) =>
      product.slug !== slug &&
      product.category !== currentProduct.category
  );

  return [...sameCategory, ...otherProducts].slice(0, limit);
}
