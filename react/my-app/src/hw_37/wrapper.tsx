import { ReactNode } from "react"
import { Header } from "./header";
import { Body } from "./body";

type Props = { children?: ReactNode }

export const Wrapper = (props: Props) => (
    <div className="wrapper">
        {/* <Header></Header> */}
        <Body></Body>
        {props.children}
    </div>
);
