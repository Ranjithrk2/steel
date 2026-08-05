import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";

import {
  quoteBenefits,
  quoteContact,
  quoteHighlights,
  quoteProductOptions,
  quoteProjectTypes,
  quoteSteps,
  quoteUnits,
} from "../../data/quote";

import "./Quote.css";

const initialForm = {
  fullName: "",
  companyName: "",
  phone: "",
  email: "",
  projectType: "Construction Project",
  product: "TMT Reinforcement Bars",
  grade: "",
  dimensions: "",
  quantity: "",
  unit: "Metric Tonnes",
  deliveryLocation: "",
  deliveryTimeline: "",
  message: "",
};

function Quote() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  }

  return (
    <main className="quote-page">
      <QuoteHero />
      <QuoteHighlights />
      <QuoteForm
        formData={formData}
        submitted={submitted}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <QuoteProcess />
      <QuoteBenefits />
      <QuoteSupport />
    </main>
  );
}

function QuoteHero() {
  return (
    <section className="quote-hero">
      <div className="quote-hero__ambient" />

      <div className="container">
        <nav
          className="quote-hero__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">Home</Link>
          <span>/</span>
          <strong>Request a Quote</strong>
        </nav>

        <div className="quote-hero__grid">
          <motion.div
            className="quote-hero__content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="quote-label">
              <span />
              Steel Supply Quotation
            </div>

            <h1>
              Tell Us What You Need.
              <span>We’ll Plan the Supply.</span>
            </h1>

            <p>
              Share your product, grade, dimensions, quantity, project
              application and delivery location. Our team will review the
              requirement and prepare a suitable quotation.
            </p>

            <div className="quote-hero__facts">
              <div>
                <strong>Products</strong>
                <span>Bars, coils, pipes, hollow sections and structurals</span>
              </div>

              <div>
                <strong>Support</strong>
                <span>Processing, quality and dispatch coordination</span>
              </div>

              <div>
                <strong>Coverage</strong>
                <span>Project and procurement support across India</span>
              </div>
            </div>

            <div className="quote-hero__actions">
              <a
                href="#quote-form"
                className="quote-primary-button"
              >
                Start Your Quote
                <ArrowRight size={18} />
              </a>

              <a
                href={`tel:${quoteContact.phoneHref}`}
                className="quote-text-link"
              >
                Call Our Team
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="quote-hero__visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="quote-hero__visual-card">
              <FileText size={58} />

              <span>Project-Based Quotation</span>

              <strong>
                Product, Specification, Quantity and Delivery Review
              </strong>

              <p>
                A structured quotation process designed around your exact
                requirement.
              </p>
            </div>

            <div className="quote-hero__floating-card">
              <ShieldCheck size={25} />

              <div>
                <strong>Requirement Reviewed</strong>
                <span>Before quotation preparation</span>
              </div>
            </div>

            <div className="quote-hero__decorative-text">
              QUOTE
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QuoteHighlights() {
  return (
    <section className="quote-highlights">
      <div className="container quote-highlights__grid">
        {quoteHighlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
              }}
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function QuoteForm({
  formData,
  submitted,
  onChange,
  onSubmit,
}) {
  return (
    <section
      className="quote-form-section"
      id="quote-form"
    >
      <div className="container quote-form-section__grid">
        <motion.div
          className="quote-form-section__content"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="quote-label">
            <span />
            Request Details
          </div>

          <h2>
            Share Complete Information for a More Accurate Quote
          </h2>

          <p>
            The more details you provide, the easier it becomes for our team
            to understand the exact requirement and prepare a suitable
            commercial proposal.
          </p>

          <div className="quote-form-section__points">
            <div>
              <CheckCircle2 size={18} />
              <span>Product name and grade</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>Dimensions and quantity</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>Project application</span>
            </div>

            <div>
              <CheckCircle2 size={18} />
              <span>Delivery location and timeline</span>
            </div>
          </div>

          <div className="quote-form-section__contact">
            <a href={`tel:${quoteContact.phoneHref}`}>
              <Phone size={19} />
              <span>
                <small>Call Our Team</small>
                <strong>{quoteContact.phone}</strong>
              </span>
            </a>

            <a href={`mailto:${quoteContact.email}`}>
              <Mail size={19} />
              <span>
                <small>Email Requirement</small>
                <strong>{quoteContact.email}</strong>
              </span>
            </a>

            <div>
              <MapPin size={19} />
              <span>
                <small>Office Location</small>
                <strong>{quoteContact.address}</strong>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="quote-form"
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            delay: 0.08,
          }}
        >
          <div className="quote-form__heading">
            <span>Quotation Form</span>
            <h3>Enter Your Requirement</h3>
            <p>
              Fields marked with * are required.
            </p>
          </div>

          {submitted ? (
            <div className="quote-form__success">
              <CheckCircle2 size={22} />
              <span>
                Your quotation request has been recorded. Our team will
                contact you shortly.
              </span>
            </div>
          ) : null}

          <div className="quote-form__grid">
            <label>
              <span>Full Name *</span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={onChange}
                placeholder="Enter your name"
                required
              />
            </label>

            <label>
              <span>Company Name</span>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={onChange}
                placeholder="Enter company name"
              />
            </label>

            <label>
              <span>Phone Number *</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={onChange}
                placeholder="+91"
                required
              />
            </label>

            <label>
              <span>Email Address *</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                placeholder="name@company.com"
                required
              />
            </label>

            <label>
              <span>Project Type *</span>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={onChange}
              >
                {quoteProjectTypes.map((type) => (
                  <option
                    key={type}
                    value={type}
                  >
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Product Required *</span>
              <select
                name="product"
                value={formData.product}
                onChange={onChange}
              >
                {quoteProductOptions.map((product) => (
                  <option
                    key={product}
                    value={product}
                  >
                    {product}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Grade / Specification</span>
              <input
                type="text"
                name="grade"
                value={formData.grade}
                onChange={onChange}
                placeholder="Example: Fe 500D"
              />
            </label>

            <label>
              <span>Dimensions / Size</span>
              <input
                type="text"
                name="dimensions"
                value={formData.dimensions}
                onChange={onChange}
                placeholder="Example: 12 mm x 12 m"
              />
            </label>

            <label>
              <span>Quantity *</span>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={onChange}
                placeholder="Enter quantity"
                min="0"
                step="any"
                required
              />
            </label>

            <label>
              <span>Unit *</span>
              <select
                name="unit"
                value={formData.unit}
                onChange={onChange}
              >
                {quoteUnits.map((unit) => (
                  <option
                    key={unit}
                    value={unit}
                  >
                    {unit}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Delivery Location *</span>
              <input
                type="text"
                name="deliveryLocation"
                value={formData.deliveryLocation}
                onChange={onChange}
                placeholder="City, State"
                required
              />
            </label>

            <label>
              <span>Required Delivery Timeline</span>
              <input
                type="text"
                name="deliveryTimeline"
                value={formData.deliveryTimeline}
                onChange={onChange}
                placeholder="Example: Within 15 days"
              />
            </label>

            <label className="quote-form__full">
              <span>Additional Requirement Details</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={onChange}
                placeholder="Mention application, processing, packing, phased delivery or any special requirement."
                rows="6"
              />
            </label>
          </div>

          <button
            type="submit"
            className="quote-form__submit"
          >
            Submit Quote Request
            <Send size={18} />
          </button>

          <small className="quote-form__note">
            This frontend form is ready for backend and admin CMS
            integration.
          </small>
        </motion.form>
      </div>
    </section>
  );
}

function QuoteProcess() {
  return (
    <section className="quote-process">
      <div className="container">
        <div className="quote-heading quote-heading--light">
          <div className="quote-label quote-label--light">
            <span />
            Quotation Process
          </div>

          <h2>
            A Clear Path from Enquiry to Supply
          </h2>

          <p>
            Every quotation request follows a structured review and
            coordination process.
          </p>
        </div>

        <div className="quote-process__grid">
          {quoteSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >
                <span>{step.number}</span>

                <div className="quote-process__icon">
                  <Icon size={24} />
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QuoteBenefits() {
  return (
    <section className="quote-benefits">
      <div className="container">
        <div className="quote-heading">
          <div className="quote-label">
            <span />
            Why Request a Quote
          </div>

          <h2>
            A Better Quotation Starts with Better Requirement Review
          </h2>

          <p>
            Our quotation process considers product, specification,
            processing and delivery requirements together.
          </p>
        </div>

        <div className="quote-benefits__grid">
          {quoteBenefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -7 }}
              >
                <div className="quote-benefits__icon">
                  <Icon size={24} />
                </div>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QuoteSupport() {
  return (
    <section className="quote-support">
      <div className="container quote-support__container">
        <div>
          <span>Need Help Before Submitting?</span>

          <h2>
            Speak with Our Team About Your Steel Requirement
          </h2>

          <p>
            Call or email us with your product, grade, dimensions, quantity
            and delivery location. Our team will guide you through the
            quotation process.
          </p>
        </div>

        <div className="quote-support__actions">
          <a
            href={`tel:${quoteContact.phoneHref}`}
            className="quote-support__primary"
          >
            Call Our Team
            <Phone size={18} />
          </a>

          <Link
            to="/contact"
            className="quote-support__secondary"
          >
            Contact Page
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Quote;
