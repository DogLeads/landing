"use client";
import { ReactNode } from "react";

interface ButtonProps {
    type?: "submit" | "reset" | "button" | undefined;
    variant?: string;
    width?: number | "100%";
    height?: number;
    radius?: number;
    bgColor?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
    className?: string;
    children?: ReactNode;

}

export default function ButtonCustom(props: ButtonProps) {
    
    const {type, variant, width, height, radius, bgColor, onClick, disabled, className, children} = {...props}

    const buttonHeight = height ? height : 51;
    const buttonRadius = radius ? radius : 40
    const bg = bgColor ? bgColor : '#21606A';
    
    return (
        variant === "outline" ?

        <button onClick={onClick} type={type}
            disabled={disabled} 
            className={`${disabled ? 'cursor-not-allowed opacity-50' : null} 
            ${className} relative group hover:bg-[#ffffffbc] dark:hover:bg-[#212529] hover:bg-accent-gradient-opaque hover:overflow-clip border border-solid border-primary dark:border-white transition-all`
            }
            style={{ 
                height: buttonHeight, 
                borderRadius: buttonRadius, 
                
            }}>
            <span className="font-bold text-primary dark:text-white text-[16px] md:text-[18px] px-5 ">
                {children}
            </span>
        </button>
        :
        <button onClick={onClick} disabled={disabled} type={type}
            className={`${disabled ? 'cursor-not-allowed opacity-50' : null} 
                ${className} relative group bg-primary hover:bg-[#ffffffbc] border border-primary inset-0 dark:hover:border-transparent dark:hover:bg-accent-gradient transition-color hover:overflow-clip hover:bg-accent-gradient-opaque`}
                style={{ 
                    height: buttonHeight, 
                    borderRadius: buttonRadius,

                }}>
                <span className="flex justify-center items-center font-bold text-white text-[16px] md:text-[18px] px-5 group-hover:text-primary dark:group-hover:text-white">
                    {children}
                </span>
                
            
        </button>
    );
}