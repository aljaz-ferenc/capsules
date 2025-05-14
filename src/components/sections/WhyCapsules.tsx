import InfiniteScrollText from "../animations/InfiniteScrollText.tsx";
import WhyCapsulesMobile from "../why-capsules/WhyCapsulesMobile.tsx";
import WhyCapsulesDesktop from "../why-capsules/WhyCapsulesDesktop.tsx";

export default function WhyCapsules() {
	return (
		<section className="pb-20" id="whyCapsules">
			<p className="label w-[24ch] px-5">
				Want to learn more about the benefits of—Capsules®?
			</p>
			<InfiniteScrollText
				duration={110}
				opacity={1}
				word="Why Capsules®?*"
				className="bg-background pt-[20px] pb-[40px] md:pt-0"
				fontSize={innerWidth >= 768 ? "12vw" : "55px"}
			/>
			<WhyCapsulesMobile />
			<WhyCapsulesDesktop />
		</section>
	);
}
