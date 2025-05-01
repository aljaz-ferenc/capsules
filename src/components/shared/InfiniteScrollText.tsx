import { motion } from "motion/react";

type InfiniteScrollTextProps = {
	word: string;
	duration: number;
	fontSize?: string;
	className?: string;
	opacity: 1 | 0;
};

export default function InfiniteScrollText({
	word,
	duration = 10,
	fontSize = "200px",
	opacity,
	className = "",
}: InfiniteScrollTextProps) {
	const repeatedText = Array(8).fill(`${word}\u00A0`).join("");

	return (
		<motion.div
			animate={{
				opacity,
				transition: { duration: 1 },
			}}
			className={`absolute w-full overflow-hidden h-[200px] flex items-center absolute ${className}`}
		>
			<motion.div
				className="flex whitespace-nowrap"
				style={{ fontSize }}
				animate={{ x: ["0%", "-50%"] }}
				transition={{
					duration,
					ease: "linear",
					repeat: Number.POSITIVE_INFINITY,
				}}
			>
				<span>{repeatedText}</span>
				<span>{repeatedText}</span>
			</motion.div>
		</motion.div>
	);
}
