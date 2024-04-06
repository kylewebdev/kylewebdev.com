"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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

	const isTouchDevice = () => {
		if (typeof window === "undefined") return false;
		setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
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

		if (typeof window === "undefined") return;
		setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);

		return () => {
			ctx.revert();
			window.removeEventListener("mousemove", moveShape);
		};
	}, []);

	return (
		<div
			className="h-dvh w-dvw absolute top-0 left-0 z-20 pointer-events-none"
			ref={container}
		>
			<div
				className={cn(
					"cursor fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-5 h-5 border border-slate-400",
					{ hidden: isTouch }
				)}
				ref={cursor}
			/>
		</div>
	);
};

export default Cursor;
