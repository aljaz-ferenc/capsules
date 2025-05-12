import { AnimatePresence, motion, useTransform } from "motion/react";
import type { MotionValue } from "motion";
// import OpenDetailsBtn from "./OpenDetailsBtn.tsx";
// import capsulesDetails from "../../data/capsulesDetails.ts";
// import { useState } from "react";
import RevealText from "../animations/RevealText.tsx";

type DesertProps = {
	scrollYProgress: MotionValue<number>;
	isActive: boolean;
};

export default function Desert({ scrollYProgress, isActive }: DesertProps) {
	const scaleImg = useTransform(scrollYProgress, [0.7, 0.9], [1.3, 1]);
	const borderRadius = useTransform(scrollYProgress, [0.7, 1], ["7vw", "3vw"]);
	const y = useTransform(scrollYProgress, [0.7, 0.9], ["100vh", "0vh"]);
	// const [detailsIsOpen, setDetailsIsOpen] = useState(false);

	return (
		<motion.div
			style={{ y, borderRadius: borderRadius }}
			className="absolute inset-0 z-10 overflow-hidden m-[0.4vw]"
		>
			<motion.img
				style={{ scale: scaleImg }}
				src="desert.webp"
				className=" w-full h-full object-cover z-20"
			/>
			<AnimatePresence mode="wait">
				{isActive && (
					<>
						<RevealText text="Desert Capsule®" />
						{/*<OpenDetailsBtn*/}
						{/*	capsule="desert"*/}
						{/*	sideText={capsulesDetails.desert.description}*/}
						{/*	detailsOpen={detailsIsOpen}*/}
						{/*	setDetailsOpen={setDetailsIsOpen}*/}
						{/*/>*/}
					</>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
