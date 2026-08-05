import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import "./Navbar.css";

const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Industries", path: "/industries" },
  { label: "Infrastructure", path: "/infrastructure" },
  { label: "Quality", path: "/quality" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1180) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`site-header ${
        scrolled ? "header-scrolled" : ""
      }`}
    >
      <nav
        className={`site-navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
        aria-label="Primary navigation"
      >
        <NavLink
          to="/"
          className="navbar-brand"
          onClick={closeMobileMenu}
          aria-label="Godavari Iron and Steel home"
        >
          <img
            src="/godavari-logo.png"
            alt="Godavari Iron & Steel"
            className="navbar-logo"
          />
        </NavLink>

        <ul className="navbar-links">
          {navigationLinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `navbar-link ${
                    isActive ? "active" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <NavLink
            to="/quote"
            className="quote-button"
            onClick={closeMobileMenu}
          >
            Get a Quote
            <ArrowUpRight size={15} />
          </NavLink>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={
              mobileMenuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setMobileMenuOpen(
                (current) => !current
              )
            }
          >
            {mobileMenuOpen ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className={`mobile-menu ${
            scrolled
              ? "mobile-menu-scrolled"
              : ""
          }`}
        >
          {navigationLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `mobile-menu-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/quote"
            onClick={closeMobileMenu}
            className="mobile-quote-button"
          >
            Get a Quote
            <ArrowUpRight size={15} />
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navbar;
