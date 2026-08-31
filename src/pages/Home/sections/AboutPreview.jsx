import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import plantImage from "../../../assets/images/infrastructure/infra-plant.jpg";

const points = [
  "Reliable steel sourcing and supply",
  "Project-focused customer support",
  "Quality and documentation discipline",
  "Organised logistics and dispatch",
];

function AboutPreview() {
  return (
    <section className="home-about">
      <div className="container home-about__grid">
        <motion.div
          className="home-about__image"
          initial={{
            opacity: 0,
            x: -35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
          }}
        >
          <img
            src={plantImage}
            alt="Godavari Iron and Steel operations"
          />

          <div className="home-about__image-shade" />

          <div className="home-about__badge">
            <strong>27+</strong>
            <span>Years in Steel</span>
          </div>
        </motion.div>

        <motion.div
          className="home-about__content"
          initial={{
            opacity: 0,
            x: 35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
          }}
        >
          <div className="home-kicker">
            <span />
            About Godavari
          </div>

          <h2>
            Built on Supply Discipline and Customer Trust
          </h2>

          <p>
            Godavari Iron & Steel supports construction,
            infrastructure, engineering and manufacturing
            requirements through quality steel products
            and dependable project coordination.
          </p>

          <div className="home-about__points">
            {points.map((point) => (
              <div key={point}>
                <CheckCircle2 size={18} />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="home-button home-button--primary"
          >
            About Us
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPreview;
