import { cn } from "../../utils/utils.ts";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { IconHamburger, IconRight, IconUp } from "../../data/icons.tsx";

export type MainButtonProps = {
	className?: string;
	text: string;
	icon:
		| "arrow-up"
		| "hamburger"
		| "arrow-right"
		| "linkedIn"
		| "instagram"
		| "dribble"
		| "behance";
	onClick?: () => void;
};

export default function MainButton({
	text,
	icon,
	className = "",
	onClick = () => {
		return null;
	},
}: MainButtonProps) {
	const [isHovered, setIsHovered] = useState(false);

	const iconComponent = useMemo(() => {
		switch (icon) {
			case "arrow-right":
				return <IconRight />;
			case "arrow-up":
				return <IconUp />;
			case "hamburger":
				return <IconHamburger />;
		}
	}, [icon]);

	return (
		<button
			onClick={onClick}
			type="button"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={cn([
				"cursor-pointer py-[1vw] px-[2vw] gap-[1vw] bg-white rounded-full flex items-center relative overflow-hidden z-30 aspect-[168.34/69.51]",
				className,
			])}
		>
			<motion.div
				animate={{
					y: isHovered ? "-25%" : "25%",
				}}
				transition={{
					duration: 0.3,
					ease: "easeInOut",
				}}
				className="text-secondary text-[1vw] flex flex-col overflow-hidden"
			>
				<div className="h-full grid place-items-center">{text}</div>
				<div className="h-full grid place-items-center">{text}</div>
			</motion.div>
			<div className="bg-secondary min-h-full rounded-full aspect-square grid place-items-center [&_svg]:h-[80%] ">
				{iconComponent}
			</div>
		</button>
	);
}
