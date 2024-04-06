import React from "react";

const AboutPage = () => {
	return (
		<div className="w-full h-full min-h-dvh py-24 px-8 flex items-center justify-center">
			<div className="flex flex-col gap-6">
				<h1 className="font-normal tracking-tighter text-6xl lg:text-8xl text-balance">
					Hello! I&apos;m <strong>Kyle</strong>
				</h1>

				<p className="max-w-[66ch] leading-7 text-pretty text-slate-400">
					<em>aka</em>{" "}
					<span className="font-mono uppercase">KyleWebDev</span>.
				</p>

				<p className="max-w-[66ch] leading-7 text-pretty text-slate-400">
					I&apos;ve always had a knack for figuring out how things
					work on the web, and it turns out, I love turning that
					passion into helping businesses build their dream websites.
				</p>
			</div>
		</div>
	);
};

export default AboutPage;
