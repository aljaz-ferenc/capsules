import { reviews } from "../../data/reviews.ts";
import { useRef, useState } from "react";
import IconButton from "../shared/IconButton.tsx";
import ReviewSwitchEffect from "../reviews/ReviewSwitchEffect.tsx";
import { motion, useScroll, useTransform } from "motion/react";
import User from "../reviews/User.tsx";
import ProgressBar from "../shared/ProgressBar.tsx";

export default function Reviews() {
	const reviewsRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: reviewsRef,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 2], ["0%", "100%"]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	return (
		<>
			<motion.section
				style={{ y, opacity }}
				ref={reviewsRef}
				className="my-[140px] px-[20px] h-screen py-[20px] md:flex flex-col justify-center hidden md:mt-[20vw]"
			>
				<Content />
			</motion.section>
			<section
				id="reviews"
				className="my-[140px] px-[20px] h-screen py-[20px] flex flex-col justify-center md:hidden"
			>
				<Content />
			</section>
		</>
	);
}

function Content() {
	const [activeReview, setActiveReview] = useState(0);

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
		<>
			<p className="label mb-5">Do people like us?</p>
			<div className="flex-1">
				<ReviewSwitchEffect activeReview={activeReview} />
			</div>
			<User user={reviews[activeReview].user} />
			<div className="flex justify-between mt-[100px] md:mt-[5vw]">
				<div className="flex gap-[1px] [&_path]:fill-primary md:gap-[0.3vw]">
					<IconButton
						icon="arrow-left"
						onClick={handlePrev}
						// padding={"0.4vw"}
					/>
					<IconButton
						icon="arrow-right"
						onClick={handleNext}
						// padding={"0.4vw"}
					/>
				</div>
				<ProgressBar
					progress={(activeReview + 1) / 3}
					className="relative h-[1.5px] mb-[34px] mt-5 w-full ml-10 md:w-[25vw]"
				/>
			</div>
		</>
	);
}
