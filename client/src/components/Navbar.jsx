import React from "react";
import { LOGO } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex bg-gradient-to-br from-[#13046b] to-[#0c0527] justify-between items-center p-1">
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
          <Link to="/home">ImageNation</Link>
        </h1>
      </div>
      <div className="mr-6">
        <ul className="flex">
          <Link to="/home"><li className="m-2 cursor-pointer  font-norseReg text-cyan-300 font-semibold text-xl hover:text-cyan-400 transition-all ease-in-out duration-300">Home</li>
          </Link>
          <Link to="/about" >
            <li className="m-2 cursor-pointer  font-norseReg text-cyan-300 font-semibold text-xl hover:text-cyan-400 transition-all ease-in-out duration-300">About</li>
          </Link>
          <Link to="/contact" >
            <li className="m-2 cursor-pointer  font-norseReg text-cyan-300 font-semibold text-xl hover:text-cyan-400 transition-all ease-in-out duration-300">Contact</li>
          </Link>
          <Link to="/signin">
            <button className="bg-yellow-800 rounded-md items-center mr-2 hover:bg-yellow-900 transition-all ease-in-out duration-300">
              <li className="m-2 cursor-pointer  font-norseReg text-cyan-300 font-semibold text-xl hover:text-cyan-400 transition-all ease-in-out duration-300">Sign In</li>
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-yellow-800 rounded-md items-center hover:bg-yellow-900 transition-all ease-in-out duration-300">
              <li className="m-2 cursor-pointer  font-norseReg text-cyan-300 font-semibold text-xl hover:text-cyan-400 transition-all ease-in-out duration-300">Sign Up</li>
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
