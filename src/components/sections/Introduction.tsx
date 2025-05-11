import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Introduction() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["5% 100%", "100% 50%"],
	});
	const clipPath = useTransform(
		scrollYProgress,
		[0, 1],
		["inset(0% 0% 0% 0%)", "inset(100% 0% 0% 0%)"],
	);

	return (
		<section className="mt-70 px-10" id="introduction">
			<div className="relative mb-40">
				<motion.div
					className="bg-background absolute inset-0 opacity-90"
					style={{ clipPath }}
				/>
				<p
					className="text-[5vw] leading-[5.2vw] max-w-[27ch] "
					ref={containerRef}
				>
					Welcome to a world of wild California desert with Capsules®, where you
					will discover exquisite nature observing it from capsule houses,
					nestled in the one of the most breathtaking destination in the United
					States.
				</p>
			</div>
			<div className="w-full pb-50 flex items-center">
				<div className="flex w-1/2 pr-[10vw]">
					<img src="welcome-1.webp" alt="" className="rounded-full w-1/2" />
					<img src="welcome-2.webp" alt="" className="rounded-full w-1/2" />
				</div>
				<div className="w-full [&_p]:text-muted text-[2vw] leading-[2vw] pl-[4vw] max-w-[50vw]">
					<p className="max-w-[23ch] main-text">
						A place where you can be with yourself and your loved ones.
					</p>
					<p className="max-w-[25ch] main-text">
						A place where you can experience unforgettable desert things.
					</p>
				</div>
			</div>
		</section>
	);
}
