import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import {
  companyContact,
  contactCards,
  contactHighlights,
  enquiryTypes,
} from "../../data/contact";

import "./Contact.css";

const initialForm = {
  fullName: "",
  companyName: "",
  phone: "",
  email: "",
  enquiryType: "Product Enquiry",
  message: "",
};

function Contact() {
  const [formData, setFormData] =
    useState(initialForm);

  const [submitted, setSubmitted] =
    useState(false);

  function handleChange(event) {
    const { name, value } =
      event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    setFormData(
      initialForm
    );
  }

  return (
    <main className="contact-page">
      <ContactHero />

      <ContactCards />

      <ContactMain
        formData={formData}
        submitted={submitted}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <ContactHighlights />

      <ContactMap />

      <ContactCTA />
    </main>
  );
}

/* =========================================================
   HERO
========================================================= */

function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero__ambient" />

      <div className="container">
        <nav
          className="contact-hero__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">
            Home
          </Link>

          <span>/</span>

          <strong>
            Contact
          </strong>
        </nav>

        <div className="contact-hero__grid">

          {/* LEFT */}

          <motion.div
            className="contact-hero__content"
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,

              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <div className="contact-label">
              <span />

              Contact Godavari Iron
              &amp; Steel
            </div>

            <h1>
              Let’s Discuss Your

              <span>
                Steel Requirement
              </span>
            </h1>

            <p>
              Share your product,
              grade, size, quantity,
              application and delivery
              location. Our team will
              help coordinate a suitable
              steel supply solution.
            </p>

            <div className="contact-hero__facts">
              <div>
                <strong>
                  Phone
                </strong>

                <span>
                  {
                    companyContact.phone
                  }
                </span>
              </div>

              <div>
                <strong>
                  Email
                </strong>

                <span>
                  {
                    companyContact.email
                  }
                </span>
              </div>

              <div>
                <strong>
                  Hours
                </strong>

                <span>
                  {
                    companyContact.hours
                  }
                </span>
              </div>
            </div>

            <div className="contact-hero__actions">
              <a
                href="#contact-form"
                className="contact-primary-button"
              >
                Send an Enquiry

                <ArrowRight
                  size={18}
                />
              </a>

              <a
                href={`https://wa.me/${companyContact.whatsappHref}`}
                target="_blank"
                rel="noreferrer"
                className="contact-text-link"
              >
                Chat on WhatsApp

                <ArrowUpRight
                  size={17}
                />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            className="contact-hero__visual"
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,

              delay: 0.08,

              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <div className="contact-hero__visual-card">
              <Factory
                size={56}
              />

              <span>
                Project &amp;
                Product Support
              </span>

              <strong>
                Connect with Our
                Steel Supply Team
              </strong>

              <p>
                Product enquiries,
                project planning,
                quotations and
                delivery coordination.
              </p>
            </div>

            <div className="contact-hero__floating-card">
              <MessageCircle
                size={25}
              />

              <div>
                <strong>
                  Quick Support
                </strong>

                <span>
                  Phone, email and
                  WhatsApp
                </span>
              </div>
            </div>

            <div className="contact-hero__decorative-text">
              TALK
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT CARDS
========================================================= */

