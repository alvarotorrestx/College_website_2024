import React from "react";
import Image from "next/image";
import IHRD_Logo from "../../../assets/IHRD_Logo.svg";
const HeroSection = () => {
  const heroImage = "/Hero.svg";
  const styling = {
    backgroundImage: `url('${heroImage}')`,
  };
  return (
    <div
      className="h-screen w-full bg-cover bg-top flex items-center relative"
      style={styling}
    >
      {/* Top Navigation bar */}
      <div className="flex justify-center w-full px-32 py-5 absolute top-0">
        <ul className="flex justify-between w-full text-xs font-medium items-start mt-2">
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>gallery</li>
          <li className="-mt-3">
            <Image src={IHRD_Logo} width={100} alt="notthing" />
          </li>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>gallery</li>
        </ul>
      </div>
      {/* End */}
      {/* Hero Section text */}
      <div className="flex flex-col justify-center w-full px-32 py-5">
        <h1 className="text-center text-4xl font-semibold ">
          COLLEGE OF APPLIED SCIENCE <br /> THAMARASSERY
        </h1>
        <p className="text-center font-medium text-sm mt-6">
          College Of Applied Science Thamarassery: Empowering minds,
          <br /> shaping futures.
        </p>
      </div>
      {/* End */}
    </div>
  );
};

export default HeroSection;
