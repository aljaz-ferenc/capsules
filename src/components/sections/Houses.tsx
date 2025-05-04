import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

export default function Houses() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "start center"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);
	const clipPath = useTransform(
		scrollYProgress,
		[0, 0.7],
		["inset(200% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
	);

	return (
		<section className="px-10">
			<div className="mb-10" ref={containerRef}>
				<motion.h2 className="text-[200px] leading-50" style={{ y }}>
					{"Choose the one you like best".split("").map((letter, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<motion.span key={i} style={{ clipPath }}>
							{letter}
						</motion.span>
					))}
				</motion.h2>
			</div>
			<div className="flex justify-around gap-30">
				<p className=" text-muted text-[45px] leading-13">
					You can choose one of three premium capsule houses in our offer. Each
					of our capsules provides the highest quality and meets the standards
					adjusted to your needs. Choose the one you like.
				</p>
				<div className="flex flex-col justrify-between h-full gap-10">
					<p className="text-[18px] font-bold w-full !min-w-[50vw]">
						All Capsules® houses—are built based on the same rules:
					</p>
					<div className="flex flex-wrap text-[45px] leading-10 gap-3">
						<span className="border-2 border-muted rounded-full  h-min text-muted p-4">
							Sustainable
						</span>
						<span className="border-2 border-white rounded-full  h-min p-4">
							Nature-care
						</span>
						<span className="border-2 border-muted rounded-full  h-min text-muted p-4">
							Smart
						</span>
						<span className="border-2 border-white rounded-full  h-min p-4">
							Privacy
						</span>
						<span className="border-2 border-muted rounded-full  h-min text-muted p-4">
							Spacious
						</span>
						<span className="border-2 border-white rounded-full  h-min p-4">
							Glassed-in
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
