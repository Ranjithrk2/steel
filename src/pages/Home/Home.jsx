import Hero from "./sections/Hero";
import ProductCatalogue from "./sections/ProductCatalogue";
import Manufacturers from "./sections/Manufacturers";
import WhyChooseGodavari from "./sections/WhyChooseGodavari";
import IndustriesServed from "./sections/IndustriesServed";
import AboutPreview from "./sections/AboutPreview";
import FinalCTA from "./sections/FinalCTA";

import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <ProductCatalogue />
      <Manufacturers />
      <WhyChooseGodavari />
      <IndustriesServed />
      <AboutPreview />
      <FinalCTA />
    </main>
  );
}

export default Home;
