import React from "react";

const ContactPage = () => {
	return (
		<div className="w-full h-full min-h-screen py-24 px-8 flex items-center justify-center">
			<h1 className="text-6xl font-normal tracking-tighter lg:text-8xl">
				<a
					className="block break-all"
					href="mailto:kylewebdev@gmail.com"
					target="_blank"
				>
					kylewebdev@gmail.com
				</a>
				{/* <sup className="relative -top-8 left-2 text-base tracking-normal lg:-top-16 lg:left-3 lg:text-2xl">
					[3]
				</sup> */}
			</h1>
		</div>
	);
};

export default ContactPage;
