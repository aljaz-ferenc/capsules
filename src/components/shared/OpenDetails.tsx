import { motion } from "motion/react";
import { useState } from "react";
import data from "../../data/capsulesDetails.ts";

type PlusButtonProps = {
	isVisible: boolean;
	text: string;
	calspule: "classic" | "terrace" | "desert";
};

const textDelay = 0.9;
const bgDelay = 0.4;
const duration = 0.4;

export default function OpenDetails({
	isVisible,
	text,
	calspule,
}: PlusButtonProps) {
	const [showDetails, setShowDetails] = useState(false);
	const [ctaHovered, setCtaHovered] = useState(false);

	return (
		<div>
			<motion.div
				animate={{
					opacity: isVisible ? 1 : 0,
					transition: { duration: 1 },
				}}
				className="flex-col  absolute bottom-14.5 left-5 items-center"
			>
				<motion.div className=" relative overflow-hidden w-[540px]  mb-5 h-[786px]">
					{/*BACKGROUND*/}
					<motion.div
						className="absolute origin-bottom-left rounded-[60px]  bg-[#2a2725] z-10 w-full h-full"
						animate={{
							scale: showDetails ? 1 : 0,
							transition: { duration: bgDelay, ease: "easeInOut" },
						}}
					/>

					{/*CONTENT*/}
					<div className="relative z-20 p-5 flex flex-col gap-7 h-full">
						<motion.div
							animate={{
								opacity: showDetails ? 1 : 0,
								transition: { duration, delay: textDelay },
							}}
							className="flex justify-between items-center mx-5 mt-5"
						>
							<div>
								<h3 className="text-[48px] leading-12">Details</h3>
								<span className="text-[18px]">({data[calspule].title})</span>
							</div>
							<div>
								<img
									src="classic.webp"
									alt=""
									className="w-[160px] rounded-[20px]"
								/>
							</div>
						</motion.div>
						<motion.p
							animate={{
								opacity: showDetails ? 1 : 0,
								transition: { duration, delay: textDelay },
							}}
							className="text-[18px] text-[#b1a696] mx-5 leading-6"
						>
							{data[calspule].description}
						</motion.p>
						<motion.div
							animate={{
								opacity: showDetails ? 1 : 0,
								transition: { duration, delay: textDelay },
							}}
							className="text-[18px] mx-5"
						>
							{data[calspule].features.map((feature, index) => (
								<div key={feature.label}>
									{index !== 0 && <hr className="my-3 text-[#b1a696]" />}
									<div className="flex justify-between">
										<label htmlFor="">{feature.label}</label>
										<p>{feature.value}</p>
									</div>
								</div>
							))}
						</motion.div>
						<motion.button
							animate={{
								opacity: showDetails ? 1 : 0,
								transition: { duration, delay: textDelay },
							}}
							onMouseEnter={() => setCtaHovered(true)}
							onMouseLeave={() => setCtaHovered(false)}
							className="self-start mx-5 hover:text-[#b1a696] overflow-hidden relative text-[18px] transition cursor-pointer"
							type="button"
						>
							Ready to reserve?
							<motion.div
								initial={{ scaleX: 1 }}
								animate={{ scaleX: ctaHovered ? 0 : 1 }}
								style={{ originX: ctaHovered ? 1 : 0 }}
								transition={{ duration, ease: "easeOut" }}
								className="absolute bottom-0.5 left-0 w-full h-px bg-white"
							/>
						</motion.button>
						<div className="mt-auto justify-self-end flex relative justify-between text-[18px] p-7 py-8">
							<motion.div
								className="bg-[#181717] absolute origin-left inset-0 rounded-full"
								animate={{
									width: showDetails ? "100%" : "0%",
									opacity: showDetails ? 1 : 0,
									transition: { duration, delay: bgDelay },
								}}
							/>
							<motion.div
								animate={{
									opacity: showDetails ? 1 : 0,
									transition: { duration, delay: textDelay },
								}}
								className="z-10"
							>
								Cost
							</motion.div>
							<motion.div
								animate={{
									opacity: showDetails ? 1 : 0,
									transition: { duration, delay: textDelay },
								}}
								className="z-10"
							>
								{data[calspule].price}USD / night
							</motion.div>
						</div>
					</div>
				</motion.div>
				<div className="flex gap-8">
					<motion.button
						animate={{ rotate: showDetails ? "90deg" : 0 }}
						onClick={() => setShowDetails((prev) => !prev)}
						type="button"
						className="z-10 group cursor-pointer relative  overflow-hidden bg-[#b1a696] h-13 text-[50px] font-[100] leading-0  grid place-items-center aspect-square rounded-full"
					>
						{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="@w-[20] z-20"
						>
							<rect
								width="22"
								height="2"
								transform="matrix(-1 8.42937e-08 8.42937e-08 1 23 11)"
								fill="rgba(42, 39, 37, 1)"
							/>
							<rect
								width="22"
								height="2"
								transform="translate(12.999 0.999512) rotate(90)"
								fill="rgba(42, 39, 37, 1)"
							/>
						</svg>
						<div className="bg-white absolute top-1/2 left-1/2 -translate-1/2 group-hover:w-full group-hover:h-full duration-300 rounded-full transition-all  w-0 h-0" />
					</motion.button>
					<motion.p
						className="font-bold w-[60ch]"
						animate={{ x: isVisible ? 0 : 30, transition: { duration: 0.5 } }}
					>
						{text}
					</motion.p>
				</div>
			</motion.div>

			{/*OVERLAY*/}
			{/*<motion.div*/}
			{/*	animate={{ opacity: showDetails ? 0.9 : 0 }}*/}
			{/*	className="absolute inset-0 bg-[#181717]  w-screen h-screen"*/}
			{/*/>*/}
		</div>
	);
}
