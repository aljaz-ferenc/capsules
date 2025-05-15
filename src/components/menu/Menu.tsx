import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import MenuButton from "./MenuButton.tsx";
import { AnimatePresence, useAnimate, usePresence, motion } from "motion/react";
import { stagger } from "motion";
import SocialLinks from "../shared/SocialLinks.tsx";
import InfiniteScrollText from "../animations/InfiniteScrollText.tsx";
import { links } from "../constants/links.ts";
import Link from "../footer/Link.tsx";
import { cn } from "../../utils/utils.ts";

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50">
				<MenuButton isActive={isOpen} setIsOpen={setIsOpen} />
			</div>
			<AnimatePresence>
				{isOpen && (
					<div className={cn(["fixed inset-[10px] z-40"])}>
						<MenuContent setIsOpen={setIsOpen} />
					</div>
				)}
			</AnimatePresence>
		</>
	);
}

type MenuContentProps = {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function MenuContent({ setIsOpen }: MenuContentProps) {
	const [isPresent, safeToRemove] = usePresence();
	const [scope, animate] = useAnimate<HTMLDivElement>();

	useEffect(() => {
		if (isPresent) {
			const enterAnimation = async () => {
				animate("#overlay", { opacity: 1 }, { duration: 1, ease: "easeInOut" });
				if (innerWidth > 768) {
					animate("#image", { width: 0 }, { duration: 0, ease: "easeInOut" });
					await animate(".socialBtn", { scale: 0 }, { duration: 0 });
				}
				await animate(
					".link",
					{ clipPath: "inset(100% 0% 0% 0%)", y: -40 },
					{ duration: 0 },
				);
				await animate(
					"#background",
					{ clipPath: "inset(0% 0% 0% 0%)" },
					{ duration: 0.5, ease: "easeInOut" },
				);

				animate("#bottom", { opacity: 1 }, { duration: 1, ease: "easeInOut" });
				animate("#image", { opacity: 1 }, { duration: 1, ease: "easeInOut" });

				if (innerWidth > 768) {
					animate(
						"#image",
						{ width: "100%" },
						{ duration: 1, ease: "easeInOut" },
					);

					animate(
						".socialBtn",
						{ scale: 1 },
						{ duration: 0.3, ease: "linear", delay: stagger(0.05) },
					);
				}

				await animate(
					".link",
					{ clipPath: "inset(0% 0% 0% 0%)", y: 0 },
					{ duration: 0.5, delay: stagger(0.08), ease: "easeInOut" },
				);
			};
			enterAnimation();
		} else {
			const exitAnimation = async () => {
				animate(
					".link",
					{ clipPath: "inset(100% 0% 0% 0%)", y: -40 },
					{ duration: 0.5, delay: stagger(0.08), ease: "easeInOut" },
				);
				animate("#image", { opacity: 0 }, { duration: 1, ease: "easeInOut" });

				if (innerWidth > 768) {
					animate("#image", { width: 0 }, { duration: 1, ease: "easeInOut" });
					animate(
						".socialBtn",
						{ scale: 0 },
						{ duration: 0.3, ease: "linear", delay: stagger(0.05) },
					);
				}
				await animate(
					"#bottom",
					{ opacity: 0 },
					{ duration: 1, ease: "easeInOut" },
				);
				animate("#overlay", { opacity: 0 }, { duration: 1, ease: "easeInOut" });

				await animate(
					"#background",
					{ clipPath: "inset(100% 0% 0% 0%)" },
					{ duration: 0.5, ease: "easeInOut" },
				);

				safeToRemove();
			};
			exitAnimation();
		}
	}, [isPresent, animate, safeToRemove]);

	return (
		<div ref={scope} className="h-full">
			<motion.div
				id="overlay"
				className={cn(["fixed inset-0 bg-black -z-10 opacity-0"])}
			/>
			<div className="flex flex-col pt-10 md:pt-0 h-full md:grid md:grid-cols-auto">
				<div className="px-[20px] md:col-1 md:pt-10">
					{/*TODO: handle Reserve link click*/}
					{[...links, { title: "Reserve", scrollToId: "welcome" }].map(
						(link) => (
							<Link
								onClick={() => setIsOpen(false)}
								animate={false}
								link={link}
								key={link.title}
								globalScroll={false}
								className="link [clip-path:inset(0%_0%_100%_0%)] main-text-large text-muted md:hover:text-white hover:transition md:!text-[120px] text-left md:!leading-[120px]"
							/>
						),
					)}
				</div>
				<div
					className="flex flex-col justify-end h-full opacity-0 md:col-1 md:row-2 md:items-end md:flex-row-reverse"
					id="bottom"
				>
					<p className="main-text-small py-[30px] max-w-[30ch] px-[20px]">
						Meet Capsules®—modern and cozy houses, in the California desert.
					</p>
					<SocialLinks className="mb-10 px-[20px] [&_path]:!fill-primary" />
				</div>
				<div
					className="max-h-[300px] h-full rounded-[30px] overflow-hidden relative md:col-2 md:row-span-2 md:h-full md:max-h-none md:max-w-[30vw] md:ml-auto opacity-0 md:w-0"
					id="image"
				>
					<img
						src="terrace.webp"
						alt=""
						className="object-cover h-full w-full"
					/>
					<InfiniteScrollText
						className="absolute top-1/2 left-1/2 -translate-1/2"
						fontSize={"70px"}
						duration={150}
						opacity={1}
						word={"Capsules®"}
					/>
				</div>
			</div>
			<div
				id="background"
				className="absolute inset-0 -z-10 w-full h-full bg-darkBrown rounded-[30px] [clip-path:inset(100%_0%_0%_0%)]"
			/>
		</div>
	);
}
