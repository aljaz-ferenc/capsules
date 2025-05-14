import { use, useState } from "react";
import { ScrollContext } from "../../state/ScrollContext.tsx";
import { motion } from "motion/react";
import type { Link as TLink } from "../constants/links.ts";
import { cn } from "../../utils/utils.ts";

type LinkProps = {
	link: TLink;
	className?: string;
	animate?: boolean;
	onClick?: () => void;
	globalScroll?: boolean;
};

const duration = 0.3;

export default function Link({
	link,
	className = "",
	animate,
	onClick,
	globalScroll = true,
}: LinkProps) {
	const [isHovered, setIsHovered] = useState(false);
	const { isScrolling, setIsScrolling } = use(ScrollContext);

	if (!setIsScrolling) return;
	const handleScrollToSection = (sectionId: string) => {
		if (isScrolling) return;

		if (globalScroll) {
			setIsScrolling(true);
		}
		setTimeout(() => {
			console.log(sectionId);
			document.body.querySelector(`#${sectionId}`)?.scrollIntoView();
		}, 1000);
	};

	return (
		<button
			type="button"
			onClick={() => {
				handleScrollToSection(link.scrollToId);
				onClick?.();
			}}
			className={cn([
				"relative overflow-hidden block cursor-pointer z-30",
				className,
			])}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{animate ? (
				<>
					<p className="invisible" aria-hidden>
						{link.title}
					</p>
					<div>
						<motion.p
							animate={{ y: isHovered ? "-100%" : "0%" }}
							transition={{ duration, ease: "easeIn" }}
							className="absolute top-0 right-0 text-primary"
						>
							{link.title}
						</motion.p>
						<motion.p
							animate={{ y: isHovered ? "-100%" : "0%" }}
							transition={{ duration, ease: "easeIn" }}
							className="absolute -bottom-full right-0 text-muted"
						>
							{link.title}
						</motion.p>
					</div>
				</>
			) : (
				<p>{link.title}</p>
			)}
		</button>
	);
}
