import { AnimatePresence, motion, useTransform } from "motion/react";
import type { MotionValue } from "motion";
// import { useState } from "react";
// import OpenDetailsBtn from "./OpenDetailsBtn.tsx";
// import capsulesDetails from "../../data/capsulesDetails.ts";
import RevealText from "../animations/RevealText.tsx";

type ClassicProps = {
	scrollYProgress: MotionValue<number>;
	isActive: boolean;
};

export default function Classic({ scrollYProgress, isActive }: ClassicProps) {
	const scale = useTransform(
		scrollYProgress,
		[0, 0.25, 1 / 3, 0.7],
		[0.45, 1, 1, 0.9],
	);
	const scaleImg = useTransform(scrollYProgress, [0, 0.25], [1.3, 1]);
	const brightness = useTransform(
		scrollYProgress,
		[1 / 3, 0.7],
		["brightness(1)", "brightness(0.3)"],
	);
	const borderRadius = useTransform(scrollYProgress, [0, 0.2], ["15vw", "3vw"]);
	// const [detailsIsOpen, setDetailsIsOpen] = useState(false);

	return (
		<motion.div
			style={{
				scale: scale,
				borderRadius: borderRadius,
				filter: brightness,
			}}
			className="absolute inset-0 z-10 overflow-hidden m-[0.4vw]"
		>
			<motion.img
				style={{ scale: scaleImg }}
				alt="classic capsule"
				src="classic.webp"
				className="h-full w-full object-cover"
			/>
			<AnimatePresence mode="wait">
				{isActive && (
					<>
						<RevealText text="Classic Capsule®" />
						{/*<OpenDetailsBtn*/}
						{/*	capsule="classic"*/}
						{/*	sideText={capsulesDetails.classic.description}*/}
						{/*	detailsOpen={detailsIsOpen}*/}
						{/*	setDetailsOpen={setDetailsIsOpen}*/}
						{/*/>*/}
					</>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
