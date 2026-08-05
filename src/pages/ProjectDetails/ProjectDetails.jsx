import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Factory,
  FileCheck2,
  HardHat,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

import {
  projects,
  projectMedia,
  projectWorkflow,
} from "../../data/projects";

import "./ProjectDetails.css";

const projectFacts = [
  {
    icon: Building2,
    label: "Project Type",
    key: "category",
  },
  {
    icon: MapPin,
    label: "Location",
    key: "location",
  },
  {
    icon: CalendarDays,
    label: "Supply Model",
    value: "Phased Project Supply",
  },
  {
    icon: ShieldCheck,
    label: "Quality Focus",
    value: "Verified Before Dispatch",
  },
];

const deliverySupport = [
  {
    icon: HardHat,
    title: "Requirement Planning",
    description:
      "Product grades, sizes, quantities and project schedules are reviewed before supply planning.",
  },
  {
    icon: Factory,
    title: "Processing Coordination",
    description:
      "Cutting, sizing and project-specific preparation are coordinated where required.",
  },
  {
    icon: FileCheck2,
    title: "Quality Verification",
    description:
      "Order specifications, product condition and dimensional details are checked before release.",
  },
  {
    icon: PackageCheck,
    title: "Packing & Identification",
    description:
      "Products are bundled, labelled and prepared for safe site delivery.",
  },
  {
    icon: Truck,
    title: "Phased Dispatch",
    description:
      "Material movement is coordinated according to project and site requirements.",
  },
];

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return <ProjectNotFound />;
  }

  const relatedProjects = projects
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <main className="project-details-page">
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectHighlights project={project} />
      <ProductsSupplied project={project} />
      <ProjectGallery project={project} />
      <SupplySupport />
      <ProjectWorkflow />
      <RelatedProjects projects={relatedProjects} />
      <ProjectCTA project={project} />
    </main>
  );
}

