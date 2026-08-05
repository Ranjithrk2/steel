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
  Warehouse,
} from "lucide-react";

import {
  facilityHighlights,
  infrastructureFacilities,
  infrastructureMedia,
  infrastructureProcess,
  infrastructureStats,
  operationalCapabilities,
} from "../../data/infrastructure";

import "./Infrastructure.css";

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

function Infrastructure() {
  return (
    <main className="infrastructure-page">
      <InfrastructureHero />
      <InfrastructureOverview />
      <InfrastructureStatistics />
      <Facilities />
      <FeatureSections />
      <QualitySection />
      <Capabilities />
      <InfrastructureWorkflow />
      <InfrastructureCTA />
    </main>
  );
}

function InfrastructureHero() {
  return (
    <section className="infrastructure-hero">
      <div className="infrastructure-hero__ambient" />

      <div className="container">
        <nav className="infrastructure-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <strong>Infrastructure</strong>
        </nav>

        <div className="infrastructure-hero__grid">
          <motion.div
            className="infrastructure-hero__content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>Industrial Infrastructure</SectionLabel>

            <h1>
              Built to Process.
              <span>Prepared to Deliver.</span>
            </h1>

            <p>
              Our integrated infrastructure brings together processing,
              quality verification, warehousing, material handling and
              dispatch planning to support reliable steel supply.
            </p>

            <div className="infrastructure-hero__facts">
              <Fact value="4" label="Core Facilities" />
              <Fact value="6,00,000 MT" label="Annual Capacity" />
              <Fact value="18" label="States Served" />
            </div>

            <div className="infrastructure-hero__actions">
              <a href="#facilities" className="infrastructure-primary-button">
                Explore Facilities <ArrowRight size={18} />
              </a>

              <Link to="/contact" className="infrastructure-text-link">
                Speak with Our Team <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="infrastructure-hero__visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="infrastructure-hero__image-card">
              <img
                src={infrastructureMedia.plantImage}
                alt="Godavari Iron and Steel manufacturing campus"
              />
              <div className="infrastructure-image-overlay" />
              <div className="infrastructure-image-caption">
                <span>Integrated Operations</span>
                <strong>Infrastructure Supporting Reliable Steel Supply</strong>
              </div>
            </div>

            <div className="infrastructure-hero__floating-card">
              <Factory size={25} />
              <div>
                <strong>Coordinated Operations</strong>
                <span>Processing to final dispatch</span>
              </div>
            </div>

            <div className="infrastructure-hero__decorative-text">PLANT</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfrastructureOverview() {
  return (
    <section className="infrastructure-overview">
      <div className="container infrastructure-overview__grid">
        <motion.div {...reveal} className="infrastructure-overview__content">
          <SectionLabel>Infrastructure Overview</SectionLabel>
          <SectionTitle>
            One Connected System for Processing, Quality and Delivery
          </SectionTitle>

          <p>
            Our infrastructure is organised to support material movement
            from receipt to final dispatch through a controlled operational
            workflow.
          </p>
          <p>
            Processing equipment, quality verification, structured warehousing
            and logistics planning work together to support dependable supply.
          </p>

          <div className="infrastructure-check-grid">
            {[
              "Integrated material movement",
              "Project-specific processing",
              "Organised inventory control",
              "Reliable dispatch planning",
            ].map((point) => (
              <div key={point}>
                <CheckCircle2 size={18} />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <Link to="/quote" className="infrastructure-primary-button">
            Discuss Your Requirement <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div {...reveal} className="infrastructure-overview__visual">
          <div className="infrastructure-overview__main-image">
            <img
              src={infrastructureMedia.machineryImage}
              alt="Steel processing machinery"
            />
          </div>
          <div className="infrastructure-overview__small-image">
            <img
              src={infrastructureMedia.warehouseImage}
              alt="Steel warehouse"
            />
          </div>
          <div className="infrastructure-overview__badge">
            <Gauge size={24} />
            <div>
              <strong>Precision Operations</strong>
              <span>Controlled processing workflow</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfrastructureStatistics() {
  return (
    <section className="infrastructure-statistics">
      <div className="container infrastructure-statistics__grid">
        {infrastructureStats.map((stat, index) => (
          <motion.article
            key={stat.label}
            {...reveal}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Facilities() {
  return (
    <section className="infrastructure-facilities" id="facilities">
      <div className="container">
        <SectionHeading
          label="Core Facilities"
          title="Infrastructure Supporting Every Stage of Steel Supply"
          description="Each facility supports safe material handling, accurate processing, organised storage and dependable dispatch."
        />

        <div className="infrastructure-facilities__grid">
          {infrastructureFacilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.article
                className="infrastructure-facility-card"
                key={facility.id}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -9 }}
              >
                <div className="infrastructure-facility-card__image">
                  <img src={facility.image} alt={facility.title} />
                  <div className="infrastructure-image-overlay" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div className="infrastructure-facility-card__icon">
                    <Icon size={23} />
                  </div>
                </div>

                <div className="infrastructure-facility-card__content">
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>

                  <div className="infrastructure-facility-card__points">
                    {facility.points.map((point) => (
                      <div key={point}>
                        <CheckCircle2 size={14} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureSections() {
  return (
    <>
      <FeatureSection
        label="Processing Systems"
        title="Machinery Built for Accuracy and Consistent Preparation"
        description="Our processing systems support cutting, sizing and project-specific preparation across multiple steel products and profiles."
        image={infrastructureMedia.machineryImage}
        imageAlt="Steel processing and rolling equipment"
        icon={Gauge}
        caption="Precision Processing"
        captionText="Controlled sizing and preparation"
        points={[
          "Controlled dimensional preparation",
          "Multiple steel profiles supported",
          "Project-specific cutting coordination",
          "Safe handling throughout processing",
        ]}
        link="/products"
        linkText="Explore Products"
      />

      <FeatureSection
        reverse
        tone="soft"
        label="Warehousing & Logistics"
        title="Organised Storage Supporting Reliable Project Delivery"
        description="Structured warehousing helps maintain product identification, material condition and delivery readiness across different grades, sizes and profiles."
        image={infrastructureMedia.warehouseImage}
        imageAlt="Steel warehouse and logistics facility"
        icon={Warehouse}
        caption="Dispatch-Ready Inventory"
        captionText="Organised storage and logistics"
        points={[
          "Organised product segregation",
          "Batch and grade identification",
          "Planned loading and dispatch",
          "Safe material movement",
        ]}
        link="/contact"
        linkText="Contact Our Team"
      />
    </>
  );
}

function QualitySection() {
  return (
    <section className="infrastructure-quality">
      <div className="container infrastructure-quality__grid">
        <motion.div {...reveal} className="infrastructure-quality__content">
          <SectionLabel light>Quality Infrastructure</SectionLabel>
          <SectionTitle>
            Verification Systems Supporting Every Dispatch
          </SectionTitle>
          <p>
            Quality infrastructure supports dimensional verification,
            surface inspection, specification matching and product
            traceability before final dispatch.
          </p>
          <Link to="/quality" className="infrastructure-outline-button">
            Explore Quality Standards <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div {...reveal} className="infrastructure-quality__visual">
          <img
            src={infrastructureMedia.qualityImage}
            alt="Steel quality verification laboratory"
          />
          <div className="infrastructure-image-overlay" />
          <div className="infrastructure-image-caption">
            <ShieldCheck size={28} />
            <div>
              <strong>Quality Verified</strong>
              <span>Inspection and traceability support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="infrastructure-capabilities">
      <div className="container">
        <SectionHeading
          label="Operational Capabilities"
          title="Infrastructure That Supports More Than Storage"
          description="Our facilities coordinate processing, quality, inventory, packing and delivery as one connected workflow."
        />

        <div className="infrastructure-capabilities__grid">
          {operationalCapabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.article
                key={capability.title}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -7 }}
              >
                <div className="infrastructure-capabilities__icon">
                  <Icon size={23} />
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="infrastructure-highlights">
          {facilityHighlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.article
                key={highlight.title}
                {...reveal}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <Icon size={24} />
                <div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InfrastructureWorkflow() {
  return (
    <section className="infrastructure-workflow">
      <div className="container">
        <SectionHeading
          label="Operational Workflow"
          title="From Material Receipt to Final Dispatch"
          description="Every order moves through a structured workflow designed to maintain clarity, quality and delivery readiness."
        />

        <div className="infrastructure-workflow__timeline">
          {infrastructureProcess.map((step, index) => (
            <motion.article
              key={step.number}
              {...reveal}
              transition={{ duration: 0.5, delay: index * 0.06 }}
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

function InfrastructureCTA() {
  return (
    <section className="infrastructure-cta">
      <div className="container infrastructure-cta__container">
        <div>
          <span>Project Support</span>
          <h2>Need Reliable Steel Processing and Supply Support?</h2>
          <p>
            Share your product, grade, dimensions, quantity, processing
            requirement and delivery location. Our team will coordinate a
            suitable supply solution.
          </p>
        </div>

        <div className="infrastructure-cta__actions">
          <Link to="/quote" className="infrastructure-cta__primary">
            Request a Quote <ArrowUpRight size={18} />
          </Link>
          <Link to="/contact" className="infrastructure-cta__secondary">
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeatureSection({
  label,
  title,
  description,
  image,
  imageAlt,
  icon: Icon,
  caption,
  captionText,
  points,
  link,
  linkText,
  reverse = false,
  tone = "white",
}) {
  return (
    <section
      className={`infrastructure-feature infrastructure-feature--${tone}`}
    >
      <div
        className={`container infrastructure-feature__grid ${
          reverse ? "infrastructure-feature__grid--reverse" : ""
        }`}
      >
        {!reverse && (
          <FeatureMedia
            image={image}
            imageAlt={imageAlt}
            Icon={Icon}
            caption={caption}
            captionText={captionText}
          />
        )}

        <motion.div {...reveal} className="infrastructure-feature__content">
          <SectionLabel>{label}</SectionLabel>
          <SectionTitle>{title}</SectionTitle>
          <p>{description}</p>

          <ul>
            {points.map((point) => (
              <li key={point}>
                <CheckCircle2 size={18} />
                {point}
              </li>
            ))}
          </ul>

          <Link to={link} className="infrastructure-primary-button">
            {linkText} <ArrowRight size={18} />
          </Link>
        </motion.div>

        {reverse && (
          <FeatureMedia
            image={image}
            imageAlt={imageAlt}
            Icon={Icon}
            caption={caption}
            captionText={captionText}
          />
        )}
      </div>
    </section>
  );
}

function FeatureMedia({ image, imageAlt, Icon, caption, captionText }) {
  return (
    <motion.div {...reveal} className="infrastructure-feature__media">
      <img src={image} alt={imageAlt} />
      <div className="infrastructure-image-overlay" />
      <div className="infrastructure-image-caption">
        <Icon size={27} />
        <div>
          <strong>{caption}</strong>
          <span>{captionText}</span>
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeading({ label, title, description }) {
  return (
    <div className="infrastructure-heading">
      <SectionLabel>{label}</SectionLabel>
      <SectionTitle>{title}</SectionTitle>
      <p>{description}</p>
    </div>
  );
}

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`infrastructure-label ${
        light ? "infrastructure-label--light" : ""
      }`}
    >
      <span />
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  return <h2>{children}</h2>;
}

function Fact({ value, label }) {
  return (
    <div>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export default Infrastructure;
