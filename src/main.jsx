import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DataProvider } from "./components/Datacontext";
import { AuthProvider } from "./components/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Spinner from "./components/Spinner";

const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Signup = lazy(() => import("./pages/Signup"));
const Category = lazy(() => import("./pages/Category"));
const FlashsalesPage = lazy(() => import("./pages/FlashsalesPage"));
const Productpage = lazy(() => import("./pages/Productpage"));
const Checkout = lazy(() => import("./pages/Checkout"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const BestSellingProductsPage = lazy(() => import("./pages/BestSellingPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const AllProduct = lazy(() => import("./pages/AllProduct"));

import { bestsellingproductsdata, allData } from "./components/loaddata";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <Navbar />
      </Suspense>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Spinner />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Spinner />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Spinner />}>
            <Signup />
          </Suspense>
        ),
      },
      {
        path: "category",
        element: (
          <Suspense fallback={<Spinner />}>
            <Category />
          </Suspense>
        ),
      },
      {
        path: "flashsales",
        element: (
          <Suspense fallback={<Spinner />}>
            <FlashsalesPage />
          </Suspense>
        ),
      },
      {
        path: "product/:name/:id",
        element: (
          <Suspense fallback={<Spinner />}>
            <Productpage />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<Spinner />}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "bestselling",
        element: (
          <Suspense fallback={<Spinner />}>
            <BestSellingProductsPage />
          </Suspense>
        ),
        loader: bestsellingproductsdata,
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<Spinner />}>
            <SearchPage />
          </Suspense>
        ),
        loader: allData,
      },
      {
        path: "/allproduct",
        element: (
          <Suspense fallback={<Spinner />}>
            <AllProduct />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Spinner />}>
            <LoginPage />
          </Suspense>
        ),
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
