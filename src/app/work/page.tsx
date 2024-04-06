import TransitionLink from "@/components/TransitionLink/TransitionLink";
import React from "react";

const WorkPage = () => {
	return (
		<div className="w-full h-full min-h-dvh py-24 px-8 flex items-center justify-center">
			<div className="flex flex-col gap-6">
				<h1 className="font-normal tracking-tighter text-6xl lg:text-8xl text-balance">
					Work
				</h1>
				<p className="font-mono max-w-[66ch] leading-7 text-pretty text-slate-400">
					Unfortunately, I can&apos;t share any of my work at the
					moment. But I&apos;m always open to new opportunities. If
					you have any questions or would like to see my work, feel
					free to <TransitionLink href="/contact" label="reach out" />
					.
				</p>
			</div>
		</div>
	);
};

export default WorkPage;
