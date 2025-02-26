import Title from "../components/title";
import JobOpenings from "../components/job-openings";
import OurTeam from "../components/our-team";
import Cta from "../components/cta";
import InfoCardGrid from '../components/info-card-grid';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Careers - ClimateForge",
    description: "Fix the planet and make an impact in the world!",
    keywords: [
        "Careers at ClimateForge", 
        "AI lead generation jobs", 
        "solar energy jobs", 
        "HVAC careers", 
        "green tech careers", 
        "AI and green technology jobs", 
        "work in renewable energy", 
        "jobs in sustainable tech"
    ],
    // Open Graph for the Careers page
    openGraph: {
        title: "Careers at ClimateForge | Join the Future of AI-Driven Lead Generation",
        description: "Discover exciting career opportunities at ClimateForge, where we innovate the way contractors find leads for solar, HVAC, and green industries.",
        url: "https://www.climateforge.ai/careers", // Page URL
        type: "website",
    }
};

export default function Careers() {
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
            description: "Rising temperatures, fires, droughts, and storms are escalating. We're accelerating the deployment of energy upgrades systems to save the planet and slow the consequences of our dumb choices.",
            icon: "icon9",
        },
    ]
    
    return (
        <main className="flex min-h-screen flex-col items-center sm:pb-10 pt-10 sm:pt-20">
            
            {/* title card and CTA */}
			<Title title={["Make an", "Impact in the World!"]} 
                description={"We are here to solve the biggest climate challenges of our time"} 
                descriptionAnimated={["We are here to solve the biggest ", "climate", "energy", " challenges of our time"]}
                gradientIndex={1}
                buttonText={"Learn More"}
                route="about"/>
            
            <div className='relative w-full h-full mt-10 md:mt-20'>
                {/* Background Image */}
                <div className='absolute inset-0 bg-[url(/job-openings/solar-panels.webp)] bg-cover bg-center -z-10'></div>
                
                {/* Overlay */}
                <div className='absolute inset-0 bg-[#ECF5FF] dark:bg-[#212529] opacity-[0.93] -z-10'></div>

                {/* Content */}
                <InfoCardGrid 
                    title={["Create an Impact with ClimateForge!"]} 
                    description="At ClimateForge, we are dedicated to creating solutions for one of the most critical challenges of our time: the climate crisis."
                    infoCardsData={infoCardsData} 
                    className='relative py-10 md:py-20' // Use relative to ensure content is above overlays
                />
            </div>

            <JobOpenings />
            
            <OurTeam/>

            <Cta title={["Apply To", "Get Started!"]} 
                gifSrc="/cta/career2.webp" gifRounded
                description="Didn't find a position that matches your qualifications? Drop us a line!"
                badges
            />
		</main>
    );
}