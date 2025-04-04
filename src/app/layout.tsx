import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";
import { dmSans } from "./fonts";
import "./globals.css";
import Template from "./template";

export const metadata: Metadata = {
	icons: [
		{
			rel: "icon",
			type: "image/x-icon",
			url: "/landing/favicon/favicon.ico",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/landing/favicon/favicon-32x32.png",
		},
	],

	metadataBase: new URL("https://www.climateforge.ai/"),
	alternates: {
		canonical: "https://www.climateforge.ai/",
		languages: {
			"en-US": "/en-US",
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
		<html lang="en">
			<body className={`${dmSans.className} text-body`}>
				<Header />
				<Template>{children}</Template>
				<Footer />
			</body>
		</html>
	);
}
