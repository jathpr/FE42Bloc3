import { ReactNode } from "react"
import { Header } from "./Header";
import { Body } from "./Body";


type Props = { children?: ReactNode }

export const Wrapper = (props: Props) => {

    return (
        <div className="wrapper">
            <Header />
            <Body />
            {props.children}
        </div>
    );
}
