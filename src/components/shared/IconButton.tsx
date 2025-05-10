import {
	IconBehance,
	IconDribble,
	IconInstagram,
	IconLinkedIn,
} from "../../data/icons.tsx";
import { useMemo } from "react";

export type Icons = "linkedIn" | "instagram" | "dribble" | "behance";

type IconButtonProps = {
	icon: Icons;
	onClick?: () => void;
	href?: string;
};

export default function IconButton({ icon, onClick, href }: IconButtonProps) {
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
		}
	}, [icon]);

	if (href) {
		return (
			<a
				href={href}
				className="relative -scale-x-100 h-10 w-10 rounded-full border border-muted p-2.5 [&_path]:fill-muted group hover:[&_path]:fill-secondary transition-all cursor-pointer"
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
			className="relative -scale-x-100 h-10 w-10 rounded-full border border-muted duration-300 p-2.5 [&_path]:fill-muted group hover:[&_path]:fill-secondary transition-all cursor-pointer"
		>
			<span className="z-10 relative transition-all duration-300">
				{iconComponent}
			</span>
			<div className="absolute inset-0 bg-muted scale-0 group-hover:scale-100 transition duration-300 rounded-full" />
		</button>
	);
}
