import { NavLink, useNavigate } from "react-router-dom";
import AdminIcon from "../AdminIcon/AdminIcon";
import { logoutAdmin } from "../../utils/adminAuth";
import "./AdminSidebar.css";

const navItems = [
  { to: "/admin/dashboard", label: "Dashboard", icon: "dashboard" },
  { to: "/admin/products", label: "Products", icon: "package" },
  { to: "/admin/projects", label: "Projects", icon: "projects" },
  { to: "/admin/blog", label: "Blog", icon: "blog" },
  { to: "/admin/enquiries", label: "Enquiries", icon: "message", badge: "12" },
  { to: "/admin/settings", label: "Settings", icon: "settings" },
];

export default function AdminSidebar({ open, onClose }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin/login", { replace: true });
  };

  return (
    <>
      <button
        type="button"
        className={`gis-admin-sidebar__backdrop ${open ? "is-open" : ""}`}
        onClick={onClose}
        aria-label="Close admin menu"
      />

      <aside className={`gis-admin-sidebar ${open ? "is-open" : ""}`}>
        <div className="gis-admin-sidebar__brand">
          <div className="gis-admin-sidebar__mark">i</div>
          <div>
            <strong>GODAVARI</strong>
            <span>ADMIN CONSOLE</span>
          </div>
          <button type="button" className="gis-admin-sidebar__close" onClick={onClose}>
            <AdminIcon name="close" size={19} />
          </button>
        </div>

        <div className="gis-admin-sidebar__section-label">MANAGEMENT</div>
        <nav className="gis-admin-sidebar__nav" aria-label="Admin navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `gis-admin-sidebar__link ${isActive ? "is-active" : ""}`
              }
            >
              <span className="gis-admin-sidebar__link-icon">
                <AdminIcon name={item.icon} size={19} />
              </span>
              <span>{item.label}</span>
              {item.badge ? <em>{item.badge}</em> : null}
            </NavLink>
          ))}
        </nav>

        <div className="gis-admin-sidebar__bottom">
          <div className="gis-admin-sidebar__status">
            <span className="gis-admin-sidebar__status-dot" />
            <div>
              <strong>Website Online</strong>
              <small>All systems operational</small>
            </div>
          </div>
          <button type="button" className="gis-admin-sidebar__logout" onClick={handleLogout}>
            <AdminIcon name="logout" size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
