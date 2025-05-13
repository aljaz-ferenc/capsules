import type { PropsWithChildren } from "react";
import { ReactLenis } from "lenis/react";

export default function MomentumScroll({ children }: PropsWithChildren) {
	if (innerWidth < 768) return children;
	return <ReactLenis root>{children}</ReactLenis>;
}
