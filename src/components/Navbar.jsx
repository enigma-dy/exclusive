import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { DataContext } from "./Datacontext";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { cart } = useContext(DataContext);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <nav className="p-4 flex justify-between items-center border-b-2 b">
        <ul className="list-none flex space-x-6 h-12 items-center">
          <li>
            <NavLink
              to="/"
              style={{ fontFamily: "ResearcherFont, sans-serif" }}
              className="text-2xl font-bold tracking-wide"
            >
              Exclusive
            </NavLink>
          </li>
          {["Home", "Contact", "About", "Signup"].map((item, index) => (
            <li key={index}>
              <NavLink
                to={item === "Home" ? "" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative no-underline px-[0.8rem] py-1 transition-colors duration-300 ${
                    isActive ? "text-blue-600" : ""
                  } group`
                }
              >
                <span className="relative inline-block">
                  {item}
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full group-hover:h-1"></span>
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <input
              type="search"
              placeholder="What are you looking for"
              className="pl-8 pr-4 py-2 rounded-lg bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <CiSearch className="absolute left-2 text-gray-400" />
          </div>
          <FcLike
            color="white"
            className="w-6 h-6 cursor-pointer hover:text-red-500 transition-all duration-200"
          />
          <div className="relative">
            <CiShoppingCart
              className="w-6 h-6 cursor-pointer hover:text-yellow-500 transition-all duration-200"
              onClick={() => navigate("/checkout")}
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {cart.length}
            </span>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}
