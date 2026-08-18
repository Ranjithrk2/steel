import AdminIcon from "../../components/AdminIcon/AdminIcon";
import "./AdminDashboard.css";

const stats = [
  { label: "Products", value: "24", change: "+3 this month", icon: "package" },
  { label: "Projects", value: "18", change: "+2 published", icon: "projects" },
  { label: "Blog Articles", value: "08", change: "+1 this week", icon: "blog" },
  { label: "New Enquiries", value: "12", change: "+18% vs last month", icon: "message" },
];

const enquiries = [
  { name: "Arun Constructions", type: "Quote Request", subject: "TMT Fe 550D - 120 MT", time: "18 min ago", status: "New" },
  { name: "Vega Infra Projects", type: "Contact Enquiry", subject: "Structural steel requirement", time: "1 hr ago", status: "New" },
  { name: "Kaveri Engineering", type: "Quote Request", subject: "MS Hollow Sections", time: "Yesterday", status: "In Review" },
  { name: "Nexa Warehousing", type: "Contact Enquiry", subject: "Warehouse steel supply", time: "Yesterday", status: "Replied" },
];

const activity = [
  ["projects", "National Highway Bridge Project updated", "Today, 10:42 AM"],
  ["package", "TMT Reinforcement Bars content edited", "Yesterday, 5:20 PM"],
  ["blog", "New industry article published", "Yesterday, 2:05 PM"],
  ["settings", "Homepage statistics updated", "Aug 16, 11:30 AM"],
];

export default function AdminDashboard() {
  return (
    <div className="gis-admin-dashboard">
      <section className="gis-admin-dashboard__welcome">
        <div>
          <span>CONTROL CENTRE</span>
          <h2>Good to see you, Admin.</h2>
          <p>Here is what is happening across the Godavari Iron &amp; Steel website.</p>
        </div>
        <div className="gis-admin-dashboard__live">
          <i /> Website Live
        </div>
      </section>

      <section className="gis-admin-dashboard__stats">
        {stats.map((stat) => (
          <article key={stat.label} className="gis-admin-stat-card">
            <div className="gis-admin-stat-card__top">
              <span className="gis-admin-stat-card__icon"><AdminIcon name={stat.icon} size={20} /></span>
              <span className="gis-admin-stat-card__trend"><AdminIcon name="trend" size={14} /></span>
            </div>
            <strong>{stat.value}</strong>
            <h3>{stat.label}</h3>
            <p>{stat.change}</p>
          </article>
        ))}
      </section>

      <section className="gis-admin-dashboard__grid">
        <article className="gis-admin-card gis-admin-card--enquiries">
          <div className="gis-admin-card__header">
            <div><span>LATEST ACTIVITY</span><h3>Recent Enquiries</h3></div>
            <button type="button">View all <AdminIcon name="arrow" size={14} /></button>
          </div>

          <div className="gis-admin-enquiry-list">
            {enquiries.map((item) => (
              <div className="gis-admin-enquiry" key={`${item.name}-${item.subject}`}>
                <div className="gis-admin-enquiry__avatar">{item.name.slice(0, 2).toUpperCase()}</div>
                <div className="gis-admin-enquiry__main">
                  <div className="gis-admin-enquiry__name-row">
                    <strong>{item.name}</strong>
                    <span className={`status-${item.status.toLowerCase().replace(" ", "-")}`}>{item.status}</span>
                  </div>
                  <p>{item.subject}</p>
                  <small>{item.type} · {item.time}</small>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="gis-admin-card gis-admin-card--activity">
          <div className="gis-admin-card__header">
            <div><span>WEBSITE LOG</span><h3>Recent Updates</h3></div>
          </div>
          <div className="gis-admin-activity-list">
            {activity.map(([icon, text, time]) => (
              <div className="gis-admin-activity" key={text}>
                <span><AdminIcon name={icon} size={17} /></span>
                <div><strong>{text}</strong><small>{time}</small></div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="gis-admin-dashboard__bottom-grid">
        <article className="gis-admin-card gis-admin-health">
          <div className="gis-admin-card__header">
            <div><span>SYSTEM HEALTH</span><h3>Website Status</h3></div>
          </div>
          <div className="gis-admin-health__items">
            {["Public website", "Admin console", "Forms & enquiries", "Vercel deployment"].map((label) => (
              <div key={label}><span><i />{label}</span><strong>Operational</strong></div>
            ))}
          </div>
        </article>

        <article className="gis-admin-card gis-admin-quick">
          <div className="gis-admin-card__header">
            <div><span>SHORTCUTS</span><h3>Quick Actions</h3></div>
          </div>
          <div className="gis-admin-quick__grid">
            {[
              ["package", "Add Product"],
              ["projects", "Add Project"],
              ["blog", "New Article"],
              ["message", "View Enquiries"],
            ].map(([icon, label]) => (
              <button type="button" key={label}>
                <AdminIcon name={icon} size={19} /><span>{label}</span><AdminIcon name="arrow" size={14} />
              </button>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
