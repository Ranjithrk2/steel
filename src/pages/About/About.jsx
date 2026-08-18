import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Factory,
  Gauge,
  HardHat,
  Leaf,
  Quote,
  ShieldCheck,
  Target,
  Truck,
  Users,
} from "lucide-react";

import plantImage from "../../assets/images/infrastructure/infra-plant.jpg";
import machineryImage from "../../assets/images/infrastructure/infra-machinery.jpg";
import warehouseImage from "../../assets/images/infrastructure/infra-warehouse.jpg";
import qualityImage from "../../assets/images/quality/quality-lab.jpg";

import "./About.css";

/* =====================================================
   CUSTOM LINKEDIN ICON
   No lucide dependency issue
===================================================== */

function LinkedInIcon({
  size = 18,
  className = "",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3C4.17 3 3.5 3.72 3.5 4.66C3.5 5.58 4.15 6.32 5.21 6.32H5.23C6.33 6.32 7 5.58 7 4.66C6.98 3.72 6.33 3 5.25 3ZM20.5 13.2C20.5 9.84 18.71 8.28 16.32 8.28C14.39 8.28 13.53 9.34 13.05 10.08V8.5H9.67C9.71 9.55 9.67 19.5 9.67 19.5H13.05V13.36C13.05 13.03 13.08 12.7 13.17 12.47C13.41 11.82 13.96 11.14 14.89 11.14C16.1 11.14 16.59 12.06 16.59 13.41V19.5H19.97L20.5 13.2Z" />
    </svg>
  );
}

const strengths = [
  "Integrated steel processing capabilities",
  "Strict quality verification systems",
  "Project-focused technical support",
  "Reliable inventory and dispatch planning",
];


const founders = [
  {
    id: 1,
    number: "01",
    name: "Founder Name 01",
    designation: "Founder & Managing Partner",
    photo: "/images/founders/founder-1.jpg",
    experience: "30+ Years",
    expertise: "Steel Industry",
    focus: "Strategy & Operations",
    description:
      "Add the founder's professional journey here. This section can explain how the founder entered the steel industry, the experience gained over the years, the vision behind Godavari Iron & Steel and the role played in developing the organisation.",
    descriptionTwo:
      "Through disciplined operations, strong customer relationships and a long-term approach to quality, the founder continues to guide the company's growth across construction, infrastructure and industrial markets.",
    quote:
      "Our responsibility is not only to supply steel, but to deliver reliability that our customers can build upon.",
    linkedin: "#",
  },
  {
    id: 2,
    number: "02",
    name: "Founder Name 02",
    designation: "Co-Founder & Managing Partner",
    photo: "/images/founders/founder-2.jpg",
    experience: "25+ Years",
    expertise: "Business Growth",
    focus: "Customers & Supply",
    description:
      "Add the second founder's professional background here. Highlight expertise in business development, customer partnerships, procurement, supply-chain coordination and the expansion of Godavari Iron & Steel.",
    descriptionTwo:
      "The founder's focus on dependable service, transparent relationships and responsive project support has helped strengthen the company's position as a trusted steel supply partner.",
    quote:
      "Long-term growth comes from understanding customers, keeping commitments and continuously improving how we serve them.",
    linkedin: "#",
  },
];

const milestones = [
  {
    year: "1999",
    title: "Foundation",
    description:
      "Godavari Iron & Steel began with a focused vision to deliver dependable steel products to growing industries.",
  },
  {
    year: "2007",
    title: "Capacity Expansion",
    description:
      "Processing capacity and product availability were expanded to support larger construction and engineering requirements.",
  },
  {
    year: "2014",
    title: "Integrated Operations",
    description:
      "Storage, processing, quality control and logistics were brought together under a more coordinated system.",
  },
  {
    year: "2020",
    title: "Pan-India Supply",
    description:
      "The distribution and delivery network was strengthened to support projects across multiple states.",
  },
  {
    year: "2026",
    title: "Modern Industrial Partner",
    description:
      "Today, the company supports infrastructure, manufacturing, engineering and commercial developments with reliable steel solutions.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Quality Discipline",
    description:
      "Every product is handled with a focus on consistency, traceability and dependable performance.",
  },
  {
    icon: Target,
    title: "Customer Commitment",
    description:
      "We understand project requirements clearly and support clients through selection, supply and delivery.",
  },
  {
    icon: Gauge,
    title: "Operational Precision",
    description:
      "Processing, inventory and dispatch are coordinated through structured systems.",
  },
  {
    icon: Users,
    title: "Long-Term Partnerships",
    description:
      "Our relationships are built through transparency, reliability and responsive service.",
  },
  {
    icon: Leaf,
    title: "Responsible Growth",
    description:
      "We support efficient resource usage, recycling and responsible operational practices.",
  },
  {
    icon: HardHat,
    title: "Industry Expertise",
    description:
      "Experience across construction and industrial requirements helps us provide practical solutions.",
  },
];

