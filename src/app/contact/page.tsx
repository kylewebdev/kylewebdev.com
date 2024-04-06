import React from "react";

const ContactPage = () => {
	return (
		<div className="w-full h-full min-h-dvh py-24 px-8 flex items-center justify-center">
			<div className="flex flex-col gap-6">
				<h1 className="font-normal tracking-tighter text-6xl lg:text-8xl text-balance">
					Contact
				</h1>

				<p className="font-mono max-w-[66ch] leading-7 text-pretty text-slate-400 text-center">
					<a
						className="break-all"
						href="mailto:kylewebdev@gmail.com"
						target="_blank"
					>
						kylewebdev@gmail.com
					</a>
				</p>
			</div>
		</div>
	);
};

export default ContactPage;
