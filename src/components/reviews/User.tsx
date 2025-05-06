import type { Review } from "../../data/reviews.ts";
import { motion } from "motion/react";

type UserProps = {
	user: Review["user"];
};

export default function User({ user }: UserProps) {
	return (
		<div className="flex gap-3 items-center">
			<motion.img
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0 }}
				transition={{ duration: 0.4 }}
				src={user.image}
				alt=""
				className="w-20 h-18 rounded-full object-cover"
			/>
			<motion.div
				animate={{ x: 0, opacity: 1 }}
				initial={{ x: 20, opacity: 0 }}
				exit={{ x: 20, opacity: 0 }}
				transition={{ duration: 0.4 }}
				className="text-muted flex flex-col leading-5"
			>
				<span>{user.name}</span>
				<span>({user.location})</span>
			</motion.div>
		</div>
	);
}
