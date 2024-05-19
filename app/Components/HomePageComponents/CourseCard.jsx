import Link from "next/link";
import React from "react";

const CourseCard = ({ name, details, img, link }) => {
  const image = img;
  const styling = {
    backgroundImage: `url('${image}')`,
  };
  return (
    <div className="w-72  rounded bg-white px-4 py-4 flex flex-col items-center shadow-xl border">
      <div
        className="border h-36 rounded w-full bg-cover bg-center"
        style={styling}
      >
        {" "}
      </div>
      <div className="flex justify-center flex-col mt-2">
        <h1 className="font-semibold text-center">{name}</h1>
        <p className="text-xs mt-4 pr-4">{details}</p>
      </div>
      <div className="w-full flex flex-1 justify-start items-end mt-4">
        <div className="text-sm  bg-slate-100  px-4 py-1 border shadow">
          <Link href={link}> Learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
