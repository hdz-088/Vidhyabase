"use state";
import React from "react";
import DownArrow from "./DownArrow";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-white h-[100vh] flex flex-col pt-20 items-center gap-6 rounded-b-[30px]"
    >
      <img src="/hero.jpg" alt="" width={450} />
      <h1 className="text-3xl font-semibold text-center">
        Your{" "}
        <span className="uppercase text-[#ff735c] font-bold underline underline-offset-2 ">
          All-In-One
        </span>
        <br /> School Management Solution
      </h1>
      <p className="text-sm text-center w-5/6 md:w-2/4 mb-10">
        Revolutionize education with our School Management System—effortless
        administration, academic excellence, and seamless integration for a
        brighter future in learning
      </p>
      <a href="#">
        <DownArrow />
      </a>
    </div>
  );
};

export default Hero;
