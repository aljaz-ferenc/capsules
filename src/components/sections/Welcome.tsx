import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Welcome() {
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
		<section className="px-[20px] py-[80px]">
			<div className="relative mb-[6vw]">
				<motion.div
					className="bg-background absolute inset-0 opacity-90"
					style={{ clipPath }}
				/>
				<p className="main-text-large" ref={containerRef}>
					Welcome to a world of wild California desert with Capsules®, where you
					will discover exquisite nature observing it from capsule houses,
					nestled in the one of the most breathtaking destination in the United
					States.
				</p>
			</div>
			<div className="flex mt-[50px]">
				<img src="welcome-1.webp" alt="" className="rounded-full w-1/2" />
				<img src="welcome-2.webp" alt="" className="rounded-full w-1/2" />
			</div>
			<p className="mt-10 main-text text-muted">
				A place where you can be with yourself and your loved ones. A place
				where you can experience unforgettable desert things.
			</p>
		</section>
	);
}
