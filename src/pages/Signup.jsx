import React from "react";

const Signup = () => {
  return (
    <div className="bg-white w-full max-w-md mx-auto my-8 p-6 shadow-lg border-t-4 border-yellow-500 relative z-10 transform scale-100 transition-transform duration-800 ease-out animate-expand">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold">Responsive Registration Form</h2>
      </div>
      <form>
        <div className="mb-4 flex items-center border-b border-gray-300 pb-2 relative">
          <span className="absolute left-0 top-0 h-full flex items-center pl-3 text-gray-600 border-r border-gray-300">
            <i className="fa fa-envelope"></i>
          </span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full pl-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="mb-4 flex items-center border-b border-gray-300 pb-2 relative">
          <span className="absolute left-0 top-0 h-full flex items-center pl-3 text-gray-600 border-r border-gray-300">
            <i className="fa fa-lock"></i>
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full pl-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="mb-4 flex items-center border-b border-gray-300 pb-2 relative">
          <span className="absolute left-0 top-0 h-full flex items-center pl-3 text-gray-600 border-r border-gray-300">
            <i className="fa fa-lock"></i>
          </span>
          <input
            type="password"
            name="password"
            placeholder="Re-type Password"
            required
            className="w-full pl-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="mb-4 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-2 mb-4 md:mb-0">
            <div className="relative">
              <span className="absolute left-0 top-0 h-full flex items-center pl-3 text-gray-600 border-r border-gray-300">
                <i className="fa fa-user"></i>
              </span>
              <input
                type="text"
                name="name"
                placeholder="First Name"
                className="w-full pl-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-2">
            <div className="relative">
              <span className="absolute left-0 top-0 h-full flex items-center pl-3 text-gray-600 border-r border-gray-300">
                <i className="fa fa-user"></i>
              </span>
              <input
                type="text"
                name="name"
                placeholder="Last Name"
                required
                className="w-full pl-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="mb-4 flex flex-col md:flex-row items-center">
          <div className="flex items-center mb-4 md:mb-0 mr-4">
            <input
              type="radio"
              name="radiogroup1"
              id="rd1"
              className="hidden"
            />
            <label htmlFor="rd1" className="flex items-center cursor-pointer">
              <span className="inline-block w-4 h-4 border border-gray-300 rounded-full mr-2 transition-all duration-200 ease-in-out"></span>
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radiogroup1"
              id="rd2"
              className="hidden"
            />
            <label htmlFor="rd2" className="flex items-center cursor-pointer">
              <span className="inline-block w-4 h-4 border border-gray-300 rounded-full mr-2 transition-all duration-200 ease-in-out"></span>
              Female
            </label>
          </div>
        </div>
        <div className="mb-4 relative">
          <select className="w-full h-9 px-3 border border-gray-300 rounded bg-white text-gray-600 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 ease-in-out">
            <option>Select a country</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-8 border-transparent border-t-gray-600"></div>
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="cb1" className="hidden" />
          <label htmlFor="cb1" className="flex items-center cursor-pointer">
            <span className="inline-block w-4 h-4 border border-gray-300 rounded mr-2 transition-all duration-200 ease-in-out"></span>
            I agree with terms and conditions
          </label>
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="cb2" className="hidden" />
          <label htmlFor="cb2" className="flex items-center cursor-pointer">
            <span className="inline-block w-4 h-4 border border-gray-300 rounded mr-2 transition-all duration-200 ease-in-out"></span>
            I want to receive the newsletter
          </label>
        </div>
        <input
          type="submit"
          value="Register"
          className="w-full h-9 bg-yellow-500 text-white font-semibold rounded cursor-pointer hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 ease-in-out"
        />
      </form>
    </div>
  );
};

export default Signup;
