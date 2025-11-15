
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Recommendations from "@/components/sections/Recommendations";
import Hackathons from "@/components/sections/Hackathons";
import Workshops from "@/components/sections/Workshops";
import HeroSection from "@/components/sections/HeroSection";

export const metadata = {
  title: "Muhammad Abu Bakar | Software Engineer | MERN & AI/ML | Prospective PhD",
  description:
    "Official portfolio of Muhammad Abu Bakar — Software Engineer, MERN Developer, and AI/ML practitioner showcasing projects, skills, and experience.",
  keywords: [
    "Muhammad Abu Bakar",
    "Software Engineer",
    "AI ML Developer",
    "Pakistan",
    "PhD Aspirant",
    "React Developer",
    "Web Developer",
    "Full Stack Developer",
    "Next.js",
  ],
  openGraph: {
    title: "Muhammad Abu Bakar | Software Engineer | MERN & AI/ML | Prospective PhD",
    description:
      "Explore projects, skills, and achievements of Muhammad Abu Bakar.",
    url: "https://muhammadabu.vercel.app",
    siteName: "Muhammad Abu Bakar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Abu Bakar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Abu Bakar | Software Engineer",
    description: "Portfolio website showcasing my work and experience.",
    images: ["/og-image.png"],
  },
};


export default function Home() {
  return (
    <>
      <main className="px-5 gap-y-8 flex flex-col pt-10">
        <HeroSection />
        <Workshops />
        <Hackathons />
        <Recommendations />

        {/* SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Abu Bakar",
              jobTitle: "Software Engineer | AI/ML Practitioner | Prospective PhD",
              url: "https://muhammadabu.vercel.app",
              sameAs: [
                "https://linkedin.com/in/muhammadabu",
                "https://github.com/abubakar2029",
              ],
            }),
          }}
        />

      </main>

      <Footer />
    </>
  );
}