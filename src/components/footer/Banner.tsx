import { useScroll, useTransform, motion, useSpring } from "motion/react";
import { useRef } from "react";
import { TextLogo } from "../icons.tsx";

export default function Banner() {
	const imageRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: imageRef,
		offset: ["start end", "start start"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
	const springedScale = useSpring(scale, { damping: 20 });

	return (
		<div
			className="px-[10px] w-full h-[413px] relative md:h-screen"
			ref={imageRef}
		>
			<div className="rounded-[30px] w-full h-full overflow-hidden">
				<motion.img
					src="terrace.webp"
					alt=""
					className=" object-cover h-full w-full"
					style={{ scale: springedScale }}
				/>
			</div>
			<TextLogo className={"absolute top-1/2 left-1/2 -translate-1/2"} />
			<div className="hidden md:block">
				<h2 className="text-muted max-w-[11ch] mt-[20px] main-text md:z-20 md:absolute md:bottom-5 md:left-5 md:mb-0 md:text-primary">
					Closer to Nature-Closer to Yourself
				</h2>
				<p className="max-w-[30ch] mb-[30px] main-text-small md:z-20 md:absolute md:bottom-5 md:right-5 md:mb-0">
					Spend unforgettable and remarkable time in the Californian desert
					with-Capsules.
				</p>
			</div>
		</div>
	);
}
