import Image from "next/image";
import GradientBorderCard from "./ui/gradient-border-card";
import InstagramIcon from "./ui/icons/instagram-icon";
import LinkedInIcon from "./ui/icons/linkedin-icon";
import FacebookIcon from "./ui/icons/facebook-icon";
import XIcon from "./ui/icons/x-icon";

export default function OurTeam() {

    const teamMembers = [
        {
            name: "Giovanni Amenta",
            title: "Chief Executive Officer",
            image: "/our-team/ceo.webp",
            socials: {
                instagram: "",
                linkedIn: "https://www.linkedin.com/in/giovanniamenta/",
                facebook: "",
                x: "",
            }

        },
        {
            name: "Joseph Anselm",
            title: "Chief Technology Officer",
            image: "/our-team/team-member2.png",
            socials: {
                instagram: "",
                linkedIn: "https://www.linkedin.com/in/anselmj/",
                facebook: "",
                x: "",
            }

        },
        {
            name: "Bella",
            title: "Supreme COO",
            image: "/our-team/coo.webp",
            socials: {
                instagram: "",
                linkedIn: "",
                facebook: "",
                x: "",
            }

        },
    ]


    return (
        <section className="flex flex-col justify-center items-center pt-10 md:pt-20 pb-20 md:pb-40">
            <h2 className="pb-10">Our Expert Team</h2>
            <div className="flex flex-wrap justify-center gap-y-8 sm:gap-y-12 md:gap-y-16 gap-x-14">
                {teamMembers.map((teamMember, index) => (
                    
                    <div key={index} className="flex shadow-[7px_-2px_40px_#44A3CF2E] rounded-[65px]
                        transition-all hover:z-10 duration-500 hover:scale-105 hover:shadow-[7px_-2px_40px_#44A3CF2E]">

                        <GradientBorderCard borderRadius={15} borderWidth={1} 
                            >
                            <div className="relative flex h-full w-full items-center justify-center gap-5 p-5 min-w-[413px] min-h-[200px]">
                            <Image title="Team Member Avatar"
                                src={teamMember.image} 
                                alt={teamMember.name} 
                                width={0} height={0} sizes="100vh"
                                className="rounded-full object-cover w-[125px] h-[125px]"
                            />

                            <div className="flex  flex-col ">
                            <h4>{teamMember.name}</h4>
                            <p className="text-lg">{teamMember.title}</p>

                            {/* Socials */}
                            <div className="absolute bottom-10 flex flex-wrap gap-4  items-center text-primary min-h-6">
                                {/* Instagram */}
                                {teamMember.socials.instagram ?
                                    <a title={teamMember.name + " @ Instagram"}
                                        href={teamMember.socials.instagram} 
                                        rel="noopener noreferrer" target="_blank">
                                        <InstagramIcon />
                                    </a> : null
                                }

                                {/* LinkedIn */}
                                {teamMember.socials.linkedIn ?
                                    <a title={teamMember.name + " @ LinkedIn"}
                                        href={teamMember.socials.linkedIn} 
                                        rel="noopener noreferrer" target="_blank">
                                        <LinkedInIcon />
                                    </a> : null 
                                }

                                {/* Facebook */}
                                {teamMember.socials.facebook ?
                                    <a title={teamMember.name + " @ Facebook"}
                                        href={teamMember.socials.facebook} 
                                        rel="noopener noreferrer" target="_blank">
                                        <FacebookIcon/>
                                    </a> : null 
                                }

                                {/* X */}
                                {teamMember.socials.instagram ?
                                    <a title={teamMember.name + " @ X"}
                                        href={teamMember.socials.x} 
                                        rel="noopener noreferrer" target="_blank">
                                        <XIcon />
                                    </a> : null 
                                }
                            </div>
                            </div></div>
                        </GradientBorderCard>

                    </div>
                    
                ))}
            </div>
        </section>
    );
}