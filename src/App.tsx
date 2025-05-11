import Hero from "./components/sections/Hero.tsx";
import Welcome from "./components/sections/Welcome.tsx";
import ChooseCapsule from "./components/sections/ChooseCapsule.tsx";
import Capsules from "./components/sections/Capsules.tsx";
import Location from "./components/sections/Location.tsx";

function App() {
	return (
		<main className="bg-background">
			<Hero titlePosition="top-left" />
			<Welcome />
			<div className="bg-gradient-to-b from-transparent via-darkBrown to-transparent">
				<ChooseCapsule />
				<Capsules />
			</div>
			<Location />
		</main>
	);
}

export default App;
