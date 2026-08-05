import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Mail,
  Newspaper,
  ShieldCheck,
} from "lucide-react";

import {
  blogCategories,
  blogMedia,
  blogPosts,
  blogStats,
  knowledgeAreas,
} from "../../data/blog";

import "./Blog.css";

function Blog() {
  const [activeCategory, setActiveCategory] =
    useState("All Articles");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All Articles") {
      return blogPosts;
    }

    return blogPosts.filter(
      (post) => post.category === activeCategory
    );
  }, [activeCategory]);

  const featuredPost =
    blogPosts.find((post) => post.featured) || blogPosts[0];

  return (
    <main className="blog-page">
      <BlogHero featuredPost={featuredPost} />
      <BlogOverview />
      <BlogStatistics />
      <BlogListing
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        filteredPosts={filteredPosts}
      />
      <KnowledgeAreas />
      <BlogNewsletter />
      <BlogCTA />
    </main>
  );
}

function BlogHero({ featuredPost }) {
  return (
    <section className="blog-hero">
      <div className="blog-hero__ambient" />

      <div className="container">
        <nav
          className="blog-hero__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">Home</Link>
          <span>/</span>
          <strong>Blog</strong>
        </nav>

        <div className="blog-hero__grid">
          <motion.div
            className="blog-hero__content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="blog-label">
              <span />
              Steel Knowledge Hub
            </div>

            <h1>
              Insights for Better
              <span>Steel Decisions</span>
            </h1>

            <p>
              Explore practical guides, quality insights, product
              knowledge and project-focused information from the
              Godavari Iron &amp; Steel team.
            </p>

            <div className="blog-hero__facts">
              <div>
                <strong>8+</strong>
                <span>Industry Articles</span>
              </div>

              <div>
                <strong>6</strong>
                <span>Knowledge Categories</span>
              </div>

              <div>
                <strong>27+</strong>
                <span>Years of Experience</span>
              </div>
            </div>

            <div className="blog-hero__actions">
              <a
                href="#blog-articles"
                className="blog-primary-button"
              >
                Explore Articles
                <ArrowRight size={18} />
              </a>

              <Link
                to="/contact"
                className="blog-text-link"
              >
                Ask Our Team
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="blog-hero__visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="blog-hero__featured-card"
            >
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
              />

              <div className="blog-hero__image-overlay" />

              <div className="blog-hero__featured-content">
                <span>{featuredPost.category}</span>

                <strong>{featuredPost.title}</strong>

                <div>
                  <CalendarDays size={14} />
                  {featuredPost.date}
                </div>
              </div>
            </Link>

            <div className="blog-hero__floating-card">
              <BookOpen size={25} />

              <div>
                <strong>Featured Article</strong>
                <span>{featuredPost.readingTime}</span>
              </div>
            </div>

            <div className="blog-hero__decorative-text">
              READ
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BlogOverview() {
  return (
    <section className="blog-overview">
      <div className="container blog-overview__grid">
        <motion.div
          className="blog-overview__content"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="blog-label">
            <span />
            Knowledge &amp; Expertise
          </div>

          <h2>
            Practical Steel Knowledge for Projects and Procurement
          </h2>

          <p>
            Our blog is designed to help builders, contractors,
            engineers and procurement teams understand steel products,
            quality factors and project-supply considerations.
          </p>

          <p>
            Each article focuses on practical information that can support
            better product selection, planning and coordination.
          </p>

          <div className="blog-overview__points">
            <div>
              <ShieldCheck size={18} />
              <span>Product and grade guidance</span>
            </div>

            <div>
              <ShieldCheck size={18} />
              <span>Quality-control insights</span>
            </div>

            <div>
              <ShieldCheck size={18} />
              <span>Project planning information</span>
            </div>

            <div>
              <ShieldCheck size={18} />
              <span>Industry-focused articles</span>
            </div>
          </div>

          <Link
            to="/products"
            className="blog-primary-button"
          >
            Explore Products
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="blog-overview__visual"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
        >
          <div className="blog-overview__main-image">
            <img
              src={blogMedia.qualityImage}
              alt="Steel quality knowledge and testing"
            />
          </div>

          <div className="blog-overview__small-image">
            <img
              src={blogMedia.plantImage}
              alt="Steel manufacturing infrastructure"
            />
          </div>

          <div className="blog-overview__badge">
            <Newspaper size={24} />

            <div>
              <strong>Industry Knowledge</strong>
              <span>Practical guidance from experience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BlogStatistics() {
  return (
    <section className="blog-statistics">
      <div className="container blog-statistics__grid">
        {blogStats.map((stat, index) => (
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

function BlogListing({
  activeCategory,
  setActiveCategory,
  filteredPosts,
}) {
  return (
    <section
      className="blog-listing"
      id="blog-articles"
    >
      <div className="container">
        <div className="blog-heading">
          <div className="blog-label">
            <span />
            Latest Articles
          </div>

          <h2>
            Product Guides, Quality Insights and Industry Knowledge
          </h2>

          <p>
            Browse articles covering steel products, project applications,
            quality verification and industrial supply.
          </p>
        </div>

        <div
          className="blog-filters"
          role="tablist"
          aria-label="Blog categories"
        >
          {blogCategories.map((category) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`blog-filter-button ${
                activeCategory === category
                  ? "blog-filter-button--active"
                  : ""
              }`}
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          className="blog-grid"
          layout
        >
          {filteredPosts.map((post, index) => {
            const Icon = post.icon;

            return (
              <motion.article
                className="blog-card"
                key={post.id}
                layout
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{ y: -8 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="blog-card__image"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                  />

                  <div className="blog-card__overlay" />

                  <span className="blog-card__category">
                    {post.category}
                  </span>

                  <span className="blog-card__icon">
                    <Icon size={20} />
                  </span>
                </Link>

                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <span>
                      <CalendarDays size={14} />
                      {post.date}
                    </span>

                    <span>
                      <Clock3 size={14} />
                      {post.readingTime}
                    </span>
                  </div>

                  <h3>
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p>{post.excerpt}</p>

                  <div className="blog-card__footer">
                    <span>{post.author}</span>

                    <Link to={`/blog/${post.slug}`}>
                      Read Article
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function KnowledgeAreas() {
  return (
    <section className="blog-knowledge">
      <div className="container">
        <div className="blog-heading blog-heading--light">
          <div className="blog-label blog-label--light">
            <span />
            Knowledge Areas
          </div>

          <h2>
            Content Built Around Real Steel Requirements
          </h2>

          <p>
            Our articles focus on the questions customers commonly face
            during product selection and project planning.
          </p>
        </div>

        <div className="blog-knowledge__grid">
          {knowledgeAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >
                <div className="blog-knowledge__icon">
                  <Icon size={24} />
                </div>

                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BlogNewsletter() {
  return (
    <section className="blog-newsletter">
      <div className="container blog-newsletter__grid">
        <motion.div
          className="blog-newsletter__content"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="blog-label">
            <span />
            Stay Informed
          </div>

          <h2>
            Receive New Steel Guides and Industry Insights
          </h2>

          <p>
            Subscribe to receive practical product guides, quality
            insights and project-focused information.
          </p>
        </motion.div>

        <motion.form
          className="blog-newsletter__form"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
          onSubmit={(event) => event.preventDefault()}
        >
          <Mail size={20} />

          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
          />

          <button type="submit">
            Subscribe
            <ArrowRight size={17} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function BlogCTA() {
  return (
    <section className="blog-cta">
      <div className="container blog-cta__container">
        <div>
          <span>Need Technical Guidance?</span>

          <h2>
            Have a Steel Product or Project Question?
          </h2>

          <p>
            Share your product, grade, size, application or project
            requirement. Our team will help you with suitable guidance
            and supply support.
          </p>
        </div>

        <div className="blog-cta__actions">
          <Link
            to="/contact"
            className="blog-cta__primary"
          >
            Contact Our Team
            <ArrowUpRight size={18} />
          </Link>

          <Link
            to="/quote"
            className="blog-cta__secondary"
          >
            Request a Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blog;
