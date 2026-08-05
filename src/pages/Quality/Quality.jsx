import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileCheck2,
  Gauge,
  ShieldCheck,
} from "lucide-react";

import {
  certifications,
  qualityChecks,
  qualityMedia,
  qualityPrinciples,
  qualityProcess,
  qualityStats,
} from "../../data/quality";

import "./Quality.css";

function Quality() {
  return (
    <main className="quality-page">
      <QualityHero />
      <QualityOverview />
      <QualityStatistics />
      <QualityChecks />
      <QualityProcess />
      <QualityInfrastructure />
      <QualityPrinciples />
      <QualityDocumentation />
      <QualityCTA />
    </main>
  );
}

function QualityHero() {
  return (
    <section className="quality-hero">
      <div className="quality-hero__ambient" />

      <div className="container">
        <nav
          className="quality-hero__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">Home</Link>
          <span>/</span>
          <strong>Quality</strong>
        </nav>

        <div className="quality-hero__grid">
          <motion.div
            className="quality-hero__content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="quality-label">
              <span />
              Quality Assurance
            </div>

            <h1>
              Verified at Every Stage.
              <span>Trusted in Every Project.</span>
            </h1>

            <p>
              Our quality process focuses on product identification,
              dimensional verification, surface condition, order
              accuracy and final dispatch readiness.
            </p>

            <div className="quality-hero__facts">
              <div>
                <strong>6</strong>
                <span>Core Quality Checks</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Pre-Dispatch Review</span>
              </div>

              <div>
                <strong>27+</strong>
                <span>Years of Experience</span>
              </div>
            </div>

            <div className="quality-hero__actions">
              <a
                href="#quality-checks"
                className="quality-primary-button"
              >
                Explore Quality Process
                <ArrowRight size={18} />
              </a>

              <Link
                to="/contact"
                className="quality-text-link"
              >
                Speak with Our Team
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="quality-hero__visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="quality-hero__image-card">
              <img
                src={qualityMedia.qualityImage}
                alt="Steel quality verification laboratory"
              />

              <div className="quality-hero__image-overlay" />

              <div className="quality-hero__image-content">
                <span>Quality Controlled</span>

                <strong>
                  Verification Supporting Every Product Dispatch
                </strong>
              </div>
            </div>

            <div className="quality-hero__floating-card">
              <ShieldCheck size={25} />

              <div>
                <strong>Verified Before Dispatch</strong>
                <span>Specification and condition checks</span>
              </div>
            </div>

            <div className="quality-hero__decorative-text">
              TEST
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QualityOverview() {
  return (
    <section className="quality-overview">
      <div className="container quality-overview__grid">
        <motion.div
          className="quality-overview__content"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="quality-label">
            <span />
            Our Quality Approach
          </div>

          <h2>
            Quality Control Built Into the Supply Process
          </h2>

          <p>
            Quality is not treated as a final-stage activity. It is
            integrated into product selection, material identification,
            processing, inspection, packing and dispatch.
          </p>

          <p>
            Every order is reviewed against the confirmed grade, size,
            profile, quantity and application before final release.
          </p>

          <div className="quality-overview__points">
            <div>
              <CheckCircle2 size={18} />
              <span>Order specification matching</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>Dimensional verification</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>Surface-condition inspection</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>Final dispatch approval</span>
            </div>
          </div>

          <Link
            to="/quote"
            className="quality-primary-button"
          >
            Discuss Your Requirement
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="quality-overview__visual"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
        >
          <div className="quality-overview__main-image">
            <img
              src={qualityMedia.qualityImage}
              alt="Quality inspection laboratory"
            />
          </div>

          <div className="quality-overview__small-image">
            <img
              src={qualityMedia.machineryImage}
              alt="Steel processing machinery"
            />
          </div>

          <div className="quality-overview__badge">
            <FileCheck2 size={24} />

            <div>
              <strong>Structured Verification</strong>
              <span>From requirement to dispatch</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function QualityStatistics() {
  return (
    <section className="quality-statistics">
      <div className="container quality-statistics__grid">
        {qualityStats.map((stat, index) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
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

function QualityChecks() {
  return (
    <section
      className="quality-checks"
      id="quality-checks"
    >
      <div className="container">
        <div className="quality-heading">
          <div className="quality-label">
            <span />
            Core Quality Checks
          </div>

          <h2>
            Verification Across Product, Order and Dispatch
          </h2>

          <p>
            Our checks support product accuracy, traceability and
            dependable delivery readiness.
          </p>
        </div>

        <div className="quality-checks__grid">
          {qualityChecks.map((check, index) => {
            const Icon = check.icon;

            return (
              <motion.article
                key={check.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -7 }}
              >
                <div className="quality-checks__icon">
                  <Icon size={23} />
                </div>

                <h3>{check.title}</h3>
                <p>{check.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QualityProcess() {
  return (
    <section className="quality-process">
      <div className="container">
        <div className="quality-heading">
          <div className="quality-label">
            <span />
            Verification Workflow
          </div>

          <h2>
            A Clear Process from Requirement to Approval
          </h2>

          <p>
            Every order moves through a structured quality and dispatch
            verification workflow.
          </p>
        </div>

        <div className="quality-process__timeline">
          {qualityProcess.map((step, index) => (
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

function QualityInfrastructure() {
  return (
    <section className="quality-infrastructure">
      <div className="container quality-infrastructure__grid">
        <motion.div
          className="quality-infrastructure__content"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="quality-label quality-label--light">
            <span />
            Quality Infrastructure
          </div>

          <h2>
            Inspection Supported by Organised Facilities
          </h2>

          <p>
            Dedicated inspection practices, organised material
            identification and controlled handling support accurate
            verification before dispatch.
          </p>

          <Link
            to="/infrastructure"
            className="quality-outline-button"
          >
            Explore Infrastructure
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="quality-infrastructure__visual"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
        >
          <img
            src={qualityMedia.qualityImage}
            alt="Steel quality verification facility"
          />

          <div className="quality-infrastructure__overlay" />

          <div className="quality-infrastructure__caption">
            <Gauge size={27} />

            <div>
              <strong>Inspection Ready</strong>
              <span>Structured verification support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function QualityPrinciples() {
  return (
    <section className="quality-principles">
      <div className="container">
        <div className="quality-heading">
          <div className="quality-label">
            <span />
            Quality Principles
          </div>

          <h2>
            Discipline, Accuracy and Traceability
          </h2>

          <p>
            These principles guide the way every order is reviewed,
            prepared and released.
          </p>
        </div>

        <div className="quality-principles__grid">
          {qualityPrinciples.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >
                <Icon size={24} />

                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QualityDocumentation() {
  return (
    <section className="quality-documentation">
      <div className="container quality-documentation__grid">
        <motion.div
          className="quality-documentation__visual"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <img
            src={qualityMedia.warehouseImage}
            alt="Quality-controlled steel storage"
          />

          <div className="quality-documentation__overlay" />

          <div className="quality-documentation__caption">
            <ShieldCheck size={27} />

            <div>
              <strong>Traceable Supply</strong>
              <span>Material and order records maintained</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="quality-documentation__content"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
        >
          <div className="quality-label">
            <span />
            Documentation Support
          </div>

          <h2>
            Clear Information Supporting Confident Procurement
          </h2>

          <p>
            Order and material information is maintained to support
            product identification, specification review and dependable
            project coordination.
          </p>

          <div className="quality-documentation__list">
            {certifications.map((item) => (
              <div key={item}>
                <CheckCircle2 size={17} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="quality-primary-button"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function QualityCTA() {
  return (
    <section className="quality-cta">
      <div className="container quality-cta__container">
        <div>
          <span>Quality Support</span>

          <h2>
            Need Verified Steel Products for Your Project?
          </h2>

          <p>
            Share your product, grade, size, quantity and project
            application. Our team will help coordinate a suitable and
            quality-focused supply solution.
          </p>
        </div>

        <div className="quality-cta__actions">
          <Link
            to="/quote"
            className="quality-cta__primary"
          >
            Request a Quote
            <ArrowUpRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="quality-cta__secondary"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Quality;
