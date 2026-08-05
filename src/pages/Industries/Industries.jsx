import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Gauge,
  ShieldCheck,
  Truck,
} from "lucide-react";

import {
  industries,
  industryCapabilities,
  industryStats,
} from "../../data/industries";

import plantImage from "../../assets/images/infrastructure/infra-plant.jpg";
import bridgeImage from "../../assets/images/projects/project-bridge.jpg";

import "./Industries.css";

const supplySteps = [
  {
    number: "01",
    title: "Requirement Review",
    description:
      "We understand the industry, application, product grade and project schedule.",
  },
  {
    number: "02",
    title: "Product Mapping",
    description:
      "Suitable steel products, sizes and specifications are mapped to the requirement.",
  },
  {
    number: "03",
    title: "Quality Verification",
    description:
      "Product condition, dimensions and order specifications are reviewed.",
  },
  {
    number: "04",
    title: "Processing & Packing",
    description:
      "Materials are prepared, packed and labelled for safe movement.",
  },
  {
    number: "05",
    title: "Dispatch & Delivery",
    description:
      "Orders are coordinated through a dependable logistics process.",
  },
];

function Industries() {
  return (
    <main className="industries-page">
      <IndustriesHero />
      <IndustriesOverview />
      <IndustryStats />
      <IndustriesGrid />
      <Capabilities />
      <SupplyProcess />
      <IndustrySupport />
      <IndustriesCTA />
    </main>
  );
}

