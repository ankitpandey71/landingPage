import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 bg-slate-500 px-6">
      <div>
        <Link to="/" className="font-sans font-semibold text-2xl text-white">
          Shopify
        </Link>
      </div>
      <nav className="flex list-none space-x-4">
        <li>
          <Link to="/products" className="text-white hover:text-gray-300">
            Products
          </Link>
        </li>
        <li>
          <Link to="/categories" className="text-white hover:text-gray-300">
            Categories
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
        </li>
        <li>
          <Link to="/cart" className="text-white hover:text-gray-300">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/mode" className="text-white hover:text-gray-300">
            DarkMode/LightMode
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
