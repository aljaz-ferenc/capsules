import type { PropsWithChildren, ReactNode } from "react";
import type React from "react";
import ReactQueryProvider from "./ReactQueryProvider.tsx";
import { ScrollProvider } from "../state/ScrollContext.tsx";

type ProviderProps = {} & PropsWithChildren;

const composeProviders = (providers: React.FC<{ children: ReactNode }>[]) => {
	if (!providers?.length) {
		return ({ children }: { children?: ReactNode }) => children;
	}

	return providers.reduce((Prev, Curr) => ({ children }) => {
		if (Prev) {
			return (
				<Prev>
					<Curr>{children}</Curr>
				</Prev>
			);
		}

		return <Curr>{children}</Curr>;
	});
};

const Providers = composeProviders([ReactQueryProvider, ScrollProvider]);

export default function Provider({ children }: ProviderProps) {
	return <Providers>{children}</Providers>;
}
