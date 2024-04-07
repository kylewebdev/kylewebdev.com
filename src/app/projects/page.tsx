import React from "react";
import TransitionLink from "@/components/TransitionLink/TransitionLink";
import Image from "next/image";

import jmLogo from "./../../../public/jointmedias.jpg";

const WorkPage = () => {
	return (
		<div className="w-screen h-full min-h-dvh py-24 px-8 flex items-center justify-center">
			<div className="flex flex-col gap-6">
				<h1 className="font-normal tracking-tighter text-6xl lg:text-8xl text-balance">
					Projects
				</h1>

				{true ? (
					<>
						<p className="font-mono max-w-[66ch] leading-7 text-pretty text-slate-400">
							Unfortunately, I can&apos;t share any of my work at
							the moment. But I&apos;m always open to new
							opportunities. If you have any questions or would
							like to see my work, feel free to{" "}
							<TransitionLink href="/contact" label="reach out" />
							.
						</p>
					</>
				) : (
					<>
						<p className="font-mono max-w-[66ch] leading-7 text-pretty text-slate-400">
							Here are a few of the things I&apos;ve worked on. If
							you have a project in mind,{" "}
							<TransitionLink
								href="/contact"
								label="let me know"
							/>
							!
						</p>
						<hr className="border-slate-400/25 mb-12" />

						<a
							className="project"
							href="https://jointmedias.com"
							target="_blank"
							data-image={jmLogo.src}
						>
							<h2 className="font-normal tracking-tighter mb-1 text-3xl lg:text-4xl text-balance">
								Joint Medias
							</h2>

							<div className=" my-4 sm:hidden">
								<Image
									src={jmLogo}
									alt="Joint Medias"
									width={600}
									className="rounded-lg"
								/>
							</div>

							<p
								className="font-mono max-w-[66ch] leading-7 text-pretty text-slate-400"
								aria-label="tech stack:"
							>
								Headless WordPress,{" "}
								<span className="line-through">Gatsby</span>,{" "}
								<span className="line-through">SCSS</span>,
								Next.js, TypeScript, Tailwind CSS/CSS Modules,
								GSAP, Three.js
							</p>
						</a>
					</>
				)}
			</div>
		</div>
	);
};

export default WorkPage;
