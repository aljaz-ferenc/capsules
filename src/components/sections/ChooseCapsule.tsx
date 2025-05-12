import RevealSectionTitle from "../animations/RevealSectionTitle.tsx";
import ChooseCapsuleDesktop from "../chose-capsule/ChooseCapsuleDesktop.tsx";
import ChooseCapsuleMobile from "./ChooseCapsuleMobile.tsx";

export default function ChooseCapsule() {
	return (
		<>
			<section className="px-5 mb-[50px] bg-gradient-to-b from-transparent via-darkBrown to-transparent">
				<RevealSectionTitle
					title="Choose the one you like best"
					subtitle="Discover available ChooseCapsuleMobile®"
				/>
				<div className="flex flex-col md:flex-row md:items-center mb-[60px]">
					<p className="main-text text-muted mt-5 md:w-1/2 md:pr-[5vw] md:mt-0">
						You can choose one of three premium capsule houses in our offer.
						Each of our capsules provides the highest quality and meets the
						standards adjusted to your needs. Choose the one you like.
					</p>
					<div className="flex flex-col justrify-between h-full md:w-1/2">
						<p className="label mt-[50px] w-[25ch] md:mt-0">
							All ChooseCapsuleMobile® houses—are built based on the same rules:
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
									className="main-text !text-[20px] md:!text-[2.7vw] px-5 py-3 border-[2px] border-muted rounded-full text-muted even:border-primary even:!text-primary"
								>
									{rule}
								</span>
							))}
						</div>
					</div>
				</div>
			</section>
			<ChooseCapsuleDesktop />
			<ChooseCapsuleMobile />
		</>
	);
}
