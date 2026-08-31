import { motion } from "motion/react";

const manufacturers = [
  "MANUFACTURER 01",
  "MANUFACTURER 02",
  "MANUFACTURER 03",
  "MANUFACTURER 04",
  "MANUFACTURER 05",
  "MANUFACTURER 06",
];

function Manufacturers() {
  const doubled = [
    ...manufacturers,
    ...manufacturers,
  ];

  return (
    <section className="home-manufacturers">
      <div className="container">
        <motion.div
          className="home-section-head home-section-head--center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="home-kicker home-kicker--center">
              <span />
              Trusted Supply Network
            </div>

            <h2>
              Manufacturers We Represent
            </h2>

            <p>
              Reliable sourcing relationships help us maintain
              quality, consistency and dependable supply.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="home-manufacturers__viewport">
        <div className="home-manufacturers__track">
          {doubled.map((name, index) => (
            <div
              className="manufacturer-chip"
              key={`${name}-${index}`}
            >
              <span>
                {String((index % manufacturers.length) + 1)
                  .padStart(2, "0")}
              </span>

              <strong>{name}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <p className="home-manufacturers__note">
          Replace these placeholders with the client-approved manufacturer logos.
        </p>
      </div>
    </section>
  );
}

export default Manufacturers;
