import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  ArrowRight,
  ArrowUpRight,
  Factory,
  Gauge,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

import {
  productCategories,
  products,
} from "../../data/products";

import plantImage from "../../assets/images/infrastructure/infra-plant.jpg";

import "./Products.css";

/* =========================================================
   SUPPLY CAPABILITIES
========================================================= */

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Quality Verification",
    description:
      "Materials are inspected and verified before processing and dispatch.",
  },
  {
    icon: Gauge,
    title: "Custom Processing",
    description:
      "Cutting, sizing and preparation are available according to project requirements.",
  },
  {
    icon: PackageCheck,
    title: "Safe Handling",
    description:
      "Products are packed, labelled and handled through a controlled supply process.",
  },
  {
    icon: Truck,
    title: "Reliable Dispatch",
    description:
      "Inventory and logistics planning support dependable project delivery.",
  },
];

/* =========================================================
   APPLICATIONS
========================================================= */

const applications = [
  "Residential Construction",
  "Commercial Buildings",
  "Infrastructure Projects",
  "Industrial Manufacturing",
  "Engineering & Fabrication",
  "Warehousing & Logistics",
];

/* =========================================================
   PAGE
========================================================= */

function Products() {
  const [
    activeCategory,
    setActiveCategory,
  ] = useState("All Products");

  const filteredProducts =
    useMemo(() => {
      if (
        activeCategory ===
        "All Products"
      ) {
        return products;
      }

      return products.filter(
        (product) =>
          product.category ===
          activeCategory
      );
    }, [activeCategory]);

  return (
    <main className="products-page">
      <ProductsHero />

      <ProductRange
        activeCategory={
          activeCategory
        }
        setActiveCategory={
          setActiveCategory
        }
        filteredProducts={
          filteredProducts
        }
      />

      <ProductCapabilities />

      <Applications />

      <ProductsCTA />
    </main>
  );
}

/* =========================================================
   HERO
========================================================= */

