import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Leaf, Recycle, Zap } from "lucide-react";

function Sustainability() {
  return (
    <section className="sustainability-section">
      <div className="container sustainability-section__grid">
        <motion.div
          className="sustainability-section__content"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-label section-label--light">
            <span />
            Responsible Production
          </div>

          <h2>Responsible Steel Solutions for a Stronger Future</h2>

          <p>
            Efficient material usage, recycling and operational discipline help
            reduce waste while maintaining product performance.
          </p>

          <div className="sustainability-section__features">
            <div>
              <Recycle size={23} />
              <span>Steel Recycling</span>
            </div>
            <div>
              <Leaf size={23} />
              <span>Responsible Operations</span>
            </div>
            <div>
              <Zap size={23} />
              <span>Energy Efficiency</span>
            </div>
          </div>

          <Link
            to="/sustainability"
            className="secondary-button secondary-button--light"
          >
            Learn More
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="sustainability-section__visual"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <div>
            <strong>100%</strong>
            <span>Steel is recyclable</span>
          </div>
          <div>
            <strong>Focused</strong>
            <span>Waste reduction practices</span>
          </div>
          <div>
            <strong>Committed</strong>
            <span>Responsible operations</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Sustainability;

