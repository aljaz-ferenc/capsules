import { cn } from "../../utils/utils.ts";

export default function ItemNumber({
	total,
	current,
	className = "",
}: { total: number; current: number; className?: string }) {
	return (
		<div className={cn(["flex items-end", className])}>
			<span className="border-[2px] border-primary px-[11px] py-1 grid place-items-center rounded-full">
				{current.toString().padStart(2, "0")}
			</span>
			<span className="opacity-20 border-[2px] border-primary px-[11px] py-1 grid place-items-center rounded-full">
				{total.toString().padStart(2, "0")}
			</span>
		</div>
	);
}
