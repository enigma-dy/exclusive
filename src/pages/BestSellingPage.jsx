import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { DataContext } from "../components/Datacontext";

export function BestSellingProductsPage() {
  const products = useLoaderData();
  const { addToCart } = useContext(DataContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Best Selling Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              className="w-full h-48 object-cover"
              src={product.images[0]}
              alt={product.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-4">
                {product.description.length > 60
                  ? `${product.description.substring(0, 60)}...`
                  : product.description}
              </p>
              <p className="text-lg font-bold text-blue-600 mb-4">
                ${product.price}
              </p>
              <div className="flex space-x-4">
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
