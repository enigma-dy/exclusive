import React from "react";

const Signup = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div className="flex flex-col gap-7 items-start w-96">
        <h1>Create an account</h1>
        <h2>Enter your details below</h2>

        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className=" w-full p-2 border-none rounded-lg"
        />
        <input
          type="text"
          placeholder="Email or Phone Number"
          className=" w-full p-2 border-none rounded-lg"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password "
          className="w-full p-2 border-none rounded-lg"
        />
        <button className="bg-red-500 text-white py-2 w-full">
          Create Account
        </button>
        <button className="bg-none text-black border-2 py-2 w-full">
          Sign up with Google
        </button>
        <p className="text-center">
          Already have an account?
          <span className="underline underline-offset-1 font-semibold">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
