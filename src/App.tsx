import Hero from "./components/sections/Hero.tsx";
import Welcome from "./components/sections/Welcome.tsx";
import ChooseCapsule from "./components/sections/ChooseCapsule.tsx";
import Location from "./components/sections/Location.tsx";
import WhyCapsules from "./components/sections/WhyCapsules.tsx";
import Activities from "./components/sections/Activities.tsx";
import Reviews from "./components/sections/Reviews.tsx";
import Footer from "./components/sections/Footer.tsx";
import { ScrollProvider } from "./state/ScrollContext.tsx";
import MomentumScroll from "./components/shared/MomentumScroll.tsx";

function App() {
	return (
		<MomentumScroll>
			<main className="bg-background md:p-[0.4vw]">
				<ScrollProvider>
					<Hero />
					<Welcome />
					<ChooseCapsule />
					<Location />
					<WhyCapsules />
					<Activities />
					<Reviews />
					<Footer />
				</ScrollProvider>
			</main>
		</MomentumScroll>
	);
}

export default App;
