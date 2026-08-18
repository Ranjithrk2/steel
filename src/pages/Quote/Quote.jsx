import { useMemo, useState } from "react";
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

/* =====================================================
   DROPDOWN OPTIONS
===================================================== */

const OTHER_OPTION = "Other";

/*
  Product categories are kept here so you do not have
  to modify quote.js right now.
*/
const productCategories = [
  "Reinforcement Steel",
  "Flat Steel Products",
  "Pipes & Hollow Sections",
  "Structural Steel",
  "Plates & Sheets",
  "Fabricated Steel",
  OTHER_OPTION,
];

/*
  Specification choices.

  These are intentionally broad because actual
  requirements can vary from project to project.
*/
const productSpecifications = [
  "Fe 415",
  "Fe 500",
  "Fe 500D",
  "Fe 550",
  "Fe 550D",
  "Fe 600",
  "IS 2062",
  "IS 1786",
  "ASTM Specification",
  "Project-Specific Specification",
  OTHER_OPTION,
];

/*
  Delivery timeline is now also a dropdown.
  Other allows the customer to type any custom timeline.
*/
const deliveryTimelineOptions = [
  "Immediate Requirement",
  "Within 7 Days",
  "Within 15 Days",
  "Within 30 Days",
  "Within 45 Days",
  "Within 60 Days",
  "Flexible / To Be Discussed",
  OTHER_OPTION,
];

/*
  Add Other without duplicating it if quote.js
  already contains it.
*/
function withOtherOption(options = []) {
  const safeOptions = Array.isArray(options)
    ? options
    : [];

  const containsOther = safeOptions.some(
    (item) =>
      String(item).trim().toLowerCase() ===
      "other"
  );

  if (containsOther) {
    return safeOptions;
  }

  return [
    ...safeOptions,
    OTHER_OPTION,
  ];
}

const projectTypeOptions =
  withOtherOption(quoteProjectTypes);

const productOptions =
  withOtherOption(quoteProductOptions);

const unitOptions =
  withOtherOption(quoteUnits);

/* =====================================================
   INITIAL FORM
===================================================== */

const initialForm = {
  fullName: "",
  companyName: "",
  phone: "",
  email: "",

  projectType:
    projectTypeOptions[0] || "",
  projectTypeOther: "",

  productCategory:
    productCategories[0],
  productCategoryOther: "",

  product:
    productOptions[0] || "",
  productOther: "",

  specification:
    productSpecifications[0],
  specificationOther: "",

  grade: "",
  dimensions: "",

  quantity: "",

  unit:
    unitOptions[0] || "",
  unitOther: "",

  deliveryLocation: "",

  deliveryTimeline:
    deliveryTimelineOptions[0],
  deliveryTimelineOther: "",

  message: "",
};

/* =====================================================
   MAIN PAGE
===================================================== */

