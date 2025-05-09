import { reviews } from "../../data/reviews.ts";
import User from "../reviews/User.tsx";
import { IconRight } from "../../data/icons.tsx";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Reviews() {
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
		<section className="mt-50 px-10" id="reviews">
			<p className="text-[16px] mb-10">Do people like us?</p>
			<div className="mb-16">
				<AnimatePresence mode="wait">
					{reviews.map((review, reviewIndex) => {
						if (activeReview === reviewIndex)
							return (
								<div key={review.id} className="">
									<motion.p
										animate={{ y: 0 }}
										initial={{ y: "-2ex" }}
										exit={{ y: "-2ex" }}
										transition={{ duration: 0.4 }}
										className="text-[50px] leading-13 max-w-[23ch] mb-10 tracking-wide"
									>
										{review.review.split("").map((letter, index) => (
											<motion.span
												initial={{
													clipPath: "inset(100% 0% 0% 0%)",
												}}
												animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
												exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
												transition={{ duration: 0.4 }}
												key={`letter-${index + 1}`}
											>
												{letter}
											</motion.span>
										))}
									</motion.p>
									<User user={review.user} />
								</div>
							);
					})}
				</AnimatePresence>
			</div>
			<div className="flex gap-1">
				<button
					onClick={handlePrev}
					type="button"
					className="relative -scale-x-100 h-10 w-10 rounded-full border border-muted p-2.5 [&_path]:fill-muted hover:[&_path]:fill-secondary transition-all cursor-pointer"
				>
					<IconRight />
					<div className="absolute inset-0 bg-muted scale-0 group-hover:scale-100 transition rounded-full" />
				</button>
				<button
					onClick={handleNext}
					className="group relative overflow-hidden h-10 w-10 rounded-full border border-muted text-muted p-2.5 [&_path]:fill-muted hover:[&_path]:fill-secondary transition-all cursor-pointer"
					type="button"
				>
					<IconRight />
					<div className="absolute inset-0 bg-muted scale-0 group-hover:scale-100 transition rounded-full" />
				</button>
			</div>
		</section>
	);
}
