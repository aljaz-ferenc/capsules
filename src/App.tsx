import Hero from "./components/sections/Hero.tsx";
import Welcome from "./components/sections/Welcome.tsx";

function App() {
	return (
		<main className="bg-background">
			<Hero titlePosition="top-left" />
			<Welcome />
		</main>
	);
}

export default App;
