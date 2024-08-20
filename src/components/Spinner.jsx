import React from "react";

const Spinner = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-4 border-t-blue-500 rounded-full"></div>
    </div>
  );
};

export default Spinner;
