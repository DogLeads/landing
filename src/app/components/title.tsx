"use client";
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation'
import GradientText from './ui/gradient-text';
import Typewriter from 'typewriter-effect';
import ButtonCustom from './ui/button-custom';
interface BaseProps {
	title?: string[];
	description?: string;
	descriptionAnimated?: string[];
	gradientIndex: number;
	buttonText?: string;
	children?: ReactNode;
}

// When newTab is true, route is required
type TitlePropsWithNewTab = BaseProps & {
	newTab: true;
	route: string;
};

// When newTab is false or undefined, route is optional
type TitlePropsWithoutNewTab = BaseProps & {
	newTab?: false;
	route?: string;
};

// Combine the two types using a union
export type TitleProps = TitlePropsWithNewTab | TitlePropsWithoutNewTab;

export default function Title({title, description, descriptionAnimated, gradientIndex, buttonText, route, newTab = false, children}: TitleProps) {

	const router = useRouter()
	// TODO: p tags before and after typewriter causing render delay
	return (
		<section className="flex flex-col 
			justify-center items-center 
			text-center relative h-full
			max-w-[931px] px-4"
		>
		
		{title ? 
			<h1 className="mb-4 text-[40px] sm:text-5xl md:text-6xl">
				{title.length === 1 ? <GradientText variant='purple'> {title[0]} </GradientText> : title[0]}
				{title[gradientIndex] ? <GradientText variant='purple'> {title[gradientIndex]} </GradientText> : null}
				{title[2] ? title[2] : null}
			</h1>
		: null}
		{
			descriptionAnimated ? 
			<div className="mb-6 text-md font-semibold inline-flex flex-col sm:flex-row whitespace-pre-wrap ">
				<p>{descriptionAnimated[0]}</p>
				
				<Typewriter
					options={{
						strings: descriptionAnimated.slice(1, -1),
						autoStart: true,
						loop: true,
						wrapperClassName: 'font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#4A89DB] via-[#028F79] via-30% to-[#39C77B] to-100%',
					}}
					
					/>
				<p>{descriptionAnimated[descriptionAnimated.length-1]}</p>
			</div>
			:
			<p className="text-gray-500 mb-6 text-md font-semibold">
			{description}
			</p>
		}
		<div className='flex flex-wrap items-center justify-center gap-4'>
			<ButtonCustom variant='outline' onClick={newTab ? 
				() => window.open(route, '_blank', 'noopener,noreferrer') : 
				() => router.push(route ? route : '/')}>
				Watch a Demo
			</ButtonCustom>

			<ButtonCustom width={154} onClick={newTab ? 
				() => window.open(route, '_blank', 'noopener,noreferrer') : 
				() => router.push(route ? route : '/')}>
				{buttonText}
			</ButtonCustom>
		</div>
		
		{children ? children : null}
	</section>
	);
}