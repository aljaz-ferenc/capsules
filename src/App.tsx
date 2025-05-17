import Hero from "./components/sections/Hero.tsx";
import Welcome from "./components/sections/Welcome.tsx";
import ChooseCapsule from "./components/sections/ChooseCapsule.tsx";
import Location from "./components/sections/Location.tsx";
import WhyCapsules from "./components/sections/WhyCapsules.tsx";
import Activities from "./components/sections/Activities.tsx";
import Reviews from "./components/sections/Reviews.tsx";
import Footer from "./components/sections/Footer.tsx";
import { ScrollContext } from "./state/ScrollContext.tsx";
import MomentumScroll from "./components/shared/MomentumScroll.tsx";
import Header from "./components/Header.tsx";
import Menu from "./components/menu/Menu.tsx";
import { AnimatePresence, motion } from "motion/react";
import { use } from "react";
import ReserveModal from "./components/ReserveModal.tsx";
import { ReserveModalContext } from "./state/ReserveModalContext.tsx";

function App() {
	const { isScrolling, setIsScrolling } = use(ScrollContext);
	const { setReserveModalIsOpen, reserveModalIsOpen } =
		use(ReserveModalContext);

	if (!setIsScrolling) return;

	return (
		<MomentumScroll>
			<main className="bg-background relative">
				<Menu setReserveModalIsOpen={setReserveModalIsOpen} />
				<motion.div
					animate={{ opacity: isScrolling ? 0 : 1 }}
					onAnimationComplete={() => setIsScrolling(false)}
					transition={{ duration: 0.5 }}
				>
					<AnimatePresence>
						{reserveModalIsOpen && <ReserveModal />}
					</AnimatePresence>
					<Header setReserveModalIsOpen={setReserveModalIsOpen} />
					<Hero />
					<Welcome />
					<ChooseCapsule />
					<Location />
					<WhyCapsules />
					<Activities />
					<Reviews />
					<Footer />
				</motion.div>
			</main>
		</MomentumScroll>
	);
}

export default App;
