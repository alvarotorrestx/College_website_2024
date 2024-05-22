import HeroSection from "./Components/HomePageComponents/HeroSection";
import AboutSection from "./Components/HomePageComponents/AboutSection";
import CoursesSection from "./Components/HomePageComponents/CoursesSection";
import FacilitySection from "./Components/HomePage/facilitySection";
import FooterSection from "./Components/HomePage/footerSection";
import ContactSection from "./Components/HomePage/contactSection";
import ImageGallery from "./Components/HomePageComponents/ImageGallery";
import QuestionSection from "./Components/HomePage/questionSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <FacilitySection />
      <ImageGallery />
      <QuestionSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
