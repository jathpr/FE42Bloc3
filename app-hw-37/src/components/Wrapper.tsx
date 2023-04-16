import { ReactNode } from "react";

export const Wrapper = (props: { children: ReactNode }) => (
	<div>
		{props.children}
	</div>
)