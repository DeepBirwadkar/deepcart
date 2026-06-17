import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAdmin = localStorage.getItem("admin");

  return isAdmin === "true"
    ? children
    : <Navigate to="/adminlogin" />;
}