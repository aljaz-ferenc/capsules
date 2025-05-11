import Hero from "./components/sections/Hero.tsx";
import Welcome from "./components/sections/Welcome.tsx";
import ChooseCapsule from "./components/sections/ChooseCapsule.tsx";
import Capsules from "./components/sections/Capsules.tsx";
import Location from "./components/sections/Location.tsx";
import WhyCapsules from "./components/sections/WhyCapsules.tsx";
import Activities from "./components/sections/Activities.tsx";
import Reviews from "./components/sections/Reviews.tsx";
import Footer from "./components/sections/Footer.tsx";
import { ScrollProvider } from "./state/ScrollContext.tsx";

function App() {
	return (
		<main className="bg-background">
			<ScrollProvider>
				<Hero />
				<Welcome />
				<div className="bg-gradient-to-b from-transparent via-darkBrown to-transparent">
					<ChooseCapsule />
					<Capsules />
				</div>
				<Location />
				<WhyCapsules />
				<Activities />
				<Reviews />
				<Footer />
			</ScrollProvider>
		</main>
	);
}

export default App;
