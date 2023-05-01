import { ReactNode } from "react"
import { Header } from "./header";
import { Body } from "./body";

type Props = { children?: ReactNode }

export const Wrapper = (props: Props) => {


    // StyleSheet

    return (
        <div className="wrapper">
            <Header />
            <Body />
            {props.children}
        </div>
    );
}
