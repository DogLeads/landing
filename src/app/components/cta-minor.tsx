"use client";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import GradientBorderBox from './ui/gradient-border-box';
import { motion, Variants } from "framer-motion";
import GradientText from "./ui/gradient-text";
import ButtonCustom from "./ui/button-custom";
import InquiryForm from './inquiry-form';
import { useState } from 'react';

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
        title: "Lead Qualification",
        text: ""
    },
    {
        svgSrc: "/cta-minor/time-saving.svg",
        title: "Owner Data",
        text: ""
    },
    {
        svgSrc: "/cta-minor/innovation.svg",
        title: "Energy Upgrade Potential",
        text: ""
    },
    {
        svgSrc: "/cta-minor/empowerment.svg",
        title: "CRM Enrichment",
        text: ""
    },
    {
        svgSrc: "/cta-minor/building-assessment.svg",
        title: "Building Assessment",
        text: ""
    },
    {
        svgSrc: "/cta-minor/energy-sales.svg",
        title: "Energy Sales Automation",
        text: ""
    },
]

type InfoBoxProps = {
    svgSrc: string,
    title: string,
    text: string,
}
function InfoBox({svgSrc, title, text}: InfoBoxProps) {
    return (
        <div className="relative w-full h-full flex flex-col justify-center p-8 border border-[#E0DFE2] text-xs sm:text-sm md:text-base bg-white rounded-[15px] shadow-lg hover:border-primary">
            <Image className="w-6 h-6 lg:w-9 lg:h-9" src={svgSrc} alt="" width={36} height={36}/>
            <h5 className="text-[#858585] text-base sm:text-lg lg:text-lg font-bold">{title}</h5>
            <p className="text-sm lg:text-base">{text}</p>
        </div>
    )
}


export default function CtaMinor() {
    const router = useRouter();
    const [isInquiryFormOpen, setInquiryFormOpen] = useState(false);

    return (
        <section className="relative flex flex-col justify-center items-center w-full max-w-[1440px] p-4 ">
            
            {/** CTA container - gradient border, absolute position*/}
                <div className="flex relative flex-col justify-center items-center text-center 
                    px-4 sm:px-12 max-h-[488px] pt-0 pb-8 min-h-[500px] ">
                    
                    <h2 className=" relative leading-snug">
                        Empowering <GradientText>American Businesses</GradientText> to Sell More Energy Upgrades
                    </h2>
                    <p className="text-base sm:text-lg max-w-[666px] pb-10 font-medium">
                        Identify the optimal residential heating and cooling for efficiency, deploy Solar, HVAC, and energy storage systems and make real money faster.
                    </p>
                    <div className="flex gap-[18px]">
                        <ButtonCustom onClick={() => setInquiryFormOpen(true)} width={154}>
                            Contact Us
                        </ButtonCustom>
                        <InquiryForm isOpen={isInquiryFormOpen} setIsOpen={setInquiryFormOpen} />
                        <ButtonCustom
                            variant="outline"
                            onClick={() => router.push('/careers')}
                            width={154}
                        >
                            Join Now
                        </ButtonCustom>
                    </div>
                    
                </div>
            
            <div className="flex flex-col md:flex-row w-full justify-center gap-4 lg:gap-8 ">
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