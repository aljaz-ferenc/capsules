import {
	createContext,
	type Dispatch,
	type PropsWithChildren,
	type SetStateAction,
	useState,
} from "react";

type ReserveContext = {
	isOpen: boolean | null;
	setIsOpen: Dispatch<SetStateAction<boolean>> | null;
};

export const ReserveContext = createContext<ReserveContext>({
	isOpen: null,
	setIsOpen: null,
});

export default function ReserveContextProvider({
	children,
}: PropsWithChildren) {
	const [reserveModalIsOpen, setReserveModalIsOpen] = useState(false);

	return (
		<ReserveContext.Provider
			value={{ isOpen: reserveModalIsOpen, setIsOpen: setReserveModalIsOpen }}
		>
			{children}
		</ReserveContext.Provider>
	);
}
