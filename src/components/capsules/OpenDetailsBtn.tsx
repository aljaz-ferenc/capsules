import { motion } from "motion/react";
import type { SetStateAction, Dispatch } from "react";
import capsulesDetails from "../../data/capsulesDetails.ts";
import CapsuleDetailsModal from "./CapsuleDetailsModal.tsx";
import { IconPlus } from "../../data/icons.tsx";

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
			{detailsOpen && (
				<CapsuleDetailsModal
					capsuleData={capsulesDetails[capsule]}
					text={"asdf"}
					isVisible={detailsOpen}
					setDetailsOpen={setDetailsOpen}
				/>
			)}
			<div className="flex gap-[2vw] absolute bottom-12 left-5 items-center z-40">
				<motion.button
					initial={{ opacity: 0, scale: 0 }}
					animate={{ rotate: detailsOpen ? "135deg" : 0, opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}
					transition={{ duration: 0.5 }}
					onClick={() => setDetailsOpen((prev) => !prev)}
					type="button"
					className="z-10 group cursor-pointer relative  overflow-hidden bg-muted h-[2.55vw] text-[50px] font-[100] leading-0 grid place-items-center aspect-square rounded-full"
				>
					<IconPlus />
					<div className="bg-white absolute top-1/2 left-1/2 -translate-1/2 group-hover:w-full group-hover:h-full duration-300 rounded-full transition-all  w-0 h-0" />
				</motion.button>
				{sideText && (
					<motion.p
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 30 }}
						transition={{ duration: 0.5 }}
						className="label max-w-[45ch]"
					>
						{sideText}
					</motion.p>
				)}
			</div>
		</div>
	);
}
