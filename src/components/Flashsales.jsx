import React, { useContext } from "react";
import { DataContext } from "./Datacontext";
import { useNavigate } from "react-router-dom";

const Flashsales = () => {
  const { product } = useContext(DataContext);
  const navigate = useNavigate();

  const navigateToItem = (name, id) => {
    navigate(`/product/${name}/${id}`);
  };

  const navigateToAllProducts = () => {
    navigate("/flashsales");
  };

  return (
    <div className="py-4">
      <div className="text-4xl font-bold flex items-center space-x-6 py-5 relative">
        <p>Flash Sales</p>
        <div>
          <ul className="flex text-sm space-x-14 absolute top-0">
            <li className="text-blue-400">Days</li>
            <li className="text-blue-400">Hours</li>
            <li className="text-blue-400">Minutes</li>
          </ul>
          <ul className="flex space-x-10">
            <li className="text-pink-500">03:</li>
            <li className="text-pink-500">23:</li>
            <li className="text-pink-500">59</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-evenly gap-6 rounded-lg shadow-lg overflow-hidden">
          {product.slice(0, 4).map((item) => (
            <li
              key={item.id}
              className="relative w-52 h-80 flex flex-col items-center bg-gray-800 rounded-lg p-3 hover:shadow-lg transition-shadow duration-300 group"
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
              <p className="text-xl text-pink-500 mt-1">
                ${item.price.toFixed(2)}
              </p>
              <button
                className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-xl"
                onClick={() => navigateToItem(item.title, item.id)}
              >
                View Item
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-center py-10">
          <button
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-2xl px-16 py-3 rounded-2xl hover:bg-gradient-to-l transition duration-300"
            onClick={navigateToAllProducts}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flashsales;
