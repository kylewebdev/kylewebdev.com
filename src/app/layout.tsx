import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

import Menu from "@/components/menu/Menu";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-mono",
});

export const metadata: Metadata = {
	title: "Kyle Garcia | Fullstack Developer",
	description: "Crafting Modern, User-Focused Web Experiences",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`antialiased ${inter.className} ${spaceMono.variable}`}
			>
				<Menu />
				{children}
			</body>
		</html>
	);
}
