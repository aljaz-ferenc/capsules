import { motion } from "motion/react";

type PlusButtonProps = {
	isVisible: boolean;
	text: string;
};

export default function OpenDetails({ isVisible, text }: PlusButtonProps) {
	return (
		<motion.div
			animate={{ opacity: isVisible ? 1 : 0, transition: { duration: 0.5 } }}
			className="flex gap-8 absolute bottom-14.5 left-5 items-center"
		>
			<button
				type="button"
				className="group cursor-pointer relative  overflow-hidden bg-[#b1a696] h-13 text-[50px] font-[100] leading-0  grid place-items-center aspect-square rounded-full"
			>
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="@w-[20] z-20"
				>
					<rect
						width="22"
						height="2"
						transform="matrix(-1 8.42937e-08 8.42937e-08 1 23 11)"
						fill="rgba(42, 39, 37, 1)"
					/>
					<rect
						width="22"
						height="2"
						transform="translate(12.999 0.999512) rotate(90)"
						fill="rgba(42, 39, 37, 1)"
					/>
				</svg>
				<div className="bg-white absolute top-1/2 left-1/2 -translate-1/2 group-hover:w-full group-hover:h-full duration-300 rounded-full transition-all  w-0 h-0" />
			</button>
			<motion.p
				className="font-bold w-[60ch]"
				animate={{ x: isVisible ? 0 : 30, transition: { duration: 0.5 } }}
			>
				{text}
			</motion.p>
		</motion.div>
	);
}
