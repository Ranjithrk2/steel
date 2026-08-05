import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { projects } from "../../../data/homeData";
import SectionHeading from "./SectionHeading";

function FeaturedProjects() {
  return (
    <section className="featured-projects">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            label="Projects"
            title="Landmarks Standing on Our Steel"
            description="Selected supplies across infrastructure, real estate and industrial development."
          />

          <Link to="/projects" className="text-link">
            All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="featured-projects__grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-card__overlay" />

              <div className="project-card__content">
                <span>
                  {project.category} · {project.location}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <Link to="/projects">
                  View Project
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;

