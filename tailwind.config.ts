import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')
const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: 'class', // enables class based dark mode
	theme: {
		extend: {
			colors: {
				accent: "#5850EC",
				primary: "#21606A",
				secondary: "#CEDCDC",
				"white-50": "rgba(255, 255, 255, 0.5)",
			},
			textColor: {
				dark: "#212529",
				light: "#ffffff",
				grey1: "#858585",
				grey2: "#5C5C5C",
				lightGrey: "#E0DFE2",
			},
			textShadow: {
				DEFAULT: '0 2px 4px #000',
				sm: '0 2px 2px #000',
				lg: '0 4px 10px #000',
			},
			backgroundColor: {
				dark: "#212529",
				"dark-secondary": "#4B5563",
				light: "#EEF2F6",
				purple: "#EDEEFC",
				blue: "#E6F1FD",
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, #011F29 0%, #000711 100%)",
				"accent-gradient":
					"linear-gradient(110.41deg, #4A89DB -2.4%, #39C77B 105.71%)",
				"accent-gradient-opaque":
					"linear-gradient(110.41deg, rgba(74, 137, 219, .38) -2.4%, rgba(57, 199, 123, .38) 105.71%)",
				"purple-gradient":
					"linear-gradient(110.41deg, #744cebe6 -2.4%, #39C77B 105.71%)",
				"white-gradient": 
					"linear-gradient(103.51deg, #EEF2F6 41%, #FFFFFF 45%, #EEF2F6 51%, #FFFFFF 61%, #EEF2F6 74.5%)",
				"gradient-repeating": 
					'repeating-linear-gradient(180deg, white 0%, #F9F9FF 25%, white 50%, #F9F9FF 75%, white 100%)',
			},
			fontSize: {
				"extra-large-title": "5rem",
				"large-title": "3.812rem",
				title: "2.938rem",
				"small-title": "2.25rem",
				heading: "1.688rem",
				"small-heading": "1.312rem",
				"large-button": "1.25rem",
				button: "1rem",
				body: "1rem",
				small: "0.75rem",
				"extra-small": "0.562rem",
			},
			maxWidth: {
				"4/5": "80%",
				"9/10": "90%",
			},
			minHeight: {
				"1/2": "50%",
				"3/4": "75%",
			},
			borderRadius: {
				"10": "10pt",
				"15": "15pt",
				"20": "20pt",
				"30": "30pt",
				"40": "40pt",
			},
			screens: {
				"3xl": "1920px",
				"not-touch": { raw: "(hover: hover)" },
				touch: { raw: "(hover: none)" },
			},
		},
	},
	variants: {
		extend: {
			opacity: ["hover"],
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }: any) {
			matchUtilities(
			{
				'text-shadow': (value: any) => ({
				textShadow: value,
				}),
			},
			{ values: theme('textShadow') }
			);
		}),
	],
};
export default config;
