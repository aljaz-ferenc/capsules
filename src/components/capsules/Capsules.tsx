import { useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";
import InfiniteScrollText from "../shared/InfiniteScrollText.tsx";
import Classic from "./Classic.tsx";
import Terrace from "./Terrace.tsx";
import Desert from "./Desert.tsx";

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

	return (
		<section className="p-2.5">
			<div className="relative h-[600vh]" ref={containerRef}>
				<div className="sticky top-0 h-screen">
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
					{/*DESERT*/}
				</div>
			</div>
			<div className="h-screen relative">
				<span className="text-4xl text-center absolute top-1/2 left-1/2 -translate-1/2">
					Our Capsules® are located near Los Angeles with easy access by road.
				</span>
			</div>
		</section>
	);
}
