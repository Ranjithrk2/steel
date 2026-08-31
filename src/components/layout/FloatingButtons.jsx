import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link } from "react-router-dom";
import {
  ArrowUp,
  MessageCircle,
  Send,
} from "lucide-react";

import "./FloatingButtons.css";

function FloatingButtons() {
  const [
    showScrollButton,
    setShowScrollButton,
  ] = useState(false);

  const [
    scrollProgress,
    setScrollProgress,
  ] = useState(0);

  const whatsappNumber =
    "919876543210";

  const whatsappMessage =
    useMemo(
      () =>
        encodeURIComponent(
          "Hello Godavari Iron & Steel, I would like to know more about your products and request a quotation."
        ),
      []
    );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement
          .scrollTop;

      const scrollHeight =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      const progress =
        scrollHeight > 0
          ? Math.min(
              100,
              Math.max(
                0,
                (scrollTop /
                  scrollHeight) *
                  100
              )
            )
          : 0;

      setScrollProgress(
        progress
      );

      setShowScrollButton(
        scrollTop > 320
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

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="floating-dock"
      aria-label="Quick actions"
    >
      <Link
        to="/quote"
        className="floating-action floating-action--enquiry"
        aria-label="Send enquiry"
      >
        <span className="floating-action__icon">
          <Send size={20} />
        </span>

        <span className="floating-action__tooltip">
          Send Enquiry
        </span>
      </Link>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        className="floating-action floating-action--whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="floating-action__pulse" />

        <span className="floating-action__icon">
          <MessageCircle
            size={22}
          />
        </span>

        <span className="floating-action__tooltip">
          Chat on WhatsApp
        </span>
      </a>

      <button
        type="button"
        className={`floating-action floating-action--scroll ${
          showScrollButton
            ? "floating-action--visible"
            : ""
        }`}
        onClick={
          scrollToTop
        }
        aria-label="Scroll to top"
        tabIndex={
          showScrollButton
            ? 0
            : -1
        }
      >
        <svg
          className="floating-action__progress"
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <circle
            className="floating-action__progress-track"
            cx="32"
            cy="32"
            r="27"
          />

          <circle
            className="floating-action__progress-value"
            cx="32"
            cy="32"
            r="27"
            style={{
              strokeDashoffset:
                169.65 -
                (169.65 *
                  scrollProgress) /
                  100,
            }}
          />
        </svg>

        <span className="floating-action__icon">
          <ArrowUp
            size={21}
          />
        </span>

        <span className="floating-action__tooltip">
          Back to Top
        </span>
      </button>
    </div>
  );
}

export default FloatingButtons;
