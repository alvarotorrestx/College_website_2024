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
          <p className="text-sm ">6 semester</p>
          <p className="text-sm ">17,800 / semster</p>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold mt-3">{name}</h3>
          <h3 className="text-base mt-2">
            BCA is a computer application course
          </h3>
        </div>

        <div className="mt-4 font-normal  ">
          <Link href={link} className="">
            {" "}
            Learn more {">"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
