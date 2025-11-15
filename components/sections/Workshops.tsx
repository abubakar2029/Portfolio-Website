import React from "react";
import { Star } from "lucide-react";
import { Linkedin } from "lucide-react";




// Data array
const hackathonProjects = [
    {
        name: "Raise Your Hack",
        link: "https://www.youtube.com/embed/PaRx6nxlf6I",
        summary: "Delivered a webinar to UAF students on Meta Hacker Cup 🎯",
    },
    {
        name: "English Test Preparation (Duolingo/IELTS)",
        link: "https://www.youtube.com/embed/C8q3yMDMBr0",
        summary: "",
    }
];


export default function Workshops() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <section className="flex flex-col items-start max-md:px-16 text-sm max-w-6xl mx-auto">

                <h1
                    className="card-title bg-clip-text mt-2.5 !mb-5">
                    Workshops and Webinars (Trainer/Instructor)
                </h1>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">



                    {hackathonProjects.map((project, index) => (
                        <div key={index} className="card border border-slate-200 !bg-transparent p-6 rounded-lg ">
                            <a href="#">
                                <iframe
                                    className="rounded-base w-full h-48"
                                    src={project.link}
                                    title={project.name}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </a>
                            <a href="#">
                                <h5 className="mt-6 mb-2 text-base text-gray-900 font-medium">
                                    {project.name}
                                </h5>
                            </a>
                            <p className="mb-6">
                                {project.summary}
                            </p>
                            <a
                                href={project.link}
                                className="inline-flex items-center text-body hover:-translate-y-0.5 transition duration-200 font-medium  rounded-md text-sm px-4 py-2.5 border border-slate-200"
                                target="_blank"
                            >
                                Watch Recording
                                <svg
                                    className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 12H5m14 0-4 4m4-4-4-4"
                                    />
                                </svg>
                            </a>
                        </div>

                    ))}


                </div>
            </section>
        </>
    );
};