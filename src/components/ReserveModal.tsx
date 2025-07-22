import { IconPlus, IconRight } from "./icons.tsx";
import { useAnimate, usePresence } from "motion/react";
import { use, useEffect, useState } from "react";
import capsulesData from "../data/capsulesData.ts";
import { cn } from "../utils/utils.ts";
import { ReserveModalContext } from "../state/ReserveModalContext.tsx";
import MainButton from "./shared/MainButton.tsx";
import { useClickAway } from "@uidotdev/usehooks";
import useLockScroll from "../hooks/useLockScroll.tsx";

export default function ReserveModal() {
	const { setReserveModalIsOpen } = use(ReserveModalContext);
	const [isPresent, safeToRemove] = usePresence();
	const [scope, animate] = useAnimate();
	const [selectedCapsule, setSelectedCapsule] = useState<
		"classic" | "terrace" | "desert"
	>("classic");

	const containerRef = useClickAway<HTMLDivElement>(() => {
		setReserveModalIsOpen?.(false);
	});

	useLockScroll(isPresent);

	useEffect(() => {
		if (isPresent) {
			const enterAnimation = async () => {
				await animate(scope.current, { opacity: 1 }, { duration: 0.5 });

				if (innerWidth > 768) {
					animate("#background", { width: "30vw" }, { duration: 0.5 });
					await animate("#closeBtn", { opacity: 1 }, { duration: 0.5 });
					await animate(
						"#footer",
						{ width: "100%", opacity: 1 },
						{ duration: 0.5 },
					);
					await animate(".content", { opacity: 1 }, { duration: 0.5 });
				}
			};
			enterAnimation();
		} else {
			const exitAnimation = async () => {
				if (innerWidth > 768) {
					await animate(".content", { opacity: 0 }, { duration: 0.5 });
					await animate("#footer", { width: 0, opacity: 0 }, { duration: 0.5 });
					animate("#background", { width: "0vw" }, { duration: 0.5 });
					await animate("#closeBtn", { opacity: 0 }, { duration: 0.5 });
				}
				await animate(scope.current, { opacity: 0 }, { duration: 0.5 });

				safeToRemove();
			};
			exitAnimation();
		}
	}, [animate, isPresent, safeToRemove, scope]);

	return (
		<div
			className="fixed inset-0 p-[10px] z-50 bg-[#181717]/90 md:p-[0.5vw] opacity-0"
			ref={scope}
		>
			<div
				ref={containerRef}
				id="background"
				className="h-[calc(100vh-20px)] overflow-y-scroll rounded-[30px] md:ml-auto md:w-0 md:rounded-[40px]"
			>
				<div className="px-5 bg-darkBrown pb-[140px] pt-[80px] md:h-full md:flex md:flex-col md:justify-start md:pb-[0.5vw] md:px-[0.5vw] md:pt-0">
					<button
						type="button"
						onClick={() => setReserveModalIsOpen?.(false)}
						id="closeBtn"
						className="cursor-pointer w-[52px] h-[52px] mt-2.5 rotate-45 group hover:[&_rect]:fill-[#181717] [&_rect]:transition-all [&_rect]:duration-300 [&_rect]:fill-white overflow-hidden bg-[#181717] rounded-full grid place-items-center fixed top-4 left-[30px] md:static md:mx-[1.5vw] md:h-[2.8vw] md:w-[2.8vw] md:mt-[15px] md:opacity-0"
					>
						<IconPlus />
						<div className="absolute inset-0 bg-primary scale-0 group-hover:scale-100 transition duration-300 rounded-full" />
					</button>
					<div className="md:px-[1.5vw] md:opacity-0 content">
						<h3 className="main-text mt-[20px] md:!text-[2vw] md:!leading-[2.2vw] md:w-[15ch]">
							Make it memorable and reserve one of our-Capsules®
						</h3>
						<p className="mt-[30px] label text-muted md:mt-[1.5vw] md:!text-[0.95vw] md:!leading-[1.2vw]">
							Ready to start your journey to a desert adventure? Secure your
							capsule by filling out the reservation form. We hope to see you
							soon!
						</p>
						<p className="mt-[30px] label md:mt-[1.5vw] md:!text-[0.95vw] md:!leading-[1.2vw]">
							(1) Which capsule would you like to reserve?
						</p>
						<div className="flex flex-col gap-[5px] mt-[30px] md:flex-row md:mt-[1.8vw]">
							{Object.entries(capsulesData).map(([capsule, data]) => (
								<button
									type="button"
									onClick={() =>
										setSelectedCapsule(
											capsule as "classic" | "terrace" | "desert",
										)
									}
									key={capsule}
									className="group cursor-pointer h-[80px] bg-[#181717] flex rounded-[14px] items-center p-1 transition relative overflow-hidden w-full md:flex-col md:h-[8.3vw] md:rounded-[1.4vw] md:flex md:items-center"
								>
									<div className="w-[129px] h-full rounded-[11px] overflow-hidden md:p-[0.1vw] md:w-full md:h-full">
										<div
											className={cn([
												"h-full w-full bg-lightBrown absolute inset-0 z-0 scale-0 rounded-full transition duration-300",
												"group-hover:scale-110 group-hover:md:scale-130",
											])}
										/>
										<div
											className={cn([
												"h-full w-full bg-primary absolute inset-0 z-0 scale-0 rounded-full transition duration-300",
												selectedCapsule === capsule && "scale-110 md:scale-130",
											])}
										/>
										<img
											src={data.image}
											alt=""
											className="scale-125 z-20 md:h-full md:w-full md:scale-100 md:object-cover md:rounded-[1vw]"
										/>
									</div>
									<p
										className={cn([
											"label ml-6 capitalize z-20 transition-colors md:mt-[0.4vw] md:mb-[0.5vw] md:!text-[0.95vw] md:!leading-[1.2vw] md:ml-0 group-hover:text-[#181717]",
											selectedCapsule === capsule && "text-[#181717]",
										])}
									>
										{capsule.split(" ")[0]} C®
									</p>
								</button>
							))}
						</div>
					</div>
					<div
						id="footer"
						className="label overflow-hidden rounded-[24px] md:opacity-0 bg-[#181717] w-[calc(100%-40px)] h-[72px] left-5 fixed bottom-5 md:rounded-full flex justify-between items-center px-6 md:static md:w-0 md:mt-auto md:pr-[0.7vw] md:px-[2vw] md:h-[5.5vw]"
					>
						<div className="flex w-full items-center md:!text-[0.95vw] md:!leading-[1.2vw] content md:opacity-0">
							<div className="flex flex-col">
								<span className="text-muted">Stay</span>
								<span>17.05 - 22.05</span>
							</div>
							<div className="h-8 w-[1px] bg-muted mx-[15px] opacity-20 md:mx-[1.5vw]" />
							<div className="flex flex-col">
								<span className="text-muted">Cost</span>
								<span>10000 USD</span>
							</div>
							<button
								type="button"
								className="h-[50px] [&_path]:fill-[#181717] aspect-square rounded-full bg-primary px-[15px] grid place-items-center ml-auto md:hidden"
							>
								<IconRight />
							</button>
							<MainButton
								className="ml-auto hidden md:flex"
								icon={<IconRight />}
							>
								Next
							</MainButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
