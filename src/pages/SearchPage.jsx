import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParam] = useSearchParams();
  const query = searchParam.get("query") || "";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          axios.get("https://api.escuelajs.co/api/v1/products"),
          axios.get("https://fakestoreapi.com/products"),
        ]);
        console.log(typeof response1.data, typeof response2.data);
        const combinedData = [...response1.data, ...response2.data];
        setData(combinedData);
      } catch (error) {
        console.error("Failed to load products", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
        Search Results for "{query}"
      </h1>
      {filteredData.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredData.map((product) => (
            <li
              key={product.id}
              className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.name}
                className="w-full h-56 object-cover bg-gray-200"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">
                  {product.name}
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
      ) : (
        <p className="text-gray-800 text-lg font-medium text-center">
          No results found for "{query}". Try searching again!
        </p>
      )}
    </div>
  );
};

export default SearchPage;
