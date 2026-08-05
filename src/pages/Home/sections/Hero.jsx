import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import heroImage from "../../../assets/images/home/hero-mill.jpg";
import { statistics } from "../../../data/homeData";
import AnimatedCounter from "./AnimatedCounter";

function Hero() {
  return (
    <section className="home-hero">
      <img
        src={heroImage}
        alt="Godavari Iron and Steel manufacturing facility"
        className="home-hero__image"
      />

      <div className="home-hero__overlay" />
      <div className="home-hero__glow" />

      <div className="container home-hero__container">
        <motion.div
          className="home-hero__content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-label section-label--light">
            <span />
            Since 1999 · Reliable Steel Supply
          </div>

          <h1>
            Building Strength
            <span>for Modern Industries</span>
          </h1>

          <p>
            Certified iron and steel products, dependable processing
            capabilities and project-focused supply solutions for construction,
            infrastructure, engineering and manufacturing.
          </p>

          <div className="home-hero__actions">
            <Link to="/products" className="primary-button">
              Explore Products
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/quote"
              className="secondary-button secondary-button--light"
            >
              Request a Quote
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="home-hero__stats"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18 }}
        >
          {statistics.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <strong>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

