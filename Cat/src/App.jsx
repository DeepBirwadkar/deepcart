import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import About from "./About";
import Review  from "./Review"
import Contact from "./Contact";




function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#f6f6f6",
          minHeight: "100vh",
        }}
      >
        <Navbar />
       
       

      

      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/product" element={<Product/>} />
            <Route path="/About" element={<About/>}/>
            <Route path="/Review" element={<Review/>}/>
            <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;