const capabilities = [
  {
    icon: Factory,
    value: "27+",
    label: "Years in Steel",
  },
  {
    icon: Gauge,
    value: "6,00,000 MT",
    label: "Annual Capacity",
  },
  {
    icon: Truck,
    value: "18",
    label: "States Served",
  },
  {
    icon: Users,
    value: "1,450+",
    label: "Projects Supplied",
  },
];

function About() {
  return (
    <main className="about-page">
      <AboutHero />

      <CompanyStory />

      <LeadershipSection />

      <CapabilityStats />

      <MissionVision />

      <Journey />

      <CoreValues />

      <InfrastructurePreview />

      <QualityCommitment />

      <AboutCTA />
    </main>
  );
}

/* =====================================================
   HERO
===================================================== */

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__ambient" />

      <div className="container">
        <nav
          className="about-hero__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">Home</Link>

          <span>/</span>

          <strong>About</strong>
        </nav>

        <div className="about-hero__grid">
          <motion.div
            className="about-hero__content"
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
            <div className="about-eyebrow">
              <span />

              About Godavari Iron &amp; Steel
            </div>

            <h1>
              Built on Discipline.

              <span>
                Trusted Through Performance.
              </span>
            </h1>

            <p>
              Godavari Iron &amp; Steel supports
              construction, infrastructure,
              engineering and manufacturing
              businesses through reliable steel
              products, disciplined operations
              and dependable project support.
            </p>

            <div className="about-hero__facts">
              <div>
                <strong>1999</strong>
                <span>Established</span>
              </div>

              <div>
                <strong>27+</strong>
                <span>Years in Steel</span>
              </div>

              <div>
                <strong>18</strong>
                <span>States Served</span>
              </div>
            </div>

            <div className="about-hero__actions">
              <Link
                to="/contact"
                className="about-primary-button"
              >
                Speak with Our Team
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/infrastructure"
                className="about-hero__text-link"
              >
                Explore Infrastructure
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="about-hero__visual"
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
            <div className="about-hero__image-card">
              <img
                src={plantImage}
                alt="Godavari Iron and Steel industrial plant"
              />

              <div className="about-hero__image-overlay" />

              <div className="about-hero__image-content">
                <span>
                  Integrated Operations
                </span>

                <strong>
                  Steel Solutions Built for
                  Demanding Projects
                </strong>
              </div>
            </div>

            <div className="about-hero__floating-card">
              <ShieldCheck size={26} />

              <div>
                <strong>
                  Quality Focused
                </strong>

                <span>
                  Verification and traceability
                </span>
              </div>
            </div>

            <div className="about-hero__decorative-number">
              27

              <span>Years</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   COMPANY STORY
===================================================== */

