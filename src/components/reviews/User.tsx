import type { Review } from "../../data/reviews.ts";
import {AnimatePresence, motion} from "motion/react";
import {reviews} from "../../data/reviews.ts";

type UserProps = {
	user: Review["user"];
};

export default function User({ user }: UserProps) {
		return (
			<>
				{reviews.map(review => {
					if(review.user.id === user.id){
						return (
							<AnimatePresence mode='wait'>
								<div className="flex gap-4 h-[50px] items-center md:mt-[3vw]">
									<motion.img
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										exit={{ scale: 0 }}
										transition={{ duration: 0.4 }}
										src={user.image}
										alt=""
										className="aspect-square h-full rounded-full object-cover"
									/>
									<motion.div
										animate={{ x: 0, opacity: 1 }}
										initial={{ x: 20, opacity: 0 }}
										exit={{ x: 20, opacity: 0 }}
										transition={{ duration: 0.4 }}
										className="label text-muted flex flex-col"
									>
										<span>{review.user.name}</span>
										<span>({review.user.location})</span>
									</motion.div>
								</div>
							</AnimatePresence>
						)
					}
				})}
			</>
		)

}
