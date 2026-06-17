import { useState, useEffect } from "react";
import { supabase } from "./Application";

export default function Product() {
  const [products, setProducts] = useState([]);

useEffect(() => {
  async function fetchProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setProducts(data);
    }
  }

  fetchProducts();
}, []);
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
        <div style={{ display: "flex", gap: "14px", overflowX: "auto", paddingBottom: "8px", scrollbarWidth: "none" }}>
          {[
            { img: "https://tse2.mm.bing.net/th/id/OIP.5xF7Fhgkp_FedGpHmOMgugHaKH?r=0", name: "Power Bank", desc: "20000mAh battery!", price: "₹799" },
            { img: "https://m-cdn.phonearena.com/images/phones/85817-350/Xiaomi-Pad-8-Pro.webp", name: "Tablets", desc: "OnePlus realme & more", price: "₹11,999*" },
            { img: "https://i5.walmartimages.com/asr/fe47a4ab-5ecc-414f-ae49-6c7a2669e11b_1.42489ef0e331c97f5252d7fc211303a1.jpeg", name: "Gaming Mouse", desc: "Wireless RGB", price: "₹999" },
            { img: "https://m.media-amazon.com/images/I/614b653JNXL._AC_.jpg", name: "SSD Storage", desc: "Fast & Reliable", price: "₹2,499" },
            { img: "https://cdn1.smartprix.com/rx-ibdkLUIMc-w420-h420/apple-iphone-17.webp", name: "Apple iPhone 17", desc: "Samsung and more", price: "₹82,499" },
          ].map((item, i) => (
            <div key={i} style={{ background: "white", borderRadius: "12px", padding: "10px", minWidth: "160px", maxWidth: "160px", flexShrink: 0 }}>
              <img src={item.img} alt={item.name} style={{ width: "100%", height: "130px", objectFit: "contain", borderRadius: "8px" }} />
              <p style={{ color: "#1a1f36", fontWeight: "700", fontSize: "14px", marginTop: "8px", marginBottom: "2px" }}>{item.name}</p>
              <p style={{ color: "#6b7280", fontSize: "12px", marginBottom: "6px" }}>{item.desc}</p>
              <p style={{ color: "#d81b60", fontWeight: "700", fontSize: "14px" }}>From {item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <img src="/appq.png" alt="Offer Banner" style={{ width: "100%", borderRadius: "10px" }} />

      {/* Supabase DB Products */}
      {products.length > 0 && (
        <div>
          <h2 style={{ color: "#1a1f36", marginBottom: "16px" }}>🔥 From Database</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
            {products.map((item) => (
              <div key={item.id} style={{ background: "white", padding: "24px", borderRadius: "14px", textAlign: "center", border: "1px solid #e4e7ef" }}>
                <img src={item.img} alt={item.name} style={{ width: "85%", height: "200px", objectFit: "contain" }} />
                <h2 style={{ color: "#1a1f36", fontSize: "18px", marginTop: "10px" }}>{item.name}</h2>
                <h1 style={{ color: "#1a1f36", fontSize: "26px", fontWeight: "800" }}>₹{item.price}</h1>
                {item.off && <p style={{ color: "#16a34a", fontWeight: "bold", fontSize: "13px" }}>{item.off}% OFF • Free Delivery</p>}
                <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "14px" }}>
                  <button style={{ background: "white", color: "#1a1f36", border: "2px solid #1a1f36", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Add to Cart</button>
                  <button style={{ background: "#f5a623", color: "#1a1f36", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Featured Products */}
      <h2 style={{ color: "#1a1f36" }}>⭐ Featured Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
        {[
          { img: "https://img.freepik.com/premium-psd/gaming-laptop-psd-white-background_1011097-17469.jpg", name: "Gaming Laptop", desc: "Intel Core i7 • 16GB RAM • 512GB SSD • RTX Graphics", price: "₹79,999", off: "20% OFF" },
          { img: "https://tse2.mm.bing.net/th/id/OIP.uMky5HH9Dq6smht3ZlL3qgHaHS?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3", name: "BoAt Airdopes 141", desc: "True Wireless • TWS Earbuds • Bluetooth 5.3 • ANC", price: "₹1,999", off: "35% OFF" },
          { img: "https://cdn1.smartprix.com/rx-i8jzN2kWe-w420-h420/xiaomi-17t-5g.webp", name: "Xiaomi 17T 5G", desc: "Dual Sim + 5G • 12GB RAM • 256GB • 50MP Triple Rear", price: "₹59,999", off: "10% OFF" },
          { img: "https://cdn1.smartprix.com/rx-iU0hyD1bx-w420-h420/ant-esports-mk800-pr.webp", name: "Ant Esports MK800 Pro", desc: "Wired • USB • 1 Year Warranty • 1.5m Cable", price: "₹9,999", off: "20% OFF" },
          { img: "https://cdn1.smartprix.com/rx-iLgB6bwNI-w420-h420/evofox-blaze-wired-g.webp", name: "EvoFox Blaze Gaming Mouse", desc: "Wired • Ergonomic Design • 1 Year Warranty", price: "₹799", off: "20% OFF" },
          { img: "https://cdn1.smartprix.com/rx-i7C2IkHHd-w420-h420/vivo-x200t.webp", name: "Vivo X200T", desc: "Dimensity 9400 Plus • 12GB RAM • 6200mAh • 90W Fast Charging", price: "₹59,000", off: "20% OFF" },
        ].map((item, i) => (
          <div key={i} style={{ background: "white", padding: "24px", borderRadius: "14px", textAlign: "center", border: "1px solid #e4e7ef" }}>
            <img src={item.img} alt={item.name} style={{ width: "85%", height: "200px", objectFit: "contain" }} />
            <h2 style={{ color: "#1a1f36", fontSize: "18px", marginTop: "10px" }}>{item.name}</h2>
            <p style={{ color: "#6b7280", fontSize: "13px", margin: "6px 0" }}>{item.desc}</p>
            <h1 style={{ color: "#1a1f36", fontSize: "26px", fontWeight: "800" }}>{item.price}</h1>
            <p style={{ color: "#16a34a", fontWeight: "bold", margin: "4px 0 14px", fontSize: "13px" }}>{item.off} • Free Delivery</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
              <button style={{ background: "white", color: "#1a1f36", border: "2px solid #1a1f36", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Add to Cart</button>
              <button style={{ background: "#f5a623", color: "#1a1f36", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}