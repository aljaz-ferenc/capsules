import { motion } from "motion/react";
import { useState } from "react";

type Link = {
	title: string;
	scrollToId: string;
};

const links: Link[] = [
	{ title: "Welcome", scrollToId: "welcome" },
	{ title: "Introduction", scrollToId: "introduction" },
	{ title: "Houses", scrollToId: "houses" },
	{ title: "Why Capsules®", scrollToId: "whyCapsules" },
	{ title: "Activities", scrollToId: "activities" },
	{ title: "Feedback", scrollToId: "reviews" },
];

export default function Links() {
	return (
		<section className="mt-80 flex justify-between px-10 text-[30px] mb-20">
			<div className="text-muted max-w-[25ch] flex flex-col gap-2">
				<p>
					This website is just a concept work done by-Moyra to showcase our
					capabilities.
				</p>
				<p>
					If you would like to outsource a similar website project-
					<a href="localhost:5173" className="text-primary underline">
						Contact us
					</a>
				</p>
			</div>
			<div className="text-right">
				{links.map((link) => (
					<Link key={link.title} link={link} />
				))}
			</div>
		</section>
	);
}

type LinkProps = {
	link: Link;
};

const duration = 0.3;

function Link({ link }: LinkProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<button
			type="button"
			onClick={() =>
				document.body.querySelector(`#${link.scrollToId}`)?.scrollIntoView()
			}
			className="relative overflow-hidden block cursor-pointer"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<p className="invisible" aria-hidden>
				{link.title}
			</p>
			<div>
				<motion.p
					animate={{ y: isHovered ? "-100%" : "0%" }}
					transition={{ duration, ease: "easeIn" }}
					className="absolute top-0 right-0"
				>
					{link.title}
				</motion.p>
				<motion.p
					animate={{ y: isHovered ? "-100%" : "0%" }}
					transition={{ duration, ease: "easeIn" }}
					className="absolute -bottom-full right-0"
				>
					{link.title}
				</motion.p>
			</div>
		</button>
	);
}
