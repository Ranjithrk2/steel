import {
  BrowserRouter,
  Navigate,
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
import NotFound from "../pages/NotFound/NotFound";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions/TermsConditions";

import AdminLogin from "../admin/pages/Login/AdminLogin";
import AdminLayout from "../admin/layouts/AdminLayout";
import AdminDashboard from "../admin/pages/Dashboard/AdminDashboard";
import AdminPlaceholder from "../admin/pages/Placeholder/AdminPlaceholder";
import RequireAdmin from "../admin/components/RequireAdmin/RequireAdmin";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public website */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
        </Route>

        {/* Admin login - intentionally outside public Layout */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected admin area */}
        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>
          }
        >
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminPlaceholder />} />
          <Route path="projects" element={<AdminPlaceholder />} />
          <Route path="blog" element={<AdminPlaceholder />} />
          <Route path="enquiries" element={<AdminPlaceholder />} />
          <Route path="settings" element={<AdminPlaceholder />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
