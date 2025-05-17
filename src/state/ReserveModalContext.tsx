import {
	createContext,
	type Dispatch,
	type PropsWithChildren,
	type SetStateAction,
	useState,
} from "react";

type ReserveModalContextType = {
	setReserveModalIsOpen: Dispatch<SetStateAction<boolean>> | null;
	reserveModalIsOpen: boolean;
};

export const ReserveModalContext = createContext<ReserveModalContextType>({
	setReserveModalIsOpen: null,
	reserveModalIsOpen: false,
});

export function ReserveModalProvider({ children }: PropsWithChildren) {
	const [reserveModalIsOpen, setReserveModalIsOpen] = useState(false);

	return (
		<ReserveModalContext.Provider
			value={{ setReserveModalIsOpen, reserveModalIsOpen }}
		>
			{children}
		</ReserveModalContext.Provider>
	);
}
