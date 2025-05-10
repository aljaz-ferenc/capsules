import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ScrollProvider } from "./state/ScrollContext.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ScrollProvider>
			<App />
		</ScrollProvider>
	</StrictMode>,
);
