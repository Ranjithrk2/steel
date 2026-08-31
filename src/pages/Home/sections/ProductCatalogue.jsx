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

import { products } from "../../../data/homeData";

function ProductCatalogue() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gridY = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [65, 0, -40]
  );

  const visibleProducts = products.slice(0, 4);

  return (
    <section
      ref={sectionRef}
      className="home-products"
    >
      <div className="home-products__ambient" />

      <div className="container home-products__container">
        <motion.div
          className="home-section-head"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
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
              for construction, infrastructure, fabrication and industry.
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

        <motion.div
          className="home-products__grid"
          style={{ y: gridY }}
        >
          {visibleProducts.map((product, index) => (
            <motion.article
              key={product.slug}
              className="home-product-card"
              initial={{
                opacity: 0,
                y: 40,
                rotateX: 5,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="home-product-card__media">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="home-product-card__shade" />

              <div className="home-product-card__index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="home-product-card__content">
                <span>{product.category}</span>

                <h3>{product.name}</h3>

                <Link
                  to={`/products/${product.slug}`}
                >
                  View Product
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProductCatalogue;
