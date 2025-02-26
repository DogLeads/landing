"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import BarGraphCard from './ui/bar-graph-card';
import LineGraphCard from './ui/line-graph-card';

export default function MarketInsights() {

    const barGraphsData = [
        {
            title: 'The Current Landscape',
            subtitle: 'Existing Buildings and Annual Cost',
            graphMax: 400,
            barData: [
                {
                    barTitle: 'Existing Buildings (In Millions)',
                    barSubtitle: '130M',
                    barPercent: 35,
                    barColor: '#7842E8'
                },
                {
                    barTitle: 'Annual Cost (In Billions)',
                    barSubtitle: '400B',
                    barPercent: 100,
                    barColor: '#78E672'
                }
            ],
        },
        {
            title: 'Future Growth And Opportunities',
            subtitle: 'New Constructions Expected by 2050',
            graphMax: 60,
            barData: [
                {
                    barTitle: 'New Homes (In Millions)',
                    barSubtitle: '4M',
                    barPercent: 66,
                    barColor: '#FFCD3F'
                },
                {
                    barTitle: 'New Commercial Space (In billon sq ft)',
                    barSubtitle: '60B',
                    barPercent: 100,
                    barColor: '#FD7561'
                }
            ],
        },
        {
            title: 'Energy Burden On Households',
            subtitle: 'Households Struggling to Pay Energy Bills',
            graphMax: 50,
            barData: [
                {
                    barTitle: 'All Households (%)',
                    barSubtitle: '25%',
                    barPercent: 50,
                    barColor: '#FF9D9D'
                },
                {
                    barTitle: 'Low-Income Households (%)',
                    barSubtitle: '50%',
                    barPercent: 100,
                    barColor: '#EB3D4D'
                }
            ],
        }
    ]

    const lineGraphData = {
        title: 'The Current Landscape',
        subtitle: 'Existing Buildings and Annual Cost',
        description: 'The DOE aims to reduce building emissions by 65% by 2035 and 90% by 2050. Achieving these targets requires widespread adoption of energy-efficient technologies and clean energy solutions.'
    }

    // State for tracking the current card index
    const [currentIndex, setCurrentIndex] = useState(0);

    const cardsInfo = [
        {
            link: "Building Energy Costs",
            title: "Energy Costs for Commercial Buildings",
            description: 'There are approximately 130 million buildings in the U.S. with annual energy costs exceeding $400 billion. Upgrading these buildings can significantly reduce costs and environmental impact.',
            color: "#D7DBF6"
        },
        {
            link: "Expected New Constructions",
            title: "Future of New Constructions",
            description: 'By 2050, the U.S. expects 40 million new homes and 60 billion square feet of commercial space. Integrating energy-efficient designs from the start is crucial for long-term sustainability.',
            color: "#CEDCDC"
        },
        {
            link: "Household Energy Costs",
            title: "A Burdening cost of Energy for low-income households",
            description: '25% of all households and 50% of low-income households struggle with energy costs. Energy-efficient upgrades can alleviate this financial burden and improve quality of life.',
            color: "#EDEDED"
        },
        {
            link: "Emission Reduction Targets",
            title: "Target Building emission reduction by the DOE",
            color: "#D1E2C4"
        }
    ]

    const cardVariants: Variants = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: {
                duration: 0.5,
                ease: "easeIn",
            },
        },
    };

    return (
        <section
            className="relative flex flex-col justify-center items-center w-full
            bg-[url(/job-openings/solar-panels.webp)] bg-cover bg-center px-4"
            >
            <div className="bg-[#ECF5FF] dark:bg-[#212529] opacity-[0.93] w-full h-full absolute z-10"></div>
            <h2 className="mt-16 mb-8 text-center z-20">Market Insight</h2>

            {/* Navigation Text Links */}
            <div className="flex justify-center items-center space-x-4 sm:space-x-8 mb-8 z-20">
                {cardsInfo.map((cardInfo, index) => (
                <div key={index} className="group">
                    <button
                        onClick={() => setCurrentIndex(index)}
                        className={`text-small md:text-sm group-hover:text-primary 
                            ${currentIndex === index ? "text-primary" : "text-gray-700 dark:text-gray-200"}`
                        }
                    >
                        {cardInfo.link}
                    </button>
                    <svg
                    className={`${
                        currentIndex === index
                        ? "visible"
                        : "invisible group-hover:visible"
                    }`}
                    viewBox="0 0 110 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M0.5 1H110" stroke="#21606A" />
                    </svg>
                </div>
                ))}
            </div>

            {/* Active Card */}
            <motion.div
                key={currentIndex} // Ensures animation triggers on key change
                className="flex flex-col md:flex-row mb-20 bg-[#D7DBF6] px-[30px] md:px-16 lg:px-[108px] py-10 md:py-16 rounded-15 max-w-[1280px] gap-5 z-20 text-[#212529]"
                style={{ backgroundColor: cardsInfo[currentIndex].color }}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <div className="flex gap-5 items-center">
                    <div className="flex flex-col md:gap-8 lg:gap-12 max-w-[522px]">
                        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter">
                        {cardsInfo[currentIndex].title}
                        </h4>
                        <p>
                        {currentIndex > barGraphsData.length - 1
                            ? lineGraphData.description
                            : cardsInfo[currentIndex].description}
                        </p>
                    </div>
                </div>
                {currentIndex < barGraphsData.length ? (
                    <BarGraphCard barGraphData={barGraphsData[currentIndex]} />
                ) : (
                    <LineGraphCard lineGraphData={lineGraphData} />
                )}
            </motion.div>
        </section>
    );
}