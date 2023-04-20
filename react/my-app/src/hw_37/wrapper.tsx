import { ReactNode } from "react"
import { Header } from "./Header";
import { Body } from "./Body";

type Props = { children?: ReactNode }

export const Wrapper = (props: Props) => (
    <div className="wrapper">
        <Header></Header>
        <Body></Body>
        {props.children}
    </div>
);
