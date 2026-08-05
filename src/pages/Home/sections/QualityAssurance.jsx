import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, FlaskConical, ShieldCheck } from "lucide-react";

import { media, qualityPoints } from "../../../data/homeData";
import SectionHeading from "./SectionHeading";

function QualityAssurance() {
  return (
    <section className="quality-assurance">
      <div className="container quality-assurance__grid">
        <motion.div
          className="quality-assurance__image"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <img
            src={media.qualityImage}
            alt="Steel quality testing laboratory"
          />

          <div className="quality-assurance__badge">
            <ShieldCheck size={27} />
            <div>
              <strong>Quality First</strong>
              <span>Verified before dispatch</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="quality-assurance__content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <SectionHeading
            label="Quality Assurance"
            title="Five Gates Before Dispatch"
            description="Every critical stage is reviewed to support consistency, strength, dimensional accuracy and traceability."
          />

          <div className="quality-assurance__points">
            {qualityPoints.map((point) => (
              <div key={point}>
                <FlaskConical size={17} />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <Link to="/quality" className="primary-button">
            Quality Standards
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default QualityAssurance;

