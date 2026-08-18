const ADMIN_SESSION_KEY = "godavari_admin_session";

export const ADMIN_CREDENTIALS = {
  email: "admin@godavariironsteel.com",
  password: "Admin@123",
};

export function loginAdmin(email, password) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  const valid =
    normalizedEmail === ADMIN_CREDENTIALS.email.toLowerCase() &&
    password === ADMIN_CREDENTIALS.password;

  if (!valid) return false;

  const session = {
    email: ADMIN_CREDENTIALS.email,
    name: "Godavari Admin",
    role: "Administrator",
    loginAt: new Date().toISOString(),
  };

  sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
  return true;
}

export function getAdminSession() {
  try {
    const raw = sessionStorage.getItem(ADMIN_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function isAdminAuthenticated() {
  return Boolean(getAdminSession());
}

export function logoutAdmin() {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
}
