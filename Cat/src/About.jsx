export function About() {
  return (
    <div style={{ background: "#f0f2f5", padding: "20px" }}>

      {/* Hero Section */}
      <div style={{
        background: "#1a1f36", padding: "40px", borderRadius: "14px",
        textAlign: "center", marginBottom: "20px",
      }}>
        <h1 style={{ color: "#f5a623", fontSize: "32px", fontWeight: "800", marginBottom: "12px" }}>About DeepCart</h1>
        <p style={{ color: "#c8cde4", fontSize: "16px", lineHeight: "1.8", maxWidth: "600px", margin: "0 auto" }}>
          Welcome to DeepCart, your trusted online shopping destination. We offer a wide range of
          products including laptops, smartphones, accessories, smart gadgets, gaming equipment, and much more.
        </p>
      </div>

      {/* Stats */}
      <div style={{
        background: "white", padding: "24px", borderRadius: "14px",
        border: "1px solid #e4e7ef", marginBottom: "20px",
        display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "16px",
      }}>
        {[
          { stat: "5000+", label: "Happy Customers" },
          { stat: "1000+", label: "Products Available" },
          { stat: "24/7",  label: "Customer Support" },
          { stat: "100%",  label: "Secure Payments" },
        ].map((item, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <h2 style={{ color: "#7c3aed", fontSize: "28px", fontWeight: "800" }}>{item.stat}</h2>
            <p style={{ color: "#6b7280", marginTop: "4px" }}>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "20px" }}>

        <div style={{ background: "white", padding: "24px", borderRadius: "14px", border: "1px solid #e4e7ef" }}>
          <h3 style={{ color: "#1a1f36", fontSize: "18px", fontWeight: "700", marginBottom: "10px" }}>🎯 Our Mission</h3>
          <p style={{ color: "#4b5563", fontSize: "14px", lineHeight: "1.8" }}>
            To provide high-quality products at affordable prices with fast delivery
            and excellent customer support. We focus on making online shopping simple,
            secure, and enjoyable for everyone.
          </p>
        </div>

        <div style={{ background: "white", padding: "24px", borderRadius: "14px", border: "1px solid #e4e7ef" }}>
          <h3 style={{ color: "#1a1f36", fontSize: "18px", fontWeight: "700", marginBottom: "10px" }}>🚀 Our Vision</h3>
          <p style={{ color: "#4b5563", fontSize: "14px", lineHeight: "1.8" }}>
            To become India's most trusted e-commerce platform by delivering
            genuine products, transparent pricing, and a seamless shopping
            experience for every customer across the country.
          </p>
        </div>

        <div style={{ background: "white", padding: "24px", borderRadius: "14px", border: "1px solid #e4e7ef" }}>
          <h3 style={{ color: "#1a1f36", fontSize: "18px", fontWeight: "700", marginBottom: "10px" }}>💡 Why DeepCart?</h3>
          <p style={{ color: "#4b5563", fontSize: "14px", lineHeight: "1.8" }}>
            We verify every seller, ensure genuine products, and offer hassle-free
            returns. Our dedicated support team is always ready to help you 24/7
            with any issue or query.
          </p>
        </div>

      </div>

      {/* Features */}
      <div style={{ background: "white", padding: "24px", borderRadius: "14px", border: "1px solid #e4e7ef", marginBottom: "20px" }}>
        <h3 style={{ color: "#1a1f36", fontSize: "18px", fontWeight: "700", marginBottom: "16px", textAlign: "center" }}>What We Offer</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
          {[
            { icon: "🚚", title: "Fast Delivery", desc: "Same day & next day delivery available" },
            { icon: "🔒", title: "Secure Payment", desc: "100% safe & encrypted transactions" },
            { icon: "↩️", title: "Easy Returns", desc: "7-day hassle-free return policy" },
            { icon: "✅", title: "Genuine Products", desc: "100% authentic & verified sellers" },
            { icon: "🎧", title: "24/7 Support", desc: "Always here to help you anytime" },
            { icon: "💰", title: "Best Prices", desc: "Lowest prices guaranteed everyday" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#f8f9fc", padding: "16px", borderRadius: "10px", border: "1px solid #eceef5", textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{item.icon}</div>
              <p style={{ color: "#1a1f36", fontWeight: "700", fontSize: "13px", marginBottom: "4px" }}>{item.title}</p>
              <p style={{ color: "#6b7280", fontSize: "12px", lineHeight: "1.5" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div style={{
        background: "#1a1f36", padding: "24px", borderRadius: "14px",
        textAlign: "center",
      }}>
        <h3 style={{ color: "#f5a623", fontSize: "18px", fontWeight: "700", marginBottom: "16px" }}>Get In Touch</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
          <p style={{ color: "#c8cde4", fontSize: "14px" }}>📧 support@deepcart.com</p>
          <p style={{ color: "#c8cde4", fontSize: "14px" }}>📞 +91 98765 43210</p>
          <p style={{ color: "#c8cde4", fontSize: "14px" }}>📍 Mumbai, Maharashtra, India</p>
        </div>
      </div>
   <div
  style={{
    background: "#172337",
    color: "white",
    textAlign: "center",
    borderRadius:"12px",
    padding: "20px",
    marginTop: "20px",
  }}
>
  © 2026 DeepCart. All Rights Reserved.
</div>
    </div>
  );
}
export default About;