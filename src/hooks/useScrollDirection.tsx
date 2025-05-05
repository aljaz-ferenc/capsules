import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

export default function useScrollDirection() {
	const { scrollY } = useScroll();
	const lastScroll = useRef(0);
	const [direction, setDirection] = useState<"up" | "down">("down");

	useMotionValueEvent(scrollY, "change", (latest) => {
		const newDirection = latest < lastScroll.current ? "up" : "down";
		if (newDirection !== direction) {
			setDirection(newDirection);
		}
		lastScroll.current = latest;
	});

	return { direction };
}
