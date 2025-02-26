'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ButtonCustom from './ui/button-custom'
import Image from 'next/image'

const featuredArticles = [
    { 
        name: "Times", 
        logo: "/logos/the-industry-times-logo.png", 
        link: "https://theindustrytimes.com/climateforge-unveils-ai-platform-for-renewable-energy-projects/",
        title: "ClimateForge Unveils AI Platform for Renewable Energy Projects",
        description: "Check out our featured articles about ClimateForge and how our company is helping in an effort to decarbonize using advanced technologies.",
        image: "/featured/article-image.png"
    },
    { 
        name: "LA Tribune", 
        logo: "/logos/cropped-latribune.png", 
        link: "https://thelosangelestribune.com/2024/12/18/decarbonizing-the-future-the-role-of-climateforge-in-advancing-decarbonization-technologies/",
        title: "Decarbonizing the Future: The Role of ClimateForge in Advancing Decarbonization Technologies",
        description: "LA Tribune explores how ClimateForge is paving the way for sustainable energy solutions with AI-driven technology.",
        image: "/featured/article-image.png"
    },
    { 
        name: "Amplify Weekly", 
        logo: "/logos/amplify-logo.png", 
        link: "https://amplifyweekly.com/two-iit-graduates-transform-renewable-energy-through-innovative-ai-platform/",
        title: "Two IIT Graduates Transform Renewable Energy Through Innovative AI Platform",
        description: "Discover how AI is transforming the renewable energy sector with breakthrough innovations.",
        image: "/featured/article-amplify.png"
    },
];

export default function Featured() {
    const [activeArticle, setActiveArticle] = useState(featuredArticles[0]);

    return (
        <div className='flex flex-col max-w-[1280px] mt-8 px-4 sm:px-8 w-full'>
            <hr className="flex w-full border border-[#858585] dark:border-white mb-6 " />

            <div className='flex flex-col items-center sm:items-start sm:flex-row sm:justify-between'>
                <p className='text-2xl font-medium mb-4 flex-0'>Featured In</p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-end gap-4 mb-6 sm:mb-12 flex-1">
                    {featuredArticles.map((article, index) => (
                        <div 
                            key={index} 
                            onMouseEnter={() => setActiveArticle(article)}
                            onClick={() => window.open(article.link, "_blank")}
                            className="cursor-pointer transition-all  duration-500 ease-in-out group  rounded-lg flex justify-center items-center"
                        >
                            <ButtonCustom variant='outline' className="p-4 rounded-lg flex justify-center items-center w-[180px] sm:w-[230px]">
                                <Image 
                                    src={article.logo} 
                                    alt={article.name} 
                                    width={140}
                                    height={60}
                                    className="object-contain dark:invert h-5"
                                />
                            </ButtonCustom>
                        </div>
                    ))}
                </div>
                
            </div>   
                
            
            <h2 className="text-xl sm:text-2xl font-bold mb-4">{activeArticle.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{activeArticle.description}</p>   

            <div className="flex flex-col" >
                <AnimatePresence mode="wait">
                <motion.div
                    key={activeArticle.image}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className=""
                >
                    <Image 
                        className="rounded-15 max-h-[600px] "
                        src={activeArticle.image}
                        alt="Article Image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                    />
                </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}