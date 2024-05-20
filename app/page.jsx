import HeroSection from "./Components/HomePageComponents/HeroSection";
import AboutSection from "./Components/HomePageComponents/AboutSection";
import CoursesSection from "./Components/HomePageComponents/CoursesSection";
import FacilitySection from "./Components/HomePage/facilitySection";
import FooterSection from "./Components/HomePage/footerSection";
import ContactSection from "./Components/HomePage/contactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <FacilitySection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
