import { IconPlus, IconRight } from "./icons.tsx";
import { useAnimate, usePresence } from "motion/react";
import { use, useEffect, useState } from "react";
import capsulesData from "../data/capsulesData.ts";
import { cn } from "../utils/utils.ts";
import { ReserveModalContext } from "../state/ReserveModalContext.tsx";

export default function ReserveModal() {
	const [isPresent, safeToRemove] = usePresence();
	const [scope, animate] = useAnimate();
	const [selectedCapsule, setSelectedCapsule] = useState<
		"classic" | "terrace" | "desert"
	>("classic");
	const { setReserveModalIsOpen } = use(ReserveModalContext);

	useEffect(() => {
		if (isPresent) {
			const enterAnimation = async () => {
				await animate(scope.current, { opacity: 1 }, { duration: 0.5 });
			};
			enterAnimation();
		} else {
			const exitAnimation = async () => {
				await animate(scope.current, { opacity: 0 }, { duration: 0.5 });
				safeToRemove();
			};
			exitAnimation();
		}
	}, [animate, isPresent, safeToRemove, scope]);

	return (
		<div
			className="fixed inset-0 p-[10px] z-50 bg-[#181717] opacity-0"
			ref={scope}
		>
			<div className="h-[calc(100vh-20px)]  overflow-y-scroll rounded-[30px]">
				<div className="px-5 bg-darkBrown pb-[140px] pt-[80px]">
					<button
						type="button"
						onClick={() => setReserveModalIsOpen?.(false)}
						className="w-[52px] h-[52px] mt-2.5 rotate-45 [&_rect]:fill-white bg-[#181717] rounded-full grid place-items-center fixed top-4 left-[30px]"
					>
						<IconPlus />
					</button>
					<div>
						<h3 className="main-text mt-[20px]">
							Make it memorable and reserve one of our-Capsules®
						</h3>
						<p className="mt-[30px] label text-muted">
							Ready to start your journey to a desert adventure? Secure your
							capsule by filling out the reservation form. We hope to see you
							soon!
						</p>
						<p className="mt-[30px] label">
							(1) Which capsule would you like to reserve?
						</p>
						<div className="flex flex-col gap-[5px] mt-[30px]">
							{Object.entries(capsulesData).map(([capsule, data]) => (
								<button
									type="button"
									onClick={() =>
										setSelectedCapsule(
											capsule as "classic" | "terrace" | "desert",
										)
									}
									key={capsule}
									className="h-[80px] bg-[#181717]  flex rounded-[14px] items-center p-1 transition relative overflow-hidden w-full"
								>
									<div className="w-[129px] h-full rounded-[11px] overflow-hidden">
										<div
											className={cn([
												"h-full w-full bg-primary absolute inset-0 z-0 scale-0 rounded-full transition duration-300",
												selectedCapsule === capsule && "scale-110",
											])}
										/>
										<img src={data.image} alt="" className="scale-125 z-20" />
									</div>
									<p
										className={cn([
											"label ml-6 capitalize z-20 transition",
											selectedCapsule === capsule && "text-[#181717]",
										])}
									>
										{capsule.split(" ")[0]} C®
									</p>
								</button>
							))}
						</div>
					</div>
					<div className="label overflow-hidden bg-[#181717] w-[calc(100%-40px)] h-[72px] left-5 fixed bottom-5 rounded-[24px] flex justify-between items-center px-6">
						<div className="flex w-full items-center">
							<div className="flex flex-col">
								<span className="text-muted">Stay</span>
								<span>17.05 - 22.05</span>
							</div>
							<div className="h-8 w-[1px] bg-muted mx-[15px] opacity-20" />
							<div className="flex flex-col">
								<span className="text-muted">Cost</span>
								<span>10000 USD</span>
							</div>
							<button
								type="button"
								className="h-[50px] [&_path]:fill-[#181717] aspect-square rounded-full bg-primary px-[15px] grid place-items-center ml-auto"
							>
								<IconRight />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
