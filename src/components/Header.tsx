import { IconUp, Logo } from "./icons.tsx";
import MainButton from "./shared/MainButton.tsx";
import { useScroll, motion, useMotionValueEvent } from "motion/react";
import { type Dispatch, type SetStateAction, useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection.ts";

type HeaderProps = {
	setReserveModalIsOpen: Dispatch<SetStateAction<boolean>> | null;
};

export default function Header({ setReserveModalIsOpen }: HeaderProps) {
	const { scrollY } = useScroll();
	const [showHeader, setShowHeader] = useState(false);
	const { direction } = useScrollDirection();

	useMotionValueEvent(scrollY, "change", (latest) => {
		setShowHeader(latest > innerHeight);
	});

	return (
		<motion.header
			animate={{
				y: direction === "up" ? 0 : "calc(-100% - 20px)",
				opacity: !showHeader && innerWidth < 768 ? 0 : 1,
			}}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className="fixed left-0 w-full px-5 pt-[15px] flex justify-between z-40 items-center"
		>
			<motion.div
				animate={{ opacity: showHeader ? 1 : 0 }}
				transition={{ duration: 0.5, ease: "easeInOut" }}
			>
				<Logo />
			</motion.div>
			<MainButton
				onClick={() => setReserveModalIsOpen?.(true)}
				icon={<IconUp />}
			>
				Reserve
			</MainButton>
		</motion.header>
	);
}
