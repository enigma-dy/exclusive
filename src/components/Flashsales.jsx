import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./Datacontext";
import { useNavigate } from "react-router-dom";

const Flashsales = () => {
  const { product } = useContext(DataContext);
  const navigate = useNavigate();

  const [timeRemaining, setTimeRemaining] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const [bouncing, setBouncing] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  const calculateTimeRemaining = () => {
    const now = new Date();
    const endOfSale = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      59,
      59
    ).getTime();
    const currentTime = now.getTime();
    const distance = endOfSale - currentTime;

    const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0"
    );
    const hours = String(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const seconds = String(
      Math.floor((distance % (1000 * 60)) / 1000)
    ).padStart(2, "0");

    setTimeRemaining({ days, hours, minutes, seconds });

    setBouncing({
      days: days === "00",
      hours: hours === "00",
      minutes: minutes === "00",
      seconds: seconds === "00",
    });
  };

  useEffect(() => {
    calculateTimeRemaining();
    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const navigateToItem = (name, id) => {
    navigate(`/product/${name}/${id}`);
  };

  const navigateToAllProducts = () => {
    navigate("/flashsales");
  };

  const handleAddToCart = (id) => {
    console.log(`Added item with id ${id} to cart`);
  };

  return (
    <div className="mt-6 py-4 px-2 bg-white md:px-4">
      <div className="text-xl md:text-2xl font-bold py-4">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
          <p className="text-lg md:text-2xl">Flash Sales</p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4">
            {Object.entries(timeRemaining).map(([unit, value]) => (
              <li
                key={unit}
                className={`flex flex-col items-center text-pink-500 text-xl md:text-2xl font-bold ${
                  bouncing[unit] ? "animate-bounce" : ""
                }`}
              >
                <p className="text-blue-400 text-xs md:text-sm">
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </p>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-2 md:px-4">
        <ul className="flex flex-wrap justify-center gap-4">
          {product.slice(0, 4).map((item) => (
            <li
              key={item.id}
              className="bg-none relative w-full sm:w-48 md:w-56 h-auto flex flex-col items-center rounded-lg p-2 sm:p-3 group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <p className="text-sm sm:text-base mt-2 text-center truncate w-full">
                {item.title}
              </p>
              <p className="text-lg sm:text-xl text-pink-500 mt-1">
                ${item.price.toFixed(2)}
              </p>
              <div className="absolute bottom-4 flex flex-col gap-2 items-center w-full px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-80 transition-opacity duration-300"
                  onClick={() => navigateToItem(item.title, item.id)}
                >
                  View Details
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:opacity-80 transition-opacity duration-300"
                  onClick={() => handleAddToCart(item.id)}
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center py-4 md:py-8">
          <button
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg md:text-xl px-4 md:px-6 py-2 md:py-3 hover:bg-gradient-to-l transition duration-300"
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
