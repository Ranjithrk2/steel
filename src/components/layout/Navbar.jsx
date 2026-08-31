import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  ArrowUpRight,
  Menu,
  Search,
  X,
} from "lucide-react";

import { products } from "../../data/homeData";

import "./Navbar.css";

const navigationLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
];

function Navbar() {
  const navigate = useNavigate();

  const searchRef = useRef(null);

  const [scrolled, setScrolled] =
    useState(false);

  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);

  const [
    searchOpen,
    setSearchOpen,
  ] = useState(false);

  const [query, setQuery] =
    useState("");

  /* =====================================================
     SCROLL STATE
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 60
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =====================================================
     RESPONSIVE MENU
  ===================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth >
        1000
      ) {
        setMobileMenuOpen(
          false
        );
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

  /* =====================================================
     MOBILE BODY LOCK
  ===================================================== */

  useEffect(() => {
    document.body.style.overflow =
      mobileMenuOpen
        ? "hidden"
        : "";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [mobileMenuOpen]);

  /* =====================================================
     CLOSE SEARCH OUTSIDE
  ===================================================== */

  useEffect(() => {
    const handleOutsideClick = (
      event
    ) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(
          event.target
        )
      ) {
        setSearchOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  /* =====================================================
     ESCAPE
  ===================================================== */

  useEffect(() => {
    const handleEscape = (
      event
    ) => {
      if (
        event.key === "Escape"
      ) {
        setSearchOpen(false);

        setMobileMenuOpen(
          false
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* =====================================================
     PRODUCT SEARCH
  ===================================================== */

  const filteredProducts =
    useMemo(() => {
      const term = query
        .trim()
        .toLowerCase();

      if (!term) {
        return products.slice(
          0,
          4
        );
      }

      return products
        .filter((product) => {
          const content = [
            product.name,
            product.category,
            product.description,
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

          return content.includes(
            term
          );
        })
        .slice(0, 6);
    }, [query]);

  const closeEverything = () => {
    setMobileMenuOpen(false);

    setSearchOpen(false);
  };

  const openProduct = (
    product
  ) => {
    closeEverything();

    setQuery("");

    if (product?.slug) {
      navigate(
        `/products/${product.slug}`
      );

      return;
    }

    navigate("/products");
  };

  const handleSearchSubmit = (
    event
  ) => {
    event.preventDefault();

    if (
      filteredProducts.length
    ) {
      openProduct(
        filteredProducts[0]
      );

      return;
    }

    navigate("/products");

    closeEverything();
  };

  return (
    <header
      className={`site-header ${
        scrolled
          ? "header-scrolled"
          : ""
      }`}
    >
      <nav
        className={`site-navbar ${
          scrolled
            ? "navbar-scrolled"
            : ""
        }`}
        aria-label="Primary navigation"
      >
        {/* ===============================================
            LOGO
        ================================================ */}

        <NavLink
          to="/"
          className="navbar-brand"
          onClick={
            closeEverything
          }
          aria-label="Godavari Iron and Steel home"
        >
          <img
            src="/godavari-logo.png"
            alt="Godavari Iron & Steel"
            className="navbar-logo"
          />
        </NavLink>

        {/* ===============================================
            DESKTOP LINKS
        ================================================ */}

        <ul className="navbar-links">
          {navigationLinks.map(
            (item) => (
              <li
                key={
                  item.path
                }
              >
                <NavLink
                  to={
                    item.path
                  }
                  end={
                    item.path ===
                    "/"
                  }
                  onClick={
                    closeEverything
                  }
                  className={({
                    isActive,
                  }) =>
                    `navbar-link ${
                      isActive
                        ? "active"
                        : ""
                    }`
                  }
                >
                  {
                    item.label
                  }
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* ===============================================
            ACTIONS
        ================================================ */}

        <div className="navbar-actions">

          {/* SEARCH */}

          <div
            className="navbar-search"
            ref={searchRef}
          >
            <button
              type="button"
              className={`navbar-search__trigger ${
                searchOpen
                  ? "is-open"
                  : ""
              }`}
              aria-label={
                searchOpen
                  ? "Close search"
                  : "Search products"
              }
              aria-expanded={
                searchOpen
              }
              onClick={() => {
                setSearchOpen(
                  (current) =>
                    !current
                );

                setMobileMenuOpen(
                  false
                );
              }}
            >
              {searchOpen ? (
                <X size={19} />
              ) : (
                <Search
                  size={19}
                />
              )}
            </button>

            {searchOpen && (
              <div className="navbar-search__panel">

                <form
                  className="navbar-search__form"
                  onSubmit={
                    handleSearchSubmit
                  }
                >
                  <Search
                    size={17}
                  />

                  <input
                    autoFocus
                    type="search"
                    value={query}
                    onChange={(
                      event
                    ) =>
                      setQuery(
                        event.target
                          .value
                      )
                    }
                    placeholder="Search TMT, coils, pipes..."
                    aria-label="Search products"
                  />
                </form>

                <div className="navbar-search__results">

                  {filteredProducts.length >
                  0 ? (
                    filteredProducts.map(
                      (
                        product
                      ) => (
                        <button
                          type="button"
                          key={
                            product.slug ||
                            product.name
                          }
                          onClick={() =>
                            openProduct(
                              product
                            )
                          }
                        >
                          {product.image ? (
                            <img
                              src={
                                product.image
                              }
                              alt=""
                            />
                          ) : (
                            <span className="navbar-search__placeholder">
                              GI
                            </span>
                          )}

                          <span className="navbar-search__product">
                            <strong>
                              {
                                product.name
                              }
                            </strong>

                            {product.category && (
                              <small>
                                {
                                  product.category
                                }
                              </small>
                            )}
                          </span>

                          <ArrowUpRight
                            size={15}
                          />
                        </button>
                      )
                    )
                  ) : (
                    <div className="navbar-search__empty">
                      No products found.
                    </div>
                  )}

                </div>

                <NavLink
                  to="/products"
                  className="navbar-search__all"
                  onClick={() => {
                    closeEverything();
                    setQuery("");
                  }}
                >
                  View All Products

                  <ArrowUpRight
                    size={14}
                  />
                </NavLink>

              </div>
            )}
          </div>

          {/* QUOTE */}

          <NavLink
            to="/quote"
            className="quote-button"
            onClick={
              closeEverything
            }
          >
            Get a Quote

            <ArrowUpRight
              size={15}
            />
          </NavLink>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={
              mobileMenuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={
              mobileMenuOpen
            }
            aria-controls="mobile-navigation"
            onClick={() => {
              setMobileMenuOpen(
                (current) =>
                  !current
              );

              setSearchOpen(
                false
              );
            }}
          >
            {mobileMenuOpen ? (
              <X size={20} />
            ) : (
              <Menu
                size={20}
              />
            )}
          </button>

        </div>
      </nav>

      {/* =================================================
          MOBILE MENU
      ================================================== */}

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className={`mobile-menu ${
            scrolled
              ? "mobile-menu-scrolled"
              : ""
          }`}
        >

          <form
            className="mobile-menu__search"
            onSubmit={
              handleSearchSubmit
            }
          >
            <Search
              size={17}
            />

            <input
              type="search"
              value={query}
              onChange={(
                event
              ) =>
                setQuery(
                  event.target.value
                )
              }
              placeholder="Search products..."
            />
          </form>

          {query.trim() &&
            filteredProducts.length >
              0 && (
              <div className="mobile-menu__results">
                {filteredProducts.map(
                  (
                    product
                  ) => (
                    <button
                      type="button"
                      key={
                        product.slug ||
                        product.name
                      }
                      onClick={() =>
                        openProduct(
                          product
                        )
                      }
                    >
                      {
                        product.name
                      }
                    </button>
                  )
                )}
              </div>
            )}

          <div className="mobile-menu__links">

            {navigationLinks.map(
              (item) => (
                <NavLink
                  key={
                    item.path
                  }
                  to={
                    item.path
                  }
                  end={
                    item.path ===
                    "/"
                  }
                  onClick={
                    closeEverything
                  }
                  className={({
                    isActive,
                  }) =>
                    `mobile-menu-link ${
                      isActive
                        ? "active"
                        : ""
                    }`
                  }
                >
                  {
                    item.label
                  }
                </NavLink>
              )
            )}

          </div>

          <NavLink
            to="/quote"
            onClick={
              closeEverything
            }
            className="mobile-quote-button"
          >
            Get a Quote

            <ArrowUpRight
              size={15}
            />
          </NavLink>

        </div>
      )}
    </header>
  );
}

export default Navbar;