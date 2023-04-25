import React from "react";

type Props = {
    onReg: (login: string, password: string) => void
}

export class Registration extends React.Component<Props> {
    state = {
        login: '',
        password: ''
    }

    handleReg = () => {
        this.props.onReg(this.state.login, this.state.password)
    }

    render() {
        return (
            <>
                <input value={this.state.login} onChange={(el) => {
                    this.setState({ login: el.target.value })
                }} />
                <input value={this.state.password} onChange={(el) => {
                    this.setState({ password: el.target.value })
                }} />
                <button onClick={this.handleReg}>Registration</button>
            </>
        )
    }
}