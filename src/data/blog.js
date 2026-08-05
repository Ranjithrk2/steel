import {
  BookOpen,
  Building2,
  Factory,
  Gauge,
  Newspaper,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

import tmtImage from "../assets/images/products/prod-tmt.jpg";
import coilsImage from "../assets/images/products/prod-coils.jpg";
import pipesImage from "../assets/images/products/prod-pipes.jpg";
import structuralImage from "../assets/images/products/prod-structural.jpg";
import qualityImage from "../assets/images/quality/quality-lab.jpg";
import bridgeImage from "../assets/images/projects/project-bridge.jpg";
import constructionImage from "../assets/images/projects/project-construction.jpg";
import plantImage from "../assets/images/infrastructure/infra-plant.jpg";

export const blogCategories = [
  "All Articles",
  "Product Guides",
  "Quality",
  "Infrastructure",
  "Construction",
  "Industry Insights",
];

export const blogPosts = [
  {
    id: 1,
    slug: "how-to-select-the-right-tmt-steel-grade",
    title: "How to Select the Right TMT Steel Grade",
    excerpt:
      "A practical guide to understanding TMT grades, applications and the factors that influence product selection.",
    category: "Product Guides",
    date: "August 02, 2026",
    readingTime: "6 min read",
    author: "Godavari Technical Team",
    image: tmtImage,
    icon: Gauge,
    featured: true,
  },
  {
    id: 2,
    slug: "why-quality-testing-matters-in-structural-steel",
    title: "Why Quality Testing Matters in Structural Steel",
    excerpt:
      "Understand how dimensional, surface and specification checks help support dependable steel supply.",
    category: "Quality",
    date: "July 24, 2026",
    readingTime: "5 min read",
    author: "Quality Assurance Team",
    image: qualityImage,
    icon: ShieldCheck,
    featured: false,
  },
  {
    id: 3,
    slug: "steels-role-in-modern-infrastructure-development",
    title: "Steel's Role in Modern Infrastructure Development",
    excerpt:
      "Explore how steel supports bridges, highways, metro corridors and large public-development projects.",
    category: "Infrastructure",
    date: "July 15, 2026",
    readingTime: "7 min read",
    author: "Infrastructure Desk",
    image: bridgeImage,
    icon: Building2,
    featured: false,
  },
  {
    id: 4,
    slug: "hot-rolled-vs-cold-rolled-steel-coils",
    title: "Hot-Rolled vs Cold-Rolled Steel Coils",
    excerpt:
      "A simple comparison of HR and CR coils, their surface characteristics and common industrial uses.",
    category: "Product Guides",
    date: "July 08, 2026",
    readingTime: "6 min read",
    author: "Product Team",
    image: coilsImage,
    icon: Factory,
    featured: false,
  },
  {
    id: 5,
    slug: "choosing-ms-pipes-and-hollow-sections",
    title: "Choosing MS Pipes and Hollow Sections",
    excerpt:
      "Key points to consider when selecting round, square and rectangular hollow sections for projects.",
    category: "Product Guides",
    date: "June 30, 2026",
    readingTime: "5 min read",
    author: "Engineering Support Team",
    image: pipesImage,
    icon: Wrench,
    featured: false,
  },
  {
    id: 6,
    slug: "structural-steel-for-industrial-buildings",
    title: "Structural Steel for Industrial Buildings",
    excerpt:
      "How beams, channels, angles and plates support factories, warehouses and heavy industrial structures.",
    category: "Construction",
    date: "June 19, 2026",
    readingTime: "7 min read",
    author: "Project Support Team",
    image: structuralImage,
    icon: Building2,
    featured: false,
  },
  {
    id: 7,
    slug: "planning-steel-supply-for-large-projects",
    title: "Planning Steel Supply for Large Projects",
    excerpt:
      "Why phased dispatch, inventory coordination and project scheduling matter in large-scale supply.",
    category: "Industry Insights",
    date: "June 10, 2026",
    readingTime: "6 min read",
    author: "Operations Team",
    image: constructionImage,
    icon: Newspaper,
    featured: false,
  },
  {
    id: 8,
    slug: "inside-an-integrated-steel-supply-workflow",
    title: "Inside an Integrated Steel Supply Workflow",
    excerpt:
      "A look at how processing, quality verification, warehousing and dispatch work together.",
    category: "Industry Insights",
    date: "May 28, 2026",
    readingTime: "8 min read",
    author: "Godavari Operations Team",
    image: plantImage,
    icon: Sparkles,
    featured: false,
  },
];

export const blogStats = [
  {
    value: "8+",
    label: "Industry Articles",
  },
  {
    value: "6",
    label: "Knowledge Categories",
  },
  {
    value: "27+",
    label: "Years of Experience",
  },
  {
    value: "18",
    label: "States Served",
  },
];

export const knowledgeAreas = [
  {
    icon: BookOpen,
    title: "Product Education",
    description:
      "Guides covering steel grades, profiles, sizes and product-selection considerations.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Knowledge",
    description:
      "Practical information about inspection, specification checks and traceable supply.",
  },
  {
    icon: Building2,
    title: "Project Insights",
    description:
      "Articles on construction, infrastructure and coordinated project steel supply.",
  },
  {
    icon: Factory,
    title: "Industrial Expertise",
    description:
      "Content focused on processing, warehousing, logistics and steel applications.",
  },
];

export const blogMedia = {
  tmtImage,
  coilsImage,
  pipesImage,
  structuralImage,
  qualityImage,
  bridgeImage,
  constructionImage,
  plantImage,
};

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug, limit = 3) {
  return blogPosts
    .filter((post) => post.slug !== slug)
    .slice(0, limit);
}
