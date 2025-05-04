import {
	type Dispatch,
	type SetStateAction,
	use,
	useEffect,
	useState,
} from "react";
import { motion, useAnimate, usePresence } from "motion/react";
import { useClickAway } from "@uidotdev/usehooks";
import { ReserveContext } from "../../App.tsx";
import MainButton from "./MainButton.tsx";
import { IconClose } from "../../data/icons.tsx";

const duration = 0.4;

export default function ReserveModal() {
	const [isPresent, safeToRemove] = usePresence();
	const [scope, animate] = useAnimate<HTMLDivElement>();
	const { setIsOpen } = use(ReserveContext);
	const [activeCapsule, setActiveCapsule] = useState<
		"classic" | "terrace" | "desert" | null
	>(null);
	const ref = useClickAway<HTMLDivElement>(() => {
		setIsOpen?.(false);
	});

	useEffect(() => {
		if (isPresent) {
			const enterAnimation = async () => {
				await animate(scope.current, { x: "100%" }, { duration: 0 });

				await animate(scope.current, { x: 0 }, { duration, ease: "easeInOut" });
				await animate(
					"#cost",
					{ width: "100%" },
					{ duration, ease: "easeInOut" },
				);
				animate(".content", { opacity: 1 }, { duration, ease: "easeInOut" });
				await animate(
					".separator",
					{ opacity: 0.2 },
					{ duration, ease: "easeInOut" },
				);
			};
			enterAnimation();
		} else {
			const exitAnimation = async () => {
				animate(".content", { opacity: 0 }, { duration, ease: "easeInOut" });
				await animate(
					".separator",
					{ opacity: 0 },
					{ duration, ease: "easeInOut" },
				);
				await animate(
					"#cost",
					{ width: "0%" },
					{ duration, ease: "easeInOut" },
				);
				await animate(
					scope.current,
					{ x: "100%" },
					{ duration, ease: "easeInOut" },
				);
				safeToRemove();
			};
			exitAnimation();
		}
	}, [isPresent, animate, scope, safeToRemove]);

	useEffect(() => {
		console.log(activeCapsule);
	}, [activeCapsule]);

	return (
		<div ref={ref}>
			<div
				ref={scope}
				className="flex flex-col fixed h-[calc(100%-20px)] p-2.5 pt-5 w-[30%] right-0 -top-2.5 rounded-[60px] my-5 mx-2.5 z-40 bg-secondary"
			>
				<div className="absolute inset-0" />
				<div className="px-7 flex flex-col gap-7 content opacity-0">
					<motion.button
						transition={{ duration: 0.3 }}
						type="button"
						onClick={() => setIsOpen?.(false)}
						className="z-10 rotate-45 group cursor-pointer relative self-start overflow-hidden bg-black h-13 text-[50px] font-[100] leading-0  grid place-items-center aspect-square rounded-full"
					>
						<IconClose />
						<div className="bg-white absolute top-1/2 left-1/2 -translate-1/2 group-hover:w-full group-hover:h-full duration-300 rounded-full transition-all w-0 h-0" />
					</motion.button>
					<h3 className="text-[40px] leading-10.5 max-w-[15ch]  tracking-[-0.3px] ">
						Make it memorable and reserve one of our—Capsules®
					</h3>
					<p className="text-[18px] leading-6 text-muted">
						Ready to start your journey to a desert adventure? Secure your
						capsule by filling out the reservation form.We hope to see you soon!
					</p>
					<p className="text-[18px]">
						(1) Which capsule you would like to reserve?
					</p>
					<div className="flex gap-2">
						<ReserveCapsuleCard
							setActive={setActiveCapsule}
							capsule={"classic"}
							isActive={activeCapsule === "classic"}
						/>
						<ReserveCapsuleCard
							setActive={setActiveCapsule}
							capsule={"terrace"}
							isActive={activeCapsule === "terrace"}
						/>
						<ReserveCapsuleCard
							setActive={setActiveCapsule}
							capsule={"desert"}
							isActive={activeCapsule === "desert"}
						/>
					</div>
				</div>
				<div className="mt-auto justify-self-end flex relative text-[18px] p-4.5 w-full gap-7.5 items-center h-[100px]">
					<div
						className="origin-left w-0 bg-background absolute inset-0 rounded-full z-10"
						id="cost"
					/>
					<div className="flex flex-col z-20 ml-4.5 leading-6 content opacity-0 ">
						<span className="text-muted">Stay</span>
						<span>04.05 - 09.05</span>
					</div>
					<div className="w-px z-20 bg-muted h-[75%] separator opacity-0 " />
					<div className="flex flex-col z-20 leading-6 content opacity-0 ">
						<span className="text-muted">Cost</span>
						<span>10000 USD</span>
					</div>
					<MainButton
						text="Next"
						icon="arrow-right"
						className="z-20 ml-auto content opacity-0 "
					/>
				</div>
			</div>
		</div>
	);
}

type ReserveCapsuleCardProps = {
	isActive: boolean;
	capsule: "classic" | "terrace" | "desert";
	setActive: Dispatch<SetStateAction<"classic" | "terrace" | "desert" | null>>;
};

function ReserveCapsuleCard({
	isActive,
	capsule,
	setActive,
}: ReserveCapsuleCardProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<button
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={() => setActive(capsule)}
			type="button"
			className="cursor-pointer flex w-full flex-col aspect-square relative justify-between rounded-[30px]  overflow-hidden"
		>
			<div className="p-2 rounded-[30px] flex-2 w-full z-30">
				<img
					className="rounded-[25px] h-full object-cover object-top block"
					src={`${capsule}.webp`}
					alt=""
				/>
			</div>
			<motion.p
				animate={{
					color: isHovered || isActive ? "black" : "white",
					transition: { duration: 0.3 },
				}}
				className="text-white text-center flex-1 text-[19px] leading-10 mt-auto z-30  transition duration-500"
			>
				Classic C
			</motion.p>
			<motion.div
				className="absolute w-full h-full inset-0 z-10 transition-all origin-center rounded-full "
				animate={{
					backgroundColor: isActive
						? "#ffffff"
						: isHovered
							? "#b1a696"
							: "#000000",
					scale: isHovered || isActive ? 1.5 : 0,
					transition: { duration: 0.3, ease: "easeInOut" },
				}}
			/>
			<div className="bg-black absolute w-full h-full inset-0 z-0" />
		</button>
	);
}
