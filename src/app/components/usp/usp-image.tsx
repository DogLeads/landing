import Image from "next/image";
import { motion } from "framer-motion";
import { USPImageProps } from "./types";
import { fromLeft, fromRight, fromRightLong } from "./animations";

export default function UspImage({src, iconSrc, accentVariant, children}: USPImageProps) {

    return (
        <motion.div 
            initial="offscreen"
            whileInView="onscreen" 
            viewport={{ once: false, amount: 0.6 }}  
            className="relative w-full max-w-[415px] h-auto z-10 p-4"
        >
            {/* Circular image container */}
            <div 
                className="relative flex justify-center items-center p-4 lg:p-6 
                rounded-b-full rounded-tr-full shadow-xl bg-white dark:bg-[#353b42] z-10 max-w-[415px] max-h-[415px] w-full h-auto "
                style={{
                    borderRadius: accentVariant ? "50% 0% 50% 50%" : "0% 50% 50% 50%",
                    zIndex: 0
                }}>
                    
                <div className="full  max-w-[370px] max-h-[370px] 
                    overflow-hidden opacity-45 sm:opacity-100 rounded-full">
                    <video className="full aspect-square object-cover"
                        src={src}
                        autoPlay
                        loop
                        playsInline
                        muted 
                        width={370}
                        height={370}
                    >
                        
                    </video>
                </div>

                {/* Gradient dot with icon */}
                <motion.div variants={fromRightLong}  
                    className="absolute bottom-0 -right-[5%] z-0 
                        w-16 h-16 flex justify-center items-center
                        bg-accent-gradient rounded-full
                        shadow-[0px_4px_40px_rgba(0,198,198,0.45)]"
                    >
                        <Image title="Icon Decoration"
                            src={iconSrc}
                            alt="SVG Icon"
                            width={36}
                            height={0} 
                        />
                </motion.div>
            </div>

            {/* Unique decorations (Cards, etc.) passed as */ children}

            {/* Small neon green dot */}
            <motion.img variants={fromRight} 
                title="Small Green Dot" alt="Small Green Dot SVG"
                src={'/usp-list/dot-small.svg'} width={21} height={21} 
                className="absolute -z-10 -top-4 right-[12%]"
                style={accentVariant ? {left: '12%'} : {right: '12%'}}
            />

            {/* Large green dot */}
            <motion.img variants={fromLeft}
                title="Large Green Dot" alt="Large Green Dot SVG"
                src={'/usp-list/dot-large.svg'} width={65} height={66}
                className="absolute z-10 -bottom-6 left-[0%]"
            />

            {/* Very small dots pattern */}
            <motion.img variants={fromRight}
                title="Dots" alt="Dots SVG"
                src={'/usp-list/dots.svg'} width={148} height={148} 
                className="absolute -z-10 -bottom-[15px] right-[3%] dark:invert"
            />
        </motion.div>
    )
}