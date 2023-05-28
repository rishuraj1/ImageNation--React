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
        <h1 className="font-bold text-3xl drop-shadow-xl text-indigo-400 font-heorot">ImageNation</h1>
      </div>
      <div>
        <ul className="flex">
          <li className="m-2">Home</li>
          <li className="m-2">About</li>
          <li className="m-2">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
