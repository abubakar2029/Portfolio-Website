'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import Image from 'next/image';

export const items = [
    {
        id: 1,
        url: '/recommendations/1.png',
        title: 'Misty Mountain Majesty',
    },
    {
        id: 1,
        url: '/recommendations/2.png',
        title: 'Misty Mountain Majesty',
    },
    {
        id: 2,
        url: '/recommendations/3.png',
        title: 'Winter Wonderland',
    },
    {
        id: 3,
        url: '/recommendations/4.png',
        title: 'Autumn Mountain Retreat',
    },
    {
        id: 4,
        url: '/recommendations/5.png',
        title: 'Tranquil Lake Reflection',
    },
];

export default function FramerAutoplayCarousel({ duration = 2500 }) {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth || 1;
            const targetX = -index * containerWidth;

            animate(x, targetX, {
                type: "tween",
                duration: 0.8,
                ease: "easeInOut",
            });

        }
    }, [index]);

    // you can remove autoplay logic
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setIndex((current) => (current + 1) % items.length);
            }, duration);

            return () => clearInterval(interval);
        }
    }, [isHovered, duration]);

    return (
        <div className='max-w-[970px] mx-auto lg:p-10 sm:p-4 p-2'>
            <h2 className='text-2xl mb-4'>Recommendations</h2>
            <div className='flex flex-col gap-3'>
                <div
                    className='relative border-green-700 border-2  overflow-hidden object-contain rounded-lg'
                    ref={containerRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div className="flex" style={{ x }}>
                        {items.map((item) => (
                            <div key={item.id} className="shrink-0 w-full flex justify-center">
                                <Image
                                    src={item.url}
                                    alt={item.title}
                                    width={800}
                                    height={400}
                                    className="w-full h-auto object-contain rounded-lg select-none pointer-events-none"
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </motion.div>


                    {/* Navigation Buttons */}
                    <motion.button
                        disabled={index === 0}
                        onClick={() => setIndex((i) => Math.max(0, i - 1))}
                        className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${index === 0
                                ? 'opacity-40 cursor-not-allowed bg-gray-300'
                                : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
                            }`}
                    >
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M15 19l-7-7 7-7'
                            />
                        </svg>
                    </motion.button>

                    <motion.button
                        disabled={index === items.length - 1}
                        onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${index === items.length - 1
                                ? 'opacity-40 cursor-not-allowed bg-gray-300'
                                : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
                            }`}
                    >
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M9 5l7 7-7 7'
                            />
                        </svg>
                    </motion.button>


                    {/* Progress Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {items.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`
                h-7 w-7 flex items-center justify-center rounded-full 
                font-semibold text-sm border-2 transition-all

                ${i === index
                                        ? "bg-white text-black border-white"       // Active
                                        : "bg-transparent text-white border-white/50 hover:border-white"} // Inactive
            `}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
