"use client";
import GradientText from "../ui/gradient-text";
import { motion } from "framer-motion";
import UspBlock from "./usp-block";
import UspDecoration from "./usp-decoration";

const uspData = [
    {
        title: ["Conversion-Optimized"],
        heading: "Faster time to market for renewable energy products",
        description: ["Companies using ClimateForge's solutions experience a ", "55%", " faster time to deploy energy upgrades."],
        videoSrc: "/usp-list/conversion-optimized.mp4",
        iconSrc: "/usp-list/icon-react.svg",
        uspDecoration: ["$245.00", "Total Income", "/usp-list/icon-bar-graph.svg"],
        className: "bg-[#CFDDDC] dark:bg-[#96A9A7]",
    },
    {
        title: ["Real Energy Modeling"],
        heading: "Increase in renewable energy adoption",
        description: ["ClimateForge's technology has led to a significant ", "32%", " increase in renewable energy adoption."],
        videoSrc: "/usp-list/real-energy-modeling.mp4",
        iconSrc: "/usp-list/icon-ai.svg",
        accentVariant: true,
        uspDecoration: ["Efficiency", "Savings", "/usp-list/icon-robot.svg"],
        className: "bg-[#C1CDE2] dark:bg-[#7A8BA4]",
    },
    {
        title: ["Impact Assessments"],
        heading: "Reduction In Carbon Emissions",
        description: ["Businesses using ClimateForge help to reduce carbon emissions by more than ", "30%", "."],
        videoSrc: "/usp-list/impact-assessments.mp4",
        iconSrc: "/usp-list/icon-sustainable.svg",
        uspDecoration: ["Save Earth", "Make $", "/usp-list/icon-sun.svg"],
        className: "bg-[#EDEDED] dark:bg-[#A6A6A6]",
    },
];
export default function UspList() {
    return (
        <section className="flex flex-col max-w-[1280px] w-full px-4 md:px-8">
            <h2 className="text-center pb-6 sm:pb-10 md:pb-20">
                The <GradientText>Unique</GradientText> Power Of ClimateForge
            </h2>
            <div className="relative flex flex-col justify-center items-center w-full min-h-screen">
                {uspData.map((usp, index) => (
                    <motion.div
                        key={index}
                        className={`sticky top-[15%] w-full ${index === uspData.length - 1 ? 'z-20' : 'z-10'}`}
                        initial={{ y: 50 }}
                        whileInView={{ opacity: 1,  y: 20 }} // Adjust the offset to make the top visible
                        transition={{ duration: 0.6, }}
                        viewport={{ margin: "-10%" }}
                        
                    >
                        <UspBlock {...usp}>
                            <UspDecoration
                                title={usp.uspDecoration[0]}
                                caption={usp.uspDecoration[1]}
                                iconSrc={usp.uspDecoration[2]}
                                isFirst={index === 0}
                            />
                        </UspBlock>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