function ContactCards() {
  return (
    <section className="contact-cards">
      <div className="container contact-cards__grid">
        {contactCards.map(
          (card, index) => {
            const Icon =
              card.icon;

            return (
              <motion.a
                key={card.title}
                href={card.href}
                target={
                  card.href.startsWith(
                    "http"
                  )
                    ? "_blank"
                    : undefined
                }
                rel={
                  card.href.startsWith(
                    "http"
                  )
                    ? "noreferrer"
                    : undefined
                }
                initial={{
                  opacity: 0,
                  y: 22,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.35,
                }}
                transition={{
                  duration: 0.5,
                  delay:
                    index * 0.06,
                }}
                whileHover={{
                  y: -7,
                }}
              >
                <div className="contact-cards__icon">
                  <Icon
                    size={23}
                  />
                </div>

                <h3>
                  {card.title}
                </h3>

                <p>
                  {
                    card.description
                  }
                </p>

                <strong>
                  {card.value}
                </strong>
              </motion.a>
            );
          }
        )}
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT FORM
========================================================= */

function ContactMain({
  formData,
  submitted,
  onChange,
  onSubmit,
}) {
  return (
    <section
      className="contact-main"
      id="contact-form"
    >
      <div className="container contact-main__grid">

        {/* LEFT */}

        <motion.div
          className="contact-main__content"
          initial={{
            opacity: 0,
            x: -28,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
          }}
        >
          <div className="contact-label">
            <span />

            Send Your Requirement
          </div>

          <h2>
            Tell Us What You Need.
            We’ll Help You Plan the
            Supply.
          </h2>

          <p>
            Fill in the form with
            your product, grade,
            dimensions, quantity and
            delivery requirement.
            Our team will contact you
            with the next steps.
          </p>

          <div className="contact-main__points">
            <div>
              <CheckCircle2
                size={18}
              />

              <span>
                Product and grade
                guidance
              </span>
            </div>

            <div>
              <CheckCircle2
                size={18}
              />

              <span>
                Project-based
                quotation support
              </span>
            </div>

            <div>
              <CheckCircle2
                size={18}
              />

              <span>
                Processing and
                dispatch coordination
              </span>
            </div>

            <div>
              <CheckCircle2
                size={18}
              />

              <span>
                Pan-India supply
                assistance
              </span>
            </div>
          </div>

          <div className="contact-main__direct">
            <a
              href={`tel:${companyContact.phoneHref}`}
            >
              <Phone
                size={19}
              />

              <span>
                <small>
                  Call Us
                </small>

                <strong>
                  {
                    companyContact.phone
                  }
                </strong>
              </span>
            </a>

            <a
              href={`mailto:${companyContact.email}`}
            >
              <Mail
                size={19}
              />

              <span>
                <small>
                  Email Us
                </small>

                <strong>
                  {
                    companyContact.email
                  }
                </strong>
              </span>
            </a>
          </div>
        </motion.div>

        {/* FORM */}

        <motion.form
          className="contact-form"
          onSubmit={onSubmit}
          initial={{
            opacity: 0,
            x: 28,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
        >
          <div className="contact-form__heading">
            <span>
              Enquiry Form
            </span>

            <h3>
              Share Your Requirement
            </h3>

            <p>
              Fields marked with *
              are required.
            </p>
          </div>

          {submitted ? (
            <div className="contact-form__success">
              <CheckCircle2
                size={22}
              />

              <span>
                Your enquiry has
                been recorded.
                Our team will
                contact you.
              </span>
            </div>
          ) : null}

          <div className="contact-form__grid">

            {/* NAME */}

            <label>
              <span>
                Full Name *
              </span>

              <input
                type="text"
                name="fullName"
                value={
                  formData.fullName
                }
                onChange={onChange}
                placeholder="Enter your name"
                required
              />
            </label>

            {/* COMPANY */}

            <label>
              <span>
                Company Name
              </span>

              <input
                type="text"
                name="companyName"
                value={
                  formData.companyName
                }
                onChange={onChange}
                placeholder="Enter company name"
              />
            </label>

            {/* PHONE */}

            <label>
              <span>
                Phone Number *
              </span>

              <input
                type="tel"
                name="phone"
                value={
                  formData.phone
                }
                onChange={onChange}
                placeholder="+91"
                required
              />
            </label>

            {/* EMAIL */}

            <label>
              <span>
                Email Address *
              </span>

              <input
                type="email"
                name="email"
                value={
                  formData.email
                }
                onChange={onChange}
                placeholder="name@company.com"
                required
              />
            </label>

            {/* TYPE */}

            <label className="contact-form__full">
              <span>
                Enquiry Type *
              </span>

              <select
                name="enquiryType"
                value={
                  formData.enquiryType
                }
                onChange={onChange}
              >
                {enquiryTypes.map(
                  (type) => (
                    <option
                      key={type}
                      value={type}
                    >
                      {type}
                    </option>
                  )
                )}
              </select>
            </label>

            {/* MESSAGE */}

            <label className="contact-form__full">
              <span>
                Requirement Details *
              </span>

              <textarea
                name="message"
                value={
                  formData.message
                }
                onChange={onChange}
                placeholder="Mention product, grade, size, quantity, application and delivery location."
                rows="6"
                required
              />
            </label>
          </div>

          <button
            type="submit"
            className="contact-form__submit"
          >
            Submit Enquiry

            <Send
              size={18}
            />
          </button>

          <small className="contact-form__note">
            This frontend form
            is ready for API
            integration when the
            backend is added.
          </small>
        </motion.form>
      </div>
    </section>
  );
}

/* =========================================================
   HIGHLIGHTS
========================================================= */

function ContactHighlights() {
  return (
    <section className="contact-highlights">
      <div className="container">
        <div className="contact-heading contact-heading--light">
          <div className="contact-label contact-label--light">
            <span />

            Why Contact Us
          </div>

          <h2>
            Clear Communication
            for Better Project
            Coordination
          </h2>

          <p>
            We make it easy to
            share requirements,
            clarify specifications
            and plan the next steps.
          </p>
        </div>

        <div className="contact-highlights__grid">
          {contactHighlights.map(
            (item, index) => {
              const Icon =
                item.icon;

              return (
                <motion.article
                  key={
                    item.title
                  }
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
                    duration: 0.5,
                    delay:
                      index *
                      0.07,
                  }}
                >
                  <div className="contact-highlights__icon">
                    <Icon
                      size={24}
                    />
                  </div>

                  <h3>
                    {
                      item.title
                    }
                  </h3>

                  <p>
                    {
                      item.description
                    }
                  </p>
                </motion.article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   LOCATION + GOOGLE MAP
========================================================= */

function ContactMap() {
  const officeAddress =
    "N-19, 1st Stage Main Road, TVS Cross, Peenya, Bengaluru, Karnataka 560058";

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=GODAVARI%20IRON%20%26%20STEEL%20N-19%201st%20Stage%20Main%20Road%20TVS%20Cross%20Peenya%20Bengaluru%20Karnataka%20560058";

  const googleMapsEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1034962787126!2d77.5199088!3d13.0290808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d1f1ae16549%3A0xbea21dc4edefc82f!2sGODAVARI%20IRON%20%26%20STEEL!5e0!3m2!1sen!2sin!4v1788290337982!5m2!1sen!2sin";

  return (
    <section
      className="contact-map"
      id="contact-map"
    >
      <div className="container contact-map__grid">

        {/* LOCATION DETAILS */}

        <motion.div
          className="contact-map__content"
          initial={{
            opacity: 0,
            x: -28,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
          }}
        >
          <div className="contact-label">
            <span />

            Office Location
          </div>

          <h2>
            Visit Godavari Iron
            &amp; Steel
          </h2>

          <p>
            Visit our Bengaluru
            office to discuss product
            requirements, project
            supply, processing support
            and delivery coordination.
          </p>

          <div className="contact-map__address">
            <MapPin
              size={23}
            />

            <div>
              <small>
                Address
              </small>

              <strong>
                {officeAddress}
              </strong>
            </div>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-primary-button"
          >
            Open in Google Maps

            <ArrowUpRight
              size={18}
            />
          </a>
        </motion.div>

        {/* GOOGLE MAP */}

        <motion.div
          className="contact-map__embed"
          initial={{
            opacity: 0,
            x: 28,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
        >
          <iframe
            title="Godavari Iron and Steel Peenya Bengaluru"
            src={googleMapsEmbed}
            width="600"
            height="450"
            style={{
              border: 0,
              width: "100%",
              height: "100%",
              minHeight: "450px",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   FINAL CTA
========================================================= */

function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container contact-cta__container">
        <div>
          <span>
            Ready to Start?
          </span>

          <h2>
            Share Your Steel
            Requirement with
            Our Team
          </h2>

          <p>
            Send your specifications,
            quantity and delivery
            location. We’ll help you
            plan a suitable supply
            solution.
          </p>
        </div>

        <div className="contact-cta__actions">
          <Link
            to="/quote"
            className="contact-cta__primary"
          >
            Request a Quote

            <ArrowUpRight
              size={18}
            />
          </Link>

          <a
            href={`https://wa.me/${companyContact.whatsappHref}`}
            target="_blank"
            rel="noreferrer"
            className="contact-cta__secondary"
          >
            WhatsApp Our Team

            <MessageCircle
              size={18}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;