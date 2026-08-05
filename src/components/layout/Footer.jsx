import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import "./Footer.css";

const companyLinks = [
  { label: "About Us", path: "/about" },
  { label: "Industries", path: "/industries" },
  {
    label: "Infrastructure",
    path: "/infrastructure",
  },
  {
    label: "Quality Assurance",
    path: "/quality",
  },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const productLinks = [
  {
    label: "TMT Reinforcement Bars",
    path:
      "/products/tmt-reinforcement-bars",
  },
  {
    label: "Hot & Cold Rolled Coils",
    path:
      "/products/hot-cold-rolled-coils",
  },
  {
    label: "MS Pipes & Hollow Sections",
    path:
      "/products/ms-pipes-hollow-sections",
  },
  {
    label: "Structural Steel Sections",
    path:
      "/products/structural-steel-sections",
  },
];

function Footer() {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div
        className="site-footer__top-line"
        aria-hidden="true"
      />

      <div className="container site-footer__grid">
        <div className="site-footer__brand-column">
          <Link
            to="/"
            className="site-footer__brand"
            aria-label="Godavari Iron and Steel home"
          >
            <img
              src="/godavari-logo.png"
              alt="Godavari Iron & Steel"
              className="site-footer__logo"
            />
          </Link>

          <p className="site-footer__description">
            Reliable iron and steel products,
            integrated processing capabilities and
            project-focused supply solutions for
            construction, infrastructure,
            engineering and manufacturing
            industries.
          </p>

          <Link
            to="/quote"
            className="site-footer__quote-button"
          >
            Request a Quote
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="site-footer__column">
          <h3>Company</h3>

          <ul>
            {companyLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__column">
          <h3>Products</h3>

          <ul>
            {productLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__column site-footer__contact-column">
          <h3>Contact</h3>

          <ul className="site-footer__contact-list">
            <li>
              <MapPin size={18} />

              <span>
                Godavari Iron &amp; Steel,
                <br />
                Rajahmundry, Andhra Pradesh,
                India
              </span>
            </li>

            <li>
              <Phone size={18} />

              <a href="tel:+919876543210">
                +91 98765 43210
              </a>
            </li>

            <li>
              <Mail size={18} />

              <a href="mailto:info@godavariironsteel.com">
                info@godavariironsteel.com
              </a>
            </li>

            <li>
              <Clock size={18} />

              <span>
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {currentYear} Godavari Iron &amp;
          Steel. All rights reserved.
        </p>

        <div className="site-footer__legal">
          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link to="/terms-and-conditions">
            Terms &amp; Conditions
          </Link>
        </div>

        <p className="site-footer__credit">
          Designed &amp; Developed by{" "}
          <a
            href="https://mrtechlab.in"
            target="_blank"
            rel="noreferrer"
          >
            MR.TECHLAB LLP
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
