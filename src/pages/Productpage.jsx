import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../components/Datacontext";

export default function Productpage() {
  const { id } = useParams();
  const { getProductById, addToCart, cart } = useContext(DataContext);
  const product = getProductById(id);

  if (!product) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <div className="mt-6">
            <span className="text-4xl font-bold text-red-500">
              ${product.price}
            </span>
          </div>
          <div className="mt-6">
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
              onClick={() => {
                addToCart(product);
                console.log("Cart after adding:", cart); // Debugging log
              }}
            >
              Add to Cart
            </button>
            <button className="ml-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
              Buy Now
            </button>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800">
              Product Details
            </h2>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Category: {product.category}</li>
              <li>ID: {id}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
