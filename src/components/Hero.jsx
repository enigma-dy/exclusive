import React from "react";
import { Link } from "react-router-dom";
import SimpleSlider from "../pages/SimpleSlider";

const Hero = () => {
  const nav = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries",
    "Health & Beauty",
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 py-4 md:py-10 bg-white">
      <div className="md:hidden w-full flex justify-center"></div>
      <div className="hidden md:block md:border-r-2 md:pr-8">
        <ul className="space-y-3 md:space-y-1">
          {nav.map((n, id) => (
            <li key={id} className="hover:text-orange-400">
              <Link
                to={`/${n
                  .toLowerCase()
                  .replace(/ /g, "")
                  .replace(/[^a-z0-9-]/g, "")}`}
              >
                {n}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-2/3">
        <SimpleSlider />
      </div>
    </div>
  );
};

export default Hero;
