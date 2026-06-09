export function Review() {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#1a1f36",
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "16px",
        }}
      >
        Customer Reviews 🌟
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "12px",
        }}
      >
        <div style={{ background: "#fff", padding: "16px", borderRadius: "12px", border: "0.5px solid #e2e8f0" }}>
          <p style={{ fontSize: "14px", margin: "0 0 8px" }}>⭐⭐⭐⭐⭐</p>
          <p style={{ color: "#4b5563", fontSize: "13px", lineHeight: "1.6", margin: "0 0 10px" }}>
            Amazing shopping experience. Products arrived on time and quality was excellent.
          </p>
          <p style={{ color: "#2563eb", fontWeight: "600", fontSize: "13px", margin: 0 }}>Rahul Patil</p>
        </div>

        <div style={{ background: "#fff", padding: "16px", borderRadius: "12px", border: "0.5px solid #e2e8f0" }}>
          <p style={{ fontSize: "14px", margin: "0 0 8px" }}>⭐⭐⭐⭐⭐</p>
          <p style={{ color: "#4b5563", fontSize: "13px", lineHeight: "1.6", margin: "0 0 10px" }}>
            Best online store. Fast delivery and great customer support.
          </p>
          <p style={{ color: "#2563eb", fontWeight: "600", fontSize: "13px", margin: 0 }}>Priyesh</p>
        </div>

        <div style={{ background: "#fff", padding: "16px", borderRadius: "12px", border: "0.5px solid #e2e8f0" }}>
          <p style={{ fontSize: "14px", margin: "0 0 8px" }}>⭐⭐⭐⭐⭐</p>
          <p style={{ color: "#4b5563", fontSize: "13px", lineHeight: "1.6", margin: "0 0 10px" }}>
            Affordable prices and genuine products. Highly recommended.
          </p>
          <p style={{ color: "#2563eb", fontWeight: "600", fontSize: "13px", margin: 0 }}>Sneha Sharma</p>
        </div>

        <div style={{ background: "#fff", padding: "16px", borderRadius: "12px", border: "0.5px solid #e2e8f0" }}>
          <p style={{ fontSize: "14px", margin: "0 0 8px" }}>⭐⭐⭐⭐⭐</p>
          <p style={{ color: "#4b5563", fontSize: "13px", lineHeight: "1.6", margin: "0 0 10px" }}>
            Very smooth shopping experience. Secure payments and quick support.
          </p>
          <p style={{ color: "#2563eb", fontWeight: "600", fontSize: "13px", margin: 0 }}>Amit Kumar</p>
        </div>

        <div style={{ background: "#fff", padding: "16px", borderRadius: "12px", border: "0.5px solid #e2e8f0" }}>
          <p style={{ fontSize: "14px", margin: "0 0 8px" }}>⭐⭐⭐⭐⭐</p>
          <p style={{ color: "#4b5563", fontSize: "13px", lineHeight: "1.6", margin: "0 0 10px" }}>
            Superb quality products at great prices. Packaging was very safe and delivery was super fast!
          </p>
          <p style={{ color: "#2563eb", fontWeight: "600", fontSize: "13px", margin: 0 }}>Pooja Desai</p>
        </div>

        <div style={{ background: "#fff", padding: "16px", borderRadius: "12px", border: "0.5px solid #e2e8f0" }}>
          <p style={{ fontSize: "14px", margin: "0 0 8px" }}>⭐⭐⭐⭐⭐</p>
          <p style={{ color: "#4b5563", fontSize: "13px", lineHeight: "1.6", margin: "0 0 10px" }}>
            Ordered a gaming keyboard and it arrived the next day. Absolutely love DeepCart!
          </p>
          <p style={{ color: "#2563eb", fontWeight: "600", fontSize: "13px", margin: 0 }}>Vikas Nair</p>
        </div>

      </div>
    </div>
  );
}

export default Review;