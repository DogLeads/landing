"use client";
import Image from "next/image";
import { ReactNode } from "react";
import { motion, useDragControls } from "framer-motion"

type ClientCardProps = {
    imageSrc: string
    imageWidth?: number
    imageHeight?: number
    children?: ReactNode
}

const ClientCard = ({imageSrc, imageWidth, imageHeight, children}: ClientCardProps) => {
    const controls = useDragControls()
    return (
        <motion.div className="flex items-center" 
            whileDrag={{ zIndex: 20, filter: "grayscale" }} 
            drag dragSnapToOrigin 
            dragControls={controls} 
            dragElastic={0.2} 
            dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            }}>
            <div className="w-[224px] mx-14 group/card hover:scale-110 
                    transition-all duration-300 ease-in-out"
                >
                
                    <Image title="Client Logo"
                        className="h-auto grayscale group-hover/card:grayscale-0
                        transition-all duration-300 ease-in-out" draggable="false"
                        src={imageSrc}
                        alt="Client Logo"
                        width={imageWidth}
                        height={imageHeight} 
                        sizes="100vh"
                    />
                
            </div>
        </motion.div>
    )
}

const clients = [
    { imageSrc: "/client-list/sunpower_logo.svg", imageWidth: 200, imageHeight: 27 },
    { imageSrc: "/client-list/palmetto-logo.webp", imageWidth: 200, imageHeight: 27 },
    { imageSrc: "/client-list/lg-logo.png", imageWidth: 200, imageHeight: 27 },
    { imageSrc: "/client-list/goodman-logo.webp", imageWidth: 200, imageHeight: 27 },
    { imageSrc: "/client-list/sunrun-logo.webp", imageWidth: 200, imageHeight: 27 },
];

const ClientCards = () => {
    return (
        <div className="inline-flex slide group-hover:pause">
            {clients.map((client, index) => (
                <ClientCard 
                    key={index}
                    imageSrc={client.imageSrc}
                    imageWidth={200}
                    imageHeight={27}
                />
            ))}
        </div>
    );
};

export default function ClientList() {
    
    return (
        <section className="text-center w-full relative overflow-hidden">
            
            {/* Client List Title */}
            <h2 className="mb-8 text-[32px]">
                Trusted By Industry Leaders
            </h2>
            <div className="relative after:z-10 after:bg-gradient-to-r from-transparent to-[#FFF] dark:to-[#212529]
                after:absolute after:top-0 after:right-0 after:w-[100px] after:h-full">
            {/* Client Card Carousel */}
            <div className="flex whitespace-nowrap group hover:pause
                before:z-10 before:bg-gradient-to-r from-white dark:from-[#212529] to-transparent 
                before:absolute before:top-0 before:left-0 before:w-[100px] before:h-full">
                <ClientCards/>
                <ClientCards/>
                <ClientCards/>
            </div>
            </div>
            
        </section>
    );
}