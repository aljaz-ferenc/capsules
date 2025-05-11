import capsulesData from "../../data/capsulesData.ts";

export default function Capsules() {
	return (
		<section className="px-[10px] pb-[70px] flex flex-col gap-[70px]">
			{Object.entries(capsulesData).map(([capsule, data]) => (
				<article key={capsule}>
					<img
						src={`${capsule}.webp`}
						alt={data.title}
						className="block rounded-[30px] aspect-[1.4/1] object-cover"
					/>
					<div className="px-[10px]">
						<h2 className="main-text-large mt-5 mb-[15px]">{data.title}</h2>
						<p className="main-text-small text-muted">{data.description}</p>
					</div>
				</article>
			))}
		</section>
	);
}
