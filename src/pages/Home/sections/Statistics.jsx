import { motion } from "motion/react";
import { statistics } from "../../../data/homeData";
import AnimatedCounter from "./AnimatedCounter";

function Statistics() {
  return (
    <section className="home-statistics">
      <div className="container home-statistics__grid">
        {statistics.map((stat, index) => (
          <motion.div
            className="home-statistics__item"
            key={stat.label}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
          >
            <strong>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;

