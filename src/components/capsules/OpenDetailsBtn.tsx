import { motion, AnimatePresence } from "motion/react";
import type { SetStateAction, Dispatch } from "react";
import capsulesDetails from "../../data/capsulesDetails.ts";
import CapsuleDetailsModal from "../shared/CapsuleDetailsModal.tsx";

type OpenDetailsBtnProps = {
	detailsOpen: boolean;
	setDetailsOpen: Dispatch<SetStateAction<boolean>>;
	sideText?: string;
	capsule: "classic" | "terrace" | "desert";
};

export default function OpenDetailsBtn({
	detailsOpen,
	setDetailsOpen,
	sideText,
	capsule,
}: OpenDetailsBtnProps) {
	return (
		<div>
			<AnimatePresence>
				{detailsOpen && (
					<CapsuleDetailsModal
						capsuleData={capsulesDetails[capsule]}
						text={"asdf"}
						isVisible={detailsOpen}
						setDetailsOpen={setDetailsOpen}
					/>
				)}
			</AnimatePresence>
			<div className="flex gap-8 absolute bottom-12 left-5 items-center z-40">
				<motion.button
					animate={{ rotate: detailsOpen ? "135deg" : 0 }}
					transition={{ duration: 0.3 }}
					onClick={() => setDetailsOpen((prev) => !prev)}
					type="button"
					className="z-10 group cursor-pointer relative  overflow-hidden bg-muted h-13 text-[50px] font-[100] leading-0  grid place-items-center aspect-square rounded-full"
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
				</motion.button>
				{sideText && (
					<motion.p className="font-bold w-[60ch]">{sideText}</motion.p>
				)}
			</div>
		</div>
	);
}
