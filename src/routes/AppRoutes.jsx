import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Industries from "../pages/Industries/Industries";
import Infrastructure from "../pages/Infrastructure/Infrastructure";
import Quality from "../pages/Quality/Quality";
import Projects from "../pages/Projects/Projects";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import Contact from "../pages/Contact/Contact";
import Quote from "../pages/Quote/Quote";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions/TermsConditions";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* About */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Products */}
          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/products/:slug"
            element={<ProductDetails />}
          />

          {/* Industries */}
          <Route
            path="/industries"
            element={<Industries />}
          />

          {/* Infrastructure */}
          <Route
            path="/infrastructure"
            element={<Infrastructure />}
          />

          {/* Quality */}
          <Route
            path="/quality"
            element={<Quality />}
          />

          {/* Projects */}
          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/projects/:slug"
            element={<ProjectDetails />}
          />

          {/* Blog */}
          <Route
            path="/blog"
            element={<Blog />}
          />

          <Route
            path="/blog/:slug"
            element={<BlogDetails />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Request Quote */}
          <Route
            path="/quote"
            element={<Quote />}
          />

          {/* Privacy Policy */}
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          {/* Terms & Conditions */}
          <Route
            path="/terms-and-conditions"
            element={<TermsConditions />}
          />

          {/* 404 Page - Keep this LAST */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;