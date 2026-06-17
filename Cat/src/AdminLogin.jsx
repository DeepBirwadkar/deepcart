import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    if (username === "Deep" && password === "@catDada") {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      alert("❌ Wrong Username or Password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f6f6f6",
      }}
    >
      <div
        style={{
          width: "350px",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#1a1f36",
          }}
        >
          🔐 Admin Login
        </h2>

        <form
          onSubmit={login}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              background: "#f5a623",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
            color: "#666",
            fontSize: "14px",
          }}
        >
          Admin Access Only 🚀
        </p>
      </div>
    </div>
  );
}