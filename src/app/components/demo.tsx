"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "./ui/modal";
import { motion } from "framer-motion";

interface DemoProps {
    videoSrc: string;
}

export default function Demo({ videoSrc }: DemoProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="group rounded-2xl transition-opacity group-hover:opacity-90 h-full max-w-[1280px] w-full pt-20" 
            style={{backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(92, 177, 140, 0.2035), rgba(70, 146, 184, 0.506), rgba(91, 88, 199, 0.33))"}}>
            {/* Image with Play Button */}
            <div className="relative flex justify-center items-center px-4 md:px-8" >
                <Image
                    src="/demo-image.png"
                    alt="Product Image"
                    title="Product image"
                    width={1280}
                    height={520}
                    className=" rounded-lg transition-opacity group-hover:opacity-90 "
                    priority
                />
				
                {/* Play Button Overlay */}
                <motion.div onClick={() => setIsOpen(true)}
                    initial={{ scale: 0.5, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }} 
                    transition={{ type: "spring", stiffness: 200, damping: 15, duration: 0.5 }}
                    className="absolute z-10"
                >
                    <motion.div 
                        whileHover={{ scale: 1.13 }} 
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        className="absolute rounded-full gradient-border " style={{backdropFilter: "blur(3.5px)"}}
                    >
                        <motion.button  
                            whileTap={{ scale: 0.9 }}
                            className="bg-[#9FC5DB]/35 dark:bg-dark/35 rounded-full transition-transform flex items-center justify-center w-[76px] h-[76px] pl-1"
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                <path 
                                    d="M5.54076 2.15882C5.23305 1.96101 4.84189 1.947 4.52081 2.12229C4.19974 2.29758 4 2.63419 4 3V21C4 21.3658 4.19974 21.7024 4.52081 21.8777C4.84189 22.053 5.23305 22.039 5.54076 21.8412L19.5408 12.8412C19.827 12.6572 20 12.3403 20 12C20 11.6597 19.827 11.3428 19.5408 11.1588L5.54076 2.15882Z" 
                                    fill="url(#paint0_linear_1769_502)" 
                                    stroke="url(#paint1_linear_1769_502)" 
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                />
                                
                                <defs>
                                    <linearGradient id="paint0_linear_1769_502" x1="5.12335" y1="1.66048" x2="20.6492" y2="3.09017" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#4A89DB"/>
                                        <stop offset="1" stopColor="#39C77B"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1769_502" x1="5.12335" y1="1.66048" x2="20.6492" y2="3.09017" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#4A89DB"/>
                                        <stop offset="1" stopColor="#39C77B"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="relative w-full max-w-[1280px]">
                    <video controls autoPlay className="w-full max-w-[1280px] rounded-lg">
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Modal>
        </section>
    );
}