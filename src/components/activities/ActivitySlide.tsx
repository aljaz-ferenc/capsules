import type { activities } from "../../data/activities.ts";
import { cn } from "../../utils/utils.ts";
import ItemNumber from "../shared/ItemNumber.tsx";

type ActivitySlideProps = {
	activity: (typeof activities)[0];
	className?: string;
	index: number;
};

export default function ActivitySlide({
	activity,
	className = "",
	index,
}: ActivitySlideProps) {
	return (
		<article className="w-[80vw] mx-[10px]">
			<div className="relative h-[256px]">
				<div
					className={cn(["rounded-[30px] h-full overflow-hidden", className])}
				>
					<img src={activity.image} alt="" className="h-full object-cover" />
				</div>
				<ItemNumber
					total={3}
					current={index + 1}
					className="absolute bottom-5 left-5"
				/>
				<div className="absolute top-5 right-5 px-[11px] py-1.5 border-[2px] rounded-full label border-white">
					{activity.difficulty}
				</div>
			</div>
			<div className="mt-[30px] mb-[25px] flex flex-col px-[10px]">
				<p className="main-text w-[9.9ch]">{activity.title}</p>
				<p className="mt-[18px] label text-muted">{activity.description}</p>
			</div>
		</article>
	);
}
