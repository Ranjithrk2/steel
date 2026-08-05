import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Home, Search, TriangleAlert } from "lucide-react";
import "./NotFound.css";

export default function NotFound(){
  return (
    <main className="nf-page">
      <div className="nf-bg"></div>
      <motion.section className="nf-card"
        initial={{opacity:0,y:30,scale:.96}}
        animate={{opacity:1,y:0,scale:1}}
        transition={{duration:.6}}>
        <div className="nf-badge"><TriangleAlert size={18}/>404 Error</div>
        <div className="nf-code">404</div>
        <h1>Page Not Found</h1>
        <p>
          The page you are looking for may have been moved, removed,
          or the URL may be incorrect.
        </p>

        <div className="nf-actions">
          <Link to="/" className="btn-primary">
            <Home size={18}/>Back Home
          </Link>
          <Link to="/contact" className="btn-secondary">
            <Search size={18}/>Contact Us
          </Link>
        </div>

        <Link className="nf-back" to="/">
          <ArrowLeft size={16}/>Return to Homepage
        </Link>
      </motion.section>
    </main>
  );
}
