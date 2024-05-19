import React from "react";

const AboutSection = () => {
  const heroImage = "/Hero.svg";
  const styling = {
    backgroundImage: `url('${heroImage}')`,
  };
  return (
    <div className="px-10 py-20 w-full bg-[#ffffff] flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 px-2 text-black max-w-xl">
          <h1 className="text-2xl font-semibold mb-8">
            WELCOME TO COLLEGE OF APPLIED SCIENCE THAMARASSERY
          </h1>
          <p className="text-sm text-justify">
            Our institution offers a comprehensive education in arts and
            sciences, preparing students for successful careers with experienced
            faculty, we provide a nurturing environment for academic excellence.
            Our diverse curriculum and extracurricular activities promote
            holistic learning and personal growth. Join us on a journey of
            knowledge, discovery, and empowerment at the College of Applied
            Science, Thamarassery.
          </p>
          <p className="text-sm mt-4 text-justify">
            With a rich history of academic excellence, the College of Applied
            Science, Thamarassery has a strong reputation for delivering
            high-quality education. Our esteemed faculty members, who are
            experts in their respective fields, are committed to fostering an
            engaging and intellectually stimulating learning environment. At our
            college, students have access to modern facilities, including
            well-equipped classrooms, laboratories, and a well-stocked library.
            These resources support and enhance the learning experience,
            enabling students to engage in hands-on experiments, and
            collaborative activities.
          </p>
        </div>
        <div className="hidden lg:flex lg:col-span-2 px-3 items-center">
          <div
            className="bg-center bg-cover rounded-xl w-full h-64 md:h-80"
            style={styling}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
