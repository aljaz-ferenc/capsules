import capsulesData from "../../data/capsulesData.ts";
import InfiniteScrollText from "../animations/InfiniteScrollText.tsx";
import CapsuleDetails from "../shared/CapsuleDetails.tsx";
import { IconPlus } from "../icons.tsx";
import { useCallback, useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { AnimatePresence } from "motion/react";

export default function ChooseCapsuleMobile() {
	return (
		<section className="px-[10px] pb-[70px] md:hidden">
			<InfiniteScrollText
				fontSize={"90px"}
				word="Capsules"
				duration={100}
				opacity={1}
				className="pb-[60px]"
			/>
			<div className="flex flex-col gap-[70px]">
				{Object.entries(capsulesData).map(([capsule, data]) => (
					<Capsule key={capsule} data={data} capsule={capsule} />
				))}
			</div>
		</section>
	);
}

type CapsuleProps = {
	data: (typeof capsulesData)["classic"];
	capsule: string;
};

function Capsule({ data, capsule }: CapsuleProps) {
	const [isOpen, setIsOpen] = useState(false);
	const lenis = useLenis();

	const allowScroll = useCallback(() => {
		if (lenis) {
			lenis.start();
		}
	}, [lenis]);

	const preventScroll = useCallback(() => {
		if (lenis) {
			lenis.stop();
		}
	}, [lenis]);

	useEffect(() => {
		if (isOpen) {
			preventScroll();
		} else {
			allowScroll();
		}
	}, [preventScroll, allowScroll, isOpen]);

	return (
		<article key={capsule}>
			<div className="rounded-[30px] aspect-[1.4/1] overflow-hidden relative">
				<img
					src={`${capsule}.webp`}
					alt={data.title}
					className="block object-cover h-full w-full"
				/>
				<button
					type="button"
					onClick={() => setIsOpen(true)}
					className="absolute bottom-[10px] right-[10px]  w-[52px] h-[52px] bg-lightBrown rounded-full grid place-items-center hover:opacity-90"
				>
					<IconPlus />
				</button>
			</div>
			<div className="px-[10px]">
				<h2 className="main-text-large mt-5 mb-[15px]">{data.title}</h2>
				<p className="main-text-small text-muted">{data.description}</p>
			</div>
			<AnimatePresence>
				{isOpen && <CapsuleDetails setIsOpen={setIsOpen} data={data} />}
			</AnimatePresence>
		</article>
	);
}
