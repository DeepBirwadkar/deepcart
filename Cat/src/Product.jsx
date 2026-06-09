export function Product() {
  return (
    <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>

      <img
        src="https://rukminim2.flixcart.com/fk-p-flap/1570/350/image/70c87eb39b5bbbe1.jpg?q=80"
        alt="Banner"
        style={{ width: "100%", borderRadius: "12px" }}
      />

      {/* Delivered Instantly */}
      <div style={{ background: "#fdeef4", padding: "20px", borderRadius: "14px" }}>
        <h2 style={{ color: "#1a1f36", marginBottom: "16px" }}>Delivered Instantly ⚡</h2>

        <div style={{
          display: "flex", gap: "14px", overflowX: "auto", paddingBottom: "8px",
          scrollbarWidth: "none", msOverflowStyle: "none",
        }}>

          <div style={{ background: "white", borderRadius: "12px", padding: "10px", minWidth: "160px", maxWidth: "160px", flexShrink: 0, position: "relative" }}>
            <img src="https://tse2.mm.bing.net/th/id/OIP.5xF7Fhgkp_FedGpHmOMgugHaKH?r=0" alt="Power Bank" style={{ width: "100%", height: "130px", objectFit: "contain", borderRadius: "8px" }} />
            <p style={{ color: "#1a1f36", fontWeight: "700", fontSize: "14px", marginTop: "8px", marginBottom: "2px" }}>Power Bank</p>
            <p style={{ color: "#6b7280", fontSize: "12px", marginBottom: "6px" }}>20000mAh battery!</p>
            <p style={{ color: "#d81b60", fontWeight: "700", fontSize: "14px" }}>From ₹799</p>
          </div>

          <div style={{ background: "white", borderRadius: "12px", padding: "10px", minWidth: "160px", maxWidth: "160px", flexShrink: 0, position: "relative" }}>
            <img src="https://m-cdn.phonearena.com/images/phones/85817-350/Xiaomi-Pad-8-Pro.webp" alt="Tablets" style={{ width: "100%", height: "130px", objectFit: "contain", borderRadius: "8px" }} />
            <p style={{ color: "#1a1f36", fontWeight: "700", fontSize: "14px", marginTop: "8px", marginBottom: "2px" }}>Tablets</p>
            <p style={{ color: "#6b7280", fontSize: "12px", marginBottom: "6px" }}>OnePlus realme & more</p>
            <p style={{ color: "#d81b60", fontWeight: "700", fontSize: "14px" }}>From ₹11,999*</p>
          </div>

          <div style={{ background: "white", borderRadius: "12px", padding: "10px", minWidth: "160px", maxWidth: "160px", flexShrink: 0, position: "relative" }}>
            <img src="https://i5.walmartimages.com/asr/fe47a4ab-5ecc-414f-ae49-6c7a2669e11b_1.42489ef0e331c97f5252d7fc211303a1.jpeg" alt="Gaming Mouse" style={{ width: "100%", height: "130px", objectFit: "contain", borderRadius: "8px" }} />
            <p style={{ color: "#1a1f36", fontWeight: "700", fontSize: "14px", marginTop: "8px", marginBottom: "2px" }}>Gaming Mouse</p>
            <p style={{ color: "#6b7280", fontSize: "12px", marginBottom: "6px" }}>Wireless RGB</p>
            <p style={{ color: "#d81b60", fontWeight: "700", fontSize: "14px" }}>From ₹999</p>
          </div>

          <div style={{ background: "white", borderRadius: "12px", padding: "10px", minWidth: "160px", maxWidth: "160px", flexShrink: 0, position: "relative" }}>
            <img src="https://m.media-amazon.com/images/I/614b653JNXL._AC_.jpg" alt="SSD Storage" style={{ width: "100%", height: "130px", objectFit: "contain", borderRadius: "8px" }} />
            <p style={{ color: "#1a1f36", fontWeight: "700", fontSize: "14px", marginTop: "8px", marginBottom: "2px" }}>SSD Storage</p>
            <p style={{ color: "#6b7280", fontSize: "12px", marginBottom: "6px" }}>Fast & Reliable</p>
            <p style={{ color: "#d81b60", fontWeight: "700", fontSize: "14px" }}>From ₹2,499</p>
          </div>
           <div style={{ background: "white", borderRadius: "12px", padding: "10px", minWidth: "160px", maxWidth: "160px", flexShrink: 0, position: "relative" }}>
            <img src="https://cdn1.smartprix.com/rx-ibdkLUIMc-w420-h420/apple-iphone-17.webp" alt="SSD Storage" style={{ width: "100%", height: "130px", objectFit: "contain", borderRadius: "8px" }} />
            <p style={{ color: "#1a1f36", fontWeight: "700", fontSize: "14px", marginTop: "8px", marginBottom: "2px" }}>Apple iphone 17</p>
            <p style={{ color: "#6b7280", fontSize: "12px", marginBottom: "6px" }}>samsung and more</p>
            <p style={{ color: "#d81b60", fontWeight: "700", fontSize: "14px" }}>From ₹82,499</p>
          </div>

        </div>
      </div>

      <img src="/appq.png" alt="Offer Banner" style={{ width: "100%", borderRadius: "10px" }} />

      {/* Featured Products Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>

        {/* Gaming Laptop */}
        <div style={{ background: "white", padding: "24px", borderRadius: "14px", textAlign: "center", border: "1px solid #e4e7ef" }}>
          <img src="https://img.freepik.com/premium-psd/gaming-laptop-psd-white-background_1011097-17469.jpg" alt="Gaming Laptop" style={{ width: "85%", height: "200px", objectFit: "contain" }} />
          <h2 style={{ color: "#1a1f36", fontSize: "18px", marginTop: "10px" }}>Gaming Laptop</h2>
          <p style={{ color: "#6b7280", fontSize: "13px", margin: "6px 0" }}>Intel Core i7 • 16GB RAM • 512GB SSD • RTX Graphics</p>
          <h1 style={{ color: "#1a1f36", fontSize: "26px", fontWeight: "800" }}>₹79,999</h1>
          <p style={{ color: "#16a34a", fontWeight: "bold", margin: "4px 0 14px", fontSize: "13px" }}>20% OFF • Free Delivery</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
            <button style={{ background: "white", color: "#1a1f36", border: "2px solid #1a1f36", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Add to Cart</button>
            <button style={{ background: "#f5a623", color: "#1a1f36", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Buy Now</button>
          </div>
        </div>

        {/* BoAt Earbuds */}
        <div style={{ background: "white", padding: "24px", borderRadius: "14px", textAlign: "center", border: "1px solid #e4e7ef" }}>
          <img src="https://tse2.mm.bing.net/th/id/OIP.uMky5HH9Dq6smht3ZlL3qgHaHS?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3" alt="BoAt Airdopes" style={{ width: "85%", height: "200px", objectFit: "contain" }} />
          <h2 style={{ color: "#1a1f36", fontSize: "18px", marginTop: "10px" }}>BoAt Airdopes 141</h2>
          <p style={{ color: "#6b7280", fontSize: "13px", margin: "6px 0" }}>True Wireless • TWS Earbuds • Bluetooth 5.3 • Active Noise Cancellation</p>
          <h1 style={{ color: "#1a1f36", fontSize: "26px", fontWeight: "800" }}>₹1,999</h1>
          <p style={{ color: "#16a34a", fontWeight: "bold", margin: "4px 0 14px", fontSize: "13px" }}>35% OFF • Free Delivery</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
            <button style={{ background: "white", color: "#1a1f36", border: "2px solid #1a1f36", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Add to Cart</button>
            <button style={{ background: "#f5a623", color: "#1a1f36", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Buy Now</button>
          </div>
        </div>

        {/* Xiaomi 17T */}
        <div style={{ background: "white", padding: "24px", borderRadius: "14px", textAlign: "center", border: "1px solid #e4e7ef" }}>
          <img src="https://cdn1.smartprix.com/rx-i8jzN2kWe-w420-h420/xiaomi-17t-5g.webp" alt="Xiaomi 17T" style={{ width: "85%", height: "200px", objectFit: "contain" }} />
          <h2 style={{ color: "#1a1f36", fontSize: "18px", marginTop: "10px" }}>Xiaomi 17T 5G</h2>
          <p style={{ color: "#6b7280", fontSize: "13px", margin: "6px 0" }}>Dual Sim + 5G • 12GB RAM • 256GB • 50MP Triple Rear & 32MP Front</p>
          <h1 style={{ color: "#1a1f36", fontSize: "26px", fontWeight: "800" }}>₹59,999</h1>
          <p style={{ color: "#16a34a", fontWeight: "bold", margin: "4px 0 14px", fontSize: "13px" }}>10% OFF • Free Delivery</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
            <button style={{ background: "white", color: "#1a1f36", border: "2px solid #1a1f36", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Add to Cart</button>
            <button style={{ background: "#f5a623", color: "#1a1f36", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Buy Now</button>
          </div>
        </div>

        {/* Gaming Keyboard */}
        <div style={{ background: "white", padding: "24px", borderRadius: "14px", textAlign: "center", border: "1px solid #e4e7ef" }}>
          <img src="https://cdn1.smartprix.com/rx-iU0hyD1bx-w420-h420/ant-esports-mk800-pr.webp" alt="Gaming Keyboard" style={{ width: "85%", height: "200px", objectFit: "contain" }} />
          <h2 style={{ color: "#1a1f36", fontSize: "18px", marginTop: "10px" }}>Ant Esports MK800 Pro</h2>
          <p style={{ color: "#6b7280", fontSize: "13px", margin: "6px 0" }}>Wired • USB • 1 Year Warranty • 1.5m Cable</p>
          <h1 style={{ color: "#1a1f36", fontSize: "26px", fontWeight: "800" }}>₹9,999</h1>
          <p style={{ color: "#16a34a", fontWeight: "bold", margin: "4px 0 14px", fontSize: "13px" }}>20% OFF • Free Delivery</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
            <button style={{ background: "white", color: "#1a1f36", border: "2px solid #1a1f36", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Add to Cart</button>
            <button style={{ background: "#f5a623", color: "#1a1f36", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Buy Now</button>
          </div>
        </div>
        <div style={{ background: "white", padding: "24px", borderRadius: "14px", textAlign: "center", border: "1px solid #e4e7ef" }}>
          <img src="https://cdn1.smartprix.com/rx-iLgB6bwNI-w420-h420/evofox-blaze-wired-g.webp" alt="Gaming Mouse" style={{ width: "85%", height: "200px", objectFit: "contain" }} />
          <h2 style={{ color: "#1a1f36", fontSize: "18px", marginTop: "10px" }}>EvoFox Blaze Wired Gaming Mouse</h2>
          <p style={{ color: "#6b7280", fontSize: "13px", margin: "6px 0" }}>Wired • Ergonomic Design • 1 Year Warranty • 1.5m Cable</p>
          <h1 style={{ color: "#1a1f36", fontSize: "26px", fontWeight: "800" }}>₹799</h1>
          <p style={{ color: "#16a34a", fontWeight: "bold", margin: "4px 0 14px", fontSize: "13px" }}>20% OFF • Free Delivery</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
            <button style={{ background: "white", color: "#1a1f36", border: "2px solid #1a1f36", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Add to Cart</button>
            <button style={{ background: "#f5a623", color: "#1a1f36", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Buy Now</button>
          </div>
        </div>
         <div style={{ background: "white", padding: "24px", borderRadius: "14px", textAlign: "center", border: "1px solid #e4e7ef" }}>
          <img src="https://cdn1.smartprix.com/rx-i7C2IkHHd-w420-h420/vivo-x200t.webp" alt="Gaming Mouse" style={{ width: "85%", height: "200px", objectFit: "contain" }} />
          <h2 style={{ color: "#1a1f36", fontSize: "18px", marginTop: "10px" }}>Vivo X200T</h2>
          <p style={{ color: "#6b7280", fontSize: "13px", margin: "6px 0" }}>Dimensity 9400 Plus • 12 GB RAM •6200 mAh Battery with 90W Fast Charging • 50 MP + 50 MP + 50 MP Triple Rear & 32 MP Front Camera</p>
          <h1 style={{ color: "#1a1f36", fontSize: "26px", fontWeight: "800" }}>₹59,000</h1>
          <p style={{ color: "#16a34a", fontWeight: "bold", margin: "4px 0 14px", fontSize: "13px" }}>20% OFF • Free Delivery</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
            <button style={{ background: "white", color: "#1a1f36", border: "2px solid #1a1f36", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Add to Cart</button>
            <button style={{ background: "#f5a623", color: "#1a1f36", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;