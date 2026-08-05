import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Copy,
  Mail,
  Quote,
  Share2,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import {
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "../../data/blog";

import "./BlogDetails.css";

const articleSections = [
  {
    heading: "Understanding the Requirement",
    paragraphs: [
      "Steel selection should begin with the actual application, structural requirement, expected load, environmental conditions and delivery schedule.",
      "The right choice depends on more than product availability. Grade, dimensions, processing needs and project coordination should all be reviewed together.",
    ],
  },
  {
    heading: "Key Factors to Evaluate",
    bullets: [
      "Required product grade and applicable specification",
      "Project application and structural demand",
      "Size, profile and dimensional tolerance",
      "Surface condition and handling requirements",
      "Processing, cutting or fabrication support",
      "Quantity planning and delivery schedule",
    ],
  },
  {
    heading: "Why Quality Verification Matters",
    paragraphs: [
      "Quality verification helps confirm that the supplied product matches the confirmed requirement before dispatch.",
      "Dimensional checks, surface inspection, material identification and order review reduce the risk of mismatch at the project site.",
    ],
  },
  {
    heading: "Planning the Supply Process",
    paragraphs: [
      "Large projects often require phased delivery rather than one-time supply. Inventory planning, packing, labelling and transport coordination should therefore be aligned with the site schedule.",
      "A structured supply process supports better project control and helps avoid unnecessary delays.",
    ],
  },
];

function BlogDetails() {
  const { slug } = useParams();

  const post = getBlogPostBySlug(slug);

  const relatedPosts = getRelatedBlogPosts(
    slug,
    3
  );

  if (!post) {
    return <BlogNotFound />;
  }

  return (
    <main className="blog-details-page">
      <BlogDetailsHero post={post} />

      <ArticleLayout post={post} />

      <ArticleTakeaways />

      <RelatedArticles posts={relatedPosts} />

      <BlogDetailsCTA />
    </main>
  );
}

function BlogDetailsHero({ post }) {
  return (
    <section className="blog-details-hero">
      <div className="blog-details-hero__ambient" />

      <div className="container">
        <nav
          className="blog-details-breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">
            Home
          </Link>

          <span>/</span>

          <Link to="/blog">
            Blog
          </Link>

          <span>/</span>

          <strong>
            {post.title}
          </strong>
        </nav>

        <div className="blog-details-hero__grid">
          <motion.div
            className="blog-details-hero__content"
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
            <div className="blog-details-label">
              <span />

              {post.category}
            </div>

            <h1>
              {post.title}
            </h1>

            <p>
              {post.excerpt}
            </p>

            <div className="blog-details-hero__meta">
              <span>
                <CalendarDays size={16} />

                {post.date}
              </span>

              <span>
                <Clock3 size={16} />

                {post.readingTime}
              </span>

              <span>
                <UserRound size={16} />

                {post.author}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="blog-details-hero__visual"
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
            <div className="blog-details-hero__image">
              <img
                src={post.image}
                alt={post.title}
              />

              <div className="blog-details-hero__image-overlay" />

              <div className="blog-details-hero__caption">
                <span>
                  {post.category}
                </span>

                <strong>
                  Practical Steel Knowledge from Industry
                  Experience
                </strong>
              </div>
            </div>

            <div className="blog-details-hero__floating-card">
              <BookOpen size={25} />

              <div>
                <strong>
                  Industry Article
                </strong>

                <span>
                  {post.readingTime}
                </span>
              </div>
            </div>

            <div className="blog-details-hero__decorative-text">
              READ
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArticleLayout({ post }) {
  const handleShare = async () => {
    try {
      const shareData = {
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      };

      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(
        window.location.href
      );

      window.alert(
        "Article link copied to clipboard."
      );
    } catch (error) {
      console.error(
        "Unable to share article:",
        error
      );
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.href
      );

      window.alert(
        "Article link copied to clipboard."
      );
    } catch (error) {
      console.error(
        "Unable to copy article link:",
        error
      );
    }
  };

  const emailSubject = encodeURIComponent(
    post.title
  );

  const emailBody = encodeURIComponent(
    `${post.excerpt}\n\n${window.location.href}`
  );

  return (
    <section className="blog-details-article">
      <div className="container blog-details-article__grid">
        <motion.article
          className="blog-details-article__content"
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
            amount: 0.12,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="blog-details-article__featured-image"
          />

          <p className="blog-details-article__lead">
            {post.excerpt}
          </p>

          <p>
            Selecting and supplying steel for a project
            requires careful understanding of application,
            quality expectations, dimensions, quantity and
            delivery coordination.
          </p>

          <blockquote>
            <Quote size={30} />

            <p>
              Good steel procurement is not only about buying
              material. It is about matching the correct
              product to the correct application.
            </p>
          </blockquote>

          {articleSections.map((section) => (
            <section
              className="blog-details-content-section"
              key={section.heading}
            >
              <h2>
                {section.heading}
              </h2>

              {section.paragraphs?.map(
                (paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                )
              )}

              {section.bullets ? (
                <ul>
                  {section.bullets.map(
                    (item) => (
                      <li key={item}>
                        <CheckCircle2 size={18} />

                        <span>
                          {item}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              ) : null}
            </section>
          ))}

          <div className="blog-details-article__conclusion">
            <ShieldCheck size={28} />

            <div>
              <h3>
                Need Product-Specific Guidance?
              </h3>

              <p>
                Our team can help you review grade, size,
                quantity and project-delivery requirements.
              </p>
            </div>
          </div>
        </motion.article>

        <aside className="blog-details-sidebar">
          <div className="blog-details-sidebar__card">
            <span>
              Article Information
            </span>

            <div>
              <CalendarDays size={18} />

              <p>
                <small>
                  Published
                </small>

                <strong>
                  {post.date}
                </strong>
              </p>
            </div>

            <div>
              <Clock3 size={18} />

              <p>
                <small>
                  Reading Time
                </small>

                <strong>
                  {post.readingTime}
                </strong>
              </p>
            </div>

            <div>
              <UserRound size={18} />

              <p>
                <small>
                  Written By
                </small>

                <strong>
                  {post.author}
                </strong>
              </p>
            </div>
          </div>

          <div className="blog-details-sidebar__card">
            <span>
              Article Category
            </span>

            <Link to="/blog">
              {post.category}

              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="blog-details-sidebar__card">
            <span>
              Share Article
            </span>

            <div className="blog-details-sidebar__social">
              <button
                type="button"
                aria-label="Share article"
                title="Share article"
                onClick={handleShare}
              >
                <Share2 size={17} />
              </button>

              <button
                type="button"
                aria-label="Copy article link"
                title="Copy article link"
                onClick={handleCopyLink}
              >
                <Copy size={17} />
              </button>

              <a
                href={`mailto:?subject=${emailSubject}&body=${emailBody}`}
                aria-label="Share article by email"
                title="Share article by email"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          <div className="blog-details-sidebar__cta">
            <BookOpen size={28} />

            <h3>
              Explore More Steel Insights
            </h3>

            <p>
              Browse product guides, quality articles and
              project knowledge.
            </p>

            <Link to="/blog">
              View All Articles

              <ArrowRight size={17} />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ArticleTakeaways() {
  const points = [
    "Start with the project application and specification",
    "Confirm grade, size and dimensional requirements",
    "Review quality and traceability information",
    "Plan processing, packing and phased delivery",
  ];

  return (
    <section className="blog-details-takeaways">
      <div className="container">
        <div className="blog-details-heading">
          <div className="blog-details-label">
            <span />

            Key Takeaways
          </div>

          <h2>
            What to Remember Before Placing a Steel Order
          </h2>
        </div>

        <div className="blog-details-takeaways__grid">
          {points.map(
            (point, index) => (
              <motion.article
                key={point}
                initial={{
                  opacity: 0,
                  y: 22,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
              >
                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <CheckCircle2 size={23} />

                <h3>
                  {point}
                </h3>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function RelatedArticles({ posts }) {
  if (!posts?.length) {
    return null;
  }

  return (
    <section className="blog-details-related">
      <div className="container">
        <div className="blog-details-related__heading-row">
          <div className="blog-details-heading">
            <div className="blog-details-label">
              <span />

              Related Articles
            </div>

            <h2>
              Continue Exploring Steel Knowledge
            </h2>

            <p>
              Read more product guides, quality insights and
              project-focused articles.
            </p>
          </div>

          <Link
            to="/blog"
            className="blog-details-related__all-link"
          >
            View All Articles

            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="blog-details-related__grid">
          {posts.map(
            (relatedPost, index) => (
              <motion.article
                className="blog-details-related-card"
                key={relatedPost.slug}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -8,
                }}
              >
                <Link
                  to={`/blog/${relatedPost.slug}`}
                  className="blog-details-related-card__image"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                  />

                  <div />

                  <span>
                    <ArrowUpRight size={19} />
                  </span>
                </Link>

                <div className="blog-details-related-card__content">
                  <small>
                    {relatedPost.category}
                  </small>

                  <h3>
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>

                  <p>
                    {relatedPost.excerpt}
                  </p>

                  <Link
                    to={`/blog/${relatedPost.slug}`}
                  >
                    Read Article

                    <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function BlogDetailsCTA() {
  return (
    <section className="blog-details-cta">
      <div className="container blog-details-cta__container">
        <div>
          <span>
            Need Technical Guidance?
          </span>

          <h2>
            Have a Steel Product or Project Requirement?
          </h2>

          <p>
            Share your product, grade, size, quantity,
            application and delivery location. Our team will
            help you with suitable guidance and supply support.
          </p>
        </div>

        <div className="blog-details-cta__actions">
          <Link
            to="/contact"
            className="blog-details-cta__primary"
          >
            Contact Our Team

            <ArrowUpRight size={18} />
          </Link>

          <Link
            to="/quote"
            className="blog-details-cta__secondary"
          >
            Request a Quote

            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function BlogNotFound() {
  return (
    <main className="blog-details-not-found">
      <div className="container blog-details-not-found__container">
        <span>
          404
        </span>

        <h1>
          Article Not Found
        </h1>

        <p>
          The requested article does not exist or may have
          been removed.
        </p>

        <Link
          to="/blog"
          className="blog-details-primary-button"
        >
          <ArrowLeft size={18} />

          Return to Blog
        </Link>
      </div>
    </main>
  );
}

export default BlogDetails;