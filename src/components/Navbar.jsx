import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 bg-slate-500">
      <div className="ml-4">
        <Link to="/" className="font-sans font-semibold text-2xl size-5">
          Shopify
        </Link>
      </div>
      <div>
        <nav className="flex list-none space-x-2 mr-4">
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
          <li>
            <Link to="/mode">DarkMOde/lightMode</Link>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
