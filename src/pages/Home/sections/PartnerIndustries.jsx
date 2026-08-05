import { Factory } from "lucide-react";
import { trustedIndustries } from "../../../data/homeData";

function PartnerIndustries() {
  const repeated = [...trustedIndustries, ...trustedIndustries];

  return (
    <section className="trusted-industries">
      <div className="container">
        <div className="trusted-industries__heading">
          <span>Industry Partnerships</span>
          <h2>Trusted Across India’s Growing Industrial Economy</h2>
        </div>

        <div className="trusted-industries__marquee">
          <div className="trusted-industries__track">
            {repeated.map((industry, index) => (
              <div
                className="trusted-industry"
                key={`${industry}-${index}`}
              >
                <Factory size={18} />
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerIndustries;

