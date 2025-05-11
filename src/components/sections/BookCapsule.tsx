import InfiniteScrollText from "../shared/InfiniteScrollText.tsx";

export default function BookCapsule() {
	return (
		<div className="mt-[5vw]">
			<div className="text-[16px] px-5">
				<p>Interested in an amazing adventure?</p>
				<p>Reserve one of our Capsules®</p>
			</div>
			<InfiniteScrollText
				duration={80}
				opacity={1}
				word="Book your Capsule-"
				className="bg-background"
			/>
		</div>
	);
}
