import { Link } from "react-router-dom";
import { BiSend } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full bg-black py-8 text-sm">
      <div className="flex flex-wrap text-white justify-between space-x-3 border-b-2 px-4 md:px-8">
        <ul className="space-y-3 py-2 w-full md:w-52">
          <li className="text-3xl mb-5 pb-4">Exclusive</li>
          <li>Subscribe</li>
          <li>Get 10% off your first order</li>
          <li>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md w-full"
              />
              <button className="ml-2 p-2 bg-blue-500 rounded-md">
                <BiSend className="text-white" />
              </button>
            </div>
          </li>
        </ul>
        <ul className="space-y-3 py-2 w-full md:w-52">
          <li>
            <h1 className="text-3xl mb-5 pb-4">Support</h1>
          </li>
          <li>11 Bioy satani, Dhaka, DH1151, Bangladesh.</li>
          <li>Exclusive@gmail.com</li>
          <li>234 8011-0480-399</li>
        </ul>
        <ul className="space-y-3 py-2 w-full md:w-52">
          <li>
            <h1 className="text-3xl mb-5 pb-4">Account</h1>
          </li>
          <li>My Account</li>
          <li>
            <Link to="signup">Login/Register</Link>
          </li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
        <ul className="space-y-3 py-2 w-full md:w-52">
          <li>
            <h1 className="text-3xl mb-5 pb-4">Quick Link</h1>
          </li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
        <ul className="space-y-3 py-2 w-full md:w-52">
          <li>
            <h1 className="text-3xl mb-5 pb-4">Download App</h1>
          </li>
          <li className="italic text-sm text-gray-200">
            Save $3 with App New User Only
          </li>
          <li>
            <div className="flex space-x-2">
              <img src="" alt="" className="w-24 h-8 bg-gray-300" />
              <div className="flex space-x-2">
                <img src="" alt="" className="w-24 h-8 bg-gray-300" />
                <img src="" alt="" className="w-24 h-8 bg-gray-300" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <h1 className="text-center pt-3 text-white">
        Copyright Rimel 2024. All rights reserved.
      </h1>
    </div>
  );
};

export default Footer;
