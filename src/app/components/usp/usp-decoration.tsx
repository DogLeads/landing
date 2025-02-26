import { motion } from "framer-motion"
import { USPDecorationProps } from "./types"
import Image from "next/image"
import { fromMiddle } from "./animations"
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
export default function UspDecoration({title, caption, iconSrc, isFirst}: USPDecorationProps) {
    
    return (
    <>
        {/** right decoration */}
        <motion.div variants={fromMiddle}
            whileHover={{ scale: 1.1, transition: { duration: 0.8 } }}
            className="absolute top-[20%] -right-[3%]
            flex justify-between items-center h-[55px] px-4 
            rounded-[10px] bg-white dark:bg-dark/95 shadow-md z-10">
            
            <div className={`${inter.className}  flex flex-col justify-center cursor-default`}>
                <p className="text-[12px] text-[#A9A7B6] leading-5">{caption}</p>
                <p className="text-[14px] font-medium leading-none">{title}</p>
            </div>
            
            <Image title="Decoration Card Icon"
                className="w-[23px] h-[23px] mt-5"
                src={iconSrc}
                alt="Card Icon"
                width={36}
                height={0} 
            />

        </motion.div>

        {/** first top left decoration */}
        {isFirst ? 
        <motion.div variants={fromMiddle} 
            whileHover={{ scale: 1.1, transition: { duration: 0.6 } }}
            className="absolute top-[7%] sm:top-[10%] -left-[5%] sm:-left-[15%] 
            flex justify-evenly items-center cursor-default hover:z-20
            w-[206px] h-[55px] px-3 rounded-[10px] bg-white dark:bg-dark/90 shadow-md">
            <Image title="Avatar"
                className="w-[35px] h-[35px] object-cover rounded-full"
                src={"/usp-list/avatar.webp"}
                sizes="100vh"
                alt="Avatar"
                width={0}
                height={0} 
            />
            <div className={`${inter.className} flex flex-col justify-center h-[32px] px-[9px]`}>
            <p className="text-[14px] font-bold">+7.25%</p>
            <p className="text-[11px] font-medium leading-none text-[#A9A7B6]">Increase in Clients</p>
            </div>

            <Image title="Line Graph Icon"
                className="w-[28px] h-[28px]"
                src={"/usp-list/icon-line-graph.svg"}
                alt="Line Graph SVG"
                width={0}
                height={0} 
            />
        </motion.div>
        : null}
    </>
    )
}