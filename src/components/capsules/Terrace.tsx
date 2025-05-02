import { motion, useTransform } from "motion/react";
import RevealText from "../shared/RevealText.tsx";
import type { MotionValue } from "motion";
import OpenDetails from "../shared/OpenDetails.tsx";

type TerracecProps = {
	scrollYProgress: MotionValue<number>;
	isActive: boolean;
};

export default function Terrace({ scrollYProgress, isActive }: TerracecProps) {
	const y1 = useTransform(scrollYProgress, [1 / 3, 0.65], ["100vh", "0vh"]);
	const brightness2 = useTransform(
		scrollYProgress,
		[0.7, 1],
		["brightness(1)", "brightness(0.3)"],
	);
	const scale2 = useTransform(scrollYProgress, [0.7, 1], [1, 0.9]);
	const scale2img = useTransform(scrollYProgress, [1 / 3, 0.65], [1.3, 1]);
	const borderRadius2 = useTransform(scrollYProgress, [1 / 3, 0.65], [100, 50]);

	return (
		<motion.div
			style={{
				y: y1,
				scale: scale2,
				filter: brightness2,
				borderRadius: borderRadius2,
			}}
			className="absolute inset-0 z-10 overflow-hidden"
		>
			<motion.img
				style={{ scale: scale2img }}
				src="terrace.webp"
				className="h-full w-full object-cover"
			/>

			<RevealText text="Terrace Capsule" revealed={isActive} />
			<OpenDetails
				calspule="terrace"
				isVisible={isActive}
				text="The most prestige capsule with the biggest terrace
and jacuzzi with an amazing view of Los Angeles."
			/>
		</motion.div>
	);
}
