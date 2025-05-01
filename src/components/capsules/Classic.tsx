import { motion, useTransform } from "motion/react";
import RevealText from "../shared/RevealText.tsx";
import type { MotionValue } from "motion";
import OpenDetails from "../shared/OpenDetails.tsx";

type ClassicProps = {
	scrollYProgress: MotionValue<number>;
	isActive: boolean;
};

export default function Classic({ scrollYProgress, isActive }: ClassicProps) {
	const scale1 = useTransform(
		scrollYProgress,
		[0, 0.25, 1 / 3, 0.7],
		[0.45, 1, 1, 0.9],
	);
	const scale1img = useTransform(scrollYProgress, [0, 0.25], [1.3, 1]);
	const brightness1 = useTransform(
		scrollYProgress,
		[1 / 3, 0.7],
		["brightness(1)", "brightness(0.3)"],
	);
	const borderRadius1 = useTransform(scrollYProgress, [0, 0.2], [300, 50]);

	return (
		<motion.div
			style={{
				scale: scale1,
				borderRadius: borderRadius1,
				filter: brightness1,
			}}
			className="absolute inset-0 z-10 overflow-hidden"
		>
			<motion.img
				style={{ scale: scale1img }}
				alt="classic capsule"
				src="classic.webp"
				className="h-full w-full object-cover"
			/>
			<RevealText text="Classic Capsule" revealed={isActive} />
			<OpenDetails
				isVisible={isActive}
				text="Classic Capsule® boasts refined aesthetics and a modern
interior, creating an intimate retreat in a desert landscape"
			/>
		</motion.div>
	);
}
