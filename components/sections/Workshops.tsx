import React from "react";
import { Star } from "lucide-react";
import { Linkedin } from "lucide-react";




// Data array
const hackathonProjects = [
    {
        name: "Meta Hacker Cup",
        link: "https://www.youtube.com/embed/PaRx6nxlf6I",
        summary: "Delivered a webinar to UAF students on Meta Hacker Cup 🎯",
    },
    {
        name: "English Test Preparation (Duolingo)",
        link: "https://www.youtube.com/embed/C8q3yMDMBr0",
        summary: "Taught a workshoop and answered the questions of students related to Duolingo English Test preparation.",
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
            <section className="flex flex-col items-start px-3.5 text-sm max-w-6xl mx-auto">

                <h1
                    className="card-title bg-clip-text mt-2.5 !mb-5">
                    Workshops and Webinars (Trainer/Instructor)
                </h1>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">



                    {hackathonProjects.map((project, index) => (
                        <div key={index} className="card border border-slate-200 flex flex-col justify-between p-6 rounded-lg ">
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
                                className="max-w-40 whitespace-nowrap inline-flex items-center text-sm  border transition duration-300 border-slate-300 px-4 py-2 rounded-md cursor-pointer hover:bg-slate-100"
                                target="_blank"
                            >
                                Watch Recording
                                
                            </a>
                        </div>

                    ))}


                </div>
            </section>
        </>
    );
};