import { AnimatePresence, motion, useTransform } from "motion/react";
import type { MotionValue } from "motion";
// import OpenDetailsBtn from "./OpenDetailsBtn.tsx";
// import capsulesDetails from "../../data/capsulesDetails.ts";
// import { useState } from "react";
import RevealText from "../animations/RevealText.tsx";

type TerraceProps = {
	scrollYProgress: MotionValue<number>;
	isActive: boolean;
};

export default function Terrace({ scrollYProgress, isActive }: TerraceProps) {
	const y = useTransform(scrollYProgress, [1 / 3, 0.65], ["100vh", "0vh"]);
	const brightness = useTransform(
		scrollYProgress,
		[0.7, 1],
		["brightness(1)", "brightness(0.3)"],
	);
	const scale = useTransform(scrollYProgress, [0.7, 1], [1, 0.9]);
	const scaleImg = useTransform(scrollYProgress, [1 / 3, 0.65], [1.3, 1]);
	const borderRadius = useTransform(
		scrollYProgress,
		[1 / 3, 0.65],
		["7vw", "3vw"],
	);
	// const [detailsIsOpen, setDetailsIsOpen] = useState(false);

	return (
		<motion.div
			style={{
				y,
				scale: scale,
				filter: brightness,
				borderRadius: borderRadius,
			}}
			className="absolute inset-0 z-10 overflow-hidden m-[0.4vw]"
		>
			<motion.img
				style={{ scale: scaleImg }}
				src="terrace.webp"
				className="h-full w-full object-cover"
			/>
			<AnimatePresence mode="wait">
				{isActive && (
					<>
						<RevealText text="Terrace Capsule®" />
						{/*<OpenDetailsBtn*/}
						{/*	capsule="terrace"*/}
						{/*	sideText={capsulesDetails.terrace.description}*/}
						{/*	detailsOpen={detailsIsOpen}*/}
						{/*	setDetailsOpen={setDetailsIsOpen}*/}
						{/*/>*/}
					</>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
