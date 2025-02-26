import ButtonCustom from './button-custom';
import GradientText from "./gradient-text";
import { ReactNode } from "react";

type Props = {
    variant?: string;
    text?: string;
    link?: boolean;
    children?: ReactNode
}

export default function EmailButton({variant, link = false, children}: Props) {

    return (link ?
        
        <button className="font-semibold hover:opacity-85" 
            onClick={(e) => {
                window.location.href = "mailto:team@climateforge.ai";
                e.preventDefault();
            }}>
            <GradientText>
            {children}
            </GradientText>
        </button>
        : 
        <ButtonCustom variant={variant} 
            onClick={(e) => {
                window.location.href = "mailto:team@climateforge.ai";
                e.preventDefault();
            }}>
            {children}
        </ButtonCustom>
    );
}