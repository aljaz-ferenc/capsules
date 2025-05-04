import { Logo } from "../../data/icons.tsx";
import MainButton from "./MainButton.tsx";
import { motion } from "motion/react";
import { use, useCallback, useEffect, useState } from "react";
import { ReserveContext } from "../../App.tsx";

export default function Header() {
	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
	const { setIsOpen } = use(ReserveContext);

	const handleScroll = useCallback((e: WheelEvent) => {
		setScrollDirection(() => (e.deltaY > 0 ? "up" : "down"));
	}, []);

	useEffect(() => {
		window.addEventListener("wheel", (e) => handleScroll(e));

		return () => removeEventListener("wheel", handleScroll);
	}, [handleScroll]);

	return (
		<motion.header
			animate={{ y: scrollDirection === "up" ? "-100%" : "0%" }}
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
