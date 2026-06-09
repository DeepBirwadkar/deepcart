export function Home() {
  return (
    <>
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>

        <img src="./sale.png" alt="Banner" style={{ width: "100%", borderRadius: "12px" }} />

        <div style={{ background: "#dbeafe", padding: "15px", borderRadius: "15px", marginTop: "20px" }}>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
            <h2 style={{ color: "black" }}>Top Selection</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" }}>

            <div style={{ background: "white", borderRadius: "10px", padding: "10px" }}>
              <img src="https://i5.walmartimages.com/asr/00f2a1df-7b39-4318-8f4a-616ab860abe1.a7dfac2d717d57526d620cf7a7fc90de.jpeg" alt="Keyboard" style={{ width: "100%", height: "180px", objectFit: "contain" }} />
              <p style={{ color: "#1a1f36", fontWeight: "600", fontSize: "14px", marginTop: "8px", marginBottom: "2px" }}>Gaming Keyboard</p>
              <span style={{ display: "inline-block", fontSize: "12px", fontWeight: "600", color: "#1a1f36", background: "#fef0d0", border: "1px solid #f5a623", borderRadius: "4px", padding: "2px 8px", marginTop: "4px" }}>Bestsellers</span>
            </div>

            <div style={{ background: "white", borderRadius: "10px", padding: "10px" }}>
              <img src="https://m.media-amazon.com/images/I/81tXi4E4QRS._AC_SL1500_.jpg" alt="Fan" style={{ width: "100%", height: "180px", objectFit: "contain" }} />
              <p style={{ color: "#1a1f36", fontWeight: "600", fontSize: "14px", marginTop: "8px", marginBottom: "2px" }}>Laptop Cooling Pad</p>
              <span style={{ display: "inline-block", fontSize: "12px", fontWeight: "600", color: "#1a1f36", background: "#fef0d0", border: "1px solid #f5a623", borderRadius: "4px", padding: "2px 8px", marginTop: "4px" }}>Big Savings</span>
            </div>

            <div style={{ background: "white", borderRadius: "10px", padding: "10px" }}>
              <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/04/msi-raider-ge78-hx-17-3-gaming-laptop.jpg" alt="Laptop" style={{ width: "100%", height: "180px", objectFit: "contain" }} />
              <p style={{ color: "#1a1f36", fontWeight: "600", fontSize: "14px", marginTop: "8px", marginBottom: "2px" }}>Gaming Laptop</p>
              <span style={{ display: "inline-block", fontSize: "12px", fontWeight: "600", color: "#1a1f36", background: "#fef0d0", border: "1px solid #f5a623", borderRadius: "4px", padding: "2px 8px", marginTop: "4px" }}>Top Picks</span>
            </div>

            <div style={{ background: "white", borderRadius: "10px", padding: "10px" }}>
              <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501045_sd.jpg" alt="Earbuds" style={{ width: "100%", height: "180px", objectFit: "contain" }} />
              <p style={{ color: "#1a1f36", fontWeight: "600", fontSize: "14px", marginTop: "8px", marginBottom: "2px" }}>Wireless Earbuds</p>
              <span style={{ display: "inline-block", fontSize: "12px", fontWeight: "600", color: "#1a1f36", background: "#fef0d0", border: "1px solid #f5a623", borderRadius: "4px", padding: "2px 8px", marginTop: "4px" }}>Special Offer</span>
            </div>

          </div>
        </div>
      </div>
      <div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    marginTop: "20px",
  }}
