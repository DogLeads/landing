"use client";
import React, { useRef } from "react";
import GradientText from "./ui/gradient-text";
import Image from "next/image";

export default function Deploy() {
    const images = [
        { src: "solar-panel-systems", caption: "Solar Panels Systems" },
        { src: "ev-charging-systems", caption: "EV Charging Systems" },
        { src: "energy-storage-batteries", caption: "Energy Storage & Batteries" },
        { src: "hvac-systems", caption: "HVAC Systems" },
        { src: "solar-heaters", caption: "Solar Heaters" },
        { src: "smart-energy-devices", caption: "Smart Energy Devices" },
    ];

    return (
        <section
        id="deploy"
        className="flex flex-col justify-center items-center text-center w-full max-w-[1280px] px-4"
        >
        <h2>
            What We Help you <GradientText>Deploy</GradientText>
        </h2>

        <div className="flex justify-center items-center w-full max-w-[1179px] z-20 mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            {images.map((image, index) => {
                const videoRef = useRef<HTMLVideoElement>(null);

                const handleMouseOver = () => {
                if (videoRef.current) {
                    videoRef.current.play();
                }
                };

                const handleMouseOut = () => {
                if (videoRef.current) {
                    videoRef.current.pause();
                }
                };

                return (
                <div
                    key={index}
                    className="relative flex justify-center items-start 
                    w-full group
                    h-[250px] sm:h-[300px] md:h-[350px] 
                    rounded-[20px] overflow-hidden"
                    
                >
                    <video
                    ref={videoRef}
                    className="absolute w-full h-full aspect-square object-cover rounded-[20px]"
                    src={`/deploy/${image.src}.mp4`}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    loop
                    muted
                    width={0}
                    height={0}
                    />
                    {/* Backdrop with Icon and Text */}
                    <div
                    className="absolute inset-0 flex flex-col justify-center items-center 
                    bg-[#c3cdd6ba] dark:bg-[#7e8893b2] backdrop-blur-[4px] p-2
                    transition-all duration-300 rounded-[20px] 
                    group-hover:top-6 group-hover:left-6 group-hover:right-6 group-hover:bottom-auto 
                    group-hover:rounded-[15px] group-hover:min-h-[70px] "
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    >
                    <div
                        className="flex flex-col sm:flex-row group-hover:flex-row justify-center items-center gap-4 transition-all duration-700 group-hover:gap-2"
                    >
                        <Image
                        title="Deploy Icon"
                        className="w-12 h-12 z-10 transition-all duration-700 group-hover:w-9 group-hover:h-9"
                        src={`/deploy/${image.src}.svg`}
                        alt="deploy icon"
                        width={48}
                        height={48}
                        />
                        <span
                        className="text-primary text-center font-semibold tracking-wide 
                            text-lg md:text-xl z-10 group-hover:text-base transition-all duration-700"
                        >
                        {image.caption}
                        </span>
                    </div>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        </section>
    );
}
