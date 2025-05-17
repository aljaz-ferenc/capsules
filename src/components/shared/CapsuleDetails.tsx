import { IconPlus } from "../icons.tsx";
import type capsulesData from "../../data/capsulesData.ts";
import { type Dispatch, type SetStateAction, useEffect } from "react";
import { useAnimate, usePresence } from "motion/react";

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

	useEffect(() => {
		if (isPresent) {
			const enterAnimation = async () => {
				if (innerWidth < 768) {
					await animate(scope.current, { opacity: 1 }, { duration: 0.5 });
				}
			};

			enterAnimation();
		} else {
			const exitAnimation = async () => {
				if (innerWidth < 768) {
					await animate(scope.current, { opacity: 0 }, { duration: 0.5 });
				}
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
						onClick={() => setIsOpen(false)}
						className="w-[52px] h-[52px] mt-2.5 rotate-45 [&_rect]:fill-white bg-[#181717] rounded-full grid place-items-center fixed top-4 left-[30px]"
					>
						<IconPlus />
					</button>
					<div className="flex justify-between mt-[10px] items-baseline">
						<h3 className="main-text">Details</h3>
						<span className="label">({data.title})</span>
					</div>
					<div className="mt-[30px] h-[160px] rounded-[30px] overflow-hidden">
						<img
							className="h-full w-full object-cover"
							src={data.image}
							alt=""
						/>
					</div>
					<p className="label mt-[30px] text-muted">{data.description}</p>
					<div className="mt-[30px]">
						{data.features.map((feat, index) => (
							<div
								className="relative flex justify-between label py-[14px]"
								key={feat.label}
							>
								{index > 0 && (
									<div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary opacity-20" />
								)}
								<span>{feat.label}</span>
								<span>{feat.value}</span>
							</div>
						))}
					</div>
					<button
						type="button"
						className="label text-muted underline mt-[18px]"
					>
						Ready to reserve?
					</button>
					<div className="label overflow-hidden bg-[#181717] w-[calc(100%-40px)] h-[72px] left-5 fixed bottom-5 rounded-[24px] flex justify-between items-center px-6">
						<div className="text-muted">Cost</div>
						<div>
							<span>{data.price} USD</span>
							<span className="text-muted">/ Night</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
