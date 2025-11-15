"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const courses = [
    {
        name: "CS106A",
        institute: "Stanford University: Code in Place 2025",
        link: "https://digitalcredential.stanford.edu/check/BF89152F6E34DEB3C62341BF6B7A9773FC0BEA3449762CBEC259077FEFC1F632SlVZOGEwTUI4MDdnZFh2Y3hwbHRMdmJnczg4U2g0K2hrUllxN0taclpuVC9PWXZE",
        image: "/stanford.png",
        button: "View Certificate",
        description: (
            <p className="text-body">
                Selected as{" "}
                <span className="font-bold italic text-gray-900">
                    Section Leader
                </span>{" "}
                for{" "}
                <span className="font-bold italic text-gray-900">
                    Stanford University's
                </span>
                &ensp; introductory programming course, CS106A.
                Taught a section of 15 international students.
            </p>
        ),

    },

    {
        name: "English Test Preparation (Duolingo/IELTS)",
        image: "/det.png",
        institute: "iCodeGru",
        link: "https://docs.google.com/spreadsheets/d/1utjZ2UN5hOI7KhylekVldX_RYV1U-8io2o5VLspsJsE/edit?usp=sharing",
        button: "Lecture Recordings",
        description: "A gamified language-learning platform driving daily habit formation and incremental fluency gains."
    },
    {
        button: "Lecture Recordings",
        image: "/python+dsa.jpeg",
        name: "Python programming and data structures",
        institute: "iCodeGru",
        link: "https://github.com/abubakar2029/Python-Volunteer-Training.git",
        description: "A high-leverage programming language powering data engineering, AI workflows, automation, and rapid prototyping."
    },
];


function HeroSection() {


    return (
        <section className="grid grid-cols-1 min-[1070px]:grid-cols-4 px-3.5 gap-6 max-w-[1170px] mx-auto">

            <div className="border border-slate-200 card rounded-lg justify-start items-center flex flex-col gap-y-3.5">
                <Image width={250} height={240} src="/abubakar.png" alt="GitHub Logo" />
                <h4 className='card-title'>Muhammad Abu Bakar</h4>

                <p>Software Engineer | Prospective PhD</p>
                <a
                    href="https://drive.google.com/uc?export=download&id=1ltrG_pOZTcHbw6wm54sVdcWAB2Egy_V6"
                    // onClick={() => setShowCV(true)}
                    download="Muhammad-Abu-Bakar-CV.pdf"
                    className="border border-slate-300 px-4 py-1.5 rounded-md cursor-pointer hover:bg-slate-100"
                >
                    View CV
                </a>


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

            <div className="border relative flex flex-col justify-between border-slate-200 card rounded-lg ">
                <div>
                    <h4 className='card-title'>About</h4>
                    <p>
                        {/* I am a final-year Software Engineering Student at the <a href="https://uaf.edu.pk/" target='blank'>University of Agriculture Faisalabad (UAF)</a>, Pakistan.
                        <br /> */}
                        My motive is to contribute to autonomous systems and projects that enhance human well-being. I am interested in Machine Learning, AI, and Data Science.
                        <br />
                        Alongside academic work, I completed a 3-month long on-site <a href="https://www.linkedin.com/posts/muhammadabu_amalacademy-careerdevelopment-activity-7261764747140747265-PNSe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDBzdcBe_rsgnZqctgO3kCpADXi4W9u4_I" className='text-sky-600 hover:underline' target='blank'>Career Development Fellowship</a> by Stanford University in Pakistan where I strengthened skills in time management, communication, teamwork, and presentation
                    </p>
                </div>
                <div className='pt-6 max-[670px]:w-[70%] max-[1070px]:w-[40%] max-[1070px]:justify-between justify-around min-[1070px]:pt-3 flex min-[1070px]:justify-between'>
                    <a href="https://certs.duolingo.com/0020ssg7bgbxfy7t" target='blank'>
                        <img src="/logos/det.jpeg" alt="Duolingo English Test 130 score (~IELTS 7.0)" className="max-[1070px]:h-8 h-10" />
                    </a>
                    <a href="https://leetcode.com/u/AbuBakar_2029/" target='blank'>
                        <img src="/logos/leetcode.png" alt="100 Days of Code Challenge" className="max-[1070px]:h-8 h-10" />
                    </a>
                    <a href="https://digitalcredential.stanford.edu/check/BF89152F6E34DEB3C62341BF6B7A9773FC0BEA3449762CBEC259077FEFC1F632SlVZOGEwTUI4MDdnZFh2Y3hwbHRMdmJnczg4U2g0K2hrUllxN0taclpuVC9PWXZE" target='blank'>
                        <img src="/logos/stanford_cip.svg" alt="Section Leader at Stanford Code in Place" className="max-[1070px]:h-8 h-10" />
                    </a>
                    <a href="https://www.linkedin.com/posts/muhammadabu_amalacademy-careerdevelopment-activity-7261764747140747265-PNSe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDBzdcBe_rsgnZqctgO3kCpADXi4W9u4_I" target='blank'>
                        <img src="/logos/amal.png" alt="Career Development Fellowship" className="h-10 max-[1070px]:h-8" />
                    </a>
                </div>
            </div>

            <div className="border border-slate-200 card rounded-lg min-[1070px]:col-span-2">
                <h4 className='card-title'>Volunteer Taught Courses</h4>
                <div className='flex flex-col gap-y-3 overflow-y-auto max-h-[500px] pr-2'>

                    {courses.map((course, index) => (
                        <div className=' bg-neutral-primary-soft p-6 card flex flex-col items-center border border border-slate-200 rounded-base md:flex-row md:max-w-xl md:flex-row ' key={index}>

                            <a
                                href="#"
                                className=""
                            >
                                <img
                                    className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0"
                                    src={course.image}
                                    alt=""
                                />
                            </a>
                            <div className="flex flex-col justify-between pl-4">
                                <h5 className="mb-2 text-sm text-gray-900 font-medium">
                                    {course.name}
                                </h5>
                                <span className="mb-3 text-xs">
                                    {course.description}
                                </span>
                                <div>
                                    <a href={course.link} target="_blank">

                                        <button
                                            type="button"
                                            onClick={() => window.open(course.link, '_blank')}
                                            className="border border-slate-300 px-4 py-1.5 rounded-md text-xs cursor-pointer hover:bg-slate-100 flex flex-row items-center"
                                        >

                                            {course.button}
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
                                    </a>
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
