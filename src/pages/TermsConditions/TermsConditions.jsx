import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FileCheck, Scale, Shield, AlertTriangle, ArrowRight } from "lucide-react";
import "./TermsConditions.css";

const sections=[
["Acceptance of Terms","By using this website you agree to these Terms & Conditions."],
["Website Use","Content is provided for general business information. Misuse, scraping or unlawful use is prohibited."],
["Products & Quotations","Specifications, pricing and availability may change without notice. Quotations remain subject to confirmation."],
["Intellectual Property","All content, graphics, logos and documents remain the property of Godavari Iron & Steel unless stated otherwise."],
["Limitation of Liability","We are not liable for indirect or consequential damages arising from use of this website."],
["External Links","Third-party links are provided for convenience and are governed by their own policies."],
["Changes","These terms may be updated at any time by publishing a revised version on this page."]
];

export default function TermsConditions(){
return(
<main className="terms">
<section className="terms-hero">
<div className="container">
<nav className="crumb"><Link to="/">Home</Link><span>/</span><strong>Terms & Conditions</strong></nav>
<motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>
<div className="label">Legal Information</div>
<h1>Terms <span>& Conditions</span></h1>
<p>Please read these terms carefully before using our website or requesting products and quotations.</p>
</motion.div>
</div>
</section>

<section className="container terms-body">
<div className="intro"><Scale/><div><h2>Website Terms</h2><p>These terms govern your access to and use of the Godavari Iron & Steel website.</p></div></div>

{sections.map((s,i)=>(
<div className="card" key={i}>
<div className="num">{String(i+1).padStart(2,"0")}</div>
<h3>{s[0]}</h3>
<p>{s[1]}</p>
</div>
))}

<div className="notice">
<AlertTriangle/>
<p>This template should be reviewed with the company's legal policies before production deployment.</p>
</div>
</section>

<section className="cta">
<div className="container cta-wrap">
<div><span>Need Help?</span><h2>Questions About These Terms?</h2></div>
<Link to="/contact" className="btn">Contact Us <ArrowRight size={18}/></Link>
</div>
</section>
</main>
)}