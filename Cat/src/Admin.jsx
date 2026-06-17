import { useState, useEffect } from "react";
import { supabase } from "./Application";

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [off, setOff] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editOff, setEditOff] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const inputStyle = {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  };

  async function fetchProducts() {
    const { data, error } = await supabase.from("products").select("*");
    if (!error) setProducts(data);
  }

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase.from("products").select("*");
      if (!error) setProducts(data);
    }
    load();
  }, []);

  // ✅ Add Product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!name || !price) {
        alert("Fill all fields");
        return;
      }

      let imageUrl = "";

      if (image) {
        const fileName = `${Date.now()}-${image.name}`;

        const { error: uploadError } = await supabase.storage
          .from("products")
          .upload(fileName, image);

        if (uploadError) {
          alert(uploadError.message);
          return;
        }

        const { data } = supabase.storage
          .from("products")
          .getPublicUrl(fileName);

        imageUrl = data.publicUrl;
      }

      const { error } = await supabase
        .from("products")
        .insert([{ name, price: Number(price), off: Number(off), description, img: imageUrl }]);

      if (error) {
        alert(error.message);
        return;
      }

      alert("✅ Product Added Successfully!");
      setName("");
      setPrice("");
      setOff("");
      setDescription("");
      setImage(null);
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  // ✅ Update Product
  const updateProduct = async () => {
    const { error } = await supabase
      .from("products")
      .update({ name: editName, price: Number(editPrice), off: Number(editOff), description: editDescription })
      .eq("id", editId);

    if (error) {
      alert(error.message);
    } else {
      alert("✅ Product Updated!");
      setEditId(null);
      setEditName("");
      setEditPrice("");
      setEditOff("");
      setEditDescription("");
      fetchProducts();
    }
  };

  // ✅ Delete Product
  const deleteProduct = async (id) => {
    if (!confirm("Delete this product?")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      alert(error.message);
    } else {
      alert("🗑️ Product Deleted!");
      fetchProducts();
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "25px" }}>

      {/* ── Add Product Form ── */}
      <div style={{ background: "#fff", padding: "25px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", marginBottom: "30px" }}>
        <h2 style={{ textAlign: "center", color: "black", marginBottom: "20px" }}>🛍️ Admin Panel</h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="text" placeholder="Product Name" value={name}
            onChange={(e) => setName(e.target.value)} style={inputStyle} />

          <input type="number" placeholder="Price" value={price}
            onChange={(e) => setPrice(e.target.value)} style={inputStyle} />

          <input type="number" placeholder="Discount %" value={off}
            onChange={(e) => setOff(e.target.value)} style={inputStyle} />

          <textarea
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
          />

          <input type="file" onChange={(e) => setImage(e.target.files[0])} style={inputStyle} />

          <button type="submit"
            style={{ padding: "12px", background: "#f5a623", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>
            ➕ Add Product
          </button>
        </form>
      </div>

      {/* ── Edit Form ── */}
      {editId && (
        <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", border: "2px solid orange", marginBottom: "30px" }}>
          <h2 style={{ marginBottom: "16px" }}>✏️ Update Product</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)}
              placeholder="Product Name" style={inputStyle} />

            <input type="number" value={editPrice} onChange={(e) => setEditPrice(e.target.value)}
              placeholder="Price" style={inputStyle} />

            <input type="number" value={editOff} onChange={(e) => setEditOff(e.target.value)}
              placeholder="Discount %" style={inputStyle} />

            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              placeholder="Product Description"
              rows={3}
              style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
            />

            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={updateProduct}
                style={{ flex: 1, padding: "11px", background: "#16a34a", color: "white", border: "none", borderRadius: "8px", fontWeight: "700", cursor: "pointer" }}>
                💾 Save Changes
              </button>
              <button onClick={() => setEditId(null)}
                style={{ flex: 1, padding: "11px", background: "#e5e7eb", color: "#1a1f36", border: "none", borderRadius: "8px", fontWeight: "700", cursor: "pointer" }}>
                ✖ Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Products List ── */}
      <h2 style={{ color: "#1a1f36", marginBottom: "16px" }}>📦 All Products</h2>

      {products.length === 0 ? (
        <p style={{ color: "#6b7280" }}>No products found.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {products.map((item) => (
            <div key={item.id}
              style={{ background: "#fff", padding: "16px", borderRadius: "10px", border: "1px solid #e4e7ef", display: "flex", alignItems: "center", gap: "14px" }}>

              <img src={item.img} alt={item.name}
                style={{ width: "70px", height: "70px", objectFit: "contain", borderRadius: "8px", background: "#f9fafb" }} />

              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: "700", color: "#1a1f36", marginBottom: "4px" }}>{item.name}</p>
                <p style={{ color: "#d81b60", fontWeight: "700" }}>₹{item.price}</p>
                {item.off > 0 && <p style={{ color: "#16a34a", fontSize: "12px" }}>{item.off}% OFF</p>}
                {item.description && <p style={{ color: "#6b7280", fontSize: "12px", marginTop: "2px" }}>{item.description}</p>}
              </div>

              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={() => {
                    setEditId(item.id);
                    setEditName(item.name);
                    setEditPrice(item.price);
                    setEditOff(item.off);
                    setEditDescription(item.description || "");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  style={{ padding: "8px 14px", background: "orange", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "700" }}>
                  ✏️
                </button>
                <button onClick={() => deleteProduct(item.id)}
                  style={{ padding: "8px 14px", background: "#ef4444", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "700" }}>
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}