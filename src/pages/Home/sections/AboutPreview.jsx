import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { media } from "../../../data/homeData";
import SectionHeading from "./SectionHeading";

const features = [
  "BIS-focused quality systems",
  "Integrated processing facilities",
  "Batch-level traceability",
  "Reliable pan-India dispatch",
];

function AboutPreview() {
  return (
    <section className="company-introduction">
      <div className="container company-introduction__grid">
        <motion.div
          className="company-introduction__content"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <SectionHeading
            label="Who We Are"
            title="Twenty-Seven Years of Disciplined Metallurgy"
            description="What began as a focused steel operation has grown into an integrated supply and processing partner for demanding industrial and infrastructure requirements."
          />

          <p className="company-introduction__text">
            We compete on consistency, traceability and the confidence that
            every bar, coil, pipe and section performs exactly as specified.
          </p>

          <div className="company-introduction__features">
            {features.map((item) => (
              <div key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link to="/about" className="primary-button">
            About the Company
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="company-introduction__media"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <div className="company-introduction__main-image">
            <img src={media.plantImage} alt="Godavari steel plant" />
          </div>

          <div className="company-introduction__small-image">
            <img src={media.machineryImage} alt="Steel processing machinery" />
          </div>

          <div className="company-introduction__experience">
            <strong>27+</strong>
            <span>Years in the steel industry</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPreview;

