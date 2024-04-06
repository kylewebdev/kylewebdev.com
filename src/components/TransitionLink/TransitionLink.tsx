"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";
import { Button } from "../ui/button";

export default function TransitionLink({
	href,
	label,
	style,
}: {
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
					className="inline underline font-mono max-w-[54ch] leading-7 text-pretty text-slate-400"
					onClick={handleClick}
				>
					{label}
				</button>
			);
		} else {
			return <Button onClick={handleClick}>{label}</Button>;
		}
	};

	return <DynamicButton />;
}
