import type { PropsWithChildren, ReactNode } from "react";

type MainButtonProps = {
	icon: ReactNode;
	activeText?: string;
	onClick?: () => void;
};

export default function MainButton({
	children,
	icon,
	onClick,
}: PropsWithChildren<MainButtonProps>) {
	return (
		<button
			type="button"
			onClick={onClick}
			className="bg-white h-[52px] rounded-[50px] p-[3px] flex justify-center items-center cursor-pointer group"
		>
			<div className="ml-[22px] text-darkBrown text-[14px] overflow-hidden mr-[15px] mb-[1px] relative w-full">
				<div className="w-full group-hover:-translate-y-full transition duration-300 ease-in-out">
					{children}
				</div>
				<div className="absolute w-full group-hover:-translate-y-full transition duration-300 ease-in-out">
					{children}
				</div>
			</div>
			<div className="h-full aspect-square bg-darkBrown rounded-full p-[15px]">
				{icon}
			</div>
		</button>
	);
}
