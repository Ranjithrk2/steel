import { useLocation } from "react-router-dom";
import AdminIcon from "../AdminIcon/AdminIcon";
import { getAdminSession } from "../../utils/adminAuth";
import "./AdminTopbar.css";

const titles = {
  "/admin/dashboard": ["Dashboard", "Overview of website activity and content"],
  "/admin/products": ["Products", "Manage your steel product catalogue"],
  "/admin/projects": ["Projects", "Manage featured projects and case studies"],
  "/admin/blog": ["Blog", "Manage industry articles and updates"],
  "/admin/enquiries": ["Enquiries", "Review quote and contact enquiries"],
  "/admin/settings": ["Settings", "Website and administrator preferences"],
};

export default function AdminTopbar({ onMenuClick }) {
  const location = useLocation();
  const session = getAdminSession();
  const [title, description] = titles[location.pathname] || ["Admin", "Management console"];

  return (
    <header className="gis-admin-topbar">
      <div className="gis-admin-topbar__title-wrap">
        <button type="button" className="gis-admin-topbar__menu" onClick={onMenuClick}>
          <AdminIcon name="menu" size={20} />
        </button>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>

      <div className="gis-admin-topbar__actions">
        <label className="gis-admin-topbar__search">
          <AdminIcon name="search" size={17} />
          <input type="search" placeholder="Search admin..." aria-label="Search admin" />
        </label>
        <button type="button" className="gis-admin-topbar__bell" aria-label="Notifications">
          <AdminIcon name="bell" size={18} />
          <span />
        </button>
        <div className="gis-admin-topbar__profile">
          <div className="gis-admin-topbar__avatar">GA</div>
          <div>
            <strong>{session?.name || "Godavari Admin"}</strong>
            <span>{session?.role || "Administrator"}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
