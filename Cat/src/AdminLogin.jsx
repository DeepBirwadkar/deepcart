import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState({ text: "", type: "" });
  const navigate = useNavigate();

  const showMsg = (text, type) => setMsg({ text, type });

  const switchTab = (mode) => {
    setIsSignUp(mode === "signup");
    setPassword("");
    setMsg({ text: "", type: "" });
  };

  const handleSubmit = () => {
    if (!email || !password) { showMsg("Please fill in all fields.", "err"); return; }

    if (email === "admin" && password === "admin123") {
      localStorage.setItem("admin_token", "true");
      localStorage.setItem("user_token", "true");
      showMsg("Admin access granted. Redirecting...", "ok");
      setTimeout(() => navigate("/admin", { replace: true }), 800);
      return;
    }

    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

    if (isSignUp) {
      if (users.some((u) => u.email === email)) { showMsg("This email is already registered.", "err"); return; }
      if (password.length < 6) { showMsg("Password must be at least 6 characters.", "err"); return; }
      users.push({ email, password });
      localStorage.setItem("registeredUsers", JSON.stringify(users));
      showMsg("Account created! You can now login.", "ok");
      setTimeout(() => switchTab("login"), 1200);
    } else {
      const valid = users.find((u) => u.email === email && u.password === password);
      if (valid) {
        localStorage.setItem("user_token", "true");
        showMsg("Login successful! Redirecting...", "ok");
        setTimeout(() => navigate("/", { replace: true }), 800);
      } else {
        showMsg("Invalid credentials. Please try again.", "err");
      }
    }
  };

  const inputStyle = {
    width: "100%", padding: "10px 12px",
    background: "#f8f8f8", border: "0.5px solid #ddd",
    borderRadius: "8px", fontSize: "14px", outline: "none",
    color: "#1a1f36", boxSizing: "border-box",
    transition: "border 0.15s",
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f0f0", padding: "1rem" }}>
      <div style={{ width: "100%", maxWidth: "400px", background: "#fff", borderRadius: "16px", boxShadow: "0 4px 24px rgba(0,0,0,0.1)", overflow: "hidden" }}>

        {/* TOP HEADER */}
        <div style={{ background: "#1a1f36", padding: "2rem 2rem 1.5rem", textAlign: "center", borderBottom: "2px solid #f5a623" }}>
          <div style={{ fontSize: "26px", fontWeight: "800", color: "#f5a623", letterSpacing: "0.5px", marginBottom: "4px" }}>DeepCart</div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
            {isSignUp ? "Create a new account" : "Sign in to your account"}
          </div>
        </div>

        {/* CARD BODY */}
        <div style={{ padding: "1.75rem 2rem" }}>

          {/* LOGIN / SIGNUP TABS */}
          <div style={{ display: "flex", background: "#f2f2f2", borderRadius: "8px", padding: "3px", marginBottom: "1.5rem" }}>
            {["login", "signup"].map((tab) => {
              const active = (tab === "signup") === isSignUp;
              return (
                <button key={tab} onClick={() => switchTab(tab)} style={{
                  flex: 1, padding: "7px", fontSize: "13px", fontWeight: "500",
                  borderRadius: "6px", cursor: "pointer", border: "none",
                  background: active ? "#fff" : "transparent",
                  color: active ? "#1a1f36" : "#888",
                  boxShadow: active ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                  transition: "all 0.18s",
                }}>
                  {tab === "login" ? "Login" : "Sign up"}
                </button>
              );
            })}
          </div>

          {/* ERROR / SUCCESS MSG */}
          {msg.text && (
            <div style={{
              fontSize: "13px", padding: "9px 12px", borderRadius: "7px", marginBottom: "1rem",
              background: msg.type === "err" ? "#fef2f2" : "#f0fdf4",
              color: msg.type === "err" ? "#dc2626" : "#16a34a",
              border: `0.5px solid ${msg.type === "err" ? "#fca5a5" : "#86efac"}`,
            }}>
              {msg.text}
            </div>
          )}

          {/* EMAIL */}
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#666", marginBottom: "5px", letterSpacing: "0.3px" }}>
              Email or username
            </label>
            <input
              type="text" value={email} placeholder="you@email.com or 'admin'"
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => { e.target.style.border = "0.5px solid #f5a623"; e.target.style.boxShadow = "0 0 0 3px rgba(245,166,35,0.12)"; }}
              onBlur={(e) => { e.target.style.border = "0.5px solid #ddd"; e.target.style.boxShadow = "none"; }}
              style={inputStyle}
            />
          </div>

          {/* PASSWORD */}
          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "500", color: "#666", marginBottom: "5px", letterSpacing: "0.3px" }}>
              Password
            </label>
            <input
              type="password" value={password} placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              onFocus={(e) => { e.target.style.border = "0.5px solid #f5a623"; e.target.style.boxShadow = "0 0 0 3px rgba(245,166,35,0.12)"; }}
              onBlur={(e) => { e.target.style.border = "0.5px solid #ddd"; e.target.style.boxShadow = "none"; }}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              style={inputStyle}
            />
            {isSignUp && <div style={{ fontSize: "11px", color: "#aaa", marginTop: "4px" }}>Min. 6 characters</div>}
          </div>

          {/* CTA BUTTON */}
          <button
            onClick={handleSubmit}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.98)"}
            onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
            style={{ width: "100%", padding: "11px", background: "#f5a623", color: "#1a1f36", border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: "700", cursor: "pointer", letterSpacing: "0.2px" }}
          >
            {isSignUp ? "Create account" : "Login"}
          </button>

          {/* DIVIDER */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "1.25rem 0" }}>
            <div style={{ flex: 1, height: "0.5px", background: "#e5e5e5" }} />
            <span style={{ fontSize: "11px", color: "#aaa" }}>or</span>
            <div style={{ flex: 1, height: "0.5px", background: "#e5e5e5" }} />
          </div>

          {/* SWITCH LINK */}
          <div style={{ textAlign: "center", fontSize: "13px", color: "#888", marginBottom: "1rem" }}>
            {isSignUp ? "Already have an account? " : "New user? "}
            <span onClick={() => switchTab(isSignUp ? "login" : "signup")} style={{ color: "#f5a623", fontWeight: "600", cursor: "pointer" }}>
              {isSignUp ? "Login here" : "Create an account"}
            </span>
          </div>

         
        </div>
      </div>
    </div>
  );
}