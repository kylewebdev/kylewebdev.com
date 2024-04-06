"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const menuItems = [
	{ path: "/", label: "Index" },
	{ path: "/about", label: "About" },
	{ path: "/projects", label: "Projects" },
	{ path: "/contact", label: "Contact" },
	{ path: "/lab", label: "Lab" },
];

const Menu = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
	const tl = useRef<gsap.core.Timeline>();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	useGSAP(
		() => {
			gsap.set(".menu-item--holder", { y: "100%" });
			gsap.set(".connect-link", { opacity: 0 });

			tl.current = gsap.timeline({ paused: true });

			tl.current.to(".overlay", {
				duration: 0.75,
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)",
				ease: "power4.inOut",
			});
			tl.current.to(".menu-item--holder", {
				y: 0,
				duration: 0.75,
				stagger: 0.1,
				ease: "power4.out",
				delay: -0.79,
			});
			tl.current.to(".connect-link", {
				opacity: 1,
				duration: 0.5,
				stagger: 0.1,
				ease: "power4.out",
				delay: -0.59,
			});
		},
		{ scope: containerRef }
	);

	useEffect(() => {
		if (!tl.current) return;

		if (isMenuOpen) {
			tl.current.play();
		} else {
			tl.current.reverse();
		}
	}, [isMenuOpen]);

	return (
		<div className="menu-container" ref={containerRef}>
			<div className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-10">
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
			<div className="overlay overflow-y-auto fixed top-0 left-0 w-full h-dvh p-8 bg-slate-200 text-black z-10">
				<div className="grid grid-cols-[1fr_4fr_1fr] grid-rows-[88px_2fr_1fr] gap-4 h-full">
					<div className="flex flex-col justify-between h-full row-start-1 row-end-5 col-start-1 col-end-1">
						<div className="uppercase font-mono">
							<Link href="/" onClick={closeMenu}>
								KyleWebDev
							</Link>
						</div>
						<div>
							<div className="overflow-hidden">
								<a
									className="connect-link inline-block"
									href="https://twitter.com/kylewebdev_"
									target="_blank"
								>
									X &#8599;
								</a>
							</div>

							<div className="overflow-hidden">
								<a
									className="connect-link inline-block"
									href="https://github.com/kylewebdev"
									target="_blank"
								>
									GitHub &#8599;
								</a>
							</div>

							<div className="overflow-hidden">
								<a
									className="connect-link inline-block"
									href="https://www.linkedin.com/in/kylewebdev"
									target="_blank"
								>
									LinkedIn &#8599;
								</a>
							</div>

							<div className="overflow-hidden">
								<a
									className="connect-link inline-block"
									href="mailto:kylewebdev@gmail.com"
									target="_blank"
								>
									Email &#8599;
								</a>
							</div>
						</div>
					</div>

					<div className="flex flex-col justify-between h-full col-start-3 row-start-2 lg:col-start-2">
						<div className="flex flex-col gap-1 text-right">
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

					<div className="flex flex-col justify-between items-end h-full row-start-1 row-end-5 col-start-3 col-end-3">
						<div
							className="cursor-pointer uppercase font-mono"
							onClick={toggleMenu}
						>
							<p>Close</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
