import Image from "next/image";
import GradientText from "./ui/gradient-text";

type Testimonial = {
    rating: 1 | 2 | 3 | 4 | 5;
    description: string;
    imageSrc?: string;
    name: string;
    location: string;
}

export default function Testimonials() {

    // Hardcoded Testimonials
    const testimonials: Testimonial[] = [
        {
            rating: 5,
            description: "The ClimateForge team nailed exactly what we need to make our job better and faster.",
            imageSrc: "/testimonials/testimonial1.png",
            name: "Nick Barnett",
            location: "Elgin, IL, United States"
        },
        {
            rating: 5,
            description: "In our team, we tried many tools for lead generation and canvassing, but ClimateForge is the only one that really delivers the value we expect!",
            imageSrc: "/testimonials/testimonial2.png",
            name: "Tiff Lopez",
            location: "Fresno, CA, United States"
        },
        {
            rating: 5,
            description: "Crazy hours under the sun and endless days spent trying to find a deal. ClimateForge cut all of that, we can make bread for our families super fast....",
            imageSrc: "/testimonials/testimonial3.png",
            name: "Jack Bell",
            location: "Alamo City, TX, United States"
        },
    ]


    
    return (
        <section id="testimonials" className="w-full flex flex-col justify-center items-center px-4 mb-12">
            <h2 className="my-6 sm:my-8 md::my-16 text-center">Why Our <GradientText>Clients</GradientText> Are Satisfied?</h2>
            
            <div className="flex flex-wrap justify-center gap-x-5 ">
                
                {testimonials.map((testimonial, index) => (

                    <div key={index}
                        className="flex flex-col flex-1 min-w-[250px] max-w-[413px] h-full min-h-[270px] md:min-h-[300px] mb-8
                        rounded-[20px] py-8 px-6 justify-between bg-[#EEF2F6] dark:bg-[#292d32] gap-3 md:gap-4
                        group transition-all hover:z-10 duration-500 hover:scale-105 hover:shadow-md">

                        <div className="flex flex-col gap-4 md:gap-6">
                            {/* Quotation */}
                            <div className="flex gap-1">
                                <Image src={"/testimonials/quotation.svg"} alt="quotation SVG" width={17} height={34}/>
                                <Image src={"/testimonials/quotation.svg"} alt="quotation SVG" width={17} height={34}/>
                            </div>

                            {/* Description */}
                            <p className="text-sm md:text-base">{testimonial.description}</p>
                        </div>
                        {/* Image, name, and location */}
                        <div className="flex items-center">
                            
                            <div className="w-16 h-16 min-w-16 rounded-full mr-4 overflow-hidden bg-[#F9F9FF]">
                                <Image title="Testimonial Avatar"
                                src={testimonial.imageSrc ? testimonial.imageSrc : "/avatar.svg"}
                                alt="testimonial-avatar"
                                width={64}
                                height={64} 
                                sizes="100vh"
                                className=" w-full h-full object-cover"
                                />
                            </div>

                            <div>
                                <p className="text-[14px] sm:text-[16px] md:text-[18px] font-bold">
                                    {testimonial.name}
                                </p>
                                <p className="text-[12px] sm:text-[14px] md:text-[16px] font-medium">
                                    {testimonial.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex gap-8 p-6">
            <button>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="10" height="10" rx="5" fill="#21606A"/>
            </svg>
            </button>
            
            <button disabled className="cursor-not-allowed">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="10" height="10" rx="5" fill="#B0B0B0"/>
                </svg>
            </button>

            <button disabled className="cursor-not-allowed">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="10" height="10" rx="5" fill="#B0B0B0"/>
                </svg>
            </button>
            </div>
            


        </section>
    );
}