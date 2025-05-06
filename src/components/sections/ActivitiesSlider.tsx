import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { activities } from "../../data/activities.ts";

export default function ActivitiesSlider() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});
	const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${47.7}%`]);

	return (
		<div className="h-[400vh] w-[300vw]" ref={containerRef}>
			<div className="w-full overflow-hidden sticky top-0">
				<motion.div style={{ x }} className=" flex w-[300vw] gap-2.5 px-2.5">
					{activities.map((slide, index) => (
						<div
							key={slide.id}
							className="rounded-[60px] relative overflow-hidden w-[80vw]"
						>
							<div className="flex justify-between absolute top-8 w-full px-10">
								<h3 className=" text-[30px] max-w-[10ch] leading-8">
									{slide.title}
								</h3>
								<span className="rounded-full border border-white self-start px-3">
									{slide.difficulty}
								</span>
							</div>
							<div className="flex justify-between absolute bottom-8 w-full px-10">
								<span className="max-w-[43ch] leading-5">
									{slide.description}
								</span>
								<span className="ml-auto rounded-full border border-white px-3 self-start">
									0{index}
								</span>
								<span className="rounded-full border border-white px-3 self-start opacity-20">
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
