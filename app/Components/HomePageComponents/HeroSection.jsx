"use client";
import React, { useState } from "react";
import Image from "next/image";
import IHRD_Logo from "../../../assets/IHRD_Logo.svg";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const heroImage = "/Hero.svg";
  const styling = {
    backgroundImage: `url('${heroImage}')`,
    backgroundAttachment: 'fixed'
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-top flex items-center relative text-white"
      style={styling}
    >
      {/* Top Navigation bar */}
      <div className="sm:flex justify-center w-full px-32 py-5 sm:absolute hidden top-0 ">
        <ul className="flex justify-between gap-4 w-full max-w-[1000px] text-xs lg:text-sm xl:text-base font-medium items-center mt-2">
          <li>
            <a href="#home" className="p-2 rounded hover:bg-[#2a9696] transition duration-300 ease-in-out">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="p-2 rounded hover:bg-[#2a9696] transition duration-300 ease-in-out">
              About
            </a>
          </li>
          <li className="-mt-3 min-w-16 ml-4 ">
            <a href='/'><Image src={IHRD_Logo} width={100} alt="IHRD Logo" /></a>
          </li>
          <li>
            <a href="#courses" className="p-2 rounded hover:bg-[#2a9696] transition duration-300 ease-in-out">
              Courses
            </a>
          </li>
          <li>
            <a href="#gallery" className="p-2 rounded hover:bg-[#2a9696] transition duration-300 ease-in-out">
              Gallery
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile Navigation bar */}
      <div className="sm:hidden flex justify-between w-full px-5 py-5 absolute top-0 z-10">
        <div className="flex items-center">
          <Image src={IHRD_Logo} width={50} alt="IHRD Logo" />
        </div>
        <div className="flex items-center">
          <button onClick={toggleMenu}>
            <div className="space-y-2">
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="w-8 h-0.5 bg-white"></div>
            </div>
          </button>
        </div>
      </div>
      <div
        className={`${isOpen ? "flex" : "hidden"
          } sm:hidden flex-col items-center w-full bg-[#2a9696] text-white py-5 absolute top-16 z-10`}
      >
        <a href="#home" className="p-6 w-full text-center">
          Home
        </a>
        <a href="#about" className="p-6 w-full text-center">
          About
        </a>
        <a href="#courses" className="p-6 w-full text-center">
          Courses
        </a>
        <a href="#gallery" className="p-6 w-full text-center">
          Gallery
        </a>
      </div>
      {/* End */}
      {/* Hero Section text */}
      <div className="flex flex-col justify-center w-full px-15 sm:px-32 py-5">
        <h1
          className="text-center sm:text-4xl xl:text-5xl text-2xl font-semibold"
          data-aos="zoom-in"
        >
          COLLEGE OF APPLIED SCIENCE THAMARASSERY
        </h1>
        {/* <p className="text-center font-medium text-[8px] sm:text-sm xl:text-base mt-6">

          College Of Applied Science Thamarassery: Empowering minds, shaping
          futures.
        </p> */}
        <p className="text-center font-medium text-[8px] sm:text-sm xl:text-base mt-6">
          Empowering minds & shaping futures.
        </p>
        <div className="flex justify-center mt-16">
          <a
            href="#"
            className="bg-[#2a9696] p-3.5 hover:scale-105 rounded font-medium lg:text-lg"
          >
            Enroll Now
          </a>
        </div>
      </div>
      {/* End */}
    </div>
  );
};

export default HeroSection;
