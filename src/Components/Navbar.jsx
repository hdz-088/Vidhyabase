"use state";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 w-11/12 lg:w-4/6  rounded-full fixed bottom-4  md:top-4 left-1/2 -translate-x-1/2 flex flex-row items-center justify-between px-2 md:px-4 backdrop-blur-xl border border-1">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="" width={40} />
        <a href="#" className="font-semibold text-2xl uppercase">
          Vidhyabase
        </a>
      </div>
      <button className="bg-slate-500 px-4 py-2 rounded-full text-white">
        Log In
      </button>
    </div>
  );
};

export default Navbar;
