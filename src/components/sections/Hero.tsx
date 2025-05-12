import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { cn } from "../../utils/utils.ts";
import { TextLogo } from "../icons.tsx";

export default function Hero() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

	return (
		<section
			className="p-[10px] flex flex-col px-[10px] justify-between pt-[50px] pb-[100px] !min-h-screen relative"
			id={"welcome"}
		>
			<div>
				<TextLogo
					className={"w-full xl:w-[53%] xl:z-20 xl:absolute xl:top-5 xl:left-5"}
				/>
				<h2 className="text-muted max-w-[11ch] mt-[20px] main-text xl:z-20 xl:absolute xl:bottom-5 xl:left-5 xl:mb-0 xl:text-primary">
					Closer to Nature-Closer to Yourself
				</h2>
			</div>
			<div>
				<p className="max-w-[30ch] mb-[30px] main-text-small xl:z-20 xl:absolute xl:bottom-5 xl:right-5 xl:mb-0">
					Spend unforgettable and remarkable time in the Californian desert
					with-Capsules.
				</p>
				<motion.img
					src="cap1.jpg"
					alt="hero page"
					style={{ scale }}
					className="h-[45vh] w-full overflow-hidden rounded-[30px] object-cover xl:absolute xl:top-0 xl:left-0 xl:w-full xl:h-full xl:z-10"
				/>
			</div>
		</section>
	);
}
