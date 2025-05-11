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
			className="h-screen p-[10px] flex flex-col justify-center"
			id={"welcome"}
		>
			<div className="px-[10px]">
				<TextLogo className={cn(["w-full"])} />
				<h2 className="text-muted max-w-[11ch] mt-[20px] main-text">
					Closer to Nature-Closer to Yourself
				</h2>
				<p className="max-w-[30ch] mb-[30px] main-text-small">
					Spend unforgettable and remarkable time in the Californian desert
					with-Capsules.
				</p>
			</div>
			<motion.img
				src="cap1.jpg"
				alt="hero page"
				style={{ scale }}
				className="h-[45vh] w-full overflow-hidden rounded-[30px] object-cover"
			/>
		</section>
	);
}
