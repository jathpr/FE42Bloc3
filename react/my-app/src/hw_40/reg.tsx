import React from "react";

type Props = {
    onReg: (login: string, pass: string) => void
}

export class Reg extends React.Component<Props> {
    state = {
        login: "",
        pass: ""
    }

    handleReg = () => {
        this.props.onReg(this.state.login, this.state.pass)
    }

    render(): React.ReactNode {
        return (
            <>
                <input value={this.state.login} onChange={(e) => {
                    this.setState({ login: e.target.value })
                }} />
                <input value={this.state.pass} onChange={(e) => {
                    this.setState({ pass: e.target.value })
                }} />
                <button onClick={this.handleReg}>reg</button>
            </>
        )
    }
}
