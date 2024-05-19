import Image from "next/image";
import HeroSection from "./Components/HomePageComponents/HeroSection";
import AboutSection from "./Components/HomePageComponents/AboutSection";
import CoursesSection from "./Components/HomePageComponents/CoursesSection";
import BlankSection from "./Components/HomePageComponents/BlankSection";
import FacilitySection from "./Components/HomePage/facilitySection";
import FooterSection from "./Components/HomePage/footerSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      {/* <BlankSection /> */}
      <CoursesSection />
      <FacilitySection />
      <FooterSection />
    </main>
  );
}
