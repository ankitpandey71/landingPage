import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route index element={<Home />} /> */}
            {/* <Route path="/blogs" element={<Blogs />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
