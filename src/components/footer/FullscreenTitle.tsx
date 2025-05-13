import { motion, useInView } from "motion/react";
import { useRef } from "react";

const duration = 0.5;
const delay = 0.3;
const text = "Capsules®";

export default function FullscreenTitle() {
	const titleRef = useRef(null);
	const inView = useInView(titleRef);

	return (
		<motion.h1
			ref={titleRef}
			className="text-[22vw] relative"
			transition={{
				duration: !inView ? 0 : duration,
				ease: "easeInOut",
				delay: !inView ? 0 : delay,
			}}
			animate={{
				x: inView ? 0 : 200,
			}}
		>
			{text.split("").map((letter, index) => (
				<motion.span
					className="bg-gradient-to-b from-muted to-primary text-transparent bg-clip-text"
					key={`letter-${index + 1}`}
					transition={{
						duration: !inView ? 0 : duration,
						ease: "easeInOut",
						delay: !inView ? 0 : delay,
					}}
					animate={{
						clipPath: inView ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 0% 100%)",
					}}
				>
					{letter}
				</motion.span>
			))}
		</motion.h1>
	);
}
