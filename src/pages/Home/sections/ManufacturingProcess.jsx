import { motion } from "motion/react";

import { processSteps } from "../../../data/homeData";
import SectionHeading from "./SectionHeading";

function ManufacturingProcess() {
  return (
    <section className="manufacturing-process">
      <div className="container">
        <SectionHeading
          label="Our Process"
          title="From Requirement to Reliable Delivery"
          description="A structured workflow keeps every order clear, verified and professionally coordinated."
          align="center"
        />

        <div className="manufacturing-process__timeline">
          {processSteps.map((step, index) => (
            <motion.article
              className="process-step"
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ManufacturingProcess;

