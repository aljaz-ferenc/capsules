import { AnimatePresence, motion, useTransform } from "motion/react";
import type { MotionValue } from "motion";
import RevealText from "../animations/RevealText.tsx";
import { IconPlus } from "../icons.tsx";
import { useState } from "react";
import CapsuleDetails from "../shared/CapsuleDetails.tsx";
import capsulesData from "../../data/capsulesData.ts";

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
	const [detailsIsOpen, setDetailsIsOpen] = useState(false);

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
								{capsulesData.classic.description}
							</motion.p>
						</div>
						<AnimatePresence>
							{detailsIsOpen && (
								<CapsuleDetails
									setIsOpen={setDetailsIsOpen}
									data={capsulesData.classic}
								/>
							)}
						</AnimatePresence>
					</>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
