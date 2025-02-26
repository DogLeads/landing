import { Variants } from "framer-motion";

export const fromLeft: Variants = {
    offscreen: { x: '-40%', opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

export const fromMiddle: Variants = {
    offscreen: { opacity: 0, scale: 0.75 },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
};

export const fromRight: Variants = {
    offscreen: { x: '30%', opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

export const fromRightLong: Variants = {
    offscreen: { x: '30%', opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.6,
            duration: 2
        }
    }
};