import { Logo } from "../../data/icons.tsx";
import MainButton from "./MainButton.tsx";
import { motion } from "motion/react";
import { use } from "react";
import { ReserveContext } from "../../App.tsx";
import useScrollDirection from "../../hooks/useScrollDirection.tsx";

export default function Header() {
	const { setIsOpen } = use(ReserveContext);
	const { direction } = useScrollDirection();

	return (
		<motion.header
			animate={{ y: direction === "down" ? "-100%" : "0%" }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className="w-full top-0 flex items-center justify-between z-20 fixed p-10"
		>
			<Logo />
			<MainButton
				text="Reserve"
				icon="arrow-up"
				className=""
				onClick={() => setIsOpen?.(true)}
			/>
		</motion.header>
	);
}
