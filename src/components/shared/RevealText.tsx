import { motion } from "motion/react";

type RevealTextProps = {
	text: string;
};

export default function RevealText({ text }: RevealTextProps) {
	return (
		<motion.div
			className="absolute top-1/2 left-7.5 -translate-y-1/2 text-3xl"
			animate={{ x: 0, transition: { duration: 0.5 } }}
			initial={{ x: 50, transition: { duration: 0.5 } }}
			exit={{ x: 50, transition: { duration: 0.5 } }}
		>
			{text.split("").map((letter, i) => {
				return (
					<motion.span
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={i}
						className="text-[100px]"
						animate={{
							clipPath: "inset(0% 0% 0% 0%)",
						}}
						initial={{
							clipPath: "inset(0% 100% 0% 0%)",
						}}
						exit={{
							clipPath: "inset(0% 100% 0% 0%)",
						}}
						transition={{ duration: 0.5 }}
					>
						{letter}
					</motion.span>
				);
			})}
		</motion.div>
	);
}
