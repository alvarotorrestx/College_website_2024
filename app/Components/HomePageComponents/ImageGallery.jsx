"use client";
import image1 from "../../../assets/1.jpeg";
import image2 from "../../../assets/2.jpeg";
import image3 from "../../../assets/3.jpeg";
import image4 from "../../../assets/4.jpeg";

export default function ImageGallery() {
  return (
    <div className="flex justify-center pt-7 bg-[#2a96964d] w-full">
      <div className="max-w-5xl px-4 py-9">
        <h1 className="text-3xl font-semibold text-center">Explore Campus</h1>
        <p className="text-center text-xs mt-4">

          Discover the vibrant campus life through our image gallery
        </p>
        <div className="flex flex-wrap justify-center mt-10 gap-4">
          <div className="sm:w-[235px] w-full h-[250px]">
            <img
              src={image1.src}
              alt={`Campus Image  1}`}
              className="object-cover w-full sm:w-[235px] h-[250px] rounded-md"
            />
          </div>
          <div className="sm:w-[235px] w-full h-[250px]">
            <img
              src={image2.src}
              alt={`Campus Image  1}`}
              className="object-cover  w-full sm:w-[235px] h-[250px] rounded-md"
            />
          </div>
          <div className="sm:w-[235px] w-full h-[250px]">
            <img
              src={image3.src}
              alt={`Campus Image  1}`}
              className="object-cover  w-full sm:w-[235px] h-[250px] rounded-md"
            />
          </div>
          <div className="sm:w-[235px] w-full h-[250px]">
            <img
              src={image4.src}
              alt={`Campus Image  1}`}
              className="object-cover  w-full sm:w-[235px] h-[250px] rounded-md"
            />
          </div>

          {/* <div className="sm:w-[235px] w-full h-[250px] hidden sm:flex">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
