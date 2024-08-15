import React from "react";
import { useContext } from "react";
import { DataContext } from "./Datacontext";

const Bestselling = () => {
  const { product, loading, error } = useContext(DataContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <div className="py-10">
        <div className="flex space-x-4 py-4">
          <span className="w-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md"></span>
          <p className="text-lg font-bold text-blue-400">This Month</p>
        </div>
        <p className="font-bold text-4xl mb-4">Best Selling Products</p>
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-evenly gap-6">
            {product &&
              product.slice(0, 4).map((item) => (
                <li
                  key={item.id}
                  className="w-52 h-80 flex flex-col items-center bg-gray-800 rounded-lg p-3 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-full h-52">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <p className="text-lg mt-2 text-white text-center truncate w-full">
                    {item.title}
                  </p>
                  <p className="text-xl text-pink-500 mt-1">${item.price}</p>
                </li>
              ))}
          </ul>
          <div className="flex justify-center py-10">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-2xl px-16 py-3 rounded-2xl hover:bg-gradient-to-l transition duration-300">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestselling;
