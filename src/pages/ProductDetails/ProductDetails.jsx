import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Factory,
  FileCheck2,
  Gauge,
  HardHat,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import {
  getProductBySlug,
  getRelatedProducts,
} from "../../data/products";

import qualityImage from "../../assets/images/quality/quality-lab.jpg";
import machineryImage from "../../assets/images/infrastructure/infra-machinery.jpg";

import "./ProductDetails.css";

const productProcess = [
  {
    number: "01",
    title: "Requirement Review",
    description:
      "Our team reviews the required product, grade, dimensions, quantity and project application.",
    icon: FileCheck2,
  },
  {
    number: "02",
    title: "Material Planning",
    description:
      "Suitable material specifications and processing requirements are confirmed.",
    icon: Gauge,
  },
  {
    number: "03",
    title: "Quality Verification",
    description:
      "Materials are inspected for dimensional, surface and product-quality requirements.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Processing",
    description:
      "Cutting, sizing or project-specific preparation is completed when required.",
    icon: Factory,
  },
  {
    number: "05",
    title: "Packing",
    description:
      "Products are safely bundled, labelled and prepared for transportation.",
    icon: PackageCheck,
  },
  {
    number: "06",
    title: "Dispatch",
    description:
      "The final material is coordinated through our dependable logistics network.",
    icon: Truck,
  },
];

const qualityChecks = [
  {
    icon: Gauge,
    title: "Dimensional Inspection",
    description:
      "Product dimensions and tolerances are checked against the required specification.",
  },
  {
    icon: ShieldCheck,
    title: "Material Verification",
    description:
      "Material grade and product characteristics are reviewed before dispatch.",
  },
  {
    icon: Sparkles,
    title: "Surface Inspection",
    description:
      "Products are checked for visible defects, finish and handling condition.",
  },
  {
    icon: FileCheck2,
    title: "Batch Traceability",
    description:
      "Product identification and supporting quality information are maintained.",
  },
  {
    icon: Ruler,
    title: "Specification Check",
    description:
      "Sizes, profiles and product details are matched with the confirmed order.",
  },
  {
    icon: PackageCheck,
    title: "Dispatch Inspection",
    description:
      "Packing, labelling and loading condition are checked before transportation.",
  },
];

function ProductDetails() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const relatedProducts = getRelatedProducts(slug, 3);

  if (!product) {
    return <ProductNotFound />;
  }

  const grades = Array.isArray(product.grades) ? product.grades : [];
  const sizes = Array.isArray(product.sizes) ? product.sizes : [];
  const benefits = Array.isArray(product.benefits) ? product.benefits : [];
  const applications = Array.isArray(product.applications)
    ? product.applications
    : [];
  const specifications = Array.isArray(product.specifications)
    ? product.specifications
    : [];

  return (
    <main className="product-details-page">
      <ProductHero product={product} grades={grades} sizes={sizes} />
      <ProductOverview product={product} benefits={benefits} />
      <ProductSpecifications
        specifications={specifications}
        grades={grades}
        sizes={sizes}
      />
      <AvailableOptions grades={grades} sizes={sizes} />
      <ProductApplications applications={applications} />
      <ManufacturingProcess />
      <QualityAssurance />
      <RelatedProducts products={relatedProducts} />
      <ProductCTA product={product} />
    </main>
  );
}

