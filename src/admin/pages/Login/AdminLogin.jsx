import { useMemo, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import AdminIcon from "../../components/AdminIcon/AdminIcon";
import {
  ADMIN_CREDENTIALS,
  isAdminAuthenticated,
  loginAdmin,
} from "../../utils/adminAuth";
import "./AdminLogin.css";

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(ADMIN_CREDENTIALS.email);
  const [password, setPassword] = useState(ADMIN_CREDENTIALS.password);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const destination = useMemo(
    () => location.state?.from || "/admin/dashboard",
    [location.state],
  );

  if (isAdminAuthenticated()) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    window.setTimeout(() => {
      const valid = loginAdmin(email, password);
      setSubmitting(false);

      if (!valid) {
        setError("Incorrect email or password. Please try again.");
        return;
      }

      navigate(destination, { replace: true });
    }, 350);
  };

  return (
    <main className="gis-admin-login">
      <div className="gis-admin-login__noise" />
      <section className="gis-admin-login__panel gis-admin-login__brand-panel">
        <div className="gis-admin-login__brand">
          <div className="gis-admin-login__brand-mark">i</div>
          <div>
            <strong>GODAVARI</strong>
            <span>IRON &amp; STEEL</span>
          </div>
        </div>

        <div className="gis-admin-login__brand-copy">
          <div className="gis-admin-login__eyebrow">ADMIN CONTROL</div>
          <h1>
            Command Centre
            <span>for Your Website.</span>
          </h1>
          <p>
            Manage website content, product information, projects, articles and
            customer enquiries from one secure workspace.
          </p>

          <div className="gis-admin-login__feature-grid">
            {[
              ["shield", "Secure Management Portal"],
              ["projects", "Project & Content Control"],
              ["message", "Enquiry Management"],
            ].map(([icon, label]) => (
              <div key={label} className="gis-admin-login__feature">
                <span><AdminIcon name={icon} size={18} /></span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="gis-admin-login__brand-footer">
          <span>PRIVATE ADMINISTRATION AREA</span>
          <span>© {new Date().getFullYear()} GODAVARI IRON &amp; STEEL</span>
        </div>
      </section>

      <section className="gis-admin-login__panel gis-admin-login__form-panel">
        <form className="gis-admin-login__card" onSubmit={handleSubmit}>
          <div className="gis-admin-login__card-icon">
            <AdminIcon name="lock" size={24} />
          </div>
          <p className="gis-admin-login__small-label">SECURE ACCESS</p>
          <h2>Admin Login</h2>
          <p className="gis-admin-login__intro">
            Sign in with your administrator credentials to continue.
          </p>

          <label className="gis-admin-login__field">
            <span>Email address</span>
            <div className="gis-admin-login__input-wrap">
              <AdminIcon name="mail" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                autoComplete="username"
                required
              />
            </div>
          </label>

          <label className="gis-admin-login__field">
            <span>Password</span>
            <div className="gis-admin-login__input-wrap">
              <AdminIcon name="lock" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="gis-admin-login__eye"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <AdminIcon name={showPassword ? "eyeoff" : "eye"} size={18} />
              </button>
            </div>
          </label>

          {error ? <div className="gis-admin-login__error">{error}</div> : null}

          <button
            type="submit"
            className="gis-admin-login__submit"
            disabled={submitting}
          >
            <span>{submitting ? "Signing in..." : "Sign In to Dashboard"}</span>
            <AdminIcon name="arrow" size={18} />
          </button>

          <div className="gis-admin-login__demo">
            <strong>Temporary frontend login</strong>
            <span>{ADMIN_CREDENTIALS.email}</span>
            <span>{ADMIN_CREDENTIALS.password}</span>
          </div>
        </form>
      </section>
    </main>
  );
}
