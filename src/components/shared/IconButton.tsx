import { useMemo } from "react";
import {
	IconBehance,
	IconDribble,
	IconInstagram,
	IconLeft,
	IconLinkedIn,
	IconRight,
} from "../icons.tsx";

export type Icons =
	| "linkedIn"
	| "instagram"
	| "dribble"
	| "behance"
	| "arrow-right"
	| "arrow-left";

type IconButtonProps = {
	icon: Icons;
	onClick?: () => void;
	href?: string;
	height?: string | number;
	padding?: string | number;
};

export default function IconButton({
	icon,
	onClick,
	href,
	height = "44px",
	padding = "0",
}: IconButtonProps) {
	const iconComponent = useMemo(() => {
		switch (icon) {
			case "linkedIn":
				return <IconLinkedIn />;
			case "instagram":
				return <IconInstagram />;
			case "dribble":
				return <IconDribble />;
			case "behance":
				return <IconBehance />;
			case "arrow-left":
				return <IconLeft />;
			case "arrow-right":
				return <IconRight />;
		}
	}, [icon]);

	if (href) {
		return (
			<a
				href={href}
				className="relative aspect-square rounded-full border border-muted [&_path]:fill-muted group hover:[&_path]:fill-secondary transition-all cursor-pointer"
				style={{ height, padding }}
			>
				<span className="z-10 relative">{iconComponent}</span>
				<div className="absolute inset-0 bg-muted scale-0 group-hover:scale-100 transition rounded-full" />
			</a>
		);
	}

	return (
		<button
			onClick={onClick}
			type="button"
			className="relative aspect-square rounded-full border border-muted duration-300 [&_path]:fill-muted group hover:[&_path]:fill-secondary transition-all cursor-pointer"
			style={{ height, padding }}
		>
			<div className="z-10 relative transition-all duration-300 p-2">
				{iconComponent}
			</div>
			<div className="absolute inset-0 bg-muted scale-0 group-hover:scale-100 transition duration-300 rounded-full" />
		</button>
	);
}
