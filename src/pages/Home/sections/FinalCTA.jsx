import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

function FinalCTA() {
  return (
    <section className="home-final-cta">
      <div className="home-final-cta__mesh" />

      <motion.div
        className="container home-final-cta__inner"
        initial={{
          opacity: 0,
          y: 30,
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
          duration: 0.6,
        }}
      >
        <div>
          <span>
            Need Steel for Your Next Requirement?
          </span>

          <h2>
            Tell Us the Product, Grade,
            Quantity and Delivery Location.
          </h2>

          <p>
            Our team will review your requirement
            and help you with the right product and quotation.
          </p>
        </div>

        <div className="home-final-cta__actions">
          <Link
            to="/quote"
            className="home-button home-button--light"
          >
            Send Enquiry
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="home-button home-button--outline"
          >
            Contact Us
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default FinalCTA;
