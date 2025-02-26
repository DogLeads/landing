"use client"
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import GradientText from './ui/gradient-text';
import Link from 'next/link';

type LinkProps = {
    href: string,
    children: ReactNode
}
const LinkCustom = ({href, children}: LinkProps) => {
    return (
        <div className='group overflow-hidden overflow-ellipsis'>
            <Link href={href} className='group-hover:text-primary '>
                {children}
            </Link>
            <svg className='invisible group-hover:visible' viewBox="0 0 110 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 1H110" stroke="#21606A"/>
            </svg>
        </div>
    )
}

export default function WhyChooseUs() {
    const [currentSection, setCurrentSection] = useState(0);
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]); // Store refs for each section

    const infoBlocks = [
        { caption: 'Find Leads', title: 'Discover Quality Leads', text: 'Our energy modeling technology identifies the best energy upgrade opportunities in your area. Qualifies properties and owners, ensuring you focus on high-potential leads for maximum efficiency and impact.', image: '/info-scroll/discover-quality-leads.gif', svg: "/info-scroll/find-leads.svg" },
        { caption: 'CRM Assistance', title: 'AI CRM Assistance', text: 'Easily determine the next steps for each lead, track statuses and enhance team collaboration, ensuring that nothing falls through the cracks.', image: '/info-scroll/crm-assistance.gif', svg: "/info-scroll/crm-assistance.svg" },
        { caption: 'Product Feature', title: 'Powerful Energy Assessments', text: 'Our energy modeling provides energy system simulations that can recommend the most suitable energy upgrades for customers. With only limited information, our technology can estimate the cost of the power consumption.', image: '/info-scroll/energy-assessment.gif', svg: "/info-scroll/product-feature.svg" },
        { caption: 'System Design', title: 'Bespoke System Design', text: 'Impress customers with comprehensive quotes that include system designs, pricing, and energy calculations.  Enjoy a seamless experience with easy brand and model switching.  Present all details upfront to minimize confusion and questions.', image: '/info-scroll/system-design.gif', svg: "/info-scroll/system-design.svg" },
    ];

    // Observe which section is most visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const mostVisible: IntersectionObserverEntry | null = entries.reduce(
                    (mostVisible, entry) => {
                        return entry.intersectionRatio > (mostVisible?.intersectionRatio || 0)
                            ? entry
                            : mostVisible;
                    },
                    null as IntersectionObserverEntry | null
                );
    
                if (mostVisible?.target) {
                    const index = sectionsRef.current.findIndex((el) => el === mostVisible.target);
                    if (index !== -1) {
                        setCurrentSection(index);
                    }
                }
            },
            { threshold: 0.6 }
        );
    
        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });
    
        return () => observer.disconnect();
    }, []);

        return (
            <section className='flex flex-col items-center w-full px-4 md:px-8'>
                {/** TITLE AND LINKS */}
                <div className='flex flex-col justify-center items-center text-center max-w-[850px] pb-20'>
                    <h2 className=' font-bold leading-[110%]'>
                        Why <GradientText>Renewable Energy</GradientText> Contractors Choose Our Product
                    </h2>
                    <div className='flex gap-6 sm:gap-8 pt-8 text-[#858585] dark:text-gray-300 text-sm overflow-hidden overflow-ellipsis'>
                        <LinkCustom href={'/#Find Leads'}>
                            Find Leads
                        </LinkCustom>
                        <LinkCustom href={'/#CRM Assistance'}>
                            CRM Assistance
                        </LinkCustom>
                        <LinkCustom href={'/#Product Feature'}>
                            Product Feature
                        </LinkCustom>
                        <LinkCustom href={'/#System Design'}>
                            System Design
                        </LinkCustom>
                    </div>
                </div>
                
                <div className='flex w-full flex-col justify-center items-center md:flex-row md:justify-evenly md:items-start'>
                    {/* Scrolling Text Section */}
                    <div className='sm:mr-8'>
                        {infoBlocks.map((block, index) => {
                        const ref = React.useRef(null);
                        const isInView = useInView(ref, { amount: 0.5 }); // Adjust the threshold to 50%
                        
                        React.useEffect(() => {
                            if (isInView) {
                                setCurrentSection(index);
                            }
                        }, [isInView, index]);

                        return (
                            <motion.div
                                ref={ref}
                                id={block.caption}
                                key={index}
                                className="flex flex-col max-w-[490px] justify-center md:justify-center md:min-h-[100vh]"
                            >
                                <div className="flex items-center gap-1">
                                    <Image className="w-4 h-4"
                                        priority
                                        width={16}
                                        height={16}
                                        src={block.svg}
                                        alt={block.caption}
                                    />
                                    <p className="text-sm">{block.caption}</p>
                                </div>
                                <h3 className="text-2xl md:text-3xl lg:text-[32px] py-4 lg:py-6">{block.title}</h3>
                                <p>{block.text}</p>

                                <Image className="object-contain w-[630px] rounded-15 mb-16 mt-6 visible md:invisible"
                                    src={block.image}
                                    alt={block.title}
                                    width={630}
                                    height={592}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Sticky Image Section */}
                <div className="sticky top-[25%] hidden sm:block bg-accent-gradient-opaque rounded-[18pt] min-w-[400px] max-w-[630px] w-full">
                    <div className="relative w-full aspect-[630/592] max-w-[630px]">
                        <motion.div
                            className='absolute inset-0'
                            key={currentSection}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ opacity: { duration: 1 }, ease: "easeInOut" }}
                        >
                            <Image
                                src={infoBlocks[currentSection].image}
                                alt={infoBlocks[currentSection].title}
                                className="object-cover rounded-[18pt]"
                                fill sizes='(max-width: 630px) 100vw, (max-width: 630px) 50vw, 33vw'
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
