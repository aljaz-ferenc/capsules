import {
	useScroll,
	motion,
	useMotionValueEvent,
	useAnimate,
	AnimatePresence,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import TextSwitchEffect from "../shared/TextSwitchEffect.tsx";

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
		<div ref={scope} className="h-[300vh] relative mb-50" id="whyCapsules">
			<div className="sticky top-0 flex [&_>div]:rounded-[60px] [&_>div]:overflow-hidden">
				<div
					className="h-screen w-1/2 bg-secondary z-0 px-5 py-8 relative"
					id="slide1"
				>
					<p className="main-text max-w-[15ch]">
						Enjoy the view through—the wide panoramic glass window
					</p>
					<SlideCounter count={1} total={3} />
					<p className="label absolute bottom-10 right-5 max-w-[35ch]">
						Get closer to the desert nature than ever before and admire this
						unique, breathtaking landscape.
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
					<SlideCounter count={phase === 2 ? 3 : 2} total={3} />
					<AnimatePresence mode="wait">
						{phase > 1 ? (
							<TextSwitchEffect
								key={1}
								text="Here, every whisper of nature recharges your soul-your sanctuary of solitude awaits."
								className="label absolute bottom-10 right-5 max-w-[38ch]"
							/>
						) : (
							<TextSwitchEffect
								key={2}
								text="Let the natural textures and gentle bubbles transport you to a realm of pure, handcrafted bliss."
								className="label absolute bottom-10 right-5 max-w-[38ch]"
							/>
						)}
						{phase > 1 ? (
							<TextSwitchEffect
								key={1}
								text="Sound of silence -out of the city rush with complete privacy"
								className="main-text max-w-[15ch] absolute"
							/>
						) : (
							<TextSwitchEffect
								key={2}
								text="Relax yourself in-Wooden Jacuzzi"
								className="main-text max-w-[15ch] absolute"
							/>
						)}
					</AnimatePresence>
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

type SlideCounterProps = {
	count: number;
	total: number;
};

function SlideCounter({ count, total }: SlideCounterProps) {
	return (
		<div className="absolute bottom-8 left-5 flex text-primary">
			<div className="rounded-full grid place-items-center aspect-square border label p-[0.5vw] border-primary">
				{count.toString().padStart(2, "0")}
			</div>
			<div className="rounded-full grid place-items-center aspect-square border label p-[0.5vw] opacity-20 border-primary text-primary">
				{total.toString().padStart(2, "0")}
			</div>
		</div>
	);
}
