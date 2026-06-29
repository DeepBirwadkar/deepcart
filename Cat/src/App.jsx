import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import About from "./About";
import Review from "./Review";
import Contact from "./Contact";
import Admin from "./Admin";
import AdminLogin from "./AdminLogin";

// 🔐 1. Normal User Guard (Website Access)
function UserRoute({ children }) {
  const isUser = localStorage.getItem("user_token") === "true";
  return isUser ? children : <Navigate to="/login" replace />;
}

// 👑 2. Strict Admin Guard (CRUD Access)
function AdminRoute({ children }) {
  const isAdmin = localStorage.getItem("admin_token") === "true";
  return isAdmin ? children : <Navigate to="/" replace />; // Admin nasel tar back to home page
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AdminLogin />} />

        <Route path="/*" element={
          <UserRoute>
            <>
              <Navbar />
              <div style={{ backgroundColor: "#f6f6f6", minHeight: "100vh" }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/review" element={<Review />} />
                  <Route path="/contact" element={<Contact />} />
                  
                  {/* Strict Admin Protection Route */}
                  <Route path="/admin" element={
                    <AdminRoute>
                      <Admin />
                    </AdminRoute>
                  } />
                  
                  <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                </Routes>
              </div>
            </>
          </UserRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}