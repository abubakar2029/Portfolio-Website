
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
      <main className="">
        <h4 className="card-title">Welcome to My Portfolio</h4>
        Making new site
        <HeroSection />
        <Workshops />
        <Hackathons />
        <Recommendations />
        {/* <Slider/> */}
      </main>

      <Footer />
    </>
  );
}
// <a
//   className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//   href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Documentation
// </a>