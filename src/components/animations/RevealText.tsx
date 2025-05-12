import { motion } from "motion/react";

type RevealTextProps = {
	text: string;
};

const duration = 0.5;

export default function RevealText({ text }: RevealTextProps) {
	return (
		<motion.div
			className="absolute top-1/2 left-7.5 -translate-y-1/2 text-3xl"
			animate={{ x: 0, transition: { duration } }}
			initial={{ x: 50, transition: { duration } }}
			exit={{ x: 50, transition: { duration } }}
		>
			{text.split("").map((letter, i) => {
				return (
					<motion.span
						key={`letter-${i + 1}`}
						className="main-text-large text-white"
						animate={{
							clipPath: "inset(0% 0% 0% 0%)",
						}}
						initial={{
							clipPath: "inset(0% 100% 0% 0%)",
						}}
						exit={{
							clipPath: "inset(0% 100% 0% 0%)",
						}}
						transition={{ duration }}
					>
						{letter}
					</motion.span>
				);
			})}
		</motion.div>
	);
}
