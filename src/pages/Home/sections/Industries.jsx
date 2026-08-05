import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { industries } from "../../../data/homeData";
import SectionHeading from "./SectionHeading";

function Industries() {
  return (
    <section className="industries-section">
      <div className="container">
        <SectionHeading
          label="Industries Served"
          title="Where Our Steel Goes to Work"
          description="Our material supports projects where quality, consistency and dependable performance are essential."
          align="center"
        />

        <div className="industries-section__grid">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.article
                className="industry-card"
                key={industry.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <div className="industry-card__icon">
                  <Icon size={24} />
                </div>

                <h3>{industry.name}</h3>
                <p>{industry.description}</p>

                <Link to="/industries">
                  Learn More
                  <ArrowUpRight size={15} />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Industries;

