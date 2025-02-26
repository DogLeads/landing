import Cta from "./components/cta";
import Demo from "./components/demo";
import Title from "./components/title";
import CtaMinor from "./components/cta-minor";
import UspList from "./components/usp/usp-list";
import PricingTiers from "./components/pricing-tiers";
import ClientList from "./components/client-list";
import WhyChooseUs from "./components/why-choose-us";
import { Metadata } from 'next';
import Featured from "./components/featured";


export const metadata: Metadata = {
    title: "ClimateForge",
    description: "Fix the planet and make an impact in the world!",
    keywords: [
        "AI lead generation", 
        "solar leads", 
        "HVAC leads", 
        "contractor tools", 
        "eco-friendly solutions", 
        "CO2 reduction", 
        "renewable energy leads", 
        "green technology leads"
    ],
   // Open Graph for social sharing
    openGraph: {
        title: "ClimateForge | AI-Powered Lead Generation for Solar, HVAC, and More",
        description: "AI-driven platform helping contractors boost revenue by finding leads for solar, HVAC, and eco-friendly solutions.",
        url: "https://www.climateforge.ai/", // Page URL
        type: "website",
    },
};

export default function Home() {

	return (
		<main className="flex min-h-screen flex-col gap-8 sm:gap-10 md:gap-20 items-center sm:pb-10 pt-10 sm:pt-20 ">
			{/* Background Image */}
			

			{/* title card and CTA */}
			<Title title={["Energy", "Efficiency", "in a wink!"]} 
				description="Discover, Qualify and Deploy Energy Upgrades faster than ever before!" 
                descriptionAnimated={["Discover, Qualify and Deploy ", "solar", "HVAC", "batteries", " faster than ever before!"]}

				gradientIndex={1}
				buttonText="Book a Demo"
                route='https://calendly.com/giovanni-climateforge-qttf'
                newTab={true}
			/>

            <Demo videoSrc="demo.mp4"/>
			
            <ClientList/>

            <WhyChooseUs />

            <UspList />

            <CtaMinor />

            <Featured/>
            
			<PricingTiers/>

            <Cta title={["Ready To", "Get Started?"]} gifSrc="/cta/solar.webp"
                description="Your peers are going to be proud of you for making more money and saving the planet!"
                primaryButton={{text: "Start For Free", route: "https://calendly.com/giovanni-climateforge-qttf", newTab: true }}
                contactButton
            />
		</main>
	);
}
