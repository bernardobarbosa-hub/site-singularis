import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import AboutStrip from "@/components/sections/AboutStrip";
import Services from "@/components/sections/Services";
import WhySingularis from "@/components/sections/WhySingularis";
import FeaturedExperience from "@/components/sections/FeaturedExperience";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutStrip />
        <Services />
        <WhySingularis />
        <FeaturedExperience />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
