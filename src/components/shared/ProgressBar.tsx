import { motion } from "motion/react";

export default function ProgressBar({
	progress,
	className = "",
}: { progress: number; className?: string }) {
	return (
		<div className={className}>
			<div
				className={
					"h-full w-full absolute left-0 top-0 opacity-20 bg-muted z-10"
				}
			/>
			<motion.div
				className={
					"h-full w-full absolute left-0 top-0 z-20 bg-primary origin-left"
				}
				animate={{
					scaleX: progress,
				}}
				transition={{ duration: 1, ease: "easeInOut" }}
			/>
		</div>
	);
}
