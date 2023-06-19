import React, { useEffect, useState } from "react";
import { LOGO } from "../assets";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
const Navbar = ({ darkMode, setDarkMode }) => {



  return (
    <div className={darkMode ? "dark" : ""}>
      <nav className="flex bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 justify-between items-center p-1 from-cyan-100 to-gray-300">
        <div className="m-2 flex justify-center items-center gap-2">
          <Link to="/home">
            <img
              className="border-black border-2 rounded-full object-cover cursor-pointer"
              width={50}
              src={LOGO}
              alt="logo"
            />
          </Link>
          <h1 className="text-3xl drop-shadow-xl text-yellow-400 font-norseBold">
            <Link to="/">ImageNation</Link>
          </h1>
        </div>
        <div className="mr-6 ">
          <ul className="flex gap-4 justify-center items-center">
            <Link to="/"><li className="m-2 cursor-pointer dark:text-white font-norseBold text-gray-800 text-2xl hover:text-purple-700 dark:hover:text-purple-800 transition-all ease-in-out duration-300">Home</li>
            </Link>
            <Link to="/community"><li className="m-2 cursor-pointer font-norseBold text-gray-800 text-2xl hover:text-purple-700 transition-all ease-in-out duration-300 dark:text-white dark:hover:text-purple-800">Community</li></Link>
            <Link to="/about" >
              <li className="m-2 cursor-pointer  font-norseBold text-gray-800 text-2xl hover:text-purple-700 transition-all ease-in-out duration-300 dark:text-white dark:hover:text-purple-800">About</li>
            </Link>
            <Link to="/contact" >
              <li className="m-2 cursor-pointer  font-norseBold text-gray-800 text-2xl hover:text-purple-700 transition-all ease-in-out duration-300 dark:text-white dark:hover:text-purple-800">Contact</li>
            </Link>
            <Link to="/signin">
              <button className="bg-indigo-500 rounded-md items-center mr-2 hover:bg-blue-900 transition-all ease-in-out duration-300">
                <li className="m-2 cursor-pointer  font-norseBold text-gray-800 text-2xl transition-all ease-in-out duration-300 dark:text-white">Sign In</li>
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-indigo-500 rounded-md items-center hover:bg-blue-900 transition-all ease-in-out duration-300">
                <li className="m-2 cursor-pointer  font-norseBold text-gray-800 text-2xl transition-all ease-in-out duration-300 dark:text-white">Sign Up</li>
              </button>
            </Link>

            {darkMode ? <BsFillSunFill
             className="cursor-pointer text-xl text-cyan-500 hover:text-cyan-200 transition-all ease-in-out duration-300"
            onClick={() => setDarkMode(false)} />
              : <BsFillMoonStarsFill
                onClick={() => setDarkMode(true)}
                className="cursor-pointer text-xl text-gray-700 hover:text-gray-800 transition-all ease-in-out duration-300"
              />}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
