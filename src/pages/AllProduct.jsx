import React, { useState, useEffect } from "react";
import axios from "axios";

const AllProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          axios.get("https://api.escuelajs.co/api/v1/products"),
          axios.get("https://fakestoreapi.com/products"),
        ]);
        const combinedData = [...response1.data, ...response2.data];
        setData(combinedData);
      } catch (error) {
        setError("Failed to load products. Please try again later.");
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div
            className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-4 border-t-blue-500 rounded-full"
            role="status"
          ></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="text-red-600 font-semibold">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((product) => (
          <li
            key={product.id}
            className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            <img
              src={product.image || "https://via.placeholder.com/150"}
              alt={product.title || product.name} // Use either 'title' or 'name' depending on API response
              className="w-full h-56 object-cover bg-gray-200"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                {product.title || product.name}{" "}
                {/* Use either 'title' or 'name' */}
              </h2>
              <p className="text-gray-700 text-lg font-bold mb-4">
                ${product.price.toFixed(2)}
              </p>
              <div className="flex gap-4 mt-4">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 flex-1">
                  Add to Cart
                </button>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 flex-1">
                  View Details
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProduct;
