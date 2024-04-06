import type { Metadata } from "next";
import { Inter as FontSans, Space_Mono as FontMono } from "next/font/google";
import "./globals.css";

import Menu from "@/components/Menu/Menu";
import Cursor from "@/components/Cursor/Cursor";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

const fontMono = FontMono({
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
				className={cn(
					"antialiased",
					fontSans.variable,
					fontMono.variable
				)}
			>
				<Cursor />
				<Menu />
				{children}
			</body>
		</html>
	);
}
