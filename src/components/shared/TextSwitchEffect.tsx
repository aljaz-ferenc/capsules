import { motion } from "motion/react";

type TextSwitchEffectProps = {
	text: string;
	className?: string;
};

export default function TextSwitchEffect({
	text,
	className = "",
}: TextSwitchEffectProps) {
	return (
		<motion.p
			animate={{ y: 0 }}
			initial={{ y: "-2ex" }}
			exit={{ y: "-2ex" }}
			transition={{ duration: 0.4 }}
			className={className}
		>
			{text.split("").map((letter, index) => (
				<motion.span
					initial={{
						clipPath: "inset(100% 0% 0% 0%)",
					}}
					animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
					exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
					transition={{ duration: 0.4 }}
					key={`letter-${index + 1}`}
				>
					{letter}
				</motion.span>
			))}
		</motion.p>
	);
}
