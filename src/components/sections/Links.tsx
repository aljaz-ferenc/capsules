import { motion } from "motion/react";
import { use, useState } from "react";
import IconButton, { type Icons } from "../shared/IconButton.tsx";
import { ScrollContext } from "../../state/ScrollContext.tsx";

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

const socials: { icon: Icons; href: string }[] = [
	{ icon: "instagram", href: "#" },
	{ icon: "linkedIn", href: "#" },
	{ icon: "dribble", href: "#" },
	{ icon: "behance", href: "#" },
];

export default function Links() {
	return (
		<section className="px-5 mb-10">
			<div className="mt-[25vw] flex justify-between mb-[8vw]">
				<div className="text-muted text-[1.8vw] max-w-[25ch] flex flex-col gap-2 leading-[2.2vw]">
					<p>
						This website is just a concept work done by-Moyra to showcase our
						capabilities.
					</p>
					<p>
						If you would like to outsource a similar website project-
						<a href="/" className="text-primary underline">
							contact us.
						</a>
					</p>
				</div>
				<div className="text-right">
					{links.map((link) => (
						<Link key={link.title} link={link} />
					))}
				</div>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex">
					{socials.map((icon) => (
						<IconButton key={icon.icon} icon={icon.icon} />
					))}
				</div>
				<div className="label !text-muted text-right max-w-[25ch]">
					<p>
						Meet Capsules®—modern and cozy houses, in the California desert.
					</p>
				</div>
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
	const { isScrolling, setIsScrolling } = use(ScrollContext);

	if (!setIsScrolling) return;

	const handleScrolToSection = (sectionId: string) => {
		if (isScrolling) return;
		setIsScrolling(true);
		setTimeout(() => {
			document.body.querySelector(`#${sectionId}`)?.scrollIntoView();
		}, 600);
	};

	return (
		<button
			type="button"
			onClick={() => handleScrolToSection(link.scrollToId)}
			className="relative overflow-hidden block cursor-pointer text-[1.8vw]"
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
