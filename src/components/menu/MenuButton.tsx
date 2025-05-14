import type { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
import { IconHamburger } from "../icons.tsx";

type MenuButtonProps = {
	isActive: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MenuButton({ isActive, setIsOpen }: MenuButtonProps) {
	return (
		<button
			type="button"
			className="bg-white h-[52px] rounded-[50px] p-[3px] flex justify-center items-center cursor-pointer group"
			onClick={() => setIsOpen((prev) => !prev)}
		>
			<div className="ml-[22px] text-darkBrown text-[14px] overflow-hidden mr-[15px] mb-[1px] relative w-full">
				<motion.div
					animate={{ y: isActive ? "-200%" : 0 }}
					transition={{ duration: 0.3 }}
				>
					<div className="w-full group-hover:-translate-y-full transition duration-300 ease-in-out">
						Menu
					</div>
					<div className="absolute w-full group-hover:-translate-y-full transition duration-300 ease-in-out">
						Menu
					</div>
				</motion.div>
				<motion.div
					animate={{ y: isActive ? "-100%" : "-300%" }}
					transition={{ duration: 0.3 }}
					className="absolute"
				>
					<div className="w-full group-hover:-translate-y-full transition duration-300 ease-in-out">
						Close
					</div>
					<div className="absolute w-full group-hover:-translate-y-full transition duration-300 ease-in-out">
						Close
					</div>
				</motion.div>
			</div>
			<div className="h-full aspect-square bg-darkBrown rounded-full p-[15px]">
				<IconHamburger isActive={isActive} />
			</div>
		</button>
	);
}
