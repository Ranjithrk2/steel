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

import heroImage from "../../../assets/images/home/hero-godown-premium.png";

const heroStats = [
  {
    value: "27+",
    label: "Years in Steel",
  },
  {
    value: "6,00,000 MT",
    label: "Annual Capacity",
  },
  {
    value: "1,450+",
    label: "Projects Supplied",
  },
  {
    value: "18",
    label: "States Served",
  },
];

function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  /* =====================================================
     LEFT / RIGHT WAREHOUSE SPLIT
  ===================================================== */

  const leftX = useTransform(
    scrollYProgress,
    [0, 0.24, 0.55, 1],
    ["0%", "0%", "-108%", "-108%"]
  );

  const rightX = useTransform(
    scrollYProgress,
    [0, 0.24, 0.55, 1],
    ["0%", "0%", "108%", "108%"]
  );

  const leftRotate = useTransform(
    scrollYProgress,
    [0, 0.24, 0.55, 1],
    [0, 0, -2, -2]
  );

  const rightRotate = useTransform(
    scrollYProgress,
    [0, 0.24, 0.55, 1],
    [0, 0, 2, 2]
  );

  const splitScale = useTransform(
    scrollYProgress,
    [0, 0.24, 0.55, 1],
    [1, 1, 1.06, 1.06]
  );

  /* =====================================================
     ORIGINAL HERO CONTENT
  ===================================================== */

  const heroContentOpacity = useTransform(
    scrollYProgress,
    [0, 0.28, 0.46, 1],
    [1, 1, 0, 0]
  );

  const heroContentY = useTransform(
    scrollYProgress,
    [0, 0.28, 0.46, 1],
    [0, 0, -55, -55]
  );

  const statsOpacity = useTransform(
    scrollYProgress,
    [0, 0.27, 0.44, 1],
    [1, 1, 0, 0]
  );

  /* =====================================================
     ORIGINAL HERO OVERLAY
  ===================================================== */

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.53, 1],
    [1, 1, 0, 0]
  );

  const accentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.51, 1],
    [1, 1, 0, 0]
  );

  /* =====================================================
     WELCOME BACKGROUND

     IMPORTANT:
     We only animate opacity.
     NO scaling of the full background.
  ===================================================== */

  const welcomeBackgroundOpacity =
    useTransform(
      scrollYProgress,
      [0, 0.35, 0.52, 1],
      [0, 0, 1, 1]
    );

  /* =====================================================
     WELCOME CONTENT
  ===================================================== */

  const welcomeContentOpacity =
    useTransform(
      scrollYProgress,
      [0, 0.43, 0.59, 0.64, 1],
      [0, 0, 0.78, 1, 1]
    );

  const welcomeContentY =
    useTransform(
      scrollYProgress,
      [0.43, 0.62, 1],
      [60, 0, 0]
    );

  const welcomeContentScale =
    useTransform(
      scrollYProgress,
      [0.43, 0.62, 1],
      [0.94, 1, 1]
    );

  const welcomeGlowOpacity =
    useTransform(
      scrollYProgress,
      [0.42, 0.62, 1],
      [0, 1, 1]
    );

  const welcomeLineWidth =
    useTransform(
      scrollYProgress,
      [0.52, 0.67, 1],
      ["0%", "100%", "100%"]
    );

  const scrollHintOpacity =
    useTransform(
      scrollYProgress,
      [0, 0.25, 0.4],
      [1, 1, 0]
    );

  return (
    <section
      ref={heroRef}
      className="home-hero-break"
    >
      <div className="home-hero-break__sticky">

        {/* =================================================
            WELCOME FULL SCREEN BACKGROUND
        ================================================= */}

        <motion.div
          className="hero-welcome"
          style={{
            opacity:
              welcomeBackgroundOpacity,
          }}
        >
          <motion.div
            className="hero-welcome__glow"
            style={{
              opacity:
                welcomeGlowOpacity,
            }}
          />

          <div className="hero-welcome__watermark">
            GODAVARI
          </div>

          <motion.div
            className="hero-welcome__content"
            style={{
              opacity:
                welcomeContentOpacity,

              y:
                welcomeContentY,

              scale:
                welcomeContentScale,
            }}
          >
            <span className="hero-welcome__label">
              Established 1999
            </span>

            <h2>
              Welcome to

              <strong>
                Godavari Iron &amp; Steel
              </strong>
            </h2>

            <p>
              Built on reliability, quality and
              long-term customer relationships.
              Supplying dependable steel solutions
              for construction, infrastructure,
              engineering and industry.
            </p>

            <div className="hero-welcome__actions">
              <Link
                to="/about"
                className="home-button home-button--primary"
              >
                Discover Our Story

                <ArrowRight size={18} />
              </Link>

              <Link
                to="/products"
                className="home-button home-button--outline"
              >
                Explore Products

                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="hero-welcome__line">
              <motion.span
                style={{
                  width:
                    welcomeLineWidth,
                }}
              />
            </div>

            <div className="hero-welcome__signature">
              <span />

              Reliable Steel. Dependable Supply.

              <span />
            </div>
          </motion.div>
        </motion.div>

        {/* =================================================
            LEFT IMAGE PANEL
        ================================================= */}

        <motion.div
          className="home-hero-split home-hero-split--left"
          style={{
            x: leftX,
            rotate: leftRotate,
            scale: splitScale,
          }}
        >
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
          />
        </motion.div>

        {/* =================================================
            RIGHT IMAGE PANEL
        ================================================= */}

        <motion.div
          className="home-hero-split home-hero-split--right"
          style={{
            x: rightX,
            rotate: rightRotate,
            scale: splitScale,
          }}
        >
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
          />
        </motion.div>

        {/* =================================================
            ORIGINAL HERO OVERLAYS
        ================================================= */}

        <motion.div
          className="home-hero__overlay"
          style={{
            opacity:
              overlayOpacity,
          }}
        />

        <motion.div
          className="home-hero__accent"
          style={{
            opacity:
              accentOpacity,
          }}
        />

        {/* =================================================
            ORIGINAL HERO
        ================================================= */}

        <div className="container home-hero__container">
          <motion.div
            className="home-hero__content"
            style={{
              opacity:
                heroContentOpacity,

              y:
                heroContentY,
            }}
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <div className="home-kicker home-kicker--hero">
              <span />

              Since 1999 · Reliable Steel Supply
            </div>

            <h1>
              Strength Stocked.

              <span>
                Reliability Delivered.
              </span>
            </h1>

            <p>
              Your trusted source for premium steel
              products, dependable stock,
              transparent service and
              project-focused supply support.
            </p>

            <div className="home-hero__actions">
              <Link
                to="/products"
                className="home-button home-button--primary"
              >
                Explore Products

                <ArrowRight size={18} />
              </Link>

              <Link
                to="/quote"
                className="home-button home-button--outline"
              >
                Request Enquiry

                <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* ===============================================
              STATISTICS
          ================================================ */}

          <motion.div
            className="home-hero__stats"
            style={{
              opacity:
                statsOpacity,
            }}
          >
            {heroStats.map(
              (stat) => (
                <div
                  className="home-hero-stat"
                  key={stat.label}
                >
                  <strong>
                    {stat.value}
                  </strong>

                  <span>
                    {stat.label}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>

        {/* =================================================
            SCROLL HINT
        ================================================= */}

        <motion.div
          className="home-hero__scroll-hint"
          style={{
            opacity:
              scrollHintOpacity,
          }}
        >
          <span />

          Scroll to reveal
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;