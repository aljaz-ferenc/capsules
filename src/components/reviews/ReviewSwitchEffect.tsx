import { AnimatePresence } from "motion/react";
import { reviews } from "../../data/reviews.ts";
import User from "./User.tsx";
import TextSwitchEffect from "../shared/TextSwitchEffect.tsx";

type TextSwitchProps = {
	activeReview: number;
};

export default function ReviewSwitchEffect({ activeReview }: TextSwitchProps) {
	return (
		<AnimatePresence mode="wait">
			{reviews.map((review, reviewIndex) => {
				if (activeReview === reviewIndex)
					return (
						<div key={review.id} className="">
							<TextSwitchEffect
								text={review.review}
								className="subtitle max-w-[23ch] mb-10 tracking-wide"
							/>
							<User user={review.user} />
						</div>
					);
			})}
		</AnimatePresence>
	);
}
