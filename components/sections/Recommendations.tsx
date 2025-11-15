import React from "react";
import { Star } from "lucide-react";
import { Linkedin } from "lucide-react";




// Data array
const testimonials = [
    {
        avatar: "/avatars/mark.jpeg",
        name: "Mark Kelly",
        title: "Empowering people and organisations through data, AI, and engineering",
        rating: 5,
        quote: "I had the pleasure of working with Abubakar during the Lablab.ai hackathon. Abubakar courageously took on the difficult task of combining code from different team members to create a robust frontend web application aligned with the UX/UI design. He was professional and communicative at all times, a real team player.",
    },
    {
        avatar: "/avatars/harish.jpeg",
        name: "Prakash Dulal",
        title: "Civil Engineering Student at Pulchowk Campus | Aspiring Structural Engineer",
        rating: 5,
        quote: "The way you taught Python in Code in Place was fantastic and easy to follow. I really liked your teaching style—especially how you approached a coding problem and broke it down into smaller chunks before starting. Thank you for your kind, friendly, and cooperative nature.",
    },
    {
        avatar: "/avatars/arlo.jpeg",
        name: "Arlo Wilde",
        title: "Certified Pharmacy Technician at Amber Specialty Pharmacy",
        rating: 5,
        quote: "I met Muhammad Abu Bakar at Code In Place — an international intro to Python workshop through Stanford University. As my section leader, he took his time to answer questions, encouraging students to work through challenges together before offering guidance as needed. This approach focused on helping us to understand the basics, and learn how to use available resources to build code, effectively deepening our problem-solving and collaboration skills. His dedication to both personal learning and contributing to the education of others is evident, and I'm truly appreciative of the opportunity to benefit from that.",
    },
    {
        avatar: "/avatars/nitasha.jpeg",
        name: "Natasha Peniushina",
        title: "Workforce Management Specialist",
        rating: 5,
        quote: "I had a chance to join one of Muhammad’s sections during my Code in Place journey, and even though it was just one occasion, it has been undoubtedly positive experience. Muhammad managed to explain complex concepts in a clear and patient way, without making anyone feel lost or left behind. The problem-solving part of the session was well-organised, engaging, and genuinely fun, which is not an easy thing to pull off in a group of people who don’t really know each other and some of whom even had technical limitations. It felt like a comfortable learning space, not just another awkward Zoom call with strangers. Big kudos for that! I would definitely attend more of those if I had a chance. ",
    },
    {
        avatar: "/avatars/hagop.jpeg",
        name: "Hagop Bulbulian",
        title: "Science Teacher , Research Assistant at American University of Beirut",
        rating: 5,
        quote: "Mr. Muhammad Abu Bakar , was a section leader during my enrolment at Code In Place program taught by Stanford University. \n\nHe gave a lecture by using the zoom software and demonstrates a good knowledge at the subject he tought and good knowledge in the methods of online teaching (distance teaching)\n\nI had the feeling that even some of the students didn't read the chapters of that section , he was able to simplify it , making attending the lecture easier for those students. \n\nHe also demonstrated a good knowledge of English language. \n\nBest Regards\nHagop Bulbulian",
    },
];

export default function Example() {
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
                    Recommendations
                </h1>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">



                    {testimonials.map((testimonial, index) => (
                        <div className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent !bg-transparent transition duration-500 card" key={index}>
                            <p className=" text-slate-500 whitespace-pre-line
">{testimonial.quote}
                            </p>
                            <div className="flex items-center gap-3 mt-8">
                                <img className="size-12 rounded-full" src={testimonial.avatar} alt="user image" />
                                <div>
                                    <h2 className="flex items-center gap-2 text-base text-gray-900 font-medium">
                                        {testimonial.name}

                                        <img src="/linkedin-icon.png" alt="LinkedIn Logo" className="w-4 h-4" />

                                    </h2>
                                    <p className="text-gray-500 text-xs">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </section>
        </>
    );
};