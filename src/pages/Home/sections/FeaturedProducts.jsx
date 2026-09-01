import { useRef } from "react";
import { Link } from "react-router-dom";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import {
  products as allProducts,
} from "../../../data/products";

function ProductCatalogue() {
  const sectionRef = useRef(null);

  const { scrollYProgress } =
    useScroll({
      target: sectionRef,
      offset: [
        "start end",
        "end start",
      ],
    });

  const gridY = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [56, 0, -28]
  );

  const visibleProducts =
    allProducts.slice(0, 10);

  return (
    <section
      ref={sectionRef}
      className="home-products"
    >
      <div
        className="home-products__ambient"
        aria-hidden="true"
      />

      <div className="container home-products__container">

        <motion.div
          className="home-section-head"
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
            duration: 0.55,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
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
              A focused catalogue of
              high-demand steel products
              for construction,
              infrastructure,
              fabrication and industry.
            </p>
          </div>

          <Link
            to="/products"
            className="home-text-link"
          >
            View All Products

            <ArrowRight
              size={18}
            />
          </Link>
        </motion.div>

        <motion.div
          className="home-products__grid"
          style={{
            y: gridY,
          }}
        >
          {visibleProducts.map(
            (product, index) => (
              <motion.article
                key={product.slug}
                className="home-product-card"
                initial={{
                  opacity: 0,
                  y: 38,
                  rotateX: 5,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.58,
                  delay: Math.min(
                    index * 0.045,
                    0.3
                  ),
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                whileHover={{
                  y: -7,
                }}
              >
                <Link
                  to={`/products/${product.slug}`}
                  className="home-product-card__media"
                  aria-label={`View ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                </Link>

                <div
                  className="home-product-card__shade"
                  aria-hidden="true"
                />

                <div className="home-product-card__index">
                  {String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )}
                </div>

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
                      size={16}
                    />
                  </Link>
                </div>
              </motion.article>
            )
          )}
        </motion.div>

        <div className="home-products__footer">
          <span>
            Showing{" "}
            {visibleProducts.length}
            {" "}of{" "}
            {allProducts.length}
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
        </div>
      </div>
    </section>
  );
}

export default ProductCatalogue;