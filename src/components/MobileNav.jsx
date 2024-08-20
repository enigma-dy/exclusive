import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { TiThMenu } from "react-icons/ti";
import { DataContext } from "./Datacontext";
import CatergoryDropDown from "./CatergoryDropDown";

const MobileNav = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { cart } = useContext(DataContext);
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-4">
        <NavLink
          to="/"
          style={{ fontFamily: "ResearcherFont, sans-serif" }}
          className="text-2xl font-bold tracking-wide"
        >
          Exclusive
        </NavLink>
        <TiThMenu className="text-3xl cursor-pointer" onClick={toggleNav} />
      </div>
      <div className="relative z-[60]">
        <CatergoryDropDown />
      </div>
      {nav && (
        <nav className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg z-50">
          <div className="p-4 flex justify-between items-center border-b-2">
            <NavLink
              to="/"
              style={{ fontFamily: "ResearcherFont, sans-serif" }}
              className="text-2xl font-bold tracking-wide"
            >
              Exclusive
            </NavLink>
            <TiThMenu className="text-3xl cursor-pointer" onClick={toggleNav} />
          </div>
          <ul className="list-none p-4 space-y-4">
            {["Home", "Contact", "About", "Signup"].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `block text-lg px-4 py-2 rounded-md transition-colors duration-300 ${
                      isActive ? "text-blue-600" : "text-gray-700"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="p-4 flex flex-col items-center space-y-4">
            <div className="relative flex items-center w-full max-w-xs">
              <input
                type="search"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <CiSearch className="absolute left-3 text-gray-400" />
            </div>
            <div className="flex items-center space-x-4">
              <FcLike className="w-6 h-6 cursor-pointer hover:text-red-500 transition-all duration-200" />
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
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
