import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-between items-center h-20 bg-slate-500 px-6">
      {/* Logo */}
      <div>
        <Link to="/" className="font-sans font-semibold text-2xl text-white">
          Shopify
        </Link>
      </div>

      {/* Hamburger Icon (visible on small screens only) */}
      <button
        onClick={toggleMenu}
        className="block md:hidden text-white focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <nav
        className={`md:flex md:items-center md:space-x-4 md:static absolute top-20 left-0 w-full md:w-auto bg-slate-500 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
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
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
