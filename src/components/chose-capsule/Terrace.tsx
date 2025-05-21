import { AnimatePresence, motion, useTransform } from "motion/react";
import type { MotionValue } from "motion";
import { useState } from "react";
import RevealText from "../animations/RevealText.tsx";
import { IconPlus } from "../icons.tsx";
import capsulesData from "../../data/capsulesData.ts";
import CapsuleDetails from "../shared/CapsuleDetails.tsx";

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
	const [detailsIsOpen, setDetailsIsOpen] = useState(false);

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
						<div className="flex">
							<motion.button
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0 }}
								transition={{ duration: 0.5 }}
								type="button"
								onClick={() => setDetailsIsOpen(true)}
								className="cursor-pointer absolute bottom-[10px] right-[10px]  w-[52px] h-[52px] bg-lightBrown rounded-full grid place-items-center hover:opacity-90 md:bottom-[3vw] md:left-[1vw] md:w-[3vw] md:h-[3vw]"
							>
								<IconPlus />
							</motion.button>
							<motion.p
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: 50 }}
								transition={{ duration: 0.5 }}
								className="label  absolute md:bottom-[3.3vw] md:left-[5.5vw] w-[28vw] hidden md:block text-primary"
							>
								{capsulesData.terrace.description}
							</motion.p>
						</div>
						<AnimatePresence>
							{detailsIsOpen && (
								<CapsuleDetails
									setIsOpen={setDetailsIsOpen}
									data={capsulesData.terrace}
								/>
							)}
						</AnimatePresence>
					</>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
