import { motion } from "motion/react";
import {
  BadgeCheck,
  Boxes,
  Gauge,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
  Wrench,
  Zap,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Industry Expertise",
    description:
      "Experienced support for steel sourcing, product selection and project requirements.",
  },
  {
    icon: Boxes,
    title: "Extensive Product Range",
    description:
      "Multiple steel categories available through one dependable supply partner.",
  },
  {
    icon: Warehouse,
    title: "Ready Stock Support",
    description:
      "Organised inventory planning helps support urgent and scheduled requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Material quality, grades and documentation are reviewed before dispatch.",
  },
  {
    icon: Zap,
    title: "Fast Loading & Dispatch",
    description:
      "Efficient handling and dispatch coordination for faster material movement.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description:
      "Planned logistics aligned with customer and project delivery schedules.",
  },
  {
    icon: Gauge,
    title: "Transparent Transactions",
    description:
      "Clear communication, specifications, pricing and documentation throughout the order.",
  },
  {
    icon: Wrench,
    title: "Project Support",
    description:
      "Practical product and specification support for construction and industrial use.",
  },
  {
    icon: BadgeCheck,
    title: "Customer Commitment",
    description:
      "Responsive service and dependable coordination before and after every order.",
  },
];

function WhyChooseGodavari() {
  return (
    <section className="home-why">
      <div className="home-why__glow" />

      <div className="container">
        <motion.div
          className="home-section-head home-section-head--center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="home-kicker home-kicker--center">
              <span />
              Why Godavari
            </div>

            <h2>Why Choose Godavari</h2>

            <p>
              Built around dependable supply, quality discipline
              and long-term customer relationships.
            </p>
          </div>
        </motion.div>

        <div className="home-why__grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.title}
                className="why-item"
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
              >
                <div className="why-item__icon">
                  <Icon size={29} />
                </div>

                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseGodavari;
