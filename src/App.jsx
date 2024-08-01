import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import ProductList from "./page/ProductList";
import Footer from "./page/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          {/* Add other routes here if needed */}
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/*" element={<NoPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
