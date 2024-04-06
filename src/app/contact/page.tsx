import React from "react";

const ContactPage = () => {
	return (
		<div className="w-full h-full min-h-dvh py-24 px-8 flex items-center justify-center">
			<div className="flex flex-col gap-6">
				<h1 className="font-normal tracking-tighter text-6xl lg:text-8xl text-balance">
					Contact
				</h1>

				<div className="font-mono max-w-[66ch] leading-7 text-pretty text-slate-400">
					<div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
						<a
							className="link block transition-colors hover:text-white"
							href="https://twitter.com/kylewebdev_"
							target="_blank"
						>
							X &#8599;
						</a>

						<a
							className="link block transition-colors hover:text-white"
							href="https://github.com/kylewebdev"
							target="_blank"
						>
							GitHub &#8599;
						</a>

						<a
							className="link block transition-colors hover:text-white"
							href="https://www.linkedin.com/in/kylewebdev"
							target="_blank"
						>
							LinkedIn &#8599;
						</a>
						<a
							className="link block transition-colors hover:text-white"
							href="mailto:kylewebdev@gmail.com"
							target="_blank"
						>
							Email &#8599;
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
