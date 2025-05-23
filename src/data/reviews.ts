type User = {
	name: string;
	location: string;
	image: string;
};

export type Review = {
	user: User;
	id: number;
	review: string;
};

export const reviews: Review[] = [
	{
		user: {
			name: "Marcus Simpson",
			location: "New York",
			image: "marcus.webp",
		},
		id: 1,
		review:
			"Staying at Capsules in the California desert redefined my retreat - modern design meets nature, and every sunset feels like a serene masterpiece.",
	},
	{
		user: {
			name: "Lena Morrison",
			location: "Los Angeles",
			image: "lena.webp",
		},
		id: 2,
		review:
			"Capsules offered the perfect escape - modern spaces surrounded by desert stillness. Each moment felt peaceful, grounded, and truly unique.",
	},
	{
		user: {
			name: "Jason Whitaker",
			location: "San Francisco",
			image: "jason.webp",
		},
		id: 3,
		review:
			"Capsules was the perfect desert hideaway - stylish, peaceful, and fully surrounded by stunning views day and night.",
	},
];
