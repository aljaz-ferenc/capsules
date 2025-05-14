export type Link = {
	title: string;
	scrollToId: string;
};

export const links: Link[] = [
	{ title: "Welcome", scrollToId: "welcome" },
	{ title: "Introduction", scrollToId: "introduction" },
	{ title: "Houses", scrollToId: "houses" },
	{ title: "Why Capsules®", scrollToId: "whyCapsules" },
	{ title: "Activities", scrollToId: "activities" },
	{ title: "Feedback", scrollToId: "reviews" },
] as const;
