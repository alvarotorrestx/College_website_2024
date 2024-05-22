"use client";
import React, { useState } from "react";
import Image from "next/image";
import IHRD_Logo from "../../../assets/IHRD_Logo.svg";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const heroImage = "/Hero.svg";
  const styling = {
    backgroundImage: `url('${heroImage}')`,
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
        <ul
          className="flex justify-between gap-4 w-full max-w-4xl text-xs lg:text-sm xl:text-base font-medium items-start mt-2"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <li className="hover:underline">Home</li>
          <li className="hover:underline">About</li>
          <li className="-mt-3 min-w-16 ml-4 ">
            <Image src={IHRD_Logo} width={100} alt="IHRD Logo" />
          </li>
          <li className="hover:underline">Courses</li>
          <li className="hover:underline">Gallery</li>
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
        className={`${
          isOpen ? "flex" : "hidden"
        } sm:hidden flex-col items-center w-full bg-gray-800 text-white py-5 absolute top-16 z-10`}
      >
        <a href="#home" className="py-2">
          Home
        </a>
        <a href="#about" className="py-2">
          About
        </a>
        <a href="#courses" className="py-2">
          Courses
        </a>
        <a href="#gallery" className="py-2">
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
        <p
          className="text-center font-medium text-[8px] sm:text-sm xl:text-base mt-6"
          data-aos="zoom-in"
        >
          College Of Applied Science Thamarassery: Empowering minds, shaping
          futures.
        </p>
        <div className="flex justify-center mt-16 hover:scale-105">
          <a
            href=""
            className="bg-[#308eaa] px-5 py-1 rounded font-medium lg:text-lg"
            data-aos="zoom-in"
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
