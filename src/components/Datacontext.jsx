import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import rateLimit from "axios-rate-limit";

export const DataContext = createContext();

const CART_EXPIRATION_TIME = 3600000;

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedTimestamp = localStorage.getItem("cartTimestamp");

    if (
      savedTimestamp &&
      new Date().getTime() - savedTimestamp > CART_EXPIRATION_TIME
    ) {
      localStorage.removeItem("cart");
      localStorage.removeItem("cartTimestamp");
      return [];
    }
    return savedCart;
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);

  const http = rateLimit(axios.create(), {
    maxRequests: 2,
    perMilliseconds: 1000,
  });

  const fetchProduct = useCallback(async () => {
    setLoading(true);
    try {
      const response = await http.get("https://fakestoreapi.com/products");
      setProduct(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [http]);

  const getProductById = useCallback(
    (id) => {
      return product.find((item) => item.id === parseInt(id));
    },
    [product]
  );

  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const isProductExist = prevCart.some((item) => item.id === product.id);
      if (isProductExist) return prevCart;

      const newCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(newCart));
      localStorage.setItem("cartTimestamp", new Date().getTime());
      return newCart;
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem("cart");
    localStorage.removeItem("cartTimestamp");
  }, []);

  const handleCheckoutSuccess = useCallback(() => {
    clearCart();
  }, [clearCart]);

  useEffect(() => {
    fetchProduct();
  }, [cart]);

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
        handleCheckoutSuccess,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