>
 {/* Suggested For You */}
        <div style={{ background: "white", padding: "16px", borderRadius: "15px" }}>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
            <h2 style={{ color: "#1a1f36", fontSize: "18px", fontWeight: "600", margin: 0 }}>Suggested For You</h2>
            <span style={{ fontSize: "13px", color: "#2563eb", cursor: "pointer" }}>See all</span>
          </div>

          <div style={{ display: "flex", gap: "12px", overflowX: "auto", paddingBottom: "8px", scrollbarWidth: "none" }}>

            <div style={{ minWidth: "150px", maxWidth: "150px", background: "#f8fafc", borderRadius: "12px", padding: "10px", border: "0.5px solid #e2e8f0", flexShrink: 0 }}>
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.B5FLRNnj4DyPWfIivZzNLwHaHa?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt=""
                style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "8px" }}
              />
              <h4 style={{ fontSize: "13px", fontWeight: "500", color: "#1a1f36", margin: "8px 0 4px" }}>Optimus Prime</h4>
              <p style={{ fontSize: "13px", fontWeight: "600", color: "#1a1f36", margin: "0 0 2px" }}>₹299</p>
              <p style={{ fontSize: "11px", color: "#16a34a", fontWeight: "500", margin: 0 }}>Hot Deal</p>
            </div>

            <div style={{ minWidth: "150px", maxWidth: "150px", background: "#f8fafc", borderRadius: "12px", padding: "10px", border: "0.5px solid #e2e8f0", flexShrink: 0 }}>
              <img
                src="https://image.hm.com/assets/hm/89/35/893510cf78c3aff0d956f5d449639ac7732ed657.jpg?imwidth=1260"
                alt=""
                style={{ width: "65%", height: "140px", objectFit: "cover", borderRadius: "8px" }}
              />
              <h4 style={{ fontSize: "13px", fontWeight: "500", color: "#1a1f36", margin: "8px 0 4px" }}>Fashion Curtain</h4>
              <p style={{ fontSize: "13px", fontWeight: "600", color: "#1a1f36", margin: "0 0 2px" }}>₹384</p>
              <p style={{ fontSize: "11px", color: "#16a34a", fontWeight: "500", margin: 0 }}>Hot Deal</p>
            </div>

            <div style={{ minWidth: "150px", maxWidth: "150px", background: "#f8fafc", borderRadius: "12px", padding: "10px", border: "0.5px solid #e2e8f0", flexShrink: 0 }}>
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.q3VW1jdX3ph9ebDw8W70YAHaGy?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt=""
                style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "8px" }}
              />
              <h4 style={{ fontSize: "13px", fontWeight: "500", color: "#1a1f36", margin: "8px 0 4px" }}>Head Set</h4>
              <p style={{ fontSize: "13px", fontWeight: "600", color: "#1a1f36", margin: "0 0 2px" }}>₹1,097</p>
              <p style={{ fontSize: "11px", color: "#16a34a", fontWeight: "500", margin: 0 }}>Best Seller</p>
            </div>

            <div style={{ minWidth: "150px", maxWidth: "150px", background: "#f8fafc", borderRadius: "12px", padding: "10px", border: "0.5px solid #e2e8f0", flexShrink: 0 }}>
              <img
                src="https://img.freepik.com/premium-photo/classic-analog-watch-isolated-white-background_917664-113010.jpg"
                alt=""
                style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "8px" }}
              />
              <h4 style={{ fontSize: "13px", fontWeight: "500", color: "#1a1f36", margin: "8px 0 4px" }}>Watch Curtain</h4>
              <p style={{ fontSize: "13px", fontWeight: "600", color: "#1a1f36", margin: "0 0 2px" }}>₹592</p>
              <p style={{ fontSize: "11px", color: "#16a34a", fontWeight: "500", margin: 0 }}>Hot Deal</p>
            </div>

        
           <div style={{ minWidth: "150px", maxWidth: "150px", background: "#f8fafc", borderRadius: "12px", padding: "10px", border: "0.5px solid #e2e8f0", flexShrink: 0 }}>
              <img
                src="https://m.media-amazon.com/images/I/71jajvVicTL._SL1500_.jpg"
                alt=""
                style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "8px" }}
              />
              <h4 style={{ fontSize: "13px", fontWeight: "500", color: "#1a1f36", margin: "8px 0 4px" }}>Cat Toy</h4>
              <p style={{ fontSize: "13px", fontWeight: "600", color: "#1a1f36", margin: "0 0 2px" }}>₹299</p>
              <p style={{ fontSize: "11px", color: "#16a34a", fontWeight: "500", margin: 0 }}>Best Deal</p>
            </div>
            <div style={{ minWidth: "150px", maxWidth: "150px", background: "#f8fafc", borderRadius: "12px", padding: "10px", border: "0.5px solid #e2e8f0", flexShrink: 0 }}>
              <img
                src="https://cdn1.smartprix.com/rx-ixG8H7EE8-w280-h280/milagrow-blackcat-25.webp"
                alt=""
                style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "8px" }}
              />
              <h4 style={{ fontSize: "13px", fontWeight: "500", color: "#1a1f36", margin: "8px 0 4px" }}>Robot Vacuum Cleaner</h4>
              <p style={{ fontSize: "13px", fontWeight: "600", color: "#1a1f36", margin: "0 0 2px" }}>₹20,000</p>
              <p style={{ fontSize: "11px", color: "#16a34a", fontWeight: "500", margin: 0 }}>Best Deal</p>
            </div>

          </div>

          </div>
      
      
       
        

          
               
</div>
    </>
  );
}

export default Home;