import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { industries } from "../../../data/homeData";

function IndustriesServed() {
  return (
    <section className="industries-section">
      <div className="container">
        <motion.div
          className="home-section-head"
          initial={{
            opacity: 0,
            y: 26,
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
            duration: 0.55,
          }}
        >
          <div>
            <div className="home-kicker">
              <span />
              Industries Served
            </div>

            <h2>
              Steel Across Sectors
            </h2>

            <p>
              Supporting projects and businesses that depend
              on dependable steel availability and timely supply.
            </p>
          </div>
        </motion.div>

        <div className="industries-section__grid">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.article
                key={industry.name}
                className="industry-card"
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.98,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.22,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.055,
                }}
                whileHover={{
                  y: -8,
                }}
              >
                <div className="industry-card__icon">
                  <Icon size={25} />
                </div>

                <h3>{industry.name}</h3>

                <p>
                  {industry.description}
                </p>

                <span className="industry-card__more">
                  Industry Solutions
                  <ArrowUpRight size={15} />
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IndustriesServed;
