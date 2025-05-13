import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
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
			ref={containerRef}
			className="p-[10px] flex flex-col px-[10px] justify-between pt-[50px] pb-[100px] !min-h-screen relative  overflow-hidden rounded-[30px]"
			id={"welcome"}
		>
			<div className="px-[10px]">
				<TextLogo
					className={"w-full md:w-[53%] md:z-20 md:absolute md:top-5 md:left-5"}
				/>
				<h2 className="text-muted max-w-[11ch] mt-[20px] main-text md:z-20 md:absolute md:bottom-5 md:left-5 md:mb-0 md:text-primary">
					Closer to Nature-Closer to Yourself
				</h2>
			</div>
			<div>
				<p className="px-[10px] max-w-[32ch] mb-[30px] main-text-small md:z-20 md:absolute md:bottom-5 md:right-5 md:mb-0">
					Spend unforgettable and remarkable time in the Californian desert
					with-Capsules.
				</p>
				<div className="h-[45vh] md:absolute md:top-0 md:left-0 md:w-full md:h-full md:z-10 rounded-[30px] overflow-hidden">
					<motion.img
						src="cap1.jpg"
						alt="hero page"
						style={{ scale: innerWidth >= 768 ? scale : 1 }}
						className="h-full w-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
