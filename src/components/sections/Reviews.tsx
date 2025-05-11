import { reviews } from "../../data/reviews.ts";
import { useRef, useState } from "react";
import IconButton from "../shared/IconButton.tsx";
import ReviewSwitchEffect from "../reviews/ReviewSwitchEffect.tsx";
import { motion, useScroll, useTransform } from "motion/react";

export default function Reviews() {
	const [activeReview, setActiveReview] = useState(0);
	const reviewsRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: reviewsRef,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 2], ["0%", "100%"]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	const handlePrev = () => {
		setActiveReview((prev) => {
			if (prev === 0) {
				return reviews.length - 1;
			}
			return prev - 1;
		});
	};

	const handleNext = () => {
		setActiveReview((prev) => {
			if (prev === reviews.length - 1) {
				return 0;
			}
			return prev + 1;
		});
	};

	return (
		<motion.section
			style={{ y, opacity }}
			ref={reviewsRef}
			className="my-[12vw] px-10"
			id="reviews"
		>
			<p className="label mb-[3vw]">Do people like us?</p>
			<div className="mb-[5vw]">
				<ReviewSwitchEffect activeReview={activeReview} />
			</div>
			<div className="flex gap-[0.35vw] [&_path]:fill-primary">
				<IconButton icon="arrow-left" onClick={handlePrev} />
				<IconButton icon="arrow-right" onClick={handleNext} />
			</div>
		</motion.section>
	);
}
