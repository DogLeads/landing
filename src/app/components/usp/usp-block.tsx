import { useState } from "react";
import { motion } from "framer-motion";
import { USPBlockProps } from "./types";
import GradientText from "../ui/gradient-text";
import UspImage from "./usp-image";

export default function UspBlock({title, heading, description, videoSrc, iconSrc, accentVariant, className, children}: USPBlockProps) {
    
    const [currentValue, setCurrentValue] = useState("0");

    // This function handles the number animation logic
    const animateNumber = () => {
        // Extract numeric part from the target value
        const numericPart = parseFloat(description[1]);
        const duration = 1200; // 1.2 seconds for the animation
        const stepTime = Math.abs(Math.floor(duration / numericPart));

        const hasPercent = description[1].includes("%");
        const hasPlus = description[1].includes("+");
        const suffix = hasPercent ? "%" : "";
        const prefix = hasPlus ? "+" : "";

        let currentNumber = 0;

        const incrementNumber = () => {
        setCurrentValue(() => {
            if (currentNumber < numericPart) {
            currentNumber++;
            return `${prefix}${currentNumber}${suffix}`;
            }
            return `${prefix}${numericPart}${suffix}`; // Ensure it does not go beyond the target
        });
        };

        const intervalId = setInterval(incrementNumber, stepTime);

        return () => clearInterval(intervalId);
    };

    return (
        <div
            className={`relative flex flex-col items-center justify-center text-center rounded-15
                sm:text-left sm:flex-row py-[58px] px-[25px] md:px-[50px] ${className}`}>
            
            <div className="flex flex-col z-10 pr-[52px] pb-4 sm:pb-0 gap-4 sm:gap-6 md:gap-8 lg:gap-12 pl-6">
                {/** TITLE */}
                <h3>{title}</h3>

                {/** HEADING */}
                <h4>{heading}</h4>

                {/** DESCRIPTION */}
                <p>
                    {description[0]} 
                    <motion.span initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }} // Only animate once
                        onAnimationStart={animateNumber}>
                        <GradientText className="text-lg font-bold ">
                            {currentValue}
                        </GradientText>
                    </motion.span>
                    {description[2]}
                </p>
            </div>

            {/** IMAGE */}
            <UspImage src={videoSrc} iconSrc={iconSrc} accentVariant={accentVariant}>
                {children}
            </UspImage>

        </div>
    );
}