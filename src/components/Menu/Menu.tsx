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
	const overlay = useRef<HTMLDivElement>(null);
	const header = useRef<HTMLDivElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const tl = useRef<gsap.core.Timeline>();

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	useGSAP(
		() => {
			gsap.set(".menu-item--holder", { y: "100%" });
			gsap.set(".connect-link", { opacity: 0 });

			tl.current = gsap.timeline({
				onComplete: toggleAria,
				paused: true,
			});

			tl.current.to(".overlay", {
				display: "block",
				duration: 1,
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
				duration: 0.75,
				stagger: 0.1,
				ease: "power4.out",
				delay: -0.79,
			});
		},
		{ scope: containerRef }
	);

	// toggle aria-hidden attribute on overlay useing useMemo
	const toggleAria = () => {
		if (overlay.current) {
			overlay.current.setAttribute(
				"aria-hidden",
				isMenuOpen ? "false" : "true"
			);
		}

		if (header.current)
			header.current.setAttribute(
				"aria-hidden",
				isMenuOpen ? "true" : "false"
			);
	};

	useEffect(() => {
		if (!tl.current) return;
		if (isMenuOpen) {
			tl.current.play();
		} else {
			tl.current.reverse();
		}

		toggleAria();
	}, [isMenuOpen]);

	return (
		<header ref={containerRef}>
			<div
				className="site-header fixed top-0 left-0 w-full p-8 flex justify-between items-center z-10"
				ref={header}
			>
				<div className="uppercase font-mono">
					<Link href="/">KyleWebDev</Link>
				</div>
				<button
					className="cursor-pointer uppercase font-mono"
					onClick={toggleMenu}
				>
					Menu
				</button>
			</div>

			{/* Overlay */}
			<div
				aria-hidden="true"
				className="hidden overlay overflow-y-auto fixed top-0 left-0 w-full h-dvh p-8 bg-slate-200 text-black z-10"
				ref={overlay}
			>
				<div className="grid grid-cols-[1fr_1fr]md:grid-cols-[1fr_4fr_1fr] grid-rows-[88px_2fr_1fr] gap-4 h-full">
					<div className="flex flex-col justify-between h-full row-start-1 row-end-5 col-start-1 col-end-1">
						<div className="uppercase font-mono">
							<Link href="/" onClick={closeMenu} tabIndex={1}>
								KyleWebDev
							</Link>
						</div>
						<div>
							<div className="overflow-hidden">
								<a
									className="connect-link block"
									href="https://twitter.com/kylewebdev_"
									target="_blank"
									tabIndex={menuItems.length + 3}
								>
									X &#8599;
								</a>
							</div>

							<div className="overflow-hidden">
								<a
									className="connect-link block"
									href="https://github.com/kylewebdev"
									target="_blank"
									tabIndex={menuItems.length + 4}
								>
									GitHub &#8599;
								</a>
							</div>

							<div className="overflow-hidden">
								<a
									className="connect-link block"
									href="https://www.linkedin.com/in/kylewebdev"
									target="_blank"
									tabIndex={menuItems.length + 5}
								>
									LinkedIn &#8599;
								</a>
							</div>

							<div className="overflow-hidden">
								<a
									className="connect-link block"
									href="mailto:kylewebdev@gmail.com"
									target="_blank"
									tabIndex={menuItems.length + 6}
								>
									Email &#8599;
								</a>
							</div>
						</div>
					</div>

					<div className="flex flex-col justify-between h-full col-start-2 col-end-3 row-start-2 lg:col-start-2">
						<div className="flex flex-col gap-1 text-right">
							{menuItems.map((item, index) => (
								<div key={index} className="overflow-hidden">
									<div className="menu-item--holder">
										<Link
											className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extralight uppercase -tracking-wider"
											href={item.path}
											onClick={toggleMenu}
											tabIndex={index + 3}
										>
											{item.label}
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="flex flex-col justify-between items-end h-full row-start-1 row-end-5 col-start-2 col-end-3">
						<button
							className="cursor-pointer uppercase font-mono"
							onClick={toggleMenu}
							tabIndex={2}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Menu;
