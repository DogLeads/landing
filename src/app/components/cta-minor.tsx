"use client";
import Image from "next/image";
import GradientBorderBox from './ui/gradient-border-box';
import { motion, Variants } from "framer-motion";
import GradientText from "./ui/gradient-text";
import ButtonCustom from "./ui/button-custom";

const leftVariants: Variants = {
    offscreen: {
        x: '-30%',
        opacity: 0
    },
    onscreen: {
    x: 0,
    opacity: 1,
    
    transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6
    }
    }
};

const rightVariants: Variants = {
    offscreen: {
        x: '30%',
        opacity: 0
    },
    onscreen: {
    x: 0,
    opacity: 1,
    
    transition: {
        type: { type: "inertia", velocity: 50 },
        
        duration: 0.9
    }
    }
};

const middleVariants: Variants = {
    offscreen: {
        
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        
    transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
    }
    }
};

const infoBoxData = [
    {
        svgSrc: "/cta-minor/precision.svg",
        title: "Precision",
        text: "ClimateForge is a digital spot knocker with precise energy and owner information."
    },
    {
        svgSrc: "/cta-minor/time-saving.svg",
        title: "Time-Saving",
        text: "With ClimateForge, you can spend less time soliciting buyers and executing contracts."
    },
    {
        svgSrc: "/cta-minor/innovation.svg",
        title: "Innovation",
        text: "ClimateForge's AI technology help you easily track statuses and enhance team collaboration."
    },
    {
        svgSrc: "/cta-minor/empowerment.svg",
        title: "Empowerment",
        text: "Utilities, energy service companies and homeowners can equip for efficiency, savings and grid impact."
    },
]

type InfoBoxProps = {
    svgSrc: string,
    title: string,
    text: string,
}
function InfoBox({svgSrc, title, text}: InfoBoxProps) {
    return (
        <div className="flex flex-col justify-evenly max-w-[350px] lg:max-w-[305px] rounded-15 p-4 lg:p-8 
            border-solid border border-[#E0DFE2]">
            <Image className="w-6 h-6 lg:w-9 lg:h-9" src={svgSrc} alt="" width={36} height={36}/>
            <h4 className="text-[#858585] dark:text-[#cecece] text-base sm:text-lg md:text-xl lg:text-2xl overflow-ellipsis overflow-hidden">{title}</h4>
            <p className="text-sm lg:text-base">{text}</p>
        </div>
    )
}


export default function CtaMinor() {
    
    return (
        <section className="relative flex flex-col justify-center items-center w-full max-w-[1440px] p-4">
            
            {/** CTA container - gradient border, absolute position*/}
                <div className="flex relative flex-col justify-center items-center text-center 
                    px-4 sm:px-12 max-h-[488px] py-8 min-h-[500px] gap-10">
                    
                    <h2 className="max-w-[820px] relative leading-snug">
                        Empowering <GradientText>American Businesses</GradientText> to Sell More Energy Upgrades
                    </h2>
                    <p className="text-base sm:text-lg max-w-[666px] font-medium">
                        Identify the optimal residential heating and cooling for efficiency, deploy Solar, HVAC, and energy storage systems and make real money faster.
                    </p>
                    <div className="flex gap-[18px]">
                        <ButtonCustom onClick={() => window.open('https://calendly.com/giovanni-climateforge-qttf', '_blank', 'noopener,noreferrer')} width={154}>
                            Contact Us
                        </ButtonCustom>
                        <ButtonCustom variant="outline" onClick={() => window.open('https://calendly.com/giovanni-climateforge-qttf', '_blank', 'noopener,noreferrer')} width={154}>
                            Join Now
                        </ButtonCustom>
                    </div>
                    
                </div>
            
            <div className="flex flex-col md:flex-row w-full justify-center gap-4 lg:gap-8 pt-10 lg:pt-20">
            {/* Image Container */}
            <GradientBorderBox borderRadius={16}
                className="bg-[#f4fafd] rounded-15 h-[420px] lg:h-[559px]"
            >
                <Image title="Houses Background Image"
                    className="w-full h-full rounded-[90px] mix-blend-overlay
                    transform scale-[1.25] aspect-square object-cover"
                    src={"/cta-minor/houses.png"}
                    alt="Houses"
                    sizes="100vh"
                    width={500}
                    height={300}
                    style={{ width: '100%' }}
                />
                {/* House + Logo container */}
                <motion.div initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.8 }} 
                    className="absolute flex justify-center items-center z-30  m-auto inset-0">
                        
                    <motion.div variants={middleVariants} className="absolute z-30"> 
                        <Image title="House Image" className="w-auto h-auto"
                            src={"/cta-minor/house.png"}
                            alt="House"
                            
                            width={472}
                            height={269}
                        />
                    </motion.div>
                    
                    <motion.div variants={leftVariants} className="absolute flex justify-center z-30 top-[20%] left-[10%] backdrop-blur-sm w-[100px] lg:w-[136px] ">
                        <Image  title="Gradient Logo Border"
                            src={"/cta-minor/polygon1.svg"}
                            alt="Polygon SVG 1"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                            
                        />
                    <motion.div variants={leftVariants} className="absolute z-40 top-[20%] w-[70px] lg:w-[95px]">
                        <Image title="ClimateForge Logo"
                            src={"/logo.png"}
                            alt="ClimateForge Logo"
                            width={84}
                            height={76}
                        />
                    </motion.div>
                    </motion.div>
                    
                    <motion.div variants={rightVariants} className="absolute top-[20%] right-[10%] w-[100px] lg:w-[180px] z-30 ">
                        <Image title="Person Polygon"
                            src={"/cta-minor/polygon2.svg"}
                            alt="Polygon SVG 2"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        /> 
                    </motion.div>
                </motion.div>
                
                {/* Background circle decoration */}
                <div className="absolute flex justify-center items-center z-20 max-w-[600px] max-h-[417px] overflow-clip m-auto inset-0 ">
                    <Image title="Circle Background Decoration"
                        className=" opacity-25 transform scale-150"
                        src="/cta-minor/decoration.png"
                        alt="CTA Background Decoration"
                        width={900}
                        height={516}
                    />
                </div>
            </GradientBorderBox>

            {/** INFO GRID */}
            <div className="grid grid-cols-2 gap-5">
                {infoBoxData.map((infoBox, index) => (
                    <InfoBox key={index} svgSrc={infoBox.svgSrc} title={infoBox.title} text={infoBox.text}/>
                ))}
            </div>
            </div>
        </section>
    );
}