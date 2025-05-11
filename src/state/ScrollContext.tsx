import {
	createContext,
	type Dispatch,
	type PropsWithChildren,
	type SetStateAction,
	useState,
} from "react";

type ScrollContext = {
	isScrolling: boolean;
	setIsScrolling: Dispatch<SetStateAction<boolean>> | null;
};

export const ScrollContext = createContext<ScrollContext>({
	isScrolling: false,
	setIsScrolling: null,
});

export function ScrollProvider({ children }: PropsWithChildren) {
	const [isScrolling, setIsScrolling] = useState(false);

	return (
		<ScrollContext.Provider value={{ isScrolling, setIsScrolling }}>
			{children}
		</ScrollContext.Provider>
	);
}
