import React, { useContext } from "react";
import { GrPersonalComputer, GrGamepad } from "react-icons/gr";
import { BsSmartwatch } from "react-icons/bs";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";

const Catogorynav = () => {
  return (
    <div className="p-4">
      <div className="flex space-x-4 py-4 items-center">
        <span className="w-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md"></span>
        <p className="text-lg font-bold text-blue-400">Categories</p>
      </div>
      <p className="font-bold text-2xl sm:text-4xl mb-4 text-center sm:text-left">
        Browse By Category
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center m-4 sm:m-10">
        <div className="w-full h-40 sm:w-52 sm:h-52 border-2 border-blue-500 flex justify-center items-center rounded-md hover:shadow-lg transition duration-300">
          <IoPhonePortraitOutline
            size={60}
            className="text-blue-500 sm:size-80"
          />
        </div>
        <div className="w-full h-40 sm:w-52 sm:h-52 border-2 border-blue-500 flex justify-center items-center rounded-md hover:shadow-lg transition duration-300">
          <GrPersonalComputer size={60} className="text-blue-500 sm:size-80" />
        </div>
        <div className="w-full h-40 sm:w-52 sm:h-52 border-2 border-blue-500 flex justify-center items-center rounded-md hover:shadow-lg transition duration-300">
          <BsSmartwatch size={60} className="text-blue-500 sm:size-80" />
        </div>
        <div className="w-full h-40 sm:w-52 sm:h-52 border-2 border-blue-500 flex justify-center items-center rounded-md hover:shadow-lg transition duration-300">
          <FaCameraRetro size={60} className="text-blue-500 sm:size-80" />
        </div>
        <div className="w-full h-40 sm:w-52 sm:h-52 border-2 border-blue-500 flex justify-center items-center rounded-md hover:shadow-lg transition duration-300">
          <FaHeadphones size={60} className="text-blue-500 sm:size-80" />
        </div>
        <div className="w-full h-40 sm:w-52 sm:h-52 border-2 border-blue-500 flex justify-center items-center rounded-md hover:shadow-lg transition duration-300">
          <GrGamepad size={60} className="text-blue-500 sm:size-80" />
        </div>
      </div>
    </div>
  );
};

export default Catogorynav;
