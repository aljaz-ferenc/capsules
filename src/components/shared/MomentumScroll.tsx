import { type PropsWithChildren, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function MomentumScroll({ children }: PropsWithChildren) {
	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.03,
		});

		const raf = (time: number) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);
	}, []);

	return <>{children}</>;
}
