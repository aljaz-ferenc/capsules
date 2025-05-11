import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "../../utils/utils.ts";

type RevealSectionTitleProps = {
	title: string;
	subtitle?: string;
	className?: string;
};

export default function RevealSectionTitle({
	title,
	subtitle,
	className,
}: RevealSectionTitleProps) {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start center", "end center"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
	const clipPath = useTransform(
		scrollYProgress,
		[0, 1],
		["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
	);

	return (
		<div className={cn(["mb-[5vw]", className])} ref={containerRef}>
			{subtitle && (
				<span className="label mb-[60px] inline-block z-20">{subtitle}</span>
			)}
			<motion.h2 className="section-title" style={{ y }}>
				{title.split("").map((letter, i) => (
					<motion.span key={`letter-${i + 1}`} style={{ clipPath }}>
						{letter}
					</motion.span>
				))}
			</motion.h2>
		</div>
	);
}
