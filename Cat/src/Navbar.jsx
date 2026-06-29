import { useNavigate, Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isUser = localStorage.getItem("user_token") === "true";
  const isAdmin = localStorage.getItem("admin_token") === "true";
  const isLoggedIn = isUser || isAdmin;

  const handleAuthClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("user_token");
      localStorage.removeItem("admin_token");
      alert("👋 Logged out successfully!");
      navigate("/login", { replace: true });
    } else {
      navigate("/login");
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/product", label: "Products" },
    { to: "/about", label: "About" },
    { to: "/review", label: "Review" },
    { to: "/contact", label: "Contact" },
    ...(isAdmin ? [{ to: "/admin", label: "Admin", special: true }] : []),
  ];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 48px",
        height: "64px",
        background: "#1a1f36",
        borderBottom: "3px solid #f5a623",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* LOGO */}
      <div
        onClick={() => navigate("/")}
        style={{
          fontWeight: "800",
          fontSize: "22px",
          color: "#f5a623",
          cursor: "pointer",
          letterSpacing: "0.5px",
          userSelect: "none",
        }}
      >
        DeepCart
      </div>

      {/* NAV LINKS + BUTTON */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {navLinks.map(({ to, label, special }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              style={{
                position: "relative",
                padding: "8px 14px",
                color: special ? "#f5a623" : isActive ? "#f5a623" : "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontWeight: isActive || special ? "700" : "500",
                fontSize: "14.5px",
                letterSpacing: "0.3px",
                borderRadius: "6px",
                transition: "color 0.2s, background 0.2s",
                background: isActive ? "rgba(245,166,35,0.1)" : "transparent",
              }}
            >
              {label}
              {/* Active underline indicator */}
              {isActive && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "2px",
                    left: "14px",
                    right: "14px",
                    height: "2px",
                    background: "#f5a623",
                    borderRadius: "2px",
                  }}
                />
              )}
            </Link>
          );
        })}

        {/* DIVIDER */}
        <div
          style={{
            width: "1px",
            height: "24px",
            background: "rgba(255,255,255,0.15)",
            margin: "0 8px",
          }}
        />

        {/* AUTH BUTTON */}
        <button
          onClick={handleAuthClick}
          style={{
            padding: "8px 22px",
            background: "#f5a623",
            color: "#1a1f36",
            border: "none",
            borderRadius: "7px",
            cursor: "pointer",
            fontWeight: "700",
            fontSize: "14px",
            letterSpacing: "0.3px",
            boxShadow: "0 2px 8px rgba(245,166,35,0.3)",
            transition: "opacity 0.2s, transform 0.1s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          onMouseDown={e => (e.currentTarget.style.transform = "scale(0.97)")}
          onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}