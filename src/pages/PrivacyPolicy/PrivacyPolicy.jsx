import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Cookie,
  Database,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

import "./PrivacyPolicy.css";

const sections = [
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    content: [
      "We may collect personal information that you voluntarily provide when you submit an enquiry, request a quotation, contact our team, subscribe to updates, or otherwise communicate with us.",
      "This may include your name, company name, phone number, email address, project details, product requirements, delivery location and any information included in your message.",
    ],
    bullets: [
      "Name and company details",
      "Phone number and email address",
      "Product, quotation and project requirements",
      "Delivery location and communication details",
      "Technical information such as browser type, device and IP address",
    ],
  },
  {
    id: "how-we-use-information",
    icon: UserRoundCheck,
    title: "How We Use Your Information",
    content: [
      "We use the information collected through this website to respond to enquiries, prepare quotations, coordinate project or product requirements, improve our services and maintain business communication.",
    ],
    bullets: [
      "Responding to product and project enquiries",
      "Preparing and following up on quotations",
      "Providing customer and technical support",
      "Improving website content and user experience",
      "Maintaining business, security and compliance records",
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies and Website Analytics",
    content: [
      "Our website may use cookies or similar technologies to support website functionality, understand visitor activity and improve performance.",
      "You may control or disable cookies through your browser settings. Disabling certain cookies may affect some website features.",
    ],
  },
  {
    id: "data-sharing",
    icon: FileText,
    title: "Sharing of Information",
    content: [
      "We do not sell or rent your personal information. Information may be shared with trusted service providers only when required to operate the website, provide requested services, support communication, maintain security or comply with applicable law.",
      "Service providers are expected to process information only for the purpose for which it was shared.",
    ],
  },
  {
    id: "data-security",
    icon: LockKeyhole,
    title: "Data Security",
    content: [
      "We take reasonable administrative, technical and organisational measures to protect personal information against unauthorised access, loss, misuse, alteration or disclosure.",
      "No internet transmission or electronic storage method is completely secure. Therefore, absolute security cannot be guaranteed.",
    ],
  },
  {
    id: "data-retention",
    icon: ShieldCheck,
    title: "Data Retention",
    content: [
      "We retain personal information only for as long as reasonably necessary to respond to your request, maintain business records, fulfil the purpose for which it was collected, or comply with legal obligations.",
      "Information may be deleted or anonymised when it is no longer required, subject to applicable record-retention requirements.",
    ],
  },
  {
    id: "your-rights",
    icon: UserRoundCheck,
    title: "Your Choices and Rights",
    content: [
      "Depending on applicable law, you may request access to your personal information, correction of inaccurate information, withdrawal of consent or deletion of information that is no longer required.",
      "We may need to verify your identity before responding to a request.",
    ],
  },
  {
    id: "third-party-links",
    icon: FileText,
    title: "Third-Party Links",
    content: [
      "This website may contain links to external websites or services. We are not responsible for the privacy practices, security or content of third-party websites.",
      "We recommend reviewing the privacy policy of any external website before submitting personal information.",
    ],
  },
  {
    id: "children",
    icon: ShieldCheck,
    title: "Children’s Privacy",
    content: [
      "This website is intended for business and general informational use. We do not knowingly collect personal information from children through this website.",
      "If you believe a child has provided personal information, please contact us so that appropriate action can be taken.",
    ],
  },
  {
    id: "updates",
    icon: FileText,
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our website, business practices or legal requirements.",
      "The revised policy will be published on this page with an updated effective date.",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <PrivacyHero />

      <section className="privacy-main">
        <div className="container privacy-main__grid">
          <aside className="privacy-sidebar">
            <div className="privacy-sidebar__card">
              <span>On This Page</span>

              <nav aria-label="Privacy policy sections">
                {sections.map((section) => (
                  <a
                    href={`#${section.id}`}
                    key={section.id}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>

            <div className="privacy-sidebar__contact">
              <Mail size={25} />

              <h3>Privacy Questions?</h3>

              <p>
                Contact our team regarding personal information or this
                policy.
              </p>

              <a href="mailto:info@godavariironsteel.com">
                info@godavariironsteel.com
                <ArrowRight size={16} />
              </a>
            </div>
          </aside>

          <motion.article
            className="privacy-content"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.6 }}
          >
            <div className="privacy-intro">
              <ShieldCheck size={28} />

              <div>
                <h2>Our Commitment to Privacy</h2>

                <p>
                  Godavari Iron &amp; Steel respects your privacy and is
                  committed to handling personal information responsibly.
                  This policy explains how information may be collected,
                  used, stored and protected when you use this website.
                </p>
              </div>
            </div>

            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <section
                  className="privacy-section"
                  id={section.id}
                  key={section.id}
                >
                  <div className="privacy-section__number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="privacy-section__heading">
                    <span>
                      <Icon size={22} />
                    </span>

                    <h2>{section.title}</h2>
                  </div>

                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={17} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              );
            })}

            <section className="privacy-section" id="contact-us">
              <div className="privacy-section__number">11</div>

              <div className="privacy-section__heading">
                <span>
                  <Mail size={22} />
                </span>

                <h2>Contact Us</h2>
              </div>

              <p>
                For questions, concerns or requests relating to this Privacy
                Policy or your personal information, contact:
              </p>

              <div className="privacy-contact-box">
                <strong>Godavari Iron &amp; Steel</strong>
                <span>
                  Plot 14, Industrial Growth Centre, Rajahmundry,
                  Andhra Pradesh, India
                </span>
                <a href="mailto:info@godavariironsteel.com">
                  info@godavariironsteel.com
                </a>
                <a href="tel:+919876543210">
                  +91 98765 43210
                </a>
              </div>
            </section>

            <div className="privacy-note">
              <LockKeyhole size={23} />

              <p>
                This page is a general website privacy-policy template and
                should be reviewed against the company’s actual data
                practices and applicable legal requirements before launch.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      <PrivacyCTA />
    </main>
  );
}

function PrivacyHero() {
  return (
    <section className="privacy-hero">
      <div className="privacy-hero__ambient" />

      <div className="container">
        <nav
          className="privacy-hero__breadcrumb"
          aria-label="Breadcrumb"
        >
          <Link to="/">Home</Link>
          <span>/</span>
          <strong>Privacy Policy</strong>
        </nav>

        <motion.div
          className="privacy-hero__content"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="privacy-label">
            <span />
            Legal &amp; Privacy
          </div>

          <h1>
            Privacy
            <span>Policy</span>
          </h1>

          <p>
            Learn how Godavari Iron &amp; Steel may collect, use, protect and
            retain information submitted through this website.
          </p>

          <div className="privacy-hero__meta">
            <span>Effective Date: August 04, 2026</span>
            <span>Last Updated: August 04, 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PrivacyCTA() {
  return (
    <section className="privacy-cta">
      <div className="container privacy-cta__container">
        <div>
          <span>Need Clarification?</span>

          <h2>
            Have a Question About Your Information?
          </h2>

          <p>
            Contact our team regarding privacy requests, corrections,
            consent withdrawal or questions about this policy.
          </p>
        </div>

        <div className="privacy-cta__actions">
          <Link
            to="/contact"
            className="privacy-cta__primary"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </Link>

          <a
            href="mailto:info@godavariironsteel.com"
            className="privacy-cta__secondary"
          >
            Email Us
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
