import "./Home.css";

import Hero from "./sections/Hero";
import AboutPreview from "./sections/AboutPreview";
import Statistics from "./sections/Statistics";
import FeaturedProducts from "./sections/FeaturedProducts";
import Industries from "./sections/Industries";
import PartnerIndustries from "./sections/PartnerIndustries";
import Infrastructure from "./sections/Infrastructure";
import WhyChooseUs from "./sections/WhyChooseUs";
import ManufacturingProcess from "./sections/ManufacturingProcess";
import QualityAssurance from "./sections/QualityAssurance";
import FeaturedProjects from "./sections/FeaturedProjects";
import Sustainability from "./sections/Sustainability";
import Testimonials from "./sections/Testimonials";
import BlogPreview from "./sections/BlogPreview";
import FinalCTA from "./sections/FinalCTA";

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <AboutPreview />
      <Statistics />
      <FeaturedProducts />
      <Industries />
      <PartnerIndustries />
      <Infrastructure />
      <WhyChooseUs />
      <ManufacturingProcess />
      <QualityAssurance />
      <FeaturedProjects />
      <Sustainability />
      <Testimonials />
      <BlogPreview />
      <FinalCTA />
    </main>
  );
}

export default Home;
