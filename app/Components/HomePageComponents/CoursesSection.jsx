import React from "react";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const courses_details = [
    {
      name: "BSC",
      image:
        "https://rosemine.in/blog/source/Courses/BSC-computer-science-course-details.jpg",
      details:
        "The Bachelor of Computer Science is a bachelor's degree for completion of an undergraduate program in computer science. In general, computer science degree programs emphasize the mathematical and theoretical foundations of computing.",
      link: "#",
    },
    {
      name: "BCA",
      image:
        "https://www.cpj.edu.in/wp-content/uploads/2022/11/bca-admission-2021.jpeg",
      details:
        "BCA is a three-year degree program. This degree is for those who want to study computer science, software engineering, information technology, information security, and networking technology.",
      link: "#",
    },
    {
      name: "BBA",
      image:
        "https://blog.upes.ac.in/wp-content/uploads/2019/07/BBA-Course-Landing.jpg",
      details:
        "BBA is a widely recognized undergraduate degree program in management. Students earn a Bachelor of Business Administration degree in order to acquire a comprehensive knowledge of business principles and management practices",
      link: "#",
    },
    {
      name: "BCOM",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYhGASo_vTZQdTScTybcCfgAwaTgKnVjBRQ-_13g-gg&s",
      details:
        "BCom Computer Applications is a 3-year undergraduate course. It is designed to have an understanding in the field of commerce, especially in the discipline that involves the use of software technology application.",
      link: "#",
    },
  ];
  return (
    <div className="flex flex-col px-3 py-8 bg-[#f3f3f3] text-black w-full items-center min-h-screen justify-center">
      <div className=" flex flex-col items-center">
        <h1 className="font-semibold text-2xl">PROGRAMS WE OFFER</h1>
        <p className="text-center max-w-[600px] text-sm mt-5">
          College of Applied Science, Thamarassery, is affiliated to the Calicut
          University and was established in 2012 with regular courses in B.Sc
          (Computer Science), B.Com with CA, BA English, BCA, BBA, MA English
          and M.Com.
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
