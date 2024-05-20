"use client";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CourseCard from "./CourseCard";

export default function CourseSlider() {
  return (
    <div className="w-full flex justify-center px-4">
      <Carousel />
    </div>
  );
}

const responsive = {
  0: { items: 1 },
  750: { items: 2 },
  1024: { items: 3 },
};
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

const items = courses_details.map((course, index) => (
  <CourseCard
    details={course.details}
    img={course.image}
    link={course.link}
    name={course.name}
    key={index}
  />
));
const Carousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    controlsStrategy="alternate"
    autoPlay
    autoPlayInterval={1000}
    animationDuration={1000}
    animationType="fadeout"
    infinite
  />
);
