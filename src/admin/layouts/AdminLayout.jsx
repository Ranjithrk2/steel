import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar/AdminTopbar";
import "./AdminLayout.css";

export default function AdminLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="gis-admin-shell">
      <AdminSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="gis-admin-shell__main">
        <AdminTopbar onMenuClick={() => setMenuOpen(true)} />
        <div className="gis-admin-shell__page">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
