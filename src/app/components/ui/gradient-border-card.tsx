"use client";
import { ReactNode } from "react";

type Props = { 
    width?: number;
    height?: number;
    borderRadius?: number;
    borderWidth?: number;
    bgStyle?: string;
    fgStyle?: string;
    children?: ReactNode;
}

export default function GradientBorderCard({width, height, borderRadius, borderWidth, bgStyle, fgStyle, children}: Props) {
    
    return (
        <div className={`${bgStyle} p-[${borderWidth ? borderWidth : 1}px] overflow-clip bg-purple-gradient`}
            style={{
                borderRadius: `${borderRadius}px`,
                width: width ? `${width}px` : '100%',
            }}
        >
            <div className={`${fgStyle} w-full bg-[white] dark:bg-[#212529] overflow-clip`}
                
                style={{
                    borderRadius: `${borderRadius && borderRadius > 2 ? borderRadius - 2 : 0}px`,
                    height: height ? `${height}px` : '100%',
                }}
            >
                {children}
            </div>

        </div>
    );
}