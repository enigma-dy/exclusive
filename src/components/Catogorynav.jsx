import React, { useContext } from "react";
import { GrPersonalComputer, GrGamepad } from "react-icons/gr";
import { BsSmartwatch } from "react-icons/bs";
import {
  IoPhonePortraitOutline,
  IoShieldCheckmarkSharp,
  IoSearchOutline,
} from "react-icons/io5";
import {
  FaCameraRetro,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaShippingFast,
} from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";

const Catogorynav = () => {
  const { product } = useContext;
  return (
    <div>
      <div>
        <div className="flex space-x-4 py-4">
          <span className="w-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md"></span>
          <p className="text-lg font-bold text-blue-400">Categories</p>
        </div>
        <p className="font-bold text-4xl mb-4">Browse By Category</p>
        <div className="flex gap-4 justify-center m-10">
          <div className="w-52 h-52 border-2 border-blue-500 flex justify-center items-center rounded-md hover:shadow-lg transition duration-300">
            <IoPhonePortraitOutline size={80} className="text-blue-500" />
          </div>
          <div className="w-52 h-52 border-2 border-blue-500 flex justify-center items-center rounded-md hover:shadow-lg transition duration-300">
            <GrPersonalComputer size={80} className="text-blue-500" />
          </div>
          <div className="w-52 h-52 border-2 border-blue-500 flex justify-center items-center rounded-md hover:shadow-lg transition duration-300">
            <BsSmartwatch size={80} className="text-blue-500" />
          </div>
          <div className="w-52 h-52 border-2 border-blue-500 flex justify-center items-center rounded-md hover:shadow-lg transition duration-300">
            <FaCameraRetro size={80} className="text-blue-500" />
          </div>
          <div className="w-52 h-52 border-2 border-blue-500 flex justify-center items-center rounded-md hover:shadow-lg transition duration-300">
            <FaHeadphones size={80} className="text-blue-500" />
          </div>
          <div className="w-52 h-52 border-2 border-blue-500 flex justify-center items-center rounded-md hover:shadow-lg transition duration-300">
            <GrGamepad size={80} className="text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catogorynav;
