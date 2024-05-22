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
      "This degree covers programming, algorithms, data structures, software development, and computer systems, preparing students for tech careers.",
    link: "#",
  },
  {
    name: "BCA",
    image:
      "https://www.cpj.edu.in/wp-content/uploads/2022/11/bca-admission-2021.jpeg",
    details:
      "This degree focuses on software development, programming, databases, and computer applications, preparing students for IT and software careers.",
    link: "#",
  },
  {
    name: "BBA",
    image:
      "https://blog.upes.ac.in/wp-content/uploads/2019/07/BBA-Course-Landing.jpg",
    details:
      "This degree covers business management, marketing, finance, and entrepreneurship, preparing students for leadership roles in various industries.",
    link: "#",
  },
  {
    name: "BCOM",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYhGASo_vTZQdTScTybcCfgAwaTgKnVjBRQ-_13g-gg&s",
    details:
      "This degree focuses on accounting, finance, economics, and business law, equipping students for careers in commerce and finance.",
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
