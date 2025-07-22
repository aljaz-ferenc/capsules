import { useEffect } from "react";

export default function useLockScroll(shouldLock: boolean) {
	useEffect(() => {
		if (shouldLock) {
			document.body.style.overflow = "hidden";
			document.body.setAttribute("data-lenis-prevent", "true");
		} else {
			document.body.style.overflow = "auto";
		}
	}, [shouldLock]);
}
