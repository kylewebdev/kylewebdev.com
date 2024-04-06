"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

import styles from "./Menu.module.css";

const menuItems = [
	{ path: "/", label: "Index" },
	{ path: "/work", label: "Work" },
	{ path: "/about", label: "About" },
	{ path: "/contact", label: "Contact" },
	{ path: "/lab", label: "Lab" },
];

const Menu = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
	const timeline = useRef<gsap.core.Timeline>();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	useGSAP(
		() => {
			gsap.set(".menu-item--holder", { y: "100%" });

			timeline.current = gsap
				.timeline({ paused: true })
				.to(".overlay", {
					duration: 1,
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)",
					ease: "power4.inOut",
				})
				.to(".menu-item--holder", {
					y: 0,
					duration: 0.75,
					stagger: 0.1,
					ease: "power4.out",
					delay: -0.75,
				});
		},
		{ scope: containerRef }
	);

	useEffect(() => {
		if (!timeline.current) return;

		if (isMenuOpen) {
			timeline.current.play();
		} else {
			timeline.current.reverse();
		}
	}, [isMenuOpen]);

	return (
		<div className="menu-container" ref={containerRef}>
			<div className="fixed top-0 left-0 w-screen p-8 flex justify-between items-center z-10">
				<div className="uppercase font-mono">
					<Link href="/">KyleWebDev</Link>
				</div>
				<div
					className="cursor-pointer uppercase font-mono"
					onClick={toggleMenu}
				>
					<p>Menu</p>
				</div>
			</div>

			{/* Overlay */}
			<div className="overlay fixed top-0 left-0 w-screen h-dvh p-8 bg-slate-200 text-black grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_4fr_1fr] grid-rows-[88px_1fr_1fr] gap-4 z-10">
				<div className="flex flex-col justify-between h-full row-start-1 row-end-4 col-start-1 col-end-1">
					<div className="uppercase font-mono">
						<Link href="/" onClick={closeMenu}>
							KyleWebDev
						</Link>
					</div>
					<div>
						<a
							className="block"
							href="https://twitter.com/kylewebdev_"
							target="_blank"
						>
							X &#8599;
						</a>
						<a
							className="block"
							href="https://github.com/kylewebdev"
							target="_blank"
						>
							GitHub &#8599;
						</a>
						<a
							className="block"
							href="https://www.linkedin.com/in/kylewebdev"
							target="_blank"
						>
							LinkedIn &#8599;
						</a>
						<a
							className="block"
							href="mailto:kylewebdev@gmail.com"
							target="_blank"
						>
							Email &#8599;
						</a>
					</div>
				</div>

				<div className="flex flex-col justify-between h-full col-start-1 row-start-2 lg:col-start-2">
					<div className="flex flex-col gap-1">
						{menuItems.map((item, index) => (
							<div key={index} className="overflow-hidden">
								<div className="menu-item--holder">
									<Link
										className="text-5xl sm:text-6xl lg:text-9xl font-extralight uppercase -tracking-wider"
										href={item.path}
										onClick={toggleMenu}
									>
										{item.label}
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-col justify-between items-end h-full row-start-1 row-end-4 col-start-2 col-end-2 lg:col-start-3 lg:col-end-3">
					<div
						className="cursor-pointer uppercase font-mono"
						onClick={toggleMenu}
					>
						<p>Close</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
