import { useEffect, useState } from "react";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10&skip=10&select=title,price")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <div>
      <h2>Trending Products</h2>
      <div className="flex flex-wrap -mx-2">
        {products.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-700">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
