import RevealSectionTitle from "../animations/RevealSectionTitle.tsx";

export default function ChooseCapsule() {
	return (
		<section className="px-5 mb-[50px]">
			<RevealSectionTitle
				title="Choose the one you like best"
				subtitle="Discover available Capsules®"
			/>
			<div className="flex flex-col">
				<p className="main-text text-muted mt-5">
					You can choose one of three premium capsule houses in our offer. Each
					of our capsules provides the highest quality and meets the standards
					adjusted to your needs. Choose the one you like.
				</p>
				<div className="flex flex-col justrify-between h-full ">
					<p className="label mt-[50px] w-[25ch]">
						All Capsules® houses—are built based on the same rules:
					</p>
					<div className="flex flex-wrap gap-[7px] mt-[30px]">
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
								className="main-text !text-[20px] px-5 py-3 border-[2px] border-muted rounded-full text-muted even:border-primary even:!text-primary"
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
