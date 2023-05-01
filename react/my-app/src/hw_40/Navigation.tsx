import React from "react";
import { Reg } from "./reg";

export class Navigation extends React.Component {
    state = {
        page: "Reg",
        user: {
            login: null,
            pass: null
        }
    }

    onReg = (login: string, pass: string) => {
        if (!login) return
        if (!pass) return
        this.setState({ user: { login, pass }, page: "main" })
    }

    // <Reg />
    render() {
        return <>
            {this.state.page === "Reg" && <Reg onReg={this.onReg} />}
            {this.state.page === "main" && <span>ok</span>}
        </>
    }
}
