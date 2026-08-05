import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { infrastructureItems } from "../../../data/homeData";
import SectionHeading from "./SectionHeading";

function Infrastructure() {
  return (
    <section className="infrastructure-preview">
      <div className="container">
        <SectionHeading
          label="Manufacturing Infrastructure"
          title="Built Heavy, Run Precisely"
          description="Processing, finishing, testing, storage and dispatch work together through one coordinated system."
          dark
        />

        <div className="infrastructure-preview__grid">
          {infrastructureItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="infrastructure-card"
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.09 }}
              >
                <img src={item.image} alt={item.title} />
                <div className="infrastructure-card__overlay" />

                <div className="infrastructure-card__content">
                  <Icon size={27} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="infrastructure-preview__action">
          <Link to="/infrastructure" className="primary-button">
            Explore Infrastructure
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Infrastructure;

