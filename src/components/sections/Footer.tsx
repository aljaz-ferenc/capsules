import InfiniteScrollText from "../animations/InfiniteScrollText.tsx";
import Link from "../footer/Link.tsx";
import { motion, useInView } from "motion/react";
import IconButton from "../shared/IconButton.tsx";
import { useRef } from "react";

const links: Link[] = [
	{ title: "Welcome", scrollToId: "welcome" },
	{ title: "Introduction", scrollToId: "introduction" },
	{ title: "Houses", scrollToId: "houses" },
	{ title: "Why Capsules®", scrollToId: "whyCapsules" },
	{ title: "Activities", scrollToId: "activities" },
	{ title: "Feedback", scrollToId: "reviews" },
];

const socials: { icon: Icons; href: string }[] = [
	{ icon: "instagram", href: "#" },
	{ icon: "linkedIn", href: "#" },
	{ icon: "dribble", href: "#" },
	{ icon: "behance", href: "#" },
];

const duration = 0.5;
const delay = 0.3;

export default function Footer() {
	const titleRef = useRef(null);
	const inView = useInView(titleRef);

	return (
		<footer className="mt-[140px]">
			<div className="px-[10px] w-full h-[413px] relative ">
				<img
					src="terrace.webp"
					alt=""
					className="h-full object-cover rounded-[30px]"
				/>
				<h1 className="section-title absolute top-1/2 left-1/2 -translate-1/2">
					Capsules
				</h1>
			</div>
			<div className="label mt-[100px] mb-[30px] px-[10px]">
				<p>Interested in an amazing adventure?</p>
				<p>Reserve one of our Capsules®</p>
			</div>
			<InfiniteScrollText
				duration={100}
				opacity={1}
				word="Book your capsule-"
			/>
			<div className="mt-[50px] px-5 text-5">
				{links.map((link) => (
					<Link key={link.title} link={link} />
				))}
			</div>
			<div className="text-5 text-muted px-5 py-[30px]">
				<p>
					This website is just a concept work done by-Moyra to showcase our
					capabilities.
				</p>

				<p className="mt-5">
					If you would like to outsource a similar website project-
					<a href="/" className="text-primary underline">
						contact us.
					</a>
				</p>
			</div>
			<div className="flex justify-start items-center mt-5 px-5 pb-[50px]">
				{socials.map((icon) => (
					<IconButton
						height={54}
						padding={7}
						key={icon.icon}
						icon={icon.icon}
					/>
				))}
			</div>
			<hr />
			<div className="text-[16px] flex flex-col gap-0.5 justify-between label my-[50px] px-5">
				<span className="text-muted">
					Website made by-
					<a className="text-primary underline underline-offset-2" href="/">
						{" "}
						Moyra.com
					</a>
				</span>
				<span className="text-muted">
					All rights reserved ©{" "}
					<a className="text-primary" href="/">
						{" "}
						2025
					</a>
				</span>
			</div>
			<motion.h1
				ref={titleRef}
				className="text-[23.8vw]"
				transition={{
					duration: !inView ? 0 : duration,
					ease: "easeInOut",
					delay: !inView ? 0 : delay,
				}}
				animate={{
					x: inView ? 0 : 200,
				}}
			>
				{"Capsules".split("").map((letter, index) => (
					<motion.span
						className="bg-gradient-to-b from-muted to-primary text-transparent bg-clip-text"
						key={`letter-${index + 1}`}
						transition={{
							duration: !inView ? 0 : duration,
							ease: "easeInOut",
							delay: !inView ? 0 : delay,
						}}
						animate={{
							clipPath: inView ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 0% 100%)",
						}}
					>
						{letter}
					</motion.span>
				))}
			</motion.h1>
		</footer>
	);
}
