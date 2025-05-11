import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { cn } from "../../utils/utils.ts";
import { TextLogo } from "../../data/icons.tsx";

type WelcomeProps = {
	titlePosition: "top-left" | "center";
};

export default function Welcome({ titlePosition }: WelcomeProps) {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

	return (
		<section
			className="w-screen h-screen relative text-primary p-2.5"
			id={titlePosition === "top-left" ? "welcome" : ""}
		>
			<div
				className="rounded-[60px] w-full h-full overflow-hidden"
				ref={containerRef}
			>
				<motion.img
					src="cap1.jpg"
					alt="hero page"
					style={{ scale }}
					className="z-10 rounded-[60px] object-cover h-full w-full"
				/>
			</div>
			<div className="p-8 absolute top-0 h-full w-full z-20 flex flex-col justify-between">
				<TextLogo
					className={cn([
						titlePosition === "center"
							? "absolute top-1/2 left-1/2 -translate-1/2"
							: "w-[52vw]",
					])}
				/>
				<div
					className={cn([
						"flex justify-between w-full text-xl items-end pb-4",
						titlePosition === "center" && "absolute bottom-5 pr-[4vw]",
					])}
				>
					<span className="text-[2.5vw] max-w-[11ch] leading-[2.5vw]">
						Closer to Nature—Closer to Yourself
					</span>
					<span className="max-w-[34ch] text-[0.9vw] leading-[1.2vw] font-bold mr-2 pb-4 tracking-wider">
						Spend unforgettable and remarkable time in the Californian desert
						with—Capsules.
					</span>
				</div>
			</div>
		</section>
	);
}
