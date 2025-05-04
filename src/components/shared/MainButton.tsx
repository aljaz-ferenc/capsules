import { cn } from "../../utils/utils.ts";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { IconRight } from "../../data/icons.tsx";

type MainButtonProps = {
	className: string;
	text: string;
	icon: "arrow-up" | "hamburger" | "arrow-right";
};

export default function MainButton({
	text,
	icon,
	className = "",
}: MainButtonProps) {
	const [isHovered, setIsHovered] = useState(false);

	const iconComponent = useMemo(() => {
		switch (icon) {
			case "arrow-right":
				return <IconRight />;
		}
	}, [icon]);

	return (
		<button
			type="button"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={cn([
				"cursor-pointer p-1.5 bg-white rounded-full w-[145px] flex items-center relative h-full overflow-hidden",
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
				className="text-[#2a2725] flex flex-col w-full h-[200%] "
			>
				<div className="h-full w-full grid place-items-center">{text}</div>
				<div className="h-full w-full  grid place-items-center">{text}</div>
			</motion.div>
			<div className="bg-[#2a2725] p-3.5 h-full rounded-full aspect-square grid place-items-center">
				{iconComponent}
			</div>
		</button>
	);
}
