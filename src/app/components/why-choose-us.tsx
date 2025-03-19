"use client";
import React, { useState, ReactNode } from 'react'
import GradientText from './ui/gradient-text'
import Link from 'next/link'
import { motion } from 'framer-motion';

import Image from 'next/image';

type LinkProps = {
    href: string,
    children: ReactNode
}
const LinkCustom = ({href, children}: LinkProps) => {
    return (
        <div className='overflow-auto group'>
            <Link href={href} className='group-hover:text-primary'>
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

    // Info blocks with image paths
    const infoBlocks = [
        {
            caption: 'Find Leads',
            title: 'AI Leads Finder',
            text: 'Use Map search or enter custom criteria such as roof size and geographic location to find deals. ClimateForge is a digital spot knocker with precise energy and owner information.',
            image: '/info-scroll/discover-quality-leads-1-resize.gif',
            svg: "/info-scroll/find-leads.svg",
        },
        {
            caption: 'CRM Assistance',
            title: 'AI CRM Assistance',
            text: 'CRM designed specifically for energy sales roles. ClimateForge\'s AI technology help you easily track statuses and enhance team collaboration.',
            image: '/info-scroll/crm-assistance-1.gif',
            svg: "/info-scroll/crm-assistance.svg",
        },
        {
            caption: 'Product Feature',
            title: 'Custom Enrichments',
            text: 'Add custom enrichments like power consumption and solar potential for deeper lead insights. Our energy modeling suggests optimal upgrades, helping you improve efficiency and save money.',
            image: '/info-scroll/energy-assessment-1.gif',
            svg: "/info-scroll/product-feature.svg",
        },
        {
            caption: 'System Design',
            title: 'Power Modern Living',
            text: 'Impress customers with comprehensive designs and spend less time soliciting buyers and executing contracts.',
            image: '/info-scroll/system-design-1.gif',
            svg: "/info-scroll/system-design.svg",
        },
    ];

    const handleSection = (index: number) => {
        setCurrentSection(index)
    }

    return (
        <section className='flex flex-col items-center w-full px-4 md:px-8'>

            {/** TITLE AND LINKS */}
            <div className='flex flex-col justify-center items-center text-center max-w-[850px] pb-20'>
                <h2 className=' font-bold leading-[110%]'>
                    Why <GradientText>Renewable Energy</GradientText> Contractors Choose Our Product
                </h2>
                <div className='flex gap-8 pt-8 text-[#858585] text-sm'>
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

            {/* SCROLLING INFO AND IMAGE*/}
            <div className="w-full max-w-[1200px]"> {/* Added max-w to the container */}
                {infoBlocks.map((block, index) => (
                    <motion.div
                        id={block.caption}
                        key={index}
                        className={`flex flex-col sm:flex-row items-center gap-8 mb-24 last:mb-0 scroll-mt-32`}
                        whileInView={{
                            transition: { duration: 0.2 },
                        }}
                        onViewportEnter={() => handleSection(index)}
                    >
                        {/* Text Content */}
                        <div className="flex-1 max-w-[490px] text-center sm:text-left"> {/* Center text on small screens, left on larger */}
                            <div className='flex items-center gap-1 justify-center sm:justify-start'> {/* Center icon/caption on small, left on larger */}
                                <Image className='w-4 h-4'
                                    priority
                                    width={16}
                                    height={16}
                                    src={block.svg}
                                    alt={block.caption}
                                />
                                <p className='text-sm'>{block.caption}</p>
                            </div>
                            <h3 className="text-[32px] py-6">{block.title}</h3>
                            <p>{block.text}</p>
                        </div>

                        {/* Image */}
                        <div className="flex-1 flex justify-center"> {/* Center the image */}
                            <Image
                                src={block.image}
                                alt={block.title}
                                className="object-cover rounded-15"
                                width={2000} 
                                height={1600}
                                style={{
                                    maxWidth: '100%',  // Ensures it scales to the container
                                    height: 'auto',    // Keeps aspect ratio
                                }}
                            />

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}