function IndustriesHero() {
  return (
    <section className="industries-hero">
      <div className="industries-hero__ambient" />

      <div className="container">
        <nav
          className="industries-hero__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">Home</Link>
          <span>/</span>
          <strong>Industries</strong>
        </nav>

        <div className="industries-hero__grid">
          <motion.div
            className="industries-hero__content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="industries-label">
              <span />
              Industries We Serve
            </div>

            <h1>
              Steel Solutions for
              <span>Industries That Build India</span>
            </h1>

            <p>
              We support construction, infrastructure, manufacturing,
              energy, warehousing and public-development projects with
              reliable iron and steel products.
            </p>

            <div className="industries-hero__facts">
              <div>
                <strong>8</strong>
                <span>Major Industries</span>
              </div>

              <div>
                <strong>18</strong>
                <span>States Served</span>
              </div>

              <div>
                <strong>1,450+</strong>
                <span>Projects Supplied</span>
              </div>
            </div>

            <div className="industries-hero__actions">
              <a
                href="#industry-sectors"
                className="industries-primary-button"
              >
                Explore Industries
                <ArrowRight size={18} />
              </a>

              <Link
                to="/quote"
                className="industries-text-link"
              >
                Request a Quote
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="industries-hero__visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="industries-hero__image-card">
              <img
                src={bridgeImage}
                alt="Steel infrastructure and bridge project"
              />

              <div className="industries-hero__image-overlay" />

              <div className="industries-hero__image-content">
                <span>Industrial Applications</span>

                <strong>
                  Strength Supporting Infrastructure and Industry
                </strong>
              </div>
            </div>

            <div className="industries-hero__floating-card">
              <Factory size={25} />

              <div>
                <strong>Project-Focused Supply</strong>
                <span>From requirement to delivery</span>
              </div>
            </div>

            <div className="industries-hero__decorative-text">
              INDIA
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IndustriesOverview() {
  return (
    <section className="industries-overview">
      <div className="container industries-overview__grid">
        <motion.div
          className="industries-overview__content"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="industries-label">
            <span />
            Industry Expertise
          </div>

          <h2>
            Steel Supply Built Around Real Project Requirements
          </h2>

          <p>
            Different industries require different grades, dimensions,
            profiles and delivery schedules. Our team supports customers
            by understanding the application before recommending the
            appropriate product solution.
          </p>

          <div className="industries-overview__points">
            <div>
              <CheckCircle2 size={18} />
              <span>Application-focused product selection</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>Project-based quantity planning</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>Custom cutting and preparation</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>Dependable logistics coordination</span>
            </div>
          </div>

          <Link
            to="/contact"
            className="industries-primary-button"
          >
            Speak with Our Team
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="industries-overview__media"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
        >
          <img
            src={plantImage}
            alt="Godavari Iron and Steel industrial facility"
          />

          <div className="industries-overview__overlay" />

          <div className="industries-overview__badge">
            <ShieldCheck size={26} />

            <div>
              <strong>Reliable Industrial Supply</strong>
              <span>Quality, coordination and delivery</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IndustryStats() {
  return (
    <section className="industries-stats">
      <div className="container industries-stats__grid">
        {industryStats.map((stat, index) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
            }}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function IndustriesGrid() {
  return (
    <section
      className="industries-sectors"
      id="industry-sectors"
    >
      <div className="container">
        <div className="industries-heading">
          <div className="industries-label">
            <span />
            Industry Sectors
          </div>

          <h2>
            Supporting Projects Across India’s Industrial Economy
          </h2>

          <p>
            Explore the industries where our products support
            construction, fabrication, engineering and development.
          </p>
        </div>

        <div className="industries-sectors__grid">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.article
                className="industry-sector-card"
                key={industry.slug}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -9 }}
              >
                <div className="industry-sector-card__image">
                  <img
                    src={industry.image}
                    alt={industry.name}
                  />

                  <div className="industry-sector-card__overlay" />

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="industry-sector-card__icon">
                    <Icon size={23} />
                  </div>
                </div>

                <div className="industry-sector-card__content">
                  <h3>{industry.name}</h3>
                  <p>{industry.description}</p>

                  <div className="industry-sector-card__products">
                    {industry.products.slice(0, 3).map((product) => (
                      <span key={product}>
                        <CheckCircle2 size={14} />
                        {product}
                      </span>
                    ))}
                  </div>

                  <Link to="/contact">
                    Discuss Your Requirement
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="industries-capabilities">
      <div className="container">
        <div className="industries-heading industries-heading--light">
          <div className="industries-label industries-label--light">
            <span />
            Industry Support
          </div>

          <h2>
            Complete Support Beyond Product Supply
          </h2>

          <p>
            We support customers from initial product selection through
            processing, packing and final delivery.
          </p>
        </div>

        <div className="industries-capabilities__grid">
          {industryCapabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.article
                key={capability.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >
                <div className="industries-capabilities__icon">
                  <Icon size={24} />
                </div>

                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SupplyProcess() {
  return (
    <section className="industries-process">
      <div className="container">
        <div className="industries-heading">
          <div className="industries-label">
            <span />
            Supply Workflow
          </div>

          <h2>
            A Structured Process for Every Industry
          </h2>

          <p>
            Every supply requirement is handled through a clear and
            dependable workflow.
          </p>
        </div>

        <div className="industries-process__timeline">
          {supplySteps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
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

function IndustrySupport() {
  return (
    <section className="industries-support">
      <div className="container industries-support__grid">
        <motion.div
          className="industries-support__content"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="industries-label">
            <span />
            Project Support
          </div>

          <h2>
            Steel Products Matched to Your Industry and Application
          </h2>

          <p>
            Share your project type, application, product grade,
            dimensions, quantity and delivery schedule. Our team will
            guide you towards a suitable steel solution.
          </p>

          <div className="industries-support__features">
            <div>
              <Gauge size={20} />
              <span>Specification guidance</span>
            </div>

            <div>
              <ShieldCheck size={20} />
              <span>Quality verification</span>
            </div>

            <div>
              <Truck size={20} />
              <span>Planned delivery support</span>
            </div>
          </div>

          <Link
            to="/quote"
            className="industries-primary-button"
          >
            Request a Quote
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="industries-support__visual"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
        >
          <div>
            <strong>Construction</strong>
            <span>TMT bars, pipes and structural products</span>
          </div>

          <div>
            <strong>Infrastructure</strong>
            <span>High-strength reinforcement and structural steel</span>
          </div>

          <div>
            <strong>Manufacturing</strong>
            <span>Coils, pipes and fabricated steel solutions</span>
          </div>

          <div>
            <strong>Industrial Projects</strong>
            <span>Project-focused product and delivery support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IndustriesCTA() {
  return (
    <section className="industries-cta">
      <div className="container industries-cta__container">
        <div>
          <span>Industry Enquiry</span>

          <h2>
            Need Steel Products for Your Industry?
          </h2>

          <p>
            Tell us about your industry, product requirement, grade,
            quantity and delivery location. Our team will help you
            identify a suitable steel solution.
          </p>
        </div>

        <div className="industries-cta__actions">
          <Link
            to="/quote"
            className="industries-cta__primary"
          >
            Request a Quote
            <ArrowUpRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="industries-cta__secondary"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Industries;