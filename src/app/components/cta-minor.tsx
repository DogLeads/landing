"use client";
import Image from "next/image";
import GradientButton from "./ui/gradient-button";
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

const ctaVariants: Variants = {
    offscreen: {
        scale: .5,
    },
    onscreen: {
        opacity: 1,
        scale: 1,
    transition: {
        type: "spring", damping: 30, stiffness: 200
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
        <div className="flex flex-col justify-evenly max-w-[305px] rounded-15 p-4 lg:p-8 
            border-solid border border-[#E0DFE2]">
            <Image className="w-6 h-6 lg:w-9 lg:h-9" src={svgSrc} alt="" width={36} height={36}/>
            <h4 className="text-[#858585] text-xl lg:text-2xl">{title}</h4>
            <p className="text-sm lg:text-base">{text}</p>
        </div>
    )
}


export default function CtaMinor() {
    
    return (
        <section className="relative flex flex-col justify-center items-center w-full max-w-[1440px] p-4">
            
            {/** CTA container - gradient border, absolute position*/}
                <div className="flex relative flex-col justify-center items-center text-center 
                    px-4 sm:px-12 max-h-[488px] py-8 min-h-[500px] ">
                    
                    <h2 className="mb-10 relative leading-snug">
                        Empowering <GradientText>American Businesses</GradientText> to Sell More{' '}
                        <span className="relative inline-block text-nowrap text-gray-800">Energy Upgrades
                            <Image title="Energy Upgrades Accent"
                                className="absolute z-10 top-[32px] sm:top-[36px] md:top-[48px] sm:left-0 w-[400px]"
                                src={"/accents/accent2.svg"}
                                alt="Title Accent SVG"
                                width={400}
                                height={0}
                            />
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg max-w-[666px] pb-10 font-medium">
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
            
            <div className="flex flex-col md:flex-row w-full justify-center gap-4 lg:gap-8">
            {/* Image Container */}
            <GradientBorderBox borderRadius={16}
                className="bg-[#f4fafd] rounded-15 max-w-[630px] h-[450px] lg:h-[559px]"
            >
                <Image title="Houses Background Image"
                    className=" w-[609px] rounded-[90px] mix-blend-overlay
                    transform scale-[1.25] translate-x-16 -translate-y-20"
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
                    className="absolute z-30 top-[100px] md:top-[150px] w-[500px]">
                    <motion.div variants={middleVariants} className="absolute z-30"> 
                    <Image title="House Image" className="w-auto h-auto"
                        src={"/cta-minor/house.png"}
                        alt="House"
                        
                        width={472}
                        height={269}
                        />
                    </motion.div>
                
                    <motion.div variants={leftVariants} className="absolute z-30 -top-[50px] left-[60px] backdrop-blur-sm">
                        <Image  title="Gradient Logo Border"
                            src={"/cta-minor/polygon1.svg"}
                            alt="Polygon SVG 1"
                            width={136}
                            height={141}
                        />
                    </motion.div>
                    
                    <motion.div variants={leftVariants} className="absolute z-30 -top-[20px] left-[80px] w-[95px]">
                        <Image title="ClimateForge Logo"
                            src={"/logo.png"}
                            alt="ClimateForge Logo"
                            width={84}
                            height={76}
                        />
                    </motion.div>
                    <motion.div variants={rightVariants} className="absolute z-30 -top-[55px] right-[10%]">
                        <Image title="Person Polygon"
                            src={"/cta-minor/polygon2.svg"}
                            alt="Polygon SVG 2"
                            width={180}
                            height={164}
                        /> 
                    </motion.div>
                </motion.div>
                
                {/* Background circle decoration */}
                <div className="absolute z-20 top-[0px] md:top-[45px] w-[800px] h-[427px] overflow-clip">
                    <Image title="Circle Background Decoration"
                        className="absolute opacity-25 transform scale-110"
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