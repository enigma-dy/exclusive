import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../components/Datacontext";
import { FaMinus } from "react-icons/fa";

const Checkout = () => {
  const { cart } = useContext(DataContext);
  const [amount, setAmount] = useState([]);

  useEffect(() => {
    if (cart && cart.length > 0) {
      setAmount(Array(cart.length).fill(1));
    }
  }, [cart]);

  const incrementAmount = (index) => {
    setAmount((previousAmount) => {
      const newAmount = [...previousAmount];
      newAmount[index] += 1;
      return newAmount;
    });
  };

  const decrementAmount = (index) => {
    setAmount((previousAmount) => {
      const newAmount = [...previousAmount];
      newAmount[index] = Math.max(newAmount[index] - 1, 1);
      return newAmount;
    });
  };

  if (!cart || cart.length === 0) {
    return <div className="text-center text-xl">Your cart is empty</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <ul className="space-y-6">
        {cart.map((item, index) => (
          <li
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-md border border-gray-300"
            />
            <div className="flex-1">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => decrementAmount(index)}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
              >
                <FaMinus className="text-lg" />
              </button>
              <p className="text-lg font-semibold">{amount[index]}</p>
              <button
                onClick={() => incrementAmount(index)}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
              >
                <IoIosAdd className="text-lg" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-right">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
