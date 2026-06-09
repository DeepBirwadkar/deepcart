export function Contact() {
  return (
    <div style={{
      background: "white", padding: "40px", margin: "20px",
      borderRadius: "14px", border: "1px solid #e4e7ef",
    }}>
      <h1 style={{ color: "#1a1f36", textAlign: "center", marginBottom: "10px" }}>Contact Us</h1>
      <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "28px" }}>
        We'd love to hear from you! Feel free to contact us anytime.
      </p>

      <div style={{ maxWidth: "500px", margin: "auto" }}>
        {["text", "email"].map((type, i) => (
          <input key={i} type={type}
            placeholder={type === "text" ? "Your Name" : "Your Email"}
            style={{
              width: "100%", padding: "12px", marginBottom: "14px",
              border: "1px solid #d1d5db", borderRadius: "8px",
              fontSize: "14px", background: "#f9fafb",
            }}
          />
        ))}

        <textarea placeholder="Your Message" rows="5" style={{
          width: "100%", padding: "12px", marginBottom: "14px",
          border: "1px solid #d1d5db", borderRadius: "8px",
          fontSize: "14px", background: "#f9fafb",
        }} />

        <button style={{
          width: "100%", padding: "12px", background: "#1a1f36",
          color: "white", border: "none", borderRadius: "8px",
          cursor: "pointer", fontSize: "16px", fontWeight: "700",
        }}>Send Message</button>
      </div>

      <div style={{ textAlign: "center", marginTop: "28px", color: "#4b5563", lineHeight: "2" }}>
        <p>📧 support@deepcart.com</p>
        <p>📞 +91 98765 43210</p>
        <p>📍 Mumbai, Maharashtra, India</p>
      </div>
    </div>
  );
}
export default Contact;