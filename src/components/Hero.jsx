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
    <div className="flex justify-center items-center space-x-8 py-10 bg-white">
      <div className="border-r-2 pr-8">
        <ul className="space-y-3">
          {nav.map((n, id) => (
            <li key={id}>
              <Link
                to={`/${n
                  .toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/[^a-z0-9-]/g, "")}`}
              >
                {n}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center w-2/3">
        <SimpleSlider />
      </div>
    </div>
  );
};

export default Hero;
