import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DataProvider } from "./components/Datacontext";
import { AuthProvider } from "./components/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Category from "./pages/Category";
import FlashsalesPage from "./pages/FlashsalesPage";
import Productpage from "./pages/Productpage";
import Checkout from "./pages/Checkout";
import LoginPage from "./pages/LoginPage";
import { BestSellingProductsPage } from "./pages/BestSellingPage";
import { bestsellingproductsdata } from "./components/loaddata";
import SearchPage from "./pages/SearchPage";
import { allData } from "./components/loaddata";
import ErrorBoundary from "./components/ErrorBoundary";
import AllProduct from "./pages/AllProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "flashsales",
        element: <FlashsalesPage />,
      },
      {
        path: "product/:name/:id",
        element: <Productpage />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "bestselling",
        element: <BestSellingProductsPage />,
        loader: bestsellingproductsdata,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: allData,
      },
      {
        path: "/allproduct",
        element: <AllProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);
