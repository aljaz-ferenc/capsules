import { AnimatePresence, motion, useTransform } from "motion/react";
import type { MotionValue } from "motion";
import { useState } from "react";
import RevealText from "../animations/RevealText.tsx";
import { IconPlus } from "../icons.tsx";
import capsulesData from "../../data/capsulesData.ts";
import CapsuleDetails from "../shared/CapsuleDetails.tsx";

type DesertProps = {
	scrollYProgress: MotionValue<number>;
	isActive: boolean;
};

export default function Desert({ scrollYProgress, isActive }: DesertProps) {
	const scaleImg = useTransform(scrollYProgress, [0.7, 0.95], [1.3, 1]);
	const borderRadius = useTransform(scrollYProgress, [0.7, 1], ["7vw", "3vw"]);
	const y = useTransform(scrollYProgress, [0.75, 0.95], ["100vh", "0vh"]);
	const [detailsIsOpen, setDetailsIsOpen] = useState(false);

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
								{capsulesData.desert.description}
							</motion.p>
						</div>
						<AnimatePresence>
							{detailsIsOpen && (
								<CapsuleDetails
									setIsOpen={setDetailsIsOpen}
									data={capsulesData.desert}
								/>
							)}
						</AnimatePresence>
					</>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
