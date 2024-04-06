import React from "react";

const ContactPage = () => {
	return (
		<div className="w-full h-full min-h-screen py-24 px-8 flex items-center justify-center">
			<div className="flex flex-col gap-6">
				<h1 className="text-6xl font-normal tracking-tighter lg:text-8xl">
					<a
						className="block break-all"
						href="mailto:kylewebdev@gmail.com"
						target="_blank"
					>
						kylewebdev@gmail.com
					</a>
				</h1>
				{/* <p className="max-w-[66ch] leading-7 text-pretty text-slate-400">
					Got questions? Need a web wizard? Your message awaits!
				</p> */}
			</div>
		</div>
	);
};

export default ContactPage;
