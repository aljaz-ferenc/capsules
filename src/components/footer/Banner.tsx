import { useScroll, useTransform, motion, useSpring } from "motion/react";
import { useRef } from "react";

export default function Banner() {
	const imageRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: imageRef,
		offset: ["start end", "start start"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
	const springedScale = useSpring(scale, { damping: 20 });

	return (
		<div className="px-[10px] w-full h-[413px] relative ">
			<div className="rounded-[30px] w-full h-full overflow-hidden">
				<motion.img
					ref={imageRef}
					src="terrace.webp"
					alt=""
					className=" object-cover h-full"
					style={{ scale: springedScale }}
				/>
			</div>
			<h1 className="section-title absolute top-1/2 left-1/2 -translate-1/2">
				Capsules
			</h1>
		</div>
	);
}
