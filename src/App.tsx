import Welcome from "./components/sections/Welcome.tsx";
import Introduction from "./components/sections/Introduction.tsx";
import Houses from "./components/sections/Houses.tsx";
import Capsules from "./components/capsules/Capsules.tsx";
import MomentumScroll from "./components/shared/MomentumScroll.tsx";
import ReserveModal from "./components/shared/ReserveModal.tsx";
import {
	createContext,
	type Dispatch,
	type SetStateAction,
	useState,
} from "react";
import { AnimatePresence } from "motion/react";
import Header from "./components/shared/Header.tsx";

type ReserveContext = {
	isOpen: boolean | null;
	setIsOpen: Dispatch<SetStateAction<boolean>> | null;
};

export const ReserveContext = createContext<ReserveContext>({
	isOpen: null,
	setIsOpen: null,
});

function App() {
	const [reserveModalIsOpen, setReserveModalIsOpen] = useState(false);

	return (
		<MomentumScroll>
			<ReserveContext.Provider
				value={{ isOpen: reserveModalIsOpen, setIsOpen: setReserveModalIsOpen }}
			>
				<main className="bg-[#181717] text-white relative">
					<Header />
					<Welcome />
					<Introduction />
					<Houses />
					<Capsules />
					<AnimatePresence mode="wait">
						{reserveModalIsOpen && <ReserveModal />}
					</AnimatePresence>
				</main>
			</ReserveContext.Provider>
		</MomentumScroll>
	);
}

export default App;
