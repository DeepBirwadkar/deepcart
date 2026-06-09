export function Navbar() {
  return (
    <nav style={{
      background: "#1a1f36",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      borderBottom: "2px solid #f5a623",
    }}>
      <h2 style={{ color: "#f5a623", fontWeight: "bold" }}>DeepCart</h2>

      <ul style={{
        display: "flex", gap: "40px", listStyle: "none",
        margin: 0, color: "#c8cde4",
      }}>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Review</li>
        <li>Contact</li>
       
      </ul>

      <button style={{
        background: "#f5a623", color: "#1a1f36", border: "none",
        padding: "10px 20px", borderRadius: "5px", fontWeight: "bold",
      }}>Login</button>
    </nav>
  );
}
export default Navbar;