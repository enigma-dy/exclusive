import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import rateLimit from "axios-rate-limit";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = rateLimit(axios.create(), {
    maxRequests: 2,
    perMilliseconds: 1000,
  });

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await http.get("https://fakestoreapi.com/products");
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getProductById = (id) => {
    return product.find((item) => item.id === parseInt(id));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isProductExist = prevCart.some((item) => item.id === product.id);
      if (isProductExist) {
        return prevCart;
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <DataContext.Provider
      value={{
        product,
        loading,
        error,
        getProductById,
        addToCart,
        removeFromCart,
        clearCart,
        cart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
