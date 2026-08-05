import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Factory,
  HardHat,
  MapPin,
  ShieldCheck,
  Truck,
} from "lucide-react";

import {
  projectCategories,
  projectMedia,
  projects,
  projectStats,
  projectSupport,
  projectWorkflow,
} from "../../data/projects";

import "./Projects.css";

function Projects() {
  const [activeCategory, setActiveCategory] =
    useState("All Projects");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="projects-page">
      <ProjectsHero />

      <ProjectsOverview />

      <ProjectStatistics />

      <ProjectPortfolio
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        filteredProjects={filteredProjects}
      />

      <ProjectSupport />

      <FeaturedProject />

      <ProjectWorkflow />

      <ProjectsCTA />
    </main>
  );
}

function ProjectsHero() {
  return (
    <section className="projects-hero">
      <div className="projects-hero__ambient" />

      <div className="container">
        <nav
          className="projects-hero__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">
            Home
          </Link>

          <span>/</span>

          <strong>
            Projects
          </strong>
        </nav>

        <div className="projects-hero__grid">
          <motion.div
            className="projects-hero__content"
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="projects-label">
              <span />

              Project Experience
            </div>

            <h1>
              Steel Supporting

              <span>
                Projects That Shape Progress
              </span>
            </h1>

            <p>
              From infrastructure and commercial construction
              to manufacturing and public-development
              projects, we support customers with dependable
              steel products and coordinated project supply.
            </p>

            <div className="projects-hero__facts">
              <div>
                <strong>
                  1,450+
                </strong>

                <span>
                  Projects Supplied
                </span>
              </div>

              <div>
                <strong>
                  18
                </strong>

                <span>
                  States Served
                </span>
              </div>

              <div>
                <strong>
                  27+
                </strong>

                <span>
                  Years of Experience
                </span>
              </div>
            </div>

            <div className="projects-hero__actions">
              <a
                href="#project-portfolio"
                className="projects-primary-button"
              >
                Explore Projects

                <ArrowRight size={18} />
              </a>

              <Link
                to="/quote"
                className="projects-text-link"
              >
                Discuss Your Project

                <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="projects-hero__visual"
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="projects-hero__image-card">
              <img
                src={projectMedia.bridgeImage}
                alt="Steel supplied for bridge and infrastructure project"
              />

              <div className="projects-hero__image-overlay" />

              <div className="projects-hero__image-content">
                <span>
                  Project-Based Supply
                </span>

                <strong>
                  Reliable Steel Support from Planning to
                  Delivery
                </strong>
              </div>
            </div>

            <div className="projects-hero__floating-card">
              <HardHat size={25} />

              <div>
                <strong>
                  Project-Focused Coordination
                </strong>

                <span>
                  Products, processing and delivery
                </span>
              </div>
            </div>

            <div className="projects-hero__decorative-text">
              BUILD
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectsOverview() {
  return (
    <section className="projects-overview">
      <div className="container projects-overview__grid">
        <motion.div
          className="projects-overview__content"
          initial={{
            opacity: 0,
            x: -28,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
          }}
        >
          <div className="projects-label">
            <span />

            Project Supply Expertise
          </div>

          <h2>
            More Than Material Supply. Complete Project
            Coordination.
          </h2>

          <p>
            Every project has different requirements for grade,
            size, quantity, processing and delivery. Our team
            coordinates the complete supply process around
            those requirements.
          </p>

          <p>
            From initial review to final dispatch, we focus on
            order accuracy, quality verification and dependable
            project support.
          </p>

          <div className="projects-overview__points">
            <div>
              <CheckCircle2 size={18} />

              <span>
                Project-specific product mapping
              </span>
            </div>

            <div>
              <CheckCircle2 size={18} />

              <span>
                Grade and size coordination
              </span>
            </div>

            <div>
              <CheckCircle2 size={18} />

              <span>
                Phased delivery planning
              </span>
            </div>

            <div>
              <CheckCircle2 size={18} />

              <span>
                Site-focused dispatch support
              </span>
            </div>
          </div>

          <Link
            to="/contact"
            className="projects-primary-button"
          >
            Speak with Our Team

            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="projects-overview__visual"
          initial={{
            opacity: 0,
            x: 28,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
        >
          <div className="projects-overview__main-image">
            <img
              src={projectMedia.constructionImage}
              alt="Commercial construction project"
            />
          </div>

          <div className="projects-overview__small-image">
            <img
              src={projectMedia.structuralImage}
              alt="Structural steel products"
            />
          </div>

          <div className="projects-overview__badge">
            <ShieldCheck size={24} />

            <div>
              <strong>
                Reliable Project Supply
              </strong>

              <span>
                Quality and delivery coordination
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectStatistics() {
  return (
    <section className="projects-statistics">
      <div className="container projects-statistics__grid">
        {projectStats.map(
          (stat, index) => (
            <motion.article
              key={stat.label}
              initial={{
                opacity: 0,
                y: 22,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.45,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
            >
              <strong>
                {stat.value}
              </strong>

              <span>
                {stat.label}
              </span>
            </motion.article>
          )
        )}
      </div>
    </section>
  );
}

function ProjectPortfolio({
  activeCategory,
  setActiveCategory,
  filteredProjects,
}) {
  return (
    <section
      className="projects-portfolio"
      id="project-portfolio"
    >
      <div className="container">
        <div className="projects-heading">
          <div className="projects-label">
            <span />

            Project Portfolio
          </div>

          <h2>
            Steel Supplied Across Multiple Project Sectors
          </h2>

          <p>
            Browse representative project types supported
            through our product range, processing capabilities
            and delivery network.
          </p>
        </div>

        <div
          className="projects-filters"
          role="tablist"
          aria-label="Project categories"
        >
          {projectCategories.map(
            (category) => (
              <button
                type="button"
                role="tab"
                aria-selected={
                  activeCategory === category
                }
                className={`projects-filter-button ${
                  activeCategory === category
                    ? "projects-filter-button--active"
                    : ""
                }`}
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>
            )
          )}
        </div>

        <motion.div
          className="projects-grid"
          layout
        >
          {filteredProjects.map(
            (project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  className="project-card"
                  key={project.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 26,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -9,
                  }}
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="project-card__image"
                    aria-label={`View details for ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <div className="project-card__overlay" />

                    <span className="project-card__category">
                      {project.category}
                    </span>

                    <div className="project-card__icon">
                      <Icon size={23} />
                    </div>
                  </Link>

                  <div className="project-card__content">
                    <div className="project-card__location">
                      <MapPin size={14} />

                      <span>
                        {project.location}
                      </span>
                    </div>

                    <h3>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="project-card__title-link"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <div className="project-card__products">
                      {project.products
                        .slice(0, 3)
                        .map((product) => (
                          <span key={product}>
                            <CheckCircle2 size={14} />

                            {product}
                          </span>
                        ))}
                    </div>

                    <Link
                      to={`/projects/${project.slug}`}
                      className="project-card__details-link"
                    >
                      View Project Details

                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              );
            }
          )}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectSupport() {
  return (
    <section className="projects-support">
      <div className="container">
        <div className="projects-heading projects-heading--light">
          <div className="projects-label projects-label--light">
            <span />

            Project Support
          </div>

          <h2>
            Support Beyond Product Availability
          </h2>

          <p>
            Our team helps coordinate product selection,
            processing, inventory and phased project delivery.
          </p>
        </div>

        <div className="projects-support__grid">
          {projectSupport.map(
            (item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                >
                  <div className="projects-support__icon">
                    <Icon size={24} />
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>
                </motion.article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject() {
  const featuredProject =
    projects.find(
      (project) =>
        project.slug ===
        "national-highway-bridge-project"
    ) || projects[0];

  if (!featuredProject) {
    return null;
  }

  return (
    <section className="projects-featured">
      <div className="container projects-featured__grid">
        <motion.div
          className="projects-featured__media"
          initial={{
            opacity: 0,
            x: -28,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
          }}
        >
          <Link
            to={`/projects/${featuredProject.slug}`}
            className="projects-featured__media-link"
            aria-label={`View ${featuredProject.title}`}
          >
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
            />

            <div className="projects-featured__overlay" />

            <div className="projects-featured__caption">
              <HardHat size={28} />

              <div>
                <strong>
                  Infrastructure Project Support
                </strong>

                <span>
                  Coordinated steel supply and delivery
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="projects-featured__content"
          initial={{
            opacity: 0,
            x: 28,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
        >
          <div className="projects-label">
            <span />

            Featured Project
          </div>

          <h2>
            {featuredProject.title}
          </h2>

          <p>
            {featuredProject.description}
          </p>

          <div className="projects-featured__features">
            <div>
              <ShieldCheck size={20} />

              <span>
                Specification-focused supply
              </span>
            </div>

            <div>
              <Factory size={20} />

              <span>
                Project-specific processing
              </span>
            </div>

            <div>
              <Truck size={20} />

              <span>
                Phased delivery coordination
              </span>
            </div>
          </div>

          <Link
            to={`/projects/${featuredProject.slug}`}
            className="projects-primary-button"
          >
            View Project Details

            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectWorkflow() {
  return (
    <section className="projects-workflow">
      <div className="container">
        <div className="projects-heading">
          <div className="projects-label">
            <span />

            Project Workflow
          </div>

          <h2>
            A Structured Process for Every Project Supply
          </h2>

          <p>
            Every project moves through a clear workflow from
            requirement review to final dispatch coordination.
          </p>
        </div>

        <div className="projects-workflow__timeline">
          {projectWorkflow.map(
            (step, index) => (
              <motion.article
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 22,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
              >
                <span>
                  {step.number}
                </span>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectsCTA() {
  return (
    <section className="projects-cta">
      <div className="container projects-cta__container">
        <div>
          <span>
            Project Enquiry
          </span>

          <h2>
            Planning a Construction or Industrial Project?
          </h2>

          <p>
            Share your product requirement, grade,
            dimensions, quantity, project schedule and
            delivery location. Our team will help coordinate
            a suitable steel supply solution.
          </p>
        </div>

        <div className="projects-cta__actions">
          <Link
            to="/quote"
            className="projects-cta__primary"
          >
            Request a Quote

            <ArrowUpRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="projects-cta__secondary"
          >
            Contact Our Team

            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;