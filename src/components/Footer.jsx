import { Link } from "react-router-dom";
import { BiSend } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full mx-auto bg-black py-8 text-sm">
      <div className="flex  text-white justify-evenly space-x-3 border-b-2">
        <ul className="text-wrap space-y-3 py-2 w-52">
          <li className="text-3xl mb-5 pb-4">Excluisve</li>
          <li>Subscribe</li>
          <li>Get 10% off your first order</li>
          <li>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md w-full"
            />
          </li>
        </ul>
        <ul className="text-wrap space-y-3 py-2 w-52">
          <li>
            <h1 className="text-3xl mb-5 pb-4">Support</h1>
          </li>
          <li>11 Bioy satani,Dhaka,DH1151,Baggladesh.</li>
          <li>Exclusive@gmail.com</li>
          <li>234 8011-0480-399</li>
        </ul>
        <ul className="text-wrap space-y-3 py-2 w-52 pb-5">
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
        <ul className="text-wrap space-y-3 py-2 w-52">
          <li>
            <h1 className="text-3xl mb-5 pb-4">Quick Link</h1>
          </li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
        <ul className="text-wrap space-y-3 py-2 w-52">
          <li>
            <h1 className="text-3xl mb-5 pb-4">Download App</h1>
          </li>
          <li className="italic text-sm text-gray-200">
            Save $3 with App New User Only
          </li>
          <li>
            <div>
              <img src="" alt="" />
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
          </li>
          <li></li>
        </ul>
      </div>
      <h1 className="w-full mx-auto my-0 text-center pt-3 text-white">
        Copyright Rimel 2024. All right Reserved
      </h1>
    </div>
  );
};

export default Footer;
