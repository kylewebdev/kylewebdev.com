"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

const Cursor = () => {
	const xTo = useRef<gsap.QuickToFunc>();
	const yTo = useRef<gsap.QuickToFunc>();
	const container = useRef<HTMLDivElement>(null);
	const cursor = useRef<HTMLDivElement>(null);
	const [isTouch, setIsTouch] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [hoverElement, setHoverElement] = useState<HTMLElement>();
	const [isHovering, setIsHovering] = useState(false);

	const mouseEnter = (e: any) => {
		setHoverElement(e.target);
		setIsHovering(true);
	};

	const mouseLeave = (e: any) => {
		setHoverElement(undefined);
		setIsHovering(false);
	};

	useIsomorphicLayoutEffect(() => {
		let ctx = gsap.context(() => {
			xTo.current = gsap.quickTo(cursor.current, "x", {
				duration: 0.8,
				ease: "power3",
			});
			yTo.current = gsap.quickTo(cursor.current, "y", {
				duration: 0.8,
				ease: "power3",
			});
		}, container);

		const moveShape = (e: MouseEvent) => {
			if (!xTo.current || !yTo.current) return;
			xTo.current(e.clientX);
			yTo.current(e.clientY);
		};

		window.addEventListener("mousemove", moveShape);

		return () => {
			ctx.revert();
			window.removeEventListener("mousemove", moveShape);
		};
	}, []);

	useEffect(() => {
		const hoverElements = [".project", "a"];

		for (let el of hoverElements) {
			const elements = document.querySelectorAll(el);
			elements.forEach((element) => {
				element.addEventListener("mouseenter", mouseEnter);
				element.addEventListener("mouseleave", mouseLeave);
			});
		}

		if (typeof window === "undefined") return;
		setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
		setIsMobile(window.innerWidth <= 768);

		return () => {
			for (let el of hoverElements) {
				const elements = document.querySelectorAll(el);
				elements.forEach((element) => {
					element.removeEventListener("mouseenter", mouseEnter);
					element.removeEventListener("mouseleave", mouseLeave);
				});
			}
		};
	}, []);

	return (
		<div
			className="h-vh w-vw absolute top-0 left-0 z-20 pointer-events-none"
			ref={container}
		>
			<div
				className={cn(
					"cursor fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-5 h-5",
					{
						hidden: isTouch || isMobile,
						"border border-slate-400 opacity-50":
							isHovering &&
							hoverElement &&
							hoverElement.classList.contains("link"),
						"border border-slate-400": !isHovering && !hoverElement,
						"top-8":
							isHovering &&
							hoverElement &&
							hoverElement.classList.contains("project"),
					}
				)}
				ref={cursor}
			>
				{isHovering && hoverElement?.dataset.image && (
					<div className="w-96 h-96 mt-4">
						<Image
							src={hoverElement?.dataset.image}
							alt="Joint Medias"
							width={800}
							height={800}
							priority
							className="rounded-lg"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cursor;
