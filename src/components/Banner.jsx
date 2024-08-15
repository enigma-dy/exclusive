import React from "react";

const Banner = () => {
  return (
    <div>
      {" "}
      <div className="w-9/12 bg-gradient-to-r from-gray-900 via-gray-800 to-black  text-white mx-auto my-10 p-10 space-y-10 rounded-md">
        <div className="w-80 space-y-5">
          <p className="text-green-500 font-bold">Categories</p>
          <p className="text-4xl font-extrabold">
            Enhance Your Music Experience
          </p>
          <ul className="flex gap-4">
            <li className="flex flex-col items-center text-black w-16 h-16 justify-center bg-white ml-px text-sm rounded-full p-4">
              <span className="font-bold text-xl">23</span>
              <span className="text-xs">Hours</span>
            </li>
            <li className="flex flex-col items-center text-black w-16 h-16 justify-center bg-white ml-px text-sm rounded-full p-4">
              <span className="font-bold text-xl">05</span>
              <span className="text-xs">Days</span>
            </li>
            <li className="flex flex-col items-center text-black w-16 h-16 justify-center bg-white ml-px text-sm rounded-full p-4">
              <span className="font-bold text-xl">59</span>
              <span className="text-xs">Minutes</span>
            </li>
            <li className="flex flex-col items-center text-black w-16 h-16 justify-center bg-white ml-px text-sm rounded-full p-4">
              <span className="font-bold text-xl">35</span>
              <span className="text-xs">Seconds</span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-10 rounded-md hover:bg-gradient-to-l transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
