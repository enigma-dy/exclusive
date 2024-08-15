import React from "react";
import SimpleSlider from "../pages/SimpleSlider";

const Hero = () => {
  return (
    <div className="flex justify-center items-center space-x-8 py-10">
      <div className="border-r-2 pr-8">
        <ul className="space-y-3">
          <li>Woman's Fashion</li>
          <li>Men's Fashion</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Groceries</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
      <div className="flex justify-center items-center w-2/3">
        <SimpleSlider />
      </div>
    </div>
  );
};

export default Hero;
