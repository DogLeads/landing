"use client";
import { useState } from "react";
import GradientText from "./ui/gradient-text";
import Link from "next/link";

type FAQItemProps = {
    question: string;
    answers: string[];
    link?: string;

    isOpen: boolean;
    onToggle: () => void;
};

function FAQItem({ question, answers, link, isOpen, onToggle }: FAQItemProps) {
    return (
        <div onClick={onToggle} className="w-full max-w-[630px] p-8 border rounded-15 cursor-pointer">
            <div
                className="flex justify-between items-center w-full text-left focus:outline-none"
                
            >
                <h3 className={`max-w-[477px] font-bold text-lg md:text-xl lg:text-2xl transition-all duration-300 ${isOpen ? "text-primary" : ""}`}>
                    {question}
                </h3>
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center ml-2"> {/* Ensures uniform size */}
                    {isOpen ? (
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66699 16H25.3337" stroke="#21606A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 6.66638V25.333" stroke="#212529" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.66602 15.9995H25.3327" stroke="#212529" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                </div>
            </div>
            <div className={isOpen ? "pt-2 md:pt-4 lg:pt-6" : ""}>
                {isOpen &&
                answers.map((ans, index) => (
                    <span key={index} className="text-grey2 dark:text-gray-300 text-sm sm:text-base tracking-tighter">
                    {ans}
                    {link && index === 0 ? (
                        <Link href={link} className="text-[#4A89DB] font-semibold hover:opacity-85">
                        <GradientText>pricing section</GradientText>
                        </Link>
                    ) : null}
                    
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqData: Omit<FAQItemProps, "isOpen" | "onToggle">[] = [
        {
            question: "What is the pricing?",
            answers: [
                "ClimateForge offers reasonably priced services, catering to both individuals and enterprises. You can find detailed pricing information in the ",
                " on this website. The options are designed to be affordable and accessible, whether you're looking for individual solutions or enterprise-level services. ",
            ],
            link: "/#pricing",
        },
        {
            question: "What services do you offer?",
            answers: [
                "Our solutions are tailored for the residential and commercial sectors, offering tools to monitor, report, and reduce emissions by deploying physical equipment in the perfect locations, which can help organizations meet their carbon reduction goals.",
            ],
            },
        {
            question: "Where do you operate?",
            answers: [
                "ClimateForge typically operates globally or in regions with strong energy driven economies or industrial sectors. Our services are available wherever there is a demand for advanced environmental management, energy upgrade deployment, emissions monitoring and where we find friendly environmental policies for renewable energy. Our current focus is the US and the EU.",
            ],
            },
        {
            question: "How can I be sure about the compliance and safety?",
            answers: [
                "ClimateForge ensures compliance and safety through rigorous energy monitoring and reporting tools, which help organizations adhere to environmental regulations. Our solutions include real-time data analytics and visualization to provide a clear picture of emissions and energy potential, ensuring that companies can proactively manage and reduce their teams and environmental impact while making profits.",
            ],
        },
    ];

    return (
        <section
        id="faq"
        className="flex flex-col md:flex-row justify-center items-center md:items-start w-full px-4"
        >
        <div className="text-center flex flex-col justify-center items-center md:justify-normal md:items-start md:text-left pb-8 px-2 w-full max-w-[630px]">
            <h2 className="leading-tight">Frequently Asked</h2>
            <h2 className="leading-tight">
            <GradientText>Questions</GradientText>
            </h2>
            <p className="mt-6 max-w-[430px] text-lg">
            Have questions? We've got answers. For everything else email us on team@climateforge.ai
            </p>
        </div>

        <div className="h-full w-full max-w-[630px] flex flex-col gap-[10px] items-end">
            {faqData.map((item, index) => (
            <FAQItem
                key={index}
                {...item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
            ))}
        </div>
        </section>
    );
}