function ProductsHero() {
  return (
    <section className="products-hero">
      <div className="products-hero__ambient" />

      <div className="container">
        <nav
          className="products-hero__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">
            Home
          </Link>

          <span>/</span>

          <strong>
            Products
          </strong>
        </nav>

        <div className="products-hero__grid">
          <motion.div
            className="products-hero__content"
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
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <div className="products-eyebrow">
              <span />

              Our Product Range
            </div>

            <h1>
              Steel Products Built

              <span>
                for Demanding Applications
              </span>
            </h1>

            <p>
              Explore our complete range of steel
              products for construction,
              infrastructure, fabrication,
              engineering, manufacturing and
              industrial requirements.
            </p>

            <div className="products-hero__facts">
              <div>
                <strong>
                  {products.length}
                </strong>

                <span>
                  Products
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

              <div>
                <strong>
                  18
                </strong>

                <span>
                  States Served
                </span>
              </div>
            </div>

            <div className="products-hero__actions">
              <a
                href="#product-range"
                className="products-primary-button"
              >
                Explore Products

                <ArrowRight
                  size={18}
                />
              </a>

              <Link
                to="/quote"
                className="products-text-link"
              >
                Request a Quote

                <ArrowUpRight
                  size={17}
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="products-hero__visual"
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
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <div className="products-hero__image-card">
              <img
                src={plantImage}
                alt="Godavari Iron and Steel product supply facility"
              />

              <div className="products-hero__image-overlay" />

              <div className="products-hero__image-content">
                <span>
                  Integrated Supply
                </span>

                <strong>
                  Reliable Steel Solutions for
                  Every Scale of Project
                </strong>
              </div>
            </div>

            <div className="products-hero__floating-card">
              <Factory
                size={25}
              />

              <div>
                <strong>
                  Complete Product Range
                </strong>

                <span>
                  Construction and engineering steel
                </span>
              </div>
            </div>

            <div className="products-hero__decorative-text">
              STEEL
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PRODUCT RANGE
========================================================= */

function ProductRange({
  activeCategory,
  setActiveCategory,
  filteredProducts,
}) {
  return (
    <section
      className="products-range"
      id="product-range"
    >
      <div className="container products-range__container">
        <div className="products-range__heading-row">
          <div className="products-section-heading">
            <div className="products-section-label">
              <span />

              Product Catalogue
            </div>

            <h2>
              Explore Our Steel Range
            </h2>

            <p>
              Browse our complete catalogue and use
              the categories below to quickly find
              the right steel product.
            </p>
          </div>

          <div className="products-range__count">
            <strong>
              {filteredProducts.length}
            </strong>

            <span>
              Products
            </span>
          </div>
        </div>

        <div className="products-filters-wrap">
          <div
            className="products-filters"
            role="tablist"
            aria-label="Product categories"
          >
            {productCategories.map(
              (category) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={
                    activeCategory ===
                    category
                  }
                  className={`products-filter-button ${
                    activeCategory ===
                    category
                      ? "products-filter-button--active"
                      : ""
                  }`}
                  key={
                    category
                  }
                  onClick={() =>
                    setActiveCategory(
                      category
                    )
                  }
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        <motion.div
          className="products-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map(
              (
                product,
                index
              ) => (
                <ProductCard
                  key={
                    product.slug
                  }
                  product={
                    product
                  }
                  index={
                    index
                  }
                />
              )
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   COMPACT ECOMMERCE PRODUCT CARD
========================================================= */

function ProductCard({
  product,
  index,
}) {
  const primaryGrade =
    product.grades?.[0] ||
    "Multiple";

  const options =
    product.sizes?.length || 0;

  return (
    <motion.article
      className="products-card"
      layout
      initial={{
        opacity: 0,
        y: 18,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.96,
      }}
      transition={{
        duration: 0.35,
        delay:
          Math.min(
            index *
              0.025,
            0.22
          ),
      }}
    >
      <Link
        to={`/products/${product.slug}`}
        className="products-card__image"
        aria-label={`View ${product.name}`}
      >
        <img
          src={
            product.image
          }
          alt={
            product.name
          }
          loading="lazy"
        />

        <div className="products-card__image-overlay" />

        <span className="products-card__category">
          {product.category}
        </span>

        <span className="products-card__arrow">
          <ArrowUpRight
            size={15}
          />
        </span>
      </Link>

      <div className="products-card__content">
        <h3>
          <Link
            to={`/products/${product.slug}`}
          >
            {product.name}
          </Link>
        </h3>

        <div className="products-card__quick-meta">
          <div>
            <span>
              Grade
            </span>

            <strong>
              {primaryGrade}
            </strong>
          </div>

          <span className="products-card__divider" />

          <div>
            <span>
              Options
            </span>

            <strong>
              {options}+
            </strong>
          </div>
        </div>

        <Link
          to={`/products/${product.slug}`}
          className="products-card__link"
        >
          View Details

          <ArrowRight
            size={13}
          />
        </Link>
      </div>
    </motion.article>
  );
}

/* =========================================================
   CAPABILITIES
========================================================= */

function ProductCapabilities() {
  return (
    <section className="products-capabilities">
      <div className="container">
        <div className="products-section-heading products-section-heading--light">
          <div className="products-section-label products-section-label--light">
            <span />

            Supply Capabilities
          </div>

          <h2>
            More Than Products. Complete Steel
            Support.
          </h2>

          <p>
            Our product supply is supported by
            quality verification, processing,
            handling and dependable logistics.
          </p>
        </div>

        <div className="products-capabilities__grid">
          {capabilities.map(
            (
              capability,
              index
            ) => {
              const Icon =
                capability.icon;

              return (
                <motion.article
                  key={
                    capability.title
                  }
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
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.5,
                    delay:
                      index *
                      0.07,
                  }}
                >
                  <div className="products-capabilities__icon">
                    <Icon
                      size={24}
                    />
                  </div>

                  <h3>
                    {
                      capability.title
                    }
                  </h3>

                  <p>
                    {
                      capability.description
                    }
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

/* =========================================================
   APPLICATIONS
========================================================= */

function Applications() {
  return (
    <section className="products-applications">
      <div className="container products-applications__grid">
        <motion.div
          className="products-applications__content"
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
          <div className="products-section-label">
            <span />

            Product Applications
          </div>

          <h2>
            Steel Products Supporting Every Major
            Industry
          </h2>

          <p>
            Our products are supplied across
            construction, infrastructure,
            manufacturing, engineering and
            industrial applications.
          </p>

          <Link
            to="/industries"
            className="products-primary-button"
          >
            Explore Industries

            <ArrowRight
              size={18}
            />
          </Link>
        </motion.div>

        <motion.div
          className="products-applications__list"
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
          {applications.map(
            (
              application,
              index
            ) => (
              <div
                key={
                  application
                }
              >
                <span>
                  {String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )}
                </span>

                <strong>
                  {application}
                </strong>

                <ArrowUpRight
                  size={18}
                />
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function ProductsCTA() {
  return (
    <section className="products-cta">
      <div className="container products-cta__container">
        <div>
          <span>
            Product Enquiry
          </span>

          <h2>
            Need Help Selecting the Right Steel
            Product?
          </h2>

          <p>
            Share your grade, size, quantity,
            application and delivery requirement.
            Our team will help you identify a
            suitable product solution.
          </p>
        </div>

        <div className="products-cta__actions">
          <Link
            to="/quote"
            className="products-cta__primary"
          >
            Request a Quote

            <ArrowUpRight
              size={18}
            />
          </Link>

          <Link
            to="/contact"
            className="products-cta__secondary"
          >
            Contact Our Team

            <ArrowRight
              size={18}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Products;