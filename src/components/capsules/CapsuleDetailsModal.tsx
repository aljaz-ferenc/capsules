import { motion, usePresence, useAnimate } from "motion/react";
import {
	type Dispatch,
	type SetStateAction,
	use,
	useEffect,
	useState,
} from "react";
import type data from "../../data/capsulesDetails.ts";
import { useClickAway } from "@uidotdev/usehooks";
import { ReserveContext } from "../../App.tsx";

type CapsuleDetailsModalProps = {
	isVisible: boolean;
	text: string;
	capsuleData: (typeof data)["classic"];
	setDetailsOpen: Dispatch<SetStateAction<boolean>>;
};

const duration = 0.4;

export default function CapsuleDetailsModal({
	capsuleData,
	setDetailsOpen,
}: CapsuleDetailsModalProps) {
	const [ctaHovered, setCtaHovered] = useState(false);
	const [isPresent, safeToRemove] = usePresence();
	const [scope, animate] = useAnimate();
	const ref = useClickAway<HTMLDivElement>(() => {
		setDetailsOpen(false);
	});
	const { setIsOpen } = use(ReserveContext);

	useEffect(() => {
		if (isPresent) {
			const enterAnimation = async () => {
				animate("#modal", { scale: 0, opacity: 0 }, { duration: 0 });
				await animate("#cost", { width: 0 }, { duration: 0 });

				animate("#overlay", { opacity: 0.9 });
				await animate(
					"#modal",
					{ scale: 1, opacity: 1 },
					{ duration, ease: "easeInOut" },
				);
				await animate("#cost", { width: "100%", opacity: 1 }, { duration });
				await animate(".detailsText", { opacity: 1 }, { duration });
			};
			enterAnimation();
		} else {
			const exitAnimation = async () => {
				await animate(".detailsText", { opacity: 0 }, { duration });
				await animate("#cost", { width: 0, opacity: 0 }, { duration });
				animate("#overlay", { opacity: 0 }, { duration });
				await animate("#modal", { scale: 0, opacity: 0 }, { duration });
				safeToRemove();
			};
			exitAnimation();
		}
	}, [isPresent, animate, safeToRemove]);

	return (
		<div ref={scope}>
			<motion.div
				ref={ref}
				id="modal"
				className="flex-col absolute bottom-29 z-20 left-5 rounded-[60px] items-center origin-bottom-left bg-secondary"
			>
				<motion.div className=" relative overflow-hidden w-[540px] h-[786px]">
					{/*CONTENT*/}
					<div className="relative z-20 p-5 flex flex-col gap-7 h-full">
						<motion.div className="detailsText flex opacity-0 justify-between items-center mx-5 mt-5 detailsText">
							<div>
								<h3 className="text-[48px] leading-12">Details</h3>
								<span className="text-[18px]">({capsuleData?.title})</span>
							</div>
							<div>
								<img
									src="classic.webp"
									alt=""
									className="w-[160px] rounded-[20px]"
								/>
							</div>
						</motion.div>
						<motion.p className="detailsText opacity-0 text-[18px] text-muted mx-5 leading-6">
							{capsuleData?.description}
						</motion.p>
						<motion.div className="detailsText opacity-0 text-[18px] mx-5">
							{capsuleData?.features.map((feature, index) => (
								<div key={feature.label}>
									{index !== 0 && <hr className="my-3 text-muted" />}
									<div className="flex justify-between">
										<label htmlFor="">{feature.label}</label>
										<p>{feature.value}</p>
									</div>
								</div>
							))}
						</motion.div>
						<motion.button
							onMouseEnter={() => setCtaHovered(true)}
							onMouseLeave={() => setCtaHovered(false)}
							className="detailsText opacity-0 self-start mx-5 hover:text-muted overflow-hidden relative text-[18px] transition cursor-pointer"
							type="button"
							onClick={() => setIsOpen?.(true)}
						>
							Ready to reserve?
							<motion.div
								initial={{ scaleX: 1 }}
								animate={{ scaleX: ctaHovered ? 0 : 1 }}
								style={{ originX: ctaHovered ? 1 : 0 }}
								transition={{ duration, ease: "easeOut" }}
								className="absolute bottom-0.5 left-0 w-full h-px bg-white"
							/>
						</motion.button>
						<div className="mt-auto justify-self-end  flex relative justify-between text-[18px] p-7 py-8">
							<motion.div
								id="cost"
								className="origin-left opacity-0 bg-background absolute inset-0 rounded-full w-0"
							/>
							<motion.div className="detailsText opacity-0 z-10 origin-left text-muted">
								Cost
							</motion.div>
							<motion.div className="z-10 detailsText opacity-0">
								{capsuleData?.price}{" "}
								<span className="text-muted">USD / Night</span>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</motion.div>
			<motion.div
				id="overlay"
				className="absolute inset-0 opacity-0 bg-background w-screen h-screen"
			/>
		</div>
	);
}
