import React from "react";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const courses_details = [
    {
      name: "BSC",
      image:
        "https://rosemine.in/blog/source/Courses/BSC-computer-science-course-details.jpg",
      details:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
      link: "#",
    },
    {
      name: "BCA",
      image:
        "https://www.cpj.edu.in/wp-content/uploads/2022/11/bca-admission-2021.jpeg",
      details:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
      link: "#",
    },
    {
      name: "BBA",
      image:
        "https://blog.upes.ac.in/wp-content/uploads/2019/07/BBA-Course-Landing.jpg",
      details:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
      link: "#",
    },
    {
      name: "BCOM",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYhGASo_vTZQdTScTybcCfgAwaTgKnVjBRQ-_13g-gg&s",
      details:
        "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
      link: "#",
    },
  ];
  return (
    <div className="flex flex-col px-3 bg-[#C0DFE7] text-black w-full items-center h-screen justify-center">
      <div className=" flex flex-col items-center">
        <h1 className="font-semibold text-2xl">PROGRAMS WE OFFER</h1>
        <p className="text-center max-w-[600px] text-xs mt-5">
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-11 gap-7 w-full">
        {courses_details.map((course, index) => (
          <CourseCard
            details={course.details}
            img={course.image}
            link={course.link}
            name={course.name}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
