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

  const { scrollYProgress } =
    useScroll({
      target: heroRef,

      offset: [
        "start start",
        "end end",
      ],
    });

  /* =====================================================
     SCROLL TIMELINE

     0.00 - 0.20
     Initial warehouse hero remains visible

     0.20 - 0.55
     Warehouse splits completely

     0.45 - 0.70
     Welcome screen appears

     0.70 - 1.00
     Welcome screen remains completely visible

     The next Home section only appears after the sticky
     hero has completed its scroll distance.
  ===================================================== */

  /* =====================================================
     WAREHOUSE SPLIT
  ===================================================== */

  const leftX = useTransform(
    scrollYProgress,

    [
      0,
      0.2,
      0.55,
      0.72,
      1,
    ],

    [
      "0%",
      "0%",
      "-115%",
      "-115%",
      "-115%",
    ]
  );

  const rightX = useTransform(
    scrollYProgress,

    [
      0,
      0.2,
      0.55,
      0.72,
      1,
    ],

    [
      "0%",
      "0%",
      "115%",
      "115%",
      "115%",
    ]
  );

  const leftRotate = useTransform(
    scrollYProgress,

    [
      0,
      0.2,
      0.55,
      1,
    ],

    [
      0,
      0,
      -2.25,
      -2.25,
    ]
  );

  const rightRotate = useTransform(
    scrollYProgress,

    [
      0,
      0.2,
      0.55,
      1,
    ],

    [
      0,
      0,
      2.25,
      2.25,
    ]
  );

  const splitScale = useTransform(
    scrollYProgress,

    [
      0,
      0.2,
      0.55,
      1,
    ],

    [
      1,
      1,
      1.045,
      1.045,
    ]
  );

  /* =====================================================
     ORIGINAL HERO CONTENT
  ===================================================== */

  const heroContentOpacity =
    useTransform(
      scrollYProgress,

      [
        0,
        0.22,
        0.43,
        1,
      ],

      [
        1,
        1,
        0,
        0,
      ]
    );

  const heroContentY =
    useTransform(
      scrollYProgress,

      [
        0,
        0.22,
        0.43,
        1,
      ],

      [
        0,
        0,
        -55,
        -55,
      ]
    );

  const statsOpacity =
    useTransform(
      scrollYProgress,

      [
        0,
        0.22,
        0.42,
        1,
      ],

      [
        1,
        1,
        0,
        0,
      ]
    );

  /* =====================================================
     INITIAL HERO OVERLAYS
  ===================================================== */

  const overlayOpacity =
    useTransform(
      scrollYProgress,

      [
        0,
        0.25,
        0.5,
        1,
      ],

      [
        1,
        1,
        0,
        0,
      ]
    );

  const accentOpacity =
    useTransform(
      scrollYProgress,

      [
        0,
        0.25,
        0.5,
        1,
      ],

      [
        1,
        1,
        0,
        0,
      ]
    );

  /* =====================================================
     WELCOME SCREEN
  ===================================================== */

  const welcomeBackgroundOpacity =
    useTransform(
      scrollYProgress,

      [
        0,
        0.4,
        0.58,
        1,
      ],

      [
        0,
        0,
        1,
        1,
      ]
    );

  const welcomeContentOpacity =
    useTransform(
      scrollYProgress,

      [
        0,
        0.48,
        0.63,
        0.7,
        1,
      ],

      [
        0,
        0,
        0.78,
        1,
        1,
      ]
    );

  const welcomeContentY =
    useTransform(
      scrollYProgress,

      [
        0.48,
        0.7,
        1,
      ],

      [
        52,
        0,
        0,
      ]
    );

  const welcomeContentScale =
    useTransform(
      scrollYProgress,

      [
        0.48,
        0.7,
        1,
      ],

      [
        0.94,
        1,
        1,
      ]
    );

  const welcomeGlowOpacity =
    useTransform(
      scrollYProgress,

      [
        0.42,
        0.65,
        1,
      ],

      [
        0,
        1,
        1,
      ]
    );

  const welcomeLineWidth =
    useTransform(
      scrollYProgress,

      [
        0.56,
        0.73,
        1,
      ],

      [
        "0%",
        "100%",
        "100%",
      ]
    );

  /* =====================================================
     SCROLL HINT
  ===================================================== */

  const scrollHintOpacity =
    useTransform(
      scrollYProgress,

      [
        0,
        0.22,
        0.38,
      ],

      [
        1,
        1,
        0,
      ]
    );

  /* =====================================================
     CLICK / TOUCH FIX

     Before the Welcome screen:
     original hero accepts clicks.

     After Welcome becomes visible:
     original hero stops receiving pointer events
     and Welcome screen receives them.

     This prevents invisible hero elements from
     blocking Discover Our Story / Explore Products.
  ===================================================== */

  const originalHeroPointerEvents =
    useTransform(
      scrollYProgress,

      [
        0,
        0.49,
        0.5,
        1,
      ],

      [
        "auto",
        "auto",
        "none",
        "none",
      ]
    );

  const welcomePointerEvents =
    useTransform(
      scrollYProgress,

      [
        0,
        0.54,
        0.55,
        1,
      ],

      [
        "none",
        "none",
        "auto",
        "auto",
      ]
    );

  return (
    <section
      ref={heroRef}
      className="home-hero-break"
    >
      <div className="home-hero-break__sticky">

        {/* =================================================
            WELCOME SCREEN
        ================================================= */}

        <motion.div
          className="hero-welcome"
          style={{
            opacity:
              welcomeBackgroundOpacity,

            pointerEvents:
              welcomePointerEvents,
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
              Built on reliability,
              quality and long-term
              customer relationships.
              Supplying dependable steel
              solutions for construction,
              infrastructure,
              engineering and industry.
            </p>

            {/* =============================================
                WORKING WELCOME BUTTONS
            ============================================= */}

            <div className="hero-welcome__actions">
              <Link
                to="/about"
                className="home-button home-button--primary"
              >
                Discover Our Story

                <ArrowRight
                  size={18}
                />
              </Link>

              <Link
                to="/products"
                className="home-button home-button--outline"
              >
                Explore Products

                <ArrowUpRight
                  size={18}
                />
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

              Reliable Steel.
              Dependable Supply.

              <span />
            </div>
          </motion.div>
        </motion.div>

        {/* =================================================
            LEFT WAREHOUSE HALF
        ================================================= */}

        <motion.div
          className="home-hero-split home-hero-split--left"
          style={{
            x:
              leftX,

            rotate:
              leftRotate,

            scale:
              splitScale,

            pointerEvents:
              "none",
          }}
        >
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
          />
        </motion.div>

        {/* =================================================
            RIGHT WAREHOUSE HALF
        ================================================= */}

        <motion.div
          className="home-hero-split home-hero-split--right"
          style={{
            x:
              rightX,

            rotate:
              rightRotate,

            scale:
              splitScale,

            pointerEvents:
              "none",
          }}
        >
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
          />
        </motion.div>

        {/* =================================================
            OVERLAY
        ================================================= */}

        <motion.div
          className="home-hero__overlay"
          style={{
            opacity:
              overlayOpacity,

            pointerEvents:
              "none",
          }}
        />

        <motion.div
          className="home-hero__accent"
          style={{
            opacity:
              accentOpacity,

            pointerEvents:
              "none",
          }}
        />

        {/* =================================================
            ORIGINAL HERO
        ================================================= */}

        <motion.div
          className="container home-hero__container"
          style={{
            pointerEvents:
              originalHeroPointerEvents,
          }}
        >
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
              duration:
                0.75,

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

              Since 1999 ·
              Reliable Steel Supply
            </div>

            <h1>
              Strength Stocked.

              <span>
                Reliability Delivered.
              </span>
            </h1>

            <p>
              Your trusted source for
              premium steel products,
              dependable stock,
              transparent service and
              project-focused supply
              support.
            </p>

            <div className="home-hero__actions">
              <Link
                to="/products"
                className="home-button home-button--primary"
              >
                Explore Products

                <ArrowRight
                  size={18}
                />
              </Link>

              <Link
                to="/quote"
                className="home-button home-button--outline"
              >
                Request Enquiry

                <ArrowUpRight
                  size={18}
                />
              </Link>
            </div>
          </motion.div>

          {/* =================================================
              HERO STATISTICS
          ================================================= */}

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
                  key={
                    stat.label
                  }
                >
                  <strong>
                    {
                      stat.value
                    }
                  </strong>

                  <span>
                    {
                      stat.label
                    }
                  </span>
                </div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* =================================================
            SCROLL HINT
        ================================================= */}

        <motion.div
          className="home-hero__scroll-hint"
          style={{
            opacity:
              scrollHintOpacity,

            pointerEvents:
              "none",
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