import InfiniteScrollText from "../animations/InfiniteScrollText.tsx";
import capsulesData from "../../data/capsulesData.ts";

const slidesText = [
	{
		main: "Enjoy the view through-the wide panoramic glass window",
		sub: "Spend unforgettable and remarkable time in the Californian desert with—Capsules.",
	},
	{
		main: "Sound of silence-out of the city rush with complete privacy",
		sub: "Here, every whisper of nature recharges your soul-your sanctuary of solitude awaits.",
	},
	{
		main: "Relax yourself in-Wooden Jacuzzi",
		sub: "Let the natural textures and gentle bubbles transport you to a realm of pure, handcrafted bliss.",
	},
];

export default function WhyCapsules() {
	return (
		<section className="pb-20">
			<p className="label w-[24ch] px-5">
				Want to learn more about the benefits of—Capsules®?
			</p>
			<InfiniteScrollText
				duration={80}
				opacity={1}
				word="Why Capsules®?*"
				className="bg-background pt-[30px] pb-[50px]"
				fontSize="55px"
			/>
			<div className="flex flex-col px-[10px]">
				{Object.entries(capsulesData).map(([capsule, data], index) => (
					<article
						key={capsule}
						className="flex flex-col pt-[30px] h-[580px] bg-darkBrown rounded-[30px] overflow-hidden mb-[10px]"
					>
						<h3 className="main-text text-muted w-[17ch] mb-[140px] px-[10px]">
							{slidesText[index].main}
						</h3>
						<div className="flex mb-[30px] px-[10px]">
							<div className="flex items-end">
								<span className="border-[2px] border-primary px-[11px] py-1 grid place-items-center rounded-full">
									{index.toString().padStart(2, "0")}
								</span>
								<span className="opacity-20 border-[2px] border-primary px-[11px] py-1 grid place-items-center rounded-full">
									{Object.entries(capsulesData)
										.length.toString()
										.padStart(2, "0")}
								</span>
							</div>
							<p className="ml-5 main-text-small">{data.description}</p>
						</div>
						<img
							src={`${capsule}.webp`}
							alt={data.title}
							className="rounded-[30px] !h-[256px] object-cover block"
						/>
					</article>
				))}
			</div>
		</section>
	);
}
