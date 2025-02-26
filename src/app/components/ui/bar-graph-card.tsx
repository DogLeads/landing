"use client";
import { Inter } from 'next/font/google';
import { motion, Variants } from "framer-motion";

const barVariants: Variants = {
    offscreen: {
        width: 0,
    },
    onscreen: (barPercent: number) => ({
        
        width: `${barPercent}%`,
        transition: {
            duration: 1.2,
        }
    }),
};

const container: Variants = {
    onscreen: {
        transition: {
            staggerChildren: 0.5
        }
    }
}

const inter = Inter({ subsets: ['latin'] })

type Props = { barGraphData: BarGraphData }

type BarGraphData = {
    title: string;
    subtitle?: string;
    graphMax: number;
    barData: Bar[]
}

type Bar = {
    barTitle?: string;
    barSubtitle?: string;
    barPercent?: number;
    barColor?: string;
}

export default function BarGraphCard({barGraphData}: Props) {

    const {title, subtitle, graphMax, barData} = {...barGraphData}

    return (
        <div className={`${inter.className} flex flex-col w-full max-w-[568px] bg-white max-h-[396px]
            rounded-[20px] p-[24px] sm:p-[36px]`}>
            {/* Graph Title */}
            <div className='flex flex-col w-full'>
                <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] 
                    leading-none sm:leading-5 text-[#9291A5]">
                    {subtitle}
                </p>
                <h4 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-7">
                    {title}
                </h4>
            </div>
            
            {/* Graph Divider */}
            <svg className='mt-2 sm:mt-4 mb-4' width="100%" height="2" viewBox="0 0 474 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.796875" y1="1.36304" x2="473.917" y2="1.36304" stroke="#DEE1E6"/>
            </svg>
            
            {/* Graph */}
            <div className='flex justify-center items-center relative pt-2 sm:pt-6 mb-4 sm:mb-8 '>
                
                <div className='w-full max-w-[473px] z-10 h-[135px] sm:h-[155px] '>
                    <motion.div  key={JSON.stringify(barData)}
                        initial="offscreen"
                        whileInView="onscreen"  
                        viewport={{ once: true, amount: 0.6 }}  
                        variants={container} 
                        className='flex flex-col justify-between w-full h-full'>
                        {barData.map((bar, index) => (
                            <div key={index}>
                            
                                <div className='flex justify-between pb-2'>
                                    {/* Bar Title */}
                                    <span className='text-[10px] sm:text-[12px] md:text-[14px] 
                                    leading-[16px] text-[#615E83]'>
                                        {bar.barTitle}
                                    </span>
                                    {/* Bar Max */}
                                    <p className={` text-[10px] sm:text-[12px] md:text-[14px] leading-[16px]`}
                                    style={{color: `${index < 1 ? '#5FB487' : '#615E83'}`}}>
                                        {bar.barSubtitle}
                                    </p>
                                </div>

                                {/* Empty Bar */}
                                <div className='h-[32px] sm:h-[40px] max-w-[473px] 
                                    rounded-[4px] bg-[#F8F8FF]'>
                                    {/* Bar */}
                                    <motion.div
                                        custom={bar.barPercent}
                                        variants={barVariants}
                                        
                                        className={`h-[33px] sm:h-[41px] rounded-[4px]`}
                                        style={{ backgroundColor: bar.barColor }}
                                    />
                                </div>
                            </div>
                        ))}
                        
                    </motion.div>
                    
                </div>

                
            </div>
            <div className="relative w-full flex justify-between text-[10px] sm:text-small">
                {/* Min Value (0) */}
                <span className="relative">0</span>

                {/* Grid for Dashed Lines & Labels */}
                <div className="absolute left-0 bottom-0 w-full flex justify-evenly">
                    {[0.25, 0.5, 0.75].map((value, index) => (
                        <div key={index} className="relative flex flex-col items-center">
                            {/* Dashed Line */}
                            <div className="h-[150px] sm:h-[200px] border-l-2 border-dashed border-[#DEE1E6]" />
                            {/* Label Below */}
                            <span className="mt-1">{graphMax * value}</span>
                        </div>
                    ))}
                </div>

                {/* Max Value */}
                <span className="relative">{graphMax}</span>
            </div>
        </div>
    );
}