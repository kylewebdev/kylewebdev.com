import React from "react";

const LabPage = () => {
	return (
		<div className="w-full h-full min-h-dvh py-24 px-8 flex items-center justify-center">
			<div className="flex flex-col gap-6">
				<h1 className="font-normal tracking-tighter text-6xl lg:text-8xl text-balance">
					Lab
				</h1>
				<p className="max-w-[66ch] leading-7 text-pretty text-slate-400">
					Welcome to the lab! This is where I&apos;ll be experimenting
					with new ideas and concepts. Stay tuned for more updates!
				</p>
			</div>
		</div>
	);
};

export default LabPage;
