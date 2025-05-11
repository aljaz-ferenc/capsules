import RevealSectionTitle from "../animations/RevealSectionTitle.tsx";
import { activities } from "../../data/activities.ts";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import ActivitySlide from "../activities/ActivitySlide.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";

export default function Activities() {
	const activitiesRef = useRef<HTMLDivElement>(null);
	const activitiesInView = useInView(activitiesRef, { margin: "-30%" });

	return (
		<section className="mt-20">
			<div className="px-5">
				<RevealSectionTitle
					title="Discover the desert activities"
					subtitle="Ready for an adventure?"
				/>
				<p className="main-text text-muted">
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
							<div className="relative h-[1.5px] mb-[34px] mt-5">
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
										scaleX: activitiesInView ? activity.progress / 100 : 0,
									}}
									transition={{ duration: 1, ease: "easeInOut" }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<Swiper spaceBetween={0} direction="horizontal" slidesPerView={1.2}>
				{Object.values(activities).map((activity, index) => (
					<SwiperSlide key={activity.id}>
						<ActivitySlide activity={activity} index={index} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
