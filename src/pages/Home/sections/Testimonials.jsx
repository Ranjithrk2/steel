import { motion } from "motion/react";
import { Quote } from "lucide-react";

import { testimonials } from "../../../data/homeData";
import SectionHeading from "./SectionHeading";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <SectionHeading
          label="Client Voices"
          title="Trusted by Builders Who Measure Twice"
          description="Long-term partnerships grow through reliable quality, clear communication and dependable support."
          align="center"
        />

        <div className="testimonials-section__grid">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              className="testimonial-card"
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Quote size={30} />
              <blockquote>{testimonial.review}</blockquote>

              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

