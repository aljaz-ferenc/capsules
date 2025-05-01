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
		<section className="mt-70 px-10">
			<div className="relative mb-40">
				<motion.div
					className="bg-[#181717] absolute inset-0 opacity-90"
					style={{ clipPath }}
				/>
				<p
					className="text-[88.5px] leading-22 tracking-[1px] max-w-[35ch]"
					ref={containerRef}
				>
					Welcome to a world of wild California desert with Capsules®, where you
					will discover exquisite nature observing from capsule houses, nestled
					in the one of the most breathtaking destination on the United
					States.destination on the United States.
				</p>
			</div>
			<div className="flex items-start">
				<div className="flex pb-50 w-full">
					<img src="welcome-1.webp" alt="" className="rounded-full" />
					<img src="welcome-2.webp" alt="" className="rounded-full" />
				</div>
				<div className="w-full">
					<p className="text-[#b1a696] text-[50px] leading-13 max-w-">
						A place where you can be with yourself and your loved ones. A place
						where you can experience unforgettable desert things.
					</p>
				</div>
			</div>
		</section>
	);
}
