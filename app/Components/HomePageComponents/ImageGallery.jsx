"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import image1 from "../../../assets/1.jpeg";
import image2 from "../../../assets/2.jpeg";
import image3 from "../../../assets/3.jpeg";
import image4 from "../../../assets/4.jpeg";

export default function ImageGallery() {
  return (
    <div className="flex justify-center bg-[#B4DFF3] min-h-screen w-full">
      <div className="max-w-5xl px-4 py-9">
        <h1 className="text-2xl font-semibold text-center">Explore Campus</h1>
        <p className="text-center text-xs mt-6">
          Discover the vibrant campus life through our image gallery
        </p>
        <div className="flex flex-wrap justify-center mt-10 gap-4">
          <div className="sm:w-[235px] w-full h-[250px]">
            <img
              src={image1.src}
              alt={`Campus Image  1}`}
              className="object-cover w-full sm:w-[235px] h-[250px]"
            />
          </div>
          <div className="sm:w-[235px] w-full h-[250px]">
            <img
              src={image2.src}
              alt={`Campus Image  1}`}
              className="object-cover  w-full sm:w-[235px] h-[250px]"
            />
          </div>
          <div className="sm:w-[235px] w-full h-[250px]">
            <img
              src={image3.src}
              alt={`Campus Image  1}`}
              className="object-cover  w-full sm:w-[235px] h-[250px]"
            />
          </div>
          <div className="sm:w-[235px] w-full h-[250px]">
            <img
              src={image4.src}
              alt={`Campus Image  1}`}
              className="object-cover  w-full sm:w-[235px] h-[250px]"
            />
          </div>

          <div className="sm:w-[235px] w-full h-[250px] hidden sm:flex">
            <img
              src={image1.src}
              alt={`Campus Image  1}`}
              className="object-cover  w-full sm:w-[235px] h-[250px]"
            />
          </div>
          <div className="sm:w-[235px] w-full h-[250px] hidden sm:flex">
            <img
              src={image2.src}
              alt={`Campus Image  1}`}
              className="object-cover  w-full sm:w-[235px] h-[250px]"
            />
          </div>
          <div className="sm:w-[235px] w-full h-[250px] hidden sm:flex">
            <img
              src={image3.src}
              alt={`Campus Image  1}`}
              className="object-cover  w-full sm:w-[235px] h-[250px]"
            />
          </div>
          <div className="sm:w-[235px] w-full h-[250px] hidden sm:flex">
            <img
              src={image4.src}
              alt={`Campus Image  1}`}
              className="object-cover  w-full sm:w-[235px] h-[250px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
