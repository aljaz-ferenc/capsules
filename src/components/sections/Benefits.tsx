import {
	useScroll,
	motion,
	useMotionValueEvent,
	useAnimate,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const duration = 1;

export default function Benefits() {
	const [scope, animate] = useAnimate();
	const { scrollYProgress } = useScroll({ target: scope });
	const direction = useRef<"forwards" | "backwards">("forwards");
	const [phase, setPhase] = useState<0 | 1 | 2>(0);

	useEffect(() => {
		const runAnimation = async () => {
			switch (phase) {
				case 0: {
					if (direction.current === "forwards") {
						animate("#slide2", { x: 0 }, { duration });

						await animate("#slide3", { y: "100%" }, { duration });
					} else {
						await animate("#slide3", { zIndex: 0 }, { duration: 0 });

						animate(
							"#imgTop",
							{ clipPath: "inset(0% 0% 0% 0%)" },
							{ duration },
						);
						animate("#slide2", { x: 0 }, { duration });
						animate("#slide3", { y: "100%" }, { duration });
					}
					break;
				}
				case 1: {
					if (direction.current === "forwards") {
						animate("#slide3", { y: "100%" }, { duration: 0 });
						animate(
							"#imgTop",
							{ clipPath: "inset(100% 0% 0% 0%)" },
							{ duration },
						);

						animate("#slide2", { x: "-100%" }, { duration });
						await animate("#slide3", { y: "-100%" }, { duration });
					} else {
						animate("#slide3", { x: 0 }, { duration });

						await animate("#slide3", { zIndex: 100 }, { duration: 0 });
						animate("#slide4", { y: "100%" }, { duration });
					}
					break;
				}
				case 2: {
					if (direction.current === "forwards") {
						animate(
							"#slide3",
							{ zIndex: direction.current === "forwards" ? 100 : 0 },
							{ duration: 0 },
						);

						animate("#slide4", { y: "-100%" }, { duration });
						await animate("#slide3", { x: "-100%" }, { duration });
					}
				}
			}
		};
		runAnimation();
	}, [phase, animate]);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		setPhase((prev) => {
			if (prev !== 0 && latest <= 1 / 3) {
				const currPhase = 0;
				direction.current = prev < currPhase ? "forwards" : "backwards";
				return 0;
			}
			if (prev !== 1 && latest > 1 / 3 && latest <= 2 / 3) {
				const currPhase = 1;
				direction.current = prev < currPhase ? "forwards" : "backwards";
				return 1;
			}
			if (prev !== 2 && latest > 2 / 3) {
				const currPhase = 2;
				direction.current = prev < currPhase ? "forwards" : "backwards";
				return 2;
			}
			return prev;
		});
	});

	return (
		<div ref={scope} className="h-[300vh] relative mb-50">
			<div className="sticky top-0 flex [&_>div]:rounded-[60px] [&_>div]:overflow-hidden">
				<div className="h-screen w-1/2 bg-secondary z-0 px-5 py-8" id="slide1">
					<p className="text-muted text-[60px] max-w-[15ch] leading-16">
						Enjoy the view through—the wide panoramic glass window
					</p>
				</div>
				<motion.div
					id="slide2"
					className="h-screen w-1/2 bg-secondary relative z-10"
				>
					<motion.img
						id="imgBottom"
						src="terrace.webp"
						alt=""
						className="h-full object-cover absolute inset-0"
					/>
					<motion.img
						id="imgTop"
						src="classic.webp"
						alt=""
						className="h-full object-cover absolute inset-0"
					/>
				</motion.div>
				<motion.div
					id="slide3"
					className="h-screen w-1/2 absolute bg-secondary right-0 top-full z-0 px-5 py-8"
				>
					<motion.p
						animate={{
							y: phase === 1 ? 0 : "-1ex",
						}}
						transition={{ duration }}
						className="text-muted text-[60px] max-w-[15ch] leading-16 absolute"
					>
						{"Sound of silence -out of the city rush with complete privacy"
							.split("")
							.map((letter, index) => {
								return (
									<motion.span
										animate={{
											clipPath:
												phase === 1
													? "inset(0% 0% 0% 0%)"
													: "inset(0% 0% 100% 0%)",
											y: phase === 1 ? 0 : "-1ex",
										}}
										transition={{ duration }}
										// biome-ignore lint/suspicious/noArrayIndexKey: static content
										key={index}
									>
										{letter}
									</motion.span>
								);
							})}
					</motion.p>
					<motion.p
						animate={{
							y: phase > 1 ? 0 : "-1ex",
						}}
						transition={{ duration }}
						className="text-muted text-[60px] max-w-[10ch] leading-16"
					>
						{"Relax yourself in-Wooden Jacuzzi"
							.split("")
							.map((letter, index) => {
								return (
									<motion.span
										animate={{
											y: phase > 1 ? 0 : "-1ex",
											clipPath:
												phase === 1
													? "inset(0% 0% 100% 0%)"
													: "inset(0% 0% 0% 0%)",
										}}
										transition={{ duration }}
										// biome-ignore lint/suspicious/noArrayIndexKey: static content
										key={index}
									>
										{letter}
									</motion.span>
								);
							})}
					</motion.p>
				</motion.div>
				<motion.div
					id="slide4"
					className="h-screen w-1/2 absolute bg-secondary right-0 top-full z-10"
				>
					<motion.img
						src="desert.webp"
						alt=""
						className="h-full object-cover absolute inset-0"
					/>
				</motion.div>
			</div>
		</div>
	);
}