function ProjectHero({ project }) {
  return (
    <section className="project-details-hero">
      <div className="project-details-hero__ambient" />

      <div className="container">
        <nav
          className="project-details-breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/projects">Projects</Link>
          <span>/</span>
          <strong>{project.title}</strong>
        </nav>

        <div className="project-details-hero__grid">
          <motion.div
            className="project-details-hero__content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="project-details-label">
              <span />
              {project.category}
            </div>

            <h1>{project.title}</h1>

            <p>{project.description}</p>

            <div className="project-details-hero__meta">
              <div>
                <MapPin size={18} />
                <span>{project.location}</span>
              </div>

              <div>
                <HardHat size={18} />
                <span>Project-Based Supply</span>
              </div>

              <div>
                <ShieldCheck size={18} />
                <span>Quality Verified</span>
              </div>
            </div>

            <div className="project-details-hero__actions">
              <Link
                to="/quote"
                className="project-details-primary-button"
              >
                Discuss Similar Project
                <ArrowUpRight size={18} />
              </Link>

              <a
                href="#project-overview"
                className="project-details-outline-button project-details-outline-button--dark"
              >
                View Project Details
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="project-details-hero__visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="project-details-hero__image">
              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-details-hero__image-overlay" />

              <div className="project-details-hero__caption">
                <span>{project.category}</span>

                <strong>
                  Coordinated Steel Supply for Demanding Project Requirements
                </strong>
              </div>
            </div>

            <div className="project-details-hero__floating-card">
              <ShieldCheck size={25} />

              <div>
                <strong>Project Supply Support</strong>
                <span>Planning, quality and delivery</span>
              </div>
            </div>

            <div className="project-details-hero__decorative-text">
              CASE
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectOverview({ project }) {
  return (
    <section
      className="project-details-overview"
      id="project-overview"
    >
      <div className="container project-details-overview__grid">
        <motion.div
          className="project-details-overview__media"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="project-details-overview__main-image">
            <img
              src={project.image}
              alt={`${project.title} overview`}
            />
          </div>

          <div className="project-details-overview__small-image">
            <img
              src={projectMedia.structuralImage}
              alt="Structural steel supplied"
            />
          </div>

          <div className="project-details-overview__badge">
            <HardHat size={24} />

            <div>
              <strong>Project-Focused Supply</strong>
              <span>Coordinated from planning to delivery</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="project-details-overview__content"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
        >
          <div className="project-details-label">
            <span />
            Project Overview
          </div>

          <h2>
            Reliable Steel Coordination for Every Stage of the Project
          </h2>

          <p>{project.description}</p>

          <p>
            The project required coordinated material planning,
            quality verification and phased dispatch support to match
            the site schedule and application requirements.
          </p>

          <div className="project-details-overview__facts">
            {projectFacts.map((fact) => {
              const Icon = fact.icon;
              const value =
                fact.value || project[fact.key];

              return (
                <div key={fact.label}>
                  <Icon size={20} />

                  <span>{fact.label}</span>
                  <strong>{value}</strong>
                </div>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="project-details-primary-button"
          >
            Speak with Our Team
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectHighlights({ project }) {
  return (
    <section className="project-details-highlights">
      <div className="container">
        <div className="project-details-heading">
          <div className="project-details-label">
            <span />
            Project Highlights
          </div>

          <h2>
            Key Supply and Coordination Highlights
          </h2>

          <p>
            The project was supported through product planning,
            quality-focused preparation and dependable dispatch
            coordination.
          </p>
        </div>

        <div className="project-details-highlights__grid">
          {project.highlights.map((highlight, index) => (
            <motion.article
              key={highlight}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              whileHover={{ y: -7 }}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <CheckCircle2 size={23} />
              <h3>{highlight}</h3>

              <p>
                Coordinated support aligned with the
                project requirement and delivery schedule.
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSupplied({ project }) {
  return (
    <section className="project-details-products">
      <div className="container">
        <div className="project-details-heading project-details-heading--light">
          <div className="project-details-label project-details-label--light">
            <span />
            Products Supplied
          </div>

          <h2>
            Steel Products Supporting the Project
          </h2>

          <p>
            Product selection was aligned with the structural,
            fabrication and application requirements of the project.
          </p>
        </div>

        <div className="project-details-products__grid">
          {project.products.map((product, index) => (
            <motion.article
              key={product}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
            >
              <div className="project-details-products__icon">
                <Factory size={23} />
              </div>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{product}</h3>

              <p>
                Supplied according to the confirmed grade,
                size and project schedule.
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectGallery({ project }) {
  const galleryImages = [
    {
      image: project.image,
      title: "Project Site",
    },
    {
      image: projectMedia.constructionImage,
      title: "Construction Activity",
    },
    {
      image: projectMedia.structuralImage,
      title: "Structural Steel",
    },
    {
      image: projectMedia.tmtImage,
      title: "Reinforcement Material",
    },
    {
      image: projectMedia.plantImage,
      title: "Material Processing",
    },
    {
      image: projectMedia.warehouseImage,
      title: "Storage & Dispatch",
    },
  ];

  return (
    <section className="project-details-gallery">
      <div className="container">
        <div className="project-details-heading">
          <div className="project-details-label">
            <span />
            Project Gallery
          </div>

          <h2>
            A Closer Look at Project Supply and Execution
          </h2>

          <p>
            Representative visuals from project, material,
            processing and dispatch activities.
          </p>
        </div>

        <div className="project-details-gallery__grid">
          {galleryImages.map((item, index) => (
            <motion.figure
              key={`${item.title}-${index}`}
              className={
                index === 0
                  ? "project-details-gallery__item project-details-gallery__item--large"
                  : "project-details-gallery__item"
              }
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <div />

              <figcaption>{item.title}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupplySupport() {
  return (
    <section className="project-details-support">
      <div className="container">
        <div className="project-details-heading">
          <div className="project-details-label">
            <span />
            Supply Support
          </div>

          <h2>
            Complete Coordination Beyond Product Availability
          </h2>

          <p>
            Our project support covers planning, processing,
            quality verification, packing and final delivery.
          </p>
        </div>

        <div className="project-details-support__grid">
          {deliverySupport.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
              >
                <div className="project-details-support__icon">
                  <Icon size={23} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectWorkflow() {
  return (
    <section className="project-details-workflow">
      <div className="container">
        <div className="project-details-heading">
          <div className="project-details-label">
            <span />
            Project Workflow
          </div>

          <h2>
            From Requirement Review to Final Delivery
          </h2>

          <p>
            Every project follows a structured workflow designed
            to support accuracy, quality and dependable dispatch.
          </p>
        </div>

        <div className="project-details-workflow__timeline">
          {projectWorkflow.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
            >
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedProjects({ projects }) {
  if (!projects.length) {
    return null;
  }

  return (
    <section className="project-details-related">
      <div className="container">
        <div className="project-details-related__heading-row">
          <div className="project-details-heading">
            <div className="project-details-label">
              <span />
              Related Projects
            </div>

            <h2>
              Explore More Project Experience
            </h2>

            <p>
              Browse other project sectors supported by our
              steel products and supply capabilities.
            </p>
          </div>

          <Link
            to="/projects"
            className="project-details-related__all-link"
          >
            View All Projects
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="project-details-related__grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-details-related-card"
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              whileHover={{ y: -8 }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="project-details-related-card__image"
              >
                <img
                  src={project.image}
                  alt={project.title}
                />

                <div />

                <span>
                  <ArrowUpRight size={19} />
                </span>
              </Link>

              <div className="project-details-related-card__content">
                <small>{project.category}</small>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <Link to={`/projects/${project.slug}`}>
                  View Project
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCTA({ project }) {
  return (
    <section className="project-details-cta">
      <div className="container project-details-cta__container">
        <div>
          <span>Project Enquiry</span>

          <h2>
            Planning a Project Similar to {project.title}?
          </h2>

          <p>
            Share your product requirement, grade, size,
            quantity, project schedule and delivery location.
            Our team will help coordinate a suitable steel
            supply solution.
          </p>
        </div>

        <div className="project-details-cta__actions">
          <Link
            to="/quote"
            className="project-details-cta__primary"
          >
            Request a Quote
            <ArrowUpRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="project-details-cta__secondary"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectNotFound() {
  return (
    <main className="project-details-not-found">
      <div className="container project-details-not-found__container">
        <span>404</span>

        <h1>Project Not Found</h1>

        <p>
          The requested project does not exist or may have
          been removed.
        </p>

        <Link
          to="/projects"
          className="project-details-primary-button"
        >
          <ArrowLeft size={18} />
          Return to Projects
        </Link>
      </div>
    </main>
  );
}

export default ProjectDetails;
