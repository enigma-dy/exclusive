import React, { useContext } from "react";
import PropTypes from "prop-types";
import { DataContext } from "./Datacontext";
import { useNavigate } from "react-router-dom";

const Section = ({ title, date }) => {
  const { product, loading, error } = useContext(DataContext);
  const navigate = useNavigate();

  const navigateToItem = (name, id) => {
    navigate(`/product/${name}/${id}`);
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return (
      <p className="text-red-500 text-center py-10">Error: {error.message}</p>
    );
  }

  return (
    <div className="bg-white my-10 lg:m-4 relative">
      {title && (
        <p className="font-bold text-xl sm:text-2xl text-white bg-gradient-to-r from-purple-500 to-blue-500 p-3 sm:p-4 mb-4 sm:mb-6 shadow-lg text-center sm:text-left">
          {title}
        </p>
      )}
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {product &&
            product.slice(0, 4).map((item) => (
              <li
                key={item.id}
                className="w-40 h-64 sm:w-52 sm:h-80 flex flex-col items-center rounded-lg p-2 sm:p-3 bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
                onClick={navigateToItem}
              >
                <div className="w-full h-40 sm:h-52 overflow-hidden rounded-md bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-scale-down"
                  />
                </div>
                <p className="text-sm sm:text-lg mt-2 text-black text-center truncate w-full">
                  {item.title}
                </p>
                <p className="text-lg sm:text-xl text-pink-500 mt-1">
                  ${item.price}
                </p>
              </li>
            ))}
        </ul>
        <div className="flex justify-center py-6 sm:py-10">
          <button
            className="absolute bottom-0 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xl sm:text-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-md hover:bg-gradient-to-l transition duration-300"
            onClick={() => navigate("/bestselling")}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
};

export default Section;
