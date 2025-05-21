import { IconPlus } from "../icons.tsx";
import type capsulesData from "../../data/capsulesData.ts";
import { type Dispatch, type SetStateAction, use, useEffect } from "react";
import { useAnimate, usePresence } from "motion/react";
import { ReserveModalContext } from "../../state/ReserveModalContext.tsx";
import { useClickAway } from "@uidotdev/usehooks";
import { animationConfig } from "../constants/animationConfig.ts";

type CapsuleDetailsProps = {
	data: (typeof capsulesData)["classic"];
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function CapsuleDetails({
	data,
	setIsOpen,
}: CapsuleDetailsProps) {
	const [isPresent, safeToRemove] = usePresence();
	const [scope, animate] = useAnimate();
	const { setReserveModalIsOpen } = use(ReserveModalContext);
	const contentRef = useClickAway<HTMLDivElement>(() => {
		setIsOpen(false);
	});

	useEffect(() => {
		if (isPresent) {
			const enterAnimation = async () => {
				if (innerWidth < 768) {
					await animate(scope.current, { opacity: 1 }, animationConfig);
				} else {
					await animate(scope.current, { opacity: 1 }, animationConfig);
					await animate(
						"#background",
						{ scale: 4, opacity: 1 },
						animationConfig,
					);
					await animate(
						"#cost",
						{ opacity: 1, width: "100%" },
						animationConfig,
					);
					await animate(".content", { opacity: 1 }, animationConfig);
				}
			};

			enterAnimation();
		} else {
			const exitAnimation = async () => {
				if (innerWidth < 768) {
					await animate(scope.current, { opacity: 0 }, animationConfig);
				} else {
					await animate(".content", { opacity: 0 });
					await animate("#cost", { opacity: 0, width: 0 }, animationConfig);
					await animate(
						"#background",
						{ scale: 0.25, opacity: 0 },
						animationConfig,
					);
				}
				safeToRemove();
			};
			exitAnimation();
		}
	}, [animate, isPresent, safeToRemove, scope]);

	return (
		<div
			className="fixed inset-0 p-[10px] z-50 bg-[#181717] opacity-0 md:bg-[#181717]/90 md:h-screen md:p-[1vw]"
			ref={scope}
		>
			<div
				id="background"
				ref={contentRef}
				className="h-[calc(100vh-20px)] md:opacity-0 overflow-y-scroll md:origin-bottom-left rounded-[30px] md:scale-25 md:w-[29vw] md:h-[82dvh] md:absolute md:-translate-y-1/2 md:top-1/2 md:rounded-[3.5vw]"
			>
				<div className="px-5 bg-darkBrown pb-[140px] pt-[80px] flex flex-col md:pt-0 md:pb-[1vw] md:h-full md:px-[1vw]">
					<button
						type="button"
						onClick={() => setIsOpen(false)}
						className="w-[52px] h-[52px] mt-2.5 rotate-45 [&_rect]:fill-white bg-[#181717] rounded-full grid place-items-center fixed top-4 left-[30px] md:hidden"
					>
						<IconPlus />
					</button>
					<div className="content md:flex md:items-center md:justify-between md:mt-[2vw] md:px-[1vw] md:opacity-0">
						<div className="flex justify-between mt-[10px] items-baseline md:flex-col md:mt-0">
							<h3 className="main-text">Details</h3>
							<span className="label">({data.title})</span>
						</div>
						<div className="mt-[30px] h-[160px] rounded-[30px] overflow-hidden md:w-[9vw] md:h-[5vw] md:rounded-[1vw] md:mt-0">
							<img
								className="h-full w-full object-cover"
								src={data.image}
								alt=""
							/>
						</div>
					</div>
					<p className="label mt-[30px] text-muted md:mt-[1.8vw] md:px-[1vw] content md:opacity-0">
						{data.description}
					</p>
					<div className="mt-[30px] md:mt-[0.5vw] md:px-[1vw] content md:opacity-0">
						{data.features.map((feat, index) => (
							<div
								className="relative flex justify-between label py-[14px] md:py-[0.8vw]"
								key={feat.label}
							>
								{index < data.features.length - 1 && (
									<div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary opacity-20" />
								)}

								<span>{feat.label}</span>
								<span>{feat.value}</span>
							</div>
						))}
					</div>
					<button
						type="button"
						className="content md:opacity-0 label text-muted underline underline-offset-4 mt-[18px] self-start md:text-primary md:mt-[0.8vw] md:px-[1vw]"
						onClick={() => {
							setIsOpen(false);
							setReserveModalIsOpen?.(true);
						}}
					>
						Ready to reserve?
					</button>
					<div
						id="cost"
						className="label overflow-hidden bg-[#181717] w-[calc(100%-40px)] h-[72px] left-5 fixed bottom-5 rounded-[24px] flex justify-between items-center px-6 md:static  md:rounded-full md:!mt-auto md:h-[5vw] md:px-[1.5vw] md:opacity-0 md:w-0"
					>
						<div className="text-muted content md:opacity-0">Cost</div>
						<div className="content  md:opacity-0">
							<span>{data.price} USD</span>
							<span className="text-muted">/ Night</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
