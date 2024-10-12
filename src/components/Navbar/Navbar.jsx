import React from "react";
import Hero from "../Assets/programming.svg";

const Navbar = () => {
  return (
    <div className="container w-full h-screen bg-gray-50 overflow-hidden">
      <div className="w-full h-16  flex items-center justify-around">
        <div className="text-2xl font-semibold">
          <h1>REACT</h1>
        </div>
        <div className="nav">
          <ul className="flex list-none gap-4 cursor-pointer sm:gap-10">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>BLOG</li>
            <li>SERVICES</li>
          </ul>
        </div>
        <div className="btn ">
          <button className="px-8 py-2 bg-bermuda rounded text-white text-sm active:bg-gray-800 ">
            SIGNUP
          </button>
        </div>
      </div>
      <div className="w-full h-5/6 flex items-center justify-center sm:flex-wrap lg:flex-nowrap">
        <div className="w-3/3 h-full bg-gray-50">
          <div className="w-full h-full my-28 px-10 sm:w-full">
            <h1 className="text-4xl font-semibold pb-5">
              Build your next project faster with React and Tailwind CSS
            </h1>
            <p className="text-xl font-normal">
              Welcome to SB UI Kit Pro, a toolkit for building beautiful web
              interfaces, created by the development team at Start Bootstrap
            </p>
            <button className="mt-10 px-8 py-3 bg-bermuda rounded text-white text-sm active:bg-gray-800 mr-1">
              Get Started
            </button>
            <button className="px-6 py-3 bg-bubble-gum rounded text-bermuda  text-sm active:bg-gray-800 ">
              Documentation
            </button>
          </div>
        </div>
        <div className="w-3/4 h-full bg-gray-50 flex items-center justify-center sm:w-full">
          <img className="w-4/5 h-full object-contain" src={Hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
