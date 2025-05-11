import Hero from "./components/sections/Hero.tsx";
import Welcome from "./components/sections/Welcome.tsx";
import ChooseCapsule from "./components/sections/ChooseCapsule.tsx";

function App() {
	return (
		<main className="bg-background">
			<Hero titlePosition="top-left" />
			<Welcome />
			<ChooseCapsule />
		</main>
	);
}

export default App;
