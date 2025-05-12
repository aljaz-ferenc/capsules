import { useScroll, useMotionValueEvent, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import InfiniteScrollText from "../animations/InfiniteScrollText.tsx";
import Classic from "./Classic.tsx";
import Terrace from "./Terrace.tsx";
import Desert from "./Desert.tsx";
import ProgressBar from "../shared/ProgressBar.tsx";

const duration = 0.5;

export default function ChooseCapsuleDesktop() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({ target: containerRef });
	const [showInfiniteText, setShowInfiniteText] = useState(true);
	const [activeCapsule, setActiveCapsule] = useState<
		"classic" | "terrace" | "desert" | ""
	>("");

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		if (latest >= 0.1) setShowInfiniteText(false);
		else setShowInfiniteText(true);
		if (latest < 0.25) {
			setActiveCapsule("");
		}
		if (latest >= 0.25) {
			setActiveCapsule("classic");
		}
		if (latest >= 0.65) {
			setActiveCapsule("terrace");
		}
		if (latest >= 0.9) {
			setActiveCapsule("desert");
		}
	});

	const progressMotionVal = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<section className="hidden md:block">
			<div
				className="relative h-[600vh] bg-gradient-to-b from-transparent via-muted/20 to-transparent"
				ref={containerRef}
			>
				<div className="sticky top-0 h-screen ">
					<motion.span
						animate={{ opacity: activeCapsule ? 1 : 0 }}
						transition={{ duration }}
						className="absolute right-5 top-1/2 -translate-y-1/2 z-[100]  font-bold text-transparent bg-primary bg-clip-text mix-blend-exclusion main-text"
					>
						(Scroll)
					</motion.span>
					<motion.div
						animate={{
							opacity: activeCapsule ? 1 : 0,
							scaleX: activeCapsule ? 1 : 0,
						}}
						transition={{ duration, ease: "easeInOut" }}
						className="absolute bottom-13 right-5 z-[100] h-[1.5px] origin-left opacity-0  w-[25vw]"
					>
						<ProgressBar progress={progressMotionVal.get()} className="" />
					</motion.div>
					<InfiniteScrollText
						className="absolute top-1/2 right-0 overflow-hidden -translate-y-1/2"
						word="ChooseCapsuleMobile"
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
		</section>
	);
}
