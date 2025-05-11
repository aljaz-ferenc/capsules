import { useInView, motion } from "motion/react";
import { useRef } from "react";

const duration = 0.5;
const delay = 0.3;

export default function Footer() {
	const titleRef = useRef(null);
	const inView = useInView(titleRef);

	return (
		<footer className="mt-10 px-5">
			<div className="text-[16px] flex justify-between items-center label">
				<span className="text-muted">
					Website made by-
					<a className="text-primary underline underline-offset-2" href="/">
						{" "}
						Moyra.com
					</a>
				</span>
				<span className="text-muted">
					This website is using
					<a className="text-primary" href="/">
						{" "}
						cookies
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
			{/*<svg viewBox="0 0 66.5 20" xmlns="http://www.w3.org/2000/svg">*/}
			{/*	<title>Capsules</title>*/}
			{/*	<defs>*/}
			{/*		<linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">*/}
			{/*			<stop offset="0%" stopColor="var(--color-muted)" />*/}
			{/*			<stop offset="100%" stopColor="var(--color-primary" />*/}
			{/*		</linearGradient>*/}
			{/*	</defs>*/}
			{/*	<text x="0" y="15" fill="url(#textGradient)" fontFamily="sans-serif">*/}
			{/*		Capsules*/}
			{/*	</text>*/}
			{/*</svg>*/}
		</footer>
	);
}
