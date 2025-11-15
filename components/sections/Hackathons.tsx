import React from "react";
import { Star } from "lucide-react";
import { Linkedin } from "lucide-react";




// Data array
const hackathonProjects = [
    {
        name: "Internet of Agents Hackathon",
        link: "https://lablab.ai/event/internet-of-agents/peka-coders/leetcode-agent",
        summary: "Developed an autonomous agent to assist competitive-programmer in their daily practice insights.",
        keyFeatures: [
            "Analyzes GitHub activity",
            "Recommends a daily LeetCode problem",
            "Automated 5 AM email workflow"
        ],
        image: "/hack/ioa_hack.png",
        stack: ["FastAPI", "Mistral AI"]
    },
    {
        name: "Lion Hacks Hackathon",
        link: "https://devpost.com/software/mentormatch-ai-powered-career-mentorship-finder",
        summary: "Delivered an AI-enabled mentor-matching platform leveraging vector similarity.",
        keyFeatures: [
            "Mentee-mentor matching engine",
            "Vector-based relevance scoring",
            "Full-stack scalable architecture"
        ],
        image: "/hack/lion_hack.png",
        stack: ["React.js", "Django", "Pinecone", "MongoDB"]
    },
    {
        name: "Raise Your Hack",
        image: "/hack/raise_hack.png",
        link: "https://lablab.ai/event/raise-your-hack/agentic-marketplace-prosus-track/chat-market",
        summary: "Developed a product listing + recommendation ecosystem with agentic intelligence.",
        keyFeatures: [
            "Recommendation workflows",
            "Product listing intelligence",
            "API-driven data pipelines"
        ],
        stack: ["React.js", "FastAPI", "Llama", "GroqAPI"]
    }
];


export default function Hackathons() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <section className="flex flex-col items-start text-sm max-w-6xl mx-auto">

                <h1
                    className="card-title bg-clip-text mt-2.5 !mb-5">
                    Hackathons at LabLab.ai and Devpost
                </h1>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">



                    {hackathonProjects.map((project, index) => (
                        <div key={index} className="card border border-slate-200 !bg-transparent p-6 rounded-lg ">
                            <a href="#">
                                <img className="rounded-base" src={project.image} alt="" />
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
                                Submission link
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