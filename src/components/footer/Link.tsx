import { use, useState } from "react";
import { ScrollContext } from "../../state/ScrollContext.tsx";
import { motion } from "motion/react";

type Link = {
	title: string;
	scrollToId: string;
};

type LinkProps = {
	link: Link;
};

const duration = 0.3;

export default function Link({ link }: LinkProps) {
	const [isHovered, setIsHovered] = useState(false);
	const { isScrolling, setIsScrolling } = use(ScrollContext);

	if (!setIsScrolling) return;

	const handleScrolToSection = (sectionId: string) => {
		if (isScrolling) return;
		setIsScrolling(true);
		setTimeout(() => {
			document.body.querySelector(`#${sectionId}`)?.scrollIntoView();
		}, 600);
	};

	return (
		<button
			type="button"
			onClick={() => handleScrolToSection(link.scrollToId)}
			className="relative overflow-hidden block cursor-pointer"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<p className="invisible" aria-hidden>
				{link.title}
			</p>
			<div>
				<motion.p
					animate={{ y: isHovered ? "-100%" : "0%" }}
					transition={{ duration, ease: "easeIn" }}
					className="absolute top-0 right-0"
				>
					{link.title}
				</motion.p>
				<motion.p
					animate={{ y: isHovered ? "-100%" : "0%" }}
					transition={{ duration, ease: "easeIn" }}
					className="absolute -bottom-full right-0"
				>
					{link.title}
				</motion.p>
			</div>
		</button>
	);
}
