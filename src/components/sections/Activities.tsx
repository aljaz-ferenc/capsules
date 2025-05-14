import RevealSectionTitle from "../animations/RevealSectionTitle.tsx";
import { activities } from "../../data/activities.ts";
import { useInView } from "motion/react";
import { useRef } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
import ProgressBar from "../shared/ProgressBar.tsx";
import ActivitiesMobile from "../activities/ActivitiesMobile.tsx";
import ActivitiesDesktop from "../activities/ActivitiesDesktop.tsx";

export default function Activities() {
	const activitiesRef = useRef<HTMLDivElement>(null);
	const activitiesInView = useInView(activitiesRef);

	return (
		<section className="mt-20" id="activities">
			<div className="px-5">
				<RevealSectionTitle
					title="Discover the desert activities"
					subtitle="Ready for an adventure?"
				/>
				<p className="main-text text-muted mt-[50px]">
					We want to make sure your stay is exciting and enjoyable. That’s why
					we offer a variety of activities with different levels of engagement.
					Whether you seek thrills or tranquility, there’s something for
					everyone to make your desert stay truly memorable.
				</p>
				<p className="label w-[22ch] mt-[50px] mb-[30px]">
					Offered Capsules® activities have different levels of difficulty:
				</p>
				<div ref={activitiesRef} className="mb-[84px]">
					{activities.map((activity) => (
						<div key={activity.id}>
							<div className="flex justify-between">
								<span className="main-text text-muted">
									{activity.difficulty}
								</span>
								<span className="main-text-small text-muted text-left">
									{activity.duration}h duration
								</span>
							</div>
							<ProgressBar
								progress={activitiesInView ? activity.progress / 100 : 0}
								className="relative h-[1.5px] mb-[34px] mt-5"
							/>
						</div>
					))}
				</div>
			</div>
			<ActivitiesMobile />
			<ActivitiesDesktop />
		</section>
	);
}
