import { motion, useInView } from "motion/react";
import { useRef } from "react";
import ActivitiesSlider from "./ActivitiesSlider.tsx";
import RevealSectionTitle from "../shared/RevealSectionTitle.tsx";

const activityDifficulties = {
	easy: {
		duration: "3-5",
		progress: 45,
	},
	medium: {
		duration: "8-12",
		progress: 80,
	},
	hard: {
		duration: "24",
		progress: 62,
	},
};

export default function DiscoverActivities() {
	const containerRef = useRef<HTMLDivElement>(null);
	const activitiesRef = useRef<HTMLDivElement>(null);
	const activitiesInView = useInView(activitiesRef, { margin: "-30%" });

	return (
		<div ref={containerRef} id="activities">
			<RevealSectionTitle
				title="Discover the desert activities"
				subtitle="Ready for an adventure?"
				className="px-5"
			/>
			<div className="flex text-muted gap-[10vw] px-8 mb-[13vw]">
				<div className="w-[80vw]">
					<p className="label !text-primary mb-5">
						Offered Capsules® activities have different levels of difficulty:
					</p>
					<div className="flex flex-col gap-[1.3vw]" ref={activitiesRef}>
						{Object.entries(activityDifficulties).map((diff) => (
							<div key={diff[0]}>
								<div className="flex justify-between items-center">
									<span className="text-[1.7vw] capitalize mb-[1.3vw]">
										{diff[0]}{" "}
									</span>
									<span className="label !text-muted">
										{diff[1].duration}h duration
									</span>
									<span className="label !text-muted">
										{diff[1].duration}h duration
									</span>
								</div>
								<div className="relative h-[1.5px]">
									<div
										className={
											"h-full w-full absolute left-0 top-0 opacity-20 bg-muted z-10"
										}
									/>
									<motion.div
										className={
											"h-full w-full absolute left-0 top-0 z-20 bg-primary origin-left"
										}
										animate={{
											scaleX: activitiesInView ? diff[1].progress / 100 : 0,
										}}
										transition={{ duration: 1, ease: "easeInOut" }}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="w-full main-text">
					We want to make sure your stay is exciting and enjoyable. That’s why
					we offer a variety of activities with different levels of engagement.
					Whether you seek thrills or tranquility, there’s something for
					everyone to make your desert stay truly memorable.
				</div>
			</div>
			<ActivitiesSlider />
		</div>
	);
}
