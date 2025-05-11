import { useScroll, useMotionValueEvent, useTransform } from "motion/react";
import { useRef, useState } from "react";
import InfiniteScrollText from "../shared/InfiniteScrollText.tsx";
import Classic from "../capsules/Classic.tsx";
import Terrace from "../capsules/Terrace.tsx";
import Desert from "../capsules/Desert.tsx";
import { motion } from "motion/react";

const duration = 0.5;

export default function Capsules() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({ target: containerRef });
	const [showInfiniteText, setShowInfiniteText] = useState(true);
	const [activeCapsule, setActiveCapsule] = useState<
		"classic" | "terrace" | "desert" | ""
	>("");

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		if (latest >= 0.1) setShowInfiniteText(false);
		else setShowInfiniteText(true);
		if (latest < 0.25) setActiveCapsule("");
		if (latest >= 0.25) setActiveCapsule("classic");
		if (latest >= 0.65) setActiveCapsule("terrace");
		if (latest >= 0.9) setActiveCapsule("desert");
	});

	const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	return (
		<section>
			<div
				className="relative h-[600vh] px-2.5 bg-gradient-to-b from-transparent via-muted/20 to-transparent"
				ref={containerRef}
			>
				<div className="sticky top-0 h-screen ">
					<motion.span
						animate={{ opacity: activeCapsule ? 1 : 0 }}
						transition={{ duration }}
						className="absolute right-5 top-1/2 -translate-y-1/2 z-[100] text-[5vw] font-bold text-transparent bg-primary bg-clip-text mix-blend-exclusion main-text"
					>
						(Scroll)
					</motion.span>
					<motion.div
						animate={{ opacity: activeCapsule ? 1 : 0 }}
						className="h-[1.5px] w-[25vw] bg-primary/30 absolute bottom-13 right-5 z-[100]"
					>
						<motion.div
							className="h-full w-1/3 bg-primary"
							transition={{ duration }}
							style={{ width: progress }}
						/>
					</motion.div>
					<InfiniteScrollText
						className="absolute top-1/2 right-0 overflow-hidden -translate-y-1/2"
						word="Capsules"
						duration={50}
						opacity={showInfiniteText ? 1 : 0}
					/>
					<Classic
						scrollYProgress={scrollYProgress}
						isActive={activeCapsule === "classic"}
					/>
					<Terrace
						scrollYProgress={scrollYProgress}
						isActive={activeCapsule === "terrace"}
					/>
					<Desert
						scrollYProgress={scrollYProgress}
						isActive={activeCapsule === "desert"}
					/>
				</div>
			</div>
			<div className="h-screen relative w-full">
				<div className="flex flex-col gap-[2.5vw] absolute top-1/2 left-1/2 -translate-1/2 text-center">
					<span className="label !text-muted">Closer than you think</span>
					<span className="subtitle inline-block w-[20ch]">
						Our Capsules® are located near Los Angeles with easy access by road.
					</span>
				</div>
			</div>
			<div>
				<span className="label ml-5 w-[20ch] inline-block">
					Want to learn more about the benefits of—Capsules®?
				</span>
				<InfiniteScrollText
					duration={50}
					opacity={1}
					word="Why Capsules®?*"
					className="bg-background static"
				/>
			</div>
		</section>
	);
}