function Quote() {
  const [formData, setFormData] =
    useState(initialForm);

  const [submitted, setSubmitted] =
    useState(false);

  const whatsappRequirement =
    useMemo(() => {
      return buildReadableRequirement(
        formData
      );
    }, [formData]);

  function handleChange(event) {
    const {
      name,
      value,
    } = event.target;

    setSubmitted(false);

    setFormData((current) => {
      const updated = {
        ...current,
        [name]: value,
      };

      /*
        If user changes from Other back to
        a normal option, clear the custom field.
      */

      if (
        name === "projectType" &&
        value !== OTHER_OPTION
      ) {
        updated.projectTypeOther = "";
      }

      if (
        name === "productCategory" &&
        value !== OTHER_OPTION
      ) {
        updated.productCategoryOther = "";
      }

      if (
        name === "product" &&
        value !== OTHER_OPTION
      ) {
        updated.productOther = "";
      }

      if (
        name === "specification" &&
        value !== OTHER_OPTION
      ) {
        updated.specificationOther = "";
      }

      if (
        name === "unit" &&
        value !== OTHER_OPTION
      ) {
        updated.unitOther = "";
      }

      if (
        name === "deliveryTimeline" &&
        value !== OTHER_OPTION
      ) {
        updated.deliveryTimelineOther = "";
      }

      return updated;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    /*
      Frontend validation for custom "Other"
      values.
    */

    if (
      formData.projectType ===
        OTHER_OPTION &&
      !formData.projectTypeOther.trim()
    ) {
      alert(
        "Please enter your project type."
      );

      return;
    }

    if (
      formData.productCategory ===
        OTHER_OPTION &&
      !formData.productCategoryOther.trim()
    ) {
      alert(
        "Please enter the product category."
      );

      return;
    }

    if (
      formData.product ===
        OTHER_OPTION &&
      !formData.productOther.trim()
    ) {
      alert(
        "Please enter the required product."
      );

      return;
    }

    if (
      formData.specification ===
        OTHER_OPTION &&
      !formData.specificationOther.trim()
    ) {
      alert(
        "Please enter the product specification."
      );

      return;
    }

    if (
      formData.unit ===
        OTHER_OPTION &&
      !formData.unitOther.trim()
    ) {
      alert(
        "Please enter the quantity unit."
      );

      return;
    }

    if (
      formData.deliveryTimeline ===
        OTHER_OPTION &&
      !formData.deliveryTimelineOther.trim()
    ) {
      alert(
        "Please enter the required delivery timeline."
      );

      return;
    }

    /*
      Ready for backend API integration.

      You can send:
      buildSubmissionPayload(formData)

      to your backend later.
    */

    console.log(
      "Quotation Request:",
      buildSubmissionPayload(formData)
    );

    console.log(
      "Readable Requirement:",
      whatsappRequirement
    );

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

/* =====================================================
   RESOLVE OTHER VALUES
===================================================== */

function resolveOtherValue(
  selectedValue,
  otherValue
) {
  if (
    selectedValue ===
    OTHER_OPTION
  ) {
    return (
      otherValue.trim() ||
      OTHER_OPTION
    );
  }

  return selectedValue;
}

function buildSubmissionPayload(
  formData
) {
  return {
    fullName:
      formData.fullName.trim(),

    companyName:
      formData.companyName.trim(),

    phone:
      formData.phone.trim(),

    email:
      formData.email.trim(),

    projectType:
      resolveOtherValue(
        formData.projectType,
        formData.projectTypeOther
      ),

    productCategory:
      resolveOtherValue(
        formData.productCategory,
        formData.productCategoryOther
      ),

    product:
      resolveOtherValue(
        formData.product,
        formData.productOther
      ),

    specification:
      resolveOtherValue(
        formData.specification,
        formData.specificationOther
      ),

    grade:
      formData.grade.trim(),

    dimensions:
      formData.dimensions.trim(),

    quantity:
      formData.quantity,

    unit:
      resolveOtherValue(
        formData.unit,
        formData.unitOther
      ),

    deliveryLocation:
      formData.deliveryLocation.trim(),

    deliveryTimeline:
      resolveOtherValue(
        formData.deliveryTimeline,
        formData.deliveryTimelineOther
      ),

    message:
      formData.message.trim(),
  };
}

function buildReadableRequirement(
  formData
) {
  const payload =
    buildSubmissionPayload(
      formData
    );

  return [
    `Name: ${payload.fullName}`,
    `Company: ${payload.companyName}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Project Type: ${payload.projectType}`,
    `Product Category: ${payload.productCategory}`,
    `Product: ${payload.product}`,
    `Specification: ${payload.specification}`,
    `Grade: ${payload.grade}`,
    `Dimensions: ${payload.dimensions}`,
    `Quantity: ${payload.quantity} ${payload.unit}`,
    `Delivery Location: ${payload.deliveryLocation}`,
    `Delivery Timeline: ${payload.deliveryTimeline}`,
    `Additional Details: ${payload.message}`,
  ].join("\n");
}

/* =====================================================
   HERO
===================================================== */

function QuoteHero() {
  return (
    <section className="quote-hero">
      <div className="quote-hero__ambient" />

      <div className="container">
        <nav
          className="quote-hero__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">
            Home
          </Link>

          <span>/</span>

          <strong>
            Request a Quote
          </strong>
        </nav>

        <div className="quote-hero__grid">
          <motion.div
            className="quote-hero__content"
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
            <div className="quote-label">
              <span />

              Steel Supply Quotation
            </div>

            <h1>
              Tell Us What You Need.

              <span>
                We’ll Plan the Supply.
              </span>
            </h1>

            <p>
              Share your product category,
              exact product, specification,
              grade, dimensions, quantity,
              application and delivery
              location. Our team will review
              the complete requirement and
              prepare a suitable quotation.
            </p>

            <div className="quote-hero__facts">
              <div>
                <strong>
                  Products
                </strong>

                <span>
                  Bars, coils, pipes,
                  hollow sections and
                  structurals
                </span>
              </div>

              <div>
                <strong>
                  Specifications
                </strong>

                <span>
                  Grade, size, standard and
                  project-specific requirements
                </span>
              </div>

              <div>
                <strong>
                  Coverage
                </strong>

                <span>
                  Project and procurement
                  support across India
                </span>
              </div>
            </div>

            <div className="quote-hero__actions">
              <a
                href="#quote-form"
                className="quote-primary-button"
              >
                Start Your Quote

                <ArrowRight
                  size={18}
                />
              </a>

              <a
                href={`tel:${quoteContact.phoneHref}`}
                className="quote-text-link"
              >
                Call Our Team

                <ArrowUpRight
                  size={17}
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="quote-hero__visual"
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
            <div className="quote-hero__visual-card">
              <FileText
                size={58}
              />

              <span>
                Project-Based Quotation
              </span>

              <strong>
                Category, Product,
                Specification, Quantity
                and Delivery Review
              </strong>

              <p>
                A structured quotation
                process designed around
                your exact steel
                requirement.
              </p>
            </div>

            <div className="quote-hero__floating-card">
              <ShieldCheck
                size={25}
              />

              <div>
                <strong>
                  Requirement Reviewed
                </strong>

                <span>
                  Before quotation preparation
                </span>
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

/* =====================================================
   HIGHLIGHTS
===================================================== */

function QuoteHighlights() {
  return (
    <section className="quote-highlights">
      <div className="container quote-highlights__grid">
        {quoteHighlights.map(
          (item, index) => {
            const Icon =
              item.icon;

            return (
              <motion.article
                key={
                  item.label
                }
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.45,
                  delay:
                    index *
                    0.04,
                }}
              >
                <Icon
                  size={19}
                />

                <span>
                  {item.label}
                </span>
              </motion.article>
            );
          }
        )}
      </div>
    </section>
  );
}

/* =====================================================
   FORM SECTION
===================================================== */

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
          <div className="quote-label">
            <span />

            Request Details
          </div>

          <h2>
            Share Complete Information
            for a More Accurate Quote
          </h2>

          <p>
            Select the closest available
            option. If your requirement is
            not listed, choose
            <strong> Other </strong>
            and type the exact requirement.
          </p>

          <div className="quote-form-section__points">
            <div>
              <CheckCircle2
                size={18}
              />

              <span>
                Product category &amp;
                product
              </span>
            </div>

            <div>
              <CheckCircle2
                size={18}
              />

              <span>
                Specification, grade
                &amp; dimensions
              </span>
            </div>

            <div>
              <CheckCircle2
                size={18}
              />

              <span>
                Project application
                &amp; quantity
              </span>
            </div>

            <div>
              <CheckCircle2
                size={18}
              />

              <span>
                Delivery location
                &amp; timeline
              </span>
            </div>
          </div>

          <div className="quote-form-section__contact">
            <a
              href={`tel:${quoteContact.phoneHref}`}
            >
              <Phone
                size={19}
              />

              <span>
                <small>
                  Call Our Team
                </small>

                <strong>
                  {
                    quoteContact.phone
                  }
                </strong>
              </span>
            </a>

            <a
              href={`mailto:${quoteContact.email}`}
            >
              <Mail
                size={19}
              />

              <span>
                <small>
                  Email Requirement
                </small>

                <strong>
                  {
                    quoteContact.email
                  }
                </strong>
              </span>
            </a>

            <div>
              <MapPin
                size={19}
              />

              <span>
                <small>
                  Office Location
                </small>

                <strong>
                  {
                    quoteContact.address
                  }
                </strong>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="quote-form"
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
          <div className="quote-form__heading">
            <span>
              Quotation Form
            </span>

            <h3>
              Enter Your Requirement
            </h3>

            <p>
              Fields marked with * are
              required. Choose Other when
              your requirement is not listed.
            </p>
          </div>

          {submitted && (
            <div className="quote-form__success">
              <CheckCircle2
                size={22}
              />

              <span>
                Your quotation request has
                been recorded. Our team
                will contact you shortly.
              </span>
            </div>
          )}

          <div className="quote-form__grid">
            {/* =========================
                CUSTOMER DETAILS
            ========================= */}

            <div className="quote-form__section-title quote-form__full">
              <span>01</span>

              <div>
                <strong>
                  Customer Details
                </strong>

                <small>
                  Your contact information
                </small>
              </div>
            </div>

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
                autoComplete="name"
                required
              />
            </label>

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
                autoComplete="organization"
              />
            </label>

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
                autoComplete="tel"
                required
              />
            </label>

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
                autoComplete="email"
                required
              />
            </label>

            {/* =========================
                PROJECT DETAILS
            ========================= */}

            <div className="quote-form__section-title quote-form__full">
              <span>02</span>

              <div>
                <strong>
                  Project Details
                </strong>

                <small>
                  Tell us where the material
                  will be used
                </small>
              </div>
            </div>

            <SelectWithOther
              label="Project Type *"
              name="projectType"
              value={
                formData.projectType
              }
              otherName="projectTypeOther"
              otherValue={
                formData.projectTypeOther
              }
              options={
                projectTypeOptions
              }
              onChange={onChange}
              otherPlaceholder="Enter your project type"
              required
            />

            {/* =========================
                PRODUCT DETAILS
            ========================= */}

            <div className="quote-form__section-title quote-form__full">
              <span>03</span>

              <div>
                <strong>
                  Product Details
                </strong>

                <small>
                  Category, product and
                  specification
                </small>
              </div>
            </div>

            <SelectWithOther
              label="Product Category *"
              name="productCategory"
              value={
                formData.productCategory
              }
              otherName="productCategoryOther"
              otherValue={
                formData.productCategoryOther
              }
              options={
                productCategories
              }
              onChange={onChange}
              otherPlaceholder="Enter product category"
              required
            />

            <SelectWithOther
              label="Product Required *"
              name="product"
              value={
                formData.product
              }
              otherName="productOther"
              otherValue={
                formData.productOther
              }
              options={
                productOptions
              }
              onChange={onChange}
              otherPlaceholder="Enter required product"
              required
            />

            <SelectWithOther
              label="Product Specification *"
              name="specification"
              value={
                formData.specification
              }
              otherName="specificationOther"
              otherValue={
                formData.specificationOther
              }
              options={
                productSpecifications
              }
              onChange={onChange}
              otherPlaceholder="Enter exact specification / standard"
              required
            />

            <label>
              <span>
                Grade
              </span>

              <input
                type="text"
                name="grade"
                value={
                  formData.grade
                }
                onChange={onChange}
                placeholder="Example: Fe 500D"
              />

              <small className="quote-form__field-help">
                Enter grade if applicable
                to your selected product.
              </small>
            </label>

            <label>
              <span>
                Dimensions / Size
              </span>

              <input
                type="text"
                name="dimensions"
                value={
                  formData.dimensions
                }
                onChange={onChange}
                placeholder="Example: 12 mm x 12 m"
              />

              <small className="quote-form__field-help">
                Diameter, thickness,
                width, length or section
                size.
              </small>
            </label>

            {/* =========================
                QUANTITY
            ========================= */}

            <div className="quote-form__section-title quote-form__full">
              <span>04</span>

              <div>
                <strong>
                  Quantity
                </strong>

                <small>
                  Required quantity and
                  measurement unit
                </small>
              </div>
            </div>

            <label>
              <span>
                Quantity *
              </span>

              <input
                type="number"
                name="quantity"
                value={
                  formData.quantity
                }
                onChange={onChange}
                placeholder="Enter quantity"
                min="0"
                step="any"
                required
              />
            </label>

            <SelectWithOther
              label="Unit *"
              name="unit"
              value={
                formData.unit
              }
              otherName="unitOther"
              otherValue={
                formData.unitOther
              }
              options={
                unitOptions
              }
              onChange={onChange}
              otherPlaceholder="Enter unit"
              required
            />

            {/* =========================
                DELIVERY
            ========================= */}

            <div className="quote-form__section-title quote-form__full">
              <span>05</span>

              <div>
                <strong>
                  Delivery Details
                </strong>

                <small>
                  Destination and required
                  schedule
                </small>
              </div>
            </div>

            <label>
              <span>
                Delivery Location *
              </span>

              <input
                type="text"
                name="deliveryLocation"
                value={
                  formData.deliveryLocation
                }
                onChange={onChange}
                placeholder="City, State"
                required
              />
            </label>

            <SelectWithOther
              label="Required Delivery Timeline"
              name="deliveryTimeline"
              value={
                formData.deliveryTimeline
              }
              otherName="deliveryTimelineOther"
              otherValue={
                formData.deliveryTimelineOther
              }
              options={
                deliveryTimelineOptions
              }
              onChange={onChange}
              otherPlaceholder="Example: Required by 25 August"
            />

            {/* =========================
                EXTRA DETAILS
            ========================= */}

            <div className="quote-form__section-title quote-form__full">
              <span>06</span>

              <div>
                <strong>
                  Additional Requirement
                </strong>

                <small>
                  Share anything else our
                  team should know
                </small>
              </div>
            </div>

            <label className="quote-form__full">
              <span>
                Additional Requirement
                Details
              </span>

              <textarea
                name="message"
                value={
                  formData.message
                }
                onChange={onChange}
                placeholder="Mention application, brand preference, processing, cutting, packing, phased delivery, testing requirement, documentation or any other special requirement."
                rows="6"
              />
            </label>
          </div>

          <button
            type="submit"
            className="quote-form__submit"
          >
            Submit Quote Request

            <Send
              size={18}
            />
          </button>

          <small className="quote-form__note">
            Your requirement will be
            reviewed before commercial
            quotation preparation.
          </small>
        </motion.form>
      </div>
    </section>
  );
}

/* =====================================================
   REUSABLE SELECT + OTHER INPUT
===================================================== */

function SelectWithOther({
  label,
  name,
  value,
  otherName,
  otherValue,
  options,
  onChange,
  otherPlaceholder,
  required = false,
}) {
  const showOther =
    value === OTHER_OPTION;

  return (
    <div
      className={`quote-form__select-group ${
        showOther
          ? "quote-form__select-group--other"
          : ""
      }`}
    >
      <label>
        <span>{label}</span>

        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          {options.map(
            (option) => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            )
          )}
        </select>
      </label>

      {showOther && (
        <motion.label
          className="quote-form__other-field"
          initial={{
            opacity: 0,
            y: -6,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <span>
            Please Specify *
          </span>

          <input
            type="text"
            name={otherName}
            value={otherValue}
            onChange={onChange}
            placeholder={
              otherPlaceholder
            }
            required
            autoFocus
          />
        </motion.label>
      )}
    </div>
  );
}

/* =====================================================
   PROCESS
===================================================== */

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
            A Clear Path from Enquiry
            to Supply
          </h2>

          <p>
            Every quotation request follows
            a structured review and
            coordination process.
          </p>
        </div>

        <div className="quote-process__grid">
          {quoteSteps.map(
            (step, index) => {
              const Icon =
                step.icon;

              return (
                <motion.article
                  key={
                    step.number
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
                  <span>
                    {step.number}
                  </span>

                  <div className="quote-process__icon">
                    <Icon
                      size={24}
                    />
                  </div>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {
                      step.description
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

/* =====================================================
   BENEFITS
===================================================== */

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
            A Better Quotation Starts
            with Better Requirement Review
          </h2>

          <p>
            Our quotation process considers
            product, specification,
            processing and delivery
            requirements together.
          </p>
        </div>

        <div className="quote-benefits__grid">
          {quoteBenefits.map(
            (benefit, index) => {
              const Icon =
                benefit.icon;

              return (
                <motion.article
                  key={
                    benefit.title
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
                  whileHover={{
                    y: -7,
                  }}
                >
                  <div className="quote-benefits__icon">
                    <Icon
                      size={24}
                    />
                  </div>

                  <h3>
                    {
                      benefit.title
                    }
                  </h3>

                  <p>
                    {
                      benefit.description
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

/* =====================================================
   SUPPORT
===================================================== */

function QuoteSupport() {
  return (
    <section className="quote-support">
      <div className="container quote-support__container">
        <div>
          <span>
            Need Help Before
            Submitting?
          </span>

          <h2>
            Speak with Our Team About
            Your Steel Requirement
          </h2>

          <p>
            Call or email us with your
            product category, product,
            specification, dimensions,
            quantity and delivery
            location. Our team will guide
            you through the quotation
            process.
          </p>
        </div>

        <div className="quote-support__actions">
          <a
            href={`tel:${quoteContact.phoneHref}`}
            className="quote-support__primary"
          >
            Call Our Team

            <Phone
              size={18}
            />
          </a>

          <Link
            to="/contact"
            className="quote-support__secondary"
          >
            Contact Page

            <ArrowRight
              size={18}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Quote;