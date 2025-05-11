import type { Review } from "../../data/reviews.ts";
import { motion } from "motion/react";

type UserProps = {
	user: Review["user"];
};

export default function User({ user }: UserProps) {
	return (
		<div className="flex gap-[2vw] items-center">
			<motion.img
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0 }}
				transition={{ duration: 0.4 }}
				src={user.image}
				alt=""
				className="w-[5vw] h-[4.5vw] rounded-full object-cover"
			/>
			<motion.div
				animate={{ x: 0, opacity: 1 }}
				initial={{ x: 20, opacity: 0 }}
				exit={{ x: 20, opacity: 0 }}
				transition={{ duration: 0.4 }}
				className="label !text-muted flex flex-col"
			>
				<span>{user.name}</span>
				<span>({user.location})</span>
			</motion.div>
		</div>
	);
}
