import { motion } from "motion/react";

type TextSwitchProps = {
	switchCondition: boolean;
	text1: string;
	text2: string;
	className?: string;
};

const duration = 1;

export default function TextSwitch({
	switchCondition,
	text1,
	text2,
	className = "",
}: TextSwitchProps) {
	return (
		<>
			<motion.p
				animate={{
					y: !switchCondition ? 0 : "-1ex",
				}}
				transition={{ duration }}
				className={className}
			>
				{text1.split("").map((letter, index) => {
					return (
						<motion.span
							animate={{
								clipPath: !switchCondition
									? "inset(0% 0% 0% 0%)"
									: "inset(0% 0% 100% 0%)",
								y: !switchCondition ? 0 : "-1ex",
							}}
							transition={{ duration }}
							key={`letter-${index + 1}`}
						>
							{letter}
						</motion.span>
					);
				})}
			</motion.p>
			<p className={className}>
				{text2.split("").map((letter, index) => {
					return (
						<motion.span
							animate={{
								clipPath: !switchCondition
									? "inset(0% 0% 100% 0%)"
									: "inset(0% 0% 0% 0%)",
							}}
							transition={{ duration, delay: 0.5 }}
							key={`letter-${index + 1}`}
						>
							{letter}
						</motion.span>
					);
				})}
			</p>
		</>
	);
}
