import { useLocation } from "react-router-dom";
import AdminIcon from "../../components/AdminIcon/AdminIcon";
import "./AdminPlaceholder.css";

const config = {
  "/admin/products": ["package", "Product Management", "Create, edit and organise the steel product catalogue."],
  "/admin/projects": ["projects", "Project Management", "Publish projects, case studies, images and project details."],
  "/admin/blog": ["blog", "Blog Management", "Create and manage industry articles and knowledge content."],
  "/admin/enquiries": ["message", "Enquiry Management", "Review contact forms and quotation requests from customers."],
  "/admin/settings": ["settings", "Admin Settings", "Configure website information and administrator preferences."],
};

export default function AdminPlaceholder() {
  const { pathname } = useLocation();
  const [icon, title, description] = config[pathname] || ["dashboard", "Admin Module", "This module is ready for the next development stage."];

  return (
    <section className="gis-admin-placeholder">
      <div className="gis-admin-placeholder__icon"><AdminIcon name={icon} size={28} /></div>
      <span>NEXT CMS MODULE</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="gis-admin-placeholder__panel">
        <strong>Admin shell connected successfully.</strong>
        <p>This page is intentionally included so every sidebar route works without a 404. We can build the complete CRUD interface for this module next.</p>
      </div>
    </section>
  );
}
