import { activities } from "../../data/activities.ts";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
import ActivitySlide from "./ActivitySlide.tsx";

export default function ActivitiesMobile() {
	return (
		<div className="md:hidden">
			<Swiper spaceBetween={0} direction="horizontal" slidesPerView={1.2}>
				{Object.values(activities).map((activity, index) => (
					<SwiperSlide key={activity.id}>
						<ActivitySlide activity={activity} index={index} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
