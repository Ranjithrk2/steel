import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta__container">
        <div>
          <span>Start an Enquiry</span>
          <h2>Have a Project? Let’s Talk Tonnage.</h2>
          <p>
            Send us your specification, grade, quantity and delivery window.
            Our team will respond with a suitable proposal.
          </p>
        </div>

        <div className="final-cta__actions">
          <Link to="/quote" className="cta-white-button">
            Request a Quote
            <ArrowUpRight size={18} />
          </Link>

          <Link to="/contact" className="cta-outline-button">
            Contact Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;

