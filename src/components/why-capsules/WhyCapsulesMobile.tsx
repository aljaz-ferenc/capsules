import capsulesData from "../../data/capsulesData.ts";
import ItemNumber from "../shared/ItemNumber.tsx";

const slidesText = [
	{
		main: "Enjoy the view through-the wide panoramic glass window",
		sub: "Spend unforgettable and remarkable time in the Californian desert with—ChooseCapsuleMobile.",
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

export default function WhyCapsulesMobile() {
	return (
		<div className="flex flex-col px-[10px] md:hidden">
			{Object.entries(capsulesData).map(([capsule, data], index) => (
				<article
					key={capsule}
					className="flex flex-col pt-[30px] h-[580px] bg-darkBrown rounded-[30px] overflow-hidden mb-[10px] justify-between"
				>
					<h3 className="main-text text-muted w-[17ch] mb-[140px] px-[10px]">
						{slidesText[index].main}
					</h3>
					<div className="flex mb-[30px] px-[10px]">
						<ItemNumber
							current={index + 1}
							total={Object.entries(capsulesData).length}
						/>
						<p className="ml-5 main-text-small">{slidesText[index].sub}</p>
					</div>
					<img
						src={`${capsule}.webp`}
						alt={data.title}
						className="rounded-[30px] !h-[256px] object-cover block"
					/>
				</article>
			))}
		</div>
	);
}
