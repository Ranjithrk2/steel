import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import { projects } from "../../../data/homeData";
import SectionHeading from "./SectionHeading";

function FeaturedProjects() {
  return (
    <section className="home-featured-projects">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            label="Projects"
            title="Landmarks Standing on Our Steel"
            description="Selected supplies across infrastructure, real estate and industrial development."
          />

          <Link
            to="/projects"
            className="text-link"
          >
            All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="home-featured-projects__grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="home-project-card"
              initial={{
                opacity: 0,
                y: 32,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.18,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Image */}
              <div className="home-project-card__media">
                <img
                  src={project.image}
                  alt={project.title}
                  className="home-project-card__image"
                />

                <div className="home-project-card__overlay" />
                <div className="home-project-card__red-glow" />
              </div>

              {/* Decorative number */}
              <div className="home-project-card__number">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="home-project-card__content">
                <div className="home-project-card__meta">
                  <span className="home-project-card__category">
                    {project.category}
                  </span>

                  <span className="home-project-card__location">
                    <MapPin size={13} />
                    {project.location}
                  </span>
                </div>

                <h3 className="home-project-card__title">
                  {project.title}
                </h3>

                <p className="home-project-card__description">
                  {project.description}
                </p>

                <div className="home-project-card__actions">
                  <Link
                    to="/projects"
                    className="home-project-card__button"
                  >
                    View Project
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;