
import Image from "next/image";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Recommendations from "@/components/sections/Recommendations";
import Slider from "@/components/sections/Slider";
import Hackathons from "@/components/sections/Hackathons";
import Workshops from "@/components/sections/Workshops";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <main className="px-5 gap-y-8 flex flex-col pt-10">
        <HeroSection />
        <Workshops />
        <Hackathons />
        <Recommendations />
      </main>

      <Footer />
    </>
  );
}