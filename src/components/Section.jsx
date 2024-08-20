import React, { useContext } from "react";
import PropTypes from "prop-types";
import { DataContext } from "./Datacontext";
import { useNavigate } from "react-router-dom";

const Section = ({ title, date }) => {
  const { product, loading, error } = useContext(DataContext);
  const navigate = useNavigate();

  if (loading) {
    return null;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <div className="mt-10 py-10 bg-white p-10 relative">
        <div className="flex space-x-4 py-4">
          <span className="w-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md"></span>
          {date && <p className="text-lg font-bold text-blue-400">{date}</p>}
        </div>
        {title && <p className="font-bold text-4xl mb-4">{title}</p>}
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-evenly gap-6">
            {product &&
              product.slice(0, 4).map((item) => (
                <li
                  key={item.id}
                  className="w-52 h-80 flex flex-col items-center rounded-lg p-3 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-full h-52 text-black object-scale-down">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full  rounded-md ob"
                    />
                  </div>
                  <p className="text-lg mt-2 text-black text-center truncate w-full">
                    {item.title}
                  </p>
                  <p className="text-xl text-pink-500 mt-1">${item.price}</p>
                </li>
              ))}
          </ul>
          <div className="flex justify-center py-10">
            <button
              className="w-full absolute bottom-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-2xl px-16 py-3 hover:bg-gradient-to-l transition duration-300"
              onClick={() => navigate("/bestselling")}
            >
              View All
            </button>
          </div>
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
