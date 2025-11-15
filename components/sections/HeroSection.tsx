"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const courses = [
    {
        name: "CS106A",
        institute: "Stanford University: Code in Place 2025",
        link: "https://see.stanford.edu/Course/CS106A",
        description: "Stanford’s flagship introduction to programming, enabling rock-solid fundamentals in problem-solving and software design."
    },
    {
        name: "English Test Preparation (Duolingo/IELTS)",
        institute: "iCodeGru",
        link: "https://www.duolingo.com/",
        description: "A gamified language-learning platform driving daily habit formation and incremental fluency gains."
    },
    {
        name: "Python programming and data structures",
        institute: "iCodeGru",
        link: "https://www.python.org/",
        description: "A high-leverage programming language powering data engineering, AI workflows, automation, and rapid prototyping."
    },
];


function HeroSection() {

    const [showCV, setShowCV] = useState(false);


    {
        showCV && (
            <iframe
                src="https://drive.google.com/file/d/1ltrG_pOZTcHbw6wm54sVdcWAB2Egy_V6/view?usp=sharing"
                className="w-full h-[600px] mt-4"
            ></iframe>
        )
    }

    return (
        <section className="grid grid-cols-1 min-[1070px]:grid-cols-4 px-3.5 gap-6 max-w-[1170px] mx-auto">

            <div className="border border-slate-200 card rounded-lg justify-start items-center flex flex-col gap-y-3.5">
                <Image width={250} height={240} src="/github-icon.png" alt="GitHub Logo" />
                <h4 className='card-title'>Muhammad Abu Bakar</h4>

                <p>Software Engineer | Prospective PhD</p>
                <button
                    onClick={() => setShowCV(true)}
                    className="border border-slate-300 px-4 py-1.5 rounded-md cursor-pointer hover:bg-slate-100"
                >
                    View CV
                </button>


                <div className='flex pt-2.5 gap-4'>
                    <a
                        aria-label="LinkedIn"
                        href="https://www.linkedin.com/in/muhammadabu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="site-icon" />
                    </a>
                    <a
                        aria-label="GitHub"
                        href="https://github.com/abubakar2029"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                    >
                        <FontAwesomeIcon icon={faGithub} className="site-icon" />
                    </a>
                </div>
                <p>bakar.cs26@gmail.com</p>
            </div>
            <div className="border border-slate-200 card rounded-lg ">
                <h4 className='card-title'>About</h4>
                <p>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, vero officiis perferendis omnis voluptatum sit quas ex autem porro quos dicta eos delectus nobis corporis explicabo esse dolores excepturi neque!
                </p>
            </div>
            <div className="border border-slate-200 card rounded-lg min-[1070px]:col-span-2">
                <h4 className='card-title'>Volunteer Taught Courses</h4>
                <div className='flex flex-col'>

                    {courses.map((course, index) => (
                        <div className='flex flex-col items-center bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:flex-row md:max-w-xl md:flex-row md:max-w-xl card'>

                            <a
                                href="#"
                                className=""
                            >
                                <img
                                    className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0"
                                    src="/docs/images/blog/image-4.jpg"
                                    alt=""
                                />
                            </a>
                            <div className="flex flex-col justify-between md:p-4 leading-normal">
                                <h5 className="mt-6 mb-2 text-base text-gray-900 font-medium">
                                    {course.name}
                                </h5>
                                <p className="mb-6 text-body">
                                    In today’s fast-paced digital landscape, fostering seamless collaboration
                                    among Developers and IT Operations.
                                </p>
                                <div>
                                    <button
                                        type="button"
                                        className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                                    >
                                        Read more
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
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>



            </div>
        </section>
    )
}

export default HeroSection
