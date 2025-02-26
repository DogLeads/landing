import Title from "../components/title";
import MarketInsights from "../components/market-insights";
import InfoCardGrid from "../components/info-card-grid";
import Testimonials from '../components/testimonials';
import UseCases from "../components/use-cases";
import Deploy from "../components/deploy";
import Faq from "../components/faq";
import Cta from "../components/cta";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us - ClimateForge",
    description: "We help contractors make tons of money and slash CO2 emissions in seconds.",
    keywords: [
        "About ClimateForge", 
        "AI lead generation company", 
        "green technology company", 
        "solar lead generation", 
        "HVAC lead generation", 
        "eco-friendly contractor tools", 
        "mission-driven AI", 
        "sustainable solutions"
    ],
    // Open Graph for the About page
    openGraph: {
        title: "About ClimateForge | Revolutionizing Lead Generation for Green Industries",
        description: "Learn more about ClimateForge's mission to empower contractors with AI-driven solutions for solar, HVAC, and sustainable technologies.",
        url: "https://www.climateforge.ai/about", // Page URL
        type: "website",
    },
};

export default function About() {
    const infoCardsData = [
        {
            title: "Fast-Tracking Energy Solutions",
            description: "By accelerating the deployment of solar, HVAC, and energy storage systems, we can significantly reduce carbon emissions and make a lasting impact. The mission is urgent, and we are part of the progress.",
            icon: "icon7",
        },
        {
            title: "Cut carbon emissions",
            description: "Reduce carbon dioxide, methane, and other greenhouse gases. From energy upgrades like solar, HVAC, and energy storage to EV charging and more, for residential to industrial, we are committed to the mission.",
            icon: "icon8",
        },
        {
            title: "Mitigate the damage",
            description: "Rising temperatures, fires, droughts, and storms are escalating. We’re accelerating the deployment of energy upgrades systems to save the planet and slow the consequences of our dumb choices.",
            icon: "icon9",
        },
    ]
    return (
        <main className="flex min-h-screen flex-col gap-8 sm:gap-10 md:gap-20 items-center pb-10 pt-10 sm:pt-20">


			{/* title card and CTA */}
			<Title title={["Empower", "Sustainable", "Transformation"]} 
            description="We help contractors make tons of money and slash CO2 emissions in seconds (seriously)."
            descriptionAnimated={["We help contractors make tons of ", "money", "sales", " and slash CO2 emissions in seconds (seriously)."]}
            gradientIndex={1}
            buttonText="Join Us"
            route="careers"/>

            <MarketInsights/>

            <InfoCardGrid 
                title={["Our Core", "Values"]} 
                description="At ClimateForge, we are dedicated to creating solutions for one of the most critical challenges of our time:  the climate crisis."
                infoCardsData={infoCardsData}/>

            <UseCases/>

            <Deploy />

            <Testimonials />
            
            <Faq />
            
            <Cta title={["Ready To", "Do Something", "That Matters?"]} 
                gifSrc="/cta/about.webp" gifRounded
                description="At ClimateForge we're building the best tools to help American contractors and installers to decarbonize the country and expand globally!"
                primaryButton={{text: "Join Us", route: "/careers"}}
            />
		</main>
    );
}