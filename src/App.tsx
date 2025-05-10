import Welcome from "./components/sections/Welcome.tsx";
import Introduction from "./components/sections/Introduction.tsx";
import Houses from "./components/sections/Houses.tsx";
import Capsules from "./components/sections/Capsules.tsx";
import MomentumScroll from "./components/shared/MomentumScroll.tsx";
import ReserveModal from "./components/shared/ReserveModal.tsx";
import {
	createContext,
	type Dispatch,
	type SetStateAction,
	use,
	useState,
} from "react";
import { AnimatePresence } from "motion/react";
import Header from "./components/shared/Header.tsx";
import Benefits from "./components/sections/Benefits.tsx";
import DiscoverActivities from "./components/sections/DiscoverActivities.tsx";
import Reviews from "./components/sections/Reviews.tsx";
import BookCapsule from "./components/sections/BookCapsule.tsx";
import Links from "./components/sections/Links.tsx";
import Footer from "./components/sections/Footer.tsx";
import { motion } from "motion/react";
import { ScrollContext } from "./state/ScrollContext.tsx";

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
	const { isScrolling, setIsScrolling } = use(ScrollContext);
	if (!setIsScrolling) return;

	return (
		<MomentumScroll>
			<ReserveContext.Provider
				value={{ isOpen: reserveModalIsOpen, setIsOpen: setReserveModalIsOpen }}
			>
				<motion.main
					animate={{ opacity: isScrolling ? 0 : 1 }}
					onAnimationComplete={() => setIsScrolling(false)}
					transition={{ duration: 0.5 }}
					className="bg-background text-white relative"
				>
					<Header />
					<Welcome titlePosition="top-left" />
					<Introduction />
					<Houses />
					<Capsules />
					<AnimatePresence mode="wait">
						{reserveModalIsOpen && <ReserveModal />}
					</AnimatePresence>
					<Benefits />
					<DiscoverActivities />
					<Reviews />
					<Welcome titlePosition="center" />
					<BookCapsule />
					<Links />
					<hr className="text-primary" />
					<Footer />
				</motion.main>
			</ReserveContext.Provider>
		</MomentumScroll>
	);
}

export default App;
