import InfiniteScrollText from "../animations/InfiniteScrollText.tsx";
import IconButton, { type Icons } from "../shared/IconButton.tsx";
import Link, { type Link as TLink } from "../footer/Link.tsx";
import Banner from "../footer/Banner.tsx";
import FullscreenTitle from "../footer/FullscreenTitle.tsx";

const links: TLink[] = [
	{ title: "Welcome", scrollToId: "welcome" },
	{ title: "Introduction", scrollToId: "introduction" },
	{ title: "Houses", scrollToId: "houses" },
	{ title: "Why ChooseCapsuleMobile®", scrollToId: "whyCapsules" },
	{ title: "Activities", scrollToId: "activities" },
	{ title: "Feedback", scrollToId: "reviews" },
];

const socials: { icon: Icons; href: string }[] = [
	{ icon: "instagram", href: "#" },
	{ icon: "linkedIn", href: "#" },
	{ icon: "dribble", href: "#" },
	{ icon: "behance", href: "#" },
];

export default function Footer() {
	return (
		<footer className="mt-[140px]">
			<Banner />
			<div className="label mt-[100px] mb-[30px] px-[10px]">
				<p>Interested in an amazing adventure?</p>
				<p>Reserve one of our Capsules®</p>
			</div>
			<InfiniteScrollText
				duration={100}
				opacity={1}
				word="Book your capsule-"
			/>
			<div className="mt-[50px] px-5 text-[20px] leading-[22px]">
				{links.map((link) => (
					<Link key={link.title} link={link} />
				))}
			</div>
			<div className="text-[20px] leading-[22px] text-muted px-5 py-[30px]">
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
			<FullscreenTitle />
		</footer>
	);
}
