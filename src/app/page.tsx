import TransitionLink from "@/components/TransitionLink/TransitionLink";

export default function Home() {
	return (
		<div className="w-full h-full min-h-dvh py-24 px-8 flex items-center justify-center">
			<div className="flex flex-col gap-6">
				<h1 className="max-w-[16ch] font-normal tracking-tighter text-6xl lg:text-8xl text-balance">
					Building a{" "}
					<span className="gradient-text font-semibold">
						better web
					</span>
					, one site at a time.
				</h1>
				<p className="font-mono max-w-[66ch] leading-7 text-pretty text-slate-300">
					I believe in the power of the web to connect, inform, and
					inspire. Every project I work on is an opportunity to make
					that vision a reality. If you have a project in mind,{" "}
					<TransitionLink
						className="link"
						href="/contact"
						label="let me know"
					/>
					.
					{/* {" "}
					<TransitionLink
						className="link"
						href="/projects"
						label="Check out my work"
					/>
					. */}
				</p>
			</div>
		</div>
	);
}
