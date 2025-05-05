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
		<section>
			<div className="relative h-[600vh] px-2.5 " ref={containerRef}>
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
				</div>
			</div>
			<div className="h-screen relative w-full">
				<div className="flex flex-col gap-5 absolute top-1/2 left-1/2 -translate-1/2 text-center">
					<span className="text-[12px] text-muted">Closer than you think</span>
					<span className="text-[65px] leading-16 inline-block w-[20ch] text-primary">
						Our Capsules® are located near Los Angeles with easy access by road.
					</span>
				</div>
			</div>
			<div>
				<span className="text-[12px] max-w-[20ch] inline-block">
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
