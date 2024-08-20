import React, { useContext } from "react";
import { DataContext } from "../components/Datacontext";
import { useNavigate } from "react-router-dom";

const FlashsalesPage = () => {
  const { product, loading, error, addToCart } = useContext(DataContext);
  const navigate = useNavigate();

  function handleView(name, id) {
    navigate(`/product/${name}/${id}`);
  }

  function handleBuy(name, id) {
    navigate(`/checkout/${name}/${id}`);
  }

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Flash Sales
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        {product.map((item) => (
          <li
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative w-full h-64 flex items-center justify-center bg-gray-200">
              <img
                src={item.image}
                alt={item.name}
                className="object-contain max-h-full max-w-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
                  onClick={() => handleView(item.title, item.id)}
                >
                  Quick View
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-xl font-bold text-red-500 mb-4">
                ${item.price}
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200 mb-2"
                onClick={() => handleBuy(item.name, item.id)}
              >
                Buy Now
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashsalesPage;
