import IconButton, { type Icons } from "./IconButton.tsx";
import { cn } from "../../utils/utils.ts";

const socials: { icon: Icons; href: string }[] = [
	{ icon: "instagram", href: "#" },
	{ icon: "linkedIn", href: "#" },
	{ icon: "dribble", href: "#" },
	{ icon: "behance", href: "#" },
];

type SocialLinksProps = {
	className?: string;
};

export default function SocialLinks({ className = "" }: SocialLinksProps) {
	return (
		<div className={cn("flex justify-start items-center", className)}>
			{socials.map((icon) => (
				<IconButton
					height={54}
					padding={7}
					key={icon.icon}
					icon={icon.icon}
					className="socialBtn hover:[&_path]:!fill-[#181717] duration-300 transition"
				/>
			))}
		</div>
	);
}
