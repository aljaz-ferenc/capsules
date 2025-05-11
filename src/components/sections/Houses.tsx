import RevealSectionTitle from "../shared/RevealSectionTitle.tsx";

export default function Houses() {
	return (
		<section className="px-10" id="houses">
			<RevealSectionTitle
				title="Choose the one you like best"
				subtitle="Discover available Capsules®"
			/>
			<div className="flex justify-around gap-[7vw]">
				<p className="main-text max-w-[25.5ch]">
					You can choose one of three premium capsule houses in our offer. Each
					of our capsules provides the highest quality and meets the standards
					adjusted to your needs. Choose the one you like.
				</p>
				<div className="flex flex-col justrify-between h-full gap-10">
					<p className="label font-bold w-[25ch]">
						All Capsules® houses—are built based on the same rules:
					</p>
					<div className="flex flex-wrap text-[45px] leading-10 gap-[0.5vw]">
						{[
							"Sustainable",
							"Nature-Care",
							"Smart",
							"Privacy",
							"Spacious",
							"Glassed-in",
						].map((rule) => (
							<span
								key={rule}
								className=" border-[0.15vw] border-muted rounded-full h-min text-muted px-[1.3vw] py-[0.9vw] main-text even:!text-primary"
							>
								{rule}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