function CompanyStory() {
  return (
    <section className="about-story">
      <div className="container about-story__grid">
        <motion.div
          className="about-story__content"
          initial={{
            opacity: 0,
            x: -32,
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
          <div className="about-section-label">
            <span />

            Who We Are
          </div>

          <h2>
            A Dependable Steel Partner for
            Modern Industrial Requirements
          </h2>

          <p>
            Godavari Iron &amp; Steel was
            established with a clear objective:
            provide quality steel products
            through dependable service,
            disciplined operations and
            transparent customer support.
          </p>

          <p>
            Over the years, the company has
            developed stronger processing,
            warehousing, quality verification
            and logistics capabilities to
            support projects of different
            sizes and technical requirements.
          </p>

          <div className="about-story__features">
            {strengths.map((item) => (
              <div key={item}>
                <CheckCircle2 size={19} />

                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="about-primary-button"
          >
            Speak with Our Team
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="about-story__media"
          initial={{
            opacity: 0,
            x: 32,
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
          <div className="about-story__main-image">
            <img
              src={plantImage}
              alt="Godavari steel manufacturing plant"
            />
          </div>

          <div className="about-story__secondary-image">
            <img
              src={machineryImage}
              alt="Steel processing machinery"
            />
          </div>

          <div className="about-story__experience">
            <strong>27+</strong>

            <span>
              Years of industrial experience
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =====================================================
   FOUNDERS / LEADERSHIP
===================================================== */

function LeadershipSection() {
  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = plantImage;
  };

  return (
    <section className="about-founders">
      <div className="about-founders__grid-pattern" />
      <div className="about-founders__glow about-founders__glow--one" />
      <div className="about-founders__glow about-founders__glow--two" />

      <div className="container">
        <motion.div
          className="about-founders__heading"
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.6,
          }}
        >
          <div className="about-section-label about-section-label--founders">
            <span />
            Our Leadership
          </div>

          <div className="about-founders__heading-grid">
            <h2>
              Meet the Founders
              <span>
                Behind Our Strength
              </span>
            </h2>

            <p>
              Godavari Iron &amp; Steel is guided
              by two founders whose industry
              experience, operational discipline
              and customer-first approach continue
              to shape the organisation&apos;s
              long-term growth.
            </p>
          </div>
        </motion.div>

        <div className="about-founders__list">
          {founders.map((founder, index) => (
            <motion.article
              className="founder-profile"
              key={founder.id}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="founder-profile__content">
                <div className="founder-profile__topline">
                  <span className="founder-profile__number">
                    {founder.number}
                  </span>

                  <span className="founder-profile__designation">
                    {founder.designation}
                  </span>
                </div>

                <h3>{founder.name}</h3>

                <div className="founder-profile__meta">
                  <span>
                    <BriefcaseBusiness size={15} />
                    {founder.experience}
                  </span>

                  <span>
                    {founder.expertise}
                  </span>

                  <span>
                    {founder.focus}
                  </span>
                </div>

                <p className="founder-profile__description">
                  {founder.description}
                </p>

                <p className="founder-profile__description founder-profile__description--second">
                  {founder.descriptionTwo}
                </p>

                <div className="founder-profile__quote">
                  <Quote size={28} />

                  <p>
                    “{founder.quote}”
                  </p>
                </div>

                {founder.linkedin !== "#" && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="founder-profile__linkedin"
                  >
                    <LinkedInIcon size={17} />

                    LinkedIn Profile
                  </a>
                )}
              </div>

              <div className="founder-profile__visual">
                <div className="founder-profile__circle-outer">
                  <div className="founder-profile__circle">
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      onError={handleImageError}
                    />
                  </div>
                </div>

                <div className="founder-profile__experience-card">
                  <strong>
                    {founder.experience}
                  </strong>

                  <span>
                    Industry Experience
                  </span>
                </div>

                <div className="founder-profile__decorative-ring" />

                <span className="founder-profile__watermark">
                  {founder.number}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="about-founders__philosophy"
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
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div>
            <span>
              Leadership Philosophy
            </span>

            <strong>
              Experience. Discipline. Trust.
            </strong>
          </div>

          <p>
            We believe sustainable growth is
            created through consistent quality,
            responsible decisions, transparent
            customer relationships and the
            discipline to honour every
            commitment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* =====================================================
   CAPABILITIES
===================================================== */

function CapabilityStats() {
  return (
    <section className="about-capabilities">
      <div className="container about-capabilities__grid">
        {capabilities.map(
          (item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.label}
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
                  amount: 0.45,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >
                <Icon size={27} />

                <strong>
                  {item.value}
                </strong>

                <span>
                  {item.label}
                </span>
              </motion.article>
            );
          }
        )}
      </div>
    </section>
  );
}

/* =====================================================
   MISSION / VISION
===================================================== */

function MissionVision() {
  return (
    <section className="about-purpose">
      <div className="container">
        <div className="about-purpose__heading">
          <div className="about-section-label">
            <span />
            Our Purpose
          </div>

          <h2>
            Built Around Quality, Trust and
            Long-Term Growth
          </h2>
        </div>

        <div className="about-purpose__grid">
          <motion.article
            className="about-purpose__card about-purpose__card--mission"
            initial={{
              opacity: 0,
              y: 28,
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
              duration: 0.6,
            }}
          >
            <span>01</span>

            <h3>Our Mission</h3>

            <p>
              To deliver dependable iron and
              steel products through disciplined
              quality systems, responsive
              support and reliable project
              execution.
            </p>
          </motion.article>

          <motion.article
            className="about-purpose__card about-purpose__card--vision"
            initial={{
              opacity: 0,
              y: 28,
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
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <span>02</span>

            <h3>Our Vision</h3>

            <p>
              To become a trusted industrial
              steel partner recognized for
              quality, operational excellence
              and long-term customer
              relationships.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   JOURNEY
===================================================== */

function Journey() {
  return (
    <section className="about-journey">
      <div className="container">
        <div className="about-journey__heading">
          <div className="about-section-label">
            <span />
            Our Journey
          </div>

          <h2>
            Growing Through Every Stage of
            India&apos;s Industrial Development
          </h2>

          <p>
            Each stage of growth strengthened
            our capabilities, service quality
            and ability to support more
            demanding projects.
          </p>
        </div>

        <div className="about-journey__timeline">
          {milestones.map(
            (milestone, index) => (
              <motion.article
                className="about-journey__item"
                key={milestone.year}
                initial={{
                  opacity: 0,
                  x:
                    index % 2 === 0
                      ? -28
                      : 28,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                }}
              >
                <div className="about-journey__year">
                  {milestone.year}
                </div>

                <div className="about-journey__content">
                  <h3>
                    {milestone.title}
                  </h3>

                  <p>
                    {milestone.description}
                  </p>
                </div>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   VALUES
===================================================== */

function CoreValues() {
  return (
    <section className="about-values">
      <div className="container">
        <div className="about-values__heading">
          <div className="about-section-label">
            <span />
            Our Values
          </div>

          <h2>
            The Principles Behind Every
            Product and Partnership
          </h2>
        </div>

        <div className="about-values__grid">
          {values.map(
            (value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  initial={{
                    opacity: 0,
                    y: 26,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                >
                  <div className="about-values__icon">
                    <Icon size={24} />
                  </div>

                  <h3>{value.title}</h3>

                  <p>
                    {value.description}
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

/* =====================================================
   INFRASTRUCTURE
===================================================== */

function InfrastructurePreview() {
  return (
    <section className="about-infrastructure">
      <div className="container about-infrastructure__grid">
        <motion.div
          className="about-infrastructure__content"
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
          <div className="about-section-label about-section-label--light">
            <span />
            Our Infrastructure
          </div>

          <h2>
            Integrated Facilities Supporting
            Reliable Steel Supply
          </h2>

          <p>
            Our operations combine processing,
            quality verification, warehousing,
            material handling and dispatch
            planning through one coordinated
            system.
          </p>

          <Link
            to="/infrastructure"
            className="about-outline-button"
          >
            Explore Infrastructure
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="about-infrastructure__cards"
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
          <article>
            <img
              src={machineryImage}
              alt="Steel processing equipment"
            />

            <div>
              <Factory size={23} />

              <h3>
                Processing Facilities
              </h3>
            </div>
          </article>

          <article>
            <img
              src={warehouseImage}
              alt="Steel warehouse and logistics"
            />

            <div>
              <Truck size={23} />

              <h3>
                Warehousing &amp; Logistics
              </h3>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}

/* =====================================================
   QUALITY
===================================================== */

function QualityCommitment() {
  return (
    <section className="about-quality">
      <div className="container about-quality__grid">
        <motion.div
          className="about-quality__image"
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
          <img
            src={qualityImage}
            alt="Steel quality verification laboratory"
          />

          <div className="about-quality__badge">
            <ShieldCheck size={27} />

            <div>
              <strong>
                Quality First
              </strong>

              <span>
                Verified before dispatch
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-quality__content"
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
          <div className="about-section-label">
            <span />
            Quality Commitment
          </div>

          <h2>
            Confidence Built Into Every Batch
          </h2>

          <p>
            Quality is managed through
            inspection, dimensional
            verification, testing, product
            traceability and controlled
            handling before dispatch.
          </p>

          <ul>
            <li>
              <CheckCircle2 size={18} />
              Chemical and physical verification
            </li>

            <li>
              <CheckCircle2 size={18} />
              Dimensional and surface inspection
            </li>

            <li>
              <CheckCircle2 size={18} />
              Batch identification and traceability
            </li>

            <li>
              <CheckCircle2 size={18} />
              Controlled packaging and dispatch
            </li>
          </ul>

          <Link
            to="/quality"
            className="about-primary-button"
          >
            View Quality Standards
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* =====================================================
   CTA
===================================================== */

function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="container about-cta__container">
        <div>
          <span>
            Build with Confidence
          </span>

          <h2>
            Partner with a Team That
            Understands Steel
          </h2>

          <p>
            Share your grade, size, quantity
            and project requirement with our
            team for suitable product guidance
            and quotation support.
          </p>
        </div>

        <div className="about-cta__actions">
          <Link
            to="/quote"
            className="about-cta__primary"
          >
            Request a Quote
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="about-cta__secondary"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;