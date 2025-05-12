import { AnimatePresence } from "motion/react";
import { reviews } from "../../data/reviews.ts";
import TextSwitchEffect from "../animations/TextSwitchEffect.tsx";

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
								className="main-text-large w-[13ch] md:w-[23ch]"
							/>
						</div>
					);
			})}
		</AnimatePresence>
	);
}
