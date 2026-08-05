import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { products } from "../../../data/homeData";
import SectionHeading from "./SectionHeading";

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            label="Product Range"
            title="Four Families. One Standard."
            description="Every product family is selected, processed and verified with a consistent focus on reliability."
          />

          <Link to="/products" className="text-link">
            All Products
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="featured-products__grid">
          {products.map((product, index) => (
            <motion.article
              className="product-card"
              key={product.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              whileHover={{ y: -8 }}
            >
              <Link
                to={`/products/${product.slug}`}
                className="product-card__image"
              >
                <img src={product.image} alt={product.name} />
                <span className="product-card__arrow">
                  <ArrowUpRight size={18} />
                </span>
              </Link>

              <div className="product-card__content">
                <span>{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>

                <Link to={`/products/${product.slug}`}>
                  View Details
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;

