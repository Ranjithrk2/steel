import { Link } from "react-router-dom";
import { motion } from "motion/react";

import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import {
  products as catalogueProducts,
} from "../../../data/products";

function ProductCatalogue() {
  const visibleProducts =
    catalogueProducts.slice(0, 10);

  return (
    <section className="home-products">
      <div
        className="home-products__ambient"
        aria-hidden="true"
      />

      <div className="container home-products__container">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <motion.div
          className="home-section-head"
          initial={{
            opacity: 0,
            y: 16,
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
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <div className="home-kicker">
              <span />
              Product Catalogue
            </div>

            <h2>
              Steel for Every Requirement
            </h2>

            <p>
              A focused catalogue of high-demand steel products
              for construction, infrastructure, fabrication
              and industry.
            </p>
          </div>

          <Link
            to="/products"
            className="home-text-link"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* =========================================
            PRODUCT GRID
        ========================================= */}

        <div className="home-products__grid">
          {visibleProducts.map(
            (product, index) => (
              <motion.article
                key={
                  product.id ||
                  product.slug
                }
                className="home-product-card"

                initial={{
                  opacity: 0,
                  y: 18,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.12,
                }}

                transition={{
                  duration: 0.42,

                  delay:
                    (index % 5) * 0.045,

                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
              >
                {/* PRODUCT IMAGE */}

                <Link
                  to={`/products/${product.slug}`}
                  className="home-product-card__media"
                  aria-label={`View ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading={
                      index < 5
                        ? "eager"
                        : "lazy"
                    }
                  />
                </Link>

                {/* IMAGE SHADE */}

                <div
                  className="home-product-card__shade"
                  aria-hidden="true"
                />

                {/* PRODUCT NUMBER */}

                <div className="home-product-card__index">
                  {String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )}
                </div>

                {/* PRODUCT CONTENT */}

                <div className="home-product-card__content">
                  <span>
                    {product.category}
                  </span>

                  <h3>
                    {product.name}
                  </h3>

                  <Link
                    to={`/products/${product.slug}`}
                  >
                    View Product

                    <ArrowUpRight
                      size={15}
                    />
                  </Link>
                </div>
              </motion.article>
            )
          )}
        </div>

        {/* =========================================
            BOTTOM
        ========================================= */}

        <motion.div
          className="home-products__footer"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <span>
            Showing{" "}
            {visibleProducts.length}
            {" "}of{" "}
            {catalogueProducts.length}
            {" "}products
          </span>

          <Link
            to="/products"
            className="home-text-link"
          >
            Explore Complete Catalogue

            <ArrowRight
              size={16}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductCatalogue;