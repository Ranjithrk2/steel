import { motion } from "motion/react";

import { advantages } from "../../../data/homeData";
import SectionHeading from "./SectionHeading";

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <SectionHeading
          label="Why Choose Us"
          title="Six Reasons Buyers Stay for Decades"
          description="Reliability compounds through quality discipline, responsive support and dependable delivery."
          align="left"
        />

        <div className="why-choose-us__grid">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;

            return (
              <motion.article
                className="advantage-card"
                key={advantage.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <Icon size={24} />
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

