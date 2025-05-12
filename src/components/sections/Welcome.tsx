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
		<section className="px-[20px] py-[80px] xl:py-[15vw]">
			<div className="relative mb-[6vw]">
				<motion.div
					className="bg-background absolute inset-0 opacity-90"
					style={{ clipPath }}
				/>
				<p className="main-text-large xl:max-w-[26ch]" ref={containerRef}>
					Welcome to a world of wild California desert with Capsules®, where you
					will discover exquisite nature observing it from capsule houses,
					nestled in the one of the most breathtaking destination in the United
					States.
				</p>
			</div>
			<div className="xl:flex items-center xl:mt-[8vw]">
				<div className="flex mt-[50px]  xl:mt-0 xl:w-1/2 xl:mr-[15vw]">
					<img src="welcome-1.webp" alt="" className="rounded-full w-1/2" />
					<img src="welcome-2.webp" alt="" className="rounded-full w-1/2" />
				</div>
				<p className="mt-10 main-text text-muted xl:mt-0 xl:max-w-[25ch]">
					A place where you can be with yourself and your loved ones. A place
					where you can experience unforgettable desert things.
				</p>
			</div>
		</section>
	);
}