function ProductHero({ product, grades, sizes }) {
  return (
    <section className="product-details-hero">
      <div className="product-details-hero__ambient" />

      <div className="container">
        <nav
          className="product-details-breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <strong>{product.shortName || product.name}</strong>
        </nav>

        <div className="product-details-hero__grid">
          <motion.div
            className="product-details-hero__content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="product-details-label">
              <span />
              {product.category}
            </div>

            <h1>{product.name}</h1>
            <p>{product.shortDescription}</p>

            <div className="product-details-hero__quick-info">
              <div>
                <span>Available Grades</span>
                <strong>
                  {grades.length > 0
                    ? `${grades.length}+ Options`
                    : "Project Specific"}
                </strong>
              </div>

              <div>
                <span>Available Sizes</span>
                <strong>
                  {sizes.length > 0
                    ? `${sizes.length}+ Options`
                    : "Custom Sizes"}
                </strong>
              </div>

              <div>
                <span>Supply Type</span>
                <strong>Bulk &amp; Project</strong>
              </div>
            </div>

            <div className="product-details-hero__actions">
              <Link
                to="/quote"
                className="product-details-primary-button"
              >
                Request a Quote
                <ArrowUpRight size={18} />
              </Link>

              <a
                href="#specifications"
                className="product-details-outline-button product-details-outline-button--dark"
              >
                View Specifications
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="product-details-hero__visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="product-details-hero__image">
              <img
                src={product.image}
                alt={product.name}
              />

              <div className="product-details-hero__image-overlay" />

              <div className="product-details-hero__image-caption">
                <span>Godavari Iron &amp; Steel</span>
                <strong>
                  Reliable Material for Demanding Projects
                </strong>
              </div>
            </div>

            <div className="product-details-hero__grade-card">
              <ShieldCheck size={25} />
              <div>
                <span>Available Grades</span>
                <strong>
                  {grades.slice(0, 3).join(" · ") || "Project Grade"}
                </strong>
              </div>
            </div>

            <div className="product-details-hero__steel-text">
              STEEL
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductOverview({ product, benefits }) {
  return (
    <section className="product-overview">
      <div className="container product-overview__grid">
        <motion.div
          className="product-overview__media"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="product-overview__main-image">
            <img
              src={product.image}
              alt={`${product.name} product`}
            />
          </div>

          <div className="product-overview__small-image">
            <img
              src={machineryImage}
              alt="Steel processing facility"
            />
          </div>

          <div className="product-overview__badge">
            <Factory size={24} />
            <div>
              <strong>Reliable Supply</strong>
              <span>Project-focused support</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="product-overview__content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <div className="product-details-label">
            <span />
            Product Overview
          </div>

          <h2>
            Engineered for Strength, Accuracy and Dependable Performance
          </h2>

          <p>{product.description}</p>

          <p>
            Our team supports customers with product selection,
            specification guidance, processing coordination and
            project-based material supply.
          </p>

          <div className="product-overview__benefits">
            {benefits.map((benefit) => (
              <div key={benefit}>
                <CheckCircle2 size={18} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="product-details-primary-button"
          >
            Speak with Our Team
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProductSpecifications({
  specifications,
  grades,
  sizes,
}) {
  const fallbackSpecifications = [
    {
      label: "Available Grades",
      value:
        grades.join(", ") ||
        "Available according to project requirements",
    },
    {
      label: "Available Sizes",
      value:
        sizes.join(", ") ||
        "Standard and custom sizes available",
    },
    {
      label: "Supply Type",
      value: "Bulk and project-based supply",
    },
    {
      label: "Processing",
      value:
        "Cutting and project-specific preparation available",
    },
  ];

  const displayedSpecifications =
    specifications.length > 0
      ? specifications
      : fallbackSpecifications;

  return (
    <section
      className="product-specifications"
      id="specifications"
    >
      <div className="container">
        <div className="product-details-heading">
          <div className="product-details-label">
            <span />
            Technical Information
          </div>

          <h2>Product Specifications</h2>

          <p>
            Product availability and specifications may vary according
            to grade, size, quantity and project requirements.
          </p>
        </div>

        <motion.div
          className="product-specifications__table"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="product-specifications__header">
            <span>Parameter</span>
            <span>Product Information</span>
          </div>

          {displayedSpecifications.map((specification) => (
            <div
              className="product-specifications__row"
              key={specification.label}
            >
              <strong>{specification.label}</strong>
              <span>{specification.value}</span>
            </div>
          ))}
        </motion.div>

        <p className="product-specifications__note">
          The above information is indicative. Confirm the final
          grade, size and technical requirement with our team before
          placing an order.
        </p>
      </div>
    </section>
  );
}

function AvailableOptions({ grades, sizes }) {
  return (
    <section className="product-options">
      <div className="container">
        <div className="product-details-heading">
          <div className="product-details-label">
            <span />
            Available Options
          </div>

          <h2>Grades and Product Sizes</h2>

          <p>
            Choose from commonly available options or contact our team
            for project-specific product requirements.
          </p>
        </div>

        <div className="product-options__columns">
          <div className="product-options__group">
            <h3>Available Grades</h3>

            <div className="product-options__grid">
              {(grades.length > 0
                ? grades
                : ["Commercial Grade", "Structural Grade"]
              ).map((grade, index) => (
                <motion.div
                  className="product-option-card"
                  key={grade}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  whileHover={{ y: -6 }}
                >
                  <ShieldCheck size={20} />
                  <strong>{grade}</strong>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="product-options__group">
            <h3>Sizes and Profiles</h3>

            <div className="product-options__grid">
              {(sizes.length > 0
                ? sizes
                : ["Standard Sizes", "Custom Options"]
              ).map((size, index) => (
                <motion.div
                  className="product-option-card"
                  key={size}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  whileHover={{ y: -6 }}
                >
                  <Ruler size={20} />
                  <strong>{size}</strong>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductApplications({ applications }) {
  const displayedApplications =
    applications.length > 0
      ? applications
      : [
          "Construction Projects",
          "Industrial Applications",
          "Engineering & Fabrication",
          "Infrastructure Development",
        ];

  return (
    <section className="product-applications">
      <div className="container">
        <div className="product-details-heading product-details-heading--light">
          <div className="product-details-label product-details-label--light">
            <span />
            Product Applications
          </div>

          <h2>Where This Product Performs</h2>

          <p>
            Suitable for a range of construction, engineering,
            infrastructure and industrial requirements.
          </p>
        </div>

        <div className="product-applications__grid">
          {displayedApplications.map((application, index) => (
            <motion.article
              key={application}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              whileHover={{ y: -7 }}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="product-applications__icon">
                {index % 3 === 0 ? (
                  <Building2 size={23} />
                ) : index % 3 === 1 ? (
                  <HardHat size={23} />
                ) : (
                  <Factory size={23} />
                )}
              </div>

              <h3>{application}</h3>

              <p>
                Reliable product performance for demanding project
                and industrial conditions.
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ManufacturingProcess() {
  return (
    <section className="product-process">
      <div className="container">
        <div className="product-details-heading">
          <div className="product-details-label">
            <span />
            Supply Process
          </div>

          <h2>From Requirement to Dispatch</h2>

          <p>
            A structured supply workflow supports clear specifications,
            verified quality and dependable delivery.
          </p>
        </div>

        <div className="product-process__timeline">
          {productProcess.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                className="product-process__step"
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
              >
                <div className="product-process__icon">
                  <Icon size={22} />
                </div>

                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QualityAssurance() {
  return (
    <section className="product-quality">
      <div className="container product-quality__grid">
        <motion.div
          className="product-quality__content"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="product-details-label product-details-label--light">
            <span />
            Quality Assurance
          </div>

          <h2>Verified Before Every Dispatch</h2>

          <p>
            Our quality process focuses on product identification,
            dimensional verification, surface condition, specification
            matching and safe dispatch preparation.
          </p>

          <Link
            to="/quality"
            className="product-details-outline-button"
          >
            Explore Quality Standards
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="product-quality__media"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
        >
          <img
            src={qualityImage}
            alt="Steel quality assurance testing"
          />

          <div className="product-quality__media-overlay" />

          <div className="product-quality__media-caption">
            <ShieldCheck size={28} />

            <div>
              <strong>Quality Controlled</strong>
              <span>
                Product verification and traceability
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container product-quality__checks">
        {qualityChecks.map((check, index) => {
          const Icon = check.icon;

          return (
            <motion.article
              key={check.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
            >
              <Icon size={22} />
              <h3>{check.title}</h3>
              <p>{check.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function RelatedProducts({ products }) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="related-products">
      <div className="container">
        <div className="related-products__heading-row">
          <div className="product-details-heading">
            <div className="product-details-label">
              <span />
              Related Products
            </div>

            <h2>Explore More Steel Solutions</h2>

            <p>
              Browse other products available for construction,
              fabrication, engineering and industrial projects.
            </p>
          </div>

          <Link
            to="/products"
            className="related-products__all-link"
          >
            View All Products
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="related-products__grid">
          {products.map((product, index) => (
            <motion.article
              className="related-product-card"
              key={product.slug}
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
                to={`/products/${product.slug}`}
                className="related-product-card__image"
              >
                <img
                  src={product.image}
                  alt={product.name}
                />
                <div />
                <span>
                  <ArrowUpRight size={19} />
                </span>
              </Link>

              <div className="related-product-card__content">
                <small>{product.category}</small>
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>

                <Link to={`/products/${product.slug}`}>
                  View Product
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

function ProductCTA({ product }) {
  return (
    <section className="product-details-cta">
      <div className="container product-details-cta__container">
        <div>
          <span>Product Enquiry</span>

          <h2>
            Need {product.shortName || product.name} for Your Project?
          </h2>

          <p>
            Share your required grade, size, quantity, application and
            delivery location with our team for suitable product
            guidance and quotation support.
          </p>
        </div>

        <div className="product-details-cta__actions">
          <Link
            to="/quote"
            className="product-details-cta__primary"
          >
            Request a Quote
            <ArrowUpRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="product-details-cta__secondary"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductNotFound() {
  return (
    <main className="product-not-found">
      <div className="container product-not-found__container">
        <span>404</span>
        <h1>Product Not Found</h1>

        <p>
          The requested product does not exist or may have been removed.
        </p>

        <Link
          to="/products"
          className="product-details-primary-button"
        >
          <ArrowLeft size={18} />
          Return to Products
        </Link>
      </div>
    </main>
  );
}

export default ProductDetails;
