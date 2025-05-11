import type { PropsWithChildren } from "react";
import { ReactLenis } from "lenis/react";

export default function MomentumScroll({ children }: PropsWithChildren) {
	return <ReactLenis root>{children}</ReactLenis>;
}
