import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center backdrop-blur-lg bg-iclightdark border border-iclightdark rounded-2xl p-4 px-8 w-full max-w-5xl mx-auto mt-5 shadow-lg">
      {/* Left Navigation Links */}
      <ul className="flex space-x-6 text-white text-lg font-medium">
        <li className="hover:text-iccardpurple cursor-pointer">Products</li>
        <li className="hover:text-iccardpurple cursor-pointer">History</li>
        <li className="hover:text-iccardpurple cursor-pointer">Contact</li>
      </ul>

      {/* Logo */}
      <h1 className="text-white text-2xl font-bold tracking-wide">logo.</h1>

      {/* Right Side Buttons */}
      <div className="flex space-x-4 items-center">
        <button className="text-white hover:text-gray-300">Sign in</button>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium shadow-md">
          Try free
        </button>
      </div>
    </nav>
  );
};

export default Nav;
