import { ReactNode } from "react";

export type USPBlockProps = {
    title: string[];
    heading: string;
    description: string[];
    videoSrc: string;
    iconSrc: string;
    accentVariant?: boolean;
    className?: string;
    children: ReactNode;
};

export type USPImageProps = {
    src: string;
    iconSrc: string;
    accentVariant?: boolean;
    children: ReactNode;
};

export type USPDecorationProps = {
    title: string;
    caption: string;
    iconSrc: string;
    isFirst: boolean;
};