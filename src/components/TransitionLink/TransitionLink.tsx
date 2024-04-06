"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function TransitionLink({
	className,
	href,
	label,
	style,
}: {
	className?: string;
	href: string;
	label: string;
	style?: string;
}) {
	const router = useRouter();

	if (!style) {
		style = "link";
	}

	const handleClick = () => {
		animatePageOut(href, router);
	};

	const DynamicButton = function () {
		if (style === "link") {
			return (
				<button
					className={cn(
						"inline underline font-mono max-w-[54ch] leading-7 text-pretty text-slate-400",
						className
					)}
					onClick={handleClick}
				>
					{label}
				</button>
			);
		} else {
			return (
				<Button className={className} onClick={handleClick}>
					{label}
				</Button>
			);
		}
	};

	return <DynamicButton />;
}
