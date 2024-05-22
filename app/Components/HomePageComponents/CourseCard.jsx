import Link from "next/link";
import React from "react";

const CourseCard = ({ name, details, img, link }) => {
  const image = img;
  const styling = {
    backgroundImage: `url('${image}')`,
  };
  return (
    <div className="sm:w-80 min-w-80  w-full rounded bg-white pb-4  flex flex-col items-center shadow-lg ">
      <div
        className=" h-[210px] w-full bg-cover bg-center rounded-t "
        style={styling}
      >
        {" "}
      </div>
      <div className=" px-4 mt-4">
        <div className="flex justify-between">
          <p className="text-xs font-medium ">6 semester</p>
          <p className="text-xs font-medium">17,800 / semster</p>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold mt-3">{name}</h3>
          <h3 className="text-[12px] mt-5">{details}</h3>
        </div>

        <div className="mt-5 font-normal  ">
          <Link href={link} className="text-sm hover:font-semibold">
            {" "}
            Learn more {">"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
