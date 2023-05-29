import React from "react";
import { LOGO } from "../assets";

const Navbar = () => {
  return (
    <div className="flex bg-gradient-to-br from-[#13046b] to-[#0c0527] justify-between items-center">
      <div className="m-2 flex justify-center items-center gap-2">
        <img
          className="border-black border-2 rounded-full object-cover"
          width={50}
          src={LOGO}
          alt="logo"
        />
        <h1 className="text-3xl drop-shadow-xl text-cyan-500 font-norseBold">
          ImageNation
        </h1>
      </div>
      <div>
        <ul className="flex font-norseReg text-cyan-300 text-xl">
          <li className="m-2 cursor-pointer">Home</li>
          <li className="m-2 cursor-pointer">About</li>
          <li className="m-2 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
