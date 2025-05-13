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
		<footer className="mt-[140px] w-screen overflow-hidden">
			<Banner />
			<div className="label mt-[100px] mb-[30px] px-[10px] ">
				<p>Interested in an amazing adventure?</p>
				<p>Reserve one of our Capsules®</p>
			</div>
			<InfiniteScrollText
				duration={100}
				opacity={1}
				word="Book your capsule-"
			/>
			<div className="md:flex md:flex-row-reverse md:justify-between md:items-center md:leading-[2.2vw] md:text-[1.9vw] text-[20px] leading-[22px] md:mt-[4vw]">
				<div className="mt-[50px] px-5 md:mt-0">
					{links.map((link) => (
						<Link key={link.title} link={link} />
					))}
				</div>
				<div className=" text-muted px-5 py-[30px] md:py-0 md:w-[27ch]">
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
			</div>

			<div className="flex justify-between items-center pb-[50px] md:mt-[7vw] mt-3 px-5">
				<div className="flex justify-start items-center">
					{socials.map((icon) => (
						<IconButton
							height={54}
							padding={7}
							key={icon.icon}
							icon={icon.icon}
						/>
					))}
				</div>
				<p className="label text-right hidden md:block text-muted w-[25ch]">
					Meet Capsules®—modern and cozy houses, in the California desert.
				</p>
			</div>
			<hr />
			<div className="text-[16px] flex flex-col gap-0.5 justify-between label mt-[50px] px-5 md:flex-row">
				<span className="text-muted">
					Website made by-
					<a className="text-primary underline underline-offset-2" href="/">
						{" "}
						Moyra.com
					</a>
				</span>
				<span className="hidden md:block label text-muted">
					This website is using <span className="text-primary">cookies.</span>
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
