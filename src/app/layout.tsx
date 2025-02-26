import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";
import { dmSans } from "./fonts";
import "./globals.css";
import Template from "./template";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
	icons: [
		{
			rel: 'icon',
			type: 'image/x-icon',
			url: '/favicons/favicon.ico',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/favicon/favicon-32x32.png',
		},
	],
	
	metadataBase: new URL('https://www.climateforge.ai/'),
	alternates: {
		canonical: 'https://www.climateforge.ai/',
		languages: {
		'en-US': '/en-US',
		},
	},
	
	// Additional SEO metadata
    robots: "index, follow", // Ensures the page is indexed and followed by search engines
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang="en">
			<body className={`${dmSans.className} text-body`}>
				<ThemeProvider attribute="class" enableSystem>
					<Header />
						<Template>{children}</Template>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
