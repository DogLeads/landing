"use client";

import GradientText from './ui/gradient-text';
import LinkedInSvg from './ui/icons/linkedin-icon';
import GradientBorderCard from './ui/gradient-border-card';

export default function JobOpenings() {

    return (
        <section className="relative flex w-full pb-20 bg-[#F9F9FF] dark:bg-[#1a1c1f]">
            
            <div className=" flex flex-col justify-center items-center
                w-full rounded-[90px] p-6 z-10 ">
                
                {/* Title */}
                <h2 className='mt-12 mb-12 text-center'>Job Openings</h2>
                
                <GradientBorderCard borderRadius={20} bgStyle='max-w-[1280px]' fgStyle='justify-center items-center flex flex-col p-4'>
                
                <p className='max-w-[808px] text-center p-2 sm:p-6 font-bold text-base sm:text-xl md:text-2xl'>There are no job openings at this time, but connect with us on{' '}
                    <button className='inline-flex items-center 
                    text-[#0a66c2] hover:text-[#3e7bb9]' 
                    onClick={() => 
                        window.open('https://www.linkedin.com/company/climateforge/jobs/?viewAsMember=true', 
                            '_blank', 'noopener,noreferrer'
                        )} 
                    >
                        
                            Linked 
                        
                        <LinkedInSvg className="ml-[2px] w-[18px] sm:w-[20px] lg:w-[24px]"/>
                    </button> 
                    {' '}for any updated opportunities! 
                </p>

                <div className="p-2 sm:p-6 font-bold text-base sm:text-xl md:text-2xl text-center">
                    <span>
                    Feel free to reach out at{' '}
                    </span>

                    <button className="inline-flex flex-wrap items-center justify-center
                        hover:opacity-85"
                        onClick={(e) => {
                            window.location.href = "mailto:team@climateforge.ai";
                            e.preventDefault();
                        }}>
                            
                            <GradientText className='hover:opacity-90'> 
                                team@climateforge.ai
                            </GradientText>
                            
                    </button> 

                    <span> for general inquiries!</span>
                    </div>
                </GradientBorderCard>
            </div>
        </section>
    );
}