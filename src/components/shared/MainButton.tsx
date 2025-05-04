import { cn } from "../../utils/utils.ts";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { IconRight, IconUp } from "../../data/icons.tsx";

type MainButtonProps = {
	className?: string;
	text: string;
	icon: "arrow-up" | "hamburger" | "arrow-right";
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
		}
	}, [icon]);

	return (
		<button
			onClick={onClick}
			type="button"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={cn([
				"cursor-pointer p-1.5 bg-white rounded-full w-[170px] flex items-center relative h-[65px] overflow-hidden",
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
				className="text-secondary flex flex-col w-full h-[200%] "
			>
				<div className="h-full w-full grid place-items-center">{text}</div>
				<div className="h-full w-full  grid place-items-center">{text}</div>
			</motion.div>
			<div className="bg-secondary p-3.5 h-full rounded-full aspect-square grid place-items-center">
				{iconComponent}
			</div>
		</button>
	);
}
