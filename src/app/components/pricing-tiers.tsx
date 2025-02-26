"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ButtonCustom from './ui/button-custom';
interface PricingCardProps {
    tier: string;
    price?: number;
    description: string;
    perks?: string[];
    buttonVariant?: string;
    disabled?: boolean;
    isYearly?: boolean;  // Added this prop to toggle between monthly and yearly
}

function PricingCard(props: PricingCardProps) {
    const { tier, price, description, perks, buttonVariant, disabled, isYearly } = props;
    const router = useRouter();

    return (
        <div className="relative rounded-15 bg-[#EEF2F6] dark:bg-[#292e32] shadow-md py-8 px-[43px]
            transition-all hover:z-10 duration-500 hover:scale-105 hover:shadow-xl
            max-w-[410px] w-full h-[617px] flex flex-col justify-between">
            <div>
                <h4 className="text-primary pb-10">{tier}</h4>
                {price ? (
                    <h3 className="flex items-end font-bold text-4xl">
                        {`$${price}`} 
                        <p className="text-gray-500">{isYearly ? '/ year' : '/ month'}</p>
                    </h3>
                ) : (
                    <h3 className="font-bold text-4xl">Let's Talk</h3>
                )}
                <p className="text-lg font-medium pt-6 pb-14">{description}</p>
                {perks && perks.length > 1 ? (
                    <ul className="gap-4 flex flex-col">
                        {perks.map((perk, i) => (
                            <li key={i}>
                                <span className="font-bold text-primary">&#x2713;</span> {perk}
                            </li>
                        ))}
                    </ul>
                ) : perks ? (
                    <ul>{perks[0]}</ul>
                ) : null}
            </div>
            <ButtonCustom
                variant={buttonVariant}
                disabled={disabled}
                onClick={() => window.open('https://calendly.com/giovanni-climateforge-qttf', '_blank', 'noopener,noreferrer')}
            >
                Get Started
            </ButtonCustom>
        </div>
    );
}
export default function PricingTiers() {
    // State to toggle between monthly and yearly pricing
    const [isYearly, setIsYearly] = useState(false);

    // Pricing data for both monthly and yearly plans
    const pricingData = {
        Launch: { monthly: 359, yearly: Math.round(359 * 12) },
        Scale: { monthly: 559, yearly: Math.round(559 * 12) }, 
        Enterprise: { monthly: 0, yearly: 0 }, // Pricing TBD
    };

    return (
        <section id="pricing" className="relative flex flex-col justify-center items-center w-full gap-y-4 mb-0 sm:mb-10 px-4">
            <h2 className="font-bold leading-none z-10">Pricing</h2>
            <p className="text-lg font-medium pb-[40px] text-center">
                Reach out to our sales team to try ClimateForge today.
            </p>

            <div className="relative flex items-center w-[282px] h-[71px] p-2 mb-[39px] gap-1
                gradient-border rounded-full overflow-hidden">
                {['Monthly', 'Yearly'].map((option, index) => {
                    const isActive = (index === 1) === isYearly; // Maps true for "Yearly" when isYearly is true
                    return (
                    <div key={option} className="relative flex-1">
                        {isActive && (
                        <motion.div
                            layoutId="highlight"
                            className="absolute inset-0 bg-primary rounded-full z-0"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                        )}
                        <button onClick={() => setIsYearly(index === 1)}
                            className={`flex w-full h-[55px] text-lg justify-center  items-center rounded-full font-bold relative z-10  
                                ${isActive ? 'text-white pointer-events-none' : 'text-primary dark:text-white hover:bg-[#ffffffbc] dark:hover:bg-[#212529ca] hover:bg-accent-gradient-opaque hover:overflow-clip hover:border hover:border-primary dark:hover:border-white'}`
                            }
                        >
                        {option}
                        </button>
                    </div>
                    );
                })}
            </div>

            <div className="flex flex-wrap justify-center items-center z-10 gap-x-8 gap-y-14">
                <PricingCard
                    tier="Launch"
                    price={isYearly ? pricingData.Launch.yearly : pricingData.Launch.monthly}
                    description="Get started with our basic plan, perfect for small businesses."
                    perks={[
                        'Starts with 500 leads',
                        'CRM',
                        '1 Location included',
                        'Basic scheduling with Zapier',
                    ]}
                    isYearly={isYearly}
                />

                <PricingCard
                    tier="Scale"
                    price={isYearly ? pricingData.Scale.yearly : pricingData.Scale.monthly}
                    description="For growing teams, and mid-size companies."
                    perks={[
                        'Starts with 1000 leads',
                        'CRM',
                        'Unlimited Locations',
                        'Pro Housing Information',
                        'Pro Scheduling Integrations',
                    ]}
                    buttonVariant="outline"
                    isYearly={isYearly}
                />

                <PricingCard
                    tier="Enterprise"
                    description="For large companies with custom needs."
                    perks={[
                        'This plan is offered to big companies with lots of seats. It will be licensed based, and the price is yet to be determined.',
                    ]}
                    disabled={true}
                    isYearly={isYearly}
                />
            </div>
        </section>
    );
}