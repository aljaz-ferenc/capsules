import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { activities } from "../../data/activities.ts";

export default function ActivitiesDesktop() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});
	const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${47.7}%`]);

	return (
		<div className="h-[400vh] w-[300vw] hidden md:block" ref={containerRef}>
			<div className="w-full overflow-hidden sticky top-0">
				<motion.div style={{ x }} className=" flex w-[300vw] gap-2.5 px-2.5">
					{activities.map((slide, index) => (
						<div
							key={slide.id}
							className="rounded-[60px] relative overflow-hidden w-[80vw]"
						>
							<div className="flex justify-between absolute top-8 w-full px-5">
								<h3 className=" main-text !text-primary max-w-[10ch]">
									{slide.title}
								</h3>
								<span className="rounded-full border border-primary self-start py-[0.25vw] px-[0.6vw] label">
									{slide.difficulty}
								</span>
							</div>
							<div className="flex justify-between absolute bottom-8 w-full px-5">
								<span className="max-w-[43ch] label">{slide.description}</span>
								<span className="ml-auto rounded-full border border-primary px-[0.6vw] py-[0.25vw] self-start label">
									{(index + 1).toString().padStart(2, "0")}
								</span>
								<span className="rounded-full border border-primary px-[0.6vw] py-[0.25vw] self-start opacity-20 label">
									0{activities.length}
								</span>
							</div>
							<img
								src={slide.image}
								className="object-cover h-screen w-screen"
								alt=""
							/>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
}
