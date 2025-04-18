import { Metadata } from "next";
import ClientList from "./components/client-list";
import Cta from "./components/cta";
import CtaMinor from "./components/cta-minor";
import Demo from "./components/demo";
import Featured from "./components/featured";
import PricingTiers from "./components/pricing-tiers";
import Title from "./components/title";
import WhyChooseUs from "./components/why-choose-us";

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
		"green technology leads",
	],
	// Open Graph for social sharing
	openGraph: {
		title: "ClimateForge | AI-Powered Lead Generation for Solar, HVAC, and More",
		description:
			"AI-driven platform helping contractors boost revenue by finding leads for solar, HVAC, and eco-friendly solutions.",
		url: "https://www.climateforge.ai/", // Page URL
		type: "website",
	},
};

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col gap-8 sm:gap-10 md:gap-4 items-center pt-14 sm:pt-24 ">
			<Title
				title={["Energy", "Efficiency", "in a wink!"]}
				description="Discover and Deploy Energy Deals Faster Than Ever Before!"
				descriptionAnimated={[
					"Discover and Deploy ",
					"Solar",
					"HVAC",
					"Batteries",
					" Deals Faster Than Ever Before!",
				]}
				gradientIndex={1}
				buttonText="Book a Demo"
				route="https://calendly.com/giovanni-climateforge-qttf"
				newTab={true}
			/>

			<Demo videoSrc="/landing/demo.mp4" />

			<ClientList />

			<WhyChooseUs />

			<CtaMinor />

			<Featured />

			<PricingTiers />

			<Cta
				title={["Ready To", "Get Started?"]}
				gifSrc="/landing/cta/solar.webp"
				description="Your peers are going to be proud of you for making more money and saving the planet!"
				primaryButton={{
					text: "Start For Free",
					route: "https://calendly.com/giovanni-climateforge-qttf",
					newTab: true,
				}}
				contactButton
			/>
		</main>
	);
}
