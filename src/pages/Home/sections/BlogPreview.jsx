import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { blogPosts } from "../../../data/homeData";
import SectionHeading from "./SectionHeading";

function BlogPreview() {
  return (
    <section className="blog-preview">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            label="Insights"
            title="From the Mill Floor"
            description="Product knowledge, technical guidance and industry perspective."
          />

          <Link to="/blog" className="text-link">
            Read the Blog
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="blog-preview__grid">
          {blogPosts.map((post, index) => (
            <motion.article
              className="blog-card"
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Link to="/blog" className="blog-card__image">
                <img src={post.image} alt={post.title} />
              </Link>

              <div className="blog-card__content">
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.date}</p>

                <Link to="/blog">
                  Read Article
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

export default BlogPreview;

