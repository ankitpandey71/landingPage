import { useEffect, useState } from "react";

const placeholderImage = "https://via.placeholder.com/300";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={placeholderImage}
              alt="Product"
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
